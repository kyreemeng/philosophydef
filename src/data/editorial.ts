import quotes from "./quotes.json";
import { verificationLevelFor } from "../lib/verification";

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
  const levels = { "original-checked": 0, "edition-checked": 0, annotated: 0, recorded: 0 };
  for (const quote of quotes) {
    levels[verificationLevelFor(quote)] += 1;
  }
  return {
    total: quotes.length,
    thinkers: new Set(quotes.map((quote) => quote.author)).size,
    // Per-level counts, in VERIFICATION_LEVEL_ORDER. Every page that states
    // how much of the archive is checked reads these numbers, so the homepage,
    // About, and the editorial policy cannot drift apart.
    levels,
    originalChecked: levels["original-checked"],
    editionChecked: levels["edition-checked"],
    annotated: levels.annotated,
    recorded: levels.recorded,
    // Backwards-compatible aggregates: “checked” counts every passage taken to
    // a cited edition; “verified” is the same thing under the old name.
    checked: levels["original-checked"] + levels["edition-checked"],
    get verified() {
      return this.checked;
    },
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
