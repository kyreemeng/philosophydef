/**
 * GSC-driven TDH overrides (2026-08-17 Search Console export).
 * Prefer click-intent match: famous-quote phrasing + source cues for
 * “quote source” queries ranking on page 1 with low CTR.
 */

export type QuoteSeoOverride = {
  title: string;
  description: string;
  /** Optional H1; defaults to a source-forward heading when omitted. */
  h1?: string;
};

export const quoteSeoOverrides: Record<string, QuoteSeoOverride> = {
  q0001: {
    title:
      '"The Unexamined Life Is Not Worth Living" — Socrates Quote (Apology 38a)',
    description:
      "Socrates’ famous line from Plato’s Apology 38a: “The unexamined life is not worth living for a human being.” Exact wording, source context, and related self-examination quotes.",
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
};

/** Page-level TDH for hubs/guides with high impressions / low CTR. */
export const pageSeoOverrides: Record<
  string,
  { title?: string; description?: string }
> = {
  "/themes/self": {
    title: "Philosophy Quotes About Self | Examined Life & Identity",
    description:
      "Philosophy quotes about self, identity, and the examined life—from Socrates to Kierkegaard and Nietzsche. Verified English passages with sources.",
  },
  "/quotes/about/love": {
    title: "Philosophical Quotes About Love | Plato to Modern Thinkers",
    description:
      "Philosophical quotes about love—eros, friendship, care, and recognition—from Plato, Aristotle, Confucius, and modern ethics. Clear English, cited sources.",
  },
  "/quotes/about/loneliness": {
    title: "Philosophy Quotes About Loneliness & Solitude | Verified",
    description:
      "Philosophy quotes about loneliness vs solitude—chosen quiet, unwanted isolation, and self-sufficiency. Verified English passages with thinkers and sources.",
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
    title: "Socrates Quotes | Examined Life & Socratic Wisdom",
    description:
      "Socrates quotes in verified English—including “the unexamined life is not worth living”—with Plato Apology sources, themes, and related thinkers.",
  },
  "/thinkers/friedrich-nietzsche": {
    title: "Friedrich Nietzsche Quotes | Zarathustra & Will to Power",
    description:
      "Friedrich Nietzsche quotes in verified English—overcoming, affirmation, and critique—from Zarathustra and major works, with sources and themes.",
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
  "/plato-vs-aristotle": {
    title: "Plato vs Aristotle | Key Differences Explained Clearly",
    description:
      "Plato vs Aristotle: forms vs particulars, politics, ethics, and method—clear comparison for students, with linked quotes and further reading.",
  },
};
