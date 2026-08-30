import {
  isTextTradition,
  themeGuideFor,
  thinkerGuideFor,
} from "../data/enrichment";
import {
  hasObservedThemeDemand,
  hasObservedThinkerDemand,
  hasObservedThinkerThemeDemand,
  isLegacyIndexableQuoteId,
} from "../data/search-priorities";
import { slugify, type Quote } from "./content";

export const MIN_INDEXABLE_THEME_QUOTES = 10;
export const MIN_INDEXABLE_THINKER_QUOTES = 4;
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

export function shouldIndexQuote(quote: Pick<Quote, "id">) {
  return isLegacyIndexableQuoteId(quote.id);
}

export function shouldIndexThinkerThemePair(pair: {
  author: string;
  theme: string;
  quotes: Quote[];
}) {
  const hasSearchDemand = hasObservedThinkerThemeDemand(
    slugify(pair.author),
    slugify(pair.theme),
  );
  if (hasSearchDemand) return true;

  // Same exemption as above: a text has no biography to gate on, so the theme
  // guide and the passage count are what determine whether the page holds up.
  if (isTextTradition(pair.author)) {
    return (
      pair.quotes.length >= MIN_INDEXABLE_PAIR_QUOTES &&
      Boolean(themeGuideFor(pair.theme))
    );
  }

  return (
    pair.quotes.length >= MIN_INDEXABLE_PAIR_QUOTES &&
    Boolean(thinkerGuideFor(pair.author)) &&
    Boolean(themeGuideFor(pair.theme))
  );
}
