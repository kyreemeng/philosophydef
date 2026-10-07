export type Guide = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  answer: string;
  sections: { heading: string; paragraphs: string[] }[];
  /**
   * Side-by-side comparison rows for the "X vs Y" guides. Rendered as a table
   * before the prose sections: answer engines extract tables for comparison
   * queries far more reliably than they extract two prose columns.
   */
  comparison?: { aspect: string; left: string; right: string }[];
  faq?: { question: string; answer: string }[];
  related: { href: string; label: string }[];
  thinkers: string[];
  /** Date the text was last substantively revised (YYYY-MM-DD). */
  updated?: string;
  /** Works a reader can check the guide against. */
  furtherReading?: string[];
};

export const guides: Guide[] = [
  {
    slug: "what-is-philosophy",
    title: "What Is Philosophy?",
    /**
     * Title and description carry the definition cluster: Google Trends shows
     * “what is philosophy” steady at the top of the field's informational
     * queries, with “philosophy definition” (+50%) and “definition of
     * philosophy” (+110%) rising. One page owns all of them, so the title
     * names the definition and the branches rather than the question alone.
     */
    description:
      "What is philosophy? The definition and meaning of philosophy, its five main branches, its history from ancient Greece to today, and the philosophers who shaped it.",
    eyebrow: "A first question",
    intro:
      "Philosophy is the disciplined practice of asking fundamental questions about reality, knowledge, value, reason, mind, and how to live.",
    answer:
      "Philosophy — from the Greek philosophia, “love of wisdom” — is the disciplined practice of asking and answering fundamental questions about reality, knowledge, value, and how to live, using reasons that can be examined. Rather than collecting facts alone, it clarifies concepts, tests reasons, notices assumptions, and compares rival answers.",
    sections: [
      {
        heading: "Philosophy definition",
        paragraphs: [
          "The word philosophy comes from the ancient Greek philosophia: philos (love) and sophia (wisdom). In the most common definition, philosophy is the systematic study of the most general questions about what exists, what we can know, what is valuable, and how we should live — pursued through argument rather than experiment or revelation alone.",
          "That definition separates philosophy from its neighbours. Religion answers some of the same questions by appeal to revelation or tradition. Science answers narrower questions by observation and experiment. Philosophy is the discipline for the questions that remain open: it asks what counts as evidence, what makes an explanation good, and which values should guide a choice — including the choice to trust a scientist or a scripture in the first place.",
          "The word has everyday senses too. “My philosophy is to take the stairs” means a personal principle. “A philosophy degree” means an academic field. Those senses descend from the discipline: the practice of giving and examining reasons about the most general questions there are.",
        ],
      },
      {
        heading: "What philosophers study",
        paragraphs: [
          "Philosophers make arguments. They state a claim, give reasons for it, consider objections, and revise the claim when the reasons do not hold. This is why philosophy is more than having an opinion: an opinion becomes philosophical when it can be explained and examined.",
          "The work can be abstract, but its questions are ordinary. A decision about responsibility, a disagreement about truth, or a fear about death often contains a philosophical problem before anyone gives it that name. Philosophers also study the history of attempts to answer those questions, because the failed answers are usually the clearest map of what makes each question hard.",
        ],
      },
      {
        heading: "The branches of philosophy",
        paragraphs: [
          "Metaphysics asks what exists and what reality is like. Epistemology asks what knowledge is and how belief can be justified. Ethics asks how we ought to act and what makes a life good. Logic studies good reasoning. Political philosophy asks how power, rights, and institutions should be arranged.",
          "Around that core sit the specialized branches — philosophy of mind, philosophy of language, philosophy of science, philosophy of religion, philosophy of law, philosophy of education, and aesthetics — each taking the same tools to one domain. The archive keeps a page for each of them in its branches section.",
          "A useful map is not a prison: many problems cross branch boundaries, and comparative philosophy studies these questions across Greek, Chinese, Indian, African, Islamic, and other traditions without treating one timeline as the only center.",
        ],
      },
      {
        heading: "The history of philosophy in brief",
        paragraphs: [
          "The recorded story opens in the sixth century BCE around the Greek world, where inquirers began explaining the cosmos through natural causes, and in the same centuries in China and India, where rival schools argued about virtue, duty, and the self. Socrates turned Greek inquiry toward ethics and the examined life; Plato and Aristotle built the first great systems; the Stoics, Epicureans, and Skeptics made philosophy a practical art of living.",
          "Medieval philosophy — Christian, Islamic, and Jewish — spent roughly a thousand years working out how reason relates to revelation, from Augustine through Avicenna and Maimonides to Aquinas. The early modern period began with Descartes' turn to the knowing subject and produced the rival schools of rationalism and empiricism, which Kant's critical philosophy attempted to settle.",
          "The nineteenth and twentieth centuries opened the modern sprawl: Hegel's system, Marx's inversion of it, Nietzsche's attack on its morality, the analytic turn to logic and language, phenomenology and existentialism, and the pragmatist insistence that ideas be judged by their consequences. The contemporary period is a professional, global discipline — and the debates the archive quotes are still open.",
        ],
      },
      {
        heading: "How philosophy differs from science and opinion",
        paragraphs: [
          "Science often settles empirical questions with observation, experiment, and modeling. Philosophy asks what those methods presuppose: what counts as evidence, what explanation is, and which values should guide applications of knowledge.",
          "Opinion expresses a stance. Philosophy asks for reasons that can be shared, challenged, and improved. The difference is not that philosophers lack commitments; it is that commitments are kept answerable to argument.",
        ],
      },
      {
        heading: "Famous philosophers to start with",
        paragraphs: [
          "Four names open most paths into the subject. Socrates (469–399 BCE) made ethics the centre of philosophy and gave it the examined life. Plato built the first surviving systems on metaphysics, knowledge, and the state. Aristotle organized the sciences and defined virtue as a mean. Kant (1724–1804) reframed the modern problem of what reason can and cannot know.",
          "Widen the frame and the list changes shape. Confucius and Laozi in China, the Buddha's interlocutors in India, Ibn Sina and Ibn Rushd in the Islamic world, and — in the last century — Hannah Arendt, Simone de Beauvoir, and Iris Murdoch each reshape what philosophy is for. The archive indexes all of them, with the work and passage behind every quotation.",
        ],
      },
      {
        heading: "Why philosophy matters",
        paragraphs: [
          "Philosophy does not replace science, history, or personal experience. Its practical value is intellectual responsibility: distinguishing a strong reason from a persuasive slogan, recognizing uncertainty, and acting with more deliberate judgment.",
          "It also matters publicly. Debates about AI, education, medicine, speech, and justice continually reopen philosophical questions about agency, fairness, knowledge, and the good life—whether or not participants use the word philosophy.",
        ],
      },
      {
        heading: "How to begin",
        paragraphs: [
          "Begin with a live question rather than a reading list alone. Ask what freedom, knowledge, or a good life would have to mean for your current disagreement to make sense. Then read a short primary passage slowly.",
          "This archive is designed for that first encounter: a verified English quotation, followed by thinker and theme pages that widen the context without pretending to replace a full education.",
        ],
      },
    ],
    faq: [
      {
        question: "What is philosophy in simple terms?",
        answer:
          "Philosophy is careful thinking about fundamental questions—reality, knowledge, value, and how to live—using reasons that can be examined by others.",
      },
      {
        question: "What is the definition of philosophy?",
        answer:
          "The word means “love of wisdom” in Greek. As a discipline, philosophy is the systematic study of the most general questions about existence, knowledge, value, and action, conducted through argument and critical examination rather than experiment or appeals to authority.",
      },
      {
        question: "What does philosophy mean?",
        answer:
          "In ordinary use, “philosophy” can mean a personal guiding principle (“my philosophy is…”) or an academic field. In its strict meaning, it is the practice of examining concepts and claims with reasons — the discipline behind both senses.",
      },
      {
        question: "Is philosophy still useful?",
        answer:
          "Yes. Wherever people must choose under uncertainty, justify institutions, or interpret new technologies, philosophical clarity about concepts and values remains practical.",
      },
      {
        question: "What are the main branches of philosophy?",
        answer:
          "Core branches include metaphysics, epistemology, ethics, logic, and political philosophy, with further specialties such as philosophy of mind, language, science, and AI.",
      },
    ],
    related: [
      { href: "/philosophy-definition", label: "Philosophy definition" },
      { href: "/philosophy-meaning", label: "Philosophy meaning" },
      { href: "/branches", label: "The branches of philosophy" },
      { href: "/history-of-philosophy", label: "A history of philosophy" },
      { href: "/reference", label: "The philosophy reference guide" },
      { href: "/themes", label: "Browse philosophical themes" },
      { href: "/quotes", label: "Read the quotation archive" },
    ],
    thinkers: ["Socrates", "Plato", "Aristotle"],
    updated: "2026-10-01",
    furtherReading: [
      "Anthony Kenny, A New History of Western Philosophy (2010)",
      "Plato, Apology 38a — on the examined life",
      "Stanford Encyclopedia of Philosophy, branch overviews",
    ],
  },
  {
    slug: "history-of-philosophy",
    title: "History of Philosophy: From Ancient Greece to Today",
    /**
     * “Definition of philosophy” is not the only rising definition-adjacent
     * query — Trends shows “history of philosophy” demand growing alongside
     * it. This guide owns that query; the what-is-philosophy page covers the
     * history in one paragraph and hands off here.
     */
    description:
      "A history of philosophy in five periods: ancient, medieval, early modern, modern, and contemporary — the thinkers, works, and debates that shaped each era, with sourced passages.",
    eyebrow: "The long view",
    intro:
      "The history of philosophy is a history of arguments that never quite closed: each period inherits its questions from the last, answers them differently, and passes what remains open forward.",
    answer:
      "Philosophy's history runs from the sixth-century BCE inquirers of Miletus, through the classical systems of Plato and Aristotle and the medieval work of Augustine, Ibn Sina, Maimonides, and Aquinas, to Descartes and the early moderns, Kant and German Idealism, and the analytic, phenomenological, and global debates of the twentieth and twenty-first centuries. Read it as a chain of open questions rather than a gallery of opinions.",
    sections: [
      {
        heading: "Ancient philosophy: the questions are named",
        paragraphs: [
          "The Western story opens around Miletus in the sixth century BCE, when thinkers first proposed natural rather than mythical explanations of the cosmos. Heraclitus made change the central fact; Parmenides denied it; their quarrel seeded metaphysics. In Athens, Socrates (469–399 BCE) turned philosophy toward ethics — how to live — and made argument itself the method, accepting death rather than abandoning the examined life.",
          "Plato founded the Academy and wrote dialogues whose questions are still assigned to students: what justice is, what knowledge is, what the Forms would have to be. Aristotle organized the sciences, defined virtue as a mean between extremes, and gave logic its first system. The Hellenistic schools — Stoics, Epicureans, Skeptics — treated philosophy as the art of living well under uncertainty, which is why their passages still circulate as quotes.",
          "The same centuries produced classical Chinese philosophy — Confucius, Mencius, Xunzi, Laozi, Zhuangzi — arguing over human nature, ritual, and the Way, and classical Indian philosophy, whose schools debated consciousness, causation, and liberation with a rigour the term “Eastern philosophy” hides rather than honours.",
        ],
      },
      {
        heading: "Medieval philosophy: reason meets revelation",
        paragraphs: [
          "For roughly a thousand years the central problem was the relation between reason and revealed religion. Augustine fused Platonism with Christianity and wrote the Confessions, the first philosophical autobiography. In Baghdad and Córdoba, Al-Farabi, Avicenna (Ibn Sina), and Averroes (Ibn Rushd) transmitted and transformed Aristotle; al-Ghazali pressed the critique the philosophers had to answer; Maimonides did the same constructive work for Jewish thought.",
          "The period ends with William of Ockham's razor and the late-medieval nominalists, who thinned the inherited metaphysics until the early moderns could rebuild. Quoting this era well requires care: the archive records which translation and which numbering a passage comes from, because medieval texts are cited differently in every tradition.",
        ],
      },
      {
        heading: "Early modern philosophy: the turn to the knower",
        paragraphs: [
          "Descartes' Meditations (1641) made certainty the entry problem: doubt everything, keep only what survives. Spinoza and Leibniz built rationalist systems on that confidence; Locke, Berkeley, and Hume answered from the empiricist side, until Hume's scepticism about causation and the self woke Kant, as he said, from his dogmatic slumber.",
          "The period also wrote the political philosophy the modern world still argues inside — Hobbes' Leviathan, Locke's toleration and property, Rousseau's general will — and Spinoza's and Hume's critiques of miracles, which redrew the border between philosophy and religion for good.",
        ],
      },
      {
        heading: "Modern philosophy: systems and their collapse",
        paragraphs: [
          "Kant's critical philosophy (1781–1790) argued that experience is structured by the mind's own forms, that metaphysics exceeds possible knowledge, and that morality begins from autonomy. German Idealism — Fichte, Schelling, Hegel — tried to complete what Kant started; Hegel made history itself philosophical. Marx inverted Hegel; Kierkegaard and Nietzsche attacked the system from inside, and their attack is where existentialism begins.",
          "Schopenhauer, Mill, and Darwin belong here too: the pessimist who took the will seriously, the utilitarian who argued liberty, and the naturalist who forced every account of mind and morality to face descent with modification. The archive's most-quoted Nietzsche and Mill passages all come from these decades.",
        ],
      },
      {
        heading: "Contemporary philosophy: the professional and the global",
        paragraphs: [
          "The twentieth century split into vocabularies more than camps. The analytic tradition — Frege, Russell, Moore, Wittgenstein, then Quine and the postwar generations — made logic and language the instruments; phenomenology and existentialism — Husserl, Heidegger, Sartre, de Beauvoir, Merleau-Ponty — made lived experience the subject. Pragmatism (Peirce, James, Dewey) tested ideas by their consequences, and the Frankfurt School put philosophy back into political critique.",
          "Since 1970 the discipline has professionalized and globalized: Rawls revived political philosophy, feminist and Africana philosophy restructured the canon's assumptions, philosophy of mind and language met cognitive science, and philosophy of AI — Turing's question reborn — became a working field. The debates are open, which is exactly why the archive quotes them with sources.",
        ],
      },
      {
        heading: "How to read the history",
        paragraphs: [
          "Three habits make the history tractable. Read each thinker as answering a named predecessor, not as delivering timeless views. Date the works — a passage from 1650 is answering Descartes whether or not it names him. And keep the questions visible: what exists, what can be known, how to live, who decides. The periods are the changes those questions undergo.",
          "The archive is organized to support this reading: every passage carries its work and locator, so a history can be checked against the texts rather than taken on authority.",
        ],
      },
    ],
    faq: [
      {
        question: "What are the main periods in the history of philosophy?",
        answer:
          "A common division: ancient (roughly 600 BCE–500 CE), medieval (500–1400), early modern (1400–1700), modern (1700–1900), and contemporary (1900–today). The dates are conventions; the questions are what carry across the boundaries.",
      },
      {
        question: "Who was the first philosopher?",
        answer:
          "In the Western tradition, Thales of Miletus (c. 600 BCE) is conventionally first, for proposing a natural explanation of the cosmos. Chinese and Indian philosophical traditions developed in the same centuries through figures such as Confucius, Laozi, and the Buddha, whose exact chronology is a matter of textual history rather than a single date.",
      },
      {
        question: "Why study the history of philosophy at all?",
        answer:
          "Because the failures are the most instructive parts: each classic position is a precisely worked-out answer to a question that is still open, and knowing how it failed tells you what any new answer must get past.",
      },
    ],
    related: [
      { href: "/what-is-philosophy", label: "What is philosophy?" },
      { href: "/branches", label: "The branches of philosophy" },
      { href: "/reference", label: "The philosophy reference guide" },
      { href: "/thinkers", label: "Browse thinkers by era" },
      { href: "/quotes", label: "Read the quotation archive" },
    ],
    thinkers: ["Socrates", "Plato", "Aristotle", "René Descartes", "Immanuel Kant", "Friedrich Nietzsche"],
    updated: "2026-10-01",
    furtherReading: [
      "Anthony Kenny, A New History of Western Philosophy (2010)",
      "Frederick Copleston, A History of Philosophy, vols. 1–9",
      "Stanford Encyclopedia of Philosophy entries by period and figure",
    ],
  },
  {
    slug: "philosophy-definition",
    title: "Philosophy Definition",
    description:
      "A precise philosophy definition: its Greek roots, modern use, major questions, and the difference between philosophy and a personal philosophy.",
    eyebrow: "Definition",
    intro:
      "Philosophy is the systematic and critical study of fundamental questions about existence, knowledge, value, reason, and meaning.",
    answer:
      "The word comes from the Greek philosophia, often translated as “love of wisdom.” In modern usage, philosophy is not simply admiration for wisdom; it is a practice of forming, evaluating, and revising answers through reasons and argument.",
    sections: [
      {
        heading: "A working definition",
        paragraphs: [
          "A useful definition has two parts. Philosophy concerns fundamental questions—questions whose answers shape many other beliefs. It also uses critical methods: clarifying terms, making distinctions, constructing arguments, and testing objections.",
          "For example, “What is justice?” is philosophical because the answer affects law, politics, and personal conduct. Asking whether a proposed answer is coherent and well supported is the philosophical method at work.",
        ],
      },
      {
        heading: "Philosophy and wisdom",
        paragraphs: [
          "The Greek root points to a desire for wisdom, but wisdom in philosophy is not a stock of final answers. It includes knowing what one has reason to believe, what remains uncertain, and what a good question requires.",
          "Different traditions express this pursuit differently. Ancient Greek, Chinese, Indian, Islamic, African, and European philosophers developed distinct vocabularies while repeatedly returning to questions of flourishing, knowledge, order, and the self.",
        ],
      },
      {
        heading: "What the definition does not mean",
        paragraphs: [
          "Philosophy is not identical with religion, science, or literature, although it can engage each of them. Nor is it mere debate. A philosophical disagreement should make its assumptions and standards of evidence visible.",
          "The word also has a looser everyday use: a person’s philosophy can mean a guiding outlook or principle. That usage is related, but it is broader than academic philosophy.",
        ],
      },
    ],
    related: [
      { href: "/what-is-philosophy", label: "What is philosophy?" },
      { href: "/what-is-a-philosophy", label: "What is a philosophy?" },
      { href: "/philosophy-meaning", label: "Meaning of philosophy" },
    ],
    thinkers: ["Socrates", "Aristotle", "Confucius"],
  },
  {
    slug: "philosophy-meaning",
    title: "Philosophy Meaning",
    description:
      "The meaning of philosophy in everyday life and academic study, including its origin, purpose, and connection to a personal worldview.",
    eyebrow: "Meaning",
    intro:
      "The meaning of philosophy is both a love of wisdom and a disciplined way of examining the beliefs that guide a life.",
    answer:
      "In academic philosophy, the word names a field of inquiry. In everyday speech, it can name an outlook: a person’s philosophy of work, friendship, or life. Both uses concern orientation—how someone understands what matters and why.",
    sections: [
      {
        heading: "Meaning in everyday language",
        paragraphs: [
          "When someone says “my philosophy is to keep learning,” they usually mean a guiding commitment rather than a formal theory. Such a philosophy can influence choices, priorities, and the way a person interprets success or difficulty.",
          "The everyday use becomes stronger when the person can give reasons for it and consider its limits. Philosophy asks not only which principles we hold, but whether they deserve to guide us.",
        ],
      },
      {
        heading: "Meaning in academic study",
        paragraphs: [
          "As a discipline, philosophy studies concepts that organize thought across many fields: truth, cause, identity, evidence, duty, freedom, beauty, and meaning. It trains careful reading, precise writing, and fair engagement with disagreement.",
          "Its purpose is not to eliminate uncertainty. Often the result of good philosophical work is a more exact picture of what is known, what is disputed, and what follows from each possible answer.",
        ],
      },
      {
        heading: "Meaning and the examined life",
        paragraphs: [
          "Philosophy matters personally because our actions already rely on ideas about what is valuable, possible, and fair. Reflection brings those ideas into view.",
          "The examined life is therefore not a life of constant abstraction. It is a life in which beliefs are open to reasons, experience, and correction.",
        ],
      },
    ],
    related: [
      { href: "/what-is-philosophy", label: "What is philosophy?" },
      { href: "/philosophy-definition", label: "Definition of philosophy" },
      { href: "/themes/self", label: "Quotes on the self" },
    ],
    thinkers: ["Socrates", "Epictetus", "Mencius"],
  },
  {
    slug: "what-is-a-philosophy",
    title: "What Is a Philosophy?",
    description:
      "What is a philosophy? Learn how a personal or organizational philosophy differs from the academic study of philosophy.",
    eyebrow: "Worldview",
    intro:
      "A philosophy is a connected set of beliefs or principles that helps a person, group, or institution decide what matters and how to act.",
    answer:
      "A philosophy may be personal, professional, political, or educational. It becomes more useful when its values are explicit, its principles are consistent, and its consequences can be examined.",
    sections: [
      {
        heading: "A philosophy as a guiding outlook",
        paragraphs: [
          "A personal philosophy often answers practical questions: What do I owe other people? What should I prioritize? What counts as a meaningful achievement? It gives direction without dictating every decision.",
          "Organizations also state philosophies—for example, a teaching philosophy or design philosophy. These statements should describe real priorities, not merely attractive language.",
        ],
      },
      {
        heading: "How to develop one",
        paragraphs: [
          "Start with recurring choices and name the values behind them. Then ask whether the values conflict, what evidence supports them, and how they would guide a difficult case.",
          "A philosophy need not be final. Revising it in response to better reasons or lived experience is a strength, not a failure of conviction.",
        ],
      },
      {
        heading: "Relation to philosophy as a discipline",
        paragraphs: [
          "Academic philosophy supplies methods for examining a philosophy: define key terms, separate claims from assumptions, test consequences, and seek serious objections.",
          "This connection explains why an individual outlook can be philosophical without being a complete philosophical system.",
        ],
      },
    ],
    related: [
      { href: "/philosophy-meaning", label: "Philosophy meaning" },
      { href: "/philosophy-of-education", label: "Philosophy of education" },
      { href: "/what-is-philosophy", label: "What is philosophy?" },
    ],
    thinkers: ["John Dewey", "Confucius", "Marcus Aurelius"],
  },
  {
    slug: "philosophy-of-ai",
    title: "Philosophy of AI: Consciousness, Ethics & Machine Intelligence",
    /**
     * Google Trends shows “philosophy of ai” at +170% and still climbing, with
     * the AI-consciousness and AI-ethics variants rising behind it. The title
     * carries all three clusters; the description names the sub-questions so
     * the snippet can win both the head query and the long variants.
     */
    description:
      "The philosophy of AI explained: can machines think, could AI be conscious, the ethics of AI and responsibility gaps, the Turing test, and the Chinese Room—clear guide with the philosophers who shaped the debate.",
    eyebrow: "Technology and thought",
    intro:
      "The philosophy of AI examines what artificial intelligence is, whether machines can think or understand, what they can know, and how people should design, use, and govern them.",
    answer:
      "It joins philosophy of mind, epistemology, ethics, and political philosophy. Its central questions are whether a machine can think (Turing), whether running the right program is enough for understanding (Searle), whether an artificial system could be conscious, what it means to trust a system’s output, and who is responsible when an automated decision causes harm.",
    sections: [
      {
        heading: "Can machines think? The Turing test",
        paragraphs: [
          "Alan Turing’s paper “Computing Machinery and Intelligence” (Mind, 1950) opens with the question “Can machines think?” and immediately replaces it, because he thought the words “machine” and “think” too vague to argue about. In its place he proposed the imitation game: an interrogator exchanges typed messages with a human and a machine and tries to tell which is which. If the machine cannot reliably be picked out, Turing suggested, the original question loses its point.",
          "The more lasting part of the paper is its list of objections and replies — the theological objection, the argument from consciousness, “Lady Lovelace’s objection” that a machine can only do what it is told. Critics since have argued that the test measures the ability to imitate conversation, which is neither necessary nor sufficient for intelligence. Large language models have sharpened that criticism: fluent conversation turned out to be easier to produce than most people in 1950 would have guessed.",
        ],
      },
      {
        heading: "Understanding and the Chinese Room",
        paragraphs: [
          "John Searle’s “Minds, Brains, and Programs” (1980) asks you to imagine a person who speaks no Chinese locked in a room with a rulebook. Chinese characters come in; by following the rules the person sends back characters that native speakers take as fluent answers. The room passes a Turing test in Chinese, yet nobody in it understands Chinese. Searle concludes that manipulating symbols according to syntax is not sufficient for semantics — for meaning — and therefore that running a program, however good, is not sufficient for a mind.",
          "The standard replies are still the map of the debate. The systems reply says the whole room, not the person, understands. The robot reply says understanding needs perception and action in the world. The brain-simulator reply asks what happens if the program simulates a Chinese speaker’s neurons. Related is Stevan Harnad’s symbol grounding problem (1990): how do a system’s symbols come to be about anything, rather than being defined only by other symbols?",
        ],
      },
      {
        heading: "Functionalism and the computational theory of mind",
        paragraphs: [
          "The philosophical view that made AI look possible in principle is functionalism: mental states are defined by what they do — their causal role between inputs, other states, and outputs — not by what they are made of. Hilary Putnam argued in the 1960s that pain could be “multiply realised” in different physical systems, as a program can run on different hardware. If functionalism is right, the right organisation in silicon would have a mind.",
          "Opponents press on two points. Hubert Dreyfus’ What Computers Can’t Do (1972) argued, drawing on Heidegger and Merleau-Ponty, that human intelligence depends on embodied, context-sensitive know-how that rules cannot capture. And critics of functionalism argue that a functional description leaves something out: what the state feels like.",
        ],
      },
      {
        heading: "Could AI be conscious?",
        paragraphs: [
          "Thomas Nagel’s “What Is It Like to Be a Bat?” (1974) framed the problem: a creature is conscious if there is something it is like to be it. David Chalmers’ distinction (1995) between the “easy problems” of explaining cognitive functions and the “hard problem” of explaining why any of that is accompanied by experience is why intelligence and consciousness have to be discussed separately. A system could solve every easy problem and leave the hard one untouched.",
          "Because there is no agreed theory of consciousness, current work tends to ask which indicators the leading scientific theories would look for. A 2023 report by Patrick Butlin, Robert Long, and colleagues, “Consciousness in Artificial Intelligence,” derived indicator properties from theories such as global workspace and higher-order theories and concluded that no current system was a strong candidate, while finding no obvious technical barrier to building systems that satisfy more of them.",
        ],
      },
      {
        heading: "Knowledge, testimony, and explanation",
        paragraphs: [
          "When a system produces a correct answer, does anyone know it? The question is epistemological before it is technical. Treating an AI output as testimony raises the issues epistemologists ask of any informant: how reliable is it, in this domain, and can its reliability be checked? A fluent answer carries no mark of its own reliability, which is why errors stated confidently are more dangerous than obvious failures.",
          "Explanation is a separate demand. A model may predict well without anyone being able to say why a given output was produced. In medicine, credit, hiring, and law, people affected by a decision have a claim to reasons they can contest, and a correct prediction does not discharge it.",
        ],
      },
      {
        heading: "Ethics, responsibility, and the alignment problem",
        paragraphs: [
          "Norbert Wiener warned in 1960 (“Some Moral and Technical Consequences of Automation,” Science) that if we use a machine whose operation we cannot efficiently interfere with, we had better be sure the purpose put into it is the purpose we really desire. That is the alignment problem in its original form: specifying goals so that a capable system does what we mean rather than what we literally said.",
          "Andreas Matthias named the “responsibility gap” (2004): with learning systems whose behaviour their designers cannot fully predict, it is unclear who is to blame when harm results. Most philosophers resist the conclusion that nobody is responsible; responsibility stays with those who choose to build, deploy, and rely on the system, and institutions must make that responsibility concrete through documentation, oversight proportionate to risk, and routes to challenge error.",
          "Further questions concern fairness and bias in training data, privacy and surveillance, manipulation, effects on labour, and the concentration of power in a few developers. None is settled by a single principle; the trade-offs have to be made explicit.",
        ],
      },
      {
        heading: "The philosophers who shaped the AI debate",
        paragraphs: [
          "Alan Turing (1912–1954) posed the founding question and replaced it with the imitation game. John Searle (1932– ) built the Chinese Room against strong AI. Daniel Dennett (1942–2024) defended functionalism and argued that competence, suitably organised, leaves nothing missing; Hubert Dreyfus (1929–2017) spent a career arguing the opposite from the phenomenology of embodied skill.",
          "Bertrand Russell's generation set the logic the field inherited, and in our own decade Stuart Russell's Human Compatible (2019) reframed machine ethics as the problem of building systems whose goals defer to ours. Norbert Wiener, Thomas Nagel, and David Chalmers each set a boundary the debate still works inside: control, experience, and the hard problem.",
        ],
      },
      {
        heading: "Moral status: could an AI matter morally?",
        paragraphs: [
          "If a future system were conscious, or could suffer, it would have interests of its own and could be wronged. Because the evidence is uncertain, some philosophers argue for precaution — taking the possibility seriously before it is settled — while others warn that attributing feelings to systems designed to seem human invites manipulation. The disagreement is less about today’s systems than about how to act responsibly under uncertainty.",
        ],
      },
    ],
    faq: [
      {
        question: "What is the philosophy of AI?",
        answer:
          "It is the philosophical study of artificial intelligence—whether machines can think, understand, or be conscious; what their outputs can tell us; and how they should be designed, used, and governed.",
      },
      {
        question: "What is the Chinese Room argument?",
        answer:
          "John Searle’s 1980 thought experiment: a person following rules to manipulate Chinese symbols can produce fluent answers without understanding Chinese. Searle concluded that running a program is not sufficient for understanding.",
      },
      {
        question: "What is AI ethics?",
        answer:
          "AI ethics is the branch of practical philosophy that asks how artificial systems should be designed, deployed, and governed: fairness in training data, transparency and contestability of automated decisions, responsibility when systems cause harm, and the purposes worth building toward. The alignment problem is its most technical corner.",
      },
      {
        question: "Does passing the Turing test mean a machine can think?",
        answer:
          "Turing proposed the test as a replacement for the question, not a proof. Most philosophers now hold that conversational imitation is neither necessary nor sufficient for thought.",
      },
      {
        question: "Can AI be conscious?",
        answer:
          "That remains unsettled. Most researchers do not regard current systems as conscious, and indicator-based assessments such as Butlin, Long and colleagues (2023) found no strong candidates, while not ruling out future systems.",
      },
      {
        question: "Who is responsible for AI decisions?",
        answer:
          "Responsibility remains with the people and institutions that design, deploy, and rely on a system. Philosophy clarifies the roles; law and policy assign the duties.",
      },
    ],
    related: [
      { href: "/branches/philosophy-of-mind", label: "Branch guide: philosophy of mind" },
      { href: "/themes/mind", label: "Philosophy quotes about mind" },
      { href: "/themes/responsibility", label: "Philosophy quotes about responsibility" },
      { href: "/what-is-epistemology", label: "What is epistemology?" },
      { href: "/philosophy-of-language", label: "Philosophy of language" },
      { href: "/philosophy-of-science", label: "Philosophy of science" },
      { href: "/reference", label: "The philosophy reference guide" },
    ],
    thinkers: ["Alan Turing", "Ludwig Wittgenstein", "Hannah Arendt"],
    updated: "2026-10-01",
    furtherReading: [
      "Alan Turing, “Computing Machinery and Intelligence,” Mind 59 (1950)",
      "John Searle, “Minds, Brains, and Programs,” Behavioral and Brain Sciences 3 (1980)",
      "Hubert Dreyfus, What Computers Can’t Do (1972)",
      "Thomas Nagel, “What Is It Like to Be a Bat?,” Philosophical Review 83 (1974)",
      "David Chalmers, “Facing Up to the Problem of Consciousness” (1995)",
      "Patrick Butlin, Robert Long et al., “Consciousness in Artificial Intelligence: Insights from the Science of Consciousness” (2023)",
      "Stanford Encyclopedia of Philosophy, “Artificial Intelligence” and “The Chinese Room Argument”",
    ],
  },
  {
    slug: "philosophy-of-history",
    title: "Philosophy of History",
    description:
      "What is philosophy of history? Explore historical explanation, progress, causation, interpretation, memory, and the meaning of historical change.",
    eyebrow: "History examined",
    intro:
      "Philosophy of history asks how historical events should be explained, whether history has a pattern or direction, and what we can responsibly claim about the past.",
    answer:
      "It differs from history itself. Historians investigate particular people, events, and sources; philosophy of history examines the concepts and methods that make historical explanation possible, including cause, evidence, agency, progress, and interpretation.",
    sections: [
      {
        heading: "Explanation and causation",
        paragraphs: [
          "Historical events rarely have one cause. Philosophers ask how to weigh individual choices, institutions, economic conditions, ideas, accidents, and long-term structures without turning explanation into a simple story.",
          "A good explanation makes its evidence and scale clear. It distinguishes what happened from why a particular interpretation is justified.",
        ],
      },
      {
        heading: "Progress and historical direction",
        paragraphs: [
          "Some philosophers have described history as a movement toward freedom, reason, or social development. Others reject any universal direction and stress contingency, conflict, and loss.",
          "These views affect how we tell historical stories. Claims of progress should be tested against whose experience is included, who bears the costs, and which values define improvement.",
        ],
      },
      {
        heading: "Memory, interpretation, and responsibility",
        paragraphs: [
          "The past is known through traces: documents, objects, testimony, and inherited practices. Interpretation is unavoidable, but it is not arbitrary; it is accountable to evidence and to alternative readings.",
          "Philosophy of history also asks what present communities owe to past harms, how collective memory should work, and when commemoration can become a form of justice.",
        ],
      },
    ],
    related: [
      { href: "/history-of-philosophy", label: "History of philosophy" },
      { href: "/themes/time", label: "Quotes on time" },
      { href: "/themes/memory", label: "Quotes on memory" },
    ],
    thinkers: ["G. W. F. Hegel", "Karl Marx", "Hannah Arendt"],
  },
  {
    slug: "philosophy-of-science",
    title: "Philosophy of Science",
    description:
      "An introduction to philosophy of science: evidence, explanation, scientific theories, causation, objectivity, and the limits of science.",
    eyebrow: "Knowledge in practice",
    intro:
      "Philosophy of science studies how scientific knowledge is formed, tested, explained, and limited.",
    answer:
      "It asks questions that science uses but does not always answer by experiment alone: What counts as evidence? What makes an explanation good? When does a model represent the world well? How should uncertainty guide action?",
    sections: [
      {
        heading: "Evidence and scientific reasoning",
        paragraphs: [
          "Scientific conclusions depend on observation, measurement, experimentation, modeling, and inference. Philosophy of science examines how these forms of evidence support a claim and how uncertainty should be expressed.",
          "No observation arrives without context. Instruments, concepts, statistical choices, and background assumptions all shape how evidence is gathered and interpreted.",
        ],
      },
      {
        heading: "Theories, models, and explanation",
        paragraphs: [
          "Scientific theories do more than summarize data: they organize phenomena and support explanations, predictions, and new questions. Models can be useful even when they simplify or idealize reality.",
          "A central issue is explanatory power. An account may predict accurately yet leave open why a result occurs, while another may offer understanding at the cost of precision. Different sciences balance these goals differently.",
        ],
      },
      {
        heading: "Objectivity and values",
        paragraphs: [
          "Scientific inquiry seeks objectivity through public methods, criticism, replication, and transparency. Objectivity does not mean that individual researchers have no values; it means claims can be checked beyond any one person.",
          "Values also enter when societies decide which questions to fund, how to use discoveries, and which risks are acceptable. These are philosophical as well as scientific decisions.",
        ],
      },
    ],
    related: [
      { href: "/themes/knowledge", label: "Quotes on knowledge" },
      { href: "/philosophy-of-ai", label: "Philosophy of AI" },
      { href: "/themes/reason", label: "Quotes on reason" },
    ],
    thinkers: ["Karl Popper", "Bertrand Russell", "Aristotle"],
  },
  {
    slug: "philosophy-of-education",
    title: "Philosophy of Education",
    description:
      "What is philosophy of education? Explore the aims of education, teaching, learning, knowledge, equality, and democratic citizenship.",
    eyebrow: "Learning and flourishing",
    intro:
      "Philosophy of education asks what education is for, what should be taught, how people learn, and what teachers and institutions owe to students.",
    answer:
      "It connects practical questions about curriculum and classrooms to larger questions about knowledge, freedom, equality, character, work, and citizenship. Every educational system reflects a philosophy, whether it states one or not.",
    sections: [
      {
        heading: "The aims of education",
        paragraphs: [
          "Education may aim at knowledge, skill, personal growth, cultural inheritance, democratic participation, or preparation for work. These aims can support one another, but they can also conflict when time and resources are limited.",
          "A philosophy of education makes the priorities visible and asks whether they serve all learners fairly.",
        ],
      },
      {
        heading: "Teaching and learning",
        paragraphs: [
          "Teaching is not only the transfer of information. It can involve dialogue, practice, inquiry, feedback, and the formation of habits of attention. Different subjects and learners may require different methods.",
          "Philosophical reflection helps distinguish genuine understanding from short-term performance and asks how assessment can support learning rather than merely rank students.",
        ],
      },
      {
        heading: "Equality, authority, and freedom",
        paragraphs: [
          "Schools exercise authority while preparing students for independent judgment. The balance raises questions about discipline, access, inclusion, and whose knowledge is recognized in a curriculum.",
          "An educational philosophy should make room for both guidance and student agency, with special attention to barriers that prevent equal participation.",
        ],
      },
    ],
    related: [
      { href: "/what-is-a-philosophy", label: "What is a philosophy?" },
      { href: "/themes/learning", label: "Quotes on learning" },
      { href: "/themes/education", label: "Quotes on education" },
    ],
    thinkers: ["John Dewey", "Confucius", "Plato"],
  },
  {
    slug: "philosophy-of-language",
    title: "Philosophy of Language",
    description:
      "An introduction to philosophy of language: meaning, reference, truth, interpretation, communication, and the relationship between words and the world.",
    eyebrow: "Words and world",
    intro:
      "Philosophy of language studies how words acquire meaning, how sentences can be true or false, and how speakers communicate more than they literally say.",
    answer:
      "It investigates reference, interpretation, translation, metaphor, speech acts, and the relation between language and thought. Its questions matter in daily conversation as much as in logic, law, literature, and computing.",
    sections: [
      {
        heading: "Meaning and reference",
        paragraphs: [
          "A name can refer to a person, a description can pick out an object, and a sentence can say something about the world. Yet the relation between words and things is not always straightforward: the same expression can depend on context, intention, or shared practice.",
          "Philosophers ask whether meaning comes from definitions, mental ideas, social use, formal rules, or some combination of these.",
        ],
      },
      {
        heading: "Truth and interpretation",
        paragraphs: [
          "To understand a statement is often to know what would make it true or false. But interpretation also requires attention to tone, history, implied meaning, and the situation of the speaker.",
          "This is why disagreement sometimes persists even when people use the same words. They may be applying different concepts or following different conversational expectations.",
        ],
      },
      {
        heading: "Language as action",
        paragraphs: [
          "Words do not only describe. Promises, questions, warnings, apologies, and verdicts perform actions. Their force depends on social conventions and relations of authority.",
          "Studying language philosophically reveals how communication can clarify, exclude, persuade, mislead, or create obligations.",
        ],
      },
    ],
    related: [
      { href: "/themes/language", label: "Quotes on language" },
      { href: "/philosophy-of-ai", label: "Philosophy of AI" },
      { href: "/themes/truth", label: "Quotes on truth" },
    ],
    thinkers: ["Ludwig Wittgenstein", "Bertrand Russell", "Confucius"],
  },
  {
    slug: "chinese-philosophy",
    title: "Chinese Philosophy",
    description:
      "Chinese philosophy explained: Confucianism, Daoism, Mohism, Legalism, and Buddhist thought—with verified English quotations and starter thinkers.",
    eyebrow: "Traditions of thought",
    intro:
      "Chinese philosophy includes diverse traditions that examine ethical cultivation, social order, nature, language, governance, and the way of living well.",
    answer:
      "It is not one doctrine. Confucian, Daoist, Mohist, Legalist, and Buddhist thinkers developed distinct views and debated one another across centuries. Their work is best approached as philosophy in its own right, not as a supplement to a European timeline.",
    sections: [
      {
        heading: "Confucian thought",
        paragraphs: [
          "Confucian traditions emphasize ren (humaneness), li (ritual propriety), learning, and the cultivation of character in relationships. Ethical life is often understood as practiced through family, community, and responsible public roles.",
          "Thinkers such as Confucius and Mencius explored how moral feeling, education, and good government can support human flourishing.",
        ],
      },
      {
        heading: "Daoist thought",
        paragraphs: [
          "Daoist texts associated with Laozi and Zhuangzi explore the Dao, naturalness, transformation, and the limits of fixed distinctions. They often caution against forcing the world into rigid human categories.",
          "Their reflections on action, spontaneity, and language offer a different model of wisdom: responsiveness to changing circumstances rather than control alone.",
        ],
      },
      {
        heading: "Debate, diversity, and influence",
        paragraphs: [
          "Mohist thinkers argued for impartial concern and practical standards, while Legalist approaches emphasized institutions and state power. Buddhist philosophy, transmitted and transformed in China, contributed major reflections on mind, suffering, and emptiness.",
          "Chinese philosophy continues to shape ethical, political, educational, and ecological conversations worldwide. In this archive, Confucius (551–479 BCE), Mencius (c. 372–289 BCE), Laozi (traditional attribution; historicity debated), and Zhuangzi (late 4th century BCE) are entry points into living traditions rather than a closed museum.",
        ],
      },
    ],
    faq: [
      {
        question: "What is Chinese philosophy?",
        answer:
          "It is a family of traditions—including Confucian, Daoist, Mohist, Legalist, and Buddhist currents—that examine ethics, governance, nature, language, and cultivation.",
      },
      {
        question: "What is “the Way” in Chinese philosophy?",
        answer:
          "Dao, often translated as the Way, names a pattern of nature, conduct, or cosmic process rather than a single slogan. Confucian and Daoist uses overlap in the word and diverge in emphasis: cultivated human roles versus alignment with what cannot be forced.",
      },
      {
        question: "Who are the main Chinese philosophers to start with?",
        answer:
          "Confucius and Mencius for Confucian ethics; Laozi and Zhuangzi for Daoist thought. Each is represented in this archive with verified English quotations.",
      },
      {
        question: "Is Laozi a historical person?",
        answer:
          "Traditional accounts place Laozi in the sixth century BCE, but many modern scholars treat the figure as legendary and the Daodejing as a layered compilation.",
      },
    ],
    related: [
      { href: "/thinkers/confucius", label: "Confucius quotations" },
      { href: "/thinkers/laozi", label: "Laozi quotations" },
      { href: "/schools/confucianism", label: "Confucianism quotes" },
      { href: "/schools/daoism", label: "Daoism and the Way" },
      { href: "/history-of-philosophy", label: "History of philosophy" },
    ],
    thinkers: ["Confucius", "Mencius", "Laozi", "Zhuangzi"],
  },
  {
    slug: "doctor-of-philosophy",
    title: "Doctor of Philosophy (PhD)",
    description:
      "What does Doctor of Philosophy mean? Learn what a PhD is, why the degree covers many disciplines, and what doctoral research involves.",
    eyebrow: "Academic degree",
    intro:
      "Doctor of Philosophy, usually abbreviated PhD, is a research doctorate awarded for making an original and defensible contribution to knowledge.",
    answer:
      "Despite its name, a PhD is not limited to philosophy. Universities award it in fields such as physics, history, biology, computer science, literature, and sociology. The name preserves an older sense of philosophy as the pursuit of systematic knowledge.",
    sections: [
      {
        heading: "What a PhD involves",
        paragraphs: [
          "Doctoral study generally combines advanced coursework, independent research, guidance from supervisors, and a dissertation. Requirements vary by country and institution, but the central task is to frame a significant question and answer it through rigorous research.",
          "A dissertation is evaluated not only for effort but for its methods, evidence, argument, and contribution to an existing scholarly conversation.",
        ],
      },
      {
        heading: "Why it is called Doctor of Philosophy",
        paragraphs: [
          "Historically, philosophy included broad inquiry into nature, knowledge, and human affairs. As modern disciplines became more specialized, the doctoral title remained in many fields.",
          "The title does not claim that every PhD holder is a professional philosopher. It signals training in independent inquiry and scholarly research.",
        ],
      },
      {
        heading: "Choosing doctoral study",
        paragraphs: [
          "A PhD is best considered as preparation for sustained research rather than simply a credential. Prospective students should investigate the research fit, funding, supervision, program structure, and career outcomes in their field and region.",
          "The right decision depends on the discipline, the research question, and the opportunities available after the degree.",
        ],
      },
    ],
    related: [
      { href: "/philosophy-degree", label: "Philosophy degree" },
      { href: "/what-is-philosophy", label: "What is philosophy?" },
      { href: "/philosophy-of-science", label: "Philosophy of science" },
    ],
    thinkers: ["Aristotle", "Immanuel Kant", "John Dewey"],
  },
  {
    slug: "philosophy-degree",
    title: "Philosophy Degree",
    description:
      "What is a philosophy degree? Explore undergraduate and graduate philosophy study, common subjects, transferable skills, and career paths.",
    eyebrow: "Study philosophy",
    intro:
      "A philosophy degree develops the ability to read carefully, reason clearly, write precisely, and examine difficult questions from more than one perspective.",
    answer:
      "Programs vary, but they typically include ethics, logic, epistemology, metaphysics, political philosophy, history of philosophy, and electives such as philosophy of mind, language, science, law, or technology.",
    sections: [
      {
        heading: "What students study",
        paragraphs: [
          "Students learn to reconstruct arguments, identify assumptions, compare theories, and write evidence-based essays. They may study texts from several global traditions as well as contemporary debates.",
          "Logic courses develop formal reasoning, while ethics and political philosophy connect ideas to decisions about institutions, rights, and responsibilities.",
        ],
      },
      {
        heading: "Skills a philosophy degree builds",
        paragraphs: [
          "The central skills are analytical reading, structured writing, clear communication, research, and judgment under uncertainty. These skills transfer to many settings because they concern how to handle complex information and competing reasons.",
          "The degree does not prescribe one career. Its value is strongest when students connect philosophical training to practical experience, interests, and the needs of a field they want to enter.",
        ],
      },
      {
        heading: "Paths after graduation",
        paragraphs: [
          "Graduates work in education, law, public service, policy, communications, technology, business, research, and nonprofit organizations, among other areas. Some continue to graduate study in philosophy or a related discipline.",
          "Career outcomes depend on location, additional training, internships, and individual goals. A program’s advising and opportunities matter as much as its course list.",
        ],
      },
    ],
    related: [
      { href: "/doctor-of-philosophy", label: "Doctor of Philosophy (PhD)" },
      { href: "/philosophy-of-education", label: "Philosophy of education" },
      { href: "/themes/learning", label: "Quotes on learning" },
      { href: "/how-to-study-philosophy", label: "How to study philosophy" },
    ],
    thinkers: ["Socrates", "John Dewey", "Hannah Arendt"],
  },
  {
    slug: "branches-of-philosophy",
    title: "Branches of Philosophy",
    description:
      "The main branches of philosophy explained: metaphysics, epistemology, ethics, logic, and political philosophy—with related specializations.",
    eyebrow: "Map of the field",
    intro:
      "Philosophy is often mapped into core branches—metaphysics, epistemology, ethics, and logic—plus political philosophy and many specialized fields.",
    answer:
      "A practical map: metaphysics asks what reality is like; epistemology asks what knowledge is; ethics asks how we ought to live; logic studies valid reasoning; political philosophy asks how power and institutions should be arranged.",
    sections: [
      {
        heading: "The four classical cores",
        paragraphs: [
          "Metaphysics (including ontology) studies being, causation, time, mind, and what kinds of things exist. Epistemology studies knowledge, justification, perception, and testimony. Ethics studies value, right action, and the good life. Logic studies inference—what follows from what.",
          "These cores overlap. Philosophy of science asks metaphysical and epistemic questions together; philosophy of mind joins metaphysics of consciousness to epistemology of self-knowledge.",
        ],
      },
      {
        heading: "Political and social philosophy",
        paragraphs: [
          "Political philosophy examines justice, rights, authority, freedom, and the legitimacy of states. It is sometimes listed beside the four cores because civic life continually forces philosophical choices about coercion and cooperation.",
        ],
      },
      {
        heading: "Specialized branches",
        paragraphs: [
          "Further fields include philosophy of language, mind, religion, art, law, education, history, technology, and artificial intelligence. Comparative philosophy studies these questions across traditions without assuming a single center.",
        ],
      },
      {
        heading: "How to use the map",
        paragraphs: [
          "Beginners can pick one live question—What is knowledge? What is justice?—and notice which branch it primarily belongs to, then follow quotations and guides in this archive as doorways into fuller texts.",
        ],
      },
    ],
    faq: [
      {
        question: "What are the main branches of philosophy?",
        answer:
          "Commonly: metaphysics, epistemology, ethics, and logic, often with political philosophy and many specialized areas.",
      },
      {
        question: "Is aesthetics a branch of philosophy?",
        answer:
          "Yes. Philosophy of art and beauty is a major specialization intersecting ethics and metaphysics of value.",
      },
      {
        question: "Where should a beginner start?",
        answer:
          "Start with ethics or a concrete question you already care about, then widen into epistemology and metaphysics as needed.",
      },
    ],
    related: [
      { href: "/branches", label: "The branches hub" },
      { href: "/branches/metaphysics", label: "Metaphysics" },
      { href: "/branches/epistemology", label: "Epistemology" },
      { href: "/branches/ethics", label: "Ethics" },
      { href: "/branches/logic", label: "Logic" },
      { href: "/branches/political-philosophy", label: "Political philosophy" },
      { href: "/branches/philosophy-of-mind", label: "Philosophy of mind" },
      { href: "/what-is-epistemology", label: "What is epistemology?" },
      { href: "/what-is-metaphysics", label: "What is metaphysics?" },
      { href: "/what-is-ethics", label: "What is ethics?" },
      { href: "/what-is-logic", label: "What is logic?" },
      { href: "/history-of-philosophy", label: "A history of philosophy" },
      { href: "/reference", label: "The philosophy reference guide" },
    ],
    thinkers: ["Aristotle", "Immanuel Kant", "Confucius"],
  },
  {
    slug: "what-is-epistemology",
    title: "What Is Epistemology?",
    description:
      "Epistemology meaning explained: the philosophy of knowledge, justification, belief, evidence, and skepticism—with clear examples and FAQs.",
    eyebrow: "Theory of knowledge",
    intro:
      "Epistemology is the branch of philosophy that studies knowledge: what it is, how beliefs are justified, where knowledge comes from, and how much of it we really have.",
    answer:
      "Epistemology (from Greek epistēmē, “knowledge,” and logos, “account”) asks three linked questions. What is the difference between knowing something and merely believing it? What makes a belief justified or reasonable? And can we answer the sceptic who says we know far less than we think? Its tools are used whenever anyone weighs evidence, trusts an expert, or asks whether a source can be relied on.",
    sections: [
      {
        heading: "Epistemology meaning and definition",
        paragraphs: [
          "The word was coined in the nineteenth century (the Scottish philosopher James Frederick Ferrier used it in 1854), but the questions are as old as philosophy. Plato’s Theaetetus is an entire dialogue devoted to the question “What is knowledge?”, and it ends without a definition that survives examination.",
          "A working definition: epistemology is the study of knowledge and justified belief — their nature, their sources, their structure, and their limits. It is normative rather than merely descriptive. Psychology can tell you how people actually form beliefs; epistemology asks how they ought to, and when a belief formed in a given way deserves to be called knowledge.",
        ],
      },
      {
        heading: "Knowledge as justified true belief — and the Gettier problem",
        paragraphs: [
          "The traditional analysis, drawn from a suggestion near the end of the Theaetetus (201c–d), says that you know a proposition when three conditions hold: the proposition is true, you believe it, and your belief is justified. Truth rules out knowing falsehoods; belief rules out knowledge you do not hold; justification rules out lucky guesses.",
          "In a three-page paper of 1963, “Is Justified True Belief Knowledge?”, Edmund Gettier gave cases in which all three conditions are met and yet the person plainly does not know. A standard illustration: you look at a clock that reads two o’clock and form the belief that it is two. It is two — but the clock stopped exactly twelve hours ago. Your belief is true and justified, and it is true by luck.",
          "Most of the last sixty years of epistemology can be read as responses to that paper: adding a fourth condition (no false lemmas, no defeaters), replacing justification with reliability, requiring that the belief be sensitive or safe — that it would not easily have been false — or, as Timothy Williamson argues in Knowledge and Its Limits (2000), treating knowledge as basic and not analysable into parts at all.",
        ],
      },
      {
        heading: "Sources of knowledge: perception, reason, memory, testimony",
        paragraphs: [
          "Perception gives knowledge of the world around us, but it can be deceived by illusion and hallucination, which raises the question of what, exactly, we perceive. Introspection gives access to our own mental states and is often thought to be especially secure, though psychology has made that assumption look optimistic.",
          "Reason gives a priori knowledge — knowledge not based on experience, such as mathematics and logic. Memory preserves knowledge across time rather than generating it. Testimony, knowledge taken from other people, is how most of what anyone knows was acquired: nobody has personally checked the distance to the Sun. Whether testimony needs positive reasons to trust the speaker (reductionism, associated with Hume) or is justified by default unless there is reason for doubt (anti-reductionism, associated with Thomas Reid) is one of the liveliest debates in the field.",
        ],
      },
      {
        heading: "Rationalism and empiricism",
        paragraphs: [
          "The great early-modern dispute was about which source comes first. Rationalists — Descartes, Spinoza, Leibniz — held that reason can establish substantive truths about reality independently of experience. Descartes’ Meditations (1641) doubts everything that can be doubted in order to find a foundation that cannot, and finds it in the thinking self.",
          "Empiricists — Locke, Berkeley, Hume — held that all ideas derive from experience. Locke’s Essay Concerning Human Understanding (1689) describes the mind at birth as “white paper, void of all characters.” Hume pushed the view to its limit and concluded that our expectation that the future will resemble the past — the basis of all causal reasoning — cannot itself be justified by reason: the problem of induction.",
          "Kant’s Critique of Pure Reason (1781) tried to settle the dispute by arguing that experience supplies the content of knowledge while the mind supplies its form — space, time, and categories such as causation — so that “thoughts without content are empty, intuitions without concepts are blind.”",
        ],
      },
      {
        heading: "The structure of justification",
        paragraphs: [
          "If every justified belief is justified by another belief, the chain either ends, loops, or goes on forever — the regress problem, already set out by the ancient sceptic Agrippa. Foundationalism says it ends: some beliefs (about immediate experience, or self-evident truths) are justified without depending on others. Coherentism says justification is a matter of how well beliefs hang together as a system; no belief is foundational.",
          "A second divide runs between internalism and externalism. Internalists hold that what justifies a belief must be accessible to the believer on reflection. Externalists — most prominently reliabilists such as Alvin Goldman — hold that a belief is justified if it was produced by a reliable process, whether or not the believer can tell that it was. The externalist can say a child knows her mother’s face; the internalist worries that this leaves justification out of the believer’s own view.",
        ],
      },
      {
        heading: "Skepticism and responses to it",
        paragraphs: [
          "Philosophical skepticism is not ordinary doubt about a particular claim; it is the argument that we cannot know even the things we are most sure of. Descartes’ evil demon and its modern version, the brain in a vat, share a structure: you cannot rule out that you are being systematically deceived; if you cannot rule it out, you do not know you have hands; so you do not know you have hands.",
          "Responses include G. E. Moore’s reversal (“Here is one hand” — I am more certain of that than of any premise in the sceptic’s argument), contextualism (the standards for “know” shift with the conversation, so the sceptic changes the subject rather than winning it), and Wittgenstein’s On Certainty, which argues that some propositions are not known or doubted at all but are the hinges on which inquiry turns.",
          "Ancient Pyrrhonian sceptics took a different line: they suspended judgement on purpose, and reported that tranquillity followed. Sextus Empiricus’ Outlines of Pyrrhonism is the main surviving source.",
        ],
      },
      {
        heading: "Epistemology beyond the Western canon",
        paragraphs: [
          "Indian philosophy developed a systematic theory of pramāṇas — valid means of knowing. The Nyāya school accepted four: perception, inference, comparison, and testimony, and its logicians analysed inference with a rigour comparable to Aristotle’s. Buddhist epistemologists Dignāga and Dharmakīrti accepted only perception and inference.",
          "In China, the Mohists wrote a canon on argument and naming, and Wang Yangming’s doctrine of the unity of knowledge and action (知行合一) held that someone who does not act on what they claim to know does not really know it — a thesis contemporary epistemologists of “know-how” have found worth taking seriously.",
        ],
      },
      {
        heading: "Contemporary branches: social, virtue, and formal epistemology",
        paragraphs: [
          "Social epistemology studies knowledge as a shared achievement: how testimony, expertise, peer disagreement, and institutions such as science and journalism produce or degrade collective knowledge. Miranda Fricker’s Epistemic Injustice (2007) identified the wrong done to someone when their word is discounted because of who they are.",
          "Virtue epistemology locates justification in the intellectual character of the knower — open-mindedness, carefulness, intellectual humility — rather than in properties of individual beliefs. Formal epistemology uses probability theory to model degrees of belief and how they should change with evidence, with Bayesian conditionalisation as its central rule.",
        ],
      },
      {
        heading: "Epistemology examples in everyday life",
        paragraphs: [
          "Checking a quotation is applied epistemology. A sentence circulates attributed to Socrates; the question is not only whether it is true but whether we have evidence that he said it, and of what kind. Testimony from a quote website is weak evidence; a locator in Plato’s text — Apology 38a — is strong. This archive’s sourcing method is built on that distinction.",
          "Other examples: a jury weighing a witness’s reliability; a doctor deciding how much to trust a single test; a reader asking whether an AI system’s fluent answer is knowledge, a reliable guess, or neither. In each case the question is what makes a belief worth holding, which is the question epistemology exists to ask.",
        ],
      },
    ],
    faq: [
      {
        question: "What is epistemology in simple terms?",
        answer:
          "It is the study of knowledge: how we know what we know, what makes a belief reasonable, and how far our knowledge reaches.",
      },
      {
        question: "What are the main branches of epistemology?",
        answer:
          "The traditional core covers the analysis of knowledge, the sources of knowledge (perception, reason, memory, testimony), the structure of justification (foundationalism and coherentism), and skepticism. Newer fields include social, virtue, feminist, and formal epistemology.",
      },
      {
        question: "What is the difference between epistemology and ontology?",
        answer:
          "Ontology asks what exists; epistemology asks how we can know it. A research project often needs both: what kinds of things are under study, and what counts as evidence for claims about them.",
      },
      {
        question: "What is the Gettier problem?",
        answer:
          "Edmund Gettier’s 1963 cases show that a belief can be true and justified and still not be knowledge, because it is true by luck. They refuted the traditional definition of knowledge as justified true belief and set the agenda for later epistemology.",
      },
      {
        question: "Who is the father of epistemology?",
        answer:
          "No single person. Plato’s Theaetetus is the first sustained treatment of the question “What is knowledge?”; Descartes is often credited with making epistemology the starting point of modern philosophy; the term itself dates from the 1850s.",
      },
      {
        question: "How is epistemology different from psychology?",
        answer:
          "Psychology describes how people actually form beliefs; epistemology evaluates how they ought to, and when a belief formed in a given way counts as knowledge.",
      },
    ],
    related: [
      { href: "/themes/knowledge", label: "Philosophy quotes about knowledge" },
      { href: "/themes/truth", label: "Philosophy quotes about truth" },
      { href: "/what-is-metaphysics", label: "What is metaphysics?" },
      { href: "/what-is-logic", label: "What is logic?" },
      { href: "/philosophy-of-science", label: "Philosophy of science" },
      { href: "/branches-of-philosophy", label: "The branches of philosophy" },
      { href: "/sourcing-method", label: "How this archive checks a quotation’s source" },
    ],
    thinkers: ["Plato", "René Descartes", "David Hume"],
    updated: "2026-09-27",
    furtherReading: [
      "Plato, Theaetetus",
      "René Descartes, Meditations on First Philosophy (1641)",
      "David Hume, An Enquiry Concerning Human Understanding (1748)",
      "Edmund Gettier, “Is Justified True Belief Knowledge?”, Analysis 23 (1963)",
      "Ludwig Wittgenstein, On Certainty (1969)",
      "Miranda Fricker, Epistemic Injustice (2007)",
      "Stanford Encyclopedia of Philosophy, “Epistemology”",
    ],
  },
  {
    slug: "what-is-metaphysics",
    title: "What Is Metaphysics?",
    description:
      "Metaphysics explained: being, causation, time, mind, free will, and the fundamental structure of reality.",
    eyebrow: "First philosophy",
    intro:
      "Metaphysics is the philosophical study of reality’s most general features—what exists, what things are, and how they relate.",
    answer:
      "It asks questions that ordinary sciences presuppose: What is a cause? What is a person? Is time fundamental? Are minds material? What does it mean for something to be possible?",
    sections: [
      {
        heading: "Ontology and categories",
        paragraphs: [
          "Ontology inventories kinds of being—objects, properties, events, numbers, minds. Metaphysicians ask whether these categories are fundamental or useful fictions.",
        ],
      },
      {
        heading: "Mind, free will, and modality",
        paragraphs: [
          "Modern metaphysics includes philosophy of mind, debates on free will and determinism, and theories of possibility and necessity (modality). These topics migrated into metaphysics as natural philosophy specialized.",
        ],
      },
      {
        heading: "Metaphysics across traditions",
        paragraphs: [
          "Greek ousia, Indian debates on self and emptiness, Islamic falsafa, and Neo-Confucian li/qi cosmologies show that metaphysical questioning is not a European monopoly—even when vocabularies differ.",
        ],
      },
    ],
    faq: [
      {
        question: "What is metaphysics?",
        answer:
          "It is inquiry into the fundamental nature of reality: being, causation, time, mind, and related concepts.",
      },
      {
        question: "Is metaphysics the same as physics?",
        answer:
          "No. Physics studies the natural world empirically; metaphysics asks more general questions about existence and categories, sometimes informed by science.",
      },
      {
        question: "Why does metaphysics matter?",
        answer:
          "Assumptions about persons, causation, and possibility shape ethics, law, religion, and AI debates.",
      },
    ],
    related: [
      { href: "/themes/being", label: "Quotes on being" },
      { href: "/branches-of-philosophy", label: "Branches of philosophy" },
      { href: "/philosophy-of-ai", label: "Philosophy of AI" },
    ],
    thinkers: ["Aristotle", "Baruch Spinoza", "Laozi"],
  },
  {
    slug: "what-is-ethics",
    title: "What Is Ethics?",
    description:
      "Ethics explained: moral philosophy of right action, virtue, consequences, and the good life.",
    eyebrow: "Moral philosophy",
    intro:
      "Ethics—or moral philosophy—studies how we ought to act, what makes a life good, and how to evaluate character and institutions.",
    answer:
      "Major approaches include virtue ethics (character), deontology (duty and rights), and consequentialism (outcomes), alongside care ethics and many tradition-specific moral vocabularies.",
    sections: [
      {
        heading: "Three families of theory",
        paragraphs: [
          "Virtue ethics asks what kind of person to become. Deontology asks which rules or rights constrain action. Consequentialism asks which outcomes matter and how to weigh them. Real disputes often mix these lenses.",
        ],
      },
      {
        heading: "Applied ethics",
        paragraphs: [
          "Bioethics, AI ethics, environmental ethics, and business ethics apply tools of moral philosophy to concrete dilemmas. Clarity about concepts—harm, consent, fairness—prevents slogan wars.",
        ],
      },
      {
        heading: "Ethics beyond the West",
        paragraphs: [
          "Confucian ren, Buddhist compassion, Ubuntu, and Islamic ethics offer structured moral thought that should be read as philosophy, not as exotic decoration on a European map.",
        ],
      },
    ],
    faq: [
      {
        question: "What is ethics in philosophy?",
        answer:
          "It is the study of morality: right and wrong, virtue and vice, and the values that should guide life and policy.",
      },
      {
        question: "What is the difference between ethics and morality?",
        answer:
          "In everyday use they overlap. Academically, ethics often names the philosophical study of moral practices and concepts.",
      },
      {
        question: "Where can I find ethics quotes?",
        answer:
          "Browse themes such as virtue, morality, responsibility, and justice in this archive.",
      },
    ],
    related: [
      { href: "/themes/virtue", label: "Quotes on virtue" },
      { href: "/themes/morality", label: "Quotes on morality" },
      { href: "/schools/stoicism", label: "Stoicism" },
    ],
    thinkers: ["Aristotle", "Immanuel Kant", "Confucius"],
  },
  {
    slug: "what-is-logic",
    title: "What Is Logic?",
    description:
      "Logic explained: valid inference, argument form, formal and informal reasoning in philosophy.",
    eyebrow: "Study of reasoning",
    intro:
      "Logic is the systematic study of valid inference—what follows from what, and why some arguments succeed while others only persuade.",
    answer:
      "It ranges from formal systems (propositional and predicate logic) to informal fallacies and the logic of scientific confirmation. Logic trains precision without replacing judgment about premises.",
    sections: [
      {
        heading: "Validity and soundness",
        paragraphs: [
          "An argument is valid when the conclusion must be true if the premises are. It is sound when valid and its premises are true. Confusing rhetorical force with validity is a common error.",
        ],
      },
      {
        heading: "Formal and informal logic",
        paragraphs: [
          "Formal logic uses symbolic languages to track structure. Informal logic analyzes everyday arguments, definitions, and fallacies. Both serve philosophical writing and public debate.",
        ],
      },
      {
        heading: "Logic in the history of philosophy",
        paragraphs: [
          "Aristotle’s syllogistic, Stoic propositional insights, Indian and Chinese debates on language and standards, medieval scholastic logic, and modern mathematical logic all belong to this story.",
        ],
      },
    ],
    faq: [
      {
        question: "What is logic in philosophy?",
        answer:
          "It is the study of correct reasoning and the structure of arguments.",
      },
      {
        question: "Do I need symbolic logic to study philosophy?",
        answer:
          "It helps for some fields, but clear informal reasoning is foundational everywhere.",
      },
      {
        question: "How does logic relate to AI?",
        answer:
          "Classical AI used formal logic extensively; modern machine learning raises new questions about inference, explanation, and reliability.",
      },
    ],
    related: [
      { href: "/themes/reason", label: "Quotes on reason" },
      { href: "/philosophy-of-language", label: "Philosophy of language" },
      { href: "/branches-of-philosophy", label: "Branches of philosophy" },
    ],
    thinkers: ["Aristotle", "Bertrand Russell", "Ludwig Wittgenstein"],
  },
  {
    slug: "how-to-study-philosophy",
    title: "How to Study Philosophy",
    description:
      "How to study philosophy: reading methods, note-taking, argument reconstruction, and a practical beginner path.",
    eyebrow: "Method",
    intro:
      "Studying philosophy means learning to reconstruct arguments, notice assumptions, and revise beliefs under pressure from reasons—not memorizing slogans.",
    answer:
      "Read slowly, write paraphrases, state conclusions and premises, seek objections, and compare traditions. Short primary passages plus reliable secondary guides beat rushing through summaries alone.",
    sections: [
      {
        heading: "A weekly practice",
        paragraphs: [
          "Choose one short primary text. First read for orientation; second read to mark claims; third read to outline the argument. Write a half-page reconstruction in your own words, then one objection and a possible reply.",
        ],
      },
      {
        heading: "Tools that help",
        paragraphs: [
          "Concept lists, argument maps, and quotation cards (with sources) build memory without replacing understanding. Discussing with a patient interlocutor exposes hidden premises.",
        ],
      },
      {
        heading: "Avoiding common traps",
        paragraphs: [
          "Do not treat viral quotes as scholarship. Do not assume one tradition owns “philosophy.” Do not confuse biography with argument—though context helps interpretation.",
        ],
      },
    ],
    faq: [
      {
        question: "How should a beginner study philosophy?",
        answer:
          "Start with short primary passages, reconstruct arguments in writing, and use reputable encyclopedias for orientation.",
      },
      {
        question: "What should I read first?",
        answer:
          "A Socratic dialogue, a Stoic handbook chapter, or a Confucian analect—plus a modern ethics essay you care about.",
      },
      {
        question: "Can I study philosophy without a degree?",
        answer:
          "Yes. Disciplined reading groups, open courses, and careful primary-text practice are enough to begin seriously.",
      },
    ],
    related: [
      { href: "/philosophy-for-beginners", label: "Philosophy for beginners" },
      { href: "/philosophy-degree", label: "Philosophy degree" },
      { href: "/quotes/short", label: "Short philosophy quotes" },
    ],
    thinkers: ["Socrates", "Epictetus", "John Dewey"],
  },
  {
    slug: "philosophy-for-beginners",
    title: "Philosophy for Beginners",
    description:
      "Philosophy for beginners: simple starting points, core questions, reading tips, and where to go next.",
    eyebrow: "Start here",
    intro:
      "Philosophy for beginners begins with questions you already ask—about fairness, knowledge, death, love, and meaning—then learns the craft of answering with reasons.",
    answer:
      "You do not need jargon to start. You need curiosity, patience with difficulty, and willingness to change your mind when a better reason appears.",
    sections: [
      {
        heading: "Five starter questions",
        paragraphs: [
          "What makes an action wrong? What can I know for sure? What is a self? What do I owe strangers? What makes a life meaningful? Pick one and keep a notebook of attempts.",
        ],
      },
      {
        heading: "A gentle path through this site",
        paragraphs: [
          "Read a random quotation, open its thinker page, then a theme page. Follow a guide such as What Is Philosophy?, then a school page such as Stoicism or Confucianism.",
        ],
      },
      {
        heading: "What progress looks like",
        paragraphs: [
          "Progress is clearer distinctions, fairer objections, and less fear of saying “I do not know yet.” It is not collecting impressive names.",
        ],
      },
    ],
    faq: [
      {
        question: "Is philosophy hard for beginners?",
        answer:
          "It can be difficult because it asks for precision. Short texts and good guides make a fair start possible for anyone willing to practice.",
      },
      {
        question: "Do I need to know Greek or Chinese?",
        answer:
          "Not to begin. Reliable English translations and commentaries are enough for a first serious encounter.",
      },
      {
        question: "How long until philosophy feels useful?",
        answer:
          "Many people notice clearer thinking within weeks of weekly practice; depth compounds over years.",
      },
    ],
    related: [
      { href: "/how-to-study-philosophy", label: "How to study philosophy" },
      { href: "/what-is-philosophy", label: "What is philosophy?" },
      { href: "/quotes/famous", label: "Famous philosophy quotes" },
    ],
    thinkers: ["Socrates", "Marcus Aurelius", "Confucius"],
  },
  {
    slug: "plato-vs-aristotle",
    title: "Plato vs Aristotle: Key Differences Explained",
    description:
      "Plato vs Aristotle: forms vs substances, politics, ethics, and how their disagreement shaped Western philosophy.",
    eyebrow: "Comparison",
    intro:
      "Plato and Aristotle share a teacher–student link and a vast influence, yet they diverge on metaphysics, ethics, and the best political order.",
    answer:
      "Broadly: Plato emphasizes transcendent forms and a philosopher-led city in the Republic; Aristotle emphasizes substances in nature, empirical study, and virtue as a mean toward flourishing in civic life.",
    comparison: [
      {
        aspect: "Metaphysics",
        left: "Eternal Forms beyond the changing world; particulars participate in them",
        right: "Substances of form-in-matter; no separate realm of Forms",
      },
      {
        aspect: "Knowledge",
        left: "Recollection of the Forms through dialectic",
        right: "Empirical observation refined into causes and demonstrations",
      },
      {
        aspect: "Ethics",
        left: "Justice as harmony of the soul; the Good as the highest object",
        right: "Eudaimonia through virtues that are means between extremes",
      },
      {
        aspect: "Politics",
        left: "Philosopher-kings rule an ideal city in the Republic",
        right: "Comparative study of constitutions; politics as civic partnership",
      },
      {
        aspect: "Method",
        left: "Dialogue, hypothesis, and division",
        right: "Endoxa, definition, syllogistic logic, and empirical research",
      },
      {
        aspect: "Key works",
        left: "Republic, Phaedo, Symposium",
        right: "Nicomachean Ethics, Politics, Metaphysics",
      },
    ],
    sections: [
      {
        heading: "Reality and knowledge",
        paragraphs: [
          "Plato’s dialogues explore forms as stable objects of understanding beyond shifting appearances. Aristotle’s metaphysics centers substances and causes within the natural world, with logic organizing scientific demonstration.",
        ],
      },
      {
        heading: "Ethics and politics",
        paragraphs: [
          "Both care about virtue and the good life. Aristotle’s Nicomachean Ethics makes habit and practical wisdom central; Plato’s Republic links justice in the soul to justice in the city. Their institutional ideals differ in structure and tone.",
        ],
      },
      {
        heading: "Why the contrast still matters",
        paragraphs: [
          "Later philosophy repeatedly returns to Platonic and Aristotelian options—about universals, science, education, and the relation of theory to practice. Reading them against each other trains comparative judgment.",
        ],
      },
    ],
    faq: [
      {
        question: "What is the main difference between Plato and Aristotle?",
        answer:
          "A common contrast: Plato stresses transcendent forms; Aristotle stresses natural substances and empirical investigation—though both are more nuanced than the slogan.",
      },
      {
        question: "Who was Aristotle’s teacher?",
        answer: "Aristotle studied in Plato’s Academy before founding the Lyceum.",
      },
      {
        question: "Should beginners read Plato or Aristotle first?",
        answer:
          "Many start with a short Platonic dialogue for drama and questions, then sample Aristotle’s ethics for systematic virtue theory.",
      },
    ],
    related: [
      { href: "/thinkers/plato", label: "Plato quotes" },
      { href: "/thinkers/aristotle", label: "Aristotle quotes" },
      { href: "/history-of-philosophy", label: "History of philosophy" },
    ],
    thinkers: ["Plato", "Aristotle", "Socrates"],
  },
  {
    slug: "confucianism-vs-daoism",
    title: "Confucianism vs Daoism",
    description:
      "Confucianism vs Daoism: ritual and cultivation versus naturalness and the Way—compared without caricature.",
    eyebrow: "Comparison",
    intro:
      "Confucianism and Daoism are often contrasted as social cultivation versus spontaneous alignment with the Dao—but historically they also conversed, criticized, and borrowed.",
    answer:
      "Confucian teachings emphasize ren, ritual, learning, and responsible roles; Daoist texts associated with Laozi and Zhuangzi emphasize the Dao, wuwei, and critique of rigid naming and forced order.",
    comparison: [
      {
        aspect: "Core ideal",
        left: "Ren (humaneness) expressed through cultivated roles and ritual",
        right: "Alignment with the Dao; naturalness over convention",
      },
      {
        aspect: "Self-cultivation",
        left: "Study, ritual practice, and reflection within relationships",
        right: "Unlearning rigid distinctions; wuwei, non-forced action",
      },
      {
        aspect: "Government",
        left: "Exemplary virtue and ritual order bring good rule",
        right: "Restraint and softness; rule that does not over-manage",
      },
      {
        aspect: "Language",
        left: "Correct naming (zhengming) clarifies roles and duties",
        right: "Suspicion of fixed names; the Dao named is not the constant Dao",
      },
      {
        aspect: "Key figures",
        left: "Confucius, Mencius, Xunzi",
        right: "Laozi, Zhuangzi",
      },
      {
        aspect: "Key texts",
        left: "Analects, Mencius, Xunzi",
        right: "Daodejing, Zhuangzi",
      },
    ],
    sections: [
      {
        heading: "Ethics and self-cultivation",
        paragraphs: [
          "Confucians train character through ritual and study within relationships. Daoist writings often warn that forced moralism can deform life, preferring responsiveness and unlearning of rigid distinctions.",
        ],
      },
      {
        heading: "Politics and language",
        paragraphs: [
          "Confucian political thought links exemplary virtue and ritual order to good government. Daoist counsel frequently praises restraint, softness, and ruling that does not over-manage. Both care about language’s power to clarify or distort.",
        ],
      },
      {
        heading: "Reading them together",
        paragraphs: [
          "Chinese intellectual history is not a simple binary. Many readers held Confucian public roles and Daoist or Buddhist private sensibilities. Comparison should preserve each tradition’s internal debates.",
        ],
      },
    ],
    faq: [
      {
        question: "What is the difference between Confucianism and Daoism?",
        answer:
          "Confucianism stresses cultivated humaneness and ritual life; Daoism stresses alignment with the Dao and caution about coercive order—though both are diverse.",
      },
      {
        question: "Can someone follow both?",
        answer:
          "Historically, many Chinese thinkers combined resources from both; modern readers can also learn from each without forced syncretism.",
      },
      {
        question: "Where should I start reading?",
        answer:
          "Try Analects passages alongside a short Daodejing chapter or Zhuangzi story, using reliable translations.",
      },
    ],
    related: [
      { href: "/chinese-philosophy", label: "Chinese philosophy" },
      { href: "/schools/confucianism", label: "Confucianism" },
      { href: "/thinkers/laozi", label: "Laozi quotes" },
    ],
    thinkers: ["Confucius", "Laozi", "Zhuangzi", "Mencius"],
  },
  {
    slug: "philosophy-vs-science",
    title: "Philosophy vs Science",
    description:
      "Philosophy vs science: how they differ, how they cooperate, and why philosophical questions remain after scientific results.",
    eyebrow: "Comparison",
    intro:
      "Science and philosophy are partners and neighbors: science excels at empirical modeling; philosophy clarifies concepts, methods, and values that science uses but does not always settle.",
    answer:
      "Philosophy is not failed science. It asks what evidence is, what explanation means, what consciousness is, and which ends knowledge should serve—questions that remain even when experiments succeed.",
    comparison: [
      {
        aspect: "Primary question",
        left: "What exists, what we can know, how we should live",
        right: "How does the natural and social world actually behave",
      },
      {
        aspect: "Method",
        left: "Conceptual analysis, argument, thought experiment",
        right: "Hypothesis, measurement, experiment, peer review",
      },
      {
        aspect: "Standard of progress",
        left: "Sharper questions and better-supported positions",
        right: "Theories that predict and survive testing",
      },
      {
        aspect: "Relation to its own history",
        left: "Current work still engages Plato and Kant directly",
        right: "Superseded theories are history, not live options",
      },
      {
        aspect: "What it cannot settle alone",
        left: "Empirical facts about the world",
        right: "What the results mean and what they should be used for",
      },
    ],
    sections: [
      {
        heading: "Division of labor",
        paragraphs: [
          "Empirical sciences test hypotheses about the natural and social world. Philosophy analyzes assumptions about causation, probability, confirmation, and the interpretation of theories.",
        ],
      },
      {
        heading: "Shared history",
        paragraphs: [
          "Natural philosophy once included what we now call physics. Specialization created disciplines; philosophy of science remains the reflective twin of scientific practice.",
        ],
      },
      {
        heading: "Why the contrast matters for AI and ethics",
        paragraphs: [
          "Technical capability does not answer responsibility, fairness, or meaning. Those remain philosophical—and public—questions informed by, but not replaced by, scientific results.",
        ],
      },
    ],
    faq: [
      {
        question: "Is philosophy obsolete because of science?",
        answer:
          "No. Science expands knowledge; philosophy continues to examine methods, meanings, and values—including those of science itself.",
      },
      {
        question: "Can scientists ignore philosophy?",
        answer:
          "They can try, but they still rely on concepts of evidence, model, cause, and significance that repay philosophical scrutiny.",
      },
      {
        question: "What is philosophy of science?",
        answer:
          "It is the philosophical study of scientific evidence, explanation, theories, and objectivity.",
      },
    ],
    related: [
      { href: "/philosophy-of-science", label: "Philosophy of science" },
      { href: "/what-is-epistemology", label: "What is epistemology?" },
      { href: "/philosophy-of-ai", label: "Philosophy of AI" },
    ],
    thinkers: ["Aristotle", "Karl Popper", "Bertrand Russell"],
  },
  {
    slug: "why-philosophy-matters",
    title: "Why Philosophy Matters",
    description:
      "Why philosophy matters: clarity, ethics, citizenship, technology, and the examined life in the twenty-first century.",
    eyebrow: "Purpose",
    intro:
      "Philosophy matters because people must still decide what is true enough to trust, what is fair enough to enforce, and what kind of life is worth wanting.",
    answer:
      "Its value is intellectual responsibility under uncertainty: better questions, clearer concepts, fairer disagreements, and stronger resistance to manipulative rhetoric—including in technology and politics.",
    sections: [
      {
        heading: "Personal life",
        paragraphs: [
          "Grief, ambition, friendship, and failure all contain philosophical stakes. Reflective habits reduce self-deception and widen sympathy without requiring a academic career.",
        ],
      },
      {
        heading: "Public life",
        paragraphs: [
          "Democracies depend on citizens who can evaluate arguments about rights, evidence, and authority. Philosophy supplies tools—not a single party line.",
        ],
      },
      {
        heading: "Technological life",
        paragraphs: [
          "AI, biotechnology, and climate policy continually reopen questions of agency, risk, and justice. Technical expertise without ethical and conceptual clarity is incomplete.",
        ],
      },
    ],
    faq: [
      {
        question: "Why does philosophy still matter?",
        answer:
          "Because fundamental questions about knowledge, value, and meaning remain open—and practical decisions still depend on them.",
      },
      {
        question: "Does philosophy pay?",
        answer:
          "Indirectly: it builds transferable skills in analysis and communication; its deeper payoff is better judgment.",
      },
      {
        question: "How can I practice philosophy daily?",
        answer:
          "Read one short passage, write one reconstructed argument, and test one belief you hold against a serious objection.",
      },
    ],
    related: [
      { href: "/what-is-philosophy", label: "What is philosophy?" },
      { href: "/philosophy-for-beginners", label: "Philosophy for beginners" },
      { href: "/quotes", label: "Philosophy quotes archive" },
    ],
    thinkers: ["Socrates", "Hannah Arendt", "John Dewey"],
  },
  {
    slug: "voltaire-philosophy-independent-thought",
    title: "Voltaire on Independent Thought",
    /**
     * "Voltaire philosophy on independent thought" reads as a definition-plus-
     * attitude query: the reader wants the philosopher's actual position, not a
     * list of his bon mots. GSC's longest tail on this site is exact-phrasing
     * lookups with a source attached, so the title takes the keyword whole and
     * the answer section states the position before any anecdote.
     */
    description:
      "Voltaire's philosophy of independent thought: why he defended free speech, attacked intolerance, and made doubt a method rather than a mood — with sourced quotations.",
    eyebrow: "A thinker's position",
    intro:
      "Voltaire did not invent doubt. He made it a working instrument: something you point at every claim, including your own.",
    answer:
      "Voltaire's philosophy of independent thought holds that a person should test inherited beliefs the way a natural philosopher tests an instrument — by asking what evidence would change the conclusion, and by refusing to abandon inquiry simply because the authorities disapprove. The method runs through his satire, his histories, and his campaigns on behalf of people who were imprisoned or exiled for words. He held that thought is only genuinely one's own when it survives contact with reason, and that tolerating the other's right to disagree is the condition of every other liberty.",
    sections: [
      {
        heading: "Doubt as a method, not a mood",
        paragraphs: [
          "The most quoted line in Voltaire's corpus is also the one most often trimmed of its point: \"Doubt is not a pleasant condition, but certainty is an absurd one.\" The sentence appears in the *Dictionnaire philosophique* under the entry on faith, and its target is not scepticism for its own sake but the refusal to examine a belief because examining it is uncomfortable. Certainty that has not survived scrutiny is, on this account, not a strength but a failure of nerve dressed as conviction.",
          "The pairing matters. Voltaire was not recommending permanent doubt about everything; a permanent doubt is its own certainty and settles nothing. He is describing an attitude toward inherited claims: hold them provisionally, know what would unsettle them, and be honest when you cannot meet that standard. The archive records this passage with its original French wording alongside the English, because the tone of the original — weary, aphoristic, faintly amused — is easy to sand off in translation and the tone is the argument.",
        ],
      },
      {
        heading: "Free speech and the cost of saying it",
        paragraphs: [
          "Voltaire spent much of his life defending people other powerful men had convicted of saying things. The English essays, the *Candide* of 1759, the *Letters on England*, and the pamphlets written on behalf of Calas, La Mettrie, and the chevalier de la Barre all work the same way: they restate the accuser's case more carefully than the accuser did, until the accusation is seen to rest on nothing a reason could accept.",
          "This is why \"I disapprove of what you say, but I will defend to the death your right to say it\" is the sentence that outlived him. It is frequently misattributed to Voltaire alone and is a paraphrase of a formulation he developed across the *Traité sur la tolérance* and later essays; the archive registers it as a Voltaire attribution with the note that the exact English wording is a modern compression rather than a sentence from a single published page. What is not in dispute is the position it names: the right to state an unwelcome conclusion does not depend on the listener liking it.",
        ],
      },
      {
        heading: "Intolerance, examined like any other doctrine",
        paragraphs: [
          "Voltaire's earliest and most durable political argument concerns toleration. In the *Traité sur la tolérance* (1763) he distinguishes sharply between toleration and indifference, asking that no one be praised for persecuting anyone and no one be praised for looking away. The chapter on the Jews, later removed from later editions at the family's insistence, shows his argument running against his own certainties — a reminder that the method he advocated was applied more consistently by others than by him.",
          "It is worth reading his religious criticism as philosophy rather than provocation. His targets were not only churches but the use of authority to settle questions that reason had not settled: whether revelation supersedes argument, whether a doctrine may be enforced, whether a person's assent can be compelled. Where a belief rests on evidence, enforcement is redundant; where it rests on force, it is already an admission that the reasons are not there.",
        ],
      },
      {
        heading: "What independent thought is not",
        paragraphs: [
          "Voltaire is badly misread when he is made into a relativist — as though \"men must tolerate one another\" meant every opinion is equally correct. Read the *Traité* carefully and the demand is narrower and more exacting: society must permit the examination that leads there, and must not punish the person doing it. A conclusion you reach by argument is worth more than one you inherit by birth, and the argument has to be the kind other people can check.",
          "The second misreading is that his scepticism about institutions is indifference to suffering. Nothing in his record supports that. He wrote for de la Barre and for Calas because he believed the treatment they received was a public injustice, and he thought a civilisation that tolerates that treatment has already decided something false about itself. The doubt is aimed at authorities; the anger is aimed at cruelty.",
        ],
      },
    ],
    faq: [
      {
        question: "What is Voltaire's philosophy of independent thought?",
        answer:
          "That inherited beliefs should be tested by reason rather than accepted on authority, and that a person whose conclusions have survived examination holds them more freely than one who inherited them unexamined.",
      },
      {
        question: "Did Voltaire believe in toleration or in relativism?",
        answer:
          "Toleration. He argued in the Traité sur la tolérance that society should permit the examination of belief and punish no one for holding an unwelcome conclusion, which is a narrower claim than saying all opinions are equally true.",
      },
      {
        question: "Did Voltaire actually write 'I disapprove of what you say'?",
        answer:
          "The sentence is a modern English paraphrase of a position Voltaire developed across the Traité sur la tolérance and his later essays, not a line from one published page. The archive registers it as a Voltaire attribution with that caveat.",
      },
    ],
    related: [
      { href: "/quotes/q0314", label: "Doubt is not a pleasant condition" },
      { href: "/quotes/q0395", label: "I disapprove of what you say" },
      { href: "/quotes/q0339", label: "If God did not exist" },
      { href: "/what-is-philosophy", label: "What is philosophy?" },
      { href: "/philosophy-definition", label: "Philosophy definition" },
      { href: "/quote-source", label: "Who said this quote?" },
    ],
    thinkers: ["Voltaire", "John Locke", "Immanuel Kant"],
    updated: "2026-10-05",
    furtherReading: [
      "Voltaire, Traité sur la tolérance (1763)",
      "Voltaire, Dictionnaire philosophique (1764)",
      "Voltaire, Essais sur les mœurs",
    ],
  },
  {
    slug: "philosophy-of-keep-things-simple",
    title: "The Philosophy of Keeping Things Simple",
    /**
     * "Philosophy of keep things simple" is a broad-intent query with no single
     * author behind it, so the page has to gather several traditions rather than
     * force one. The Stoics carry most of the weight, with Aristotle on
     * deliberateness, Epicurus on desire, and Wittgenstein on what can be
     * said at all.
     */
    description:
      "The philosophy of keeping things simple: what Stoicism, Epicurus, Aristotle, and Wittgenstein each mean by simplicity, and why simplicity is a discipline rather than a preference.",
    eyebrow: "A recurring problem",
    intro:
      "Simplicity is usually sold as a preference for less. The philosophers who wrote about it were after something harder: a rule about what deserves your attention at all.",
    answer:
      "The philosophy of keeping things simple is not minimalism as aesthetic taste. Across traditions it is the claim that a life and a mind get their clarity from the number of things admitted, not from the number owned. The Stoics framed it as an audit of desire; Aristotle framed it as deliberateness about what is genuinely worth doing; Epicurus as freedom from fear; Wittgenstein as a limit on what can be meaningfully said. What they share is the discipline of declining the second explanation before looking for the first.",
    sections: [
      {
        heading: "Simplicity as an audit of desire",
        paragraphs: [
          "Epictetus makes the practical form of the idea precise. His opening distinction — some things are in our power, some are not — is not a consoling slogan but a sorting instruction: put every concern on one side or the other, then stop spending attention on the half you cannot move. The archive keeps his summary of the two sides verbatim, because the modern versions of it usually blur the very distinction he is making.",
          "Seneca makes the same point about time rather than about action. \"All else belongs to others; time alone is ours\" is not a claim that everyone gets the same amount of it; it is a claim that the one thing not subject to anyone else's control is the thing you are spending. Read with the Epictetus passage, the two make a complete argument: sort your concerns, then notice that the unsorted ones are largely not yours.",
        ],
      },
      {
        heading: "Fewer explanations, not fewer things",
        paragraphs: [
          "There is a Stoic distinction that does more work than it first appears. Preludes are about how many competing explanations of an event you are willing to hold. A person is not simple-minded who has one account of why a thing happened; they are simple-minded who cannot hold a second. The discipline runs opposite to the assumption that simplicity means reaching a conclusion quickly and then closing the question.",
          "This is why the same tradition treats a narrow vocabulary as a hazard. Seneca warns that constant company with one set of words narrows the mind to that set, and the warning has an uncomfortable present tense. A life kept simple by subtraction is still a life that changes; a life kept simple by subtraction that also stops learning new words about it is not simplicity but a smaller room.",
        ],
      },
      {
        heading: "Deliberateness rather than decision",
        paragraphs: [
          "Aristotle's contribution is the distinction between being hasty and being simple. Deciding quickly is not a virtue in itself; deciding quickly on a large and irreversible matter is a defect. What he recommends is deliberation on the matters that are large and hard, and immediate action on the matters that are neither — which is a very different discipline from the modern instruction to just ship it.",
          "The virtue he names alongside good deliberation is not minimalism but proportion. A courageous person is courageous in the right degree; a generous person is generous in the right degree. Simplicity is the same shape applied to attention: give the complicated matters more thought, not less, and give the trivial ones less. Most of what looks like a demand for simplicity is actually a demand to stop treating small things as if they were large.",
        ],
      },
      {
        heading: "A limit, not a style",
        paragraphs: [
          "The twentieth century gave the idea its hardest form. Wittgenstein's later work argues that much of what we try to say has no form in the world that would make it true or false, and that the effort to force such statements into words produces not clarity but confusion dressed as depth. His remedy is not a smaller vocabulary so much as a sharper sense of which questions are answerable.",
          "Read together, the traditions converge on something that is easy to mistake for a preference. Epicurus asks you to name the desires that produce anxiety. The Stoics ask you to sort what you can control from what you cannot. Aristotle asks you to deliberate proportionately. Wittgenstein asks you to notice when the question has slipped out of reach. None of them is a style of living. Each is a way of finding out how much of your attention is being spent on things that cannot be improved.",
        ],
      },
    ],
    faq: [
      {
        question: "Is 'keep it simple' a philosophy or a preference?",
        answer:
          "In the traditions above it is a discipline about attention rather than a taste about possessions. The test is not how little you own but how many of your concerns are ones you can actually act on.",
      },
      {
        question: "What did the Stoics mean by simplicity?",
        answer:
          "That a mind should hold few competing explanations of events and few competing appetites, so that attention is not spent on things outside its control. Seneca ties this directly to how one uses time.",
      },
      {
        question: "Who said that time alone is ours?",
        answer:
          "Seneca, in a letter recorded in the archive as 'All else belongs to others; time alone is ours.' The Latin is time, of all things, is the only thing we have.",
      },
    ],
    related: [
      { href: "/quotes/q0030", label: "All else belongs to others; time alone is ours" },
      { href: "/quotes/q0034", label: "Leisure without study is death" },
      { href: "/quotes/q0029", label: "More things frighten us than crush us" },
      { href: "/what-is-ethics", label: "What is ethics?" },
      { href: "/themes/life", label: "Philosophy quotes about life" },
      { href: "/why-philosophy-matters", label: "Why philosophy matters" },
    ],
    thinkers: ["Seneca", "Epictetus", "Marcus Aurelius", "Ludwig Wittgenstein"],
    updated: "2026-10-05",
    furtherReading: [
      "Epictetus, Enchiridion",
      "Seneca, Letters to Lucilius, letter 1",
      "Aristotle, Nicomachean Ethics",
    ],
  },
  {
    slug: "peter-thiel-business-philosophy-quotes",
    title: "Peter Thiel Business Philosophy Quotes",
    /**
     * The name is a person, not a topic, so this page competes for the `<person>
     * quotes` pattern that already works for Socrates and Nietzsche in this
     * archive. The differentiator is provenance: every Thiel line is recorded
     * with its book and chapter rather than presented as a floating aphorism.
     */
    description:
      "Peter Thiel's business philosophy, quoted and sourced: monopoly, secrets, contrarian thinking, and definite optimism from Zero to One, with chapter references.",
    eyebrow: "A person and a position",
    intro:
      "Peter Thiel wrote a book with a thesis about how the world works, and the book is quotable in a way most business writing is not.",
    answer:
      "Peter Thiel's business philosophy argues that competition and capitalism are opposites rather than synonyms: a market in which firms compete is a market in which profits get competed away, so a successful company is one that escapes into a position with no close substitute. Three commitments follow from that — value comes from secrets few people believe, originality is rarer than courage, and the future is a thing to be shaped deliberately rather than waited on. The claims are contested; the sourcing is not, and this page records where each line comes from.",
    sections: [
      {
        heading: "The competitive trap",
        paragraphs: [
          "\"Competition is for losers\" is Thiel's most quoted line and his least carefully quoted. In *Zero to One* he does not deny that competition exists or that it is sometimes rational; he argues that a firm trapped in competition must keep shaving price or cost to survive, and that the value it creates leaks to its customers rather than staying with it. The phrase is an epigram for an argument he makes over several pages, and it is quoted far more often without the argument attached.",
          "\"Monopoly is the condition of every successful business\" is the load-bearing sentence, and it is worth reading as a definition rather than a boast. Monopoly here means the absence of a close substitute, not the absence of rivals or the possession of a market share. Google is Thiel's standing example, and the book is careful that this is not a licence for sloth: a monopolist still has to keep building, because the position is defended by continuing to be better, not by having been better once.",
        ],
      },
      {
        heading: "The idea worth more than the plan",
        paragraphs: [
          "\"All happy companies are different: each one earns a monopoly by solving a unique problem. All failed companies are the same: they failed to escape competition.\" Thiel inverts Tolstoy's line from *Anna Karenina* deliberately, and the inversion is the argument: in families the sameness is unhappiness, in companies the sameness is indistinguishable mediocrity. Failure has a signature you can recognise in advance, which is why it is worth studying rather than lamenting.",
          "The corollary is that strategy is largely a matter of choosing which game to play. \"Every moment in business happens only once\" is the sentence that makes the argument personal: a market is not a series of equivalent rounds to be won on effort, it is a set of distinct conditions, each of which will not recur in the same form. Treating it as repeatable is how a firm invests years in a position that has already been taken.",
        ],
      },
      {
        heading: "Secrets, contrarianism, and the courage to hold them",
        paragraphs: [
          "The book's most quoted line on originality is also its most portable: \"The most contrarian thing of all is not to oppose the crowd but to think for yourself.\" The distinction it draws is between performing dissent and actually having a position. Opposition to a consensus you have not examined is a social act, and it is subject to the same drift as any other social act — it converges on whatever the crowd does next.",
          "\"Brilliant thinking is rare, but courage is in even shorter supply than genius\" sits in the book's epigraph and does the work of a thesis. Thiel's argument is not that first-rate ideas are scarce — he thinks ideas are available to anyone willing to look — but that the bottleneck is willingness to hold an unpopular position long enough for it to be useful. A secret, in his sense, is a true belief that most people do not hold yet; the difficulty is not finding one but being willing to look foolish while you have it.",
        ],
      },
      {
        heading: "Definite optimism, and the risk of the book",
        paragraphs: [
          "The constructive half of the position is definite optimism: the belief that the future is a specific set of conditions to be shaped, and that expecting the specific future and acting on it is different from both passive acceptance and vague hope. It pairs with the claim that a startup is a group of people convinced of a plan for a different future, which makes the commitment — not the plan — the real asset.",
          "It is fair to say the book is a founder's manual written by a founder, and that its confidence reads differently from a bunker's. The monopoly argument has been applied since to businesses that are hard to call monopolies; the secrets language has been used to recruit people into certainty. Read as an argument about incentives and attention rather than a prediction, the book is sharp. Read as a description of how to succeed, it is one strategy among several, from a position no reader occupies.",
        ],
      },
    ],
    faq: [
      {
        question: "What is Peter Thiel's business philosophy?",
        answer:
          "That competition destroys the value a company creates by forcing it to compete on price, so the goal is to escape into a position with no close substitute, and that the way there is a true belief few people hold yet — a secret.",
      },
      {
        question: "Where is 'Competition is for losers' from?",
        answer:
          "Zero to One (2014), Thiel's book with Blake Masters. The full argument runs over several pages in chapter 1; the one-line version is a compression of it rather than the whole claim.",
      },
      {
        question: "Did Peter Thiel write these quotes?",
        answer:
          "The five lines recorded here are from Zero to One, chapter 1 and its epigraph. Many other attributions circulating under his name come from interviews and lectures and are not from the book.",
      },
    ],
    related: [
      { href: "/quotes/q0693", label: "Monopoly is the condition of every successful business" },
      { href: "/quotes/q0694", label: "All happy companies are different" },
      { href: "/quotes/q0695", label: "The most contrarian thing of all" },
      { href: "/philosophy-of-ai", label: "Philosophy and artificial intelligence" },
      { href: "/what-is-ethics", label: "What is ethics?" },
      { href: "/quote-source", label: "Who said this quote?" },
    ],
    thinkers: ["Peter Thiel", "Nietzsche", "John Stuart Mill"],
    updated: "2026-10-05",
    furtherReading: [
      "Peter Thiel and Blake Masters, Zero to One: Notes on Startups, or How to Build the Future (2014)",
      "Jimmy Soni, The Founders (2007)",
    ],
  },
  {
    slug: "nietzsche-moral-philosophy-quotes",
    title: "Nietzsche on Moral Philosophy",
    /**
     * "Nietzsche moral philosophy quotes" is the head term for his ethics, and the
     * hard version of the query — the one where a reader wants the actual claim,
     * not the slogan. The page leads with the genealogical method and treats the
     * famous slogans as its results.
     */
    description:
      "Nietzsche on moral philosophy: the genealogy of morals, the will to power, master and slave morality, and what he thought was wrong with Christian values — with sourced quotations.",
    eyebrow: "A thinker's position",
    intro:
      "Nietzsche's ethics is not a list of duties. It is an argument about where duties come from and what they cost the people who obey them.",
    answer:
      "Nietzsche's moral philosophy holds that moral systems are not discovered but produced — by communities, in response to pressures Nietzsche reconstructs from history. His method is genealogy: read a value back through the circumstances that made it, and ask what those circumstances were doing to the people who held it. The famous conclusions — that guilt-based morality weakened people, that ressentiment inverted values, that self-overcoming outranks self-sacrifice — are outputs of that method, not its premises.",
    sections: [
      {
        heading: "Geneology: reading a value back to its maker",
        paragraphs: [
          "The *Genealogy of Morality* carries the subtitle *An Adventure in the Origin of Morals*, and the subtitle is the method. Nietzsche takes a value in current use and traces the conditions under which it became compulsory. Guilt, in his account, is not the oldest moral fact; it is a device that emerged when certain communities needed to make certain instincts feel like debts rather than choices.",
          "This is not a claim that morality is fake. It is a claim that any moral vocabulary carries the pressures of the society that produced it, and that those pressures are invisible from inside the vocabulary. The value of the method is that it applies to Nietzsche's own preferences as well: the will to power, presented as a life-affirming ideal, is exposed to the same question as any Christian virtue.",
        ],
      },
      {
        heading: "Ressentiment and the inversion of values",
        paragraphs: [
          "The second *Genealogy* is directed at what he calls ressentiment: a structure in which the frustrated, unable to act, take satisfaction in the notion that the people who act deserve what they get. Nietzsche's charge is not that the resentful are wrong about particular facts but that the sentiment reverses the usual direction of evaluation — strength is called cruelty, and the people who cannot endure it are credited with having exposed it.",
          "This is the part of his moral philosophy most often simplified into a sneer, and the simplification loses the claim. If values are produced rather than discovered, then a value's authority is not self-evident; the guilt that the *Genealogy* traces is one form such authority takes. The critique of ressentiment is therefore a claim about how moral reasoning goes wrong, not a sneer at those who feel it.",
        ],
      },
      {
        heading: "Self-overcoming, and what the archive's lines actually say",
        paragraphs: [
          "\"What does not kill me makes me stronger\" is from *Twilight of the Idols*, not the *Genealogy*, and the original German carries a reference to a literary figure — the military school of life — that the compressed English usually drops. The archive records the German and the Kaufmann rendering together, because a reader who sees only the compressed version is likely to take it as a slogan about toughness rather than a claim about how suffering gets interpreted.",
          "\"How one becomes what one is\" is the subtitle of *Ecce Homo*, and it comes from Pindar via Nietzsche. It is the positive counterpart to the critique: if the guilt-based morality asks what you owe, this asks what you are in the process of becoming, and treats the self as something under formation rather than a fixed position that has moral duties attached to it.",
          "\"Amor fati: let that be my love from now on!\" is the one place where Nietzsche's positive formula is stated flatly. The archive notes that the phrase reads as an endorsement of what happens, and that reading it as fatalism misses the context — the phrase sits next to \"a decisive and beautiful affirmation\", and it is the acceptance of the interpretation of a life, not the worship of whatever happened in it.",
        ],
      },
      {
        heading: "Why this is hard to teach as a rule",
        paragraphs: [
          "Nietzsche's own objection to being turned into a doctrine is worth taking seriously, because it is what makes his position awkward for guides. \"Man is something that shall be overcome\" names a task rather than an ideal, and a task cannot be discharged once and then written down as a rule. The *Genealogy*'s method applied to a maxim like this one finds that the maxim was produced by a particular culture in a particular mood, which is precisely the test Nietzsche demands of every other value.",
          "The practical reading is not a list of new commandments. It is the practice of asking, of a rule you follow, what it asks of you and whom that cost. That is the question he thinks every inherited value should be asked, and asking it is the durable part of his moral philosophy even when the answers he gave are ones you will reject.",
        ],
      },
    ],
    faq: [
      {
        question: "What is Nietzsche's moral philosophy?",
        answer:
          "That moral systems are produced by communities under pressure rather than discovered, and that the productive way to examine a value is genealogical: trace it back to the conditions that made it compulsory.",
      },
      {
        question: "Is 'what does not kill me makes me stronger' Nietzsche?",
        answer:
          "Yes, from Twilight of the Idols, Maxims and Arrows section 8. The German adds a reference to the military school of life that compressed English versions drop, which changes how the line reads.",
      },
      {
        question: "What does Nietzsche mean by master and slave morality?",
        answer:
          "A contrast between two ways of forming values: one that ascends through strength and self-mastery, and one that arises from the frustrated, who invert evaluation rather than act. He wrote it as a historical and psychological type, not as a claim about people.",
      },
    ],
    related: [
      { href: "/quotes/q0070", label: "What does not kill me makes me stronger" },
      { href: "/quotes/q0072", label: "How one becomes what one is" },
      { href: "/quotes/q0071", label: "Amor fati" },
      { href: "/what-is-ethics", label: "What is ethics?" },
      { href: "/themes/self", label: "Philosophy quotes about self" },
      { href: "/quote-source", label: "Who said this quote?" },
    ],
    thinkers: ["Friedrich Nietzsche", "Socrates", "Simone de Beauvoir"],
    updated: "2026-10-05",
    furtherReading: [
      "Friedrich Nietzsche, Zur Genealogie der Moral (1887)",
      "Friedrich Nietzsche, Götzendämmerung (1889)",
      "Friedrich Nietzsche, Ecce Homo (1908)",
    ],
  },
  {
    slug: "seneca-the-younger-philosophy-quotes",
    title: "Seneca the Younger on Philosophy",
    /**
     * The name is qualified with "the Younger" because the archive holds a
     * Seneca page and the distinction is the first thing a reader has to get
     * right. The page covers the letters, the natural questions, and the
     * practical ethics, with the Latin preserved on the passages that are
     * routinely mistranslated.
     */
    description:
      "Seneca the Younger's philosophy: his letters on time, fear, and death, his natural questions, and his practical ethics — with sourced Latin and English quotations.",
    eyebrow: "A thinker's position",
    intro:
      "Seneca wrote about how to live rather than how to know, and he wrote it in a form that survives: letters, meant to be read at intervals.",
    answer:
      "Seneca the Younger's philosophy is Stoic ethics turned towards circumstance: the fixed duties of the school Stoics are kept intact, and the work is in applying them to fear, poverty, loss, and death. His letters ask what a person is actually afraid of and then subtract the fear from its object; they treat time as the only possession that cannot be seized; and they insist that consolation and argument are the same work. The natural questions extend the method from the individual to the cosmos, asking whether the heavens are material and whether the mind is a particle of fire.",
    sections: [
      {
        heading: "Letters: a philosophy written to be re-read",
        paragraphs: [
          "The letters to Lucilius are the form and the method at once. Seneca addresses one reader in the second person, does not pretend the letter concludes the subject, and revisits the same problems — fear, wealth, friendship, death — as circumstances change. A letter about dying when you are busy is not a meditation on death; it is a correction of a false estimate about what will still matter in an hour.",
          "\"All else belongs to others; time alone is ours\" is the sentence the archive records with its Latin, *tempus est unum quod suum est*, because the popular versions translate it as a claim about a limited resource rather than about a category that is not subject to anyone else. That difference carries the whole argument: the objection to hoarding money or praise is not that they are worthless, it is that they never were yours to keep.",
        ],
      },
      {
        heading: "Fear, and the arithmetic of the worst case",
        paragraphs: [
          "\"There are more things that frighten us than crush us, and we suffer more of the imagination than the reality\" is Seneca's most quoted line and his most systematically argued. The *Natural Questions* and the letters share a procedure: name what is feared, list what it actually does, and then count the difference between the two. He is not claiming fear is foolish in general; he is claiming the fear is usually larger than the thing.",
          "\"It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult\" is the same argument about action rather than feeling, and the archive notes that the compressed English and the standard translations differ slightly in the order of the clauses. The sense is that the perceived difficulty is frequently the difficulty of starting, and that starting is what the difficulty is borrowed from.",
        ],
      },
      {
        heading: "The natural questions: from the person to the cosmos",
        paragraphs: [
          "The *Natural Questions* asks whether the stars are fires, whether the earth floats in air, whether the mind is a slender flame, and whether the sea is made of many waters. These are not exercises in scepticism for their own sake; each question is a way of asking whether the world is governed by reason, and the answers are graded rather than binary. Seneca accepts what can be demonstrated, concedes what is beyond demonstration, and locates the difference between the two.",
          "\"There is no easy way from the earth to the stars\" is the line that names the difficulty properly. It is not a claim that effort is pointless; it is a claim that the mind cannot be transported upward and must climb, which is why the effort is real and why the ascent is available to anyone. The metaphor also keeps the argument honest about the difference between a person and a place.",
        ],
      },
      {
        heading: "Practical ethics and the problem of wealth",
        paragraphs: [
          "Seneca is the Stoic who has to answer the charge against his own life, having spent a fortune and been adviser to a court. His position is not that possessions are irrelevant but that the person who makes his peace with having them does not become a different person on losing them. The letters on poverty and on power are written by someone who is unusually qualified to be suspected of hypocrisy, and they are where his ethics is least abstract.",
          "\"Leisure without study is death — a tomb for a living man\" is the compressed form of a line he used of a mind with nothing to occupy it. Read alongside the letters on time, it makes a consistent claim: the danger is not stress but the absence of anything that requires a judgement. That is closer to what the letters do than to a rule about scheduling, and it is the reason Seneca's method has outlived the circumstances of his century.",
        ],
      },
    ],
    faq: [
      {
        question: "Who was Seneca the Younger?",
        answer:
          "Lucius Annaeus Seneca (c. 4 BCE – 65 CE), Stoic philosopher, dramatist, and adviser to the emperor Nero. The Younger distinguishes him from Seneca the Elder, his father and a rhetorician.",
      },
      {
        question: "What is Seneca's philosophy?",
        answer:
          "Stoic ethics applied to circumstance: fixed duties kept in full, and the work done in applying them to fear, poverty, loss, and death. His letters are the medium, and the natural questions extend the method to the physical world.",
      },
      {
        question: "What did Seneca say about time?",
        answer:
          "'All else belongs to others; time alone is ours' — tempus est unum quod suum est, in a letter to Lucilius. The point is not that time is short but that it is the one category not subject to anyone else's control.",
      },
    ],
    related: [
      { href: "/quotes/q0030", label: "All else belongs to others; time alone is ours" },
      { href: "/quotes/q0032", label: "There is no easy way from the earth to the stars" },
      { href: "/quotes/q0027", label: "It is not because things are difficult" },
      { href: "/what-is-ethics", label: "What is ethics?" },
      { href: "/philosophy-of-keep-things-simple", label: "The philosophy of keeping things simple" },
      { href: "/quote-source", label: "Who said this quote?" },
    ],
    thinkers: ["Seneca", "Epictetus", "Marcus Aurelius"],
    updated: "2026-10-05",
    furtherReading: [
      "Seneca, Letters to Lucilius",
      "Seneca, Natural Questions (Naturales Quaestiones)",
      "Seneca, On the Shortness of Life",
    ],
  },
];

export const guideBySlug = new Map(guides.map((guide) => [guide.slug, guide]));
