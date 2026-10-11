/**
 * Key-term attachment for thinker pages.
 *
 * Theme co-occurrence alone hangs Greek technical vocabulary on Confucius and
 * Song–Ming terms on Nietzsche. Terms are attached by (1) an explicit map for
 * well-known thinkers, then (2) a language/tradition filter derived from the
 * thinker's school labels, and only then by theme overlap inside that filter.
 * Crossing a language family without an explicit map is refused.
 */

import {
  conceptForSlug,
  concepts,
  type Concept,
} from "./concept-glossary";
import { slugify } from "../lib/content";

/**
 * Hand-curated concept slugs for thinkers whose theme tags would otherwise
 * pull the wrong traditional vocabulary. Slugs must exist in the glossary.
 */
export const THINKER_CONCEPT_SLUGS: Record<string, string[]> = {
  confucius: ["ren", "li", "junzi", "zhongyong", "cheng"],
  mencius: ["ren", "xin-and-xing", "qi", "junzi"],
  xunzi: ["li", "junzi", "xin-and-xing"],
  zengzi: ["ren", "cheng", "junzi"],
  laozi: ["dao", "de", "wu-wei", "ziran"],
  zhuangzi: ["dao", "wu-wei", "ziran", "qi"],
  mozi: ["ren", "li"],
  "wang-yangming": ["xin-and-xing", "li", "cheng"],
  "zhu-xi": ["li", "xin-and-xing", "cheng"],
  "friedrich-nietzsche": ["amor-fati", "ubermensch", "ressentiment"],
  "marcus-aurelius": ["prohairesis", "logos", "ataraxia", "oikeiosis"],
  epictetus: ["prohairesis", "ataraxia", "logos"],
  seneca: ["prohairesis", "ataraxia", "logos"],
  aristotle: ["arete", "eudaimonia", "phronesis", "akrasia", "telos", "logos"],
  plato: ["episteme-and-doxa", "elenchus", "aporia", "logos", "arete", "telos"],
  socrates: ["elenchus", "aporia", "episteme-and-doxa", "phronesis"],
  "rene-descartes": ["res-cogitans-res-extensa", "a-priori-a-posteriori"],
  spinoza: ["conatus", "sub-specie-aeternitatis"],
  "immanuel-kant": ["a-priori-a-posteriori"],
};

/** Normalise glossary language labels into match families. */
function languageFamily(language: string): string {
  const lower = language.toLowerCase();
  if (lower.includes("greek")) return "greek";
  if (lower.includes("latin")) return "latin";
  if (lower.includes("chinese") || lower.includes("pinyin")) return "chinese";
  if (lower.includes("sanskrit") || lower.includes("pali")) return "sanskrit";
  if (lower.includes("japanese")) return "japanese";
  if (lower.includes("arabic")) return "arabic";
  if (lower.includes("hebrew")) return "hebrew";
  if (lower.includes("german")) return "german";
  if (lower.includes("french")) return "french";
  if (lower.includes("nguni") || lower.includes("bantu") || lower.includes("african"))
    return "africana";
  return lower;
}

/**
 * Which glossary language families a school label may draw from. Returning
 * null means "no automatic attachment" — better empty Key terms than wrong ones.
 */
export function languageFamiliesForSchool(school: string): string[] | null {
  const s = school.toLowerCase();
  if (/confucian|daoism|taoism|mohism|legalism|modern chinese|neo-confucian/.test(s))
    return ["chinese"];
  if (/zen|chan|kyoto/.test(s)) return ["japanese", "chinese", "sanskrit"];
  if (/platon|peripatetic|epicurean|cynic|pythagorean|presocratic|pre-socratic|stoic/.test(s))
    return ["greek", "latin"];
  if (/sceptic|skeptic|neoplaton/.test(s)) return ["greek", "latin"];
  if (/scholastic|thomist|augustin/.test(s)) return ["latin"];
  if (/rationalism|cartesian/.test(s)) return ["latin", "french", "greek"];
  if (/empiricism|analytic|pragmatism/.test(s)) return ["latin", "greek"];
  if (/german idealism|phenomenolog|hermeneut/.test(s)) return ["german", "latin", "greek"];
  if (/existential|absurdist|genealogy|vitalism|nihilism/.test(s))
    return ["german", "latin", "french", "greek"];
  if (/islamic|kalam|sufi/.test(s)) return ["arabic", "greek"];
  if (/jewish/.test(s)) return ["hebrew", "latin", "greek", "arabic"];
  if (/africana|ubuntu/.test(s)) return ["africana", "french"];
  if (/hindu|vedanta|buddhist|theravada|mahayana/.test(s)) return ["sanskrit", "pali", "chinese"];
  if (/business/.test(s)) return null;
  return null;
}

function conceptsFromSlugs(slugs: string[]): Concept[] {
  return slugs
    .map((slug) => conceptForSlug(slug))
    .filter((concept): concept is Concept => Boolean(concept));
}

/**
 * Key terms for a thinker page: explicit map first, then language-filtered
 * theme overlap. Never returns cross-tradition theme co-occurrence alone.
 */
export function conceptsForThinker(
  input: {
    name: string;
    schools: string[];
    themes: string[];
  },
  limit = 6,
): Concept[] {
  const slug = slugify(input.name);
  const explicit = THINKER_CONCEPT_SLUGS[slug];
  if (explicit?.length) {
    return conceptsFromSlugs(explicit).slice(0, limit);
  }

  const families = new Set<string>();
  let anyMapped = false;
  for (const school of input.schools) {
    const mapped = languageFamiliesForSchool(school);
    if (mapped) {
      anyMapped = true;
      for (const family of mapped) families.add(family);
    }
  }
  if (!anyMapped || families.size === 0) return [];

  const wanted = new Set(input.themes);
  const inFamily = concepts.filter((concept) =>
    families.has(languageFamily(concept.language)),
  );

  const themed = inFamily.filter((concept) =>
    concept.themes.some((theme) => wanted.has(theme)),
  );
  if (themed.length > 0) return themed.slice(0, limit);

  // No theme overlap inside the family: still prefer same-tradition terms over
  // silence for major vocabularies, but never cross families.
  return inFamily.slice(0, limit);
}
