/**
 * Per-thinker sourcing profiles for the /quote-source/[thinker] pages.
 *
 * The valuable thing on a sourcing page is not another biography — the archive
 * already has thinker pages for that — but the answer to “can I check this,
 * and in what?” For most of these authors the honest answer involves a
 * citation system, a translator, or an edition split that a reader has no way
 * of knowing about in advance, and getting it wrong is how a real quotation
 * ends up quoted with a source nobody can find.
 *
 * Every field is specific to the author. Nothing here is written to a formula:
 * Aristotle has Bekker numbers, Beauvoir has two English editions of different
 * lengths, Kierkegaard has pseudonyms who are the nominal authors of the works
 * they sign. Those are four different problems, and a template that flattened
 * them into one paragraph would be worth nothing.
 */

export type ThinkerSourcing = {
  /** The language (or languages) the works were written in. */
  language: string;
  /** What this archive cites the author from. */
  corpus: string;
  /** How a citation should be written so a reader can actually find it. */
  citation: string;
  /** The specific thing that goes wrong when people quote this author. */
  hazard: string;
};

export const thinkerSourcing: Record<string, ThinkerSourcing> = {
  Aristotle: {
    language: "Ancient Greek",
    corpus:
      "The Nicomachean Ethics (I.1, I.7, II.1, II.6, VIII, IX), the Metaphysics (I.1, I.2), and the Politics (I.2).",
    citation:
      "Use the Bekker number — 1107a, 982b12 — not a page number. Bekker numbering was fixed in the nineteenth century and is printed in the margin of every scholarly edition and translation, so it is the one locator that survives a change of translator.",
    hazard:
      "The works we have are lecture notes and treatises rather than the dialogues Aristotle wrote for publication; the flowing prose is the editor's or the translator's, and the numbered arguments are the text. Quoting a polished English sentence and calling it “what Aristotle wrote” overstates how finished the surviving text is.",
  },

  Confucius: {
    language: "Classical Chinese",
    corpus: "The Analects (Lunyu), cited by book and passage.",
    citation:
      "Book and passage number, as in Analects 2.17. The numbering is stable across editions, which is why it is worth giving in place of a page — but it should always come with the translator's name, because the English differs enormously between them.",
    hazard:
      "Nothing in the Analects was written by Confucius. It is a collection compiled by later disciples, in which the phrase “The Master said” marks reported speech. The most widely circulated English aphorisms descend from James Legge's nineteenth-century translation, which renders the pronoun 之 as “the truth” — so a sentence that sounds like a timeless maxim is often Legge's diction, not the Chinese.",
  },

  Plato: {
    language: "Ancient Greek",
    corpus:
      "The Republic (IV, V, VI, VII, VIII), the Symposium, the Phaedo, the Gorgias, the Theaetetus, and the Phaedrus.",
    citation:
      "Stephanus numbers — Republic 473c–d, Apology 38a. These are the page markers of the 1578 Geneva edition and are printed in the margin of every modern text, so they identify the passage regardless of translation or pagination.",
    hazard:
      "Socrates is a character in these dialogues and does not usually speak for Plato. The Apology is the closest thing to a record of Socrates, and even there the speech is Plato's literary composition. Attributing a dialogue's argument to Socrates as his own view is the single most common category error in this material.",
  },

  Seneca: {
    language: "Latin",
    corpus:
      "The Letters to Lucilius (Epistulae Morales), cited by letter and section, and one passage from the tragedy Hercules Furens.",
    citation:
      "Letter and section — Ep. 1.1–3, Ep. 107.11 — because the letters are short and a bare letter number can point at a passage of several paragraphs. Cite the tragedy by verse number instead; it is a different work in a different genre.",
    hazard:
      "Two of the letters in this archive quote earlier authors by name, Cleanthes and Hecato, and Seneca says so himself. A line whose value comes from its being inside a letter of Seneca is not the same as a line Seneca wrote, and lumping the two together credits him with sentences he was passing on.",
  },

  Mencius: {
    language: "Classical Chinese",
    corpus:
      "The Mengzi, cited by book — Gaozi I and II, Jinxin I and II, Lilou, Gongsun Chou, Teng Wen Gong, Liang Hui Wang.",
    citation:
      "Book and passage, with the translator named. The Chinese book titles are conventionally kept in romanisation in English citation, so “Mencius, Gaozi II” identifies the roll even in a translation that calls it something else.",
    hazard:
      "The Mengzi is a compiled record of Mencius' conversations and arguments, not a book he sat down and wrote, and the English title “Mencius” names both the man and the text. A sentence beginning “Mencius said” is a citation convention, not an eyewitness claim.",
  },

  Laozi: {
    language: "Classical Chinese",
    corpus: "The Daodejing, cited by chapter.",
    citation:
      "Chapter number alone is weak here. Chapter numbering comes from the received text; the Mawangdui and Guodian manuscripts found in the twentieth century arrange the material differently, so say which text you are numbering.",
    hazard:
      "The author is a scholarly problem before the text is. “Laozi” may name one person, a tradition, or a composite figure, and the Daodejing is a verse compilation with no continuous argument. Quoting a chapter as Laozi's opinion attributes a collective text to a possibly legendary individual.",
  },

  "Friedrich Nietzsche": {
    language: "German",
    corpus:
      "The Gay Science (§276, §341), Twilight of the Idols (Maxims and Arrows §8), Thus Spoke Zarathustra, and Ecce Homo.",
    citation:
      "Named work, numbered section (the §), and the translator. Nietzsche's sections are short and often self-contained, so a section number is a precise locator — but the English wording changes a great deal between the Kaufmann and Hollingdale translations.",
    hazard:
      "Nietzsche did not publish a book called The Will to Power. It is a compilation assembled by his sister Elisabeth Förster-Nietzsche from the notebooks, and its contents and arrangement are editorial. Any quotation sourced to it is citing an editor's construction, and the same problem affects early German editions of works he did publish.",
  },

  "Hannah Arendt": {
    language: "English and German",
    corpus:
      "The Human Condition, The Life of the Mind, Men in Dark Times, Eichmann in Jerusalem, and On Violence.",
    citation:
      "Chapter and section, plus the book's year. Arendt's books have been reissued in several paperback impressions with different pagination while keeping the same text, so a page number is the weakest possible locator for her.",
    hazard:
      "Arendt wrote her later books in English and then reworked them in German, so two authorised versions exist and they are not always equivalent. She also wrote in long, deliberately qualified sentences; a quotation pulled from the middle of one and presented as a standalone assertion usually reverses the emphasis she built up to it.",
  },

  Zhuangzi: {
    language: "Classical Chinese",
    corpus:
      "The Zhuangzi — the Inner Chapters (Free and Easy Wandering, Discussion on Making All Things Equal, The Primacy of Nourishing Life, The Great Ancestral Teacher) and chapters from the Outer and Miscellaneous books.",
    citation:
      "Give the Chinese chapter number as well as the translated title. Chapter names vary wildly between translators — the same book is “Qiwulun,” “Discussion on Making All Things Equal,” and “On the Equality of Things” — so the number is the only stable identifier.",
    hazard:
      "The received text has thirty-three chapters in Guo Xiang's fourth-century recension, and only the first seven, the Inner Chapters, have a strong claim to a single hand. Quoting from the Outer Chapters as the words of Zhuangzi assigns to one person material that most scholars treat as later work in his tradition.",
  },

  "Marcus Aurelius": {
    language: "Koine Greek",
    corpus: "The Meditations, cited by book and section.",
    citation:
      "Book and section — Meditations VI.54 — because the numbering is stable and the individual sections are short. Name the translator: the Greek is compressed and the English renderings differ markedly.",
    hazard:
      "The Meditations is a private notebook, written to himself and never prepared for publication; the Greek title means “to himself.” Treating its entries as considered doctrines on offer to a reader misses what they are. Several entries also restate Epictetus, so a thought can be Marcus' paraphrase of another Stoic without any quotation marks.",
  },

  "Augustine of Hippo": {
    language: "Latin",
    corpus:
      "The Confessions (I.1, VIII.12, X.27–31, XI.14), City of God (XIV.28), and De vera religione.",
    citation:
      "Book, chapter, and section for the Confessions — the standard convention, and the only one that works across the many translations. For the Sermons and Letters, name the collection and numbering scheme, because sermon numbering was reshuffled in modern critical editions.",
    hazard:
      "A large body of devotional sentences circulates as Augustine that is not in any of his works, and the preachier the line the more likely that is. When a sentence is traceable only to a nineteenth-century anthology of “beautiful thoughts,” the honest citation is the anthology.",
  },

  "Baruch Spinoza": {
    language: "Latin",
    corpus:
      "The Ethics (I, II Prop. 44, III Preface, IV Prop. 67, V Prop. 23 and 42), and the Theological-Political Treatise.",
    citation:
      "Part, proposition, and scholium — Ethics V, Prop. 42 — because the Ethics is laid out as a geometric demonstration and those divisions are the text's own skeleton. The Tractatus is cited by chapter.",
    hazard:
      "The Ethics was published posthumously in 1677, in Latin, and Spinoza had suppressed or withheld earlier versions of parts of it for political reasons. Quoting a proposition stripped of its demonstration takes a conclusion out of the argument it was proved from, which in a book built to be proved is a substantial loss.",
  },

  "Ludwig Wittgenstein": {
    language: "German",
    corpus:
      "The Tractatus Logico-Philosophicus (5.6, 6.52, 6.54, 7) and the Philosophical Investigations (43, 66, 116, 129).",
    citation:
      "Decimal number for the Tractatus, remark number for the Investigations. Both systems are the books' own and are preserved in every translation — but always name the work, because the two are usually cited by bare number and the numbers overlap.",
    hazard:
      "Wittgenstein wrote in German and G. E. M. Anscombe translated the Investigations, so the English aphorism is hers as much as his. More importantly the two books contradict one another: quoting the Tractatus and the Investigations in the same list as “Wittgenstein's view” presents a thinker's abandoned position and its refutation as one doctrine.",
  },

  "Simone de Beauvoir": {
    language: "French",
    corpus:
      "The Second Sex (1949), in the introduction and both volumes, and The Ethics of Ambiguity (1947).",
    citation:
      "Name which English edition you are quoting. The two standard ones do not contain the same text, so a citation that gives only “The Second Sex” is ambiguous between them.",
    hazard:
      "The 1953 English translation by H. M. Parshley was heavily abridged and its cuts were not marked, and a full translation by Borde and Malovany-Chevallier followed in 2009. For six decades English readers quoted Beauvoir from a text that had lost a substantial portion of her argument, and the two editions differ in wording as well. A quotation cannot be checked without knowing which one it came from.",
  },

  "Bertrand Russell": {
    language: "English",
    corpus:
      "The Conquest of Happiness, A Free Man's Worship, Why I Am Not a Christian, the Autobiography, and A History of Western Philosophy.",
    citation:
      "Original essay title and year, not the title of the collection you happen to own. Russell's essays were gathered into several different volumes, in Britain and America, under different titles.",
    hazard:
      "The same essay circulates under two or three titles, so two readers can appear to be citing different works when they are citing one. His shorter pieces were also written for magazines and lectures, which means the polished standalone aphorism is often a passage from an occasional piece rather than a sustained statement of position.",
  },

  "Wang Yangming": {
    language: "Classical Chinese",
    corpus:
      "Instructions for Practical Living (Chuanxilu), by juan and entry, plus one entry recorded as traditional last words.",
    citation:
      "Juan (volume) and entry number. The Chuanxilu is a record of conversations and letters compiled by disciples, and the numbering is what identifies an entry.",
    hazard:
      "The famous deathbed saying attributed to him is not in the Chuanxilu; it is a traditional attribution recorded by later followers, and this archive files it as such. Wang also used 知行合一 (“the unity of knowledge and action”) as a technical term against Zhu Xi's teaching, so the phrase does not mean what “knowledge and action go together” suggests to a modern reader.",
  },

  "Kwasi Wiredu": {
    language: "English",
    corpus:
      "Articles including “The Concept of Truth in the Akan Language,” “The Need for Conceptual Decolonization in African Philosophy,” and “Democracy and Consensus in African Traditional Politics,” several of them collected in Cultural Universals and Particulars (1996).",
    citation:
      "Journal title, volume, and year for the article as first published, or the chapter in Cultural Universals and Particulars — and say which, because the reprint and the original have different locators.",
    hazard:
      "Wiredu writes in English about concepts carried in Akan, and his method — conceptual decolonization — turns on the fact that a word like “truth” does not map cleanly onto the Akan term he is discussing. Quoting him in English to make a claim about Akan thought, without the term he was working with, produces a sentence he would not accept.",
  },

  "Michel de Montaigne": {
    language: "French",
    corpus:
      "The Essays (I.20, I.26, I.31, I.39, II.12, III.2, III.13), and the tower motto recorded as cf. II.12.",
    citation:
      "Book and chapter — Essays I.20 — which is the standard convention and is stable across editions. Where a passage was added after 1588, scholarly editions mark it; say so if the distinction matters to the point you are making.",
    hazard:
      "Montaigne revised the Essays continuously and the posthumous 1595 text contains large additions made after the first two editions, marked in modern editions as layer [C]. A sentence may therefore be in the 1580 book or added near the end of his life, which is a real difference in what he had settled on. The tower motto “Que sais-je?” is an inscription, not a line from the Essays, and is flagged here as such.",
  },

  "Blaise Pascal": {
    language: "French",
    corpus:
      "The Pensées, cited by fragment number in the Brunschvicg scheme, and passages from the Lettres provinciales elsewhere in the corpus.",
    citation:
      "Fragment number plus the numbering scheme — Brunschvicg, Lafuma, or Sellier. This is not pedantry: the schemes number the fragments differently, so “§200” in one edition is not the fragment that holds the same sentence in another.",
    hazard:
      "The Pensées is not a book. Pascal died in 1662 with the material in bundles of papers, and it was assembled and numbered by editors over three centuries. So a Pensées citation always cites an editorial arrangement as well as an author, and the same thought can sit at two different numbers in two standard editions.",
  },

  "Immanuel Kant": {
    language: "German",
    corpus:
      "The Groundwork of the Metaphysics of Morals, the Critique of Practical Reason, the Critique of Judgment, and What Is Enlightenment?",
    citation:
      "Akademie edition volume and page (Ak. 4:421) for the moral works, or the A/B pagination of the first and second editions for the first Critique. Both systems are printed in good translations and neither depends on which one you own.",
    hazard:
      "Kant's key terms have no settled English equivalents — the same German word is rendered differently by different translators, and the differences are load-bearing. Quoting two translations of the same sentence side by side as if they were one text papers over a genuine disagreement about what Kant meant.",
  },

  "Arthur Schopenhauer": {
    language: "German",
    corpus:
      "The World as Will and Representation (Vol. 1, and Book IV), Parerga und Paralipomena, and Aphorisms on the Wisdom of Life.",
    citation:
      "Name the volume as well as the work, and give the section number for Vol. 1 and the chapter for Vol. 2 — the two volumes are organised differently. The Aphorisms are a part of Parerga, not a separate book.",
    hazard:
      "Parerga und Paralipomena is a miscellany of essays, and the Wisdom of Life material that supplies most circulating Schopenhauer aphorisms is only one section of it. Citing the essays' own titles is the honest locator; citing the volume leaves a reader hunting through a very long book.",
  },

  "Søren Kierkegaard": {
    language: "Danish",
    corpus:
      "The Sickness unto Death, The Concept of Anxiety, Either/Or, and the Journals (1843).",
    citation:
      "Name the pseudonym as well as Kierkegaard. The Sickness unto Death is signed by Anti-Climacus, The Concept of Anxiety by Vigilius Haufniensis, and Either/Or by two more, because the pseudonymity is part of the work rather than a pen name.",
    hazard:
      "Kierkegaard published his philosophical books under pseudonyms whose positions he did not simply hold, and he said so explicitly in “A First and Last Explanation,” which he signed with his own name. Quoting one of the pseudonyms as Kierkegaard's opinion is exactly the reading he wrote the explanation to prevent. The Journals are a separate corpus with their own numbering and dates.",
  },

  "David Hume": {
    language: "English",
    corpus:
      "A Treatise of Human Nature (I.4.6, I.4.7, II.3.3), the Enquiry Concerning Human Understanding (V.1, X), the Enquiry Concerning the Principles of Morals, and The Sceptic (1742).",
    citation:
      "Section and part — Treatise II.3.3 — or the Enquiry's section number. Distinguish the two works: same subtitle, different books, published nine years apart.",
    hazard:
      "Hume reworked the Treatise's material in the first Enquiry and said in his own advertisement that the later work contained his philosophical sentiments and principles. So treating a Treatise passage and an Enquiry passage as interchangeable statements of his view is not safe — where the two diverge, the Enquiry is the revision.",
  },

  "Simone Weil": {
    language: "French",
    corpus:
      "Gravity and Grace, Waiting for God, the letter to Joë Bousquet of 13 April 1942, and The Iliad, or the Poem of Force.",
    citation:
      "Check whether the piece is something Weil finished and published. The Iliad essay (1940–41, published under the pseudonym Émile Novis) is; most of the rest of the corpus is posthumous and was arranged by editors, so the book title is not a source in the ordinary sense.",
    hazard:
      "Gravity and Grace was assembled after her death by Gustave Thibon from her notebooks, and its chapter structure is his. A sentence can therefore appear in Gravity and Grace without appearing in anything Weil published or completed, and the book's arrangement suggests a systematic treatise she never wrote. Naming the editor's organisation as the source is more accurate than naming her.",
  },

  Dhammapada: {
    language: "Pali",
    corpus: "The Dhammapada, cited by verse number.",
    citation:
      "Verse number plus the recension. The Pali collection has 423 verses; the Sanskrit Udānavarga and the Chinese versions differ in number and arrangement, so “Dhammapada 50” means different text in different traditions.",
    hazard:
      "There is no author. The Dhammapada is a verse anthology drawn from the Pali canon's Khuddaka Nikāya, compiled by a tradition, and the verses are unattributed by design. Quoting it as the Buddha's words is a devotional convention rather than a sourcing claim, and the corpus here is catalogued under the text rather than a person for that reason.",
  },

  "Frantz Fanon": {
    language: "French",
    corpus:
      "Black Skin, White Masks (1952), its conclusion, and The Wretched of the Earth (1961) with its chapter “On National Culture.”",
    citation:
      "Name the English translator. Black Skin, White Masks has been translated twice in full and The Wretched of the Earth twice as well, so “Fanon, The Wretched of the Earth” does not identify the words on the page.",
    hazard:
      "Both major works circulate in English in two translations produced decades apart, and the later ones were made specifically because the earlier ones were felt to blunt Fanon's argument. Two people quoting Fanon in English can therefore be quoting the same French sentence in different words, and pulling one sentence out of the long closing pages of Black Skin, White Masks flattens a passage that builds.",
  },
};

export const MIN_QUOTES_FOR_SOURCE_PAGE = 8;

/**
 * Whether a thinker has a source page of their own at /quote-source/<author>.
 *
 * Shared rather than re-derived, because it was re-derived and the copies
 * drifted: the hub's register and the per-passage source record both linked the
 * author's source page for thinkers the route never builds, which put ten dead
 * links in the built output. The route, the hub, and the record now ask the
 * same function, so links and routes cannot disagree again.
 */
export function hasThinkerSourcePage(
  author: string,
  quoteCount: number,
): boolean {
  return quoteCount >= MIN_QUOTES_FOR_SOURCE_PAGE && Boolean(thinkerSourcing[author]);
}

/**
 * Guard against a thinker slug and a passage slug colliding inside the single
 * /quote-source/[slug] route. A silent overwrite would drop a page the sitemap
 * still advertises, and the failure would show up only as a crawl error weeks
 * later, so the build fails loudly instead.
 */
export function assertNoSourceSlugCollision(paths: string[]) {
  const seen = new Map<string, number>();
  for (const path of paths) {
    seen.set(path, (seen.get(path) ?? 0) + 1);
  }
  const collisions = [...seen.entries()].filter(([, count]) => count > 1);
  if (collisions.length) {
    throw new Error(
      `Duplicate /quote-source paths: ${collisions
        .map(([path, count]) => `${path} (${count})`)
        .join(", ")}`,
    );
  }
}
