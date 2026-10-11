/**
 * Soft boundaries between academic philosophy and peripheral corpora.
 *
 * Founder / business writing can be sourced carefully and still belong in a
 * separate namespace from Stoicism, Confucianism, and the rest of the archive's
 * reference graph. Keeping those records out of the main thinker directory,
 * reference hub, quote adjacency chain, and Organization.knowsAbout list is
 * what stops Google (and a careful reader) from treating Peter Thiel as a peer
 * of Socrates in this site's entity graph.
 */

export const PERIPHERAL_SCHOOLS = new Set(["Philosophy of Business"]);

export const PERIPHERAL_AUTHORS = new Set(["Peter Thiel"]);

/** Guide slugs that stay published but leave the academic reference nav. */
export const PERIPHERAL_GUIDE_SLUGS = new Set([
  "peter-thiel-business-philosophy-quotes",
]);

export function isPeripheralSchool(school: string) {
  return PERIPHERAL_SCHOOLS.has(school);
}

export function isPeripheralAuthor(author: string) {
  return PERIPHERAL_AUTHORS.has(author);
}

export function isPeripheralQuote(quote: { author: string; school: string }) {
  return isPeripheralAuthor(quote.author) || isPeripheralSchool(quote.school);
}

export function isPeripheralGuideSlug(slug: string) {
  return PERIPHERAL_GUIDE_SLUGS.has(slug);
}
