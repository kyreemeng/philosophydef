import {
  isTextTradition,
  themeGuideFor,
  thinkerGuideFor,
} from "../data/enrichment";
import {
  hasObservedThemeDemand,
  hasObservedThinkerDemand,
  isLegacyIndexableQuoteId,
  observedAcceptedPairPaths,
  observedThinkerThemeDemandPaths,
} from "../data/search-priorities";
import { quoteCommentary } from "../data/quote-commentary";
import { quoteVerification } from "../data/quote-verification";
import { slugify, type Quote } from "./content";
import quotes from "../data/quotes.json";
import themeMerge from "../data/theme-merge.json";
// @ts-expect-error — plain-JS module shared with scripts/generate-vercel-redirects.mjs
import { pairConsolidationPlan } from "./pair-consolidation.mjs";

export const MIN_INDEXABLE_THEME_QUOTES = 10;
export const MIN_INDEXABLE_THINKER_QUOTES = 4;
/**
 * Passage floor for a thinker x theme pair page. The consolidation in
 * `pair-consolidation.mjs` applies the same number, so the two cannot drift.
 */
export const MIN_INDEXABLE_PAIR_QUOTES = 4;
/**
 * Scriptures and classic texts are catalogued as authors so that attribution
 * works the same way everywhere, but they are not people and no biographical
 * guide exists for them. Holding them to the guide rule suppressed pages that
 * hold four or more passages — the Bhagavad Gita page has six and collects
 * internal links from thirty other pages — so those pages were being built,
 * linked, crawled, and then discarded at the noindex tag.
 */
export const MIN_INDEXABLE_TEXT_QUOTES = 3;

export function shouldIndexTheme(theme: { name: string; quotes: Quote[] }) {
  return (
    theme.name !== "Philosophy" &&
    (theme.quotes.length >= MIN_INDEXABLE_THEME_QUOTES ||
      hasObservedThemeDemand(slugify(theme.name))) &&
    Boolean(themeGuideFor(theme.name))
  );
}

export function shouldIndexThinker(thinker: { name: string; quotes: Quote[] }) {
  if (hasObservedThinkerDemand(slugify(thinker.name))) return true;

  // A text's own passages are the substance of its page, so passage count is
  // the only threshold that applies. People still need a guide: without one
  // the page is a bare list and earns a thin-content judgement.
  if (isTextTradition(thinker.name)) {
    return thinker.quotes.length >= MIN_INDEXABLE_TEXT_QUOTES;
  }

  return (
    thinker.quotes.length >= MIN_INDEXABLE_THINKER_QUOTES &&
    Boolean(thinkerGuideFor(thinker.name))
  );
}

/**
 * A quotation page is offered to search only when it carries writing of its
 * own: a verification record or passage-specific commentary. Without either,
 * the page is the passage plus text assembled from its thinker and theme
 * guides, which reads the same across hundreds of URLs.
 *
 * Search Console (3 months to 2026-09-27) measured the difference: the 189
 * pages with their own writing drew 2,166 impressions; the other 503 drew 11
 * between them, while Coverage held 174 URLs as crawled but not indexed.
 *
 * Those pages stay published and linked for readers (noindex, follow). Writing
 * an entry in quote-commentary.ts or quote-verification.ts is what returns a
 * page to the index — there is no list to maintain here.
 */
export function shouldIndexQuote(quote: Pick<Quote, "id">) {
  const id = quote.id.toUpperCase();
  return (
    isLegacyIndexableQuoteId(quote.id) &&
    (Boolean(quoteVerification[id]) || Boolean(quoteCommentary[id]))
  );
}

/**
 * A pair page lists passages that already have their own quotation page, their
 * thinker page, and their theme page. When a sibling pair of the same thinker
 * lists the same passages, the smaller page is a duplicate of the larger one
 * and Search Console reports it as crawled-but-not-indexed. The consolidation
 * rules and the two exemption lists live in `pair-consolidation.mjs`, which the
 * redirect generator shares so routing and indexability cannot disagree.
 */
export function shouldIndexThinkerThemePair(pair: {
  author: string;
  theme: string;
  quotes: Quote[];
}) {
  return keptThinkerThemePairSet().has(
    `/thinkers/${slugify(pair.author)}/${slugify(pair.theme)}`,
  );
}

/**
 * Pair paths offered to search, computed once. The keeper rules and the two
 * exemption lists live in `pair-consolidation.mjs`, which the redirect
 * generator shares so routing and indexability cannot disagree.
 */
let keptPairCache: Set<string> | null = null;
function keptThinkerThemePairSet() {
  if (!keptPairCache) {
    keptPairCache = pairConsolidationPlan({
        quotes,
        merge: themeMerge,
        demandPaths: observedThinkerThemeDemandPaths(),
        acceptedPaths: observedAcceptedPairPaths,
      }).kept;
  }
  return keptPairCache;
}
