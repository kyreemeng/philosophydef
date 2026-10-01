/**
 * Editorial content for the quote-sourcing hub at /quote-source.
 *
 * This is the page the whole sourcing line of work exists to support. Search
 * Console shows the archive's only top-3 positions sit in the "quote source"
 * family, and the site's single strongest verified term is `quote source` at
 * position 2.4 — but those impressions land on incidental pages that were
 * never built for the question. The hub answers the question directly.
 *
 * The method section is the part competitors do not have. Every quotation
 * aggregator in the top ten for these queries reproduces the passage; none of
 * them explains how to check one. The examples are drawn from the verification
 * register in `quote-verification.ts` so the guidance stays tied to cases this
 * archive has actually worked through rather than to generic advice.
 */

export type TracingStep = {
  heading: string;
  summary: string;
  paragraphs: string[];
  pitfalls: string[];
};

export const tracingSteps: TracingStep[] = [
  {
    heading: "Go to the primary text, not to another quotation site",
    summary:
      "Aggregators copy from each other, so a phrase can appear on fifty pages and still have no located source behind it. The first move is always to leave the quotation sites and open the work itself.",
    paragraphs: [
      "A quotation site is a record of circulation, not a record of authorship. When fifty sites carry the same sentence, that tells you the sentence circulates; it does not tell you someone checked it. Most of them copied from one another, and the earliest link in that chain is often a nineteenth-century anthology, a speech, or a film — which is why so many confidently sourced lines turn out to have no page number behind them.",
      "The practical test: if every page you can find gives the author but no work, no chapter, and no translator, you have circulation and not a source. Stop searching for the quotation and start searching for the work. A quote that genuinely comes from a citable text has a locator, and someone somewhere has printed that locator.",
      "For a philosopher, the author's own corpus is the place to look. If the archive search of a philosopher's complete works returns nothing resembling the sentence, the next question is not “where else is this quoted” but “does this author ever say anything like this.” Those are different investigations, and only the second can end in a negative result.",
      "Reading the surrounding passage is not optional diligence — it is usually what settles the matter. Half of the attribution problems in this corpus resolve the moment you look at the sentence before and after the famous one. Descartes does not write “cogito ergo sum” in the Meditations; he writes “Ego sum, ego existo.” Bacon does not stop at “knowledge and power meet in one”; the aphorism explains that this is because an unknown cause loses its effect. In both cases the truncated version and the located version say different things.",
      "One more trap in this step: search engines are much better at finding the popular form than the correct one. Querying a suspected misquotation will return thousands of pages repeating it, because that is what people wrote down. If you want to find out whether a sentence is in a work, search the work, not the sentence.",
    ],
    pitfalls: [
      "The sentence appears on many sites but every one of them gives the same missing locator — that is shared copying, not corroboration.",
      "A “source” that turns out to be a film, an advertisement, a self-help book, or a motivational poster rather than the author's text.",
      "A source given only as a title with no chapter, book, section, or line — checkable in principle, unverified in practice.",
    ],
  },
  {
    heading: "Check the wording against the edition, the translator, and the numbering",
    summary:
      "Even a correctly attributed line can be the wrong words. Translation choices, edition differences, and the numbering scheme of the edition you are citing all change what “the source” means.",
    paragraphs: [
      "A quotation in English from a non-English author has at least two sources: the passage in the original language and the English rendering you are reading. Those are not the same document, and neither is the other's deputy. When someone asks who said a line and what the exact wording is, the honest answer names both.",
      "Translation choices are not cosmetic. Marcus Aurelius' Meditations VI.54 says the swarm, not the hive — the Greek is συμμέλει, the colony, and rendering it as “hive” names the structure instead of the members. That one substitution tilts a Stoic claim about natural membership toward a claim about institutions and conformity. In the Analects, 之 is a pronoun referring back to the Way, and nineteenth-century translators rendered it “the truth”; the resulting English sentence, “they who know the truth,” has been quoted as Confucius ever since, complete with Victorian syntax the Chinese does not have.",
      "Editions matter as much as translations. The Pensées of Pascal are numbered differently in the Brunschvicg, Lafuma, and Sellier editions, so a citation that gives only a section number is unusable unless you also name the scheme. A reader checking “§200” in a Lafuma-numbered edition will find a different fragment and conclude the citation is wrong. Naming the edition is part of giving a source, not a refinement of it.",
      "Where the original is a letter, a speech, or an uncollected note rather than a published book, say so and give the date. “Attention is the rarest and purest form of generosity” has no page in a printed treatise: it is in Simone Weil's letter to Joë Bousquet of 13 April 1942, and the fact that it is a letter to a specific wounded poet is part of what the sentence means. Filling the gap with the title of an assembled collection is a small lie that makes the citation look tidier and the line look less situated than it is.",
      "When you cannot establish an original, the correct output is not a guess — it is a statement of what is established. Several passages in this archive are recorded as traditional attributions or later paraphrases, because that is what the evidence supports. A source field that says “paraphrase of the idea” is more useful to a reader than a confident chapter number nobody can check.",
    ],
    pitfalls: [
      "Citing a section number without naming the edition scheme — different schemes relocate the same fragment.",
      "Presenting a translation as the author's words when the English is doing substantial interpretive work.",
      "Treating the title of a posthumous collection as the source of a line that appears in a letter or an unpublished note.",
    ],
  },
  {
    heading: "Test the attribution itself: occasion, style, and earliest appearance",
    summary:
      "Before crediting anyone, ask whether this author had the occasion, the vocabulary, and the opportunity to say it. Three cheap tests catch most misattributions.",
    paragraphs: [
      "The occasion test asks what situation the sentence would have to arise in. “I disapprove of what you say, but I will defend to the death your right to say it” is the standard example, and it fails on this test in a specific way: the phrasing is a late-Victorian formulation of a liberal principle. It was written by Evelyn Beatrice Hall in her 1906 biography of Voltaire, under the pen name S. G. Tallentyre, as her own summary of his outlook. Voltaire's actual surviving remark on the subject, in a letter of 1770, is blunter, narrower, and much less quotable — which is exactly why the tidy version displaced it.",
      "The style test asks whether the prose sounds like the author and the period. “They who know the truth” carries the syntax of nineteenth-century English translation; it is not something a Warring States text says. “That which does not kill us makes us stronger” moves Nietzsche's first-person singular German — mich, me — into a plural, and the plural generalises a claim he made about himself. Neither alteration is dishonesty in itself, but both change the sentence's scope, and quoting them as the author's wording hides the change.",
      "The earliest-appearance test is the strongest of the three and the most laborious. Find the oldest document you can that contains the sentence. If the trail consistently runs back to an anthology, a compilation, a speech, or a twentieth-century author rather than to the named source, you have found the real origin and the honest citation is the one you found. Doing this properly sometimes means reading a nineteenth-century translation's preface to discover that the translator's own prose has been absorbed into the text.",
      "The three tests interact, and one failing should make you doubt the others. A sentence that fails the occasion test usually also has a suspiciously tidy style and a trail that stops at an anthology. When all three point the same way, the practical conclusion is not that the quotation is worthless but that it should be presented as what it is: a formulation by someone else, or a summary of an idea, rather than the author's words.",
      "Finally, distinguish a misattribution from a paraphrase. “No one errs willingly” really is Socrates' position in the Protagoras, though the five-word form is a compression; “I know that I know nothing” compresses something narrower in the Apology and adds a paradox. Both are paraphrases, and a paraphrase is not a fraud — it is a paraphrase. The error is presenting it as a quotation, which is why a sourcing page's job is to say which of the two a reader is holding.",
    ],
    pitfalls: [
      "A quotation whose earliest traceable appearance is a compilation rather than the named author's work.",
      "A sentence that has been smoothed into modern idiom — tidy aphorisms usually have tidy, recent authors.",
      "A paraphrase presented as a quotation, which invites the reader to treat a summary as literal wording.",
    ],
  },
];

export type Misattribution = {
  quote: string;
  creditedTo: string;
  reallyWrittenBy: string;
  note: string;
  /** Archive page that carries the corrected record, when one exists. */
  archiveHref?: string;
};

export const commonlyMisattributed: Misattribution[] = [
  {
    quote:
      "I disapprove of what you say, but I will defend to the death your right to say it.",
    creditedTo: "Voltaire",
    reallyWrittenBy: "Evelyn Beatrice Hall (as S. G. Tallentyre), 1906",
    note:
      "Hall wrote the sentence in her biography The Friends of Voltaire as her own summary of his attitude. Voltaire's surviving remark, in a letter of 1770, is narrower and considerably less quotable.",
    archiveHref: "/quotes/q0395",
  },
  {
    quote: "I know that I know nothing.",
    creditedTo: "Socrates",
    reallyWrittenBy: "No ancient source; a later compression",
    note:
      "The Apology has a more careful sentence: where Socrates does not know, he also does not believe he knows. The popular version turns a statement about his own position into a paradox about knowledge in general.",
    archiveHref: "/quotes/q0002",
  },
  {
    quote: "The heart has its reasons, which reason cannot know.",
    creditedTo: "Blaise Pascal",
    reallyWrittenBy: "Blaise Pascal — but mistranslated",
    note:
      "The French says reason does not know them, not that they cannot be known. The usual English makes Pascal a critic of reason rather than a theologian arguing that discursive intellect has not yet reached what the heart grasps.",
    archiveHref: "/quotes/q0059",
  },
  {
    quote: "Knowledge is power.",
    creditedTo: "Francis Bacon",
    reallyWrittenBy: "No Bacon text; a later reduction of Novum Organum I.3",
    note:
      "Bacon's aphorism is “knowledge and human power meet in one,” and it continues: because an unknown cause loses its effect. The tag drops the causal claim that is the actual content of the aphorism.",
    archiveHref: "/quotes/q0432",
  },
  {
    quote: "Moderation in all things.",
    creditedTo: "Aristotle",
    reallyWrittenBy: "No Aristotelian text; an over-extension of Ethics II.6",
    note:
      "Aristotle defines virtue as a mean relative to the agent and then adds that not every action admits one — there is no right amount of murder. The popular maxim asserts the opposite of that qualification.",
    archiveHref: "/quotes/q0436",
  },
  {
    quote: "That which does not kill us makes us stronger.",
    creditedTo: "Friedrich Nietzsche",
    reallyWrittenBy: "Nietzsche — with the pronoun changed",
    note:
      "The German is first-person singular: “Was mich nicht umbringt, macht mich stärker.” Moving to “us” converts a claim Nietzsche made about himself into a general law of resilience.",
    archiveHref: "/quotes/q0070",
  },
  {
    quote: "Tabula rasa — the mind is a blank slate at birth.",
    creditedTo: "John Locke",
    reallyWrittenBy:
      "Earlier scholastic and Aristotelian usage; Locke's own image is “white paper”",
    note:
      "The Latin tag is not Locke's and appears nowhere in the Essay. Locke's point in the same chapter concerns the origin of ideas, not the absence of innate powers, and “blank slate” conveys a passivity he did not claim.",
    archiveHref: "/quotes/q0186",
  },
  {
    quote: "What is not good for the hive is not good for the bee.",
    creditedTo: "Marcus Aurelius",
    reallyWrittenBy: "Marcus Aurelius — the Greek says swarm",
    note:
      "Meditations VI.54 has συμμέλει, the colony, and the image is a body the individual cannot survive leaving. Substituting “hive” names the structure and tilts the Stoic claim about natural membership toward one about institutions.",
    archiveHref: "/quotes/q0102",
  },
];

export type SourceFaq = { question: string; answer: string };

export const sourceFaq: SourceFaq[] = [
  {
    question: "How do I find out who really said a quote?",
    answer:
      "Find the primary text rather than another quotation page. Search the author's own corpus for a distinctive phrase, check whether the work is indexed in full text, and look at the sentence before and after the famous one. If the only pages carrying the line give an author and no work, chapter, or translator, you are looking at circulation rather than a source. The hub page above walks through the method in three steps.",
  },
  {
    question: "Why do so many quotations appear on hundreds of sites with no source?",
    answer:
      "Quotation sites copy from one another, and the earliest link in the chain is often an anthology, a speech, or a film rather than the author's text. Each copy makes the sentence look better attested while adding no evidence. The count of pages carrying a quotation tells you how widely it circulates, never whether anyone checked it.",
  },
  {
    question: "What does “quote source” mean?",
    answer:
      "It means the specific place a quotation can be checked: the work, the section or line, the edition, and — for anything translated — the translator. A complete source for a quotation from a non-English author names both the original passage and the English rendering you are reading, because those are two different documents.",
  },
  {
    question: "How can I tell a misattribution from a paraphrase?",
    answer:
      "A paraphrase compresses or restates something the author did say; a misattribution assigns the words to someone who did not write them. “No one errs willingly” compresses Socrates' position in the Protagoras. “I disapprove of what you say…” was written by Evelyn Beatrice Hall in 1906, not by Voltaire. A paraphrase is not a fraud — presenting it as literal wording is the error.",
  },
  {
    question: "Why do editions and translators matter for finding a quote's source?",
    answer:
      "Because they change the words. Pascal's Pensées are numbered differently in the Brunschvicg, Lafuma, and Sellier schemes, so a section number alone is unusable. Buber's “Alles wirkliche Leben ist Begegnung” is printed in English as both “All real living is meeting” and “All actual life is encounter,” so two people citing the same German line can both be right about the source and disagree about the wording.",
  },
  {
    question: "How do I cite a quotation that only exists in a letter or a speech?",
    answer:
      "Name the letter and its date, or the occasion of the speech, instead of substituting the title of a posthumous collection. Simone Weil's sentence about attention comes from a letter to Joë Bousquet dated 13 April 1942, not from Gravity and Grace, which was assembled after her death. The occasion is usually part of the sentence's meaning.",
  },
  {
    question: "Do quotation sites ever cite each other as evidence?",
    answer:
      "Frequently, and it is the main reason bad attributions persist. A citation that leads to another quotation site has verified nothing. Treat any source that resolves to an aggregator, a listicle, or a poster as an unverified lead and go looking for the work itself.",
  },
  {
    question: "What is the fastest check on a suspicious attribution?",
    answer:
      "Ask what situation the sentence would have to arise in, whether the prose sounds like the author and the period, and where the oldest document containing it sits. The Voltaire attribution fails the first test immediately: the formulation is late-Victorian, and the sentence traces back to a 1906 biography.",
  },
  {
    question: "Can a quotation be correctly attributed and still be wrong?",
    answer:
      "Yes — that is the half-quotation problem, and it is more common than outright misattribution. Cutting “Truth happens to an idea” away from “It becomes true, is made true by events” makes James sound like a relativist. Keeping only “to change my desires rather than the order of the world” drops Descartes' first clause about overcoming himself, and reverses the balance of the sentence.",
  },
  {
    question: "How does this archive record a quotation it cannot fully source?",
    answer:
      "It says so. Passages whose wording circulates without a locatable original are filed as traditional attributions or later paraphrases rather than given an invented chapter number. Where a line is known to be someone else's formulation of an author's idea, the archive page names the actual writer — a fuller answer than a confident citation nobody can check.",
  },
];

/**
 * FAQ entries for the /misattributed-quotes page. These are distinct from the
 * source-hub FAQ: they answer questions about the misattribution phenomenon
 * itself, not about the tracing method. They render as page prose — Google
 * retired FAQ rich results, so these are written for readers, not for a
 * schema type.
 */
export const misattributionFaq: SourceFaq[] = [
  {
    question: "What is a misattributed quote?",
    answer:
      "A sentence credited to someone who never wrote it. “I disapprove of what you say, but I will defend to the death your right to say it” is the classic case: it appears on Voltaire memorials, but Evelyn Beatrice Hall wrote it in 1906 as her own summary of his attitude. Misattribution is different from a paraphrase, which restates something the person did write.",
  },
  {
    question: "Why are philosophers so often misquoted?",
    answer:
      "Three reasons compound. Philosophical claims get compressed into maxims, and the compression sheds the argument that gave the sentence its meaning (“knowledge is power” drops Bacon's clause about why an unknown cause loses its effect). Famous names attract anonymous lines, because a quote under a famous name travels further. And most philosophy was written in other languages, so every English version is already an interpretation — one more step away from the text, and one more chance for the byline to drift.",
  },
  {
    question: "Is a paraphrase the same thing as a misattribution?",
    answer:
      "No. “No one errs willingly” is a fair compression of Socrates' position in the Protagoras; a paraphrase becomes a problem only when it is presented as literal wording. “I know that I know nothing” sits on the border: it paraphrases a narrower claim in the Apology, and the popular form turns a statement about Socrates' own ignorance into a paradox about knowledge in general.",
  },
  {
    question: "How does this archive decide that a line is misattributed?",
    answer:
      "By going to the earliest traceable text and checking it against the credited author's own works. Where the line is real but the byline is not — the Voltaire sentence, the “hive” version of Marcus Aurelius — the page names who actually wrote it and what the credited author did say. Every register entry above links to the full record.",
  },
  {
    question: "Can I still use a misattributed quote?",
    answer:
      "You can use it accurately. Either quote the located text with its real source and locator, or present the popular line as what it is — a later formulation, and often a revealing one. The error is not liking the sentence; it is attaching a name to it that the evidence does not support.",
  },
];
