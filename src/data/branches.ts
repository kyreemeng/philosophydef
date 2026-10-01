/**
 * The branches of philosophy, as a first-class site section.
 *
 * Google Trends shows steady-to-rising demand across the branch queries —
 * “philosophy of science” (27), “political philosophy” (25), “philosophy of
 * education” (24), “philosophy of law” (21), “philosophy of language” (14) —
 * and the site's answer so far was scattered: three what-is guides, two
 * philosophy-of guides, and theme pages that happen to sit inside a branch.
 *
 * A branch page is a reference document, not a quote list, so every entry
 * carries hand-written editorial prose: a definition, an overview of how the
 * problems are actually argued, and the live questions. The corpus provides
 * the rest at build time — the themes that file passages under the branch,
 * the thinkers who appear there most, and the glossary terms the branch
 * trades on — so the pages are the Concept → Thinker → Quote chain the site
 * is built on, entered from the discipline's own map.
 */

export type Branch = {
  slug: string;
  name: string;
  /** The canonical theme labels whose passages belong to this branch. */
  themes: string[];
  title: string;
  description: string;
  eyebrow: string;
  /** The short definition under the H1. */
  intro: string;
  /** Hand-written overview: what the branch argues about and how. */
  overview: string[];
  /** The questions a newcomer should be able to state after reading. */
  keyQuestions: string[];
  /** Guide slugs that cover this branch in depth, when they exist. */
  guides: string[];
  /** Date the editorial text was last substantively revised. */
  updated: string;
};

export const branches: Branch[] = [
  {
    slug: "metaphysics",
    name: "Metaphysics",
    themes: ["Existence", "Being", "Time", "Eternity", "Soul", "God", "Nature"],
    title: "Metaphysics: What Exists, What Is Real | Key Thinkers & Questions",
    description:
      "Metaphysics explained: what exists, what reality is made of, time, identity, and free will—its central questions and arguments, with sourced passages from the philosophers who worked on them.",
    eyebrow: "Branch of philosophy",
    intro:
      "Metaphysics asks what there is and what it is like at the most general level: what exists, what a thing's identity consists in, whether time and change are real, and where the limits of explanation lie.",
    overview: [
      "The name began as an accident of library shelving — the books “after the Physics” (ta meta ta physika) — and hardened into the discipline's deepest question: what must be true of reality for everything else to be true of it. Aristotle treated it as the study of being qua being; Kant argued that a great deal of traditional metaphysics overreaches what human knowledge can settle; the twentieth century split between those who wanted to dissolve the questions and those who wanted better tools for answering them.",
      "Its standing problems are concrete even when the vocabulary is abstract. What makes a person at time t the same person as at time t′? Do past and future exist the way the present does? Is every event determined by prior events — and if so, what is left of choice? Is there a necessary being, or a first cause? Each question has live defenders on more than one side, which is why the passages quoted here are arguments and not slogans.",
      "Metaphysics overlaps every other branch at its edges: ethics needs to know whether persons are the kind of thing that can be wronged; philosophy of mind needs to know what a mental state would have to be; philosophy of religion asks whether the existence of God can be established by argument. The branch pages on this site cross-link accordingly.",
    ],
    keyQuestions: [
      "What exists, and what kinds of things are there?",
      "What makes something the same thing over time?",
      "Are time and change real, or ways of perceiving?",
      "Is everything determined — and what would free will require?",
      "Why is there anything at all?",
    ],
    guides: ["what-is-metaphysics"],
    updated: "2026-10-01",
  },
  {
    slug: "epistemology",
    name: "Epistemology",
    themes: ["Knowledge", "Truth", "Reason", "Understanding", "Certainty", "Method"],
    title: "Epistemology: Knowledge, Truth & Justification | Thinkers & Questions",
    description:
      "Epistemology explained: what knowledge is, when belief is justified, what scepticism can and cannot show, and the questions that define the theory of knowledge—with sourced passages.",
    eyebrow: "Branch of philosophy",
    intro:
      "Epistemology is the theory of knowledge: what it takes to know something, when a belief is justified, what separates knowledge from lucky guessing, and how far doubt can go.",
    overview: [
      "The classical analysis took knowledge to be justified true belief, and most of the field's history is the story of that definition under pressure. Gettier cases showed belief can be true and justified and still not be knowledge; sceptics argued that justification never reaches the strength the definition demands; Descartes made the problem personal by doubting everything that could be doubted and keeping only what survived.",
      "Modern epistemology works on three fronts. The structure question: does knowledge rest on foundations, or on mutual support, or on neither? The sceptical question: what, exactly, do the dream, the demon, and the brain-in-a-vat show — and what do they not? And the social question, urgent in an age of mediated information: when is it rational to take someone's word, and what makes a source worth trusting? The archive's whole sourcing method is an applied answer to that last question.",
      "The branch connects everywhere: science needs an account of evidence, ethics needs to know whether moral claims can be known, philosophy of language asks how words can refer at all, and philosophy of AI now asks whether a system's output can be knowledge for anyone at all.",
    ],
    keyQuestions: [
      "What is the difference between believing something and knowing it?",
      "When is a belief justified, and justification by what?",
      "Can radical scepticism be answered, or only lived with?",
      "When is it rational to rely on testimony and authority?",
      "Can we know our own minds better than anything else?",
    ],
    guides: ["what-is-epistemology"],
    updated: "2026-10-01",
  },
  {
    slug: "ethics",
    name: "Ethics",
    themes: ["Ethics", "Morality", "Virtue", "Justice", "Good", "Character", "Friendship"],
    title: "Ethics: Moral Philosophy, Virtue & the Good | Thinkers & Questions",
    description:
      "Ethics explained: what makes actions right, what a good life is, virtue and duty and consequence, and the questions of moral philosophy—with sourced passages from Plato to Murdoch.",
    eyebrow: "Branch of philosophy",
    intro:
      "Ethics asks how one should live: what makes an action right, what makes a life good, what we owe to others, and which of our responses — to pleasure, to duty, to character — should govern.",
    overview: [
      "The field's three great programmes answer the first question differently. Consequentialism holds that outcomes decide: the right act produces the best states of affairs. Deontology holds that some duties bind regardless of outcome — Kant's formulation makes them follow from respect for persons as ends. Virtue ethics, recovering Aristotle, starts from character: the right act is what the practically wise person would do, and the good life is the flourishing (eudaimonia) of a cultivated character.",
      "The programmes disagree less often than their textbooks imply, but they disagree at the cases that matter: whether consequences can justify a lie, whether duty can survive a catastrophe, whether a virtuous person would even face the dilemma in the same terms. Meta-ethics sits underneath asking what moral claims are — discoveries, constructions, expressions of attitude — and whether moral knowledge is possible at all.",
      "Ethics is also where philosophy meets ordinary life most directly, which is why its passages are the most quoted and the most misquoted on this site. A maxim like “moderation in all things” arrives detached from the argument that qualified it; the archive records the argument.",
    ],
    keyQuestions: [
      "What makes an action right: outcome, duty, or character?",
      "Is there one good life for humans, or many?",
      "Do moral truths exist, or do we project them?",
      "What do we owe to strangers, and why?",
      "Can wrongdoing harm the wrongdoer — and how?",
    ],
    guides: ["what-is-ethics"],
    updated: "2026-10-01",
  },
  {
    slug: "logic",
    name: "Logic",
    themes: ["Reason", "Method", "Judgment", "Inquiry", "Critique"],
    title: "Logic in Philosophy: Valid Reasoning & Its Limits | Thinkers",
    description:
      "Logic explained: validity, soundness, deduction and induction, the fallacies arguments actually commit, and why the study of good reasoning anchors every other branch—with sourced passages.",
    eyebrow: "Branch of philosophy",
    intro:
      "Logic is the study of good reasoning: which forms of argument preserve truth, why others fail, and how the difference can be made explicit enough to check.",
    overview: [
      "Aristotle's syllogistic was the first system: if the premises are true and the form is valid, the conclusion cannot be false. That achievement set the discipline's ideal — arguments you can check by shape rather than by charity — and it took until Frege and Russell, in the late nineteenth century, to build the quantificational logic that could actually express mathematics. The twentieth century added modal, temporal, and probabilistic logics, each for questions the classical systems could not state.",
      "Philosophy's interest in logic is not only formal. Deduction preserves truth but never extends it; induction extends it but never secures it, which is Hume's problem of induction and still the deepest unpaved road in the field. Between the two sit the informal failings — equivocation, circularity, false dilemma — that argument in practice actually dies of, and that a reader needs to recognise in the wild.",
      "Logic anchors the other branches because it is where their disputes get decided: a metaphysical claim, an ethical argument, or an epistemological proof is only as good as the reasoning that carries it. The archive's passages quote the reasoning, not just the conclusions, wherever the corpus preserves it.",
    ],
    keyQuestions: [
      "What makes an argument valid, and sound?",
      "Can induction be justified without circularity?",
      "Where does formal logic end and informal reasoning begin?",
      "Which fallacies do good thinkers actually commit?",
      "Are there truths logic cannot express?",
    ],
    guides: ["what-is-logic"],
    updated: "2026-10-01",
  },
  {
    slug: "political-philosophy",
    name: "Political philosophy",
    themes: ["Politics", "Society", "Power", "Freedom", "Equality", "Liberty", "Community"],
    title: "Political Philosophy: Justice, Power & the State | Thinkers & Quotes",
    description:
      "Political philosophy explained: justice, liberty, authority, and the legitimacy of the state—from Plato's city and Hobbes's Leviathan to Rawls—with sourced passages from each argument.",
    eyebrow: "Branch of philosophy",
    intro:
      "Political philosophy asks what makes power legitimate: why anyone should obey a state, what justice requires of institutions, and how liberty, equality, and order can be reconciled when they collide.",
    overview: [
      "The classic problem is legitimacy. Plato's Republic made justice the order of a city and a soul; Hobbes' Leviathan (1651) began from a state of nature no rational person could endure and derived absolute authority as the price of peace; Locke grounded government in consent and a right of rebellion; Rousseau relocated sovereignty in the general will. Each answer still has descendants — the arguments on this site are those arguments, quoted where they were made.",
      "The modern debate reorganised around distribution and rights. Mill argued liberty except to prevent harm; Marx asked whose property the state protects; Rawls' A Theory of Justice (1971) revived the social contract as a thought experiment behind a veil of ignorance, and Nozick answered with the minimal state. Feminist, Africana, and postcolonial philosophy then pressed the question every contract theory had deferred: consented to by whom, and at whose exclusion?",
      "Political philosophy differs from political argument by holding its own categories open: what a right would have to be, when obedience is owed, whether equality of what — welfare, opportunity, capability — is the fair measure. The passages here show the reasoning, not only the slogans.",
    ],
    keyQuestions: [
      "What makes a state legitimate — and when is disobedience justified?",
      "What does justice demand of institutions: liberty, equality, or both?",
      "What may a majority do to a minority?",
      "Is property a natural right or a convention?",
      "Can power be separated from domination?",
    ],
    guides: [],
    updated: "2026-10-01",
  },
  {
    slug: "philosophy-of-mind",
    name: "Philosophy of mind",
    themes: ["Mind", "Self", "Soul", "Thinking", "Experience"],
    title: "Philosophy of Mind: Consciousness & the Mind–Body Problem | Quotes",
    description:
      "Philosophy of mind explained: the mind–body problem, consciousness and the hard problem, personal identity, and whether a machine could think—with sourced passages.",
    eyebrow: "Branch of philosophy",
    intro:
      "Philosophy of mind asks what a mind is and how it relates to the body and the world: whether mental states are physical, what consciousness is, and what would make something — or someone — persist over time.",
    overview: [
      "The mind–body problem organises everything. Descartes split reality into thinking substance and extended substance and then had to explain how they interact; the following centuries have been a sequence of answers to that failure — dualist and idealist, behaviourist, identity theorist, functionalist, eliminativist. Functionalism, the currently dominant view, defines mental states by what they do rather than what they are made of, which is what made artificial minds thinkable in principle.",
      "Consciousness is where the agreement ends. Nagel's “What Is It Like to Be a Bat?” (1974) made subjectivity the test: a creature is conscious if there is something it is like to be it. Chalmers' hard problem (1995) sharpened it: explaining functions seems to leave the feel untouched. Physicalists respond that the feel will be explained, or explained away; the dispute is exactly as alive as it sounds.",
      "Personal identity belongs to the same branch: Locke grounded the person in memory and consciousness, Hume found only a bundle of perceptions, and Parfit argued identity matters less than we assume. And with AI now producing fluent performance, the branch's oldest question — could this be a mind? — has acquired a practical edge; the archive's philosophy-of-AI guide takes that up in detail.",
    ],
    keyQuestions: [
      "Are minds physical, and if not, what then?",
      "Why is there something it is like to be conscious?",
      "What makes you the same person across time?",
      "Could a machine have a mind — and what would settle it?",
      "How do mental states get their content, their aboutness?",
    ],
    guides: ["philosophy-of-ai"],
    updated: "2026-10-01",
  },
  {
    slug: "philosophy-of-language",
    name: "Philosophy of language",
    themes: ["Language", "Meaning", "Dialogue", "Truth"],
    title: "Philosophy of Language: Meaning, Reference & Truth | Thinkers",
    description:
      "Philosophy of language explained: how words mean, what reference is, where meaning lives — speaker, sentence, or world—and how language limits and enables thought, with sourced passages.",
    eyebrow: "Branch of philosophy",
    intro:
      "Philosophy of language asks how words and sentences come to mean anything: what reference is, where meaning lives, and what language makes possible — or impossible — for thought.",
    overview: [
      "The branch's modern history turns on where meaning sits. Frege gave sense and reference as distinct: “the morning star” and “the evening star” pick out one planet by two routes. Russell analysed definite descriptions; Wittgenstein's Tractatus made language a picture of facts, and his later Philosophical Investigations dismantled that picture in favour of meaning as use — language games, not labels. Austin and the ordinary-language philosophers then noticed that saying is doing: promising, warning, naming.",
      "The American strand ran in parallel: Quine argued meaning could not be pinned down sentence by sentence; Davidson made interpretation the foundation; Kripke's Naming and Necessity (1970) replaced descriptive theories of names with causal chains, and in doing so reshaped metaphysics too. Grice showed how much meaning is carried by what a speaker implicates rather than says — the difference between what the sentence means and why anyone said it.",
      "Two consequences reach far beyond the branch. If thought is structured like language, the study of meaning is the study of thinking; and if meaning is use, then translation, testimony, and quotation — the daily traffic of this archive — are philosophical operations, not clerical ones. Which is why the archive records not just the wording but the forms that circulate in its place.",
    ],
    keyQuestions: [
      "How do words refer to things in the world?",
      "Where does meaning live: speaker, sentence, or community?",
      "Can language express everything thinkable — and if not, what then?",
      "What is the difference between saying and implying?",
      "Does language shape thought, or vice versa?",
    ],
    guides: ["philosophy-of-language"],
    updated: "2026-10-01",
  },
  {
    slug: "philosophy-of-science",
    name: "Philosophy of science",
    themes: ["Science", "Nature", "Method", "Reason"],
    title: "Philosophy of Science: Evidence, Explanation & Method | Thinkers",
    description:
      "Philosophy of science explained: what makes a theory scientific, how evidence confirms, what explanation is, and whether science describes reality—with sourced passages.",
    eyebrow: "Branch of philosophy",
    intro:
      "Philosophy of science asks what science is and why it works: what separates science from pseudo-science, how evidence confirms theories, what a good explanation is, and whether science tells us how reality really is.",
    overview: [
      "Induction is the founding problem: no finite evidence proves a universal law, so what makes it rational to believe one? Hume diagnosed the gap; Popper proposed falsifiability as the mark of science — theories must forbid something — and Kuhn's Structure of Scientific Revolutions (1962) answered with paradigms: normal science works inside a framework until anomalies accumulate, and the shift to the next framework is not a clean logical operation. The Popper–Kuhn argument set the field's agenda for decades.",
      "Explanation is the working core. Hempel's covering-law model said to explain is to derive; then came causal accounts, unification accounts, and mechanisms — the debate matters because it decides what a theory owes you beyond prediction. Underneath sits realism: does a successful theory describe the world's furniture, or just save the phenomena? The pessimistic induction — past successful theories turned out false — keeps the anti-realist answer live.",
      "The branch's questions have become everyone's questions: what counts as evidence in medicine, climate, and economics; how model-based sciences warrant claims; and, most recently, what it means when a machine learns a pattern nobody can state. Science's authority is a philosophical achievement, and this branch is where its warrant is examined.",
    ],
    keyQuestions: [
      "What separates science from pseudo-science?",
      "How does evidence confirm a theory it cannot prove?",
      "What makes something an explanation rather than a description?",
      "Do successful theories describe reality or only predict it?",
      "What happens to a science when its paradigm changes?",
    ],
    guides: ["philosophy-of-science", "philosophy-vs-science"],
    updated: "2026-10-01",
  },
  {
    slug: "philosophy-of-religion",
    name: "Philosophy of religion",
    themes: ["God", "Faith", "Soul", "Eternity", "Death"],
    title: "Philosophy of Religion: God, Faith & the Problem of Evil | Quotes",
    description:
      "Philosophy of religion explained: arguments for and against God's existence, faith and reason, the problem of evil, and what the classical arguments actually claim—with sourced passages.",
    eyebrow: "Branch of philosophy",
    intro:
      "Philosophy of religion examines the claims religions make and the reasons offered for them: whether God's existence can be argued, how faith relates to reason, and what evil shows about the world.",
    overview: [
      "Three families of argument structure the field. Ontological arguments, from Anselm on, try to move from the concept of a greatest possible being to its existence. Cosmological arguments — Avicenna, al-Ghazali, Aquinas, Leibniz — press the question of why anything exists and argue to a necessary ground. Teleological arguments read order in nature as evidence of design; Darwin redrew that evidence, and the argument now runs over fine-tuning instead.",
      "Against them stands the problem of evil: if God is omnipotent, omniscient, and good, why is there pointless suffering? The logical form the ancients answered; the evidential form — the sheer amount and distribution of apparently gratuitous pain — is the modern battleground, with theodicies and sceptical theisms on one side and Mackie-style arguments on the other.",
      "The branch also asks the questions believers and sceptics often skip: what “God” would have to mean for any of these arguments to work (the classical theists' answer — being itself — is nothing like an invisible person), whether faith is a substitute for evidence or a response to its absence (Aquinas and Kierkegaard give the two classic answers), and whether mystical experience is evidence. The archive's passages include the theologian-philosophers — Augustine, Avicenna, al-Ghazali, Maimonides, Pascal — argued with, not merely quoted.",
    ],
    keyQuestions: [
      "Can God's existence be established by argument?",
      "What does the existence of suffering show?",
      "Is faith compatible with — or prior to — reason?",
      "What would a soul be, and is there reason to believe in one?",
      "Do religious experiences carry evidential weight?",
    ],
    guides: [],
    updated: "2026-10-01",
  },
  {
    slug: "philosophy-of-law",
    name: "Philosophy of law",
    themes: ["Justice", "Politics", "Society", "Responsibility", "Conscience"],
    title: "Philosophy of Law: Justice, Rights & Legal Obligation | Thinkers",
    description:
      "Philosophy of law explained: what makes law law, whether morality is part of it, why obedience is owed, and what rights and punishment are for—with sourced passages.",
    eyebrow: "Branch of philosophy",
    intro:
      "Philosophy of law asks what law is and what it claims on us: whether its authority comes from morality or from procedure, what a right is, when obedience is owed, and what punishment could justify.",
    overview: [
      "The central dispute is between natural law and legal positivism. Natural-law theorists, from Aquinas to the postwar revival, hold that law's authority depends on moral merit — an unjust law, Augustine's line runs, is no law at all. Positivists — Bentham, Austin, Hart — hold that what the law is and what it ought to be are different questions, and Hart's The Concept of Law (1961) rebuilt the positivist answer around social rules. Fuller and Dworkin pressed back: law claims to guide by its own moral light, and integrity, not pedigree, is what courts actually apply.",
      "Around that core sit the working questions. What grounds a right — and what happens when rights conflict? Why obey the law at all — consent, fairness, gratitude, or none of the above, as the civil-disobedience literature from Plato's Crito to King's Letter makes personal? What could justify punishment — desert, deterrence, rehabilitation — and what must never be done to a person in its name?",
      "The branch meets the rest of philosophy everywhere: political philosophy supplies legitimacy, ethics supplies the value questions, epistemology the standards of evidence in court. The passages here — Crito, Aquinas, Hobbes, Bentham, Mill, Arendt — are the arguments the modern answers still quote.",
    ],
    keyQuestions: [
      "What makes a rule law — force, procedure, or morality?",
      "Is there an obligation to obey unjust laws?",
      "What are rights, and where do they come from?",
      "What could justify punishing a person?",
      "Can discretion and the rule of law coexist?",
    ],
    guides: [],
    updated: "2026-10-01",
  },
  {
    slug: "philosophy-of-education",
    name: "Philosophy of education",
    themes: ["Education", "Learning", "Cultivation", "Practice", "Self-examination"],
    title: "Philosophy of Education: Learning, Teaching & Formation | Quotes",
    description:
      "Philosophy of education explained: what education is for, how learning forms a person, the examined life as a practice, and the arguments behind teaching—with sourced passages.",
    eyebrow: "Branch of philosophy",
    intro:
      "Philosophy of education asks what education is for: whether it is the transmission of knowledge, the formation of character, the cultivation of reason, or the practice of the examined life — and what each answer demands of teachers and learners.",
    overview: [
      "The founding answers still frame the debate. Plato's Republic made education the turning of a soul toward what is real, not the filling of a vessel. Aristotle treated learning as habituation: we become just by doing just acts. Confucian tradition made self-cultivation a lifelong discipline in which learning, ritual, and reflection are one practice; Rousseau wanted education to follow nature rather than correct it; Dewey made the classroom a laboratory of experience and democracy.",
      "The modern questions sharpen the old ones. Is the aim knowledge, or autonomy, or flourishing — and who decides? What does equality require of schooling if the point is cultivation rather than sorting? Can virtues be taught at all, the question Socrates' generation already argued, or only practised? And what should a person be able to do with what they have learned: argue, judge, work, or live?",
      "This branch is the quietest of the eleven and in some ways the most practical: every teaching decision inside it answers a philosophical question, whether or not the answer is stated. The archive's passages — Socrates on the examined life, Confucius on learning, Dewey on experience, Arendt on thinking — are the arguments that made the practice what it is.",
    ],
    keyQuestions: [
      "What is education finally for?",
      "Can virtue be taught, or only habituated?",
      "What does the examined life require of a learner?",
      "Is education for the individual, the society, or both?",
      "What makes teaching something other than indoctrination?",
    ],
    guides: ["philosophy-of-education", "how-to-study-philosophy"],
    updated: "2026-10-01",
  },
];

/** Branches in display order: the classical core, then the specialties. */
export function branchList() {
  return branches;
}

export function branchForSlug(slug: string) {
  return branches.find((branch) => branch.slug === slug);
}

/** Guard the build against two branches claiming one URL. */
export function assertNoBranchSlugCollision() {
  const seen = new Set<string>();
  for (const branch of branches) {
    if (seen.has(branch.slug)) {
      throw new Error(`Duplicate branch slug: ${branch.slug}`);
    }
    seen.add(branch.slug);
  }
}
