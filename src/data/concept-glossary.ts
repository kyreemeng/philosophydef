/**
 * A glossary of the technical terms this archive's quotations actually use.
 *
 * Why this layer exists: the archive's quotations are full of words that are
 * translations, and several of them are translations that have gone wrong in
 * English. *Eudaimonia* is not happiness, *arete* is not virtue in the moral
 * sense, *zhōngyōng* is not the golden mean, *Übermensch* is not superman, and
 * *ressentiment* is not resentment. A reader who meets one of those words in a
 * single quoted sentence has no way to find out that it is being used
 * technically — and a site whose stated differentiator is that it tells the
 * truth about its texts should not leave that gap open.
 *
 * Every entry therefore carries four things: the term in its own language, a
 * short gloss, a definition that says what the term does in the argument it
 * belongs to, and — where one exists — the specific reading that the term is
 * commonly given and that the sources do not support. The last of these is the
 * part a reader cannot get from a dictionary.
 *
 * Entries are attached to pages by `themes`, which are the same canonical theme
 * labels the corpus already uses. Each term also has one canonical page under
 * `/glossary/<slug>`, because a definition repeated on a hundred quotation
 * pages is a hundred pages carrying the same essay; the definition lives in one
 * place, and the quotation pages carry the one-line gloss and a link.
 */

import { slugify } from "../lib/content";

export type Concept = {
  /** Display form: the transliterated term, as it is usually written in English. */
  term: string;
  /**
   * URL segment, where the derived one is unusable.
   *
   * Most terms slug cleanly from their display form, so the field is absent.
   * It exists for the handful where it does not: “vital force (force vitale)”
   * derives to `vital-force-force-vitale`, which is not a URL anyone should
   * have to read.
   */
  slug?: string;
  /** Name of the language the term belongs to. */
  language: string;
  /** BCP-47 tag where a single tag is meaningful, for the `lang` attribute. */
  languageTag?: string;
  /** The term in its own script, when it has one. */
  original?: string;
  /** Literal sense, in a few words. */
  gloss: string;
  /** What the term does in its argument. Two to four sentences. */
  definition: string;
  /**
   * The common misreading, where there is a specific one worth naming.
   * This is usually a translation that has hardened into a false equivalence.
   */
  misreading?: string;
  /** Canonical theme names this term should surface under. */
  themes: string[];
};

export const concepts: Concept[] = [
  /* --------------------------------------------------------------------- *
   * Ancient Greek
   * --------------------------------------------------------------------- */
  {
    term: "aretē",
    language: "Ancient Greek",
    languageTag: "grc",
    original: "ἀρετή",
    gloss: "excellence, the fulfilment of a thing's own standard",
    definition:
      "Aretē is the quality by which something does well what it is for — the aretē of a knife is a good edge, the aretē of a horse is running well, and the aretē of a human being is living as a human being should. It is functional rather than moral in the first instance: the question is always 'excellent at what?', and the answer depends on what kind of thing is in question. Plato and Aristotle both work with this structure, which is why Aristotle's ethics begins from the human function rather than from rules.",
    misreading:
      "Rendered as 'virtue', and then read as sexual continence or as rule-following. In Homer, aretē belongs to warriors and to speed of foot; in Aristotle it covers courage and generosity but also wit and the capacity to hold a good conversation.",
    themes: ["Virtue", "Good", "Character", "Morality", "Practice"],
  },
  {
    term: "eudaimonia",
    language: "Ancient Greek",
    languageTag: "grc",
    original: "εὐδαιμονία",
    gloss: "living well and doing well; human flourishing",
    definition:
      "Eudaimonia names the condition of a life going well taken as a whole, not a feeling at a moment. Aristotle treats it as the highest good because it is what everything else is wanted for and it is not wanted for the sake of anything further. It is constituted by activity over a complete life rather than by a state one can be put into, which is why Aristotle says one swallow does not make a spring and cannot call a person happy until the life is over.",
    misreading:
      "Translated as 'happiness', which in modern English denotes a feeling of satisfaction. That reading makes eudaimonia something one can be given, and makes Aristotle's claim that it takes a whole life to assess it sound absurd. 'Flourishing' is the ordinary scholarly substitute, and it is chosen precisely to drop the feeling.",
    themes: ["Happiness", "Good", "Life", "Virtue", "Contentment", "Meaning", "Living"],
  },
  {
    term: "phronēsis",
    language: "Ancient Greek",
    languageTag: "grc",
    original: "φρόνησις",
    gloss: "practical wisdom; sound judgement about what to do",
    definition:
      "Phronēsis is the intellectual virtue that governs action: the capacity to see what a situation calls for and to deliberate well about it. Aristotle distinguishes it sharply from scientific knowledge, because its subject matter is particular and changeable and cannot be demonstrated; it is also distinguished from craft, because its end is acting well rather than producing a product. It cannot be forgotten the way a fact can, and Aristotle holds that it is inseparable from the moral virtues — one cannot be practically wise without being good, and cannot be good without judgement.",
    misreading:
      "Treated as cleverness or as general intelligence. Aristotle separates it from deinotēs, mere cleverness, on the ground that cleverness is equally available to someone aiming at the wrong end. Phronēsis includes knowing what the end is.",
    themes: ["Wisdom", "Judgment", "Practice", "Ethics", "Action", "Morality", "Reason"],
  },
  {
    term: "akrasia",
    language: "Ancient Greek",
    languageTag: "grc",
    original: "ἀκρασία",
    gloss: "acting against one's own better judgement",
    definition:
      "Akrasia is the condition of knowingly doing what one believes one should not. It is a problem for any theory that treats action as following from belief, which is why Socrates denied it was possible and argued that what looks like weakness of will is really a failure of knowledge in the moment. Aristotle, in Nicomachean Ethics VII, rejects the denial and gives a much more careful account: the incontinent person has the knowledge but does not use it, being moved by appetite or by a belief that holds only in the way a drunk person holds a proverb.",
    misreading:
      "Read as a failure of willpower in the modern sense. The Greek problem is not that a person lacks strength but that they hold two things at once, which is why the debate was about whether the state is even possible rather than about the remedy for it.",
    themes: ["Will", "Choice", "Practice", "Morality", "Reason", "Character"],
  },
  {
    term: "elenchus",
    language: "Ancient Greek",
    languageTag: "grc",
    original: "ἔλεγχος",
    gloss: "cross-examination; refutation by question and answer",
    definition:
      "The elenchus is the method of Plato's early dialogues: Socrates asks what a term means, takes the answer offered, and by further questions draws the respondent into contradicting it. The result is not a definition but a demonstration that the respondent did not know what they claimed to know. Whether it is a method for discovering truth or only for exposing false confidence is disputed, and the dialogues themselves leave the question open — most of them end without a positive answer.",
    misreading:
      "Read as a technique for winning arguments. Its distinguishing feature is that Socrates counts himself among the ignorant and that the outcome is usually aporia rather than victory.",
    themes: ["Inquiry", "Dialogue", "Wisdom", "Humility", "Method", "Knowledge"],
  },
  {
    term: "aporia",
    language: "Ancient Greek",
    languageTag: "grc",
    original: "ἀπορία",
    gloss: "impasse; the state of being unable to proceed either way",
    definition:
      "Aporia is the condition a dialogue reaches when every answer offered has been refuted and none remains. For Plato it is not a failure of the inquiry but a stage of it: the removal of the false confidence that prevented the question from being posed properly. In Aristotle the term is used more narrowly for a genuine puzzle that a theory must resolve, and in later philosophy of language the same word names the point at which a problem resists every available formulation.",
    themes: ["Inquiry", "Knowledge", "Limits", "Dialogue", "Wisdom", "Understanding"],
  },
  {
    term: "epistēmē and doxa",
    language: "Ancient Greek",
    languageTag: "grc",
    original: "ἐπιστήμη / δόξα",
    gloss: "knowledge and opinion",
    definition:
      "The distinction Plato draws in the Republic and the Theaetetus, and the one most of Western epistemology inherits. Doxa is a belief that could be otherwise and can be false; epistēmē is knowledge of what cannot be otherwise, and Plato requires that it be tied down by an account of why it is true. In the Republic the two are correlated with their objects — opinion with the changing sensible world, knowledge with the unchanging intelligible one — which is why Plato's theory of knowledge cannot be separated from his metaphysics. The Theaetetus works through and rejects three definitions of knowledge without settling on a fourth.",
    misreading:
      "Doxa is commonly translated 'opinion', which in English suggests a low-confidence personal view. The Greek term covers everything from a guess to a firm and well-grounded belief, and its opposite is the changelessness of the object, not the confidence of the holder.",
    themes: ["Knowledge", "Truth", "Certainty", "Understanding", "Experience", "Science"],
  },
  {
    term: "telos",
    language: "Ancient Greek",
    languageTag: "grc",
    original: "τέλος",
    gloss: "end, completion, the point of a thing",
    definition:
      "The telos of something is what its activity is directed toward, in the sense of what completes it rather than what merely stops it. Aristotle's natural philosophy is teleological throughout: an acorn's telos is the oak, not because the acorn aims at it consciously but because that is the form its development realises. Ethics inherits the same structure — eudaimonia is the telos of human life, and the virtues are organised around it. Modern science abandoned natural teleology, which is why Aristotle's biology reads so oddly to a contemporary reader, and why the reintroduction of teleological language into biology remains contested.",
    misreading:
      "Read as conscious purpose or intention. Aristotelian teleology does not require a mind that intends the end; it requires only a form that governs development. The confusion of these two is what makes 'argument from design' look like it follows from Aristotle when it does not.",
    themes: ["Nature", "Meaning", "Action", "Good", "Being", "Order", "Life"],
  },
  {
    term: "logos",
    language: "Ancient Greek",
    languageTag: "grc",
    original: "λόγος",
    gloss: "account, reason, speech, proportion",
    definition:
      "Logos carries a family of senses that English splits across several words: the reasoned account one gives of something, the faculty that produces it, the speech in which it is delivered, and — in Heraclitus and the Stoics — the rational order of the world itself. Heraclitus's logos is the principle by which things are what they are, and it is famously the thing people fail to understand even when they hear it. The Stoics took it as the active rational principle pervading matter. John's Gospel opens by identifying Christ with it, which is the route by which the term entered theology.",
    misreading:
      "Translated as 'word' alone, as in the Gospel prologue, or as 'logic' alone. Neither covers the political and rhetorical sense in which giving a logos of something means being able to defend it — the sense Socrates asks for and never quite receives.",
    themes: ["Reason", "Language", "Truth", "Order", "Being", "Understanding"],
  },
  {
    term: "nous",
    language: "Ancient Greek",
    languageTag: "grc",
    original: "νοῦς",
    gloss: "intellect; direct apprehension",
    definition:
      "Nous is the faculty by which first principles are grasped, as distinct from the discursive reasoning that works out their consequences. Aristotle says the principles of demonstration cannot themselves be demonstrated, so something must apprehend them immediately, and that is nous. Anaxagoras had made Nous the cosmic ordering principle, and Aristotle's unmoved mover is described as nous that thinks itself — the thought thinking thought, which is both the peak of his metaphysics and one of the most argued-about passages in the corpus.",
    misreading:
      "Treated as intuition in the modern psychological sense of a hunch. Nous is a cognitive achievement on the basis of training, not a feeling about what is probably true.",
    themes: ["Mind", "Reason", "Understanding", "Knowledge", "Being", "Thinking"],
  },
  {
    term: "ataraxia",
    language: "Ancient Greek",
    languageTag: "grc",
    original: "ἀταραξία",
    gloss: "undisturbedness; freedom from disturbance",
    definition:
      "Ataraxia is the goal of both Pyrrhonian scepticism and Epicureanism, reached by different routes. The Pyrrhonists hold that it follows from suspending judgement: once one stops deciding that things are good or bad in themselves, the agitation those judgements produce subsides of itself. Epicurus holds that it follows from a correct account of nature — that death is nothing to us, that the gods do not intervene, and that desires divide into the natural and the empty — together with the removal of fear.",
    misreading:
      "Read as tranquillity or as a pleasant mood. Both schools describe ataraxia as a by-product, not a state to be cultivated directly: in Pyrrhonism, trying to be undisturbed is itself a judgement about how things should be, and it reinstates the disturbance.",
    themes: ["Equanimity", "Contentment", "Desire", "Freedom", "Attention"],
  },
  {
    term: "epochē",
    language: "Ancient Greek",
    languageTag: "grc",
    original: "ἐποχή",
    gloss: "suspension of judgement",
    definition:
      "In Pyrrhonian scepticism, epochē is the withholding of assent that follows from the equal strength of opposing arguments — a practical discipline for reaching ataraxia, not a theoretical conclusion about our capacities. Husserl chose the same word for a different operation in phenomenology: the bracketing of the 'natural attitude', in which one sets aside the question of whether the world exists in order to describe how it is given to consciousness.",
    misreading:
      "The two senses are routinely conflated, and the difference is not cosmetic. The Pyrrhonian epochē aims at disengagement from belief; Husserl's aims at a more exact description of experience, and it presupposes that something can be described. Quoting one as the other is one of the more common errors in popular writing about both.",
    themes: ["Certainty", "Knowledge", "Judgment", "Inquiry", "Experience", "Equanimity"],
  },
  {
    term: "prohairesis",
    language: "Ancient Greek",
    languageTag: "grc",
    original: "προαίρεσις",
    gloss: "the faculty of choice; what is up to us",
    definition:
      "Prohairesis is Epictetus's central term: it names the power of choosing how to respond, and with it the whole of what he says is genuinely 'up to us'. Body, property, reputation, and office are not up to us; the use we make of impressions is. Every Stoic injunction to accept what happens depends on this partition, because what cannot be prevented can still be assented to or refused. Aristotle uses the same word for a decided choice that results from deliberation and is bound up with character, which is a narrower and different sense.",
    misreading:
      "Translated as 'free will', which makes it sound like a metaphysical claim about causation. Epictetus is making a practical partition between what one's own judgement covers and what it does not.",
    themes: ["Choice", "Freedom", "Responsibility", "Autonomy", "Fate", "Will"],
  },
  {
    term: "oikeiōsis",
    language: "Ancient Greek",
    languageTag: "grc",
    original: "οἰκείωσις",
    gloss: "appropriation; coming to recognise something as one's own",
    definition:
      "The Stoic account of how moral concern extends. A creature begins by being attached to itself and its own constitution, then to its offspring, then to those who share its household and city, and finally — in the fully developed rational being — to all human beings as such, because they share in reason. Hierocles's image is of concentric circles drawn around a centre which one then works to contract. The doctrine is the Stoic answer to why a rational agent should care about strangers, and it is one of the ancestor ideas of later cosmopolitanism and of modern moral-circles arguments.",
    themes: ["Humanity", "Love", "Community", "Ethics", "Justice", "Otherness", "Relation"],
  },
  {
    term: "katharsis",
    language: "Ancient Greek",
    languageTag: "grc",
    original: "κάθαρσις",
    gloss: "purgation, cleansing",
    definition:
      "Aristotle uses the word once, in the definition of tragedy in the Poetics, and says that tragedy effects through pity and fear the katharsis of those feelings. Because he never explains it there, the passage has carried an outsized commentary: readings range from medical purgation of the emotions to their intellectual clarification through the structure of the plot. The Poetics also uses the term elsewhere for ritual purification, which is part of why the medical reading gained ground.",
    misreading:
      "Read as 'emotional release' or as catharsis in the modern therapeutic sense. Aristotle is describing something the form of a tragedy accomplishes on an audience, not something a person does to feel better.",
    themes: ["Beauty", "Experience", "Spirit", "Judgment"],
  },

  /* --------------------------------------------------------------------- *
   * Latin and the early modern vocabulary built on it
   * --------------------------------------------------------------------- */
  {
    term: "a priori / a posteriori",
    language: "Latin",
    languageTag: "la",
    gloss: "from what is prior / from what is subsequent",
    definition:
      "The distinction between knowledge that can be established without recourse to experience and knowledge that depends on it. In Kant the pair becomes central and is separated from the analytic–synthetic distinction: an a priori judgement is one whose necessity and strict universality cannot be derived from experience, and Kant's question in the Critique of Pure Reason is how such judgements are possible at all. That mathematics and the principle of causation seem to be of this kind, yet deliver information about the world, is the problem the whole critical project is built to answer.",
    misreading:
      "Equated with 'analytic' (true by meaning) or with 'innate'. Both equations are later and are exactly what Kant is at pains to keep apart: 7 + 5 = 12 is for him a priori and synthetic, and he argues no innate idea is required.",
    themes: ["Knowledge", "Certainty", "Reason", "Experience", "Understanding", "Science", "Limits"],
  },
  {
    term: "conatus",
    language: "Latin",
    languageTag: "la",
    gloss: "striving; the effort to persist in being",
    definition:
      "In Spinoza, conatus is the actual essence of a thing: each thing, so far as it can, strives to persevere in its being. It is not a psychological tendency added to a thing but what the thing is, and in human beings it appears as desire together with the striving of mind and body in parallel. From it Spinoza derives an entire ethics — good is what aids this striving, evil what hinders it, and the passions are to be understood rather than condemned. Hobbes uses the same term for the small beginnings of motion in the body, which is a different though related use.",
    misreading:
      "Read as a life-force or as will to survive. Spinoza's conatus is a definitional claim about what an individual is, not an observation about a drive, and it is accompanied by his denial that anything could have a tendency toward self-destruction.",
    themes: ["Desire", "Being", "Self", "Freedom", "Nature", "Will", "Existence"],
  },
  {
    term: "sub specie aeternitatis",
    language: "Latin",
    languageTag: "la",
    gloss: "under the aspect of eternity",
    definition:
      "Spinoza's phrase for the standpoint from which things are understood as following necessarily from the nature of God or substance, rather than as contingent events in a particular duration. In the Ethics it is tied to the third kind of knowledge, scientia intuitiva, and it grounds his claim that the mind's blessedness is not a reward for virtue but is virtue itself. In the Ethics the same standpoint requires that one see things in their necessity, which is why Spinoza holds that adequate knowledge of things removes the passions that depend on treating them as contingent.",
    misreading:
      "Used loosely to mean 'objectively' or 'in the long run'. Spinoza means a determinate cognitive achievement: seeing a thing's place in the necessary order of nature.",
    themes: ["Eternity", "Understanding", "Freedom", "God", "Knowledge", "Time"],
  },
  {
    term: "amor fati",
    language: "Latin",
    languageTag: "la",
    gloss: "love of fate",
    definition:
      "Nietzsche's formula for greatness in Ecce Homo: to want nothing different, neither forward nor backward nor in all eternity, and not merely to bear what is necessary but to love it. It is the affirmative counterpart to the claim that the world has no purpose outside itself, and it connects to his thought experiment of the eternal recurrence, in which one is asked whether one would will the same life again infinitely. Note that Nietzsche's phrase is Latin, in a body of work otherwise written in German — the maxim is deliberately cut off from the German moral vocabulary he is attacking.",
    misreading:
      "Read as passive acceptance or as Stoic resignation. Nietzsche's point is the opposite of endurance: resignation still measures the world against what it should have been, and amor fati requires dropping that measure. The parallel with Stoic acceptance is frequently drawn and, on this point, wrong.",
    themes: ["Fate", "Affirmation", "Freedom", "Life", "Growth", "Equanimity"],
  },
  {
    term: "ordo amoris",
    language: "Latin",
    languageTag: "la",
    gloss: "the order of loves",
    definition:
      "Augustine's account of virtue as rightly ordered love: a good will is one that loves things in proportion to their worth, God first, then creatures in their proper measure, and none of them as though it were the highest good. The concept is Augustinian rather than directly scriptural, and it was developed before him in Ambrose and in the Neoplatonic hierarchy of goods. It underlies the later Christian analysis of sin as disordered love rather than as the pursuit of evil, and it is why Augustine treats the Fall as a matter of what is loved rather than of what is known.",
    misreading:
      "Reduced to 'love the right things', which loses the proportional structure. What makes the doctrine do work is that a love can be too great as well as misplaced, and the sin can lie in the degree rather than the object.",
    themes: ["Love", "God", "Desire", "Good", "Morality", "Order", "Will"],
  },
  {
    term: "esse and essentia",
    language: "Latin",
    languageTag: "la",
    gloss: "existence and essence",
    definition:
      "The distinction between that a thing is and what it is, which medieval philosophy inherits from Aristotle's distinction between existence and what-it-is-to-be and turns into a central question. Aquinas argues that in anything other than God essence and existence are really distinct, so that a creature's existence is received rather than included in its nature — which is what makes it possible to say why there is something rather than nothing about any particular thing. In God alone, on this account, essence and existence are identical.",
    misreading:
      "Treated as the difference between a thing and its definition, which makes the claim sound like a verbal point. The Thomist claim is metaphysical: nothing about what a finite thing is entails that it exists.",
    themes: ["Being", "Existence", "God", "Understanding", "Truth"],
  },
  {
    term: "habitus",
    language: "Latin",
    languageTag: "la",
    gloss: "a settled state; a durable disposition",
    definition:
      "The Latin rendering of Aristotle's hexis: a stable condition of a thing that disposes it to act in a certain way, as distinct from a passing mood or a capacity one merely has. Virtues and vices are habitus, which is why Aristotle says virtue is acquired by doing the corresponding act until the disposition settles. In medieval theology habitus becomes central to the analysis of grace as a quality infused in the soul, and in twentieth-century sociology Bourdieu revives the term for the durable dispositions acquired through one's position in a social field.",
    misreading:
      "Read as 'habit' in the everyday sense of a repeated behaviour. A habitus is a disposition that explains the behaviour, not the repetition of the behaviour itself, and it can be operative without being noticed by the person who has it.",
    themes: ["Character", "Practice", "Virtue", "Habit", "Cultivation", "Action"],
  },
  {
    term: "intellectus and ratio",
    language: "Latin",
    languageTag: "la",
    gloss: "intellective apprehension and discursive reason",
    definition:
      "The two modes of rational cognition distinguished in medieval philosophy. Ratio proceeds step by step from premises to conclusion and is what we employ in inference and argument; intellectus grasps a principle or a whole directly, without movement. Aquinas holds that they are distinct operations of the same power and that intellectus is higher, because the discursive thinker is still on the way to something the other already holds. The distinction is the Latin form of Aristotle's nous and dianoia, and it drives the medieval claim that theology can be a science even though its first principles are believed rather than demonstrated.",
    themes: ["Reason", "Understanding", "Mind", "Thinking", "Knowledge"],
  },
  {
    term: "res cogitans / res extensa",
    language: "Latin",
    languageTag: "la",
    gloss: "thinking substance and extended substance",
    definition:
      "The two kinds of substance Descartes argues for in the Meditations: mind, whose whole nature is to think, and body, whose whole nature is to occupy space. Each is intelligible without the other, which is how the real distinction is argued, and it leaves the problem that has occupied philosophy since — how two substances with nothing in common interact. Descartes's answer, that the union of mind and body is known through the ordinary course of life rather than through philosophy, was widely treated as evasive, and the version of it that became notorious was the occasionalism of his followers.",
    misreading:
      "Called 'Cartesian dualism' as though it were a single doctrine, and then treated as obviously false. The interesting question is not whether the two substances are separate but why the argument for their separability was so persuasive to a whole century.",
    themes: ["Mind", "Existence", "Certainty", "Soul", "Science", "Being"],
  },

  /* --------------------------------------------------------------------- *
   * Chinese
   * --------------------------------------------------------------------- */
  {
    term: "dao",
    language: "Chinese (pinyin)",
    languageTag: "zh-Latn",
    original: "道",
    gloss: "way, path, course",
    definition:
      "In classical Chinese, dao is first a road and then, by extension, the course proper to something — the way a ruler governs, the way things proceed, the way to live. In the Daodejing it becomes the name for the unnameable source and pattern of the world, and the text opens by disqualifying its own first line: a dao that can be spoken is not the constant dao. In Confucian usage it is usually more concrete and moral — the way of the former kings, the way of Heaven — and the two senses coexist throughout the tradition.",
    misreading:
      "Rendered as 'the Tao' with a definite article, which treats it as a named entity or a being. The Daodejing is explicit that whatever it is, it cannot be named, and Zhuangzi adds that where the road is walked it becomes a road, which is a claim about the relation between path and use rather than about a cosmic thing.",
    themes: ["Way", "Life", "Nature", "Practice", "Being", "Order", "Understanding"],
  },
  {
    term: "de",
    language: "Chinese (pinyin)",
    languageTag: "zh-Latn",
    original: "德",
    gloss: "virtue, power, the efficacy a thing has by being what it is",
    definition:
      "De is a thing's own power or potency, and in early Chinese thought it is closely tied to the idea that causing others to follow you is achieved through what you are rather than what you command. The Daodejing's phrase xuande, the mysterious de, describes a power that works without claiming credit and therefore lasts; the Confucian texts use the same graph for the virtue acquired through cultivation. The relation to the older sense of a bestowed favour or a charismatic potency is never entirely lost.",
    misreading:
      "Read as moral virtue in the Aristotelian sense, which imports the idea of an internal standard of excellence. De is closer to efficacy: it is what makes a thing authoritative in its own domain, and the moral dimension is one case of it rather than the whole.",
    themes: ["Virtue", "Power", "Character", "Way", "Cultivation", "Good"],
  },
  {
    term: "wu wei",
    language: "Chinese (pinyin)",
    languageTag: "zh-Latn",
    original: "無為",
    gloss: "non-coercive action; acting without forcing",
    definition:
      "Wu wei does not mean inactivity. It means acting so that the action does not depend on effortful assertion — the sage's effectiveness comes from the alignment of what he does with the way things actually move, so that nothing is done 'artificially' in the sense of being imposed against the grain. The result is described in terms of not contending, and the political application is that a ruler who governs this way does not need to compel. The concept is also used by the Legalists, where it describes the ruler delegating to a functioning system — a very different practical content for the same phrase.",
    misreading:
      "Translated as 'doing nothing' or as 'effortless action', and then read as a recommendation of passivity. The Daodejing is full of claims about how effective wu wei is, which would be incoherent if no action were involved.",
    themes: ["Action", "Way", "Nature", "Practice", "Power", "Simplicity", "Freedom"],
  },
  {
    term: "ziran",
    language: "Chinese (pinyin)",
    languageTag: "zh-Latn",
    original: "自然",
    gloss: "self-so; what is so of itself",
    definition:
      "Ziran literally means 'so-of-itself' and was originally an adverbial pair, describing the way something is without an external cause rather than naming a domain of things. The Daodejing's statement that humans follow earth, earth follows heaven, heaven follows dao, and dao follows ziran is the pivot: it makes ziran the last term, which is why translating it as 'nature' with a definite article changes the argument. The modern Chinese and Japanese word for nature is this phrase, in a sense that arrived later.",
    misreading:
      "Rendered as 'nature', which invites the reading that dao follows the natural world. The pre-modern sense is that dao follows no prescription at all — it is the condition of being so of itself. This is one of the terms where the modern meaning of the graph rather than its original sense is what most translations use.",
    themes: ["Nature", "Way", "Simplicity", "Freedom", "Order", "Being"],
  },
  {
    term: "ren",
    language: "Chinese (pinyin)",
    languageTag: "zh-Latn",
    original: "仁",
    gloss: "humaneness; being fully responsive to others as persons",
    definition:
      "Ren is the central virtue of the Analects. The graph is composed of the element for 'person' with the element for 'two', and although that etymology is not decisive it is the traditional sense of the word: ren is what holds between persons, articulated by Confucius as loving others and by later commentators as the fully developed capacity to respond to others as persons. Confucius refuses to define it. Asked repeatedly, he answers with different things on each occasion, and his interlocutors' own conduct is usually what changes the answer — which is characteristic of how the text teaches.",
    misreading:
      "Translated as 'benevolence', which is close but tends to become a disposition of kindness. Ren in the Analects is tested by ritual performance and political conduct, and it is easier to say what someone with ren would do in a circumstance than what ren is.",
    themes: ["Benevolence", "Humanity", "Virtue", "Love", "Relation", "Ethics", "Community"],
  },
  {
    term: "li (principle 理) and li (ritual 禮)",
    slug: "li",
    language: "Chinese (pinyin)",
    languageTag: "zh-Latn",
    original: "理 / 禮",
    gloss: "two entirely distinct concepts that English renders identically",
    definition:
      "A collision in transliteration that causes real confusion. 理 (li) is 'pattern' or 'principle' — the structure that makes a thing the kind of thing it is, central to Zhu Xi, where investigating things means coming to grasp their li. 禮 (li) is 'ritual propriety' — the body of ceremonial and social forms that Confucius treats as the medium through which ren is realised. The two appear side by side in the same texts and are joined in the Neo-Confucian claim that ritual is the expression of principle, but they are not the same term, and a reader meeting 'li' in a translation has no way to tell which one is meant without the character.",
    misreading:
      "The homophone is not merely a hazard for readers — it is a named source of real interpretive error, because the Neo-Confucian doctrine that human nature is li in one sense and that its expression is li in the other is precisely about holding the two together. Reduced to one English word, the argument becomes vacuous.",
    themes: ["Order", "Method", "Practice", "Nature", "Understanding", "Virtue"],
  },
  {
    term: "qi",
    language: "Chinese (pinyin)",
    languageTag: "zh-Latn",
    original: "氣",
    gloss: "the stuff and its dynamic configurations",
    definition:
      "Qi is what things are made of, so far as early and later Chinese cosmology makes that claim, but the concept is inseparable from its motion and its condensation: qi gathers and disperses, and a thing is a temporary configuration of it rather than a substance that possesses it. The Mencian claim that one's qi can be cultivated, and the Neo-Confucian accounts of qi as the material aspect of the world against principle as its pattern, both depend on this. In medical and self-cultivation traditions it is the medium of vitality, which is where the word's popular English use comes from.",
    misreading:
      "Treated as an energy field or a force, in which case it becomes a physical quantity that can be measured. In the philosophical texts it is closer to matter that is never at rest, and the interesting questions are about how pattern and configuration relate to it.",
    themes: ["Nature", "Being", "Life", "Mind", "Cultivation", "Change"],
  },
  {
    term: "xin and xing",
    language: "Chinese (pinyin)",
    languageTag: "zh-Latn",
    original: "心 / 性",
    gloss: "the heart-mind, and the nature one is born with",
    definition:
      "Xin is conventionally translated 'heart-mind' because it covers both thought and feeling: the seat of intention, emotion, and cognition at once, and the thing a person has to rectify. Xing is a thing's nature — what it is by birth, and in Mencius what Heaven has mandated. The relation between them is the central argument of later Confucian thought: Mencius holds that xing is good and that the work consists in recovering and extending it; Xunzi holds that xing is bad in the sense of being raw and unformed; and in Zhu Xi and Wang Yangming the question becomes whether xin is identical with xing or distinct, which is a difference that determines whether moral cultivation is a matter of investigating things or of rectifying intentions.",
    misreading:
      "'Mind' alone for xin loses the affective half, and then Mencian arguments look like claims about cognition. English also lacks the split between nature-as-what-one-is and nature-as-the-world that the Chinese does not make here.",
    themes: ["Mind", "Human Nature", "Self", "Nature", "Cultivation", "Knowledge"],
  },
  {
    term: "ming",
    language: "Chinese (pinyin)",
    languageTag: "zh-Latn",
    original: "命",
    gloss: "mandate, decree, what is allotted",
    definition:
      "Ming is the term for what is assigned to one and cannot be altered: the Zhongyong opens by saying that what Heaven mandates is called nature. It carries both the sense of a command and the sense of a portion one receives, and the two readings coexist — in the Analects, knowing ming is part of what makes a person able to act without anxiety, because it marks the line beyond which effort is useless. Fatalism in the sense of passive resignation is generally not what the texts recommend; the point is to know where action is effective and where it is not, so as not to waste the first on the second.",
    misreading:
      "Translated as 'fate' and read as determinism. The Mencian notion is closer to a limit condition: ming is what you cannot do anything about, and the ethical task is to locate that boundary accurately, not to submit to it in general.",
    themes: ["Fate", "God", "Life", "Nature", "Responsibility", "Understanding"],
  },
  {
    term: "cheng",
    language: "Chinese (pinyin)",
    languageTag: "zh-Latn",
    original: "誠",
    gloss: "sincerity, truthfulness, the completion of a thing's own nature",
    definition:
      "In the Zhongyong, cheng is at once a moral quality and a cosmological one: sincerity is the way of Heaven, and making oneself sincere is the human route to it. Zhu Xi glosses it as 'true and without falsehood' plus 'complete', and the two senses are held together — a thing that is cheng is both genuinely what it claims to be and fully realised in its kind. That is why the text can say that the sincere person develops not only themselves but other things, and why cheng functions as the hinge between the text's account of human nature and its account of the cosmos.",
    misreading:
      "Rendered as 'sincerity' and understood as honesty in the interpersonal sense. The Confucian concept includes that but is broader: it is the state in which a thing's actuality matches its nature, which applies to non-human things as well.",
    themes: ["Sincerity", "Nature", "Truth", "Self", "God", "Cultivation"],
  },
  {
    term: "zhongyong",
    language: "Chinese (pinyin)",
    languageTag: "zh-Latn",
    original: "中庸",
    gloss: "equilibrium and constancy; not the mean between extremes",
    definition:
      "Zhong names the state before joy, anger, sorrow, and pleasure have been aroused — an equilibrium that is not itself a feeling — while yong names constancy or the steady application of the way. Once the feelings are aroused and each reaches its due measure, the state is called harmony, and it is the cultivated condition the text is after. Zhu Xi makes zhong the correct measure of the mind before arousal and he the appropriate expression once aroused; together they are described as the great root and the universal path.",
    misreading:
      "'The golden mean' and 'moderation' are the established English renderings and both import the idea of splitting a difference between two extremes. The Chinese term is not about the size of a response but about its measure relative to the situation, and it is combined with yong, which is a claim about constancy rather than about avoiding excess.",
    themes: ["Moderation", "Order", "Nature", "Practice", "Cultivation", "Equanimity"],
  },
  {
    term: "junzi",
    language: "Chinese (pinyin)",
    languageTag: "zh-Latn",
    original: "君子",
    gloss: "the noble person, literally 'son of a lord'",
    definition:
      "Junzi originally denoted hereditary rank: the son of a ruler. Confucius relocates the term, so that it designates the person of developed moral character whether or not they hold office — a change of reference that is one of the most consequential moves in the Analects, because it makes nobility a matter of cultivation rather than of birth. Most of the text's teaching is addressed to the junzi in this second sense, in contrast with the xiaoren, the small person, whose concern is profit and whose standard is what others will think.",
    misreading:
      "Translated as 'gentleman', which carries an English class connotation and a tone of mild good manners. The junzi is defined by what they would do under pressure, and the contrast with the xiaoren is a contrast of ethical orientation rather than of social bearing.",
    themes: ["Character", "Virtue", "Gentleman", "Self", "Cultivation", "Ethics", "Good"],
  },

  /* --------------------------------------------------------------------- *
   * Sanskrit and Pali
   * --------------------------------------------------------------------- */
  {
    term: "ātman",
    language: "Sanskrit",
    languageTag: "sa",
    original: "आत्मन्",
    gloss: "self, breath, the innermost principle of a person",
    definition:
      "In the Upaniṣads, ātman is the self that survives analysis — not the body, not the emotions, not the intellect, but that in virtue of which the other things are one's own. The teaching of the Chāndogya Upaniṣad that the self is identical with brahman, the ground of the world, is the pivot of the Vedānta traditions, and each school then differs on precisely how the identity is to be read. Buddhism denies the concept outright, which makes ātman the axis of the whole Indian debate about personal identity.",
    misreading:
      "Translated as 'soul', which imports the Greek and Christian notion of an individual substance created once and immortal. ātman in the Advaita reading is not individual at all — individuality belongs to the level the teaching is meant to undercut.",
    themes: ["Self", "Soul", "God", "Being", "Existence", "Mind"],
  },
  {
    term: "brahman",
    language: "Sanskrit",
    languageTag: "sa",
    original: "ब्रह्मन्",
    gloss: "the ground and totality of what is",
    definition:
      "Brahman names the ultimate reality in the Upaniṣads — the source of the world, that from which things arise and into which they return, and the object of the knowledge the texts are meant to transmit. The etymology relates it to growth and expansion. The Advaita reading treats brahman as without distinctions, so that the plurality of things is a matter of appearance at the level of ignorance; Rāmānuja and others insist that the world is real and related to brahman as body to self. How the two are related is the principal division in Vedānta.",
    misreading:
      "Rendered as 'God', which brings in creation, will, and personality from the Abrahamic vocabulary. In the Advaita reading brahman is impersonal and does not create so much as appear as the world.",
    themes: ["God", "Being", "Eternity", "Existence", "Understanding", "Spirit"],
  },
  {
    term: "māyā",
    language: "Sanskrit",
    languageTag: "sa",
    original: "माया",
    gloss: "power of appearance; the tendency of the world to seem self-standing",
    definition:
      "In Advaita Vedānta, māyā is the principle by which the single reality appears as many things, and by which that appearance is taken for what is real. It is neither a delusion a person inflicts on themselves nor a second reality standing over against brahman; it is described as beginningless and as neither real nor unreal, which is a technical placement rather than a hedge. Śaṅkara's point is that the plurality we report is not false in the way a mirage is false — it is not nothing — but it is not independent, and the whole work of the teaching is to see through that independence.",
    misreading:
      "Rendered as 'illusion' and taken to mean that the world does not exist. Advaita's claim is that the world is not what it seems to be — it lacks independent reality — rather than that there is nothing there. The two readings lead to entirely different ethics, and the second is the one the school rejects.",
    themes: ["Existence", "Truth", "Knowledge", "Nature", "Experience", "Understanding"],
  },
  {
    term: "karma",
    language: "Sanskrit",
    languageTag: "sa",
    original: "कर्मन्",
    gloss: "action, and the residue action leaves",
    definition:
      "Karma names action and, by extension, the mechanism by which action shapes what comes next: a deed leaves a disposition, and the disposition tends to reproduce itself. In the Upaniṣadic and Buddhist traditions this is the reason for continuity between lives, but the concept is already doing work within a single life, where it is offered as an account of why the same person behaves consistently. The Gītā's response to the burden of karma is not to escape action but to act without attachment to its fruit, which is a claim about how action can stop accumulating.",
    misreading:
      "Used in English as a synonym for fate or for retribution, as though something external is keeping accounts. The Indian concept is a claim about the causal consequences of one's own activity, and the Gītā in particular is arguing that the causal chain can be interrupted.",
    themes: ["Action", "Responsibility", "Fate", "Practice", "Morality", "Life"],
  },
  {
    term: "dharma",
    language: "Sanskrit / Pali",
    languageTag: "sa",
    original: "धर्म",
    gloss: "the order that sustains things; also one's own duty; also a teaching",
    definition:
      "Dharma carries three senses that connect: the cosmic order that sustains the world, the specific duty that follows from one's position in that order, and — in Buddhism, where the Pali form is dhamma — the teaching and the constituent factors of experience. In the Gītā the second sense does the work: Arjuna's duty follows from his role, and Kṛṣṇa's argument depends on that duty being tied to a station rather than to a consequence. The Buddhist use is not a duty at all but an analysis of what a person is made of.",
    misreading:
      "In English, the word slides almost entirely into the third sense, as in 'the dharma' meaning a teaching, or into a vague sense of cosmic justice. Reading the Gītā through either of those makes its central argument about station and obligation hard to see.",
    themes: ["Morality", "Responsibility", "Order", "Truth", "Practice", "Action"],
  },
  {
    term: "śūnyatā",
    language: "Sanskrit",
    languageTag: "sa",
    original: "शून्यता",
    gloss: "emptiness; absence of own-being",
    definition:
      "In the Prajñāpāramitā literature and in Nāgārjuna's Madhyamaka, śūnyatā is the claim that things lack svabhāva — own-being, the intrinsic nature in virtue of which a thing would be what it is independently of anything else. It is an analysis of dependence rather than a claim that nothing exists: precisely because things are empty of own-being, they arise and cease in dependence on conditions. Nāgārjuna's argument in the Mūlamadhyamakakārikā is that this applies to concepts as well as to things, so that emptiness is not itself a thing one can cling to.",
    misreading:
      "Read as 'nothingness' or as a form of nihilism. The Prajñāpāramitā texts themselves warn against this reading, and the Diamond Sutra's constant qualification — what is called a dharma is not a dharma — is designed partly to prevent emptiness from hardening into a position.",
    themes: ["Existence", "Being", "Truth", "Understanding", "Mind", "Limits"],
  },
  {
    term: "anātman / anattā",
    language: "Sanskrit / Pali",
    languageTag: "sa",
    gloss: "not-self; the absence of a permanent self",
    definition:
      "The Buddhist claim that no permanent, unchanging self can be found among the constituents of a person — body, feeling, perception, formations, and consciousness — and that the belief in one is a source of suffering. The arguments are analytic: take any candidate for the self and it will turn out to be impermanent, and so to be a source of suffering if one identifies with it, and so not to be what one is looking for. The claim is not that persons do not exist but that what a person is differs from what the tradition's opponents take a self to be.",
    misreading:
      "Read as a denial of personal identity, or as a claim that one does not exist. The point is about what kind of thing a person is — a process rather than a substance — and the practical upshot is a looser grip rather than an absence of concern.",
    themes: ["Self", "Soul", "Existence", "Mind", "Understanding"],
  },
  {
    term: "niṣkāma karma",
    language: "Sanskrit",
    languageTag: "sa",
    original: "निष्काम कर्म",
    gloss: "action without craving for its fruit",
    definition:
      "The Gītā's practical doctrine: act, and act fully, but do not let the action be motivated by its result. The point is not that results do not matter but that the agent's relation to them is what determines whether the action binds. Since the results are not within one's control, tying one's satisfaction to them guarantees disturbance whether or not they arrive. This is why the Gītā can present the same act as liberating for one person and binding for another, and why it is a teaching about agency rather than about the content of the act.",
    misreading:
      "Read as indifference to outcomes, and so as an alibi for carelessness. The Gītā requires the act to be performed properly and completely; what is given up is the claim on the result, not the effort in the doing.",
    themes: ["Action", "Desire", "Freedom", "Practice", "Equanimity", "Responsibility"],
  },

  /* --------------------------------------------------------------------- *
   * Japanese and Chinese Buddhist terms
   * --------------------------------------------------------------------- */
  {
    term: "satori",
    language: "Japanese",
    languageTag: "ja",
    original: "悟り",
    gloss: "awakening; the direct seeing a practitioner works toward",
    definition:
      "Satori is the Zen term for the experience of seeing one's own nature, and the tradition is careful that it is not a matter of acquiring information: the distinction between gradual cultivation and sudden awakening is a disagreement internal to Chan and Zen rather than between Zen and its rivals. The tradition also insists that awakening is not the end of practice — the Song and Japanese masters both return to the point that without continued practice an awakening is a place to sit rather than a thing that changes a life.",
    misreading:
      "Presented as enlightenment in the sense of a permanent achieved state, or as a peak experience. The Chan sources repeatedly warn that treating the experience as a possession reinstates exactly the grasping it was supposed to end.",
    themes: ["Awakening", "Enlightenment", "Understanding", "Practice", "Mind"],
  },
  {
    term: "mu",
    language: "Japanese / Chinese",
    languageTag: "ja",
    original: "無",
    gloss: "the syllable of the first koan; no / nothing / without",
    definition:
      "The single-syllable reply Zhaozhou gave when asked whether a dog has Buddha-nature, and the subject of the first case of the Gateless Barrier. The tradition normally leaves it untranslated, and this is deliberate: the received doctrine answers the question yes, so the reply cannot be doing the work of a proposition. Wumen's instruction is to hold the syllable itself — to bring it before oneself continuously and not to let it become a puzzle one tries to solve by analysis. It is described as a red-hot iron ball one cannot swallow or spit out, which is a description of a method rather than of a doctrine.",
    misreading:
      "Read as the Buddhist doctrine of emptiness (śūnyatā), and therefore as an answer to the question. Japanese Zen commentary is explicit that taking it as a denial is the classic error, and that the syllable is not the same term as the emptiness of the sutras even though the character is the same.",
    themes: ["Awakening", "Limits", "Understanding", "Inquiry", "Mind"],
  },

  /* --------------------------------------------------------------------- *
   * Islamic philosophy
   * --------------------------------------------------------------------- */
  {
    term: "tawḥīd",
    language: "Arabic",
    languageTag: "ar",
    original: "توحيد",
    gloss: "affirming oneness; the unity of God",
    definition:
      "Tawḥīd is the affirmation that God is one, without partner, and the term names both the doctrine and the act of affirming it. In falsafa and kalām it becomes a much stronger claim than mere numerical monotheism: al-Ghazālī, Ibn Rushd, and the Muʿtazilite and Ashʿarite theologians fought over whether God's attributes are identical with his essence, since distinct real attributes would compromise the unity being affirmed. The debate generated a great deal of Islamic philosophy of language, because the question of what it means to predicate something of God turns on how reference to a unique being works.",
    misreading:
      "Treated as simply 'monotheism', which loses the technical dispute it names. The philosophical content is in the question of what is being denied when plurality is denied of God, and it is that question, not the counting of gods, that the theologians were arguing about.",
    themes: ["God", "Being", "Faith", "Understanding", "Truth", "Eternity"],
  },
  {
    term: "ijtihād",
    language: "Arabic",
    languageTag: "ar",
    original: "اجتهاد",
    gloss: "exerting oneself to derive a ruling; independent legal reasoning",
    definition:
      "Ijtihād is the effort of a qualified jurist to reach a legal ruling on a question the received texts do not settle directly, by reasoning from the sources. It sits opposite taqlīd, the following of an established ruling. The extent to which ijtihād remains possible — the so-called closing of the gate, and whether it ever closed — is a modern historical question rather than a settled one, and the claim that it closed is itself a claim made at a particular time by particular jurists. The concept matters philosophically because it makes the derivation of law a rational activity with standards, not an act of retrieval.",
    misreading:
      "Translated as 'interpretation' or as 'reform', and then attached to a single modern movement. Historically it is an ordinary part of the juristic method, and every major school of law depends on it for the cases its founding texts did not cover.",
    themes: ["Reason", "Method", "Justice", "Inquiry", "Understanding", "Judgment"],
  },

  /* --------------------------------------------------------------------- *
   * Jewish philosophy
   * --------------------------------------------------------------------- */
  {
    term: "teshuvah",
    language: "Hebrew",
    languageTag: "he",
    original: "תְּשׁוּבָה",
    gloss: "return; repentance",
    definition:
      "Teshuvah means turning back or returning, and it names both the act of repentance and the state of being restored. Maimonides devotes a section of the Mishneh Torah to its laws and specifies its conditions in some detail: the wrong must be acknowledged, the harm repaired where repair is possible, and the same situation resisted when it recurs — so that the test of teshuvah is behavioural rather than emotional. The return to oneself is part of the word's structure, which is why the tradition reads it as a return to one's own nature rather than only as an approach to God.",
    misreading:
      "Translated as 'repentance' and understood as regret. The Maimonidean conditions make the concept a matter of changed conduct under a repeated test, not of a feeling about a past act.",
    themes: ["Responsibility", "Morality", "Self", "Freedom", "Character", "God"],
  },
  {
    term: "tikkun olam",
    language: "Hebrew",
    languageTag: "he",
    original: "תִּקּוּן עוֹלָם",
    gloss: "repairing the world",
    definition:
      "The phrase occurs in the Mishnah and in the prayer book with a narrower legal sense — enactments made 'for the good order of the world' — and was given a cosmological reading in Lurianic kabbalah, where it names the human task of gathering the sparks dispersed in the breaking of the vessels. The modern social-justice sense, in which it means working for a better society, is a twentieth-century extension of the phrase rather than its earlier legal meaning. The three senses are often conflated in popular use, which makes the term's history invisible.",
    misreading:
      "Assumed to be an ancient term for social activism. The legal sense is older, the kabbalistic sense is medieval, and the political sense is modern; a claim about what 'the tradition' always meant by tikkun olam usually reflects one of the three rather than all.",
    themes: ["Action", "Responsibility", "Justice", "Community", "Hope"],
  },

  /* --------------------------------------------------------------------- *
   * African philosophy
   * --------------------------------------------------------------------- */
  {
    term: "ubuntu",
    language: "Nguni Bantu",
    languageTag: "zu",
    gloss: "the quality of being a person; humaneness",
    definition:
      "Ubuntu is built on the stem -ntu with the class prefix for persons, and the maxim usually given for it is umuntu ngumuntu ngabantu — a person is a person through other persons. It states a relation between personhood and community that is metaphysical as well as ethical: being a person is not given at birth but realised through participation in relations with others. Contemporary African philosophy holds it variously as a moral theory, as a critique of liberal individualism, and as a claim about the structure of agency, and the disagreements between those readings are active rather than settled.",
    misreading:
      "Reduced to 'I am because we are' as a slogan, and then treated as a straightforward communitarianism. The stronger claim in the literature is that personhood is graduated and can be lost — which is not a thesis any individualist premise would generate, nor a simple preference for the group.",
    themes: ["Humanity", "Community", "Self", "Relation", "Ethics", "Otherness"],
  },
  {
    term: "vital force (force vitale)",
    slug: "vital-force",
    language: "French (as used in African philosophy)",
    languageTag: "fr",
    gloss: "a putatively African concept of being as life-force",
    definition:
      "Prospero Tempels's Bantu Philosophy (1945) argued that the ontology underlying the Bantu languages treats being as force rather than as substance, with God as the source of a vitality that all things possess in different degrees. The thesis was taken up by Placide Franssen and others and, more importantly, rejected. Paulin Hountondji, Fabien Eboussi-Boulaga, and Marcien Towa argued that Tempels constructed a system no African thinker had held, that the resulting 'ethnophilosophy' took anonymous collective representations as philosophy, and that its effect was to deny Africans the possibility of individual critical thought. The concept is therefore best read as a claim about how African philosophy was constructed by its outside interpreters.",
    misreading:
      "Presented as an African doctrine that scholars later criticised. It is more nearly the reverse: the critique is what the philosophical literature considers the substantive contribution, and 'vital force' survives mainly as the position that defined the debate.",
    themes: ["Being", "Nature", "Humanity", "Understanding", "Critique", "Method"],
  },
];

/** Look up the concepts that belong to a canonical theme name. */
export function conceptsForTheme(theme: string): Concept[] {
  return concepts.filter((concept) => concept.themes.includes(theme));
}

/**
 * Concepts for several themes at once, de-duplicated and in glossary order.
 * Quotation pages carry two or three themes, and the same concept is often
 * tagged to more than one of them, so a plain concat would render it twice.
 */
export function conceptsForThemes(themes: string[], limit = 4): Concept[] {
  const wanted = new Set(themes);
  return concepts
    .filter((concept) => concept.themes.some((theme) => wanted.has(theme)))
    .slice(0, limit);
}

/** URL segment for a term. */
export function conceptSlug(concept: Concept): string {
  return concept.slug ?? slugify(concept.term);
}

/** Canonical page for a term. */
export function conceptPath(concept: Concept): string {
  return `/glossary/${conceptSlug(concept)}`;
}

const bySlug = new Map(concepts.map((concept) => [conceptSlug(concept), concept]));

export function conceptForSlug(slug: string): Concept | undefined {
  return bySlug.get(slug);
}

/**
 * Terms that share a theme with this one, nearest first.
 *
 * The glossary is only useful if a reader who arrives at *phronēsis* can reach
 * *aretē* and *akrasia* without going back to the index; shared themes are the
 * relation the archive already knows about, so they are what it uses.
 */
export function relatedConcepts(concept: Concept, limit = 6): Concept[] {
  const own = new Set(concept.themes);
  return concepts
    .filter((other) => other !== concept)
    .map((other) => ({
      other,
      shared: other.themes.filter((theme) => own.has(theme)).length,
    }))
    .filter((row) => row.shared > 0)
    .sort((a, b) => b.shared - a.shared)
    .slice(0, limit)
    .map((row) => row.other);
}

/**
 * Build-time guard: two terms must never claim the same URL.
 *
 * The same collision check the source-slug pages carry, for the same reason —
 * a duplicate slug silently overwrites a page in the output rather than
 * failing, and a glossary that has quietly lost an entry is worse than a build
 * that stops.
 */
export function assertNoConceptSlugCollision(): void {
  const seen = new Map<string, string>();
  for (const concept of concepts) {
    const slug = conceptSlug(concept);
    const previous = seen.get(slug);
    if (previous) {
      throw new Error(
        `concept-glossary: "${concept.term}" and "${previous}" both slug to "${slug}"`,
      );
    }
    seen.set(slug, concept.term);
  }
}
