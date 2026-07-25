export type Guide = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  answer: string;
  sections: { heading: string; paragraphs: string[] }[];
  related: { href: string; label: string }[];
  thinkers: string[];
};

export const guides: Guide[] = [
  {
    slug: "what-is-philosophy",
    title: "What Is Philosophy?",
    description:
      "What is philosophy? A clear introduction to philosophical questions, methods, major branches, and why philosophy still matters.",
    eyebrow: "A first question",
    intro:
      "Philosophy is the disciplined practice of asking fundamental questions about reality, knowledge, value, reason, mind, and how to live.",
    answer:
      "Rather than collecting facts alone, philosophy clarifies concepts, tests reasons, notices assumptions, and compares rival answers. It begins where an important question remains open: What is real? What can I know? What makes an action right? What kind of life is worth living?",
    sections: [
      {
        heading: "What philosophers do",
        paragraphs: [
          "Philosophers make arguments. They state a claim, give reasons for it, consider objections, and revise the claim when the reasons do not hold. This is why philosophy is more than having an opinion: an opinion becomes philosophical when it can be explained and examined.",
          "The work can be abstract, but its questions are ordinary. A decision about responsibility, a disagreement about truth, or a fear about death often contains a philosophical problem before anyone gives it that name.",
        ],
      },
      {
        heading: "The main branches of philosophy",
        paragraphs: [
          "Metaphysics asks what exists and what reality is like. Epistemology asks what knowledge is and how belief can be justified. Ethics asks how we ought to act and what makes a life good. Logic studies good reasoning. Political philosophy asks how power, rights, and institutions should be arranged.",
          "Other branches focus on particular subjects, including language, science, education, history, art, religion, law, technology, and artificial intelligence.",
        ],
      },
      {
        heading: "Why philosophy matters",
        paragraphs: [
          "Philosophy does not replace science, history, or personal experience. It asks questions those fields may presuppose: what counts as evidence, what explanation means, and what values should guide an application of knowledge.",
          "Its practical value is intellectual responsibility. It helps us distinguish a strong reason from a persuasive slogan, recognize uncertainty, and act with more deliberate judgment.",
        ],
      },
    ],
    related: [
      { href: "/philosophy-definition", label: "Philosophy definition" },
      { href: "/philosophy-meaning", label: "Philosophy meaning" },
      { href: "/themes", label: "Browse philosophical themes" },
      { href: "/quotes", label: "Read the quotation archive" },
    ],
    thinkers: ["Socrates", "Plato", "Aristotle"],
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
    title: "Philosophy of AI",
    description:
      "An introduction to the philosophy of AI: intelligence, consciousness, agency, bias, responsibility, and the ethics of artificial intelligence.",
    eyebrow: "Technology and thought",
    intro:
      "The philosophy of AI examines what artificial intelligence is, what it can know or do, and how people should design, use, and govern it.",
    answer:
      "It joins philosophy of mind, ethics, epistemology, and political philosophy. Its central questions include whether machines can understand, who is responsible for automated decisions, and which human values should constrain AI systems.",
    sections: [
      {
        heading: "Intelligence, understanding, and consciousness",
        paragraphs: [
          "A system can perform a task intelligently without settling whether it understands the task. Philosophers distinguish behavior, representation, reasoning, experience, and consciousness because success on one dimension does not automatically establish the others.",
          "The question matters for how we describe systems and what moral status, if any, they could have. It also clarifies the limits of comparisons between human and machine cognition.",
        ],
      },
      {
        heading: "Knowledge, evidence, and explanation",
        paragraphs: [
          "AI systems can produce predictions, classifications, and language, but users still need to ask what data supports an output, how reliable it is in a context, and when a human explanation is required.",
          "A useful AI policy distinguishes assistance from authority. High-stakes decisions in areas such as health, employment, education, and law need clear accountability and opportunities to challenge an error.",
        ],
      },
      {
        heading: "Ethics and governance",
        paragraphs: [
          "Ethical questions include fairness, privacy, manipulation, surveillance, labor, safety, and the distribution of benefits and risks. No single principle resolves all of them; trade-offs should be explicit and open to public scrutiny.",
          "Responsible AI requires more than a statement of values. It requires evaluation, documentation, human oversight proportionate to risk, and routes for correction when harm occurs.",
        ],
      },
    ],
    related: [
      { href: "/themes/mind", label: "Quotes on mind" },
      { href: "/themes/responsibility", label: "Quotes on responsibility" },
      { href: "/philosophy-of-science", label: "Philosophy of science" },
    ],
    thinkers: ["Alan Turing", "Ludwig Wittgenstein", "Hannah Arendt"],
  },
  {
    slug: "history-of-philosophy",
    title: "History of Philosophy",
    description:
      "A concise history of philosophy, from ancient traditions to contemporary thought, with major periods, questions, and global traditions.",
    eyebrow: "A living tradition",
    intro:
      "The history of philosophy is the history of changing answers to enduring questions about nature, knowledge, ethics, politics, and human flourishing.",
    answer:
      "It is not a single line of progress or a list of isolated Western thinkers. Philosophical traditions developed across ancient Greece, China, India, Africa, the Islamic world, Europe, and the Americas, often in dialogue with religion, science, law, and politics.",
    sections: [
      {
        heading: "Ancient foundations",
        paragraphs: [
          "In Greece, figures such as Socrates, Plato, and Aristotle developed influential approaches to argument, virtue, knowledge, and nature. In China, Confucian and Daoist thinkers explored cultivation, social order, spontaneity, and the Way.",
          "Indian traditions developed sophisticated debates about perception, selfhood, liberation, language, and logic. These traditions should be studied on their own terms rather than treated as background to a single canon.",
        ],
      },
      {
        heading: "Medieval and early modern debates",
        paragraphs: [
          "Medieval Jewish, Christian, and Islamic philosophers connected Greek thought with questions of revelation, law, and divine attributes. Philosophers including Ibn Sina, Ibn Rushd, Maimonides, and Aquinas shaped long debates about reason and faith.",
          "Early modern philosophy responded to scientific change and political upheaval. Rationalists, empiricists, and later Kant reconsidered mind, matter, causation, freedom, and the grounds of knowledge.",
        ],
      },
      {
        heading: "Modern and contemporary philosophy",
        paragraphs: [
          "Nineteenth- and twentieth-century thought expanded debates about history, power, language, existence, colonialism, gender, race, and social transformation. Analytic and continental approaches developed different styles, often around overlapping problems.",
          "Contemporary philosophy continues this work while engaging technology, climate, disability, bioethics, global justice, and the consequences of AI.",
        ],
      },
    ],
    related: [
      { href: "/philosophy-of-history", label: "Philosophy of history" },
      { href: "/chinese-philosophy", label: "Chinese philosophy" },
      { href: "/thinkers", label: "Browse thinkers" },
    ],
    thinkers: ["Plato", "Confucius", "Immanuel Kant"],
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
      "An introduction to Chinese philosophy, including Confucianism, Daoism, Mohism, Legalism, and Buddhist traditions of thought.",
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
          "Chinese philosophy continues to shape ethical, political, educational, and ecological conversations worldwide.",
        ],
      },
    ],
    related: [
      { href: "/thinkers/confucius", label: "Confucius quotations" },
      { href: "/thinkers/laozi", label: "Laozi quotations" },
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
    ],
    thinkers: ["Socrates", "John Dewey", "Hannah Arendt"],
  },
];

export const guideBySlug = new Map(guides.map((guide) => [guide.slug, guide]));
