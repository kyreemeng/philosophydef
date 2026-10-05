import { createHash } from "node:crypto";

/**
 * What a sitemap lastmod hash covers.
 *
 * Astro content-hashes asset filenames, so hashed `/_astro/` names are
 * flattened: otherwise one global.css edit dates all 1200 pages to the same day.
 *
 * JSON-LD and icon/manifest links are removed. Neither is read by a visitor,
 * both come from the shared layout, and a schema or favicon fix would otherwise
 * have the same site-wide effect.
 *
 * Whitespace is collapsed, because a template edit that only moves an empty
 * conditional block reshuffles it on every page that uses the template.
 *
 * The site chrome (navigation, footer) is removed too. It used to stay in, on
 * the reasoning that a nav change does alter what every reader sees. That was
 * wrong in practice: adding two links to the Learn group on 2026-10-01 changed
 * the HTML of all 691 quotation pages, which advanced every stored lastmod to
 * that single day and told Google the whole archive had been rewritten at once.
 * That is the same signal that dropped the site out of the results on 2026-08-16
 * (1,164 URLs re-dated to one day after the v5 corpus landed). A nav or footer
 * edit is a site change, not a content change, and lastmod describes content.
 *
 * Changing this function changes every stored hash. Re-baseline with
 * `node scripts/rebaseline-sitemap-hashes.mjs` before the next build, or every
 * URL will read as updated today.
 */
export function hashInput(html) {
  return html
    .replace(/\/_astro\/[^"'\s>]+?\.([a-z]+)/g, "/_astro/asset.$1")
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, "")
    .replace(/<link rel="(?:icon|apple-touch-icon|manifest)"[^>]*>/g, "")
    .replace(/<header class="site-header">[\s\S]*?<\/header>/g, "")
    .replace(/<footer class="site-footer">[\s\S]*?<\/footer>/g, "")
    .replace(/>\s+</g, "><")
    .replace(/\s+/g, " ");
}

/**
 * Share of a page's visible words that differ between two builds.
 *
 * A hash answers "did anything change". It cannot answer "did the writing
 * change", and on 2026-10-01 that distinction was the whole problem: two deploys
 * re-dated all 691 quotation pages at once, which is the signal that dropped
 * the site out of the results. Stripping the chrome did not fix it, because
 * those deploys also injected real markup into every page's body — a work link
 * in the source record, the original-language field, the verification-level
 * explainer. A few hundred characters, identical on every page, on 691 pages.
 *
 * So the build measures the size of the change too. Measured against the same
 * history, a template touch lands at 1-2% and a batch that really did write new
 * prose (2026-08-30 added interpretations to 614 pages) lands at 12-38%.
 */
export function textChangeRatio(before, after) {
  const words = (html) =>
    new Set(
      hashInput(html)
        .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/g, " ")
        .replace(/<[^>]+>/g, " ")
        .replace(/&[a-z#0-9]+;/gi, " ")
        .split(/\s+/)
        .filter(Boolean),
    );

  const a = words(before);
  const b = words(after);
  if (a.size === 0 && b.size === 0) return 0;
  let shared = 0;
  for (const word of a) if (b.has(word)) shared += 1;
  return 1 - shared / Math.max(a.size, b.size);
}

/**
 * A short fingerprint of a page's content vocabulary.
 *
 * The build has to decide "template touch or content edit" on the next run, but
 * it no longer has last run's HTML — only the manifest, which is checked in and
 * must stay small. Storing the previous page text would roughly triple the
 * manifest to megabytes. A fingerprint of the page's repeated words costs a few
 * dozen bytes and separates the two cases, because the decision only needs to
 * tell "a few words differ" from "this page was rewritten".
 *
 * Two details matter, both found by testing against the deploys in this repo's
 * history rather than by reasoning:
 *
 * Only words occurring at least twice are counted. A page's hapax legomena are
 * mostly names, numerals and punctuation fragments; a template that rewrites a
 * byline changes several of them at once while leaving the writing untouched.
 * Including them made a four-word brand rename read as a 9% change.
 *
 * A plain SimHash was tried and rejected. It weights every distinct word
 * equally and is therefore dominated by exactly those rare words — it reported
 * the same rename as 9.4% and would have re-dated the whole archive. Counting
 * only repeated words puts the rename at 1.2% and real rewrites at 26-54%, which
 * either side of a 5% threshold with room to spare.
 */
export function vocabularyProfile(html) {
  const counts = new Map();
  for (const word of hashInput(html)
    .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .split(/\s+/)) {
    if (word) counts.set(word, (counts.get(word) ?? 0) + 1);
  }

  const repeated = [...counts.entries()]
    .filter(([, n]) => n >= 2)
    .map(([word]) => word)
    .sort();

  // The first hundred in alphabetical order, not an even sample across the
  // list. A sample taken with a stride compares different words on each build
  // and reads a two-word brand rename as a 90% change; a fixed alphabetical
  // prefix compares like with like, which is the entire point.
  return { count: repeated.length, sample: repeated.slice(0, 100) };
}

export function vocabularyChangeRatio(before, after) {
  if (!before?.sample || !after?.sample) return 1;
  if (before.count === after.count && before.sample === after.sample) return 0;

  const a = new Set(before.sample);
  const b = new Set(after.sample);
  if (a.size === 0 && b.size === 0) return 0;

  let shared = 0;
  for (const word of a) if (b.has(word)) shared += 1;

  // The sample is capped, so scale the measured overlap by the full sizes to
  // keep a page that grew a lot of new vocabulary from looking unchanged.
  const sizeRatio = Math.max(before.count, after.count) /
    Math.max(1, Math.min(before.count, after.count));
  const measured = 1 - shared / Math.max(a.size, b.size);

  // Cap the size effect: a page that gained 200 words of new material has been
  // edited, but not necessarily rewritten.
  return Math.min(1, Math.max(measured, 1 - 1 / sizeRatio));
}

export function pageHash(html) {
  return createHash("sha1").update(hashInput(html)).digest("hex");
}
