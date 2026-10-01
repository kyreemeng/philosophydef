/**
 * Citation construction.
 *
 * Two things were wrong with the citation block the archive used to render.
 *
 * The first was that the formats were not the formats they claimed to be. The
 * APA entry was a run-on sentence with a hard-coded "n.d."; MLA and Chicago
 * both cited this website rather than the text the passage comes from, which is
 * a strange thing for a site whose whole claim is that it tells you where a
 * quotation comes from; and the Chicago entry interpolated the current year at
 * build time, so a purely cosmetic edit to any page changed its content and its
 * sitemap date once a year for no editorial reason.
 *
 * The second is more substantive. A quotation archive that gives you a website
 * citation and no primary-text citation has not answered the question a reader
 * with the sentence in front of them is asking. These pages now give both: the
 * locus in the original work, in the form the discipline uses, and the archive
 * as the container the reader actually consulted. Where the archive knows which
 * translation the English comes from it says so; where it does not, it says
 * that too, because the difference matters when two English renderings of the
 * same passage disagree.
 *
 * Access dates come from the page's own editorial record — the date the archive
 * states it last checked the passage — rather than from the build clock. A date
 * that moves because a deploy happened is not a fact about the text.
 */
import { works, type WorkRecord } from "../data/source-registry";

export type ResolvedSource = {
  /** The registry record, when the corpus source resolves to one. */
  work?: WorkRecord;
  /** The work's title as it will be cited — the registry's form where known. */
  workTitle: string;
  /** The part of the corpus source that identifies the passage. */
  locus: string;
  /** The locus with a chapter alias applied, when the registry knows one. */
  displayLocus: string;
  /** A four-digit year found in the source's parentheses, when present. */
  editionYear?: string;
  /** The raw corpus source, unchanged. */
  raw: string;
};

/**
 * Aliases are matched as prefixes of the whole source string, longest first.
 * Prefix matching rather than first-comma splitting is what keeps
 * "Plato, Apology 38a" from resolving to the record for the Gorgias: the alias
 * carries the dialogue, so the two never collide.
 *
 * The boundary test after the alias accepts space, comma, colon, and their
 * full-width forms — "Cosmopolitanism: Ethics in a World of Strangers (2006)"
 * continues its alias with a colon, and a title boundary is a title boundary
 * whatever punctuation the corpus wrote it with. When that continuation is
 * still the canonical title, the locus starts after the title, not after the
 * short alias. A word-boundary failure here is silent: the record is skipped,
 * the page loses its original title and translator, and nothing errors.
 */
const ALIAS_BOUNDARY = /^[\s,:;，：；“”"'’]/;

const aliasIndex = works
  .flatMap((work) => work.aliases.map((alias) => ({ alias: alias.toLowerCase(), work })))
  .sort((a, b) => b.alias.length - a.alias.length);

/**
 * Essay and article titles in this corpus are frequently wrapped in straight or
 * curly quotation marks — `"Toward Decolonizing African Philosophy and
 * Religion"` — so the marks are stripped before matching rather than being
 * encoded into every alias.
 */
function normaliseForMatch(raw: string) {
  return raw.trim().replace(/^[“"']+/, "").toLowerCase();
}

/**
 * How many characters of the raw source sit before the alias.
 *
 * Matching runs on a copy with leading quotation marks stripped, because essay
 * titles in the corpus are wrapped in them. The locus is sliced from the
 * original string, so those marks have to be counted or the slice lands inside
 * the title — `"Toward Decolonizing…"` would keep a leftover "n" in the locus.
 */
function aliasStart(raw: string) {
  return raw.trim().match(/^[“"']*/)?.[0].length ?? 0;
}

function yearFromParentheses(raw: string): string | undefined {
  const match = raw.match(/\((\d{4})[^)]*\)/);
  return match?.[1];
}

/**
 * Does this token begin a locator rather than continue a title?
 *
 * The corpus writes the locator in the forms the discipline uses — a section
 * sign, a bare stephanus or Bekker number, a roman book numeral, a decimal
 * book.chapter — and each of those has a shape that a title word does not:
 * they start with a digit or a section mark, or they are made only of the
 * roman numerals. Requiring "all roman characters and nothing else" is what
 * keeps the word "I" in a title from being read as Book I, and requiring
 * uppercase is what keeps the pronoun out of it.
 *
 * Deliberately not included: "DK", which in this corpus precedes a Diels–Kranz
 * fragment number for pre-Socratic thinkers whose work has no title at all.
 * Splitting there would invent a work name that does not exist.
 */
const LOCATOR_PATTERNS = [
  /^[§¶]/, // section sign: §116, ¶4
  /^\d/, // 7, 5.6, 1107a, 1.1
  /^p{1,2}\./i, // p. 78, pp. 12–14
  /^[IVXLCM]+$/, // a bare roman book numeral: XV, II
  /^[IVXLCM]+[._\-–—]?\d/, // II.6, V.16, X.31, I.150–158
];

function startsLocator(token: string) {
  return LOCATOR_PATTERNS.some((pattern) => pattern.test(token));
}

/**
 * Walk the source from the left and stop where the title ends.
 *
 * An opening parenthesis counts as the end of the title as well as a locator
 * does: this corpus uses parentheses for the translator, the edition, or a
 * qualifying note — "(Pines)", "(1985)", "(on justice; related context)" — and
 * all three belong with the locator rather than in the work's name.
 */
function splitByLocator(source: string) {
  const tokens = source.trim().split(/\s+/);
  let index = 0;
  for (; index < tokens.length; index += 1) {
    const token = tokens[index];
    if (startsLocator(token) || token.startsWith("(")) break;
  }
  if (index === 0 || index === tokens.length) return undefined;
  return {
    head: tokens.slice(0, index).join(" "),
    tail: tokens.slice(index).join(" "),
  };
}

/**
 * Split a corpus `source` into the work it names and the locator inside it.
 *
 * The parse order matters. The registry is consulted first, because a record
 * carries the canonical title and resolves the cases where the corpus gives the
 * work two different names. The locator walk is second, and it is what makes
 * the 68% of sources written without a comma usable at all: "Republic IV 433a"
 * and "Tractatus Logico-Philosophicus 7" both fuse the work and the passage,
 * and without the walk the whole string would have to be reported as the work
 * name. The comma is the last resort, for the minority of sources where the
 * locator is descriptive rather than numbered — "Cosmopolitanism, two strands".
 *
 * When none of the three applies, the whole string is returned as the work with
 * no locus, which is the honest reading of a source that records only a title.
 */
export function resolveSource(raw: string): ResolvedSource {
  const trimmed = raw.trim();
  const probe = normaliseForMatch(trimmed);
  const match = aliasIndex.find(
    (candidate) =>
      probe === candidate.alias ||
      (probe.startsWith(candidate.alias) &&
        ALIAS_BOUNDARY.test(probe.charAt(candidate.alias.length))),
  );

  let workTitle: string | undefined;
  let locus = "";

  if (match) {
    workTitle = match.work.title;
    const afterAlias = trimmed.slice(aliasStart(trimmed));
    // A short alias can be a prefix of the canonical title. "cosmopolitanism"
    // matches "Cosmopolitanism: Ethics in a World of Strangers" because the
    // colon is a boundary, but the subtitle is still the title — the locus
    // starts only once that title has been consumed.
    const titleContinues =
      afterAlias.toLowerCase().startsWith(workTitle.toLowerCase());
    const cut = titleContinues ? workTitle.length : match.alias.length;
    locus = afterAlias.slice(cut).replace(/^[\s,:;，：；、“”"'’]+/, "").trim();
  } else {
    const split = splitByLocator(trimmed);
    if (split) {
      workTitle = split.head;
      locus = split.tail;
    } else {
      const comma = trimmed.indexOf(",");
      if (comma > 0) {
        workTitle = trimmed.slice(0, comma).trim();
        locus = trimmed.slice(comma + 1).trim();
      }
    }
  }

  const displayLocus =
    (locus && match?.work.locusAliases?.[locus]) || locus;

  return {
    work: match?.work,
    workTitle: workTitle ?? trimmed,
    locus,
    displayLocus,
    editionYear: yearFromParentheses(trimmed),
    raw: trimmed,
  };
}

export type CitationInput = {
  author: string;
  text: string;
  source: string;
  /** Canonical path of the page citing the passage, e.g. /quotes/q0001. */
  url: string;
  /** The date the archive states it last checked this passage. */
  accessDate: string;
};

export type Citations = {
  /** The locus in the original work, as a philosophy paper would cite it. */
  primary: string;
  /** APA 7th edition. */
  apa: string;
  /** MLA 9th edition. */
  mla: string;
  /** Chicago 17th edition, notes and bibliography. */
  chicago: string;
  /** The work's title as the archive cites it — registry form where known. */
  workTitle: string;
  /** The agent the citation names as the work's author. */
  citedAuthor: string;
  /**
   * Set when the passage is spoken by someone other than the work's author, as
   * Socrates speaks in Plato's dialogues. The page says so rather than letting
   * the reader infer that the byline is the author.
   */
  speaker?: string;
  /**
   * True when the English wording's translation is not recorded, so the page
   * can say so instead of implying an edition it does not hold.
   */
  translationUnrecorded: boolean;
  /** Resolved original-language title, when the registry holds one. */
  originalTitle?: string;
};

/**
 * Map an ISO date to the form each style wants. Chicago spells the month out,
 * MLA abbreviates it, and APA drops the access date entirely for stable
 * published content — which an archive page is.
 */
function formatAccessDate(iso: string) {
  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return { chicago: iso, mla: iso };
  const day = date.getUTCDate();
  const monthLong = date.toLocaleString("en-US", { month: "long", timeZone: "UTC" });
  const monthShort = date.toLocaleString("en-US", { month: "short", timeZone: "UTC" });
  const year = date.getUTCFullYear();
  return {
    chicago: `${monthLong} ${day}, ${year}`,
    mla: `${day} ${monthShort}. ${year}`,
  };
}

/**
 * APA treats classical and pre-modern works by naming the original date after
 * the edition date. Where the archive holds no edition date, the original date
 * alone is what there is, and a bare "n.d." would throw away information the
 * archive does have.
 */
function apaDate(editionYear?: string, workYear?: string) {
  if (editionYear) return { leading: editionYear, trailing: workYear };
  if (workYear) return { leading: workYear, trailing: undefined };
  return { leading: "n.d.", trailing: undefined };
}

export function buildCitations(input: CitationInput): Citations {
  const resolved = resolveSource(input.source);
  const work = resolved.work;
  const workTitle = resolved.workTitle;
  const locus = resolved.displayLocus;
  // Always the page's own address: the archive is the container the reader
  // actually consulted, and a citation that points somewhere else is not
  // usable for the person holding this sentence.
  const url = `https://www.philosophydef.com${input.url}`;

  const dates = formatAccessDate(input.accessDate);
  const { leading, trailing } = apaDate(resolved.editionYear, work?.year);

  /**
   * The byline the citation uses. Where the registry names a work's author and
   * that differs from the corpus's `author` — Plato wrote the Apology; Socrates
   * speaks in it — the citation takes the registry's agent, because a citation
   * naming the speaker sends the reader looking for a book Socrates did not
   * write. The page still presents the passage under Socrates, and says plainly
   * that he is the speaker.
   */
  const citedAuthor = work?.author ?? input.author;
  const speaker =
    work?.author && work.author !== input.author ? input.author : undefined;

  // The locus reads as part of the work's title in APA and MLA — "Apology,
  // 38a" — so the two are joined before the style's punctuation is applied.
  const titledLocus = locus ? `${workTitle}, ${locus}` : workTitle;
  const translator = work?.translator
    ? ` (${work.translator.split(" (")[0].split(" —")[0].trim()}, Trans.)`
    : "";

  const apa = [
    `${citedAuthor}. (${leading}). ${titledLocus}${translator}.`,
    "Philosophy Blind Box.",
    url,
    trailing ? `(Original work published ${trailing})` : "",
  ]
    .filter(Boolean)
    .join(" ");

  const mla = `${citedAuthor}. “${workTitle}${
    locus ? `, ${locus}` : ""
  }.” Philosophy Blind Box, ${url} Accessed ${dates.mla}.`;

  const chicago = `${citedAuthor}. “${workTitle}${
    locus ? `, ${locus}` : ""
  }.” In Philosophy Blind Box. Accessed ${dates.chicago}. ${url}.`;

  // What a philosophy paper actually references: author, work, locus — with the
  // character form of a chapter title where the registry normalises one, since
  // that is what makes the locator checkable against a Chinese or Japanese text.
  const primary = locus
    ? `${citedAuthor}, ${workTitle} ${locus}`
    : `${citedAuthor}, ${workTitle}`;

  return {
    primary,
    apa,
    mla,
    chicago,
    workTitle,
    citedAuthor,
    speaker,
    translationUnrecorded: !work?.translator,
    originalTitle: work?.original
      ? `${work.original.text}${work.original.romanised ? ` (${work.original.romanised})` : ""}`
      : undefined,
  };
}
