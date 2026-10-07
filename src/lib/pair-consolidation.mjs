/**
 * Thinker x theme pair consolidation.
 *
 * A pair page ("/thinkers/plato/love") lists passages that already have their
 * own quotation page, their thinker page, and their theme page. The page body is
 * largely one shared author paragraph with the theme name substituted, so a
 * thinker filed under eleven themes publishes eleven pages that differ where the
 * theme word appears and in which two or three passages they list.
 *
 * Search Console reports the result as crawled-but-not-indexed. The 2026-10-07
 * Coverage drill-down lists 95 of the 124 pair pages under "Crawled - currently
 * not indexed", and same-thinker pairs are near-copies: their 8-gram overlap
 * reaches 0.61, and 13 of them hold a passage set that is a strict subset of a
 * sibling page of the same thinker.
 *
 * When a pair page holds passages that a sibling pair of the same thinker
 * already lists in full, the smaller page is a duplicate and is retired to the
 * sibling rather than published twice.
 *
 * Two exemptions protect a page from retirement, both drawn from the same
 * drill-down: a path with observed search demand, and any path Google did not
 * list as held back (it either indexed the page or left it alone, and demoting
 * an indexed URL to resolve a duplicate would trade one problem for a worse
 * one).
 *
 * This module deliberately imports nothing: `src/lib/indexing.ts` (built by
 * Astro) and `scripts/generate-vercel-redirects.mjs` (run by bare node) share
 * it, so indexability and the redirect table cannot drift apart.
 */

export function slugify(value) {
  const translit = {
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
  return value
    .replace(/[æÆøØåÅðÐþÞßłŁđĐ]/g, (ch) => translit[ch] ?? ch)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Every thinker x theme combination with the passages filed under it. Mirrors
 * `thinkerThemePairs()` in `src/lib/content.ts`, which cannot be imported here
 * because it loads JSON the way a bundler expects rather than the way bare node
 * does.
 */
export function pairPassages(quotes, merge) {
  const { caseMap = {}, thinMerges = {}, keepThemes = [] } = merge ?? {};
  const keep = new Set(keepThemes);
  const canonicalize = (theme) => {
    const cased = caseMap[theme] ?? theme;
    return keep.has(cased) ? cased : (thinMerges[cased] ?? "Philosophy");
  };

  const pairs = new Map();
  for (const quote of quotes) {
    const seen = new Set();
    for (const raw of quote.themes) {
      const theme = canonicalize(raw);
      if (theme === "Philosophy") continue;
      const key = `${quote.author}:::${theme}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const existing = pairs.get(key);
      if (existing) existing.quotes.push(quote);
      else {
        pairs.set(key, {
          authorSlug: slugify(quote.author),
          themeSlug: slugify(theme),
          quotes: [quote],
        });
      }
    }
  }
  return [...pairs.values()];
}

export const pairPath = (pair) =>
  `/thinkers/${pair.authorSlug}/${pair.themeSlug}`;

/**
 * Duplicate retirement for the pair family.
 *
 *   kept       pair paths that survive consolidation
 *   redirects  `from path -> to path` for duplicates, pointing at a survivor
 *
 * Only pages the existing gate would publish are considered — a theme with
 * observed search demand, or `minPassages` or more. Within that set, a page
 * whose passages are all listed on a sibling pair of the same thinker is a
 * duplicate by definition and is removed.
 *
 * Redirecting rather than dropping matters because these URLs are already in
 * Google's crawl set: a URL that stops resolving is a coverage error, while one
 * that answers with a redirect is retired cleanly.
 *
 * The keeper for each author is chosen deterministically — a URL Google
 * already accepted first, then most passages, then a theme with observed
 * demand, then slug order — so the redirect table is stable across builds.
 */
export function pairConsolidationPlan({
  quotes,
  merge,
  demandPaths = [],
  acceptedPaths = [],
  minPassages = 4,
}) {
  const demand = new Set(demandPaths);
  const accepted = new Set(acceptedPaths);

  const candidates = pairPassages(quotes, merge)
    .filter(
      (pair) =>
        demand.has(pairPath(pair)) || pair.quotes.length >= minPassages,
    )
    .sort(
    (a, b) =>
      Number(accepted.has(pairPath(b))) - Number(accepted.has(pairPath(a))) ||
      b.quotes.length - a.quotes.length ||
      Number(demand.has(pairPath(b))) - Number(demand.has(pairPath(a))) ||
      a.themeSlug.localeCompare(b.themeSlug),
  );

  const kept = new Set();
  const redirects = new Map();
  const keptByAuthor = new Map();
  for (const pair of candidates) {
    const from = pairPath(pair);
    const ids = new Set(pair.quotes.map((quote) => quote.id));
    const siblings = keptByAuthor.get(pair.authorSlug) ?? [];

    // Already published in full on a sibling pair of the same thinker: this
    // page is a duplicate, so its URL is consolidated into the survivor.
    const owner = siblings.find((sibling) =>
      [...ids].every((id) => sibling.ids.has(id)),
    );
    if (owner) {
      redirects.set(from, owner.path);
      continue;
    }

    kept.add(from);
    siblings.push({ path: from, ids });
    keptByAuthor.set(pair.authorSlug, siblings);
  }

  return { kept, redirects };
}
