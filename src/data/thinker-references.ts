/**
 * External scholarly references for a thinker, plus the fallback that covers
 * everyone else.
 *
 * The sourcing-method page says the archive checks against critical editions,
 * SEP, and IEP — but that claim only earned trust when a reader could see the
 * references on the page they were reading. Direct entry URLs are used for the
 * thinkers the archive is most read for, because a references section that
 * makes a reader search again is a references section that did not do its
 * work; every other thinker falls back to the encyclopedias' own search
 * endpoints, which always resolve.
 */

export type ThinkerReferences = {
  /** Stanford Encyclopedia of Philosophy entry. */
  sep?: string;
  /** Internet Encyclopedia of Philosophy entry. */
  iep?: string;
};

const sep = (slug: string) => `https://plato.stanford.edu/entries/${slug}/`;
const iep = (slug: string) => `https://iep.utm.edu/${slug}/`;

const curated: Record<string, ThinkerReferences> = {
  Socrates: { sep: sep("socrates"), iep: iep("socrates") },
  Plato: { sep: sep("plato"), iep: iep("plato") },
  Aristotle: { sep: sep("aristotle"), iep: iep("aristotle") },
  "Friedrich Nietzsche": { sep: sep("nietzsche"), iep: iep("nietzsche") },
  "Marcus Aurelius": { sep: sep("marcus-aurelius"), iep: iep("marcus-aurelius") },
  Seneca: { sep: sep("seneca"), iep: iep("seneca") },
  Epictetus: { sep: sep("epictetus"), iep: iep("epictetu") },
  Confucius: { sep: sep("confucius"), iep: iep("confucius") },
  Laozi: { sep: sep("laozi"), iep: iep("laozi") },
  Zhuangzi: { sep: sep("zhuangzi"), iep: iep("zhuangzi") },
  "Søren Kierkegaard": { sep: sep("kierkegaard"), iep: iep("kierkega") },
  "Jean-Paul Sartre": { sep: sep("sartre"), iep: iep("sartre") },
  "Albert Camus": { sep: sep("camus"), iep: iep("camus") },
  "René Descartes": { sep: sep("descartes"), iep: iep("descartes") },
  "Immanuel Kant": { sep: sep("kant"), iep: iep("kant") },
  "David Hume": { sep: sep("hume"), iep: iep("hume") },
  "G. W. F. Hegel": { sep: sep("hegel"), iep: iep("hegel") },
  "Ludwig Wittgenstein": { sep: sep("wittgenstein"), iep: iep("wittgens") },
  "Arthur Schopenhauer": { sep: sep("schopenhauer"), iep: iep("schopenhauer") },
  "Simone de Beauvoir": { sep: sep("beauvoir"), iep: iep("simone-de-beauvoir") },
};

const SEP_SEARCH = "https://plato.stanford.edu/search/searcher.py?query=";
const IEP_SEARCH = "https://iep.utm.edu/?s=";

/**
 * References for a thinker. The twenty entries above get direct encyclopedia
 * links; every other name gets the encyclopedias' search endpoints, which is
 * still the right next step for a reader who wants to go further.
 */
export function referencesFor(name: string): ThinkerReferences {
  const curatedEntry = curated[name];
  if (curatedEntry) return curatedEntry;
  const query = encodeURIComponent(name);
  return {
    sep: `${SEP_SEARCH}${query}`,
    iep: `${IEP_SEARCH}${query}`,
  };
}
