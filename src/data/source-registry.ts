/**
 * The works-cited registry.
 *
 * An audit of the corpus found the same work cited under two to four different
 * names across pages: Zhuangzi's Qíwùlùn appears as "Zhuangzi, Qiwulun" and as
 * "Zhuangzi, Discussion on Making All Things Equal"; Mencius as "Li Lou II" and
 * as "Lilou II"; Mozi's 兼愛 chapter as "Impartial Care II", "Impartial Love II"
 * and "Universal Love"; Schopenhauer under both the German and the English form
 * of the same title. A reader cannot tell from the locator alone whether those
 * are the same chapter or different chapters.
 *
 * That is a defect in exactly the thing this archive claims to be good at. The
 * registry fixes it at the source rather than page by page: each record names
 * the work canonically, gives its title in the original language, records the
 * translator where the corpus names one, states what kind of locator identifies
 * a passage inside it, and lists the raw locator prefixes that resolve to it.
 *
 * Records are optional. Where no record matches, the citation builder falls back
 * to the raw source string, so the corpus can keep growing without waiting for
 * this file. What the registry buys is normalization on the works that need it
 * and correct original-language metadata on the works that have a scholarly
 * citation form — which is most of the ones readers actually quote.
 */

export type WorkRecord = {
  /** The form of the title the archive cites, in English. */
  title: string;
  /**
   * Who wrote the work, where that differs from the corpus's `author`.
   *
   * The corpus files the Apology under Socrates, because Socrates is the
   * thinker being quoted and the passage is his speech. He did not write it.
   * Citing "Socrates. Apology, 38a." names the wrong agent, and a reader who
   * takes the citation to a library catalogue will not find a work by Socrates.
   * The record supplies the work's author so the citation can be right while
   * the page continues to present the passage under the thinker it belongs to.
   */
  author?: string;
  /** Original-language title, with script where the language has one. */
  original?: {
    text: string;
    language: string;
    /** BCP-47 tag, for the `lang` attribute. */
    languageTag: string;
    /** Romanisation, when the script is not Latin. */
    romanised?: string;
  };
  /** Date or date range of composition / first publication, as usually given. */
  year?: string;
  /** Translator or editor named by the editions this archive consulted. */
  translator?: string;
  /** What identifies a passage inside the work, phrased for the reader. */
  locatorKind: string;
  /** Raw `source` prefixes in the corpus that resolve to this record. */
  aliases: string[];
  /** Chapter or section names that appear in more than one form in the corpus. */
  locusAliases?: Record<string, string>;
  /** Where the textual situation affects how a passage should be cited. */
  note?: string;
};

export const works: WorkRecord[] = [
  /* ------------------------------------------------------------------ *
   * Greek and Roman
   * ------------------------------------------------------------------ */
  {
    title: "Apology",
    author: "Plato",
    original: { text: "Ἀπολογία Σωκράτους", language: "Ancient Greek", languageTag: "grc" },
    year: "c. 399–390 BCE",
    locatorKind: "Stephanus page and section (e.g. 38a)",
    aliases: ["plato, apology"],
    note:
      "Citations of the Apology in this archive are locators in Plato's dialogue, in which Socrates speaks. The archive files the passage under Socrates because he is the thinker being quoted, but Plato wrote the work, and the citation therefore names Plato and the page says who is speaking. The English wording is the translator's, so the locator identifies the passage while the quoted sentence belongs to a particular rendering of it.",
  },
  {
    title: "Nicomachean Ethics",
    original: { text: "Ἠθικὰ Νικομάχεια", language: "Ancient Greek", languageTag: "grc" },
    year: "c. 340 BCE",
    locatorKind: "Book, chapter, and Bekker number (e.g. II.6, 1107a)",
    aliases: ["nicomachean ethics", "ethica nicomachea"],
    translator: "W. D. Ross (where the corpus records a translator)",
    note:
      "The Bekker number is the stable reference and is what a philosophy paper cites; the book-and-chapter form alone is not unique across editions.",
  },
  {
    title: "Meditations",
    original: {
      text: "Τὰ εἰς ἑαυτόν",
      language: "Ancient Greek",
      languageTag: "grc",
      romanised: "Ta eis heauton",
    },
    year: "c. 170–180 CE",
    locatorKind: "Book and section (e.g. IV.7)",
    aliases: ["meditations"],
    note:
      "The modern title is a convention; the Greek means 'to himself'. Section numbering differs between editions, so a book-and-section locator should name the edition it follows.",
  },
  {
    title: "Letters to Lucilius",
    original: {
      text: "Epistulae Morales ad Lucilium",
      language: "Latin",
      languageTag: "la",
    },
    year: "c. 62–65 CE",
    locatorKind: "Epistle and section (e.g. Ep. 104.26)",
    aliases: ["letters to lucilius", "epistulae morales"],
    note:
      "Several letters quote an earlier author — Cleanthes, Hecato, Epicurus — and in those the quoted sentence is that author's, delivered in Seneca's Latin. The archive records the inner attribution in the source field where it is known.",
  },
  {
    title: "The Consolation of Philosophy",
    original: {
      text: "De consolatione Philosophiae",
      language: "Latin",
      languageTag: "la",
    },
    year: "524 CE",
    locatorKind: "Book and prose or verse section",
    aliases: ["the consolation of philosophy"],
  },
  {
    title: "Discourses and Enchiridion",
    original: { text: "Διατριβαί", language: "Ancient Greek", languageTag: "grc" },
    year: "c. 108 CE (recorded by Arrian)",
    locatorKind: "Discourse number and section",
    aliases: ["enchiridion", "discourses", "epictetus,"],
    note:
      "Epictetus wrote nothing. The Discourses were transcribed and edited by his pupil Arrian, who states that he recorded what he heard and left the reasoning as it stood; the Handbook is Arrian's own selection. Attribution to Epictetus is therefore via Arrian in every case.",
  },

  /* ------------------------------------------------------------------ *
   * Chinese classical texts
   * ------------------------------------------------------------------ */
  {
    title: "Daodejing",
    original: {
      text: "道德經",
      language: "Chinese (Classical Chinese)",
      languageTag: "lzh",
      romanised: "Dàodéjīng",
    },
    year: "c. 4th–3rd century BCE (received text); Mawangdui manuscripts c. 2nd century BCE",
    locatorKind: "Chapter (章), numbered 1–81 in the received text",
    aliases: ["daodejing", "tao te ching"],
    note:
      "The chapter order differs between the received text and the Mawangdui manuscripts, which place the sections now numbered 38–81 first. A chapter number alone therefore does not identify a passage independently of the edition.",
  },
  {
    title: "Zhuangzi",
    original: {
      text: "莊子",
      language: "Chinese (Classical Chinese)",
      languageTag: "lzh",
      romanised: "Zhuāngzǐ",
    },
    year: "c. 4th–3rd century BCE; outer and miscellaneous chapters later",
    locatorKind: "Chapter (篇) by name",
    aliases: ["zhuangzi"],
    // The corpus names the same chapters in English and in romanisation,
    // sometimes on different pages. Both forms resolve to one chapter here.
    locusAliases: {
      "Free and Easy Wandering": "Free and Easy Wandering (Xiaoyaoyou 逍遙遊)",
      Xiaoyaoyou: "Free and Easy Wandering (Xiaoyaoyou 逍遙遊)",
      Qiwulun: "Discussion on Making All Things Equal (Qiwulun 齊物論)",
      "Discussion on Making All Things Equal":
        "Discussion on Making All Things Equal (Qiwulun 齊物論)",
      "The Primacy of Nourishing Life":
        "The Primacy of Nourishing Life (Yangshengzhu 養生主)",
      Yangshengzhu: "The Primacy of Nourishing Life (Yangshengzhu 養生主)",
      "The Great Ancestral Teacher":
        "The Great Ancestral Teacher (Da Zongshi 大宗師)",
      "Da Zongshi": "The Great Ancestral Teacher (Da Zongshi 大宗師)",
      "Autumn Floods": "Autumn Floods (Qiushui 秋水)",
      "External Things": "External Things (Waiwu 外物)",
    },
    note:
      "Only the seven 'inner chapters' are generally accepted as Zhuangzi's own; the outer and miscellaneous chapters are the work of a school. Which layer a passage comes from is part of what the locator tells a reader.",
  },
  {
    title: "Mencius",
    original: {
      text: "孟子",
      language: "Chinese (Classical Chinese)",
      languageTag: "lzh",
      romanised: "Mèngzǐ",
    },
    year: "c. 4th–3rd century BCE",
    locatorKind: "Book name and part (e.g. Gaozi I)",
    aliases: ["mencius"],
    locusAliases: {
      "Li Lou II": "Lilou II (離婁下)",
      "Lilou II": "Lilou II (離婁下)",
    },
    note:
      "Chapter names are romanised inconsistently in English editions and in this corpus; the archive normalises them here and gives the character form so the identification is unambiguous.",
  },
  {
    title: "Xunzi",
    original: {
      text: "荀子",
      language: "Chinese (Classical Chinese)",
      languageTag: "lzh",
      romanised: "Xúnzǐ",
    },
    year: "c. 3rd century BCE",
    locatorKind: "Chapter (篇) by name",
    aliases: ["xunzi"],
    locusAliases: {
      "Exhortation to Learning": "Exhortation to Learning (Quanxue 勸學)",
      "Encouraging Learning": "Exhortation to Learning (Quanxue 勸學)",
      "Human Nature Is Bad": "Human Nature Is Bad (Xing'e 性惡)",
      "Dispelling Blindness": "Dispelling Blindness (Jiebi 解蔽)",
      "Cultivating Oneself": "Cultivating Oneself (Xiushen 修身)",
    },
    note:
      "The corpus cites chapter 勸學 under two different English titles. They are one chapter, and the registry gives the character form so the equivalence is checkable.",
  },
  {
    title: "Mozi",
    original: {
      text: "墨子",
      language: "Chinese (Classical Chinese)",
      languageTag: "lzh",
      romanised: "Mòzǐ",
    },
    year: "c. 5th–4th century BCE; text compiled over later centuries",
    locatorKind: "Chapter (篇) by name, with the three-part division where it applies",
    aliases: ["mozi"],
    locusAliases: {
      "Impartial Care II": "Impartial Care (Jian'ai 兼愛), part II",
      "Impartial Love II": "Impartial Care (Jian'ai 兼愛), part II",
      "Universal Love": "Impartial Care (Jian'ai 兼愛)",
      "Against Offensive War I": "Against Offensive War (Feigong 非攻), part I",
    },
    note:
      "兼愛 is the chapter the corpus cites under three different English titles. The chapter survives in three parallel versions (上/中/下), which is why the part number is part of the locator and not a refinement of it.",
  },
  {
    title: "Han Feizi",
    original: {
      text: "韓非子",
      language: "Chinese (Classical Chinese)",
      languageTag: "lzh",
      romanised: "Hán Fēizǐ",
    },
    year: "c. 3rd century BCE",
    locatorKind: "Chapter (篇) by name",
    aliases: ["han feizi"],
    locusAliases: {
      "Illustrations of Laozi": "Illustrations of Laozi (Jielao 解老)",
    },
  },
  {
    title: "The Analects",
    original: {
      text: "論語",
      language: "Chinese (Classical Chinese)",
      languageTag: "lzh",
      romanised: "Lúnyǔ",
    },
    year: "c. 5th–3rd century BCE (compiled)",
    locatorKind: "Book and chapter (e.g. Lunyu 4.15)",
    aliases: ["analects"],
    note:
      "The Analects is a compiled record of sayings, not a work by Confucius. The common formula 'Confucius said' refers to a tradent whose words were assembled by later hands, and the book-and-chapter locator is what makes a passage findable in any edition.",
  },
  {
    title: "Zhengmeng",
    original: {
      text: "正蒙",
      language: "Chinese (Classical Chinese)",
      languageTag: "lzh",
      romanised: "Zhèngméng",
    },
    year: "11th century CE",
    locatorKind: "Chapter by name",
    aliases: ["zhengmeng"],
    translator: "Wing-tsit Chan (where the corpus records a translator)",
    note:
      "The 'Western Inscription' (Ximing 西銘) is a separate short text by Zhang Zai that was later incorporated into the Zhengmeng as its first chapter; the two names are not interchangeable in Chinese scholarship.",
  },
  {
    title: "Renjian Cihua",
    original: {
      text: "人間詞話",
      language: "Chinese (Classical Chinese)",
      languageTag: "lzh",
      romanised: "Rénjiān cíhuà",
    },
    year: "1908–1909",
    locatorKind: "Numbered item (則)",
    aliases: ["renjian cihua", "remarks on lyrics in the human world"],
    note:
      "The corpus cites the work under its romanised title and under an English rendering on different pages. They are the same text, and the numbered item is what identifies a passage in it.",
  },
  {
    title: "Chuanxilu (Instructions for Practical Living)",
    original: {
      text: "傳習錄",
      language: "Chinese (Classical Chinese)",
      languageTag: "lzh",
      romanised: "Chuánxílù",
    },
    year: "Compiled from 1518; three-juan received edition 1556",
    locatorKind: "Juan (卷) and item number",
    aliases: ["instructions for practical living"],
    note:
      "The text was assembled by Wang Yangming's disciples after his death and expanded over decades, so a numbered item belongs to a specific juan and edition. Wang's teaching reaches the reader here through his students' compilation rather than through anything he published.",
  },
  {
    title: "Sunzi Bingfa (The Art of War)",
    original: {
      text: "孫子兵法",
      language: "Chinese (Classical Chinese)",
      languageTag: "lzh",
      romanised: "Sūnzǐ bīngfǎ",
    },
    year: "c. 5th century BCE; received text stabilised later",
    locatorKind: "Chapter (篇) by name",
    aliases: ["the art of war"],
    note:
      "The received thirteen-chapter text was edited over centuries, and the corpus's chapter titles follow the Giles convention ('Planning Offensives', 'Attack by Stratagem') rather than a Chinese-edition convention.",
  },

  /* ------------------------------------------------------------------ *
   * Indian
   * ------------------------------------------------------------------ */
  {
    title: "Bhagavad Gita",
    original: {
      text: "भगवद्गीता",
      language: "Sanskrit",
      languageTag: "sa",
      romanised: "Bhagavad Gītā",
    },
    year: "c. 2nd century BCE – 2nd century CE",
    locatorKind: "Chapter and verse (e.g. 2.47)",
    aliases: ["bhagavad gita"],
    note:
      "Chapter-and-verse numbering is stable across Sanskrit editions, which makes the Gītā unusually easy to cite — but English renderings of a given verse vary enough that the wording quoted and the verse cited should be given together.",
  },

  /* ------------------------------------------------------------------ *
   * Medieval, Islamic, and Jewish
   * ------------------------------------------------------------------ */
  {
    title: "Muqaddimah",
    original: {
      text: "المقدمة",
      language: "Arabic",
      languageTag: "ar",
      romanised: "al-Muqaddimah",
    },
    year: "1377 CE",
    locatorKind: "Chapter and section within the introduction",
    aliases: ["muqaddimah"],
    translator: "Franz Rosenthal",
    note:
      "Where the corpus records 'Rosenthal' it is naming the translator, not an edition of a different work; the Rosenthal translation is the standard English text and its section divisions follow the Arabic.",
  },
  {
    title: "Al-Shifa (The Healing)",
    original: {
      text: "الشفاء",
      language: "Arabic",
      languageTag: "ar",
      romanised: "al-Shifāʾ",
    },
    year: "c. 1020s CE",
    locatorKind: "Treatise (fann) and chapter within it",
    aliases: ["the healing"],
    translator: "Michael E. Marmura (Metaphysics, where the corpus records it)",
    note:
      "Al-Shifa is an encyclopaedia in four parts — logic, natural science, mathematics, metaphysics — and a locator without the part does not identify a passage. The corpus records the part on each entry.",
  },
  {
    title: "Al-Munqidh min al-Dalal (Deliverance from Error)",
    original: {
      text: "المنقذ من الضلال",
      language: "Arabic",
      languageTag: "ar",
      romanised: "al-Munqidh min al-ḍalāl",
    },
    year: "c. 1106 CE",
    locatorKind: "Section of the narrative",
    aliases: ["deliverance from error"],
    translator: "W. Montgomery Watt",
    note:
      "An autobiographical account of al-Ghazali's crisis and its resolution rather than a treatise; the sections the corpus cites are moments in that narrative rather than numbered divisions.",
  },
  {
    title: "Fasl al-maqal (The Decisive Treatise)",
    original: {
      text: "فصل المقال",
      language: "Arabic",
      languageTag: "ar",
      romanised: "Faṣl al-maqāl",
    },
    year: "c. 1179–1180 CE",
    locatorKind: "Section of the argument",
    aliases: ["the decisive treatise"],
    translator: "Charles Butterworth",
    note:
      "A short legal-philosophical opinion on the relation between the Law and philosophy. It has no chapter divisions, so the archive cites a described section rather than a number.",
  },
  {
    title: "Emunot ve-Deot (The Book of Beliefs and Opinions)",
    original: {
      text: "אמונות ודעות",
      language: "Judeo-Arabic",
      languageTag: "jrb",
      romanised: "Emunot ve-Deʿot",
    },
    year: "933 CE",
    locatorKind: "Treatise (ma'amar) and chapter",
    aliases: ["the book of beliefs and opinions"],
    translator: "Samuel Rosenblatt",
    note:
      "Written in Judeo-Arabic — Arabic in Hebrew script — and translated into Hebrew as Emunot ve-Deot, which is the title most modern readers encounter. The archive cites via the Rosenblatt English translation.",
  },
  {
    title: "Le Livre de la Cité des Dames",
    original: {
      text: "Le Livre de la Cité des Dames",
      language: "French (Middle French)",
      languageTag: "frm",
    },
    year: "1405",
    locatorKind: "Part and chapter (e.g. I.27)",
    aliases: ["the book of the city of ladies"],
    note:
      "The locator the archive records uses the part-and-chapter division of the standard English and French editions, which agree on it.",
  },

  /* ------------------------------------------------------------------ *
   * Early modern and modern European
   * ------------------------------------------------------------------ */
  {
    title: "Ethics, Demonstrated in Geometrical Order",
    original: {
      text: "Ethica Ordine Geometrico Demonstrata",
      language: "Latin",
      languageTag: "la",
    },
    year: "1677 (posthumous)",
    locatorKind: "Part, proposition, and demonstration or scholium (e.g. V, Prop. 42)",
    aliases: ["ethics i,", "ethics ii,", "ethics iii,", "ethics iv,", "ethics v,", "ethics i ", "ethics ii ", "ethics iii ", "ethics iv ", "ethics v "],
    note:
      "The citation form is fixed by the text's own structure: part, proposition, then proof, corollary, or scholia. Part IV and Part V are cited most often in this archive. The work was published after Spinoza's death from manuscripts he had withheld, so the received text has an editorial history of its own.",
  },
  {
    title: "Pensées",
    original: { text: "Pensées", language: "French", languageTag: "fr" },
    year: "1670 (posthumous, Port-Royal edition)",
    locatorKind: "Fragment number — which numbering must be named",
    aliases: ["pensées"],
    note:
      "There is no single canonical numbering. The Brunschvicg (1897) and Lafuma (1951) systems differ, and a fragment number is meaningless without saying which it follows — a point the corpus flags where it records 'common numbering'. Pascal died before arranging the material, so the order of the fragments is editorial throughout.",
  },
  {
    title: "A Treatise Concerning the Principles of Human Knowledge",
    original: {
      text: "A Treatise Concerning the Principles of Human Knowledge",
      language: "English",
      languageTag: "en",
    },
    year: "1710",
    locatorKind: "Section (§)",
    aliases: ["a treatise concerning the principles of human knowledge"],
    note:
      "Berkeley's sections are short and numbered, and the numbering is the standard reference; there is a second edition of 1734 with additions.",
  },
  {
    title: "De humanae mentis apatheia",
    original: {
      text: "De humanae mentis apatheia",
      language: "Latin",
      languageTag: "la",
    },
    year: "1675 (published posthumously in the Opera)",
    locatorKind: "Section or named thesis within the disputation",
    aliases: ["de humanae mentis apatheia"],
    note:
      "Geulincx's ethics was published after his death and is cited by thesis rather than by page; the corpus records the named thesis on each entry.",
  },
  {
    title: "Kritik der praktischen Vernunft",
    original: {
      text: "Kritik der praktischen Vernunft",
      language: "German",
      languageTag: "de",
    },
    year: "1788",
    locatorKind: "Part and chapter; Academy edition page where recorded",
    aliases: ["critique of practical reason"],
    note:
      "The most-quoted passage is the conclusion, whose wording in English varies more than in German; the archive records the section rather than a page.",
  },
  {
    title: "A Vindication of the Rights of Woman",
    original: {
      text: "A Vindication of the Rights of Woman",
      language: "English",
      languageTag: "en",
    },
    year: "1792",
    locatorKind: "Chapter, or the introduction",
    aliases: ["a vindication of the rights of woman"],
    note:
      "The corpus has one entry cited without a chapter and the rest with one. The chapter is what identifies the passage, so the chapterless entry is the less complete record.",
  },
  {
    title: "Faust, Part One",
    original: { text: "Faust. Eine Tragödie", language: "German", languageTag: "de" },
    year: "1808",
    locatorKind: "Scene by name, or line number in the standard edition",
    aliases: ["faust i"],
    note:
      "Line numbering differs between the Weimar edition and modern reading texts, so the archive records the scene; a scholarly citation would give the line number in a named edition.",
  },
  {
    title: "Parerga und Paralipomena",
    original: {
      text: "Parerga und Paralipomena",
      language: "German",
      languageTag: "de",
    },
    year: "1851",
    locatorKind: "Volume and essay or aphorism group",
    aliases: ["parerga and paralipomena", "parerga und paralipomena", "aphorisms on the wisdom of life"],
    note:
      "The corpus cites the same work under the German and the English form of its title. It is a two-volume collection of essays and aphorisms, and 'Aphorisms on the Wisdom of Life' is a section within the first volume rather than a separate work.",
  },
  {
    title: "Also sprach Zarathustra",
    original: {
      text: "Also sprach Zarathustra",
      language: "German",
      languageTag: "de",
    },
    year: "1883–1885",
    locatorKind: "Part and discourse title",
    aliases: ["thus spoke zarathustra"],
    note:
      "A literary work in which Zarathustra is a speaker, not Nietzsche. The archive's locator names the part and the discourse ('On the Three Metamorphoses'), which is how the book refers to itself, because it has no chapter numbers.",
  },
  {
    title: "Twilight of the Idols",
    original: { text: "Götzen-Dämmerung", language: "German", languageTag: "de" },
    year: "1889",
    locatorKind: "Section and maxim number",
    aliases: ["twilight of the idols"],
    note:
      "Written in 1888 and published in 1889; the archive cites the section and the maxim number, which is stable across editions.",
  },

  /* ------------------------------------------------------------------ *
   * Twentieth-century
   * ------------------------------------------------------------------ */
  {
    title: "Peau noire, masques blancs",
    original: {
      text: "Peau noire, masques blancs",
      language: "French",
      languageTag: "fr",
    },
    year: "1952",
    locatorKind: "Chapter, or the conclusion",
    aliases: ["black skin"],
    translator: "Charles Lam Markmann (1967)",
    note:
      "The chapter the archive cites most is the conclusion. The Markmann translation, which is the one in general English circulation, is known to compress and occasionally omit passages, so a locator without a translator leaves the wording's provenance open — the archive records the translator where it can.",
  },
  {
    title: "Le Deuxième Sexe",
    original: {
      text: "Le Deuxième Sexe",
      language: "French",
      languageTag: "fr",
    },
    year: "1949",
    locatorKind: "Volume and part or chapter",
    aliases: ["the second sex"],
    translator:
      "Borde and Malovany-Chevallier (2009) — the unexpurgated English text; Parshley (1953) is the earlier abridgement",
    note:
      "Two English versions are in circulation and they differ substantially: the 1953 Parshley edition cuts roughly a tenth of the text and simplifies the philosophical vocabulary, while the 2009 translation restores it. The archive records the volume, because the corpus's locators distinguish Vol. I from Vol. II.",
  },
  {
    title: "Pour une morale de l'ambiguïté",
    original: {
      text: "Pour une morale de l'ambiguïté",
      language: "French",
      languageTag: "fr",
    },
    year: "1947",
    locatorKind: "Part and section",
    aliases: ["the ethics of ambiguity"],
  },
  {
    title: "Le Mythe de Sisyphe",
    original: {
      text: "Le Mythe de Sisyphe",
      language: "French",
      languageTag: "fr",
    },
    year: "1942",
    locatorKind: "Essay section; the closing essay is 'Le mythe de Sisyphe'",
    aliases: ["the myth of sisyphus"],
    note:
      "The book is a collection of essays and the title essay is the last of them, so 'The Myth of Sisyphus, closing' locates the passage in the final essay rather than in a chapter.",
  },
  {
    title: "Discours sur le colonialisme",
    original: {
      text: "Discours sur le colonialisme",
      language: "French",
      languageTag: "fr",
    },
    year: "1950",
    locatorKind: "Section of the discourse",
    aliases: ["discourse on colonialism"],
    translator: "Joan Pinkham",
    note:
      "A single continuous polemic without chapters, so the archive cites a described section rather than a number.",
  },
  {
    title: "The Human Condition",
    original: {
      text: "The Human Condition",
      language: "English",
      languageTag: "en",
    },
    year: "1958",
    locatorKind: "Chapter and section",
    aliases: ["the human condition"],
    note:
      "Written in English by Arendt herself; the German version, Vita activa, is her own reworking rather than a translation of it, and the two differ in places.",
  },
  {
    title: "The Life of the Mind",
    original: {
      text: "The Life of the Mind",
      language: "English",
      languageTag: "en",
    },
    year: "1978 (posthumous)",
    locatorKind: "Volume — Thinking or Willing — and section",
    aliases: ["the life of the mind"],
    note:
      "Published after Arendt's death, with only 'Thinking' complete and 'Willing' left as a draft; a locator should say which volume, since the two are different projects.",
  },
  {
    title: "Men in Dark Times",
    original: {
      text: "Men in Dark Times",
      language: "English",
      languageTag: "en",
    },
    year: "1968",
    locatorKind: "Named essay",
    aliases: ["men in dark times"],
    note:
      "A collection of portraits, so the essay is what identifies a passage; 'Men in Dark Times' alone names a book of ten separate pieces.",
  },
  {
    title: "The Sovereignty of Good",
    original: {
      text: "The Sovereignty of Good",
      language: "English",
      languageTag: "en",
    },
    year: "1970",
    locatorKind: "Chapter and essay",
    aliases: ["the sovereignty of good"],
    note:
      "Three essays first published separately between 1956 and 1969 and collected in 1970, so the chapter and the original essay are two different locators for the same text.",
  },
  {
    title: "The Principles of Psychology",
    original: {
      text: "The Principles of Psychology",
      language: "English",
      languageTag: "en",
    },
    year: "1890",
    locatorKind: "Chapter by name",
    aliases: ["the principles of psychology"],
    note:
      "A two-volume work of over a thousand pages; the chapters on habit and on will, which the corpus cites, are among the most-read and were extracted as separate texts in James's lifetime.",
  },
  {
    title: "Walden",
    original: { text: "Walden", language: "English", languageTag: "en" },
    year: "1854",
    locatorKind: "Chapter by name",
    aliases: ["walden"],
  },
  {
    title: "The Life of Reason",
    original: {
      text: "The Life of Reason",
      language: "English",
      languageTag: "en",
    },
    year: "1905–1906",
    locatorKind: "Volume and chapter",
    aliases: ["the life of reason"],
    note:
      "Five volumes published over two years, with the full title 'The Life of Reason, or the Phases of Human Progress'. Volume I is 'Reason in Common Sense'.",
  },
  {
    title: "The Conquest of Happiness",
    original: {
      text: "The Conquest of Happiness",
      language: "English",
      languageTag: "en",
    },
    year: "1930",
    locatorKind: "Chapter",
    aliases: ["the conquest of happiness"],
  },
  {
    title: "The Art of Loving",
    original: {
      text: "The Art of Loving",
      language: "English",
      languageTag: "en",
    },
    year: "1956",
    locatorKind: "Chapter",
    aliases: ["the art of loving"],
  },
  {
    title: "The Courage to Be",
    original: {
      text: "The Courage to Be",
      language: "English",
      languageTag: "en",
    },
    year: "1952",
    locatorKind: "Chapter and section",
    aliases: ["the courage to be"],
  },
  {
    title: "Attente de Dieu",
    original: { text: "Attente de Dieu", language: "French", languageTag: "fr" },
    year: "1950 (posthumous)",
    locatorKind: "Letter or essay by title",
    aliases: ["waiting for god"],
    translator: "Emma Craufurd",
    note:
      "Assembled after Weil's death by Joseph-Marie Perrin from letters and essays she had sent him, so the text's divisions are editorial. The essay on school studies that the corpus cites is one of those assembled pieces, not a chapter Weil wrote.",
  },
  {
    title: "Natural Goodness",
    original: {
      text: "Natural Goodness",
      language: "English",
      languageTag: "en",
    },
    year: "2001",
    locatorKind: "Chapter",
    aliases: ["natural goodness"],
  },
  {
    title: "Intention",
    original: { text: "Intention", language: "English", languageTag: "en" },
    year: "1957",
    locatorKind: "Section (§)",
    aliases: ["intention ("],
    note:
      "Anscombe's sections are numbered and are the standard reference; the work is short, and the section numbers the corpus records are the primary locator.",
  },

  /* ------------------------------------------------------------------ *
   * East Asian Buddhist, and African philosophy
   * ------------------------------------------------------------------ */
  {
    title: "Platform Sutra of the Sixth Patriarch",
    original: {
      text: "六祖壇經",
      language: "Chinese (Classical Chinese)",
      languageTag: "lzh",
      romanised: "Liùzǔ tánjīng",
    },
    year: "Compiled c. 8th–13th century CE across successive recensions",
    locatorKind: "Chapter of the received edition (e.g. Prajna Chapter)",
    aliases: ["platform sutra"],
    translator: "Philip Yampolsky (where the corpus records a translator)",
    note:
      "The text exists in several substantially different recensions. The Dunhuang manuscript, the Huixin edition, the Zongbao edition of 1291, and the Ming text differ in length and in doctrine, and the Zongbao edition is much the longest. A chapter reference without naming the recension is therefore incomplete, and the corpus flags the Zongbao text on the entry that uses it.",
  },
  {
    title: "Record of Linji",
    original: {
      text: "臨濟錄",
      language: "Chinese (Classical Chinese)",
      languageTag: "lzh",
      romanised: "Línjì lù",
    },
    year: "Compiled after 866 CE; edited substantially through the Song dynasty",
    locatorKind: "Section of the record",
    aliases: ["record of linji"],
    translator: "Burton Watson (where the corpus records a translator)",
    note:
      "A posthumous compilation by Linji's disciples, reworked across the Song. The corpus flags two entries as a translation and as abridged, which is the archive's way of saying that their wording does not come from the same edition as the rest.",
  },
  {
    title: "Shūkyō to wa nanika (Religion and Nothingness)",
    original: {
      text: "宗教とは何か",
      language: "Japanese",
      languageTag: "ja",
      romanised: "Shūkyō to wa nanika",
    },
    year: "1961",
    locatorKind: "Chapter, with page in the Van Bragt translation where recorded",
    aliases: ["religion and nothingness"],
    translator: "Jan Van Bragt",
    note:
      "The corpus records Van Bragt page numbers, which are the standard way to cite the English text; a page number without naming the translation is not usable, because the Japanese pagination is different.",
  },
  {
    title: "African Philosophy: Myth and Reality",
    original: {
      text: "Sur la « philosophie africaine »",
      language: "French",
      languageTag: "fr",
    },
    year: "1976 (French); English translation 1983",
    locatorKind: "Chapter",
    aliases: ["african philosophy: myth and reality"],
    translator: "Henri Evans and Jonathan Rée",
    note:
      "The English title is not a translation of the French, which is an essay 'On \"African philosophy\"'. Hountondji's argument is directed against ethnophilosophy — principally against Tempels's Bantu Philosophy and the tradition it founded — which is why the corpus flags the Tempels-related entry.",
  },
  {
    title: "African Philosophy Through Ubuntu",
    original: {
      text: "African Philosophy Through Ubuntu",
      language: "English",
      languageTag: "en",
    },
    year: "1999",
    locatorKind: "Chapter",
    aliases: ["african philosophy through ubuntu"],
    note:
      "Ramose's book is a sustained argument for ubuntu as a basis for philosophy in Africa rather than a survey of the word's meanings; the maxim the corpus cites is used as the entry point to that argument.",
  },
  {
    title: "Cosmopolitanism: Ethics in a World of Strangers",
    original: {
      text: "Cosmopolitanism: Ethics in a World of Strangers",
      language: "English",
      languageTag: "en",
    },
    year: "2006",
    locatorKind: "Chapter, or the named strand of the argument",
    aliases: ["cosmopolitanism"],
    note:
      "Appiah's book develops two strands — the idea that we have obligations to strangers, and the idea that the value of lives is not measured by proximity. The corpus cites the strands by name on some entries, which is more informative than the chapter alone.",
  },
  {
    title: "Socrates and Ọ̀rúnmìlà: Two Patron Saints of Classical Philosophy",
    original: {
      text: "Socrates and Ọ̀rúnmìlà: Two Patron Saints of Classical Philosophy",
      language: "English (with Yoruba terms)",
      languageTag: "en",
    },
    year: "2014",
    locatorKind: "Chapter",
    aliases: ["socrates and ọ̀rúnmìlà"],
    note:
      "Oluwole's comparison makes Yoruba concepts the terms of the argument rather than the objects of it; the corpus leaves the Yoruba diacritics intact, and they are part of the spelling.",
  },
  {
    title: "The Concept of Truth in the Akan Language",
    original: {
      text: "The Concept of Truth in the Akan Language",
      language: "English (with Akan terms)",
      languageTag: "en",
    },
    year: "1980 (collected in Philosophy and an African Culture)",
    locatorKind: "Essay section",
    aliases: ["the concept of truth in the akan language"],
    note:
      "An essay rather than a book, and the year usually attached to it is the year of first publication rather than the year of the collection it appears in — which is why the corpus records 'in Philosophy and an African Culture' on one entry.",
  },

  /* ==================================================================== *
   * Batch 2 — the works the source audit ranked next.
   *
   * `scripts/audit-source-registry.mjs` ranks unregistered works by how many
   * corpus entries cite them and by whether the corpus names them two ways.
   * This batch is the top of that list: every Platonic dialogue the archive
   * quotes (which also fixes the citation agent, since the corpus files the
   * Apology under Socrates), Aristotle's other treatises, the eight works with
   * five or more entries, and the remaining ≥3-entry works.
   * ==================================================================== */
  {
    title: "Republic",
    author: "Plato",
    original: { text: "Πολιτεία", language: "Ancient Greek", languageTag: "grc" },
    year: "c. 375 BCE",
    locatorKind: "Stephanus page and section (e.g. IV 433a)",
    aliases: ["republic"],
    note:
      "Socrates is the principal speaker. The dialogue's argument is conducted by the characters, and the archive therefore presents passages under Socrates while citing the work to Plato — the distinction the corpus's `author` field flattens.",
  },
  {
    title: "Symposium",
    author: "Plato",
    original: { text: "Συμπόσιον", language: "Ancient Greek", languageTag: "grc" },
    year: "c. 385–370 BCE",
    locatorKind: "Stephanus page and section (e.g. 206a)",
    aliases: ["symposium"],
    note:
      "A sequence of speeches on eros, and the speaker matters more here than in most dialogues: the passage on the ladder of beauty is Diotima's, reported by Socrates.",
  },
  {
    title: "Phaedo",
    author: "Plato",
    original: { text: "Φαίδων", language: "Ancient Greek", languageTag: "grc" },
    year: "c. 360 BCE",
    locatorKind: "Stephanus page and section (e.g. 89d)",
    aliases: ["phaedo"],
  },
  {
    title: "Phaedrus",
    author: "Plato",
    original: { text: "Φαῖδρος", language: "Ancient Greek", languageTag: "grc" },
    year: "c. 370 BCE",
    locatorKind: "Stephanus page and section (e.g. 249d)",
    aliases: ["phaedrus"],
  },
  {
    title: "Gorgias",
    author: "Plato",
    original: { text: "Γοργίας", language: "Ancient Greek", languageTag: "grc" },
    year: "c. 380 BCE",
    locatorKind: "Stephanus page and section (e.g. 469b–c)",
    aliases: ["plato, gorgias"],
  },
  {
    title: "Protagoras",
    author: "Plato",
    original: { text: "Πρωταγόρας", language: "Ancient Greek", languageTag: "grc" },
    year: "c. 385 BCE",
    locatorKind: "Stephanus page and section (e.g. 345e)",
    aliases: ["plato, protagoras"],
  },
  {
    title: "Crito",
    author: "Plato",
    original: { text: "Κρίτων", language: "Ancient Greek", languageTag: "grc" },
    year: "c. 390 BCE",
    locatorKind: "Stephanus page and section (e.g. 49b)",
    aliases: ["plato, crito"],
  },
  {
    title: "Theaetetus",
    author: "Plato",
    original: { text: "Θεαίτητος", language: "Ancient Greek", languageTag: "grc" },
    year: "c. 369 BCE",
    locatorKind: "Stephanus page and section (e.g. 155d)",
    aliases: ["theaetetus"],
    note:
      "The dialogue that works through three definitions of knowledge and refutes each without settling on a fourth. It is the source of the 'Socratic' reading of knowledge as true belief with an account.",
  },
  {
    title: "Metaphysics",
    author: "Aristotle",
    original: {
      text: "Τὰ μετὰ τὰ φυσικά",
      language: "Ancient Greek",
      languageTag: "grc",
    },
    year: "c. 350 BCE",
    locatorKind: "Book, chapter, and Bekker number (e.g. I.2, 982b12)",
    aliases: ["metaphysics"],
    note:
      "The title is not Aristotle's: it names the position of the books in the edition — those 'after the Physics' — and the work is a set of treatises rather than a single argument.",
  },
  {
    title: "Politics",
    author: "Aristotle",
    original: { text: "Πολιτικά", language: "Ancient Greek", languageTag: "grc" },
    year: "c. 335–323 BCE",
    locatorKind: "Book, chapter, and Bekker number (e.g. I.2, 1253a)",
    aliases: ["politics"],
  },
  {
    title: "Confessions",
    author: "Augustine of Hippo",
    original: { text: "Confessiones", language: "Latin", languageTag: "la" },
    year: "397–400 CE",
    locatorKind: "Book and section (e.g. X.27)",
    aliases: ["confessions"],
    note:
      "The corpus cites Book X — on memory and time — most often, and one entry gives a range across X.29 and X.31. The section numbers are stable across editions because the divisions are ancient.",
  },
  {
    title: "City of God",
    author: "Augustine of Hippo",
    original: { text: "De civitate Dei", language: "Latin", languageTag: "la" },
    year: "413–426 CE",
    locatorKind: "Book and chapter (e.g. XIV.28)",
    aliases: ["city of god"],
    note:
      "Written over thirteen years in response to the sack of Rome; the later books carry the argument, and citations from Book XIV are usually about the two loves and the two cities.",
  },
  {
    title: "Essays",
    author: "Michel de Montaigne",
    original: { text: "Essais", language: "French (Middle French)", languageTag: "frm" },
    year: "1580; expanded 1588; posthumous edition 1595",
    locatorKind: "Book and essay number (e.g. I.20)",
    aliases: ["essays"],
    note:
      "Three books of essays, and the numbering is by book, so an essay reference without the book is ambiguous. Montaigne revised continually, and the 1595 edition adds material he wrote after 1588 — which means editions differ in what a given essay contains.",
  },
  {
    title: "The Sickness unto Death",
    author: "Søren Kierkegaard",
    original: {
      text: "Sygdommen til Døden",
      language: "Danish",
      languageTag: "da",
    },
    year: "1849",
    locatorKind: "Part and section",
    aliases: ["the sickness unto death"],
    note:
      "Published under the pseudonym Anti-Climacus. Kierkegaard's pseudonyms are not disguises but positions, and the authorship is part of the argument — so 'Kierkegaard says' flattens a distinction he constructed deliberately.",
  },
  {
    title: "Either/Or",
    author: "Søren Kierkegaard",
    original: { text: "Enten – Eller", language: "Danish", languageTag: "da" },
    year: "1843",
    locatorKind: "Volume and section",
    aliases: ["either/or"],
    note:
      "Two volumes with different pseudonymous authors — 'A' and Judge William — who disagree. A passage quoted from the first volume is the aesthete's, not Kierkegaard's, and the second volume is written to refute it.",
  },
  {
    title: "The Concept of Anxiety",
    author: "Søren Kierkegaard",
    original: { text: "Begrebet Angest", language: "Danish", languageTag: "da" },
    year: "1844",
    locatorKind: "Chapter and section",
    aliases: ["the concept of anxiety"],
    note:
      "Written under the pseudonym Vigilius Haufniensis. The book examines anxiety as the dizziness of freedom rather than as a pathology, which is why it is read in philosophy rather than only in psychology.",
  },
  {
    title: "Self-Reliance",
    author: "Ralph Waldo Emerson",
    original: { text: "Self-Reliance", language: "English", languageTag: "en" },
    year: "1841 (in Essays: First Series)",
    locatorKind: "Essay — no internal divisions",
    aliases: ["self-reliance"],
    note:
      "An essay rather than a book, and one of the most quoted in American letters. It has no numbered sections, so the archive cites the essay and quotes the sentence.",
  },
  {
    title: "On Liberty",
    author: "John Stuart Mill",
    original: { text: "On Liberty", language: "English", languageTag: "en" },
    year: "1859",
    locatorKind: "Chapter (I–V)",
    aliases: ["on liberty"],
    note:
      "Five chapters, of which the second — 'Of the Liberty of Thought and Discussion' — supplies most of the passages in general circulation. The corpus has one entry without a chapter, which is the less complete record.",
  },
  {
    title: "Utilitarianism",
    author: "John Stuart Mill",
    original: { text: "Utilitarianism", language: "English", languageTag: "en" },
    year: "1861 (serialised); 1863 (book)",
    locatorKind: "Chapter (I–V)",
    aliases: ["utilitarianism"],
    note:
      "First published in three instalments in Fraser's Magazine before appearing as a book, so the year attached to it depends on which form is meant.",
  },
  {
    title: "Tractatus Logico-Philosophicus",
    author: "Ludwig Wittgenstein",
    original: {
      text: "Logisch-Philosophische Abhandlung",
      language: "German",
      languageTag: "de",
    },
    year: "1921 (German); 1922 (with the English translation)",
    locatorKind: "Decimal proposition number (e.g. 6.54)",
    aliases: ["tractatus"],
    note:
      "The proposition numbers are the citation and they are self-indexing: 6.54 is the seventh remark under 6.5. The corpus names the work both in full and as 'Tractatus'; the numbers are the same in both.",
  },
  {
    title: "Philosophical Investigations",
    author: "Ludwig Wittgenstein",
    original: {
      text: "Philosophische Untersuchungen",
      language: "German",
      languageTag: "de",
    },
    year: "1953 (posthumous)",
    locatorKind: "Part and numbered remark (e.g. §116)",
    aliases: ["philosophical investigations"],
    note:
      "Published after Wittgenstein's death from material he had reworked repeatedly. The first part is a numbered sequence of remarks; the second part is a later addition and its status is disputed. The archive cites § numbers, which is the standard reference.",
  },
  {
    title: "Existentialism Is a Humanism",
    author: "Jean-Paul Sartre",
    original: {
      text: "L'existentialisme est un humanisme",
      language: "French",
      languageTag: "fr",
    },
    year: "1946",
    locatorKind: "Lecture section — no internal divisions",
    aliases: ["existentialism is a humanism"],
    note:
      "The text of a public lecture, published at the request of the audience, and Sartre later said he regretted its formulation — particularly the phrase about existence preceding essence, and the reading of 'we are free' that the lecture invites. It is nonetheless the source of most of his most-quoted lines.",
  },
  {
    title: "Liji (Book of Rites)",
    author: "Confucian tradition",
    original: {
      text: "禮記",
      language: "Chinese (Classical Chinese)",
      languageTag: "lzh",
      romanised: "Lǐjì",
    },
    year: "Compiled c. 1st century BCE from earlier material",
    locatorKind: "Chapter by name",
    aliases: ["liji", "li ki"],
    note:
      "A compilation of ritual texts rather than an authored book. Two of its chapters — the Zhongyong and the Daxue — were removed from it by Zhu Xi and made independent canonical works, which is why the corpus cites them both as 'Liji, <chapter>' and under their own titles.",
  },
  {
    title: "An Inquiry into the Good",
    author: "Nishida Kitarō",
    original: {
      text: "善の研究",
      language: "Japanese",
      languageTag: "ja",
      romanised: "Zen no kenkyū",
    },
    year: "1911",
    locatorKind: "Part and chapter",
    aliases: ["an inquiry into the good"],
    note:
      "Nishida's first book, written before the Kyoto School existed as a movement. Its starting point is 'pure experience' — experience prior to the subject–object split — which Nishida later reworked as basho, place, in response to criticism of the earlier formulation.",
  },
  {
    title: "Gravity and Grace",
    author: "Simone Weil",
    original: {
      text: "La Pesanteur et la grâce",
      language: "French",
      languageTag: "fr",
    },
    year: "1947 (posthumous)",
    locatorKind: "Section and numbered fragment",
    aliases: ["gravity and grace"],
    note:
      "Assembled after Weil's death by Gustave Thibon from her notebooks, chosen and ordered by him. It is therefore a selection rather than a work Weil composed, and the arrangement is Thibon's — a fact worth holding when a fragment is quoted as a considered position.",
  },
  {
    title: "Ḥayy ibn Yaqẓān",
    author: "Ibn Tufayl",
    original: {
      text: "حي بن يقظان",
      language: "Arabic",
      languageTag: "ar",
      romanised: "Ḥayy ibn Yaqẓān",
    },
    year: "c. 1160s",
    locatorKind: "Section of the narrative",
    aliases: ["ḥayy ibn yaqẓān"],
    translator: "Lenn Evan Goodman",
    note:
      "A philosophical fable about a man raised alone on an island who arrives by reason alone at the truths the religious tradition teaches. Ibn Tufayl's point is not that revelation is unnecessary but that the two paths converge — and Ibn Rushd's Decisive Treatise, also in this archive, argues the same question in legal form.",
  },
  {
    title: "Guide of the Perplexed",
    author: "Maimonides",
    original: {
      text: "דלאלה אלחיירין",
      language: "Judeo-Arabic",
      languageTag: "jrb",
      romanised: "Dalālat al-ḥāʾirīn",
    },
    year: "c. 1190",
    locatorKind: "Part, chapter (e.g. III.51)",
    aliases: ["guide of the perplexed"],
    translator: "Shlomo Pines",
    note:
      "Written in Judeo-Arabic for a student, and Maimonides states in the introduction that he has deliberately scattered his argument and withheld conclusions that could be misread. That warning is part of the text: a single chapter quoted alone is the reading he asked against.",
  },
  {
    title: "Letter to Menoeceus",
    author: "Epicurus",
    original: {
      text: "Ἐπιστολὴ πρὸς Μενοικέα",
      language: "Ancient Greek",
      languageTag: "grc",
    },
    year: "c. 300 BCE",
    locatorKind: "Section of the letter",
    aliases: ["letter to menoeceus"],
    note:
      "A short summary letter of Epicurean ethics, preserved in Diogenes Laertius. Its arguments about death — that nothing is bad about it for the person who has it — are the source of the tradition's bad reputation for pleasure-seeking, which the letter itself does not support.",
  },
  {
    title: "Principal Doctrines",
    author: "Epicurus",
    original: { text: "Κύριαι Δόξαι", language: "Ancient Greek", languageTag: "grc" },
    year: "c. 300 BCE",
    locatorKind: "Numbered doctrine (e.g. XV)",
    aliases: ["principal doctrines"],
    note:
      "Forty short doctrines, and the numbering is stable, which makes them unusually easy to cite. They are the compact statement of a philosophy whose full argument is in the letters and in Lucretius's poem.",
  },
  {
    title: "Discourse on the Method",
    author: "René Descartes",
    original: {
      text: "Discours de la méthode",
      language: "French",
      languageTag: "fr",
    },
    year: "1637",
    locatorKind: "Part (I–VI)",
    aliases: ["discourse on the method"],
    note:
      "Written in French, where Descartes's other works were in Latin, and published as a preface to three scientific essays. Its autobiographical form is deliberate: the four rules are presented as the method one man adopted, not as doctrine.",
  },
  {
    title: "Groundwork of the Metaphysics of Morals",
    author: "Immanuel Kant",
    original: {
      text: "Grundlegung zur Metaphysik der Sitten",
      language: "German",
      languageTag: "de",
    },
    year: "1785",
    locatorKind: "Section (I–III) with Academy edition page",
    aliases: ["groundwork"],
    note:
      "A preparatory work: Kant's own note says it is 'nothing more than the search for and establishment of the supreme principle of morality'. The categorical imperative appears in several formulations within Section II, which Kant presents as equivalent — a claim readers have contested ever since.",
  },
  {
    title: "The Gay Science",
    author: "Friedrich Nietzsche",
    original: {
      text: "Die fröhliche Wissenschaft",
      language: "German",
      languageTag: "de",
    },
    year: "1882; second edition 1887 with the fifth book and the poems",
    locatorKind: "Book and aphorism number (e.g. §341)",
    aliases: ["the gay science"],
    note:
      "The aphorism numbers are the locator, and they are stable. Section 341 is the eternal-recurrence question; §276 is the line about wanting to learn nothing new anymore. The 1887 edition added a fifth book, so the year attached to an aphorism matters for which collection it sits in.",
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor Frankl",
    original: {
      text: "Man's Search for Meaning",
      language: "English",
      languageTag: "en",
    },
    year: "1946 (as …trotzdem Ja zum Leben sagen); English 1959",
    locatorKind: "Part — the memoir, or the logotherapy argument",
    aliases: ["man's search for meaning"],
    note:
      "Two parts that are read as one work: the camp memoir and the exposition of logotherapy, written later and appended. The original German title is 'Nevertheless, Say Yes to Life', and the English title was the publisher's.",
  },
  {
    title: "Leviathan",
    author: "Thomas Hobbes",
    original: { text: "Leviathan", language: "English", languageTag: "en" },
    year: "1651",
    locatorKind: "Part and chapter (e.g. I.13)",
    aliases: ["leviathan"],
    note:
      "Written in English, with a later Latin version by Hobbes himself that differs in places. The chapter numbers are the standard reference.",
  },
  {
    title: "Conjectures and Refutations",
    author: "Karl Popper",
    original: {
      text: "Conjectures and Refutations: The Growth of Scientific Knowledge",
      language: "English",
      languageTag: "en",
    },
    year: "1963",
    locatorKind: "Chapter",
    aliases: ["conjectures and refutations"],
    note:
      "A collection of essays, so the chapter is what identifies a passage. The essay on falsification is where the demarcation criterion is stated in the form most often quoted out of its context.",
  },
  {
    title: "Modern Moral Philosophy",
    author: "Elizabeth Anscombe",
    original: { text: "Modern Moral Philosophy", language: "English", languageTag: "en" },
    year: "1958 (Philosophy, vol. 33, no. 124)",
    locatorKind: "Essay section",
    aliases: ["modern moral philosophy"],
    note:
      "An article, not a book — and one that changed the vocabulary. Its three claims are widely quoted separately, but the argument for them is cumulative and the second depends on the first.",
  },
  {
    title: "The Kuzari",
    author: "Judah Halevi",
    original: {
      text: "ספר הכוזרי",
      language: "Judeo-Arabic",
      languageTag: "jrb",
      romanised: "Sefer ha-Kuzari",
    },
    year: "c. 1140",
    locatorKind: "Part (I–V) with section",
    aliases: ["the kuzari"],
    note:
      "A dialogue in which a philosopher, a Christian, a Muslim, and a Jew answer the king's questions, with the Jewish case presented last and at most length. Written in Judeo-Arabic; the Hebrew title is the one most often used, and an English citation should say which translation it follows.",
  },
  {
    title: "Mūlamadhyamakakārikā",
    author: "Nāgārjuna",
    original: {
      text: "मूलमध्यमककारिका",
      language: "Sanskrit",
      languageTag: "sa",
      romanised: "Mūlamadhyamakakārikā",
    },
    year: "c. 150–250 CE",
    locatorKind: "Chapter and verse (e.g. 24.18)",
    aliases: ["mūlamadhyamakakārikā"],
    note:
      "The foundational text of Madhyamaka. Chapter 24, verses 18 and 19 — the identification of emptiness with dependent origination — are the most quoted in the whole literature and the ones most often read in isolation from the chapter's argument, which is about why a theory of emptiness is compatible with the Buddha's teaching on the two truths.",
  },
  {
    title: "Philosophy of Liberation",
    author: "Enrique Dussel",
    original: {
      text: "Filosofía de la liberación",
      language: "Spanish",
      languageTag: "es",
    },
    year: "1977; revised 1980",
    locatorKind: "Section number (e.g. §1.1.2.2)",
    aliases: ["philosophy of liberation"],
    translator: "Aquilina Martínez and Christine Morkovsky",
    note:
      "Cited by section rather than page, and the sections are the ones in the English translation. Dussel reworked the book substantially between editions, so the edition is part of the citation.",
  },
  {
    title: "The Book of Changes (Yijing)",
    original: {
      text: "易經",
      language: "Chinese (Classical Chinese)",
      languageTag: "lzh",
      romanised: "Yìjīng",
    },
    year: "Core text c. 9th–7th century BCE; commentary layers c. 4th–2nd century BCE",
    locatorKind: "Hexagram name and commentary layer (e.g. Qian, Commentary on the Images)",
    aliases: ["yijing"],
    note:
      "Two strata cited as one text: the Zhōuyì divination manual and the Yì zhuàn commentaries. Every passage the corpus cites comes from the commentary layer, and the locator says which — the Commentary on the Images, the Xìcí — because that is the difference between quoting the oracle and quoting its interpreters.",
  },
  {
    title: "The Great Learning (Daxue)",
    author: "Confucian tradition",
    original: {
      text: "大學",
      language: "Chinese (Classical Chinese)",
      languageTag: "lzh",
      romanised: "Dàxué",
    },
    year: "Warring States period, c. 4th–3rd century BCE",
    locatorKind: "Classic passage or commentary passage",
    aliases: ["the great learning"],
    note:
      "A chapter of the Liji raised to independent canonical status by Zhu Xi in the twelfth century. The corpus cites it both as 'Liji, The Great Learning' and under its own title; those are one text, and the split between the classic section and Zengzi's commentary is a traditional attribution rather than a manuscript fact.",
  },
  {
    title: "The Doctrine of the Mean (Zhongyong)",
    author: "Confucian tradition",
    original: {
      text: "中庸",
      language: "Chinese (Classical Chinese)",
      languageTag: "lzh",
      romanised: "Zhōngyōng",
    },
    year: "Warring States period, c. 4th–3rd century BCE",
    locatorKind: "Chapter, 1–33",
    aliases: ["the doctrine of the mean"],
    note:
      "Also a Liji chapter promoted to the Four Books by Zhu Xi. The standard English title is a rendering the term does not quite bear — zhōng is equilibrium before the feelings are aroused and yōng is constancy, not a compromise between extremes. See the glossary entry on zhongyong.",
  },
  {
    title: "Dhammapada",
    original: {
      text: "धम्मपद",
      language: "Pali",
      languageTag: "pi",
      romanised: "Dhammapada",
    },
    year: "Composed orally c. 3rd century BCE; written down later",
    locatorKind: "Verse number (e.g. 183)",
    aliases: ["dhammapada"],
    note:
      "A verse collection of the Theravāda canon, filed in this archive as the passage's author because the verses speak in an anonymous collective voice. The archive cites the verse number used by the Pali Text Society edition; later translations sometimes number the same verse differently, so a citation should name the edition it follows.",
  },
  {
    title: "De Rerum Natura",
    author: "Lucretius",
    original: {
      text: "Dē rērum nātūrā",
      language: "Latin",
      languageTag: "la",
    },
    year: "c. 50 BCE",
    locatorKind: "Book and line numbers (e.g. I.54)",
    aliases: ["de rerum natura", "on the nature of things"],
    note:
      "A didactic epic presenting Epicurus' physics and ethics in Latin verse. Line numbers are stable across editions, which makes the locator more checkable than most, and the archive records the book and line rather than a page — the poem is the edition.",
  },
  {
    title: "Selected Aphorisms",
    author: "Al-Farabi",
    original: {
      text: "فصول منتزعة",
      language: "Arabic",
      languageTag: "ar",
      romanised: "Fuṣūl muntazaʿa",
    },
    year: "9th–10th century CE",
    locatorKind: "Aphorism number, with the translation named (e.g. §1, Butterworth)",
    aliases: ["selected aphorisms"],
    note:
      "The English renders Charles Butterworth's translation, and the archive records the translator with the aphorism number because the numbering follows his edition; other English renderings number the aphorisms differently.",
  },
  {
    title: "Toward Decolonizing African Philosophy and Religion",
    author: "Kwasi Wiredu",
    year: "1998",
    locatorKind: "Journal article — African Studies Quarterly 1.4",
    aliases: ["toward decolonizing african philosophy and religion"],
    note:
      "An essay rather than a book, first printed in African Studies Quarterly; the archive cites the article because it circulates under excerpted titles, and the full article is where the argument about place-holder and conceptual decolonization is actually made.",
  },
];

/**
 * Registry coverage, used by the build audit rather than by page rendering.
 */
export function sourceRegistryStats() {
  return { works: works.length, aliases: works.reduce((n, w) => n + w.aliases.length, 0) };
}
