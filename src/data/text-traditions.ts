/**
 * Scholarly metadata for the "authors" in this corpus that are not people.
 *
 * The archive files scriptures, canonical anthologies, and classical texts under
 * an `author` field so that attribution works the same way everywhere — but a
 * quotation archive that presents the *Dhammapada* under a bare byline invites
 * the reader to treat a compiled text as a single author's utterance. The
 * distinction matters for scholarship, and it is the difference between a site
 * that looks like a quotation aggregator and one that can be cited.
 *
 * Each record therefore carries four things a reader needs in order to place the
 * passage honestly: the language the text was composed in, the period during
 * which it took its present form, the literary form it takes, and a note on how
 * it reached us. These render as a locator line on quotation pages, and the
 * accompanying guide is what keeps the text's own hub page from being a bare
 * list of passages.
 *
 * Composition dates are given as the ranges that carry scholarly consensus
 * rather than as single years, because for every text here the dating is
 * genuinely a range. Where even the range is disputed the note says so.
 */
import type { ThinkerGuide } from "./enrichment";

export type TextTradition = {
  /** Self-describing label used in the locator line. */
  kind: string;
  /** Language(s) of composition, in scholarly form. */
  language: string;
  /** BCP-47 tag for the `lang` attribute, where a single tag is meaningful. */
  languageTag: string;
  /** Period in which the text took its received form. */
  period: string;
  /** Literary form — the single most useful thing to know before quoting it. */
  form: string;
  /** How the text reached us: recension, canon, transmission. */
  transmission: string;
  /** The scholarly caveat a reader should hold while reading any single line. */
  readingNote: string;
};

export const textTraditions: Record<string, TextTradition> = {
  "Bhagavad Gita": {
    kind: "Epic dialogue within a larger Sanskrit epic",
    language: "Sanskrit (Epic Sanskrit)",
    languageTag: "sa",
    period: "c. 2nd century BCE – 2nd century CE",
    form:
      "Eighteen chapters of 700 verses, set as a dialogue between Arjuna and Krishna on the eve of battle; embedded in Book VI of the Mahābhārata.",
    transmission:
      "Not a free-standing work. The text circulated as part of the Mahābhārata and acquired its own manuscript tradition and commentary literature later — Śaṅkara (8th century), Rāmānuja (11th–12th), and Madhva (13th) each wrote a foundational commentary on it.",
    readingNote:
      "Read a single verse as a move within Arjuna's argument, not as a detached maxim. The Gītā's positions are staged across the dialogue, and verses pulled out of sequence routinely read as though they endorse the opposite of what the chapter is working toward.",
  },
  "Chandogya Upanisad": {
    kind: "Principal Upaniṣad of the Sāmaveda",
    language: "Sanskrit (Vedic Sanskrit)",
    languageTag: "sa",
    period: "c. 8th – 6th century BCE",
    form:
      "Eight chapters (prapāṭhaka) of prose and verse dialogue, chiefly instruction given by a teacher to a student.",
    transmission:
      "Transmitted within the Kauthuma recension of the Sāmaveda. One of the oldest of the principal Upaniṣads, and with the Bṛhadāraṇyaka the main source for early Vedānta; Śaṅkara commented on both.",
    readingNote:
      "The teaching is delivered as analogy and repetition rather than as definition. The famous identifications ('that art thou') are conclusions the dialogue has spent chapters preparing, and the surrounding argument is what gives them their force.",
  },
  Dhammapada: {
    kind: "Anthology of verses in the Pali canon",
    language: "Pali",
    languageTag: "pi",
    period: "Verses from the early Buddhist tradition; received form c. 3rd century BCE",
    form:
      "423 verses arranged in 26 thematic chapters, in the metre of the early verse collections.",
    transmission:
      "Belongs to the Khuddaka Nikāya of the Theravāda canon. The verses largely parallel material preserved in other early schools, which is why they are treated as a compilation of inherited teaching rather than as a single authored composition.",
    readingNote:
      "Each verse is a mnemonic unit whose commentary (aṭṭhakathā) supplies the narrative situation it was spoken in. Without that frame, a verse of practical instruction can look like a general maxim, and the tradition's own reading is considerably more specific.",
  },
  "Diamond Sutra": {
    kind: "Perfection of Wisdom scripture",
    language: "Sanskrit; also preserved in Chinese and Tibetan translations",
    languageTag: "sa",
    period: "c. 2nd – 4th century CE",
    form:
      "A short sūtra in dialogue form, traditionally divided into 32 sections.",
    transmission:
      "Vajracchedikā Prajñāpāramitā Sūtra. The Dunhuang copy carries a colophon of 868 CE, making it the earliest dated printed book known. Kumārajīva's Chinese translation of 401 CE became the standard version across East Asia, and the sections the archive's readers will encounter follow that transmission.",
    readingNote:
      "The sūtra's argument proceeds by withdrawing the terms it has just used — statements are affirmed, negated, and regathered in a single movement. A sentence lifted from that movement reads as paradox or as nonsense unless the pattern is visible, which is why the whole sūtra is short and meant to be read whole.",
  },
  Guanzi: {
    kind: "Composite political and economic treatise",
    language: "Chinese (Classical Chinese)",
    languageTag: "lzh",
    period: "Layers compiled c. 4th – 2nd century BCE",
    form:
      "Eighty-six extant chapters of practical statecraft, economics, cosmology, and self-cultivation.",
    transmission:
      "Attributed to the statesman Guan Zhong (d. 645 BCE), but the received text is a compilation assembled over centuries, associated in part with the Jixia Academy at Qi. Chapter datings differ widely, so a locator alone does not settle a passage's age.",
    readingNote:
      "The text is syncretic: chapters in the same book advance Legalist, Daoist, and proto-economic arguments. Quoting a chapter as 'Guanzi's view' erases the very plurality that makes the compilation interesting.",
  },
  "Talmudic tradition": {
    kind: "Rabbinical corpus of law and argument",
    language: "Hebrew and Jewish Babylonian Aramaic",
    languageTag: "he",
    period: "Mishnah c. 200 CE; Jerusalem Talmud c. 400 CE; Babylonian Talmud c. 500 – 600 CE",
    form:
      "Mishnah (concise legal rulings) interwoven with Gemara (discussion, narrative, and debate), across 63 tractates in the Babylonian recension.",
    transmission:
      "Two distinct corpora survive — the Jerusalem and the Babylonian Talmuds — which differ in tractate coverage, wording, and the authorities they cite. Editions also differ, so tractate and folio page are part of the citation rather than an optional refinement.",
    readingNote:
      "The Talmud preserves minority opinions deliberately and often leaves a question open. A cited line is generally one voice in an argument the page is conducting between several, and it is common for both a ruling and its strongest objection to come from the same discussion.",
  },
  "The Book of Changes": {
    kind: "Divination manual with a commentary literature",
    language: "Chinese (Classical Chinese)",
    languageTag: "lzh",
    period: "Core text c. 9th – 7th century BCE; commentary layers c. 4th – 2nd century BCE",
    form:
      "Sixty-four hexagrams, each with a statement, line statements, and (in the later layers) a commentary.",
    transmission:
      "Two distinct strata: the Zhōuyì, a Zhou-dynasty divination manual, and the Yì zhuàn or 'Ten Wings', the interpretive essays traditionally attributed to Confucius but now generally dated to the Warring States and early Han. The Two Wings are commentary, not part of the original text.",
    readingNote:
      "The base text is not philosophy in the argumentative sense: it is a set of oracles whose meanings were fixed by use and by commentary. Quoting a line as a philosophical maxim borrows the authority of the Yì zhuàn while presenting it as the older text's own voice.",
  },
  "The Doctrine of the Mean": {
    kind: "Confucian treatise on equilibrium and sincerity",
    language: "Chinese (Classical Chinese)",
    languageTag: "lzh",
    period: "Warring States period, c. 4th – 3rd century BCE",
    form:
      "Thirty-three short chapters of aphorism and argument, traditionally attributed to Zisi (Kong Ji), Confucius's grandson.",
    transmission:
      "Originally a chapter of the Lǐjì (Book of Rites), it was raised to independent canonical status by Zhu Xi in the twelfth century as one of the Four Books, which is the provenance of its present standing in East Asian education.",
    readingNote:
      "Zhōngyōng is not 'moderation' in the sense of splitting a difference. Zhōng is equilibrium before the feelings are aroused and harmony when they are; the term's technical sense is the reason the title resists translation, and the reason a rendering like 'the golden mean' misleads.",
  },
  "The Great Learning": {
    kind: "Confucian treatise on self-cultivation and governance",
    language: "Chinese (Classical Chinese)",
    languageTag: "lzh",
    period: "Warring States period, c. 4th – 3rd century BCE",
    form:
      "A short text in two layers: a 'classic' section attributed to Confucius and a commentary section attributed to his disciple Zengzi.",
    transmission:
      "Also a chapter of the Lǐjì, promoted to one of the Four Books by Zhu Xi. The split between classic and commentary is a traditional attribution rather than a manuscript fact, and it is what makes the text's structure — eight items of cultivation in sequence — so teachable.",
    readingNote:
      "The text is a programme, not a collection of remarks: 'investigating things', 'extending knowledge', 'making the will sincere' and the rest are stages in one sequence running from the self outward to the empire. A single stage quoted alone loses the direction of the argument.",
  },
};

/**
 * Chan masters whose recorded sayings are preserved in the tradition's
 * anthologies rather than in works they wrote. They surface in this corpus in
 * the same way a scripture does, so they need the same treatment: an honest
 * account of what the attribution rests on.
 */
export const chanMasterNotes: Record<string, string> = {
  "Mazu Daoyi":
    "No writings are ascribed to Mazu himself. What is cited here comes from the recorded-sayings (yǔlù) collections compiled by his disciples and from later anthologies such as the Jingde Record of the Transmission of the Lamp, in which the wording varies between recensions.",
  "Baizhang Huaihai":
    "His teaching survives through the transmission records and through the monastic code traditionally ascribed to him. The attribution of the extant 'Pure Rules' to Baizhang is disputed — the received text is later — so a rule quoted in his name is best read as a tradition's retrospective attribution.",
  "Linji Yixuan":
    "The Record of Linji was compiled by his disciples after his death, and the received edition was edited through the Song dynasty. His recorded sayings, including the 'true person of no rank', reach us through that edited form.",
  "Zhaozhou Congshen":
    "No work is ascribed to Zhaozhou. His sayings survive as items embedded in the transmission records and in the gōng'àn collections, where the wording of a given exchange often differs between the Gateless Barrier, the Blue Cliff Record, and the later anthologies.",
  "Yunmen Wenyan":
    "Attribution rests on the transmission records and on the Yunmen school's own anthologies. His celebrated 'one-word barriers' circulated as instruction recorded by his community rather than as writings he issued.",
  "Wumen Huikai":
    "Huikai's own compilation, the Gateless Barrier (Wúménguān, 1228), is the source for most of the cases cited in his name — so the commentary he wrote on a case and the case itself are two different things, and quoting one as the other misrepresents the work.",
};

export function textTraditionFor(name: string): TextTradition | undefined {
  return textTraditions[name];
}

/** The locator clause used on quotation pages, or undefined for real authors. */
export function traditionLocator(name: string) {
  const tradition = textTraditions[name];
  if (!tradition) return undefined;
  return `${tradition.language} · ${tradition.period}`;
}

export function chanMasterNote(name: string): string | undefined {
  return chanMasterNotes[name];
}
