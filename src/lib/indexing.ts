import { themeGuideFor, thinkerGuideFor } from "../data/enrichment";
import type { Quote } from "./content";

export const MIN_INDEXABLE_THEME_QUOTES = 4;
export const MIN_INDEXABLE_THINKER_QUOTES = 2;
export const MIN_INDEXABLE_PAIR_QUOTES = 4;

export function shouldIndexTheme(theme: { name: string; quotes: Quote[] }) {
  return (
    theme.name !== "Philosophy" &&
    theme.quotes.length >= MIN_INDEXABLE_THEME_QUOTES &&
    Boolean(themeGuideFor(theme.name))
  );
}

export function shouldIndexThinker(thinker: { name: string; quotes: Quote[] }) {
  return (
    thinker.quotes.length >= MIN_INDEXABLE_THINKER_QUOTES &&
    Boolean(thinkerGuideFor(thinker.name))
  );
}

export function shouldIndexThinkerThemePair(pair: {
  author: string;
  theme: string;
  quotes: Quote[];
}) {
  return (
    pair.quotes.length >= MIN_INDEXABLE_PAIR_QUOTES &&
    Boolean(thinkerGuideFor(pair.author)) &&
    Boolean(themeGuideFor(pair.theme))
  );
}
