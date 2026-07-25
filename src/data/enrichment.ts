import type { Quote } from "../lib/content";
import { extraThinkerGuides } from "./thinkers-extra";
import { researchedThinkerGuides } from "./thinkers-researched";

export type ThemeGuide = {
  intro: string;
  overview: string;
  history: string;
  faq: { question: string; answer: string }[];
};

export type ThinkerGuide = {
  lifespan: string;
  school: string;
  birthDate?: string;
  deathDate?: string;
  jobTitle: string;
  knowsAbout: string[];
  overview: string;
  ideas: string;
  works: string[];
  legacy: string;
};

export const themeGuides: Record<string, ThemeGuide> = {
  Freedom: {
    intro:
      "Freedom is among the most searched and most contested themes in philosophy: what it is to choose, to be responsible, and to live without illegitimate constraint.",
    overview:
      "Philosophers distinguish several ideas under the single word freedom. Negative freedom emphasizes non-interference; positive freedom emphasizes the capacity to act according to reasons, virtue, or authentic desire. Stoic writers often relocate freedom inside judgment; modern political philosophers ask which institutions protect or destroy it.",
    history:
      "From Stoic accounts of the will to Confucian debates about ritual and spontaneity, from Rousseau and Kant to twentieth-century liberalism and existentialism, freedom has been treated as both a metaphysical and a civic problem. The archive gathers English passages that keep these tensions visible rather than resolving them in advance.",
    faq: [
      {
        question: "What did philosophers say about freedom?",
        answer:
          "They disagreed. Some treat freedom as absence of external constraint; others as reasoned self-rule; still others as a lived stance toward fortune, desire, or political power.",
      },
      {
        question: "What is the philosophical definition of freedom?",
        answer:
          "There is no single definition. A useful starting point is the ability to act according to one’s own deliberation without domination—then ask what counts as one’s own, and what counts as domination.",
      },
      {
        question: "What are the best philosophy quotes about freedom?",
        answer:
          "The strongest passages usually clarify a distinction: freedom versus license, freedom versus fate, or civic liberty versus inner independence. Browse the quotations below for verified English renderings.",
      },
    ],
  },
  Self: {
    intro:
      "The self is the subject of introspection, identity, responsibility, and change—questions that recur from Socrates to modern psychology and phenomenology.",
    overview:
      "To ask about the self is to ask what persists through experience, what can be known from the first-person point of view, and how character is formed. Some traditions treat the self as a substantial soul; others as a stream of experience, a social role, or a practical center of agency.",
    history:
      "Greek care of the soul, Confucian self-cultivation, Buddhist critiques of a permanent ego, Cartesian meditation, and existential accounts of authenticity all leave traces in the quotations collected here.",
    faq: [
      {
        question: "What is the self in philosophy?",
        answer:
          "It is the question of who or what a person is across time: a soul, a mind, a body, a narrative, a social position, or some combination of these.",
      },
      {
        question: "Why do philosophers talk about the examined life?",
        answer:
          "Because unexamined habits still guide action. Examining the self is a way of bringing reasons, desires, and responsibilities into view.",
      },
      {
        question: "Where can I find philosophy quotes about the self?",
        answer:
          "This theme page gathers verified English quotations on identity, introspection, and the examined life from multiple traditions.",
      },
    ],
  },
  Wisdom: {
    intro:
      "Wisdom is practical insight under uncertainty: knowing what matters, what one does not know, and how to act without false certainty.",
    overview:
      "Unlike mere information, wisdom concerns judgment. Ancient schools linked it to virtue, moderation, and the right relation to desire. Modern readers often meet wisdom as aphorism; philosophers ask what makes such sayings trustworthy.",
    history:
      "From the Delphic injunction to know yourself, through Confucian and Daoist cultivation, to Stoic exercises and later virtue ethics, wisdom remains a bridge between theory and life.",
    faq: [
      {
        question: "What is wisdom in philosophy?",
        answer:
          "Wisdom is reasoned good judgment about how to live, including awareness of limits, consequences, and what is worth valuing.",
      },
      {
        question: "How is wisdom different from knowledge?",
        answer:
          "Knowledge can be specialized and propositional. Wisdom integrates knowledge with character, timing, and an understanding of human limits.",
      },
      {
        question: "Who are philosophers known for wisdom quotes?",
        answer:
          "Socrates, Confucius, Seneca, Laozi, and Aristotle appear frequently because their traditions treat wisdom as a practiced excellence rather than a slogan.",
      },
    ],
  },
  Life: {
    intro:
      "Philosophy quotes about life ask what makes a life good, meaningful, or worth examining—questions that drive ethics, religion, and everyday decision.",
    overview:
      "Life is both a biological fact and a practical project. Philosophers debate flourishing, suffering, mortality, and the standards by which a biography can be judged successful or wasted.",
    history:
      "Eudaimonia in Greek ethics, Daoist naturalness, Buddhist attention to suffering, existential authenticity, and contemporary meaning-of-life debates all appear across this theme.",
    faq: [
      {
        question: "What is the meaning of life in philosophy?",
        answer:
          "Answers range from flourishing and virtue to service, creativity, love, or the claim that meaning is constructed rather than discovered.",
      },
      {
        question: "Why do people search for philosophy quotes about life?",
        answer:
          "Because compact sentences can reopen a large question quickly—especially when they come from traditions that have tested the question for centuries.",
      },
      {
        question: "Which thinkers wrote most about how to live?",
        answer:
          "Aristotle, the Stoics, Confucius, Epicurus, and many modern existential writers make the art of living central rather than peripheral.",
      },
    ],
  },
  Knowledge: {
    intro:
      "Knowledge is the philosophical study of what we can justifiably claim to know—and where certainty ends.",
    overview:
      "Epistemology asks whether knowledge is justified true belief, reliable tracking of the world, or something else; it also asks how perception, testimony, memory, and reason contribute.",
    history:
      "From Plato’s dialogues and Indian pramāṇa theory to Descartes, Hume, Kant, and contemporary analytic epistemology, the theme remains a core branch of philosophy.",
    faq: [
      {
        question: "What is knowledge in philosophy?",
        answer:
          "A leading starting point is justified true belief, refined by debates about Gettier cases, reliability, evidence, and understanding.",
      },
      {
        question: "How do philosophers distinguish knowledge from opinion?",
        answer:
          "By asking for reasons, methods, and standards of evidence that can survive scrutiny—not by intensity of conviction alone.",
      },
      {
        question: "Where can I read philosophy quotes about knowledge?",
        answer:
          "This page collects English quotations on certainty, inquiry, ignorance, and the limits of knowing.",
      },
    ],
  },
  Virtue: {
    intro:
      "Virtue names excellences of character—habits of perception and action oriented toward the good.",
    overview:
      "Virtue ethics asks not only which acts are right, but what kind of person one becomes. Courage, justice, temperance, and wisdom are classic Western lists; Confucian ren and yi offer related but distinct vocabularies.",
    history:
      "Aristotle’s Nicomachean Ethics, Stoic progress, Confucian cultivation, and contemporary virtue ethics keep this theme alive across cultures.",
    faq: [
      {
        question: "What is virtue in philosophy?",
        answer:
          "A virtue is a stable excellence of character that enables good action for the right reasons in the right circumstances.",
      },
      {
        question: "Is virtue the same in every culture?",
        answer:
          "Lists overlap and diverge. Comparing Greek and Chinese catalogues is a way to see both shared human concerns and local ideals.",
      },
      {
        question: "What are famous philosophy quotes about virtue?",
        answer:
          "Look especially to Aristotle, Confucius, Seneca, and Mencius in the passages below.",
      },
    ],
  },
  Reason: {
    intro:
      "Reason is the capacity to give and assess reasons—central to logic, science, ethics, and public argument.",
    overview:
      "Philosophers disagree about whether reason is the slave of the passions, the legislator of morality, or one tool among others. The quotations here keep that disagreement in play.",
    history:
      "From Aristotelian logic and Confucian rectification of names to Enlightenment rationalism and twentieth-century critiques of instrumental reason, the theme spans method and ethics.",
    faq: [
      {
        question: "What is reason in philosophy?",
        answer:
          "It is the capacity to infer, explain, justify, and revise beliefs and actions according to norms of good thinking.",
      },
      {
        question: "Do all philosophers trust reason equally?",
        answer:
          "No. Some exalt it; others warn that reason can rationalize desire, ideology, or domination unless checked by experience and virtue.",
      },
      {
        question: "Where should I start with philosophy quotes about reason?",
        answer:
          "Begin with short passages that distinguish reasoning from mere persuasion, then follow the thinker pages for fuller context.",
      },
    ],
  },
  Action: {
    intro:
      "Action concerns agency: what it is to do something intentionally, and how thought becomes practice.",
    overview:
      "Philosophy of action asks how intentions, reasons, habits, and consequences hang together. Ethical traditions often insist that knowing the good is incomplete without doing it.",
    history:
      "Aristotelian praxis, Confucian unity of knowledge and action, Stoic exercises, and modern theories of intentionality all contribute to this theme.",
    faq: [
      {
        question: "What is action in philosophy?",
        answer:
          "An action is typically a deed done for a reason, as opposed to a mere bodily event or accident.",
      },
      {
        question: "Why do philosophers connect action and ethics?",
        answer:
          "Because moral evaluation usually concerns what agents do, intend, and could have done otherwise.",
      },
      {
        question: "Which traditions emphasize practice over theory?",
        answer:
          "Stoicism, Confucianism, pragmatism, and many Buddhist schools treat practice as the test of understanding.",
      },
    ],
  },
  Death: {
    intro:
      "Philosophy quotes about death confront mortality, fear, legacy, and what a finite life can mean.",
    overview:
      "Some argue that death is nothing to us; others that mortality intensifies value; still others that grief and remembrance are ethical tasks. The theme sits between metaphysics and consolation.",
    history:
      "Epicurean therapy, Stoic rehearsals of mortality, Platonic immortality debates, and Buddhist attention to impermanence remain touchstones.",
    faq: [
      {
        question: "What do philosophers say about death?",
        answer:
          "They ask whether death harms the one who dies, how fear of death should be handled, and what duties the living owe the dead.",
      },
      {
        question: "Is fear of death irrational?",
        answer:
          "Some schools say yes if death is non-existence; others treat fear as informative about attachment and unfinished responsibility.",
      },
      {
        question: "Where can I find philosophy quotes about death?",
        answer:
          "This theme gathers English passages from Stoic, Epicurean, Chinese, and modern sources.",
      },
    ],
  },
  Love: {
    intro:
      "Love in philosophy ranges from friendship and desire to care, justice, and the transformation of the self.",
    overview:
      "Greek distinctions among eros, philia, and agape, Confucian relational ethics, and modern debates about romantic love keep the theme philosophically precise rather than merely sentimental.",
    history:
      "Plato’s Symposium, Aristotle on friendship, Augustine on ordered loves, and contemporary ethics of care all leave traces in these quotations.",
    faq: [
      {
        question: "What is love according to philosophy?",
        answer:
          "It can be desire, mutual goodwill, recognition, attachment, or a commitment to another’s good—often several of these at once.",
      },
      {
        question: "Did ancient philosophers value friendship more than romance?",
        answer:
          "Many Greek and Roman texts give friendship a central ethical role; later European traditions elevate romantic love in different ways.",
      },
      {
        question: "Where are philosophy quotes about love?",
        answer:
          "Browse the verified English passages on this page, then follow thinker links for fuller context.",
      },
    ],
  },
};

export const coreThinkerGuides: Record<string, ThinkerGuide> = {
  Socrates: {
    lifespan: "c. 469–399 BCE",
    school: "Classical Greek philosophy",
    birthDate: "-0469",
    deathDate: "-0399",
    jobTitle: "Philosopher",
    knowsAbout: ["ethics", "virtue", "dialectic", "knowledge", "the examined life"],
    overview:
      "Socrates of Athens (c. 469–399 BCE) wrote nothing himself. What we know comes chiefly through Plato, Xenophon, and later reports. He became emblematic of philosophy as a public practice of questioning, culminating in his trial and execution by the Athenian democracy.",
    ideas:
      "Socratic inquiry treats definitions of virtue, piety, courage, and justice as open problems. The method of elenchus tests interlocutors’ consistency; the claim that an unexamined life is not worth living links ethics to self-knowledge. Epistemically, Socratic ignorance—knowing that one does not know—is a starting point rather than a defeat.",
    works: ["Portrayed in Plato’s early dialogues", "Xenophon’s Memorabilia", "Aristophanes’ Clouds (comic portrait)"],
    legacy:
      "Socrates shaped Western philosophy’s self-image: philosophy as cross-examination, civic risk, and care of the soul. Later schools—from the Stoics to modern educators—reuse the Socratic method with different metaphysics.",
  },
  Plato: {
    lifespan: "c. 429–347 BCE",
    school: "Platonism",
    birthDate: "-0429",
    deathDate: "-0347",
    jobTitle: "Philosopher",
    knowsAbout: ["forms", "justice", "politics", "knowledge", "education"],
    overview:
      "Plato (c. 429–347 BCE), an Athenian of high status and student of Socrates, founded the Academy and wrote philosophical dialogues that remain among the most influential works in the Western tradition.",
    ideas:
      "Across dialogues such as the Republic, Symposium, and Phaedo, Plato explores justice, love, knowledge, and the distinction between changing appearances and more stable objects of understanding. Education and political order are treated as philosophical problems, not merely technical ones.",
    works: ["Republic", "Symposium", "Phaedo", "Apology", "Laws"],
    legacy:
      "Platonism influenced ancient, medieval, Islamic, and modern thought. Even critics of Plato’s metaphysics inherited his ambition to make philosophy systematic, literary, and publicly consequential.",
  },
  Aristotle: {
    lifespan: "384–322 BCE",
    school: "Peripatetic School",
    birthDate: "-0384",
    deathDate: "-0322",
    jobTitle: "Philosopher",
    knowsAbout: ["logic", "ethics", "metaphysics", "biology", "politics"],
    overview:
      "Aristotle (384–322 BCE), student of Plato and tutor to Alexander the Great, founded the Lyceum and produced treatises spanning logic, natural science, metaphysics, ethics, rhetoric, and politics.",
    ideas:
      "Aristotelian ethics centers on eudaimonia (flourishing) achieved through cultivated virtues that hit a mean relative to us. His logic organized inference for centuries; his metaphysics and biology modeled careful classification and causal explanation.",
    works: ["Nicomachean Ethics", "Politics", "Metaphysics", "Poetics", "Organon"],
    legacy:
      "Aristotle shaped Islamic and European scholasticism, modern science’s early vocabulary, and contemporary virtue ethics. He remains a primary reference for debates about character, practical wisdom, and teleology.",
  },
  Confucius: {
    lifespan: "551–479 BCE",
    school: "Confucianism",
    birthDate: "-0551",
    deathDate: "-0479",
    jobTitle: "Teacher and philosopher",
    knowsAbout: ["ethics", "ritual", "education", "governance", "self-cultivation"],
    overview:
      "Confucius (Kongzi, 551–479 BCE) was a teacher and political thinker from the state of Lu. Biographical details are limited and often legendary, but his influence on East Asian ethical and political culture is immense. The Analects (Lunyu) remains the primary traditional source for his sayings.",
    ideas:
      "Core themes include ren (humaneness), li (ritual propriety), learning, and the cultivation of character within family and public roles. Ethical life is practiced through relationships rather than isolated individual will. Education and exemplary conduct are treated as political forces.",
    works: ["Analects (Lunyu)", "Associated with the Five Classics in later tradition"],
    legacy:
      "Confucian institutions, examinations, and family ethics shaped China, Korea, Japan, and Vietnam for centuries. Modern readers return to Confucius for questions of education, leadership, and moral formation.",
  },
  Mencius: {
    lifespan: "c. 372–289 BCE",
    school: "Confucianism",
    birthDate: "-0372",
    deathDate: "-0289",
    jobTitle: "Philosopher",
    knowsAbout: ["human nature", "virtue", "governance", "moral sprouts"],
    overview:
      "Mencius (Mengzi, c. 372–289 BCE) was a major Confucian thinker of the Warring States period, later honored as the “Second Sage.” The Mengzi preserves his dialogues and arguments.",
    ideas:
      "Mencius is known for the claim that human nature tends toward goodness, expressed through moral “sprouts” that require cultivation. He linked righteous rule to the people’s welfare and criticized coercive politics that abandon virtue.",
    works: ["Mengzi (Mencius)"],
    legacy:
      "Within Confucianism, Mencius became a central interpreter of Confucius and a touchstone for debates about human nature, education, and legitimate government.",
  },
  Laozi: {
    lifespan: "trad. 6th century BCE (historicity debated)",
    school: "Daoism",
    jobTitle: "Philosopher (traditional attribution)",
    knowsAbout: ["Dao", "wuwei", "naturalness", "governance", "language"],
    overview:
      "Laozi (“Old Master”) is the traditional author of the Daodejing, a foundational Daoist text. Modern scholarship often treats the figure as legendary and the text as a layered compilation that stabilized by the third century BCE, while still recognizing its enormous philosophical influence.",
    ideas:
      "Key themes include the Dao, soft power, non-coercive action (wuwei), critique of rigid naming, and a politics of restraint. Paradox and image do philosophical work that discursive argument alone may not.",
    works: ["Daodejing (Tao Te Ching)"],
    legacy:
      "Daoist metaphysics, aesthetics, and political counsel drew on the Laozi for millennia. The text remains one of the most translated works in world literature.",
  },
  Zhuangzi: {
    lifespan: "late 4th century BCE",
    school: "Daoism",
    birthDate: "-0369",
    deathDate: "-0286",
    jobTitle: "Philosopher",
    knowsAbout: ["perspective", "language", "transformation", "freedom", "skepticism"],
    overview:
      "Zhuangzi (Zhuang Zhou, late 4th century BCE) is a pivotal figure in classical Daoism. The received Zhuangzi was edited into 33 chapters by Guo Xiang; the Inner Chapters are often associated most closely with Zhuangzi himself.",
    ideas:
      "The text explores perspectivalism, the limits of fixed distinctions, skillful spontaneity, and a critique of rigid moral and linguistic frameworks. Humor and parable are philosophical methods, not decorations.",
    works: ["Zhuangzi (especially the Inner Chapters)"],
    legacy:
      "Zhuangzi shaped Chinese literature, Buddhism’s reception in China, and modern comparative philosophy. He remains central to debates about relativism, freedom, and the uses of language.",
  },
  "Marcus Aurelius": {
    lifespan: "121–180 CE",
    school: "Stoicism",
    birthDate: "0121",
    deathDate: "0180",
    jobTitle: "Roman emperor and Stoic philosopher",
    knowsAbout: ["Stoicism", "duty", "impermanence", "self-discipline", "leadership"],
    overview:
      "Marcus Aurelius (121–180 CE) was Roman emperor and author of the Meditations, private notes of Stoic practice written in Greek.",
    ideas:
      "The Meditations emphasize control of judgment, acceptance of impermanence, duty to the common good, and continual return to present attention. Philosophy appears as daily exercise rather than display.",
    works: ["Meditations"],
    legacy:
      "Marcus remains one of the most widely read Stoic authors in English, especially for readers seeking practical philosophy under pressure.",
  },
  Seneca: {
    lifespan: "c. 4 BCE–65 CE",
    school: "Stoicism",
    birthDate: "-0004",
    deathDate: "0065",
    jobTitle: "Stoic philosopher and statesman",
    knowsAbout: ["Stoicism", "anger", "time", "ethics", "consolation"],
    overview:
      "Lucius Annaeus Seneca (c. 4 BCE–65 CE) was a Stoic philosopher, dramatist, and adviser to Nero. His letters and essays made Stoic ethics vivid for Latin readers.",
    ideas:
      "Seneca writes on anger, grief, wealth, time, and the shortness of life. He treats philosophy as therapy for the passions and as preparation for misfortune, while remaining entangled in imperial politics.",
    works: ["Moral Letters to Lucilius", "On the Shortness of Life", "On Anger"],
    legacy:
      "Seneca’s accessible style made Stoicism a durable European resource for consolation literature and moral psychology.",
  },
  "Friedrich Nietzsche": {
    lifespan: "1844–1900",
    school: "Philosophy of life / critique of morality",
    birthDate: "1844-10-15",
    deathDate: "1900-08-25",
    jobTitle: "Philosopher",
    knowsAbout: ["morality", "nihilism", "power", "culture", "affirmation"],
    overview:
      "Friedrich Nietzsche (1844–1900) was a German philologist and philosopher whose critiques of morality, religion, and modern culture reshaped twentieth-century thought.",
    ideas:
      "Major themes include the genealogy of morals, the death of God, affirmation, the will to power, and the creation of values. His aphoristic style resists reduction to a single system.",
    works: ["Thus Spoke Zarathustra", "Beyond Good and Evil", "On the Genealogy of Morality", "The Gay Science"],
    legacy:
      "Nietzsche influenced existentialism, critical theory, literary modernism, and popular culture. Careful reading distinguishes his published arguments from later political misappropriations.",
  },
  "Immanuel Kant": {
    lifespan: "1724–1804",
    school: "German Idealism / critical philosophy",
    birthDate: "1724-04-22",
    deathDate: "1804-02-12",
    jobTitle: "Philosopher",
    knowsAbout: ["epistemology", "ethics", "autonomy", "aesthetics", "reason"],
    overview:
      "Immanuel Kant (1724–1804) transformed modern philosophy by asking how synthetic a priori knowledge is possible and by grounding ethics in autonomy and the moral law.",
    ideas:
      "The Critique of Pure Reason limits knowledge to possible experience while preserving room for practical freedom. The categorical imperative frames duty independently of contingent desire.",
    works: [
      "Critique of Pure Reason",
      "Groundwork of the Metaphysics of Morals",
      "Critique of Practical Reason",
      "Critique of Judgment",
    ],
    legacy:
      "Kantian ethics, epistemology, and aesthetics remain central in academic philosophy and in debates about human rights, autonomy, and the limits of science.",
  },
  "John Dewey": {
    lifespan: "1859–1952",
    school: "Pragmatism",
    birthDate: "1859-10-20",
    deathDate: "1952-06-01",
    jobTitle: "Philosopher and educator",
    knowsAbout: ["education", "democracy", "pragmatism", "inquiry", "experience"],
    overview:
      "John Dewey (1859–1952) was a leading American pragmatist whose work linked philosophy, education, and democratic life.",
    ideas:
      "Dewey treated inquiry as experimental and education as growth through intelligent experience. Democracy, for him, was a form of associated living rather than only a voting procedure.",
    works: ["Democracy and Education", "Experience and Nature", "The Public and Its Problems"],
    legacy:
      "Dewey remains central to philosophy of education and to pragmatist approaches in ethics, politics, and aesthetics.",
  },
  "Ludwig Wittgenstein": {
    lifespan: "1889–1951",
    school: "Analytic philosophy",
    birthDate: "1889-04-26",
    deathDate: "1951-04-29",
    jobTitle: "Philosopher",
    knowsAbout: ["language", "logic", "meaning", "mind", "rule-following"],
    overview:
      "Ludwig Wittgenstein (1889–1951) reshaped analytic philosophy twice: first through the Tractatus and later through the Philosophical Investigations.",
    ideas:
      "Early work links logic, language, and the limits of sense; later work emphasizes language-games, use, and the public criteria of meaning. Philosophy becomes a therapy for conceptual confusion.",
    works: ["Tractatus Logico-Philosophicus", "Philosophical Investigations"],
    legacy:
      "Wittgenstein dominates philosophy of language and mind in the analytic tradition and influences literary theory, law, and cognitive science.",
  },
  "Bertrand Russell": {
    lifespan: "1872–1970",
    school: "Analytic philosophy",
    birthDate: "1872-05-18",
    deathDate: "1970-02-02",
    jobTitle: "Philosopher and logician",
    knowsAbout: ["logic", "knowledge", "science", "ethics", "language"],
    overview:
      "Bertrand Russell (1872–1970) helped found analytic philosophy through work in logic, philosophy of mathematics, and clear public writing on knowledge and society.",
    ideas:
      "Russell advanced logical analysis, theory of descriptions, and a scientific temper in philosophy, while writing widely accessible essays on education, politics, and happiness.",
    works: ["Principia Mathematica (with Whitehead)", "The Problems of Philosophy", "A History of Western Philosophy"],
    legacy:
      "Russell’s prose style and logical methods remain models for analytic clarity; he also remains a major public intellectual of the twentieth century.",
  },
  "Karl Popper": {
    lifespan: "1902–1994",
    school: "Philosophy of science",
    birthDate: "1902-07-28",
    deathDate: "1994-09-17",
    jobTitle: "Philosopher of science",
    knowsAbout: ["falsification", "science", "open society", "knowledge", "criticism"],
    overview:
      "Karl Popper (1902–1994) argued that scientific theories are distinguished by falsifiability and defended the open society against historicist politics.",
    ideas:
      "Conjectures and refutations replace verification as the engine of science. Political philosophy, for Popper, requires institutions that allow criticism and peaceful reform.",
    works: ["The Logic of Scientific Discovery", "The Open Society and Its Enemies", "Conjectures and Refutations"],
    legacy:
      "Popper remains a standard reference in philosophy of science and in liberal defenses of critical public culture.",
  },
  Epictetus: {
    lifespan: "c. 50–135 CE",
    school: "Stoicism",
    birthDate: "0050",
    deathDate: "0135",
    jobTitle: "Stoic philosopher",
    knowsAbout: ["Stoicism", "freedom", "judgment", "discipline", "ethics"],
    overview:
      "Epictetus (c. 50–135 CE) was a Stoic teacher, born enslaved, whose lectures were recorded by Arrian in the Discourses and the Enchiridion.",
    ideas:
      "His ethics centers on the dichotomy of control: some things are up to us (judgment, impulse, desire), others are not. Freedom is relocated to the disciplined use of appearances.",
    works: ["Discourses", "Enchiridion"],
    legacy:
      "Epictetus became a primary source for later Stoic practice and remains widely read for practical ethics.",
  },
  "René Descartes": {
    lifespan: "1596–1650",
    school: "Rationalism",
    birthDate: "1596-03-31",
    deathDate: "1650-02-11",
    jobTitle: "Philosopher and mathematician",
    knowsAbout: ["mind", "knowledge", "method", "dualism", "certainty"],
    overview:
      "René Descartes (1596–1650) helped inaugurate modern philosophy by seeking certain foundations for knowledge through methodic doubt.",
    ideas:
      "The cogito, mind–body dualism, and clear and distinct ideas structure his metaphysics and epistemology. Mathematics and method are models for secure inquiry.",
    works: ["Meditations on First Philosophy", "Discourse on the Method", "Principles of Philosophy"],
    legacy:
      "Descartes remains central to debates about consciousness, skepticism, and the scientific image of the world.",
  },
  "G. W. F. Hegel": {
    lifespan: "1770–1831",
    school: "German Idealism",
    birthDate: "1770-08-27",
    deathDate: "1831-11-14",
    jobTitle: "Philosopher",
    knowsAbout: ["history", "dialectic", "spirit", "freedom", "logic"],
    overview:
      "Georg Wilhelm Friedrich Hegel (1770–1831) developed a systematic idealism in which freedom, history, and reason are deeply interrelated.",
    ideas:
      "Phenomenology, dialectic, and the philosophy of history treat concepts as developing through contradiction and resolution. Freedom is realized in ethical and institutional life, not only in private will.",
    works: ["Phenomenology of Spirit", "Science of Logic", "Elements of the Philosophy of Right"],
    legacy:
      "Hegel shaped Marxism, existentialism, pragmatism, and contemporary continental philosophy, especially debates about recognition and historical reason.",
  },
  "Hannah Arendt": {
    lifespan: "1906–1975",
    school: "Political philosophy",
    birthDate: "1906-10-14",
    deathDate: "1975-12-04",
    jobTitle: "Political theorist",
    knowsAbout: ["politics", "totalitarianism", "action", "plurality", "judgment"],
    overview:
      "Hannah Arendt (1906–1975) analyzed totalitarianism, revolution, and the vita activa, becoming one of the twentieth century’s most influential political thinkers.",
    ideas:
      "Arendt distinguishes labor, work, and action; emphasizes plurality as the condition of politics; and examines thoughtlessness as a moral and political danger.",
    works: ["The Origins of Totalitarianism", "The Human Condition", "Eichmann in Jerusalem", "On Revolution"],
    legacy:
      "Arendt remains essential for debates about authoritarianism, public freedom, and responsibility under bureaucratic systems.",
  },
};

export const thinkerGuides: Record<string, ThinkerGuide> = {
  ...coreThinkerGuides,
  ...extraThinkerGuides,
  ...researchedThinkerGuides,
};

export function themeGuideFor(name: string): ThemeGuide | undefined {
  return themeGuides[name];
}

export function thinkerGuideFor(name: string, fallbackSchool?: string): ThinkerGuide | undefined {
  if (thinkerGuides[name]) return thinkerGuides[name];
  if (!fallbackSchool) return undefined;
  return {
    lifespan: "See sources for dating",
    school: fallbackSchool,
    jobTitle: "Philosopher / tradition",
    knowsAbout: [fallbackSchool.toLowerCase(), "ethics", "wisdom"],
    overview: `${name} appears in this archive through verified English quotations associated with the ${fallbackSchool} tradition. Biographical certainty varies by figure and text; where the “author” is a scripture or school anthology, read the name as a traditional attribution rather than a modern individual biography.`,
    ideas: `The passages gathered under ${name} emphasize themes typical of ${fallbackSchool}: practical judgment, the examined life, and concepts that repay slow reading. Use individual quotation pages for source notes, then compare related thinkers in the same school.`,
    works: ["See source fields on individual quotations"],
    legacy: `${name} remains part of the living conversation preserved in this archive’s English renderings.`,
  };
}

export function defaultThinkerGuide(name: string, school: string, themes: string[]): ThinkerGuide {
  const focus = themes.slice(0, 5);
  return {
    lifespan: "Dating varies by source tradition",
    school,
    jobTitle: "Philosopher / textual tradition",
    knowsAbout: focus.map((t) => t.toLowerCase()),
    overview: `${name} is represented in Philosophy Blind Box through curated English quotations. In some cases the name denotes a historical thinker; in others it denotes a scripture, school text, or traditional attribution. School label in this archive: ${school}.`,
    ideas: `Recurring concerns in this selection include ${focus.join(", ") || "philosophical inquiry"}. Read each passage with its source note, then follow theme links to see how related thinkers frame the same questions.`,
    works: ["Attributed sources listed on quotation pages"],
    legacy: `Readers use ${name} as an entry point into ${school} and into cross-cultural comparison within this archive.`,
  };
}

export function defaultThemeGuide(name: string, count: number): ThemeGuide {
  return {
    intro: `Philosophy quotations on ${name.toLowerCase()}, gathered from verified English renderings across traditions.`,
    overview: `This theme page collects ${count} English passages that touch ${name.toLowerCase()} as a philosophical concern—whether as a concept to define, a value to pursue, or a problem to examine.`,
    history: `Related discussions appear across Greek, Chinese, Indian, Islamic, and modern European traditions. Use the quotations below as entry points, then follow thinker pages for fuller context.`,
    faq: [
      {
        question: `What did philosophers say about ${name.toLowerCase()}?`,
        answer: `They approached ${name.toLowerCase()} from ethics, metaphysics, politics, and lived practice. The passages below show several of those angles in compact form.`,
      },
      {
        question: `Where can I find philosophy quotes about ${name.toLowerCase()}?`,
        answer: `This archive page is organized for that search intent: verified English quotations, with links to thinkers and related themes.`,
      },
      {
        question: `How should I read these quotations?`,
        answer: `Read the sentence first, then check school and source. A quotation is a doorway into an argument, not a substitute for the surrounding text.`,
      },
    ],
  };
}
