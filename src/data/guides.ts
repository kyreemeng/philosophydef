export type Guide = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  answer: string;
  sections: { heading: string; paragraphs: string[] }[];
  faq?: { question: string; answer: string }[];
  related: { href: string; label: string }[];
  thinkers: string[];
};

export const guides: Guide[] = [
  {
    slug: "what-is-philosophy",
    title: "What Is Philosophy?",
    description:
      "What is philosophy? A clear introduction to philosophical questions, methods, major branches, and why philosophy still matters in 2026.",
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
          "In academic settings, philosophy also means a set of specialties with journals, methods, and historical canons. In everyday life, the same habits of clarity and criticism help people revise beliefs without mistaking confidence for evidence.",
        ],
      },
      {
        heading: "The main branches of philosophy",
        paragraphs: [
          "Metaphysics asks what exists and what reality is like. Epistemology asks what knowledge is and how belief can be justified. Ethics asks how we ought to act and what makes a life good. Logic studies good reasoning. Political philosophy asks how power, rights, and institutions should be arranged.",
          "Other branches focus on particular subjects, including language, science, education, history, art, religion, law, technology, and artificial intelligence. A useful map is not a prison: many problems cross branch boundaries.",
          "Comparative philosophy studies these questions across Greek, Chinese, Indian, African, Islamic, and other traditions without treating one timeline as the only center.",
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
      "Philosophy of AI in 2026: intelligence vs consciousness, knowledge and explanation, ethics, responsibility, and whether AI systems could be welfare subjects.",
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
          "Recent work in AI & Society and related venues argues that generative models can be cognitively significant contributors to knowledge production without meeting conditions for full cognitive subjecthood—especially where robust intentionality, metacognitive self-representation, and consciousness-related indicators remain unestablished.",
          "The question matters for how we describe systems and what moral status, if any, they could have. It also clarifies the limits of comparisons between human and machine cognition.",
        ],
      },
      {
        heading: "Knowledge, evidence, and explanation",
        paragraphs: [
          "AI systems can produce predictions, classifications, and language, but users still need to ask what data supports an output, how reliable it is in a context, and when a human explanation is required.",
          "Epistemic questions now include whether models “know,” whether they can explain, and how they change norms of inquiry. A useful AI policy distinguishes assistance from authority. High-stakes decisions in health, employment, education, and law need clear accountability and routes to challenge error.",
        ],
      },
      {
        heading: "Ethics, welfare, and governance",
        paragraphs: [
          "Ethical questions include fairness, privacy, manipulation, surveillance, labor, safety, and the distribution of benefits and risks. No single principle resolves all of them; trade-offs should be explicit and open to public scrutiny.",
          "A newer debate asks whether advanced systems could become welfare subjects—entities whose interests matter morally—if they developed consciousness, affective valence, or related capacities. Most current scholarship does not treat today’s systems as conscious, but precautionary frameworks are being proposed for uncertainty rather than premature personhood claims.",
          "Responsible AI requires evaluation, documentation, human oversight proportionate to risk, and correction when harm occurs. Values statements are not enough without institutional design.",
        ],
      },
      {
        heading: "What to read next in this archive",
        paragraphs: [
          "Passages on mind, responsibility, language, and knowledge provide classical pressure tests for modern AI claims: What is understanding? Who is accountable? What counts as a reason?",
          "Use the related themes and thinkers below as compact entry points, then return to primary philosophical texts and contemporary technical documentation for deeper study.",
        ],
      },
    ],
    faq: [
      {
        question: "What is the philosophy of AI?",
        answer:
          "It is the philosophical study of artificial intelligence—covering mind, knowledge, ethics, politics, and the concepts we use to describe machine behavior.",
      },
      {
        question: "Can AI be conscious?",
        answer:
          "That remains unsettled. Most researchers treat current systems as non-conscious while developing indicator frameworks and precautionary approaches for future uncertainty.",
      },
      {
        question: "Who is responsible for AI decisions?",
        answer:
          "Responsibility typically remains with designers, deployers, and institutions that choose to automate. Philosophical analysis clarifies roles; law and policy assign duties.",
      },
    ],
    related: [
      { href: "/themes/mind", label: "Quotes on mind" },
      { href: "/themes/responsibility", label: "Quotes on responsibility" },
      { href: "/philosophy-of-science", label: "Philosophy of science" },
      { href: "/philosophy-of-language", label: "Philosophy of language" },
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
      { href: "/what-is-epistemology", label: "What is epistemology?" },
      { href: "/what-is-metaphysics", label: "What is metaphysics?" },
      { href: "/what-is-ethics", label: "What is ethics?" },
      { href: "/what-is-logic", label: "What is logic?" },
    ],
    thinkers: ["Aristotle", "Immanuel Kant", "Confucius"],
  },
  {
    slug: "what-is-epistemology",
    title: "What Is Epistemology?",
    description:
      "Epistemology explained: the philosophy of knowledge, justification, belief, evidence, and skepticism.",
    eyebrow: "Theory of knowledge",
    intro:
      "Epistemology is the branch of philosophy that studies knowledge—what it is, how we get it, and how belief can be justified.",
    answer:
      "From Plato to contemporary analytic philosophy, epistemology asks how knowledge differs from mere opinion, what role perception and reason play, and how far skepticism should go.",
    sections: [
      {
        heading: "Knowledge and justification",
        paragraphs: [
          "A classic starting point treats knowledge as justified true belief, refined after Gettier-style counterexamples. Debates continue about reliability, evidence, understanding, and intellectual virtues.",
          "Sources of justification include perception, memory, introspection, reason, and testimony—each with characteristic strengths and failure modes.",
        ],
      },
      {
        heading: "Skepticism and response",
        paragraphs: [
          "Skeptics ask whether we can know the external world, other minds, or the future. Responses range from foundationalism and coherentism to contextualism and pragmatist accounts of inquiry.",
        ],
      },
      {
        heading: "Why epistemology matters",
        paragraphs: [
          "Questions about expertise, misinformation, scientific evidence, and AI outputs are epistemological before they are merely technical. Clear standards of evidence improve public and personal judgment.",
        ],
      },
    ],
    faq: [
      {
        question: "What is epistemology in simple terms?",
        answer: "It is the study of knowledge and justified belief—how we know what we know.",
      },
      {
        question: "How is epistemology different from psychology?",
        answer:
          "Psychology describes how cognition works; epistemology evaluates norms of good believing and knowing.",
      },
      {
        question: "What are examples of epistemological questions?",
        answer:
          "Can perception justify belief? What makes testimony trustworthy? Does science give knowledge or only models?",
      },
    ],
    related: [
      { href: "/themes/knowledge", label: "Quotes on knowledge" },
      { href: "/philosophy-of-science", label: "Philosophy of science" },
      { href: "/branches-of-philosophy", label: "Branches of philosophy" },
    ],
    thinkers: ["Plato", "René Descartes", "David Hume"],
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
    title: "Plato vs Aristotle",
    description:
      "Plato vs Aristotle: forms vs substances, politics, ethics, and how their disagreement shaped Western philosophy.",
    eyebrow: "Comparison",
    intro:
      "Plato and Aristotle share a teacher–student link and a vast influence, yet they diverge on metaphysics, ethics, and the best political order.",
    answer:
      "Broadly: Plato emphasizes transcendent forms and a philosopher-led city in the Republic; Aristotle emphasizes substances in nature, empirical study, and virtue as a mean toward flourishing in civic life.",
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
];

export const guideBySlug = new Map(guides.map((guide) => [guide.slug, guide]));
