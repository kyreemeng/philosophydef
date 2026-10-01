/**
 * The archive's verification vocabulary, defined once.
 *
 * The homepage used to say “verified English passages”, the About page
 * described three levels, and a quotation page could render “the wording has
 * not yet been checked against an edition” — all at once. That contradiction
 * is a trust problem on the exact axis (verification) the archive claims as
 * its difference, so the levels now live here and every page that names a
 * level — homepage facts, About, editorial policy, the quotation page's own
 * status line — reads them from this module.
 *
 * Four levels, ordered strongest first. The ordering is meaningful: a page
 * never claims a lower rung than the evidence it holds, and the labels are
 * the honest ones — “Edition checked” says what was actually done, not
 * “Verified”, which invites a reader to assume more than the record shows.
 */

import { quoteCommentary } from "../data/quote-commentary";
import { quoteVerification } from "../data/quote-verification";
import type { Quote } from "./content";

export type VerificationLevel =
  | "original-checked"
  | "edition-checked"
  | "annotated"
  | "recorded";

export type VerificationLevelMeta = {
  /** The label every page renders for this level. */
  label: string;
  /** One sentence, used wherever the levels are explained. */
  description: string;
};

export const VERIFICATION_LEVELS: Record<
  VerificationLevel,
  VerificationLevelMeta
> = {
  "original-checked": {
    label: "Original text checked",
    description:
      "Checked against the cited edition, and the wording in the author's own language recorded beside the English.",
  },
  "edition-checked": {
    label: "Edition checked",
    description:
      "Checked against the cited edition, with the circulating variants and the attribution note; no original-language text is recorded in the register yet.",
  },
  annotated: {
    label: "Annotated",
    description:
      "A source locator plus commentary written for the passage; the wording has not yet been collated against an edition.",
  },
  recorded: {
    label: "Recorded",
    description:
      "The English wording and the source as the corpus records them; not yet collated, and kept out of search results until the page carries writing of its own.",
  },
};

/** The order used wherever levels are listed. */
export const VERIFICATION_LEVEL_ORDER: VerificationLevel[] = [
  "original-checked",
  "edition-checked",
  "annotated",
  "recorded",
];

/**
 * The level a quotation has reached, derived from the two registers a page
 * can draw on. The verification register is the stronger evidence, so it wins
 * over commentary; within it, a recorded original-language wording is what
 * separates the top level from edition-checking.
 */
export function verificationLevelFor(
  quote: Pick<Quote, "id">,
): VerificationLevel {
  const id = quote.id.toUpperCase();
  const verification = quoteVerification[id];
  if (verification) {
    return verification.original ? "original-checked" : "edition-checked";
  }
  return quoteCommentary[id] ? "annotated" : "recorded";
}

export function verificationMetaFor(
  quote: Pick<Quote, "id">,
): VerificationLevelMeta {
  return VERIFICATION_LEVELS[verificationLevelFor(quote)];
}
