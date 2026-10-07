/**
 * Long-form sections for the hub pages Search Console shows readers arriving
 * at in numbers (2026-09-27 export: /thinkers/friedrich-nietzsche 187
 * impressions, /quotes/about/love 178, /thinkers/socrates 174, /themes/self
 * 168), keyed by page path.
 *
 * Each essay is written for its page alone. Claims are tied to a work and a
 * locator a reader can check, and links point at the archive's own passage
 * pages so the hub is the route into them rather than a list beside them.
 */

export type HubEssaySection = {
  heading: string;
  paragraphs: string[];
  links?: { href: string; label: string }[];
};

export type HubEssay = {
  /** Heading for the essay block as a whole. */
  title: string;
  sections: HubEssaySection[];
  /** Date the essay was last substantively revised (YYYY-MM-DD). */
  updated: string;
};

export const hubEssays: Record<string, HubEssay> = {
  "/thinkers/socrates": {
    title: "What Socrates actually said, and where it is written down",
    updated: "2026-09-27",
    sections: [
      {
        heading: "Did Socrates write anything?",
        paragraphs: [
          "No. Socrates (c. 470–399 BCE) wrote nothing, and every “Socrates quote” is a report by someone else. The main witnesses are Plato’s dialogues, Xenophon’s Memorabilia, Apology, and Symposium, Aristophanes’ comedy The Clouds (423 BCE), which mocks him, and scattered remarks in Aristotle. They do not agree on what he was like, and the difficulty of reconstructing the historical Socrates from them is known as the Socratic problem.",
          "For quotation purposes the consequence is simple: a real Socrates quote is a sentence in one of those texts, and it should be cited to the text. “Plato, Apology 38a” is a checkable claim; “Socrates” on its own is not.",
        ],
      },
      {
        heading: "Which Plato dialogues count as evidence for Socrates",
        paragraphs: [
          "Plato wrote some thirty dialogues, almost all with Socrates as the main speaker, over roughly fifty years. Most scholars treat the early dialogues — the Apology, Crito, Euthyphro, Laches, Charmides, and in part the Protagoras and Gorgias — as closest to the historical Socrates: they show him questioning people about a virtue, refuting their definitions, and claiming no knowledge of his own.",
          "In the middle and late dialogues the character called Socrates sets out doctrines that are Plato’s — the theory of Forms, the tripartite soul, the philosopher-kings of the Republic. Quoting the Republic’s account of justice as “Socrates’ view of justice” credits him with a theory he probably never held. On this archive, passages from those dialogues are filed under Plato.",
        ],
        links: [
          { href: "/thinkers/plato", label: "Plato quotes, cited by Stephanus number" },
          { href: "/plato-vs-aristotle", label: "Plato vs Aristotle: the key differences" },
        ],
      },
      {
        heading: "The core of Socrates’ philosophy, passage by passage",
        paragraphs: [
          "The examined life. At his trial, after the guilty verdict, Socrates tells the jury he will not stop questioning people even to save his life, because “the unexamined life is not worth living for a human being” (Apology 38a). The line is a reason for refusing exile, not a slogan about self-improvement.",
          "Knowing that one does not know. The oracle at Delphi said no one was wiser than Socrates. He concluded that his only advantage was that he did not think he knew what he did not know (Apology 21d). The popular version, “I know that I know nothing,” is a later compression; no sentence in Plato says exactly that.",
          "Virtue and knowledge. Socrates argues that no one does wrong willingly (Protagoras 345e): whoever truly knew what is good would do it, so wrongdoing is a kind of ignorance. And he holds that doing injustice is worse for the doer than suffering it (Gorgias 469b–c), because it damages the soul, which matters more than the body or reputation (Apology 30a–b). In prison he refuses to escape on the principle that one must never do injustice, even in return for injustice (Crito 49b).",
        ],
        links: [
          { href: "/quotes/q0001", label: "“The unexamined life is not worth living” — Apology 38a" },
          { href: "/quotes/q0002", label: "“What I do not know, I do not claim to know” — Apology 21d" },
          { href: "/quotes/q0004", label: "“No one errs willingly” — Protagoras 345e" },
          { href: "/quotes/q0003", label: "“It is worse to do injustice than to suffer it” — Gorgias 469b–c" },
          { href: "/thinkers/socrates/morality", label: "Socrates on justice and morality" },
        ],
      },
      {
        heading: "Socrates quotes that are not by Socrates",
        paragraphs: [
          "“The only true wisdom is in knowing you know nothing.” A paraphrase of Apology 21d, not a translation of any sentence in it.",
          "“Education is the kindling of a flame, not the filling of a vessel.” The closest ancient source is Plutarch, On Listening to Lectures, which says the mind is not a vessel to be filled but a fire to be kindled. Plutarch wrote some five centuries after Socrates.",
          "“The secret of change is to focus all of your energy not on fighting the old, but on building the new.” Spoken by a character named Socrates in Dan Millman’s novel Way of the Peaceful Warrior (1980).",
          "“Strong minds discuss ideas, average minds discuss events, weak minds discuss people.” Modern; it has no ancient source and circulates under several names.",
          "“Be kind, for everyone you meet is fighting a hard battle.” Modern, from the late nineteenth century; it is usually traced to the Scottish minister John Watson (“Ian Maclaren”) and is sometimes credited to Plato or Philo without any text.",
        ],
        links: [
          { href: "/quote-source", label: "How to check who said a quotation" },
        ],
      },
      {
        heading: "How to cite a Socrates quotation",
        paragraphs: [
          "Cite Plato (or Xenophon) as the author, give the dialogue and the Stephanus number printed in the margin of every edition — Plato, Apology 38a — and name the translator, because English versions differ. Stephanus numbers come from the 1578 Geneva edition of Plato and identify the passage whatever edition or translation you hold.",
        ],
        links: [
          { href: "/quote-source/plato", label: "Citing Plato: Stephanus numbers and translators" },
          { href: "/sourcing-method", label: "This archive’s sourcing method" },
        ],
      },
    ],
  },

  "/thinkers/friedrich-nietzsche": {
    title: "Reading Nietzsche: the ideas, the books, and the misquotations",
    updated: "2026-09-27",
    sections: [
      {
        heading: "Which book a Nietzsche quote comes from matters",
        paragraphs: [
          "Nietzsche’s published books span sixteen years and change considerably: The Birth of Tragedy (1872); Human, All Too Human (1878); Daybreak (1881); The Gay Science (1882, with a fifth book added in 1887); Thus Spoke Zarathustra (1883–85); Beyond Good and Evil (1886); On the Genealogy of Morality (1887); and, from 1888, Twilight of the Idols, The Antichrist, and Ecce Homo, which was not published until 1908.",
          "Most of these books are written in numbered sections, so a Nietzsche quotation should be cited by section — The Gay Science §341, Beyond Good and Evil §146 — rather than by page, which changes with every edition. Zarathustra is different: it is a narrative in which Zarathustra speaks, and a line from it is Zarathustra’s speech inside a story, not a thesis stated in Nietzsche’s own voice.",
        ],
      },
      {
        heading: "The Will to Power is not a book Nietzsche wrote",
        paragraphs: [
          "The Will to Power was assembled after his death by his sister Elisabeth Förster-Nietzsche and Heinrich Köselitz (“Peter Gast”) from notebooks Nietzsche had not prepared for publication. It appeared in 1901 and in a much larger edition in 1906, arranged under a plan he had abandoned. Scholars now cite the notebooks from the critical edition of Giorgio Colli and Mazzino Montinari, by notebook and fragment number. A quotation sourced only to “The Will to Power” is from Nietzsche’s notes, not from a book he finished.",
        ],
      },
      {
        heading: "Nietzsche’s main ideas, with the passage to read",
        paragraphs: [
          "The death of God. In The Gay Science §125 a madman runs into the marketplace crying “God is dead… and we have killed him.” It is a diagnosis of what happens to European values once belief in God can no longer support them — the problem Nietzsche calls nihilism — and the madman’s listeners are atheists who have not understood what they have lost.",
          "Eternal recurrence. The Gay Science §341 asks what you would say if a demon told you that you must live this life again, innumerable times, exactly as it has been. The test is whether you could affirm it. Zarathustra takes the thought up as his own teaching; “Was that life? Well then! Once more!” is courage’s answer to death in Part III.",
          "Amor fati and the overman. “Amor fati: let that be my love from now on!” (The Gay Science §276) asks for love of what is necessary rather than resignation to it. In Zarathustra’s Prologue the overman (Übermensch) is the goal humanity should overcome itself toward: “Man is a rope stretched between animal and overman.”",
          "Master and slave morality. Beyond Good and Evil §260 and the first essay of On the Genealogy of Morality argue that “good and evil” descends from a revaluation by the weak of an older “good and bad” of the strong — a historical claim about where moral concepts came from, not a programme.",
          "Perspectivism. “There is only a perspective seeing, only a perspective ‘knowing’” (Genealogy III §12): there is no view from nowhere, and the more eyes we can bring to a thing, the more complete our concept of it.",
        ],
        links: [
          { href: "/quotes/q0074", label: "Eternal recurrence — The Gay Science §341" },
          { href: "/quotes/q0071", label: "“Amor fati” — The Gay Science §276" },
          { href: "/quotes/q0073", label: "“Man is something that shall be overcome” — Zarathustra, Prologue" },
          { href: "/quotes/q0072", label: "“How one becomes what one is” — Ecce Homo" },
          { href: "/thinkers/friedrich-nietzsche/self", label: "Nietzsche on the self" },
        ],
      },
      {
        heading: "Nietzsche quotes that are misattributed or misquoted",
        paragraphs: [
          "“And those who were seen dancing were thought to be insane by those who could not hear the music.” No source in Nietzsche’s published works or notebooks has been found.",
          "“That which does not kill us makes us stronger.” Real, but the German is singular — “Was mich nicht umbringt, macht mich stärker” (Twilight of the Idols, Maxims and Arrows §8) — and it follows a heading, “From the military school of life.”",
          "“He who has a why to live can bear almost any how.” Real, Twilight of the Idols, Maxims and Arrows §12, usually met through Viktor Frankl, who quotes it in Man’s Search for Meaning; it is often credited to Frankl himself.",
          "“There are no facts, only interpretations.” From an unpublished notebook of 1886–87, included in the compiled Will to Power. It is Nietzsche’s, but it is a note, not a published thesis.",
          "“Without music, life would be a mistake” (Twilight, Maxims and Arrows §33) and “if you gaze long into an abyss, the abyss also gazes into you” (Beyond Good and Evil §146) are genuine.",
        ],
        links: [
          { href: "/quotes/q0070", label: "“What does not kill me makes me stronger” — exact wording and source" },
          { href: "/quote-source/friedrich-nietzsche", label: "Citing Nietzsche: editions and section numbers" },
        ],
      },
    ],
  },

  "/themes/self": {
    title: "What philosophy says about the self",
    updated: "2026-09-27",
    sections: [
      {
        heading: "Three questions about the self",
        paragraphs: [
          "Philosophers ask three different things when they ask about the self. What is it — a soul, a body, a stream of experiences, a relation, a story, or nothing at all? How do I know it — by looking inward, or only through others? And how does one become a self worth being — by cultivation, by choice, by letting go? The passages below answer different questions, and reading them as rival answers to one question is the usual source of confusion.",
        ],
      },
      {
        heading: "The self in Greek and Roman philosophy",
        paragraphs: [
          "“Know thyself” was inscribed at Delphi before it became a philosophical programme. Heraclitus reports “I searched for myself” (fragment B101), and Socrates made self-examination the test of a life worth living (Apology 38a). Plato divided the soul into reason, spirit, and appetite, and Aristotle called a true friend “another self” (Nicomachean Ethics IX.4), because in friendship we see our own character from outside.",
          "The Stoics located the self in the faculty of judgement, the one thing wholly in our power; Seneca’s first letter opens “Claim yourself for yourself.” Plotinus and then Augustine turned inward in a stronger sense: truth is found by withdrawing from the outer world into the soul.",
        ],
        links: [
          { href: "/quotes/q0001", label: "Socrates on the examined life — Apology 38a" },
          { href: "/quotes/q0014", label: "Aristotle: “A friend is another self”" },
          { href: "/quotes/q0033", label: "Seneca: “Claim yourself for yourself”" },
          { href: "/quotes/q0233", label: "Augustine: “Return into yourself”" },
        ],
      },
      {
        heading: "Self and no-self in Indian and Buddhist thought",
        paragraphs: [
          "The Upanishads identify the innermost self, ātman, with ultimate reality, brahman; the Chandogya Upanishad’s “That thou art” (6.8.7) is the classic statement. The Bhagavad Gita (6.5) makes the self both friend and enemy of itself: one must raise oneself by oneself.",
          "Buddhism denies a permanent self (anattā): what we call a person is a changing aggregate of body, feeling, perception, formations, and consciousness. Yet the Dhammapada tells the practitioner “One is one’s own refuge” (160). The two are compatible — no unchanging self exists, but the work of practice is still one’s own — and Dōgen draws the conclusion: “To study the self is to forget the self.”",
        ],
        links: [
          { href: "/quotes/q0205", label: "“That thou art” — Chandogya Upanishad 6.8.7" },
          { href: "/quotes/q0303", label: "Bhagavad Gita 6.5: the self as friend and enemy" },
          { href: "/quotes/q0206", label: "Dōgen: “To study the self is to forget the self”" },
        ],
      },
      {
        heading: "Self-cultivation in Chinese philosophy",
        paragraphs: [
          "Confucian thought treats the self less as a thing to be known than as a work to be done. The Great Learning sets out an order — investigate things, extend knowledge, make the will sincere, rectify the mind, cultivate the person, then order the family and the state. Zengzi examined himself three times each day (Analects 1.4), and Confucius defines humaneness as restraining the self and returning to ritual (Analects 12.1).",
          "Zhuangzi unsettles the whole project: after dreaming he was a butterfly, he could not tell whether he was Zhuang Zhou who had dreamed of a butterfly or a butterfly dreaming of Zhuang Zhou. Wang Yangming later located moral knowledge within the mind itself — “innate good knowing” — so that self-cultivation is uncovering rather than acquiring.",
        ],
        links: [
          { href: "/quotes/q0366", label: "The Great Learning on cultivating the self" },
          { href: "/thinkers/zengzi", label: "Zengzi and daily self-examination" },
          { href: "/quotes/q0288", label: "Zhuangzi’s butterfly dream" },
        ],
      },
      {
        heading: "The modern problem of personal identity",
        paragraphs: [
          "Descartes made the thinking self the one thing that survives radical doubt (Meditations II). Locke separated the person from the soul and the body and tied personal identity to consciousness reaching back through memory (Essay II.27.9). Hume, looking inward, found no self at all — only perceptions — and concluded that the self is “a bundle or collection of different perceptions” (Treatise I.4.6).",
          "Later philosophers made the self a relation rather than a thing. For Hegel self-consciousness is satisfied only in another self-consciousness; for Kierkegaard “the self is a relation that relates itself to itself” (The Sickness unto Death); for Buber “Man becomes an I through a You.” Sartre’s “existence precedes essence” and Beauvoir’s “one is not born, but rather becomes, a woman” make the self something made rather than found.",
        ],
        links: [
          { href: "/quotes/q0054", label: "Descartes: “I think, therefore I am”" },
          { href: "/quotes/q0248", label: "Locke on consciousness and personal identity" },
          { href: "/quotes/q0250", label: "Hume: the self as a bundle of perceptions" },
          { href: "/quotes/q0260", label: "Kierkegaard: “The self is a relation…”" },
          { href: "/quotes/q0087", label: "Sartre: “Existence precedes essence”" },
        ],
      },
      {
        heading: "Beyond Europe and the modern West",
        paragraphs: [
          "Avicenna’s “floating man” asks whether a person created in mid-air, with no sensation of the body, would still be aware of their own existence — and answers yes, as an argument that the self is not the body. Ortega y Gasset’s “I am myself and my circumstance” makes the self inseparable from its situation, and Frantz Fanon’s “I am not a prisoner of history” insists that the self can refuse the identity others have assigned it.",
        ],
        links: [
          { href: "/quotes/q0562", label: "Avicenna’s “floating man”" },
          { href: "/quotes/q0198", label: "Ortega y Gasset: “I am myself and my circumstance”" },
          { href: "/thinkers/soren-kierkegaard/self", label: "Kierkegaard on the self" },
        ],
      },
    ],
  },

  "/quotes/about/love": {
    title: "What philosophers say about love",
    updated: "2026-09-27",
    sections: [
      {
        heading: "Eros and the ladder of love: Plato",
        paragraphs: [
          "Plato’s Symposium is the founding text. In it Socrates reports the teaching of Diotima: love (erōs) is desire, and what we desire is “the perpetual possession of the good” (206a). Love begins with one beautiful body and, rightly led, climbs to beauty in all bodies, in souls, in laws and knowledge, and finally to Beauty itself, which “always is, and neither comes to be nor perishes” (210a–212a). The ascent is often read as leaving the individual beloved behind, which is the objection most later theories of love start from.",
        ],
        links: [
          { href: "/quotes/q0006", label: "Plato: love as desire for the good — Symposium 206a" },
          { href: "/quotes/q0222", label: "Beauty itself — Symposium 211a" },
        ],
      },
      {
        heading: "Friendship as love: Aristotle",
        paragraphs: [
          "Aristotle discusses love under philia, friendship, in Books VIII and IX of the Nicomachean Ethics. He distinguishes friendships of utility, of pleasure, and of character. The first two last only as long as the use or pleasure does; the third, between people “good and alike in virtue,” is complete friendship, in which each wishes the other well for the other’s own sake. A friend, he says, is “another self.”",
        ],
        links: [
          { href: "/quotes/q0499", label: "Aristotle on perfect friendship — Ethics VIII.3" },
          { href: "/quotes/q0014", label: "Aristotle: “A friend is another self”" },
        ],
      },
      {
        heading: "Ordered love: Augustine and the medieval tradition",
        paragraphs: [
          "For Augustine the question is not whether we love but what, and in what order. “Two loves have made two cities” (City of God XIV.28): love of self to the contempt of God, and love of God to the contempt of self. “Love, and do what you will” comes from his homilies on the First Letter of John (7.8), where it means that an act rooted in love for the other’s good may take forms, including correction, that look harsh. Dante ends the Divine Comedy with “the Love that moves the sun and the other stars.”",
        ],
        links: [
          { href: "/quotes/q0234", label: "Augustine: “Two loves have made two cities”" },
          { href: "/quotes/q0045", label: "Augustine: “Late have I loved you” — Confessions X.27" },
        ],
      },
      {
        heading: "Graded love or impartial care: the Confucian–Mohist debate",
        paragraphs: [
          "Early Chinese philosophy argued about love’s scope. Confucians held that humaneness (ren) begins at home and extends outward by degrees: “Treat the elders of your own family with reverence, and extend that to the elders of others” (Mencius, Liang Hui Wang I). Mozi answered that partiality causes disorder, and that we should “care for one another impartially” (jian ai). Mencius replied that impartial care amounts to denying one’s own father — the first sustained philosophical debate about whether love should be equal.",
        ],
        links: [
          { href: "/quotes/q0456", label: "Mencius on extending love from one’s own family" },
          { href: "/quotes/q0167", label: "Mozi: “Care for one another impartially”" },
          { href: "/quotes/q0148", label: "Mencius: “Those who love others are loved by others”" },
        ],
      },
      {
        heading: "Love as attention and activity: modern philosophy",
        paragraphs: [
          "Modern writers tend to describe love as something done rather than felt. Erich Fromm: “Love is an activity, not a passive affect” (The Art of Loving, 1956). Simone Weil made attention the heart of it: “Attention is the rarest and purest form of generosity.” Iris Murdoch defined love as “the extremely difficult realisation that something other than oneself is real” (1959), which makes love a moral achievement against the self’s tendency to see others only as they figure in its own concerns.",
          "Gabriel Marcel wrote that “to love a being is to say: thou, thou shalt not die,” and Kierkegaard’s Works of Love (1847) argued that love of the neighbour, because it is commanded, is secured against the changes of feeling that end preferential love.",
        ],
        links: [
          { href: "/quotes/q0478", label: "Fromm: “Love is an activity, not a passive affect”" },
          { href: "/quotes/q0197", label: "Simone Weil on attention and generosity" },
          { href: "/quotes/q0200", label: "Iris Murdoch’s definition of love" },
          { href: "/quotes/q0686", label: "Gabriel Marcel: “Thou shalt not die”" },
        ],
      },
    ],
  },
};
