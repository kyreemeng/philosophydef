import quotes from "../data/quotes.json";
import themeMerge from "../data/theme-merge.json";
import { quoteSeoOverrides } from "../data/seo-overrides";

export type Quote = (typeof quotes)[number];

const caseMap = themeMerge.caseMap as Record<string, string>;
const thinMerges = themeMerge.thinMerges as Record<string, string>;
const keepThemes = new Set(themeMerge.keepThemes as string[]);

/** Characters that do not decompose under NFKD into base+combining marks. */
const SLUG_TRANSLIT: Record<string, string> = {
  æ: "ae",
  Æ: "ae",
  ø: "o",
  Ø: "o",
  å: "a",
  Å: "a",
  ð: "d",
  Ð: "d",
  þ: "th",
  Þ: "th",
  ß: "ss",
  ł: "l",
  Ł: "l",
  đ: "d",
  Đ: "d",
};

export function slugify(value: string) {
  const transliterated = value.replace(
    /[æÆøØåÅðÐþÞßłŁđĐ]/g,
    (ch) => SLUG_TRANSLIT[ch] ?? ch,
  );
  return transliterated
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Broken historical thinker slugs → corrected paths (GSC-indexed). */
export function thinkerSlugRedirects(): Record<string, string> {
  return {
    "/thinkers/s-ren-kierkegaard": "/thinkers/soren-kierkegaard",
    "/thinkers/s-ren-kierkegaard/self": "/thinkers/soren-kierkegaard/self",
  };
}

/** Map any raw theme label to a publishable canonical theme. */
export function canonicalizeTheme(theme: string): string {
  const cased = caseMap[theme] ?? theme;
  if (keepThemes.has(cased)) return cased;
  return thinMerges[cased] ?? "Philosophy";
}

export function themeSlug(theme: string) {
  return slugify(canonicalizeTheme(theme));
}

/** Link target for a theme; the generic fallback belongs on the theme hub. */
export function themePath(theme: string) {
  const canonical = canonicalizeTheme(theme);
  return canonical === "Philosophy"
    ? "/themes"
    : `/themes/${slugify(canonical)}`;
}

export function thinkerGroups() {
  const groups = new Map<string, Quote[]>();
  for (const quote of quotes) {
    const existing = groups.get(quote.author) ?? [];
    existing.push(quote);
    groups.set(quote.author, existing);
  }
  return [...groups.entries()]
    .map(([name, items]) => ({
      name,
      slug: slugify(name),
      quotes: items,
    }))
    .sort((a, b) => b.quotes.length - a.quotes.length);
}

export function themeGroups() {
  const groups = new Map<string, Quote[]>();
  for (const quote of quotes) {
    const seen = new Set<string>();
    for (const theme of quote.themes) {
      const canonical = canonicalizeTheme(theme);
      if (seen.has(canonical)) continue;
      seen.add(canonical);
      const existing = groups.get(canonical) ?? [];
      existing.push(quote);
      groups.set(canonical, existing);
    }
  }
  return [...groups.entries()]
    .map(([name, items]) => ({
      name,
      slug: slugify(name),
      quotes: items,
    }))
    .filter((theme) => keepThemes.has(theme.name))
    .sort((a, b) => b.quotes.length - a.quotes.length);
}

/** Old thin/duplicate theme slugs → canonical theme path. */
export function themeRedirects(): Record<string, string> {
  const redirects: Record<string, string> = {
    // Philosophy is the fallback classification, not a useful landing page.
    "/themes/philosophy": "/themes",
  };
  const allRaw = new Set<string>();
  for (const quote of quotes) {
    for (const theme of quote.themes) allRaw.add(theme);
  }
  for (const raw of allRaw) {
    const fromSlug = slugify(raw);
    const fromPath = `/themes/${fromSlug}`;
    const toPath = themePath(raw);
    if (fromPath !== toPath) {
      redirects[fromPath] = toPath;
    }
  }
  // case-map only variants where slug already matched after lowercasing
  for (const [from, to] of Object.entries(caseMap)) {
    const fromSlug = slugify(from);
    const fromPath = `/themes/${fromSlug}`;
    const toPath = themePath(to);
    if (fromPath !== toPath) {
      redirects[fromPath] = toPath;
    }
  }
  return redirects;
}

export function truncateWords(text: string, maxWords: number) {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text.trim();
  return `${words.slice(0, maxWords).join(" ")}…`;
}

const BRAND = "Philosophy Blind Box";
/**
 * Google renders roughly the first 60 characters of a title on desktop before
 * truncating with an ellipsis. A title that fits is read in full and earns more
 * clicks than a richer one that gets cut off, so every generated title is
 * measured and clipped to fit rather than assembled at whatever length results.
 */
const TITLE_BUDGET = 60;

/**
 * Longest run of leading words (plus an ellipsis) that still fits the budget.
 * Falls back to three words when even that overflows, because a title with no
 * passage at all is indistinguishable from every other page about the thinker.
 */
function fitQuoteSnippet(text: string, budget: number) {
  const words = text.trim().split(/\s+/);
  if (words.join(" ").length <= budget) return words.join(" ");
  for (let count = words.length - 1; count >= 3; count -= 1) {
    const candidate = `${words.slice(0, count).join(" ")}…`;
    if (candidate.length <= budget) return candidate;
  }
  return `${words.slice(0, 3).join(" ")}…`;
}

/**
 * Collision detection has to compare the strings that will actually be
 * rendered, not a fixed word count. Truncating to fit means two different
 * passages by the same thinker can collapse to the same short opening —
 * several Confucius entries all begin "The Master said…" — and checking a
 * longer excerpt would miss the collision the reader actually sees.
 */
function snippetCollides(
  quote: Quote,
  snippet: string,
  available: number,
) {
  return quotes.some(
    (other) =>
      other.id !== quote.id &&
      other.author === quote.author &&
      fitQuoteSnippet(other.text, available) === snippet,
  );
}

export function quoteTitle(quote: Quote) {
  const override = quoteSeoOverrides[quote.id.toLowerCase()];
  if (override?.title) return override.title;

  const suffix = `” | ${BRAND}`;

  /**
   * Builds a title from a label (bare author, or author + theme) and returns
   * it only if no sibling passage renders the same string. When it does
   * collide, the archive ID is appended to the author: a title that overruns
   * 60 characters is a small cosmetic loss, whereas two pages sharing a title
   * invite a duplicate-content judgement that costs the page its ranking.
   */
  const assemble = (label: string) => {
    const prefix = `${label}: “`;
    const available = TITLE_BUDGET - prefix.length - suffix.length;
    const snippet = fitQuoteSnippet(quote.text, available);
    if (!snippetCollides(quote, snippet, available)) {
      return `${prefix}${snippet}${suffix}`;
    }
    const disambiguated = `${quote.author} (${quote.id})`;
    const collisionPrefix = `${disambiguated}: “`;
    const collisionAvailable =
      TITLE_BUDGET - collisionPrefix.length - suffix.length;
    return `${collisionPrefix}${fitQuoteSnippet(quote.text, collisionAvailable)}${suffix}`;
  };

  // Theme words win the "philosophy quotes about X" intent seen in Search
  // Console, but they cost characters. Use them only when there is still room
  // for a meaningful excerpt; otherwise the passage itself earns more clicks.
  const theme = canonicalizeTheme(quote.themes[0] ?? "Philosophy");
  const themeLabel = `${quote.author} on ${theme}`;
  const themePrefix = `${themeLabel}: “`;
  const themeAvailable =
    TITLE_BUDGET - themePrefix.length - suffix.length;
  if (themeAvailable >= 18) {
    return assemble(themeLabel);
  }
  return assemble(quote.author);
}

export function quoteDescription(quote: Quote) {
  const override = quoteSeoOverrides[quote.id.toLowerCase()];
  if (override?.description) return override.description.slice(0, 160);

  const theme = canonicalizeTheme(quote.themes[0] ?? "Philosophy").toLowerCase();
  // Every branch carries the brand-neutral "read in context" close: it tells
  // the searcher the page offers surrounding material rather than a bare
  // one-line quotation, which is the main reason to click over a scraper site.
  const source =
    quote.source && quote.source !== "Tradition"
      ? ` Source: ${quote.source}.`
      : "";
  const open = `${quote.author} quote on ${theme}.${source} “${truncateWords(quote.text, 16)}”`;
  const close = ` Read the passage in context with related ${theme} quotations.`;
  return `${open}${close}`.slice(0, 155);
}

export function quoteHeading(quote: Quote) {
  const override = quoteSeoOverrides[quote.id.toLowerCase()];
  if (override?.h1) return override.h1;
  const snippet = truncateWords(quote.text, 12);
  if (quote.source && quote.source !== "Tradition") {
    return `“${snippet}” — ${quote.author} (${truncateWords(quote.source, 6)})`;
  }
  return `“${snippet}” — ${quote.author} (${quote.id})`;
}

export function relatedByAuthor(quote: Quote, limit = 5) {
  return quotes
    .filter((item) => item.author === quote.author && item.id !== quote.id)
    .slice(0, limit);
}

export function relatedByTheme(quote: Quote, limit = 5) {
  const primary = canonicalizeTheme(quote.themes[0] ?? "Philosophy");
  return quotes
    .filter((item) => {
      if (item.id === quote.id) return false;
      return item.themes.some((theme) => canonicalizeTheme(theme) === primary);
    })
    .slice(0, limit);
}

export function adjacentQuotes(quote: Quote) {
  const index = quotes.findIndex((item) => item.id === quote.id);
  const prev = index > 0 ? quotes[index - 1] : quotes[quotes.length - 1];
  const next = index < quotes.length - 1 ? quotes[index + 1] : quotes[0];
  return { prev, next };
}

export function thinkerThemePairs(minQuotes = 2) {
  const map = new Map<
    string,
    {
      author: string;
      authorSlug: string;
      theme: string;
      themeSlug: string;
      quotes: Quote[];
    }
  >();

  for (const quote of quotes) {
    const seen = new Set<string>();
    for (const raw of quote.themes) {
      const theme = canonicalizeTheme(raw);
      if (theme === "Philosophy") continue;
      const key = `${quote.author}:::${theme}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const existing = map.get(key);
      if (existing) existing.quotes.push(quote);
      else {
        map.set(key, {
          author: quote.author,
          authorSlug: slugify(quote.author),
          theme,
          themeSlug: themeSlug(theme),
          quotes: [quote],
        });
      }
    }
  }

  return [...map.values()].filter((pair) => pair.quotes.length >= minQuotes);
}

export function citationFormats(quote: Quote) {
  const year = "n.d.";
  const url = `https://www.philosophydef.com/quotes/${quote.id.toLowerCase()}`;
  return {
    apa: `${quote.author}. (${year}). ${quote.text} In Philosophy Blind Box. ${url}`,
    mla: `${quote.author}. “${truncateWords(quote.text, 8)}.” Philosophy Blind Box, ${url}.`,
    chicago: `${quote.author}. “${truncateWords(quote.text, 8)}.” Philosophy Blind Box. Accessed ${new Date().getFullYear()}. ${url}.`,
  };
}
