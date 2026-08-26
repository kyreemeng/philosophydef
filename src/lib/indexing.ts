import { themeGuideFor, thinkerGuideFor } from "../data/enrichment";
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

export function shouldIndexTheme(theme: { name: string; quotes: Quote[] }) {
  return (
    theme.name !== "Philosophy" &&
    (theme.quotes.length >= MIN_INDEXABLE_THEME_QUOTES ||
      hasObservedThemeDemand(slugify(theme.name))) &&
    Boolean(themeGuideFor(theme.name))
  );
}

export function shouldIndexThinker(thinker: { name: string; quotes: Quote[] }) {
  return (
    hasObservedThinkerDemand(slugify(thinker.name)) ||
    (thinker.quotes.length >= MIN_INDEXABLE_THINKER_QUOTES &&
      Boolean(thinkerGuideFor(thinker.name)))
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
  return (
    hasSearchDemand ||
    (pair.quotes.length >= MIN_INDEXABLE_PAIR_QUOTES &&
      Boolean(thinkerGuideFor(pair.author)) &&
      Boolean(themeGuideFor(pair.theme)))
  );
}
