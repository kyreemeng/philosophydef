/**
 * The Work layer: one canonical page per philosophical work.
 *
 * The corpus always recorded which work a passage comes from, but the site's
 * structure jumped straight from Thinker to Quote. That left the book-shaped
 * queries — “Meditations quotes”, “Nicomachean Ethics quotes”, “Tao Te Ching
 * quotes” — to competitors, and it left the archive's own best data (the
 * works-cited registry with its original titles, locators, translators, and
 * edition notes) with no page of its own to live on.
 *
 * A work page is only built where the registry holds a record AND the corpus
 * holds at least MIN_PUBLISHED_WORK_QUOTES passages for it. The registry
 * record is what makes the page more than a list: canonical title,
 * original-language title, composition date, translator, and the locator
 * system a reader needs to check any passage in any edition. Works that do not
 * clear the bar are not built at all rather than built thin — a Work page is
 * a reference document, and a reference document with two passages and no
 * locator guidance is a URL the archive would have to disown later.
 */

import quotes from "../data/quotes.json";
import { works, type WorkRecord } from "../data/source-registry";
import { resolveSource } from "./citation";
import { slugify, type Quote } from "./content";
import { verificationLevelFor } from "./verification";

export const MIN_PUBLISHED_WORK_QUOTES = 3;
export const MIN_INDEXABLE_WORK_QUOTES = 4;

export type WorkEntry = {
  work: WorkRecord;
  slug: string;
  path: string;
  quotes: Quote[];
  /** Corpus authors whose passages are filed under this work. */
  authors: string[];
};

function buildWorkEntries(): WorkEntry[] {
  const byTitle = new Map<string, Quote[]>();
  for (const quote of quotes) {
    const resolved = resolveSource(quote.source);
    if (!resolved.work) continue;
    const existing = byTitle.get(resolved.work.title) ?? [];
    existing.push(quote);
    byTitle.set(resolved.work.title, existing);
  }

  const entries: WorkEntry[] = [];
  for (const work of works) {
    const workQuotes = byTitle.get(work.title);
    if (!workQuotes?.length) continue;
    const slug = slugify(work.title);
    entries.push({
      work,
      slug,
      path: `/works/${slug}`,
      quotes: workQuotes,
      authors: [...new Set(workQuotes.map((quote) => quote.author))],
    });
  }
  return entries.sort((a, b) => b.quotes.length - a.quotes.length);
}

const allEntries = buildWorkEntries();

/** Registry-backed works with enough passages to publish a page for. */
export function workEntries(): WorkEntry[] {
  return allEntries.filter((entry) => entry.quotes.length >= MIN_PUBLISHED_WORK_QUOTES);
}

/** A work page is offered to search when it clears the indexable bar. */
export function shouldIndexWork(entry: WorkEntry) {
  return entry.quotes.length >= MIN_INDEXABLE_WORK_QUOTES;
}

/** Duplicate slugs would silently overwrite a page, so the build refuses them. */
export function assertNoWorkSlugCollision() {
  const seen = new Map<string, string>();
  for (const entry of workEntries()) {
    const existing = seen.get(entry.slug);
    if (existing) {
      throw new Error(
        `Two works resolve to /works/${entry.slug}: “${existing}” and “${entry.work.title}”.`,
      );
    }
    seen.set(entry.slug, entry.work.title);
  }
}

const publishedByTitle = new Map(
  workEntries().map((entry) => [entry.work.title, entry]),
);

/**
 * The published work page for a passage, when one exists. Deliberately the
 * published set, not every registry match: a quote whose work has two
 * passages in the corpus must not link a page that was never built.
 */
export function workForQuote(quote: Pick<Quote, "source">): WorkEntry | undefined {
  const resolved = resolveSource(quote.source);
  if (!resolved.work) return undefined;
  return publishedByTitle.get(resolved.work.title);
}

const pathByWorkTitle = new Map(
  workEntries().map((entry) => [entry.work.title, entry.path]),
);

/**
 * The /works path for a work title as citations print it, or undefined when no
 * page is published. Citation strings are normalised through resolveSource so
 * a raw corpus source ("Meditations IV.3") and a bare title ("Meditations")
 * land on the same entry.
 */
export function workPathForTitle(title: string): string | undefined {
  const resolved = resolveSource(title);
  if (!resolved.work) return undefined;
  return pathByWorkTitle.get(resolved.work.title);
}

/**
 * The strongest verification level reached by any passage of a work, phrased
 * for the work page's own status line: a work page says what its strongest
 * record shows rather than repeating per-passage detail.
 */
export function workVerificationSummary(entry: WorkEntry) {
  const originalChecked = entry.quotes.filter(
    (quote) => verificationLevelFor(quote) === "original-checked",
  ).length;
  const editionChecked = entry.quotes.filter(
    (quote) => verificationLevelFor(quote) === "edition-checked",
  ).length;
  return { originalChecked, editionChecked };
}
