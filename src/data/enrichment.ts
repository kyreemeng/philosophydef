import type { Quote } from "../lib/content";
import { extraThinkerGuides } from "./thinkers-extra";
import { researchedThinkerGuides } from "./thinkers-researched";
import { traditionGuides } from "./tradition-guides";

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
      "Philosophy quotes about self explore identity, responsibility, and the examined life—from Socrates’ unexamined life to modern phenomenology and existential authenticity.",
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
          "Because unexamined habits still guide action. Socrates’ line that the unexamined life is not worth living (Plato, Apology 38a) remains the classic prompt—see the archive entry for the exact wording and source.",
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
  Nature: {
    intro:
      "Philosophy quotes about nature ask what the cosmos is, how humans belong in it, and whether “natural” can guide ethics or politics.",
    overview:
      "Nature may mean physical cosmos, living world, human nature, or a normative standard of what ought to be. Presocratics, Daoists, Stoics, and modern environmental thinkers share the word while disagreeing about its force.",
    history:
      "From Greek physis and Chinese ziran to Rousseau’s state of nature and contemporary ecology, the theme links metaphysics, ethics, and politics.",
    faq: [
      {
        question: "What do philosophers mean by nature?",
        answer:
          "They may mean the physical world, human dispositions, or a standard of right order—contexts decide which sense is in play.",
      },
      {
        question: "Is living according to nature a Stoic idea?",
        answer:
          "Yes. Stoicism treats living in agreement with nature—as rational and social—as the ethical end, though “nature” is richly defined.",
      },
      {
        question: "Where are philosophy quotes about nature?",
        answer:
          "This theme page gathers verified English passages on cosmos, life, and natural order.",
      },
    ],
  },
  Morality: {
    intro:
      "Morality in philosophy concerns right and wrong, obligation, and the standards by which we judge persons and acts.",
    overview:
      "Moral philosophy asks whether morality is objective, how reasons bind us, and how character, rules, and consequences relate. Traditions differ on whether duty, virtue, or outcomes come first.",
    history:
      "From Confucian and Greek virtue vocabularies to Kantian duty, utilitarianism, and critiques of moral ideology, the theme remains central to public life.",
    faq: [
      {
        question: "What is morality in philosophy?",
        answer:
          "It is the domain of norms about right action, good character, and what we owe one another—studied systematically in ethics.",
      },
      {
        question: "How is morality different from ethics?",
        answer:
          "In everyday speech they overlap; academically, ethics often names the philosophical study of moral practices and concepts.",
      },
      {
        question: "Where can I find philosophy quotes about morality?",
        answer:
          "Browse the passages below, then related themes such as virtue, responsibility, and justice.",
      },
    ],
  },
  Practice: {
    intro:
      "Practice is where thought becomes habit: philosophy as a way of living, training, and repeated action.",
    overview:
      "Many traditions insist that understanding without practice is incomplete—Stoic exercises, Confucian self-cultivation, Buddhist path, and pragmatist inquiry all treat doing as epistemic.",
    history:
      "Hadot’s reading of ancient philosophy as spiritual exercise revived attention to practice; East Asian and pragmatist sources never separated it from theory as sharply as some modern academics did.",
    faq: [
      {
        question: "What is philosophical practice?",
        answer:
          "It is the disciplined application of ideas in daily judgment, habit, and conduct—not only the writing of theory.",
      },
      {
        question: "Which schools emphasize practice?",
        answer:
          "Stoicism, Confucianism, Buddhism, and pragmatism are especially explicit, though most ethics implies practice.",
      },
      {
        question: "Where are quotes on practice?",
        answer:
          "This page collects English passages on habit, exercise, and the unity of knowing and doing.",
      },
    ],
  },
  Responsibility: {
    intro:
      "Responsibility asks what we answer for—our choices, omissions, institutions, and the futures we help create.",
    overview:
      "Philosophical debates cover free will, blame, collective responsibility, and duties to distant others. Technology and AI revive the question of who is accountable when systems act.",
    history:
      "From legal and theological notions of guilt to existential ownership of freedom and contemporary ethics of care, responsibility links agency to moral address.",
    faq: [
      {
        question: "What is responsibility in philosophy?",
        answer:
          "It is the condition of being answerable for actions, attitudes, or outcomes under norms of praise, blame, or repair.",
      },
      {
        question: "Can groups be responsible?",
        answer:
          "Many philosophers argue yes—corporations, states, and movements can bear duties beyond any single member.",
      },
      {
        question: "Where are philosophy quotes about responsibility?",
        answer:
          "See the verified English passages on this theme page and related pages on freedom and action.",
      },
    ],
  },
  Time: {
    intro:
      "Philosophy of time asks what tense and duration are—and how memory, death, and history shape a human life.",
    overview:
      "Is time a river, a dimension, or a structure of consciousness? Augustine, Bergson, and modern metaphysics offer rival pictures while ethics asks how finite time should be spent.",
    history:
      "Ancient cosmologies, medieval theology, phenomenology of lived time, and physics-informed metaphysics keep the theme open.",
    faq: [
      {
        question: "What do philosophers say about time?",
        answer:
          "They debate whether time is objective or mind-dependent, how past and future exist, and what temporal finitude means for value.",
      },
      {
        question: "Who wrote famous lines about time?",
        answer:
          "Augustine, Marcus Aurelius, Bergson, and many poets-philosophers appear in this archive’s English renderings.",
      },
      {
        question: "Where are philosophy quotes about time?",
        answer:
          "This theme gathers passages on duration, memory, and the present.",
      },
    ],
  },
  Happiness: {
    intro:
      "Happiness—or flourishing—is a central aim in ethics: what makes a life go well, and whether pleasure alone is enough.",
    overview:
      "Greek eudaimonia, Buddhist analyses of craving, utilitarian happiness, and modern well-being research all contest the meaning of a good life.",
    history:
      "Aristotle, Epicurus, the Stoics, and Confucian flourishing ideals remain primary references; later utilitarianism reframed happiness as aggregable preference or pleasure.",
    faq: [
      {
        question: "What is happiness in philosophy?",
        answer:
          "It may mean pleasure, desire satisfaction, or eudaimonic flourishing through virtue and meaningful activity.",
      },
      {
        question: "Is happiness the same as pleasure?",
        answer:
          "Not for most virtue ethicists; pleasure can be part of a good life without exhausting it.",
      },
      {
        question: "Where are philosophy quotes about happiness?",
        answer:
          "Browse this theme, then related pages on life, virtue, and desire.",
      },
    ],
  },
  Truth: {
    intro:
      "Truth is among philosophy’s oldest problems: what it is for a claim to be true, and how truth relates to belief, language, and power.",
    overview:
      "Correspondence, coherence, pragmatist, and deflationary theories compete. Ethics and politics ask who gets to define truth in public life.",
    history:
      "From Plato and Aristotle through medieval adequation, modern epistemology, and Nietzschean suspicion, truth remains both ideal and contested.",
    faq: [
      {
        question: "What is truth in philosophy?",
        answer:
          "A leading idea is that truth is what our statements must track about reality—though theories disagree on the details.",
      },
      {
        question: "Is truth relative?",
        answer:
          "Some views relativize truth to frameworks or cultures; others defend objectivity while admitting fallibility.",
      },
      {
        question: "Where are philosophy quotes about truth?",
        answer:
          "This page collects verified English passages on truth, appearance, and honesty in inquiry.",
      },
    ],
  },
  Justice: {
    intro:
      "Justice concerns fairness, rights, desert, and the arrangement of institutions that claim to treat people as equals.",
    overview:
      "Distributive, retributive, and restorative justice name different problems. Political philosophy asks what a just society owes its members and outsiders.",
    history:
      "Plato’s Republic, Confucian rightful rule, social-contract theories, and contemporary egalitarian debates structure the field.",
    faq: [
      {
        question: "What is justice in philosophy?",
        answer:
          "It is the virtue and institutional standard of giving each their due—though “due” is endlessly debated.",
      },
      {
        question: "What are the types of justice?",
        answer:
          "Common distinctions include distributive, procedural, retributive, and restorative justice.",
      },
      {
        question: "Where are philosophy quotes about justice?",
        answer:
          "Browse this theme and related pages on politics, power, and morality.",
      },
    ],
  },
  Courage: {
    intro:
      "Courage is the virtue of facing fear without abandoning judgment—central to ethics from Aristotle to modern existential resolve.",
    overview:
      "Philosophers ask whether courage is fearlessness or right action amid fear, and how it relates to recklessness, endurance, and moral courage in public life.",
    history:
      "Greek andreia, Confucian and martial ethics, Stoic endurance, and civil-disobedience traditions all refine the concept.",
    faq: [
      {
        question: "What is courage in philosophy?",
        answer:
          "Typically a mean between cowardice and rashness: persevering for worthy ends despite fear.",
      },
      {
        question: "Is moral courage different from physical courage?",
        answer:
          "Many ethicists distinguish facing bodily danger from risking status, career, or approval for a principle.",
      },
      {
        question: "Where are philosophy quotes about courage?",
        answer:
          "This theme gathers English passages on bravery, fear, and steadfastness.",
      },
    ],
  },
  Beauty: {
    intro:
      "Beauty raises questions about judgment, form, pleasure, and whether aesthetic value is subjective or shares standards.",
    overview:
      "Aesthetics asks what beauty is, how taste is educated, and how art discloses truth or shapes moral perception.",
    history:
      "Plato, Kant, Schiller, and Chinese aesthetic traditions offer distinct routes from beauty to ethics and metaphysics.",
    faq: [
      {
        question: "What is beauty according to philosophy?",
        answer:
          "Answers range from harmony and form to disinterested pleasure or culturally trained perception.",
      },
      {
        question: "Is beauty subjective?",
        answer:
          "Many theories allow both personal response and intersubjective standards of criticism.",
      },
      {
        question: "Where are philosophy quotes about beauty?",
        answer:
          "See the passages below and related themes on art and experience.",
      },
    ],
  },
  Mind: {
    intro:
      "Philosophy of mind asks what consciousness, thought, and mental life are—and how they relate to body and world.",
    overview:
      "Dualism, materialism, functionalism, and phenomenological descriptions compete. AI renews old questions about understanding and experience.",
    history:
      "From Aristotle’s psyche and Buddhist analyses of mind to Descartes, Wittgenstein, and cognitive science, the theme spans metaphysics and epistemology.",
    faq: [
      {
        question: "What is the mind in philosophy?",
        answer:
          "It names the locus of thought, feeling, and consciousness—whether as soul, brain process, or patterned activity.",
      },
      {
        question: "Can machines have minds?",
        answer:
          "That depends on what mind requires: behavior, information processing, or subjective experience. The debate remains open.",
      },
      {
        question: "Where are philosophy quotes about mind?",
        answer:
          "This theme collects English passages on thought, awareness, and inner life.",
      },
    ],
  },
  Learning: {
    intro:
      "Learning is philosophy’s practical twin: how judgment is formed through study, error, dialogue, and habit.",
    overview:
      "Education is not only information transfer; it is the shaping of attention and character. Confucian learning, Socratic midwifery, and Deweyan growth offer rival models.",
    history:
      "Academies, monasteries, universities, and modern schooling all encode philosophies of learning—often silently.",
    faq: [
      {
        question: "What do philosophers say about learning?",
        answer:
          "They treat learning as cultivation of reason and character, not merely accumulation of facts.",
      },
      {
        question: "Who emphasizes learning most?",
        answer:
          "Confucius, Plato, Dewey, and many Stoic teachers make education central to the good life.",
      },
      {
        question: "Where are philosophy quotes about learning?",
        answer:
          "Browse this theme and the philosophy of education guide.",
      },
    ],
  },
  Desire: {
    intro:
      "Desire drives action and suffering alike; philosophy asks which desires to educate, restrain, or affirm.",
    overview:
      "Ethics and moral psychology analyze appetite, love, ambition, and addiction. Stoic, Buddhist, and psychoanalytic traditions treat desire as trainable rather than merely given.",
    history:
      "From Plato’s tripartite soul to Spinoza’s conatus and modern consumer critique, desire remains a hinge between metaphysics and ethics.",
    faq: [
      {
        question: "What is desire in philosophy?",
        answer:
          "It is a directed wanting that can motivate action—evaluated as natural, distorted, or educable depending on the school.",
      },
      {
        question: "Should we eliminate desire?",
        answer:
          "Some ascetic ideals aim at quieting craving; others seek ordered or enlightened desire rather than elimination.",
      },
      {
        question: "Where are philosophy quotes about desire?",
        answer:
          "This page gathers English passages on appetite, longing, and self-mastery.",
      },
    ],
  },
  Power: {
    intro:
      "Power is the capacity to affect others and to shape what counts as possible—central to politics and ethics.",
    overview:
      "Philosophers analyze domination, authority, freedom, and the micro-politics of everyday life. Power can enable justice or crush it.",
    history:
      "From classical statecraft and Legalism to modern liberalism, Marxism, and Foucaultian analysis, the theme links institutions to the soul.",
    faq: [
      {
        question: "What is power in philosophy?",
        answer:
          "It is the ability to produce effects—especially over people—through force, authority, ideology, or structure.",
      },
      {
        question: "Is power always bad?",
        answer:
          "No. Many theories distinguish empowering capacity from domination, and ask how power can be accountable.",
      },
      {
        question: "Where are philosophy quotes about power?",
        answer:
          "Browse this theme and related pages on politics, freedom, and responsibility.",
      },
    ],
  },
  Order: {
    intro:
      "Order names cosmos, ritual, law, and the patterned stability that makes shared life possible—or oppressive.",
    overview:
      "Philosophers ask whether order is discovered in nature, imposed by rulers, or cultivated through custom. Chaos and creativity stand as its counterparts.",
    history:
      "Cosmological order, Confucian ritual order, and modern bureaucratic order show how the same word travels across metaphysics and politics.",
    faq: [
      {
        question: "What is order in philosophy?",
        answer:
          "It can mean natural regularity, social arrangement, or moral harmony—context decides which sense is meant.",
      },
      {
        question: "Is order always desirable?",
        answer:
          "Not if it encodes injustice; critical philosophies ask whose order and at what cost.",
      },
      {
        question: "Where are philosophy quotes about order?",
        answer:
          "This theme collects passages on harmony, law, measure, and structure.",
      },
    ],
  },
  Society: {
    intro:
      "Society is the web of institutions, customs, and mutual expectations in which individual freedom takes shape.",
    overview:
      "Social philosophy asks how individuals and collectives constitute each other, and what justice requires of shared life.",
    history:
      "From classical politics and Confucian relational ethics to contract theory, sociology, and critical theory, society is both fact and project.",
    faq: [
      {
        question: "What is society in philosophy?",
        answer:
          "It is the organized coexistence of persons through norms, institutions, and shared meanings.",
      },
      {
        question: "Do individuals exist before society?",
        answer:
          "Some theories start from individuals; others hold that persons are formed within social relations from the start.",
      },
      {
        question: "Where are philosophy quotes about society?",
        answer:
          "Browse this theme alongside politics, justice, and power.",
      },
    ],
  },
  Experience: {
    intro:
      "Experience is the lived encounter with world and self—foundation or limit for knowledge, art, and ethics.",
    overview:
      "Empiricists treat experience as the source of ideas; phenomenologists describe its structure; pragmatists treat it as experimental and revisable.",
    history:
      "From Aristotelian aisthesis to Locke, Hume, Dewey, and phenomenology, experience is a battleground for epistemology and metaphysics.",
    faq: [
      {
        question: "What is experience in philosophy?",
        answer:
          "It is the first-person undergoing of sensations, thoughts, and situations—interpreted differently across schools.",
      },
      {
        question: "Is all knowledge from experience?",
        answer:
          "Empiricists lean yes; rationalists and others defend a priori elements or innate structures.",
      },
      {
        question: "Where are philosophy quotes about experience?",
        answer:
          "This page gathers English passages on perception, habit, and lived life.",
      },
    ],
  },
  Humanity: {
    intro:
      "Humanity names both the species and the moral quality of being humane—bridging anthropology and ethics.",
    overview:
      "Philosophers ask what makes humans distinctive, what we owe one another as humans, and how “humanity” can include or exclude.",
    history:
      "Confucian ren, Renaissance humanism, Enlightenment rights, and critiques of humanism from various directions keep the theme contested.",
    faq: [
      {
        question: "What is humanity in philosophy?",
        answer:
          "It can mean the human species, shared capacities, or the virtue of humane regard for others.",
      },
      {
        question: "Is human nature fixed?",
        answer:
          "Debates range from fixed essences to historical and cultural formation of human possibilities.",
      },
      {
        question: "Where are philosophy quotes about humanity?",
        answer:
          "Browse this theme and related pages on dignity, society, and ethics.",
      },
    ],
  },
  Choice: {
    intro:
      "Choice is the hinge of agency: selecting among options under reasons, constraints, and uncertainty.",
    overview:
      "Free will, decision theory, and existential choice all ask how choosing is possible and what makes a choice one’s own.",
    history:
      "Aristotelian prohairesis, Stoic assent, existential commitment, and modern behavioral science offer overlapping vocabularies.",
    faq: [
      {
        question: "What is choice in philosophy?",
        answer:
          "It is the act of selecting among alternatives, often tied to responsibility and practical reason.",
      },
      {
        question: "Are we free to choose?",
        answer:
          "Compatibilists, libertarians, and determinists disagree; many still affirm practical responsibility.",
      },
      {
        question: "Where are philosophy quotes about choice?",
        answer:
          "See this theme alongside freedom, action, and responsibility.",
      },
    ],
  },
  Inquiry: {
    intro:
      "Inquiry is the disciplined pursuit of better questions and answers—philosophy as method rather than dogma.",
    overview:
      "Socratic elenchus, scientific method, and pragmatist experimentalism treat inquiry as self-correcting. The ethics of inquiry asks for intellectual honesty.",
    history:
      "Academies, laboratories, and public debate inherit ideals of inquiry that philosophy both practices and criticizes.",
    faq: [
      {
        question: "What is inquiry in philosophy?",
        answer:
          "It is the process of investigating questions with reasons, evidence, and willingness to revise belief.",
      },
      {
        question: "How does philosophical inquiry differ from science?",
        answer:
          "It often targets conceptual and normative questions science presupposes, while remaining continuous with scientific curiosity.",
      },
      {
        question: "Where are philosophy quotes about inquiry?",
        answer:
          "This theme collects passages on questioning, wonder, and the examined life.",
      },
    ],
  },
  Dignity: {
    intro:
      "Dignity names the worth that persons claim simply as persons—and the respect that worth demands.",
    overview:
      "Kantian and rights-based ethics make dignity central; other traditions speak of face, honor, or Buddha-nature. Politics asks how institutions honor or violate dignity.",
    history:
      "From Stoic cosmopolitanism and Confucian respect to modern human rights, dignity bridges ethics and law.",
    faq: [
      {
        question: "What is dignity in philosophy?",
        answer:
          "It is the intrinsic or status-based worth of persons that grounds respect and limits on treatment.",
      },
      {
        question: "Is dignity the same as honor?",
        answer:
          "Honor is often social and hierarchical; dignity is frequently claimed as equal and inalienable—though histories intertwine.",
      },
      {
        question: "Where are philosophy quotes about dignity?",
        answer:
          "Browse this theme and related pages on humanity, justice, and morality.",
      },
    ],
  },
  Education: {
    intro:
      "Education appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat education as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Mary Wollstonecraft and Plato), education is framed through Platonism and Renaissance Humanism. Some passages define education; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of education travel through Greek and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about education?",
        answer:
          "They disagreed in productive ways. In this archive, Mary Wollstonecraft, Plato, and related voices treat education as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about education?",
        answer:
          "This theme page gathers 19 verified English quotations tagged Education, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about education?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about education, not a substitute for the surrounding text.",
      },
    ],
  },
  Ethics: {
    intro:
      "Ethics appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat ethics as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Kwame Anthony Appiah and Simone de Beauvoir), ethics is framed through Africana Philosophy and Existentialism. Some passages define ethics; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of ethics travel through Chinese, Africana and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about ethics?",
        answer:
          "They disagreed in productive ways. In this archive, Kwame Anthony Appiah, Simone de Beauvoir, and related voices treat ethics as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about ethics?",
        answer:
          "This theme page gathers 18 verified English quotations tagged Ethics, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about ethics?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about ethics, not a substitute for the surrounding text.",
      },
    ],
  },
  Method: {
    intro:
      "Method appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat method as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably William of Ockham and Kwasi Wiredu), method is framed through Africana Philosophy and Scholasticism. Some passages define method; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of method travel through Islamic and Africana traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about method?",
        answer:
          "They disagreed in productive ways. In this archive, William of Ockham, Kwasi Wiredu, and related voices treat method as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about method?",
        answer:
          "This theme page gathers 16 verified English quotations tagged Method, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about method?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about method, not a substitute for the surrounding text.",
      },
    ],
  },
  Critique: {
    intro:
      "Critique appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat critique as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Paulin Hountondji and Aimé Césaire), critique is framed through Africana Philosophy and Critical Rationalism. Some passages define critique; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of critique travel through Africana and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about critique?",
        answer:
          "They disagreed in productive ways. In this archive, Paulin Hountondji, Aimé Césaire, and related voices treat critique as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about critique?",
        answer:
          "This theme page gathers 15 verified English quotations tagged Critique, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about critique?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about critique, not a substitute for the surrounding text.",
      },
    ],
  },
  Language: {
    intro:
      "Language appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat language as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Ludwig Wittgenstein and Kwasi Wiredu), language is framed through Analytic Philosophy and Africana Philosophy. Some passages define language; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of language travel through Africana and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about language?",
        answer:
          "They disagreed in productive ways. In this archive, Ludwig Wittgenstein, Kwasi Wiredu, and related voices treat language as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about language?",
        answer:
          "This theme page gathers 15 verified English quotations tagged Language, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about language?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about language, not a substitute for the surrounding text.",
      },
    ],
  },
  Being: {
    intro:
      "Being appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat being as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Paul Tillich and Avicenna), being is framed through Africana Philosophy and Religious Existentialism. Some passages define being; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of being travel through Islamic, Africana and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about being?",
        answer:
          "They disagreed in productive ways. In this archive, Paul Tillich, Avicenna, and related voices treat being as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about being?",
        answer:
          "This theme page gathers 14 verified English quotations tagged Being, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about being?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about being, not a substitute for the surrounding text.",
      },
    ],
  },
  Politics: {
    intro:
      "Politics appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat politics as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Plato and Kwasi Wiredu), politics is framed through Africana Philosophy and Platonism. Some passages define politics; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of politics travel through Greek, Islamic and Africana traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about politics?",
        answer:
          "They disagreed in productive ways. In this archive, Plato, Kwasi Wiredu, and related voices treat politics as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about politics?",
        answer:
          "This theme page gathers 14 verified English quotations tagged Politics, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about politics?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about politics, not a substitute for the surrounding text.",
      },
    ],
  },
  Attention: {
    intro:
      "Attention appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat attention as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Simone Weil and Iris Murdoch), attention is framed through Religious Existentialism and Platonic Moral Philosophy. Some passages define attention; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of attention travel through Greek and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about attention?",
        answer:
          "They disagreed in productive ways. In this archive, Simone Weil, Iris Murdoch, and related voices treat attention as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about attention?",
        answer:
          "This theme page gathers 13 verified English quotations tagged Attention, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about attention?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about attention, not a substitute for the surrounding text.",
      },
    ],
  },
  Community: {
    intro:
      "Community appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat community as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Aristotle and Kwasi Wiredu), community is framed through Africana Philosophy and Peripatetic School. Some passages define community; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of community travel through Greek and Africana traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about community?",
        answer:
          "They disagreed in productive ways. In this archive, Aristotle, Kwasi Wiredu, and related voices treat community as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about community?",
        answer:
          "This theme page gathers 13 verified English quotations tagged Community, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about community?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about community, not a substitute for the surrounding text.",
      },
    ],
  },
  Humility: {
    intro:
      "Humility appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat humility as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Confucius and Kwame Anthony Appiah), humility is framed through Stoicism and Confucianism. Some passages define humility; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of humility travel through Greek, Chinese and Africana traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about humility?",
        answer:
          "They disagreed in productive ways. In this archive, Confucius, Kwame Anthony Appiah, and related voices treat humility as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about humility?",
        answer:
          "This theme page gathers 12 verified English quotations tagged Humility, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about humility?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about humility, not a substitute for the surrounding text.",
      },
    ],
  },
  Otherness: {
    intro:
      "Otherness appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat otherness as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Frantz Fanon and Kwame Anthony Appiah), otherness is framed through Africana Philosophy and Platonic Moral Philosophy. Some passages define otherness; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of otherness travel through Greek, Africana and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about otherness?",
        answer:
          "They disagreed in productive ways. In this archive, Frantz Fanon, Kwame Anthony Appiah, and related voices treat otherness as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about otherness?",
        answer:
          "This theme page gathers 12 verified English quotations tagged Otherness, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about otherness?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about otherness, not a substitute for the surrounding text.",
      },
    ],
  },
  Cultivation: {
    intro:
      "Cultivation appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat cultivation as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Mencius and Al-Ghazali), cultivation is framed through Confucianism and Islamic Philosophy. Some passages define cultivation; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of cultivation travel through Greek, Chinese and Islamic traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about cultivation?",
        answer:
          "They disagreed in productive ways. In this archive, Mencius, Al-Ghazali, and related voices treat cultivation as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about cultivation?",
        answer:
          "This theme page gathers 11 verified English quotations tagged Cultivation, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about cultivation?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about cultivation, not a substitute for the surrounding text.",
      },
    ],
  },
  Good: {
    intro:
      "Good appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat good as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Dhammapada and Philippa Foot), good is framed through Early Buddhism and Analytic Philosophy. Some passages define good; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of good travel through Greek, Indian and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about good?",
        answer:
          "They disagreed in productive ways. In this archive, Dhammapada, Philippa Foot, and related voices treat good as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about good?",
        answer:
          "This theme page gathers 11 verified English quotations tagged Good, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about good?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about good, not a substitute for the surrounding text.",
      },
    ],
  },
  Character: {
    intro:
      "Character appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat character as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Arthur Schopenhauer and Heraclitus), character is framed through Confucianism and Voluntarism. Some passages define character; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of character travel through Greek and Chinese traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about character?",
        answer:
          "They disagreed in productive ways. In this archive, Arthur Schopenhauer, Heraclitus, and related voices treat character as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about character?",
        answer:
          "This theme page gathers 10 verified English quotations tagged Character, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about character?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about character, not a substitute for the surrounding text.",
      },
    ],
  },
  Understanding: {
    intro:
      "Understanding appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat understanding as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably G. W. F. Hegel and Baruch Spinoza), understanding is framed through German Idealism and Rationalism. Some passages define understanding; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of understanding travel through European modern and modern European traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about understanding?",
        answer:
          "They disagreed in productive ways. In this archive, G. W. F. Hegel, Baruch Spinoza, and related voices treat understanding as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about understanding?",
        answer:
          "This theme page gathers 10 verified English quotations tagged Understanding, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about understanding?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about understanding, not a substitute for the surrounding text.",
      },
    ],
  },
  Dialogue: {
    intro:
      "Dialogue appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat dialogue as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Kwame Anthony Appiah and Plato), dialogue is framed through Africana Philosophy and Platonism. Some passages define dialogue; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of dialogue travel through Greek and Africana traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about dialogue?",
        answer:
          "They disagreed in productive ways. In this archive, Kwame Anthony Appiah, Plato, and related voices treat dialogue as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about dialogue?",
        answer:
          "This theme page gathers 9 verified English quotations tagged Dialogue, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about dialogue?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about dialogue, not a substitute for the surrounding text.",
      },
    ],
  },
  Equality: {
    intro:
      "Equality appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat equality as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Mary Wollstonecraft and John Locke), equality is framed through Feminist Philosophy and British Empiricism. Some passages define equality; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of equality travel through European modern and modern European traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about equality?",
        answer:
          "They disagreed in productive ways. In this archive, Mary Wollstonecraft, John Locke, and related voices treat equality as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about equality?",
        answer:
          "This theme page gathers 9 verified English quotations tagged Equality, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about equality?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about equality, not a substitute for the surrounding text.",
      },
    ],
  },
  Existence: {
    intro:
      "Existence appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat existence as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Søren Kierkegaard and Henri Bergson), existence is framed through Existentialism and Process Philosophy. Some passages define existence; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of existence travel through European modern and modern European traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about existence?",
        answer:
          "They disagreed in productive ways. In this archive, Søren Kierkegaard, Henri Bergson, and related voices treat existence as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about existence?",
        answer:
          "This theme page gathers 9 verified English quotations tagged Existence, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about existence?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about existence, not a substitute for the surrounding text.",
      },
    ],
  },
  Faith: {
    intro:
      "Faith appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat faith as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Anselm of Canterbury and Averroes), faith is framed through Islamic Philosophy and Scholasticism. Some passages define faith; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of faith travel through Indian and Islamic traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about faith?",
        answer:
          "They disagreed in productive ways. In this archive, Anselm of Canterbury, Averroes, and related voices treat faith as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about faith?",
        answer:
          "This theme page gathers 9 verified English quotations tagged Faith, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about faith?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about faith, not a substitute for the surrounding text.",
      },
    ],
  },
  Friendship: {
    intro:
      "Friendship appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat friendship as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Aristotle and Epicurus), friendship is framed through Peripatetic School and Stoicism. Some passages define friendship; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of friendship travel through Greek and modern European traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about friendship?",
        answer:
          "They disagreed in productive ways. In this archive, Aristotle, Epicurus, and related voices treat friendship as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about friendship?",
        answer:
          "This theme page gathers 9 verified English quotations tagged Friendship, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about friendship?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about friendship, not a substitute for the surrounding text.",
      },
    ],
  },
  God: {
    intro:
      "God appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat god as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Maimonides and Saadia Gaon), god is framed through Jewish Rationalism and Islamic Philosophy. Some passages define god; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of god travel through Islamic, Jewish and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about god?",
        answer:
          "They disagreed in productive ways. In this archive, Maimonides, Saadia Gaon, and related voices treat god as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about god?",
        answer:
          "This theme page gathers 9 verified English quotations tagged God, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about god?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about god, not a substitute for the surrounding text.",
      },
    ],
  },
  Limits: {
    intro:
      "Limits appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat limits as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Ludwig Wittgenstein and John Stuart Mill), limits is framed through Analytic Philosophy and Utilitarianism. Some passages define limits; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of limits travel through Chinese and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about limits?",
        answer:
          "They disagreed in productive ways. In this archive, Ludwig Wittgenstein, John Stuart Mill, and related voices treat limits as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about limits?",
        answer:
          "This theme page gathers 9 verified English quotations tagged Limits, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about limits?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about limits, not a substitute for the surrounding text.",
      },
    ],
  },
  Meaning: {
    intro:
      "Meaning appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat meaning as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Viktor Frankl and Ludwig Wittgenstein), meaning is framed through Logotherapy and Analytic Philosophy. Some passages define meaning; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of meaning travel through Japanese and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about meaning?",
        answer:
          "They disagreed in productive ways. In this archive, Viktor Frankl, Ludwig Wittgenstein, and related voices treat meaning as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about meaning?",
        answer:
          "This theme page gathers 9 verified English quotations tagged Meaning, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about meaning?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about meaning, not a substitute for the surrounding text.",
      },
    ],
  },
  Autonomy: {
    intro:
      "Autonomy appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat autonomy as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Seneca and Mary Wollstonecraft), autonomy is framed through Stoicism and Feminist Philosophy. Some passages define autonomy; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of autonomy travel through Greek and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about autonomy?",
        answer:
          "They disagreed in productive ways. In this archive, Seneca, Mary Wollstonecraft, and related voices treat autonomy as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about autonomy?",
        answer:
          "This theme page gathers 8 verified English quotations tagged Autonomy, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about autonomy?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about autonomy, not a substitute for the surrounding text.",
      },
    ],
  },
  Change: {
    intro:
      "Change appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat change as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Heraclitus and Marcus Aurelius), change is framed through Stoicism and Process Philosophy. Some passages define change; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of change travel through Greek and modern European traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about change?",
        answer:
          "They disagreed in productive ways. In this archive, Heraclitus, Marcus Aurelius, and related voices treat change as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about change?",
        answer:
          "This theme page gathers 8 verified English quotations tagged Change, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about change?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about change, not a substitute for the surrounding text.",
      },
    ],
  },
  Growth: {
    intro:
      "Growth appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat growth as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Friedrich Nietzsche and Aristotle), growth is framed through Confucianism and Philosophy of Will. Some passages define growth; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of growth travel through Greek and Chinese traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about growth?",
        answer:
          "They disagreed in productive ways. In this archive, Friedrich Nietzsche, Aristotle, and related voices treat growth as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about growth?",
        answer:
          "This theme page gathers 8 verified English quotations tagged Growth, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about growth?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about growth, not a substitute for the surrounding text.",
      },
    ],
  },
  Habit: {
    intro:
      "Habit appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat habit as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Aristotle and Marcus Aurelius), habit is framed through Peripatetic School and Stoicism. Some passages define habit; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of habit travel through Greek and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about habit?",
        answer:
          "They disagreed in productive ways. In this archive, Aristotle, Marcus Aurelius, and related voices treat habit as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about habit?",
        answer:
          "This theme page gathers 8 verified English quotations tagged Habit, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about habit?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about habit, not a substitute for the surrounding text.",
      },
    ],
  },
  Living: {
    intro:
      "Living appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat living as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Voltaire and Friedrich Nietzsche), living is framed through Political Liberalism and Philosophy of Will. Some passages define living; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of living travel through European modern and modern European traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about living?",
        answer:
          "They disagreed in productive ways. In this archive, Voltaire, Friedrich Nietzsche, and related voices treat living as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about living?",
        answer:
          "This theme page gathers 8 verified English quotations tagged Living, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about living?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about living, not a substitute for the surrounding text.",
      },
    ],
  },
  Science: {
    intro:
      "Science appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat science as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Karl Popper and Avicenna), science is framed through Islamic Philosophy and Critical Rationalism. Some passages define science; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of science travel through Islamic and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about science?",
        answer:
          "They disagreed in productive ways. In this archive, Karl Popper, Avicenna, and related voices treat science as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about science?",
        answer:
          "This theme page gathers 8 verified English quotations tagged Science, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about science?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about science, not a substitute for the surrounding text.",
      },
    ],
  },
  Way: {
    intro:
      "Way appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat way as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Laozi and Confucius), way is framed through Confucianism and Daoism. Some passages define way; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of way travel through Chinese, Indian and Japanese traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about way?",
        answer:
          "They disagreed in productive ways. In this archive, Laozi, Confucius, and related voices treat way as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about way?",
        answer:
          "This theme page gathers 8 verified English quotations tagged Way, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about way?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about way, not a substitute for the surrounding text.",
      },
    ],
  },
  Benevolence: {
    intro:
      "Benevolence appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat benevolence as a problem of judgment, practice, or explanation.",
    overview:
      "Across 3 recurring voices here (notably Confucius and Mencius), benevolence is framed through Confucianism and Neo-Confucianism. Some passages define benevolence; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of benevolence travel through Chinese and modern European traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about benevolence?",
        answer:
          "They disagreed in productive ways. In this archive, Confucius, Mencius, and related voices treat benevolence as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about benevolence?",
        answer:
          "This theme page gathers 7 verified English quotations tagged Benevolence, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about benevolence?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about benevolence, not a substitute for the surrounding text.",
      },
    ],
  },
  Creation: {
    intro:
      "Creation appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat creation as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Friedrich Nietzsche and Henri Bergson), creation is framed through Philosophy of Will and Process Philosophy. Some passages define creation; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of creation travel through Chinese and modern European traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about creation?",
        answer:
          "They disagreed in productive ways. In this archive, Friedrich Nietzsche, Henri Bergson, and related voices treat creation as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about creation?",
        answer:
          "This theme page gathers 7 verified English quotations tagged Creation, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about creation?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about creation, not a substitute for the surrounding text.",
      },
    ],
  },
  Eternity: {
    intro:
      "Eternity appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat eternity as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Plato and Baruch Spinoza), eternity is framed through Platonism and Rationalism. Some passages define eternity; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of eternity travel through Greek and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about eternity?",
        answer:
          "They disagreed in productive ways. In this archive, Plato, Baruch Spinoza, and related voices treat eternity as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about eternity?",
        answer:
          "This theme page gathers 7 verified English quotations tagged Eternity, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about eternity?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about eternity, not a substitute for the surrounding text.",
      },
    ],
  },
  Hope: {
    intro:
      "Hope appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat hope as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Albert Camus and Rabindranath Tagore), hope is framed through Philosophy of the Absurd and Indian Classical Philosophy. Some passages define hope; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of hope travel through Indian and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about hope?",
        answer:
          "They disagreed in productive ways. In this archive, Albert Camus, Rabindranath Tagore, and related voices treat hope as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about hope?",
        answer:
          "This theme page gathers 7 verified English quotations tagged Hope, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about hope?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about hope, not a substitute for the surrounding text.",
      },
    ],
  },
  Judgment: {
    intro:
      "Judgment appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat judgment as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Epictetus and Marcus Aurelius), judgment is framed through Stoicism and Political Phenomenology. Some passages define judgment; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of judgment travel through Greek and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about judgment?",
        answer:
          "They disagreed in productive ways. In this archive, Epictetus, Marcus Aurelius, and related voices treat judgment as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about judgment?",
        answer:
          "This theme page gathers 7 verified English quotations tagged Judgment, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about judgment?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about judgment, not a substitute for the surrounding text.",
      },
    ],
  },
  Relation: {
    intro:
      "Relation appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat relation as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Martin Buber and G. W. F. Hegel), relation is framed through Dialogical Philosophy and German Idealism. Some passages define relation; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of relation travel through European modern and modern European traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about relation?",
        answer:
          "They disagreed in productive ways. In this archive, Martin Buber, G. W. F. Hegel, and related voices treat relation as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about relation?",
        answer:
          "This theme page gathers 7 verified English quotations tagged Relation, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about relation?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about relation, not a substitute for the surrounding text.",
      },
    ],
  },
  "Self-examination": {
    intro:
      "Self-examination appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat self-examination as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Confucius and Socrates), self-examination is framed through Confucianism and Socratic School. Some passages define self-examination; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of self-examination travel through Greek and Chinese traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about self-examination?",
        answer:
          "They disagreed in productive ways. In this archive, Confucius, Socrates, and related voices treat self-examination as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about self-examination?",
        answer:
          "This theme page gathers 7 verified English quotations tagged Self-examination, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about self-examination?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about self-examination, not a substitute for the surrounding text.",
      },
    ],
  },
  Soul: {
    intro:
      "Soul appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat soul as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Plato and Avicenna), soul is framed through Islamic Philosophy and Platonism. Some passages define soul; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of soul travel through Greek and Islamic traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about soul?",
        answer:
          "They disagreed in productive ways. In this archive, Plato, Avicenna, and related voices treat soul as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about soul?",
        answer:
          "This theme page gathers 7 verified English quotations tagged Soul, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about soul?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about soul, not a substitute for the surrounding text.",
      },
    ],
  },
  Spirit: {
    intro:
      "Spirit appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat spirit as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Simone Weil and Bertrand Russell), spirit is framed through Religious Existentialism and Analytic Philosophy. Some passages define spirit; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of spirit travel through European modern and modern European traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about spirit?",
        answer:
          "They disagreed in productive ways. In this archive, Simone Weil, Bertrand Russell, and related voices treat spirit as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about spirit?",
        answer:
          "This theme page gathers 7 verified English quotations tagged Spirit, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about spirit?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about spirit, not a substitute for the surrounding text.",
      },
    ],
  },
  Wholeness: {
    intro:
      "Wholeness appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat wholeness as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably G. W. F. Hegel and Heraclitus), wholeness is framed through German Idealism and Pre-Socratic. Some passages define wholeness; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of wholeness travel through Greek and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about wholeness?",
        answer:
          "They disagreed in productive ways. In this archive, G. W. F. Hegel, Heraclitus, and related voices treat wholeness as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about wholeness?",
        answer:
          "This theme page gathers 7 verified English quotations tagged Wholeness, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about wholeness?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about wholeness, not a substitute for the surrounding text.",
      },
    ],
  },
  Will: {
    intro:
      "Will appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat will as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Socrates and Augustine of Hippo), will is framed through Socratic School and Patristic Philosophy. Some passages define will; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of will travel through Greek and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about will?",
        answer:
          "They disagreed in productive ways. In this archive, Socrates, Augustine of Hippo, and related voices treat will as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about will?",
        answer:
          "This theme page gathers 7 verified English quotations tagged Will, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about will?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about will, not a substitute for the surrounding text.",
      },
    ],
  },
  Authenticity: {
    intro:
      "Authenticity appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat authenticity as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Søren Kierkegaard and Ralph Waldo Emerson), authenticity is framed through Transcendentalism and Existentialism. Some passages define authenticity; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of authenticity travel through European modern and modern European traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about authenticity?",
        answer:
          "They disagreed in productive ways. In this archive, Søren Kierkegaard, Ralph Waldo Emerson, and related voices treat authenticity as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about authenticity?",
        answer:
          "This theme page gathers 6 verified English quotations tagged Authenticity, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about authenticity?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about authenticity, not a substitute for the surrounding text.",
      },
    ],
  },
  Awakening: {
    intro:
      "Awakening appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat awakening as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Epictetus and Augustine of Hippo), awakening is framed through Vedanta and Stoicism. Some passages define awakening; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of awakening travel through Greek and Indian traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about awakening?",
        answer:
          "They disagreed in productive ways. In this archive, Epictetus, Augustine of Hippo, and related voices treat awakening as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about awakening?",
        answer:
          "This theme page gathers 6 verified English quotations tagged Awakening, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about awakening?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about awakening, not a substitute for the surrounding text.",
      },
    ],
  },
  Certainty: {
    intro:
      "Certainty appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat certainty as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably René Descartes and John Dewey), certainty is framed through Rationalism and Pragmatism. Some passages define certainty; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of certainty travel through European modern and modern European traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about certainty?",
        answer:
          "They disagreed in productive ways. In this archive, René Descartes, John Dewey, and related voices treat certainty as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about certainty?",
        answer:
          "This theme page gathers 6 verified English quotations tagged Certainty, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about certainty?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about certainty, not a substitute for the surrounding text.",
      },
    ],
  },
  Fear: {
    intro:
      "Fear appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat fear as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Bertrand Russell and Seneca), fear is framed through Analytic Philosophy and Stoicism. Some passages define fear; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of fear travel through Greek and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about fear?",
        answer:
          "They disagreed in productive ways. In this archive, Bertrand Russell, Seneca, and related voices treat fear as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about fear?",
        answer:
          "This theme page gathers 6 verified English quotations tagged Fear, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about fear?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about fear, not a substitute for the surrounding text.",
      },
    ],
  },
  "Human Nature": {
    intro:
      "Human Nature appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat human nature as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Aristotle and Blaise Pascal), human nature is framed through Peripatetic School and Christian Existential Precursor. Some passages define human nature; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of human nature travel through Greek and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about human nature?",
        answer:
          "They disagreed in productive ways. In this archive, Aristotle, Blaise Pascal, and related voices treat human nature as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about human nature?",
        answer:
          "This theme page gathers 6 verified English quotations tagged Human Nature, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about human nature?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about human nature, not a substitute for the surrounding text.",
      },
    ],
  },
  Sincerity: {
    intro:
      "Sincerity appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat sincerity as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably The Doctrine of the Mean and Mencius), sincerity is framed through Confucianism and Cynicism. Some passages define sincerity; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of sincerity travel through Greek, Chinese and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about sincerity?",
        answer:
          "They disagreed in productive ways. In this archive, The Doctrine of the Mean, Mencius, and related voices treat sincerity as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about sincerity?",
        answer:
          "This theme page gathers 6 verified English quotations tagged Sincerity, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about sincerity?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about sincerity, not a substitute for the surrounding text.",
      },
    ],
  },
  Affirmation: {
    intro:
      "Affirmation appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat affirmation as a problem of judgment, practice, or explanation.",
    overview:
      "Across 3 recurring voices here (notably Friedrich Nietzsche and Yunmen Wenyan), affirmation is framed through Philosophy of Will and Zen Buddhism. Some passages define affirmation; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of affirmation travel through Indian, Japanese and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about affirmation?",
        answer:
          "They disagreed in productive ways. In this archive, Friedrich Nietzsche, Yunmen Wenyan, and related voices treat affirmation as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about affirmation?",
        answer:
          "This theme page gathers 5 verified English quotations tagged Affirmation, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about affirmation?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about affirmation, not a substitute for the surrounding text.",
      },
    ],
  },
  Contentment: {
    intro:
      "Contentment appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat contentment as a problem of judgment, practice, or explanation.",
    overview:
      "Across 3 recurring voices here (notably Epicurus and Laozi), contentment is framed through Epicureanism and Daoism. Some passages define contentment; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of contentment travel through Greek and Chinese traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about contentment?",
        answer:
          "They disagreed in productive ways. In this archive, Epicurus, Laozi, and related voices treat contentment as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about contentment?",
        answer:
          "This theme page gathers 5 verified English quotations tagged Contentment, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about contentment?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about contentment, not a substitute for the surrounding text.",
      },
    ],
  },
  Endurance: {
    intro:
      "Endurance appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat endurance as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Bhagavad Gita and Viktor Frankl), endurance is framed through Indian Classical Philosophy and Logotherapy. Some passages define endurance; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of endurance travel through Chinese and Indian traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about endurance?",
        answer:
          "They disagreed in productive ways. In this archive, Bhagavad Gita, Viktor Frankl, and related voices treat endurance as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about endurance?",
        answer:
          "This theme page gathers 5 verified English quotations tagged Endurance, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about endurance?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about endurance, not a substitute for the surrounding text.",
      },
    ],
  },
  Enlightenment: {
    intro:
      "Enlightenment appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat enlightenment as a problem of judgment, practice, or explanation.",
    overview:
      "Across 3 recurring voices here (notably Immanuel Kant and Voltaire), enlightenment is framed through Political Liberalism and Critical Philosophy. Some passages define enlightenment; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of enlightenment travel through Greek and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about enlightenment?",
        answer:
          "They disagreed in productive ways. In this archive, Immanuel Kant, Voltaire, and related voices treat enlightenment as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about enlightenment?",
        answer:
          "This theme page gathers 5 verified English quotations tagged Enlightenment, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about enlightenment?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about enlightenment, not a substitute for the surrounding text.",
      },
    ],
  },
  Equanimity: {
    intro:
      "Equanimity appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat equanimity as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Bhagavad Gita and Baruch Spinoza), equanimity is framed through Indian Classical Philosophy and Rationalism. Some passages define equanimity; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of equanimity travel through Chinese, Indian and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about equanimity?",
        answer:
          "They disagreed in productive ways. In this archive, Bhagavad Gita, Baruch Spinoza, and related voices treat equanimity as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about equanimity?",
        answer:
          "This theme page gathers 5 verified English quotations tagged Equanimity, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about equanimity?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about equanimity, not a substitute for the surrounding text.",
      },
    ],
  },
  Fate: {
    intro:
      "Fate appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat fate as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Epictetus and Seneca), fate is framed through Stoicism and Philosophy of Will. Some passages define fate; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of fate travel through Greek and European modern traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about fate?",
        answer:
          "They disagreed in productive ways. In this archive, Epictetus, Seneca, and related voices treat fate as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about fate?",
        answer:
          "This theme page gathers 5 verified English quotations tagged Fate, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about fate?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about fate, not a substitute for the surrounding text.",
      },
    ],
  },
  Gentleman: {
    intro:
      "Gentleman appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat gentleman as a problem of judgment, practice, or explanation.",
    overview:
      "Across 2 recurring voices here (notably Confucius and The Book of Changes), gentleman is framed through Confucianism. Some passages define gentleman; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of gentleman travel through Chinese and modern European traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about gentleman?",
        answer:
          "They disagreed in productive ways. In this archive, Confucius, The Book of Changes, and related voices treat gentleman as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about gentleman?",
        answer:
          "This theme page gathers 5 verified English quotations tagged Gentleman, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about gentleman?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about gentleman, not a substitute for the surrounding text.",
      },
    ],
  },
  Liberty: {
    intro:
      "Liberty appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat liberty as a problem of judgment, practice, or explanation.",
    overview:
      "Across 3 recurring voices here (notably John Stuart Mill and John Locke), liberty is framed through Utilitarianism and Political Liberalism. Some passages define liberty; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of liberty travel through European modern and modern European traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about liberty?",
        answer:
          "They disagreed in productive ways. In this archive, John Stuart Mill, John Locke, and related voices treat liberty as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about liberty?",
        answer:
          "This theme page gathers 5 verified English quotations tagged Liberty, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about liberty?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about liberty, not a substitute for the surrounding text.",
      },
    ],
  },
  Moderation: {
    intro:
      "Moderation appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat moderation as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Plato and Epicurus), moderation is framed through Platonism and Epicureanism. Some passages define moderation; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of moderation travel through Greek and modern European traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about moderation?",
        answer:
          "They disagreed in productive ways. In this archive, Plato, Epicurus, and related voices treat moderation as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about moderation?",
        answer:
          "This theme page gathers 5 verified English quotations tagged Moderation, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about moderation?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about moderation, not a substitute for the surrounding text.",
      },
    ],
  },
  Perseverance: {
    intro:
      "Perseverance appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat perseverance as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably Xunzi and Wang Guowei), perseverance is framed through Confucianism and Modern Chinese Thought. Some passages define perseverance; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of perseverance travel through Chinese and Jewish traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about perseverance?",
        answer:
          "They disagreed in productive ways. In this archive, Xunzi, Wang Guowei, and related voices treat perseverance as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about perseverance?",
        answer:
          "This theme page gathers 5 verified English quotations tagged Perseverance, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about perseverance?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about perseverance, not a substitute for the surrounding text.",
      },
    ],
  },
  Simplicity: {
    intro:
      "Simplicity appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat simplicity as a problem of judgment, practice, or explanation.",
    overview:
      "Across 3 recurring voices here (notably Henry David Thoreau and William of Ockham), simplicity is framed through Transcendentalism and Scholasticism. Some passages define simplicity; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of simplicity travel through Greek, Chinese, and modern European traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about simplicity?",
        answer:
          "They disagreed in productive ways. In this archive, Henry David Thoreau, William of Ockham, and related voices treat simplicity as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about simplicity?",
        answer:
          "This theme page gathers 5 verified English quotations tagged Simplicity, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about simplicity?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about simplicity, not a substitute for the surrounding text.",
      },
    ],
  },
  Thinking: {
    intro:
      "Thinking appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat thinking as a problem of judgment, practice, or explanation.",
    overview:
      "Across 2 recurring voices here (notably Hannah Arendt and Francis Bacon), thinking is framed through Political Phenomenology and Empiricism. Some passages define thinking; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of thinking travel through European modern and modern European traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about thinking?",
        answer:
          "They disagreed in productive ways. In this archive, Hannah Arendt, Francis Bacon, and related voices treat thinking as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about thinking?",
        answer:
          "This theme page gathers 5 verified English quotations tagged Thinking, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about thinking?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about thinking, not a substitute for the surrounding text.",
      },
    ],
  },
  Memory: {
    intro:
      "Memory appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat memory as a problem of judgment, practice, or explanation.",
    overview:
      "Across 4 recurring voices here (notably George Santayana and Dante Alighieri), memory is framed through Africana Philosophy and Naturalism. Some passages define memory; others warn how it fails; still others relocate it inside habit, community, or language.",
    history:
      "Discussions of memory travel through Africana and modern European traditions. Compare the quotations below with their school labels rather than forcing a single definition.",
    faq: [
      {
        question: "What did philosophers say about memory?",
        answer:
          "They disagreed in productive ways. In this archive, George Santayana, Dante Alighieri, and related voices treat memory as something to clarify, cultivate, or critique—not merely to celebrate.",
      },
      {
        question: "Where can I find philosophy quotes about memory?",
        answer:
          "This theme page gathers 4 verified English quotations tagged Memory, with links to thinkers and sources.",
      },
      {
        question: "How should I read quotes about memory?",
        answer:
          "Read the sentence, then check school and source. A compact line is an entry point into an argument about memory, not a substitute for the surrounding text.",
      },
    ],
  }
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
  ...traditionGuides,
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
    overview: `${name} is represented in Philosophy Defined through curated English quotations. In some cases the name denotes a historical thinker; in others it denotes a scripture, school text, or traditional attribution. School label in this archive: ${school}.`,
    ideas: `Recurring concerns in this selection include ${focus.join(", ") || "philosophical inquiry"}. Read each passage with its source note, then follow theme links to see how related thinkers frame the same questions.`,
    works: ["Attributed sources listed on quotation pages"],
    legacy: `Readers use ${name} as an entry point into ${school} and into cross-cultural comparison within this archive.`,
  };
}

/** Classical texts / traditions listed as “authors” in the corpus. */
export const TEXT_TRADITION_NAMES = new Set([
  "Bhagavad Gita",
  "Chandogya Upanisad",
  "Dhammapada",
  "Diamond Sutra",
  "Guanzi",
  "Talmudic tradition",
  "The Book of Changes",
  "The Doctrine of the Mean",
  "The Great Learning",
]);

export function isTextTradition(name: string) {
  return TEXT_TRADITION_NAMES.has(name);
}

export function defaultThemeGuide(name: string, count: number): ThemeGuide {
  return {
    intro: `Philosophy quotations on ${name.toLowerCase()}, gathered from verified English renderings across traditions.`,
    overview: `This theme page collects ${count} English passages that touch ${name.toLowerCase()} as a philosophical concern—whether as a concept to define, a value to pursue, or a problem to examine.`,
    history: `Related discussions appear across Greek, Chinese, Indian, Islamic, Jewish, Japanese, Africana, and modern European traditions. Use the quotations below as entry points, then follow thinker pages for fuller context.`,
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
