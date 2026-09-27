/**
 * GSC-driven TDH overrides (2026-08-17 and 2026-08-26 exports).
 * Prefer click-intent match: famous-quote phrasing + source cues for
 * “quote source” queries ranking on page 1 with low CTR.
 */

export type QuoteSeoOverride = {
  title: string;
  description: string;
  /** Optional H1; defaults to a source-forward heading when omitted. */
  h1?: string;
  /**
   * Title for the /quote-source page built from this quotation. Only set it
   * where the passage needs a shape the generator cannot reach — the generator
   * keeps the phrase intact and fits the author around it, so most entries do
   * not need this.
   */
  sourcePageTitle?: string;
  /** H1 for the /quote-source page; defaults to “Who said “…?””. */
  sourcePageH1?: string;
};

export const quoteSeoOverrides: Record<string, QuoteSeoOverride> = {
  q0001: {
    title:
      'Who Said “The Unexamined Life Is Not Worth Living”? Socrates (Apology 38a)',
    description:
      "Socrates’ line from Plato’s Apology 38a: “The unexamined life is not worth living for a human being.” Exact Greek, source context, and why popular English drops “for a human being.”",
    h1: "“The unexamined life is not worth living” — Socrates (Apology 38a)",
  },
  q0120: {
    title:
      'William James: “Truth Happens to an Idea” — Quote Source (Pragmatism)',
    description:
      "William James quote source: “Truth happens to an idea. It becomes true, is made true by events.” From Pragmatism—context, meaning, and related truth quotes.",
    h1: "“Truth happens to an idea” — William James (Pragmatism)",
  },
  q0102: {
    title:
      'Marcus Aurelius: “What Is Not Good for the Hive…” — Quote Source',
    description:
      "Marcus Aurelius Meditations VI.54: “What is not good for the hive is not good for the bee.” Source citation, meaning, and related Stoic community quotes.",
    h1: "“What is not good for the hive is not good for the bee” — Marcus Aurelius",
  },
  q0032: {
    title:
      'Seneca: “No Easy Way from the Earth to the Stars” — Quote Source',
    description:
      "Seneca quote source (Hercules Furens 437): “There is no easy way from the earth to the stars.” Latin context, English rendering, and related aspiration quotes.",
    h1: "“There is no easy way from the earth to the stars” — Seneca",
  },
  // v5.1 additions. Each maps to a live Search Console query family
  // (2026-08-30 export): exact-phrase searches ranking on page one or
  // striking-distance positions 8–13 with zero clicks.
  q0674: {
    title: 'Hume: “Be a Philosopher, but Be Still a Man” — Quote Source',
    description:
      "David Hume quote source (The Sceptic, 1742): “Be a philosopher; but amidst all your philosophy, be still a man.” Context, meaning, and related Hume quotations.",
    h1: "“Be a philosopher; but… be still a man” — David Hume (The Sceptic)",
  },
  q0675: {
    title: 'Aristotle: “Virtue Lies in the Mean” — Quote Source (Ethics II.6)',
    description:
      "Aristotle quote source (Nicomachean Ethics II.6, 1107a, Ross): “Virtue… is a state of character concerned with choice, lying in a mean.” The doctrine of the mean explained.",
    h1: "“Virtue… lying in a mean” — Aristotle (Nicomachean Ethics II.6)",
  },
  q0676: {
    title: 'Zhang Zai: “Heaven Is My Father and Earth Is My Mother” — Source',
    description:
      "Zhang Zai quote source (Western Inscription): “Heaven is my father and Earth is my mother, and even such a small creature as I finds an intimate place in their midst.”",
    h1: "“Heaven is my father and Earth is my mother” — Zhang Zai (Western Inscription)",
  },
  q0678: {
    title: 'Huineng: “It Is Not the Wind That Moves” — Quote Source',
    description:
      "Platform Sutra quote source: “It is not the wind that moves; it is not the flag that moves; it is your mind that moves.” The famous Platform Sutra scene, explained.",
    h1: "“It is not the wind that moves…” — Huineng (Platform Sutra)",
  },
  q0680: {
    title: 'Linji: “If You Meet the Buddha, Kill the Buddha” — Source',
    description:
      "Linji Yixuan quote source (Record of Linji): “If you meet the Buddha, kill the Buddha…” The Rinzai teaching on authority and autonomy, with context and related Zen quotes.",
    h1: "“If you meet the Buddha, kill the Buddha” — Linji (Record of Linji)",
  },
  q0686: {
    title: 'Marcel: “To Love a Being Is to Say: Thou Shalt Not Die”',
    description:
      "Gabriel Marcel quote source (Homo Viator, 1944): “To love a being is to say: thou, thou shalt not die.” Love, death, and the problem–mystery distinction explained.",
    h1: "“To love a being is to say: thou, thou shalt not die” — Gabriel Marcel",
  },
  q0197: {
    title:
      'Simone Weil: “Attention Is the Rarest Form of Generosity” — Source',
    description:
      "Simone Weil quote source: letter to Joë Bousquet (13 Apr 1942)—“Attention is the rarest and purest form of generosity.” Attribution, context, and related quotes.",
    h1: "“Attention is the rarest and purest form of generosity” — Simone Weil",
  },
  q0073: {
    title:
      'Nietzsche: “Man Is Something That Shall Be Overcome” — Quote Source',
    description:
      "Friedrich Nietzsche quote from Thus Spoke Zarathustra, Prologue: “Man is something that shall be overcome.” Source, Übermensch context, and related quotes.",
    h1: "“Man is something that shall be overcome” — Nietzsche (Zarathustra)",
  },
  q0183: {
    title:
      'Aquinas: “Grace Does Not Destroy Nature” — Quote Source (Summa)',
    description:
      "Thomas Aquinas Summa Theologiae I, q.1, a.8 ad 2: “Grace does not destroy nature, but perfects it.” Exact source, meaning, and faith–reason context.",
    h1: "“Grace does not destroy nature, but perfects it” — Thomas Aquinas",
  },
  q0062: {
    title:
      'Rousseau: “Man Is Born Free… Everywhere in Chains” — Quote Source',
    description:
      "Jean-Jacques Rousseau, The Social Contract Book I Ch. 1: “Man is born free, and everywhere he is in chains.” Source, meaning, and related freedom quotes.",
    h1: "“Man is born free, and everywhere he is in chains” — Rousseau",
  },
  q0140: {
    title:
      "Confucius Analects 4.8: Hear the Way in the Morning — Quote Source",
    description:
      "Confucius quote source Analects 4.8: if one hears the Way in the morning, one may die content that evening. English rendering, context, and related Way quotes.",
    h1: "“If one hears the Way in the morning…” — Confucius (Analects 4.8)",
  },
  q0346: {
    title:
      'William James: “The Art of Being Wise Is Knowing What to Overlook”',
    description:
      "William James quote source (Principles of Psychology XXII): “The art of being wise is the art of knowing what to overlook.” Citation and related wisdom quotes.",
    h1: "“The art of being wise is the art of knowing what to overlook” — William James",
  },
  q0362: {
    title:
      'Schiller: “Against Stupidity the Gods Themselves Contend in Vain”',
    description:
      "Friedrich Schiller quote source (The Maid of Orleans): “Against stupidity the gods themselves contend in vain.” Attribution, context, and related critique quotes.",
    h1: "“Against stupidity the gods themselves contend in vain” — Schiller",
  },
  q0005: {
    title: 'Plato Republic: “Justice Is Doing One’s Own Work” — Quote Source',
    description:
      "Plato Republic IV 433a: “Justice is doing one’s own work and not meddling in others’.” Source citation, justice as specialization, and related Republic quotes.",
    h1: "“Justice is doing one’s own work…” — Plato (Republic IV 433a)",
  },
  q0348: {
    title:
      "Bertrand Russell: Three Passions That Governed My Life — Quote",
    description:
      "Bertrand Russell on the longing for love, the search for knowledge, and pity for suffering—verified English passage with source context and related love quotes.",
  },
  q0439: {
    title:
      "Marcus Aurelius: “We Are Made for Cooperation” — Meditations Quote",
    description:
      "Marcus Aurelius on human cooperation—“like feet, like hands, like eyelids.” Stoic source context and related community quotes.",
  },
  q0002: {
    title: 'Socrates: “What I Do Not Know…” — Plato, Apology 21d',
    description:
      "Socrates on knowing one’s limits: “What I do not know, I do not claim to know.” Plato’s Apology 21d, attribution note, meaning, and related wisdom quotes.",
    h1: "“What I do not know, I do not claim to know” — Socrates (Apology 21d)",
  },
  q0196: {
    title: 'Martin Buber: “All Real Living Is Meeting” — Quote Source',
    description:
      "Martin Buber’s “All real living is meeting” from I and Thou (1923). Read the source attribution, dialogical meaning, and related philosophy of relation quotes.",
    h1: "“All real living is meeting” — Martin Buber (I and Thou)",
  },
  q0304: {
    title: "Linji Yixuan Quote: Wherever You Are, Make Yourself Master",
    description:
      "Linji Yixuan: “Wherever you are, make yourself master; wherever you stand is real.” Source context from the Record of Linji and related Zen quotes.",
    h1: "“Wherever you are, make yourself master” — Linji Yixuan",
  },
  q0432: {
    title: 'Francis Bacon: “Knowledge and Power Meet in One” — Source',
    description:
      "Francis Bacon, Novum Organum I.3: “Human knowledge and human power meet in one.” Exact source, meaning, and related empiricism and science quotes.",
    h1: "“Human knowledge and human power meet in one” — Francis Bacon",
  },
  q0436: {
    title: 'Aristotle: “Virtue Lies in a Mean” — Ethics Quote Source',
    description:
      "Aristotle’s “Virtue lies in a mean” from Nicomachean Ethics II.6–9. Source context, what the golden mean means, and related virtue quotes.",
    h1: "“Virtue lies in a mean” — Aristotle (Nicomachean Ethics)",
  },

  // Batch 2 — GSC 2026-09-13: high impressions / source-intent / weak auto titles
  q0148: {
    title:
      'Mencius: “Those Who Love Others Are Constantly Loved” — Source',
    description:
      "Mencius Lilou II: “Those who love others are constantly loved by others; those who respect others are constantly respected.” Classical Chinese, reciprocity, verified source.",
    h1: "“Those who love others are constantly loved by others” — Mencius (Lilou II)",
  },
  q0019: {
    title: 'Epicurus: “Death Is Nothing to Us” — Letter to Menoeceus',
    description:
      "Epicurus quote source from the Letter to Menoeceus: “Death is nothing to us…” Exact argument, Greek context, and why the short maxim circulates without the proof.",
    h1: "“Death is nothing to us” — Epicurus (Letter to Menoeceus)",
  },
  q0051: {
    title: 'Montaigne: “To Philosophize Is to Learn How to Die” — Source',
    description:
      "Montaigne Essays I.20: “To philosophize is to learn how to die.” Cicero’s formula reframed, French wording, and related mortality quotes.",
    h1: "“To philosophize is to learn how to die” — Montaigne (Essays I.20)",
  },
  q0093: {
    title:
      'Frankl: “The Last of the Human Freedoms” — Man’s Search for Meaning',
    description:
      "Viktor Frankl quote source: “Everything can be taken from a man but… the last of the human freedoms — to choose one’s attitude.” Context from Man’s Search for Meaning.",
    h1: "“The last of the human freedoms…” — Viktor Frankl",
  },
  q0336: {
    title: 'Hume: “Reason Is the Slave of the Passions” — Treatise Source',
    description:
      "David Hume Treatise II.3.3: “Reason is, and ought only to be the slave of the passions.” Full sentence, meaning, and what the slogan drops.",
    h1: "“Reason is, and ought only to be the slave of the passions” — Hume",
  },
  q0181: {
    title: 'Protagoras: “Man Is the Measure of All Things” — Quote Source',
    description:
      "Protagoras DK 80B1 via Plato’s Theaetetus: “Of all things the measure is man.” Fragment context, relativism dispute, and verified locator.",
    h1: "“Man is the measure of all things” — Protagoras (DK 80B1)",
  },
  q0127: {
    title: 'Wittgenstein: “Meaning Is Use” — Investigations §43 Source',
    description:
      "Wittgenstein Philosophical Investigations §43: “The meaning of a word is its use in the language.” Exact wording vs the classroom slogan “meaning is use.”",
    h1: "“The meaning of a word is its use in the language” — Wittgenstein",
  },
  q0023: {
    title:
      'Epictetus: “Not Things, but Judgments Disturb Us” — Enchiridion 5',
    description:
      "Epictetus Enchiridion 5: “It is not things that disturb people, but their judgments about things.” Stoic source — often miscredited to Marcus Aurelius.",
    h1: "“It is not things that disturb people…” — Epictetus (Enchiridion 5)",
  },
  q0101: {
    title: 'Epictetus: “Wish Things as They Happen” — Enchiridion 8',
    description:
      "Epictetus Enchiridion 8: do not seek for things to happen as you wish, but wish for things as they do. Stoic source and related acceptance quotes.",
    h1: "“Wish for things to happen as they do” — Epictetus (Enchiridion 8)",
  },
  q0448: {
    title:
      'Schopenhauer: “Limits of His Field of Vision” — Quote Source',
    description:
      "Schopenhauer Parerga and Paralipomena: “Everyone takes the limits of his own field of vision for the limits of the world.” Exact source — not WWR.",
    h1: "“Everyone takes the limits of his own field of vision…” — Schopenhauer",
  },
  q0259: {
    title: 'Hegel: “What Is Rational Is Actual” — Philosophy of Right',
    description:
      "Hegel Philosophy of Right preface: “What is rational is actual; and what is actual is rational.” Why “real is rational” misreads wirklich.",
    h1: "“What is rational is actual…” — Hegel (Philosophy of Right)",
  },
  q0397: {
    title: 'Goethe Faust: “Two Souls Dwell in My Breast” — Quote Source',
    description:
      "Goethe Faust I: “Two souls, alas, are dwelling in my breast.” Dramatic speaker, German wording, and why it is not a generic personality type.",
    h1: "“Two souls, alas, are dwelling in my breast” — Goethe (Faust I)",
  },
  q0261: {
    title: 'Emerson: “To Be Great Is to Be Misunderstood” — Self-Reliance',
    description:
      "Emerson “Self-Reliance”: “To be great is to be misunderstood.” Surrounding list of figures, exact wording, and related self-reliance quotes.",
    h1: "“To be great is to be misunderstood” — Emerson (Self-Reliance)",
  },
  q0080: {
    title: 'William James: “Habit Is the Fly-Wheel of Society” — Source',
    description:
      "William James Principles of Psychology on habit: “Habit is the enormous fly-wheel of society, its most precious conservative agent.” Citation and context.",
    h1: "“Habit is the enormous fly-wheel of society” — William James",
  },
  q0393: {
    title: 'Locke: “Life, Health, Liberty, or Possessions” — Second Treatise',
    description:
      "Locke Second Treatise §6: no one ought to harm another in life, health, liberty, or possessions. Exact wording vs later “life, liberty, property.”",
    h1: "“No one ought to harm another in his life, health, liberty…” — Locke",
  },
  q0423: {
    title: 'Wittgenstein: “Don’t Think, but Look!” — Investigations §66',
    description:
      "Wittgenstein Philosophical Investigations §66: “Don’t think, but look!” Method of looking at cases — not a general anti-intellectual motto.",
    h1: "“Don’t think, but look!” — Wittgenstein (Investigations §66)",
  },
  q0258: {
    title: 'Hegel: Self-Consciousness and Recognition — Phenomenology IV.A',
    description:
      "Hegel Phenomenology of Spirit IV.A: “Self-consciousness attains its satisfaction only in another self-consciousness.” Lordship–bondage context.",
    h1: "“Self-consciousness attains its satisfaction only in another…” — Hegel",
  },
  q0335: {
    title: 'Locke: “White Paper” Mind — Tabula Rasa Quote Source',
    description:
      "Locke Essay II.1.2: the mind as “white paper, void of all characters.” Exact English vs later “blank slate” / tabula rasa label.",
    h1: "“Let us then suppose the mind to be… white paper” — Locke",
  },
  q0415: {
    title: 'Liang Qichao: “If the Youth Are Strong…” — Young China Source',
    description:
      "Liang Qichao “On the Young China” (1900): if the youth are wise/prosperous/strong, so is the nation. Not a Confucian proverb — verified reform-era source.",
    h1: "“If the youth are wise, the nation is wise…” — Liang Qichao",
  },
  q0283: {
    title: 'Mencius: “All Things Are Complete in Me” — Jinxin Source',
    description:
      "Mencius Jinxin I: “All things are already complete in me… turn within and find sincerity.” Classical Chinese, practice of sincerity, verified locator.",
    h1: "“All things are already complete in me” — Mencius (Jinxin I)",
  },
};

/** Page-level TDH for hubs/guides with high impressions / low CTR. */
export const pageSeoOverrides: Record<
  string,
  { title?: string; description?: string }
> = {
  "/themes/self": {
    title: "Philosophy Quotes About Self | Examined Life & Identity",
    description:
      "Philosophy quotes about self, identity, and the examined life—Socrates, Kierkegaard, Nietzsche, and others. Verified English with sources, not scrapers.",
  },
  "/quotes/about/love": {
    title: "Philosophical Quotes About Love | Plato, Mencius & Modern",
    description:
      "Philosophical quotes about love—eros, reciprocity, care, recognition—from Plato, Mencius, Aristotle, and modern ethics. Cited English passages.",
  },
  "/quotes/about/loneliness": {
    title: "Philosophy Quotes About Loneliness vs Solitude | Verified",
    description:
      "Philosophy quotes about loneliness vs solitude—from Schopenhauer, Nietzsche, and other thinkers. Compare isolation, chosen quiet, and self-sufficiency.",
  },
  "/quotes/about/peace": {
    title: "Philosophy Quotes About Peace of Mind | Stoic & Epicurean",
    description:
      "Philosophy quotes about peace, tranquility, and ataraxia—Stoic equanimity and calm without empty slogans. Verified English sources.",
  },
  "/what-is-epistemology": {
    title: "What Is Epistemology? Meaning, Definition & Examples",
    description:
      "Epistemology meaning explained: the philosophy of knowledge, justification, belief, evidence, and skepticism—with clear examples and FAQs.",
  },
  "/philosophy-of-ai": {
    title: "Philosophy of AI | Mind, Ethics, Knowledge & Responsibility",
    description:
      "Philosophy of artificial intelligence: consciousness vs intelligence, knowledge and explanation, ethics, responsibility, and AI as a welfare subject—clear 2026 guide.",
  },
  "/thinkers/socrates": {
    title: "Socrates Quotes with Sources | Unexamined Life & Apology",
    description:
      "Socrates quotes verified to Plato’s dialogues—including “the unexamined life is not worth living” (Apology 38a)—with locators, themes, and related thinkers.",
  },
  "/thinkers/friedrich-nietzsche": {
    title: "Nietzsche Quotes with Sources | Zarathustra & Overcoming",
    description:
      "Friedrich Nietzsche quotes in verified English—Übermensch, affirmation, critique—from Zarathustra and major works, each with a checkable source.",
  },
  "/thinkers/nishida-kitaro": {
    title: "Nishida Kitaro / Kitaro Nishida Quotes | Kyoto School",
    description:
      "Kitaro Nishida quotes (Nishida Kitarō) in verified English—pure experience and Kyoto School philosophy, with sources and related themes.",
  },
  "/thinkers/wang-yangming": {
    title: "Wang Yangming Quotes | Neo-Confucian Unity of Knowledge",
    description:
      "Wang Yangming quotes in verified English—unity of knowledge and action, heart-mind, and Neo-Confucian practice, with sources.",
  },
  "/thinkers/wang-guowei": {
    title: "Wang Guowei Quotes | Aesthetics, Jingjie & Chinese Thought",
    description:
      "Wang Guowei quotes and philosophy—jingjie, tragedy, desire, and modern Chinese aesthetics in dialogue with Schopenhauer, with English sources.",
  },
  "/thinkers/zengzi": {
    title: "Zengzi Quotes | Self-Examination & Confucian Practice",
    description:
      "Zengzi quotes on daily self-examination, filial piety, trust, and Confucian cultivation, with source context and related thinkers.",
  },
  "/thinkers/gabriel-marcel": {
    title: "Gabriel Marcel Quotes | Hope, Presence & Being",
    description:
      "Gabriel Marcel quotes on hope, presence, fidelity, being, and having—English passages with sources and Christian existentialist context.",
  },
  // The four entries below target “{name} quotes” queries that Search Console
  // shows sitting at positions 8–22 with impressions but no clicks (2026-08-30
  // export). Their default brand-only titles gave searchers nothing the
  // aggregators ranking above them didn’t have, so each leads with the school
  // vocabulary a searcher scanning results can use to pick this page.
  "/thinkers/huineng": {
    title: "Hui Neng Quotes | Platform Sutra & Chan Awakening",
    description:
      "Hui Neng quotes (Huineng, Sixth Patriarch of Chan) in verified English—sudden enlightenment and mind nature from the Platform Sutra, with sources.",
  },
  "/thinkers/linji-yixuan": {
    title: "Linji Yixuan Quotes | Record of Linji & Rinzai Zen",
    description:
      "Linji Yixuan quotes in verified English—the true person of no rank, the shout, and Rinzai Zen urgency—drawn from the Record of Linji with sources.",
  },
  "/thinkers/george-berkeley": {
    title: "George Berkeley Quotes | Esse Est Percipi & Idealism",
    description:
      "George Berkeley (Bishop Berkeley) quotes in verified English—esse est percipi, idealism, and God from the Principles of Human Knowledge, with sources.",
  },
  "/thinkers/mozi": {
    title: "Mozi Quotes | Universal Love & Impartial Care",
    description:
      "Mozi quotes in verified English—universal love (jian ai), impartial care, and opposition to offensive war—from the Mozi with source context.",
  },
  "/thinkers/john-stuart-mill": {
    title: "John Stuart Mill Quotes | Liberty, Happiness & Free Speech",
    description:
      "John Stuart Mill quotes on liberty, happiness, individuality, free speech, and utilitarianism, with sources from On Liberty and major works.",
  },
  "/thinkers/nishida-kitaro/experience": {
    title: "Nishida Kitaro on Pure Experience | Quotes & Context",
    description:
      "Nishida Kitaro quotes on pure experience—verified English passages with Kyoto School context, source notes, and links to his wider philosophy.",
  },
  "/thinkers/xunzi/learning": {
    title: "Xunzi Quotes on Learning | Education, Ritual & Practice",
    description:
      "Xunzi quotes on learning, teachers, ritual, and deliberate practice. Read sourced English passages with Confucian context and related themes.",
  },
  "/thinkers/wang-yangming/practice": {
    title: "Wang Yangming Quotes on Practice | Knowledge and Action",
    description:
      "Wang Yangming quotes on practice and the unity of knowledge and action, with English source context and Neo-Confucian background.",
  },
  "/thinkers/paul-tillich/courage": {
    title: "Paul Tillich Quotes on Courage | The Courage to Be",
    description:
      "Paul Tillich quotes on courage, anxiety, and being—sourced English passages with context from Christian existential philosophy.",
  },
  "/thinkers/william-james/truth": {
    title: "William James Quotes on Truth | Pragmatism & Source Context",
    description:
      "William James quotes on truth and pragmatism, including “Truth happens to an idea,” with verified source context and related passages.",
  },
  "/thinkers/socrates/justice": {
    title: "Socrates Quotes on Justice | Plato Sources & Context",
    description:
      "Socrates quotes on justice from Plato’s dialogues—verified English passages on doing wrong, moral integrity, and the examined life.",
  },
  "/plato-vs-aristotle": {
    title: "Plato vs Aristotle | Key Differences Explained Clearly",
    description:
      "Plato vs Aristotle: forms vs particulars, politics, ethics, and method—clear comparison for students, with linked quotes and further reading.",
  },
  "/themes/life": {
    title: "Philosophy Quotes About Life | Meaning, Virtue & How to Live",
    description:
      "Philosophy quotes about life and how to live—from Socrates’ examined life to Stoic, Confucian, and modern passages. Verified English sources.",
  },
  "/themes/death": {
    title: "Philosophy Quotes About Death | Stoic & Epicurean",
    description:
      "Philosophy quotes about death, mortality, and fear of dying—Stoic, Epicurean, and related English passages with sources, not empty consolation.",
  },
  "/themes/knowledge": {
    title: "Philosophy Quotes About Knowledge | Epistemology in the Archive",
    description:
      "Philosophy quotes about knowledge, belief, and inquiry—pair this collection with the epistemology guide for definitions and examples.",
  },
  "/thinkers/marcus-aurelius": {
    title: "Marcus Aurelius Quotes | Meditations & Stoic Discipline",
    description:
      "Marcus Aurelius quotes from the Meditations in verified English—discipline, death, community, and judgment, with source context.",
  },
  "/thinkers/confucius": {
    title: "Confucius Quotes | Analects on Life, Learning & Humaneness",
    description:
      "Confucius quotes from the Analects in verified English—life, learning, love of virtue, and education, with sources and related Confucian thinkers.",
  },
  "/thinkers/soren-kierkegaard": {
    title: "Kierkegaard Quotes | Self, Faith & Existential Choice",
    description:
      "Søren Kierkegaard quotes in verified English—selfhood, faith, despair, and choice, with sources and related existential thinkers.",
  },
  "/chinese-philosophy": {
    title: "Chinese Philosophy | Confucianism, Daoism & the Way",
    description:
      "Chinese philosophy explained: Confucianism, Daoism, Mohism, Legalism, and Buddhist thought—with verified English quotations and starter thinkers.",
  },
  "/quotes/famous": {
    title: "Famous Philosophy Quotes | Socrates, Stoics & Confucius",
    description:
      "Famous philosophy quotes in clear English—Socrates, Plato, Aristotle, Confucius, Marcus Aurelius, Nietzsche, and other enduring thinkers, with sources.",
  },
  "/quotes/about/grief": {
    title: "Philosophy Quotes About Grief, Death & Loss | Verified",
    description:
      "Philosophy quotes about grief, death, and loss—mortality, mourning, and how thinkers answer pain without empty consolation.",
  },
};
