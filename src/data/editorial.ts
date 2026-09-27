import quotes from "./quotes.json";
import { quoteCommentary } from "./quote-commentary";
import { quoteVerification } from "./quote-verification";

/**
 * Who stands behind the archive, and how to reach them.
 *
 * The bio states the role and nothing else: do not add credentials that were
 * not supplied. When `editor` is set, the About page shows the byline and the
 * Organization schema names the founder; when `contactEmail` is set, the
 * correction route appears on About and the editorial policy, and the schema
 * gains a contactPoint.
 */
export type Editor = {
  name: string;
  /** One or two sentences, in the third person. */
  bio: string;
  /** Profiles that identify the same person (ORCID, university page, LinkedIn). */
  sameAs?: string[];
};

export const editor: Editor | undefined = {
  name: "kyree",
  bio: "Maintains Philosophy Blind Box and the source records in this archive.",
};
export const contactEmail: string | undefined = "kyreemeng@gmail.com";

/** Live counts, so the About page cannot overstate how much has been checked. */
export function corpusStatus() {
  const verified = quotes.filter((quote) => quoteVerification[quote.id.toUpperCase()]).length;
  const annotated = quotes.filter(
    (quote) =>
      !quoteVerification[quote.id.toUpperCase()] && quoteCommentary[quote.id.toUpperCase()],
  ).length;
  return {
    total: quotes.length,
    verified,
    annotated,
    recorded: quotes.length - verified - annotated,
    thinkers: new Set(quotes.map((quote) => quote.author)).size,
  };
}

/**
 * Public corrections log. Every change to an attribution, locator, or wording
 * that a reader could have relied on is listed here with its date.
 */
export const corrections: { date: string; page: string; change: string }[] = [
  {
    date: "2026-09-27",
    page: "/quotes/q0112",
    change:
      "Nietzsche, “One must still have chaos in oneself…”: locator corrected from Zarathustra Part I, “On the Way of the Creator,” to the Prologue, §5.",
  },
  {
    date: "2026-09-27",
    page: "/quotes/q0450",
    change:
      "Nietzsche, “Was that life? Well then! Once more!”: previously a paraphrase attributed to The Gay Science §341. Replaced with the verbatim line and its source, Zarathustra Part III, “On the Vision and the Riddle,” §1.",
  },
  {
    date: "2026-09-27",
    page: "/quotes/q0222",
    change:
      "Plato, “First, it always is, and neither comes to be nor perishes”: Stephanus locator corrected from Symposium 211b to 211a.",
  },
  {
    date: "2026-09-27",
    page: "/quotes/q0070",
    change:
      "Nietzsche, “What does not kill me makes me stronger”: a second entry for the same aphorism (formerly Q0426) was merged into this one, which records the short form as a circulating variant.",
  },
];
