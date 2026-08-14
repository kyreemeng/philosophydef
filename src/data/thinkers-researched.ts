import type { ThinkerGuide } from "./enrichment";

/** Research-verified biographies (SEP / Britannica / IEP consensus). */
export const researchedThinkerGuides: Record<string, ThinkerGuide> = {
  "Aristotle": {
    "lifespan": "384–322 BCE",
    "school": "Peripatetic",
    "jobTitle": "philosopher and naturalist",
    "knowsAbout": [
      "logic",
      "ethics",
      "politics",
      "biology"
    ],
    "overview": "Aristotle (384–322 BCE) was a Greek philosopher born in Stagira in Macedonia, the son of a court physician. At about seventeen he entered Plato’s Academy in Athens and remained associated with it until Plato’s death in 347. He then researched in Assos and on Lesbos, where his biological interests deepened, and later tutored Alexander of Macedon. Returning to Athens around 335, he founded the Lyceum and organized collaborative inquiry across disciplines. Roughly thirty treatises survive from a once larger corpus, written largely as lecture notes rather than literary dialogues. Their range—logic, metaphysics, physics, biology, psychology, ethics, politics, rhetoric, and poetics—made him antiquity’s most encyclopedic philosopher. He fled Athens in 323 and died the next year in Chalcis. Alongside Plato he anchors Classical Greek philosophy and shaped centuries of commentary in Greek, Arabic, Latin, and modern vernaculars.",
    "ideas": "Aristotle pursued demonstrative science grounded in observation, definition, and causal explanation. His Organon developed syllogistic logic and standards of proof that structured Western reasoning for two millennia. Metaphysics analyzes substance as form-in-matter, distinguishes potentiality from actuality, and posits an unmoved mover as pure actuality. Ethics aims at eudaimonia through virtues that are means relative to us, acquired by habituation and guided by phronesis. Politics treats humans as political animals and compares constitutions empirically. Natural philosophy emphasizes teleology in living natures and four causes—material, formal, efficient, and final. Psychology in De Anima treats soul as the form of a living body. Across domains he begins from endoxa and phenomena, refining them by dialectic and analysis rather than discarding common experience. The result is a comprehensive map of knowledge oriented to understanding natures and living well within the polis.",
    "works": [
      "Nicomachean Ethics",
      "Politics",
      "Metaphysics",
      "Organon"
    ],
    "legacy": "Aristotle’s logic and natural philosophy dominated medieval Christian and Islamic curricula; Averroes and Aquinas made him “the Philosopher.” Early modern science overturned his physics yet retained his vocabulary of substance, cause, and classification. Virtue ethics, philosophy of biology, and practical reason debates continually return to his texts, and the Lyceum remains a lasting symbol of organized research across the sciences and humanities.",
    "birthDate": "-0384",
    "deathDate": "-0322"
  },
  "Plato": {
    "lifespan": "c. 428/427–348/347 BCE",
    "school": "Platonism",
    "jobTitle": "philosopher and Academy founder",
    "knowsAbout": [
      "metaphysics",
      "ethics",
      "politics",
      "dialectic"
    ],
    "overview": "Plato (c. 428/427–348/347 BCE) was an Athenian of high birth, a devoted associate of Socrates, and the founder of the Academy. After Socrates’ execution in 399 he traveled—traditionally to Italy and Sicily—before establishing in Athens a community devoted to mathematics and philosophy that endured for centuries. He wrote dialogues of extraordinary literary art, often starring Socrates, that raise lasting questions about justice, knowledge, love, and the structure of reality. Birth and death are conventionally given with a year’s uncertainty in Britannica and related handbooks. He taught Aristotle and thereby linked the two central Classical systems. No other ancient author so combined dramatic form with metaphysical ambition. His works became the matrix for Middle Platonism, Neoplatonism, and endless later appropriations in theology, politics, and aesthetics across Europe, the Near East, and beyond.",
    "ideas": "Plato’s theory of Forms holds that changing sensibles participate in eternal, intelligible paradigms—Justice, Beauty, Equality—crowned by the Form of the Good. Knowledge differs from mere opinion by grasping these stable realities through dialectic and recollection. The Republic coordinates justice in the soul, with reason ruling spirit and appetite, with an educationally stratified city. Allegories of the sun, line, and cave dramatize ascent from shadows to understanding. Later dialogues scrutinize being and non-being, false judgment, and a demiurge who crafts the cosmos after eternal models. Ethics aims at psychic harmony and assimilation to the divine measure. Methodologically, elenchus, hypothesis, and collection-and-division replace sophistic persuasion. Politics in the Laws softens utopian rigor while retaining philosophy’s claim to guide law. The dialogues refuse a single dogmatic voice, inviting readers into unfinished inquiry.",
    "works": [
      "Republic",
      "Symposium",
      "Phaedo",
      "Timaeus"
    ],
    "legacy": "Platonism shaped late antique metaphysics, Christian and Islamic theology, Renaissance art and humanism, and modern idealism. Classroom and university ideals still echo the Academy’s communal study of mathematics and dialectic. Debates on justice, education, and the reality of universals remain ongoing conversations with Plato, whether scholars affirm, revise, or reject his dualisms and political hierarchies. His dialogues remain among the most assigned texts in philosophy curricula worldwide.",
    "birthDate": "-0428",
    "deathDate": "-0347"
  },
  "Socrates": {
    "lifespan": "c. 470/469–399 BCE",
    "school": "Socratic philosophy",
    "jobTitle": "Athenian teacher",
    "knowsAbout": [
      "ethics",
      "dialectic",
      "self-examination"
    ],
    "overview": "Socrates (c. 470/469–399 BCE) was an Athenian citizen who wrote nothing and yet redirected Greek philosophy from cosmology toward ethics and the care of the soul. Our portraits come mainly from Plato, Xenophon, and the comic poet Aristophanes, and they diverge in emphasis and tone. He questioned fellow citizens in the agora about courage, justice, and piety, professing ignorance while exposing hollow claims to wisdom. In 399 BCE democratic Athens tried him for impiety and corrupting the young; he was condemned and died by hemlock. Stanford Encyclopedia and Britannica place his life roughly 470 or 469 to 399 BCE. His trial and composure under sentence became founding images of philosophical integrity for later antiquity. Later schools—Cynic, Stoic, Skeptic, and Academic—claimed him as ancestor, making “Socratic” a permanent style of critical life.",
    "ideas": "Socratic method is elenchus: cooperative yet relentless cross-examination that tests definitions and reveals contradiction in moral claims. He links virtue with a kind of knowledge and suggests that wrongdoing stems from ignorance rather than clear-eyed choice. Care of the soul outranks wealth, reputation, and even continued life itself when integrity is at stake. The Delphic injunction to know oneself frames a mission of self-scrutiny and civic gadfly service to Athens. He obeys lawful verdicts while refusing to abandon philosophy, dramatizing tension between conscience and the city. Because he left no texts, reconstruction is contested among Plato’s early dialogues, Xenophon’s memorabilia, and Aristophanes’ satire. Still, the examined life, intellectual humility, and ethical questioning of power remain the durable Socratic inheritance. Philosophy becomes a way of living and dying, not a technical specialty alone.",
    "works": [
      "No surviving writings",
      "Plato's Apology",
      "Xenophon's Memorabilia"
    ],
    "legacy": "Socrates made philosophy synonymous with ethical self-examination and civic questioning under public scrutiny. His death scene inspired martyr ideals from antiquity through the Enlightenment and modern human-rights rhetoric. Educators, therapists, and political dissidents still invoke Socratic dialogue as a model of integrity under democratic majorities and authoritarian pressure alike. The Socratic problem—the gap among ancient sources—itself remains a lasting methodological lesson.",
    "birthDate": "-0470",
    "deathDate": "-0399"
  },
  "Confucius": {
    "lifespan": "551–479 BCE",
    "school": "Confucianism",
    "jobTitle": "teacher and political adviser",
    "knowsAbout": [
      "ritual",
      "ethics",
      "education",
      "government"
    ],
    "overview": "Confucius (Kong Qiu, 551–479 BCE) taught in the late Spring and Autumn period amid the Zhou order’s political fragmentation. Born in the state of Lu, he briefly held local office and then spent years seeking rulers who would adopt ritual-based, virtue-centered government. He presented himself as a transmitter of older Zhou culture rather than a founder of a new religion. Disciples preserved his sayings and conversations in what became the Analects, later joined to a broader Five Classics curriculum. Handbook consensus places his life at 551–479 BCE. His emphasis on moral example, education, and humane rule made him East Asia’s most enduring philosophical teacher.",
    "ideas": "Confucius centers ren (humane concern), li (ritual propriety), and xiao (filial devotion) as interlocking practices that form character. Learning is lifelong self-cultivation, not mere technical skill; the junzi models integrity that others can follow. Rulers should govern by virtue and ritual rather than coercion, because fear produces compliance without moral transformation. Rectifying names—matching words to rightful roles—keeps social language honest. He treats music, poetry, and ceremony as ethical technologies that shape desire and judgment. The Analects offers situational counsel more than a closed system, yet later Confucians systematized its themes into political and educational programs.",
    "works": [
      "Analects",
      "Five Classics tradition",
      "Spring and Autumn Annals (associated)"
    ],
    "legacy": "Confucian learning structured imperial Chinese education, family ethics, and statecraft for two millennia and spread across Korea, Japan, and Vietnam. Modern reformers and critics alike still argue with Confucius when debating hierarchy, ritual, and civic virtue. For contemporary readers, the Analects remains a primary source for classical Chinese moral and political thought.",
    "birthDate": "-0551",
    "deathDate": "-0479"
  },
  "Mencius": {
    "lifespan": "c. 371–c. 289 BCE",
    "school": "Confucianism",
    "jobTitle": "teacher and political thinker",
    "knowsAbout": [
      "moral psychology",
      "benevolence",
      "government"
    ],
    "overview": "Mencius (Meng Ke, c. 371–c. 289 BCE) was the most influential early defender of Confucian ethics in the Warring States era. He traveled among courts arguing that benevolent government was not only right but politically effective. Tradition ranks him second only to Confucius within classical Confucianism. The book Mencius records dialogues, debates with rivals, and vivid moral psychology. Handbook consensus places his life roughly in the late fourth to early third century BCE. His optimism about human nature later became a central Confucian orthodoxy.",
    "ideas": "Mencius holds that humans possess innate “sprouts” of compassion, shame, deference, and moral discernment that cultivation can grow into full virtues. Evil arises when environments starve these beginnings, not from a fixed corrupt essence. Humane government (ren zheng) prioritizes the people’s livelihood; a ruler who abandons the people forfeits legitimacy. He famously allows that removing a tyrant can be justified as punishing a criminal rather than mere regicide. Moral knowledge is tied to reflective extension of ordinary sympathetic responses. Against Mohists and Yangists he defends graded concern rooted in family while still demanding public benevolence.",
    "works": [
      "Mencius",
      "Dialogues with rulers (within Mencius)",
      "Debates with Gaozi (within Mencius)"
    ],
    "legacy": "His theory of good human nature became a major Confucian position and a lasting resource for Chinese moral psychology. Neo-Confucians elevated the Mencius within the Four Books curriculum. Modern debates on rights, rebellion, and education still return to his political ethics.",
    "birthDate": "-0371",
    "deathDate": "-0289"
  },
  "Laozi": {
    "lifespan": "traditionally 6th century BCE",
    "school": "Daoism",
    "jobTitle": "legendary sage",
    "knowsAbout": [
      "Dao",
      "non-action",
      "simplicity"
    ],
    "overview": "Laozi is the traditional sage-author of the Daodejing, though historical identity and textual formation remain contested. Early tradition places him in the sixth century BCE as an older contemporary of Confucius; many scholars see the received text as composite and later. The Daodejing criticizes coercive ambition, artificial distinctions, and noisy cleverness. It became a foundational scripture for philosophical and religious Daoism. Exact biography should stay provisional compared with better-documented figures. Its terse poetry nevertheless shaped Chinese cosmology, politics, and aesthetics for centuries.",
    "ideas": "The Dao is the nameless generative way from which the ten thousand things arise; naming and forcing distort it. Wu wei recommends non-coercive, timely action that does not strain against the grain of things. Softness, emptiness, and low position outlast hardness and display. The sage ruler empties minds of competitive craving, keeps desires few, and governs lightly. Paradox and reversal—returning, yielding, knowing the white yet keeping the black—structure its dialectic. Simplicity (pu) and contentment counteract the social harms of luxury and war.",
    "works": [
      "Daodejing",
      "Daozang commentarial tradition",
      "Huang-Lao associated texts"
    ],
    "legacy": "The Daodejing became foundational for Daoism and influenced Chinese religion, poetry, statecraft, and comparative philosophy worldwide. Translators from Victorian philologists to contemporary poets continually remake its voice. It remains a primary classical statement of anti-coercive metaphysics and politics."
  },
  "Zhuangzi": {
    "lifespan": "c. 369–c. 286 BCE",
    "school": "Daoism",
    "jobTitle": "writer and philosopher",
    "knowsAbout": [
      "skepticism",
      "spontaneity",
      "perspectivism"
    ],
    "overview": "Zhuangzi (Zhuang Zhou, c. 369–c. 286 BCE) is the namesake of a Warring States classic that mixes parable, satire, and philosophical dialogue. Parts of the text are early and closely associated with him; other chapters reflect later Daoist elaboration. He unsettles fixed standards of usefulness, rank, and certainty through humor and transformation stories. Handbook consensus places his life in the fourth–third centuries BCE. Alongside the Daodejing, the Zhuangzi defines classical philosophical Daoism’s literary peak. Comparative readers prize its perspectivism and critique of rigid language.",
    "ideas": "Knowledge claims are relative to standpoint; the famous butterfly dream questions sharp self–other boundaries. “Free and easy wandering” (xiaoyao) names a skillful ease that follows transformation rather than forcing one measure on all things. Skill stories—Cook Ding, the swimmer—show embodied attunement beyond rule-following. Debates about right and wrong often trap speakers in endless discrimination; the sage loosens attachment to winning arguments. Death and change are natural phases, not pure disasters. The text resists reducing Dao to a single doctrine while still guiding a life of spontaneity and lightness.",
    "works": [
      "Zhuangzi (Inner Chapters)",
      "Zhuangzi (Outer/Miscellaneous Chapters)",
      "Commentarial tradition (Guo Xiang et al.)"
    ],
    "legacy": "Zhuangzi’s literary philosophy shaped Daoist practice and modern discussions of pluralism, language, and freedom. Artists and writers across East Asia drew on its imagery of transformation. Contemporary philosophy of mind and comparative ethics still mines its perspectival experiments.",
    "birthDate": "-0369",
    "deathDate": "-0286"
  },
  "Marcus Aurelius": {
    "lifespan": "121–180",
    "school": "Stoicism",
    "jobTitle": "Roman emperor and philosopher",
    "knowsAbout": [
      "ethics",
      "self-discipline",
      "cosmopolitanism"
    ],
    "overview": "Marcus Aurelius (121–180 CE) was Roman emperor from 161 and a practicing Stoic who wrote private Greek notes later titled Meditations. He spent much of his reign on military campaigns along the Danube amid plague and political strain. Tutored in rhetoric and philosophy, he treated Stoicism as daily discipline rather than court ornament. The Meditations address himself: reminders to keep judgment clear, accept fate, and act justly. Handbook dates place birth in 121 and death in 180. His combination of absolute power and inward self-scrutiny made him antiquity’s emblematic philosopher-king.",
    "ideas": "Only judgment, impulse, and assent lie within our control; externals are indifferent materials for virtue. Cosmic nature is rational and providential; aligning with it is freedom. Fellow humans share reason, so justice and cosmopolitan duty bind even an emperor. Anger, vanity, and fear of death are corrected by viewing events from the whole and remembering mortality. Morning and evening reflections train attention. The Meditations recycle Stoic commonplaces into intensely personal exhortation rather than a new systematic treatise.",
    "works": [
      "Meditations",
      "Correspondence with Fronto",
      "Imperial constitutions (historical)"
    ],
    "legacy": "Meditations remains the best-known Stoic text and a perennial guide to resilience and civic responsibility. Renaissance and modern readers rediscovered it as intimate philosophy under power. Military leaders, therapists, and ethicists still quote its discipline of attention.",
    "birthDate": "0121-04-26",
    "deathDate": "0180-03-17"
  },
  "Seneca": {
    "lifespan": "c. 4 BCE–65 CE",
    "school": "Stoicism",
    "jobTitle": "statesman, playwright, and philosopher",
    "knowsAbout": [
      "ethics",
      "anger",
      "mortality"
    ],
    "overview": "Lucius Annaeus Seneca (c. 4 BCE–65 CE) was a Cordoban-born Stoic, tragic playwright, and adviser—later forced suicide victim—under Nero. His essays and Moral Letters to Lucilius adapt Stoic ethics to wealth, grief, anger, leisure, and political danger. He amassed great riches while preaching simplicity, a tension ancient and modern critics note. Exiled to Corsica under Claudius, recalled as Nero’s tutor, he finally died by imperial order. Handbook consensus places his life from the turn of the eras to 65 CE. His vivid Latin made Stoicism portable for later European readers.",
    "ideas": "Philosophy is therapy for destructive passions; anger especially must be starved before it hardens into cruelty. Time is our scarcest good; busyness without reflection wastes life. Premeditation of evils and daily self-review prepare the mind for loss. Virtue alone is good; externals are preferred or dispreferred indifferents. Letters model progressive moral training through friendship and frank counsel. Drama explores passion’s catastrophe as ethical warning alongside the prose consolations.",
    "works": [
      "Letters from a Stoic",
      "On Anger",
      "On the Shortness of Life",
      "On Mercy"
    ],
    "legacy": "Seneca’s prose transmitted Stoicism to Renaissance humanists, early modern moralists, and contemporary self-help cultures. His tragedies shaped European drama’s vocabulary of revenge and tyranny. Scholars still debate sincerity versus court compromise in his life and texts.",
    "birthDate": "-0004",
    "deathDate": "0065"
  },
  "Epictetus": {
    "lifespan": "c. 50–c. 135",
    "school": "Stoicism",
    "jobTitle": "teacher",
    "knowsAbout": [
      "agency",
      "ethics",
      "freedom"
    ],
    "overview": "Epictetus (c. 50–c. 135 CE) was born enslaved, later freed, and taught Stoicism at Nicopolis after Domitian expelled philosophers from Rome. He wrote nothing; his student Arrian recorded the Discourses and distilled the Enchiridion. Teaching focused on lived discipline rather than literary display. Handbook consensus places his activity in the late first and early second centuries. His classroom voice is severe, practical, and psychologically acute. Through Arrian he became, with Seneca and Marcus, a primary conduit of Roman Stoicism.",
    "ideas": "The master key is the dichotomy of control: judgment and choice depend on us; body, property, and reputation do not. Freedom is governing assent, not rearranging the world. Roles—citizen, sibling, guest—carry duties that structure appropriate action. Desire and aversion must be trained so that virtue alone is pursued as good. Insults and losses harm only if we grant them power through opinion. Philosophy is rehearsal for living and dying without panic or servility.",
    "works": [
      "Discourses",
      "Enchiridion",
      "Fragments (Arrian)"
    ],
    "legacy": "His concise moral discipline influenced Christian ascetic writers, early modern moralists, and modern cognitive therapies. Military and clinical ethics programs still assign the Enchiridion. He remains Stoicism’s clearest teacher of agency under constraint.",
    "birthDate": "0050",
    "deathDate": "0135"
  },
  "Friedrich Nietzsche": {
    "lifespan": "1844–1900",
    "school": "genealogy and vitalism",
    "jobTitle": "philosopher and classical philologist",
    "knowsAbout": [
      "morality",
      "culture",
      "nihilism",
      "art"
    ],
    "overview": "Friedrich Nietzsche (1844–1900) was a German classical philologist who became a radical critic of morality, metaphysics, and modern culture. Appointed professor at Basel at twenty-four, he resigned from ill health and wrote in solitude across Switzerland, Italy, and Germany. Aphoristic books fuse philology, psychology, and cultural diagnosis. After a mental collapse in 1889 he lived incapacitated until death in 1900; sister Elisabeth later distorted his Nachlass politically. Handbook dates are firm: 1844–1900. He refused systematic academic philosophy yet reshaped twentieth-century thought.",
    "ideas": "Genealogical critique traces “good” and “evil” to historical power struggles rather than eternal reason. Perspectivism denies a view from nowhere without collapsing into lazy relativism. The will to power names interpretive and creative force in life, not a crude political slogan. “God is dead” diagnoses European nihilism after the loss of theological guarantees. Ideals of self-overcoming, affirmation, and the Übermensch answer that crisis without Christian or democratic leveling—as Nietzsche saw them. Art, especially tragic and Dionysian art, discloses values philosophy alone cannot secure.",
    "works": [
      "Thus Spoke Zarathustra",
      "Beyond Good and Evil",
      "On the Genealogy of Morality",
      "The Gay Science"
    ],
    "legacy": "He transformed existentialism, psychoanalysis, literary theory, and poststructuralism, despite frequent ideological misappropriation. Critical editions and scholarship have worked to separate his texts from fascist abuse. Debates on morality, modernity, and meaning still orbit his provocations.",
    "birthDate": "1844-10-15",
    "deathDate": "1900-08-25"
  },
  "Immanuel Kant": {
    "lifespan": "1724–1804",
    "school": "German idealism",
    "jobTitle": "philosopher and professor",
    "knowsAbout": [
      "epistemology",
      "ethics",
      "aesthetics",
      "law"
    ],
    "overview": "Immanuel Kant (1724–1804) spent nearly his entire life in Königsberg, rising from tutor to professor at the university there. After early scientific and metaphysical essays, the Critique of Pure Reason (1781/1787) launched his “critical” philosophy. He asked how synthetic a priori knowledge is possible and how moral obligation can bind autonomous agents. Later Critiques treated practical reason and aesthetic/teleological judgment. Handbook dates—born 22 April 1724, died 12 February 1804—are secure. He became the hinge between early modern rationalism/empiricism and German idealism.",
    "ideas": "The mind’s a priori forms of intuition (space, time) and categories structure experience; we know appearances, not things in themselves. Synthetic a priori judgments make mathematics and pure natural science possible within those bounds. Morality rests on autonomy: the categorical imperative tests maxims by universalizability and respect for humanity as end. Freedom is a practical postulate required by moral law. Aesthetic judgment claims subjective universality without reducing beauty to concepts. Religion and politics are reinterpreted within reason’s limits—perpetual peace, publicity, and moral faith rather than speculative proofs of God.",
    "works": [
      "Critique of Pure Reason",
      "Groundwork of the Metaphysics of Morals",
      "Critique of Judgment",
      "Critique of Practical Reason"
    ],
    "legacy": "Kant set the agenda for German idealism and remains central to epistemology, ethics, aesthetics, and human-rights discourse. Analytic and Continental traditions alike continually renegotiate his dualisms. University curricula treat the Critiques as unavoidable modern landmarks.",
    "birthDate": "1724-04-22",
    "deathDate": "1804-02-12"
  },
  "John Dewey": {
    "lifespan": "1859–1952",
    "school": "Pragmatism",
    "jobTitle": "philosopher and educator",
    "knowsAbout": [
      "democracy",
      "education",
      "experience"
    ],
    "overview": "John Dewey (1859–1952) was the leading American pragmatist of the progressive era, joining philosophy to experimental education and democratic reform. Educated at Vermont and Johns Hopkins, he taught at Michigan, Chicago—where he ran the Laboratory School—and Columbia. He treated ideas as instruments arising in problematic situations, tested by consequences. Public writing spanned schools, art, liberalism, and war. Handbook dates: 1859–1952. His influence on pedagogy and public philosophy outstripped most academic contemporaries.",
    "ideas": "Inquiry reconstructs experience by forming hypotheses and testing consequences in a shared world. Democracy is a way of associated living and communicative problem-solving, not merely periodic voting. Education should cultivate experimental intelligence and social sympathy rather than passive absorption of fixed content. Experience is transactional: organism and environment continuously reshape each other. Values emerge in inquiry; they are not imported from a separate realm of ends. Publics form when indirect consequences of action become recognized problems requiring cooperative control.",
    "works": [
      "Democracy and Education",
      "Experience and Nature",
      "The Public and Its Problems",
      "Art as Experience"
    ],
    "legacy": "Dewey shaped progressive education worldwide and American social philosophy’s experimental temper. Critics fault optimism or technocratic drift; defenders recover his democratic radicalism. He remains pragmatism’s most institutionally consequential voice.",
    "birthDate": "1859-10-20",
    "deathDate": "1952-06-01"
  },
  "Ludwig Wittgenstein": {
    "lifespan": "1889–1951",
    "school": "analytic philosophy",
    "jobTitle": "philosopher",
    "knowsAbout": [
      "language",
      "logic",
      "mind",
      "meaning"
    ],
    "overview": "Ludwig Wittgenstein (1889–1951), born in Vienna to a wealthy industrial family, studied engineering then logic with Russell at Cambridge. The Tractatus Logico-Philosophicus (1921) aimed to draw limits to sense; he then left academic philosophy for years as a teacher and architect’s assistant. Returning to Cambridge, he developed a later philosophy published posthumously as Philosophical Investigations. He served in World War I and lived with austere intensity. Handbook dates: 1889–1951. Few thinkers so thoroughly reinvented their own method mid-career.",
    "ideas": "The Tractatus links meaningful propositions to logical pictures of states of affairs and consigns ethics and the mystical to silence beyond sense. Later work rejects a single essence of language: meaning is use within language-games embedded in forms of life. Philosophical problems often arise from linguistic bewitchment—stretching words beyond their ordinary homes. Rule-following and private language arguments challenge pictures of meaning as inner ostension. Therapy replaces theory-building: the aim is to dissolve confusion, not erect a new system. Logic and mathematics are activities within practices, not mirrors of a crystalline world beyond.",
    "works": [
      "Tractatus Logico-Philosophicus",
      "Philosophical Investigations",
      "On Certainty",
      "Blue and Brown Books"
    ],
    "legacy": "He redirected twentieth-century philosophy of language, mind, logic, and ordinary practice across analytic traditions. Ordinary-language philosophy, therapeutic readings, and quietism all claim his inheritance. Artists and social theorists also appropriated language-game imagery.",
    "birthDate": "1889-04-26",
    "deathDate": "1951-04-29"
  },
  "Bertrand Russell": {
    "lifespan": "1872–1970",
    "school": "analytic philosophy",
    "jobTitle": "philosopher, logician, and activist",
    "knowsAbout": [
      "logic",
      "mathematics",
      "knowledge",
      "peace"
    ],
    "overview": "Bertrand Russell (1872–1970) was a British philosopher, logician, and public intellectual who helped found analytic philosophy. With A. N. Whitehead he pursued logicism in Principia Mathematica; “On Denoting” transformed theory of reference. He wrote accessible books on knowledge, religion, and happiness alongside technical work. Pacifism in World War I cost him Cambridge employment; later he campaigned against nuclear weapons. Handbook dates: 1872–1970. Nobel Prize in Literature (1950) recognized his philosophical prose and advocacy.",
    "ideas": "Logicism holds that mathematics is reducible to logic; type theory aimed to block paradoxes such as Russell’s own. The theory of descriptions analyzes definite descriptions so that empty reference need not posit nonexistent entities. Knowledge by acquaintance versus description structures his early epistemology. Logical atomism sought to map language onto simple facts—later modified under criticism. Ethically and politically he defended liberalism, scientific temper, and anti-authoritarian education. Clarity and argumentative charity were methodological ideals as much as doctrines.",
    "works": [
      "Principia Mathematica",
      "On Denoting",
      "The Problems of Philosophy",
      "History of Western Philosophy"
    ],
    "legacy": "His technical methods and public intellectual role shaped modern analytic philosophy and popular philosophy writing. Students including Wittgenstein transformed, then contested, his program. Activism linked logical rigor to civic courage in the nuclear age.",
    "birthDate": "1872-05-18",
    "deathDate": "1970-02-02"
  },
  "Karl Popper": {
    "lifespan": "1902–1994",
    "school": "critical rationalism",
    "jobTitle": "philosopher of science",
    "knowsAbout": [
      "science",
      "falsification",
      "politics"
    ],
    "overview": "Karl Popper (1902–1994) was an Austrian-born philosopher of science and politics who spent his mature career in New Zealand and at the London School of Economics. Fleeing Nazism, he developed critical rationalism against verificationism and historicist prophecy. The Logic of Scientific Discovery (German 1934; English 1959) made falsifiability famous. The Open Society and Its Enemies (1945) attacked Plato, Hegel, and Marx as enemies of liberal criticism. Handbook dates: 1902–1994. He became one of the twentieth century’s most cited philosophers of science.",
    "ideas": "Scientific theories advance by bold conjectures that risk refutation; confirmation never yields final proof. Demarcation from pseudo-science turns on falsifiability, not inductive verification. Knowledge is fallible and grows through criticism, including of our best theories. Historicism—predicting inevitable social laws—licenses tyranny and blocks piecemeal reform. The open society protects institutions of criticism, individual freedom, and reversible policy. Probability and corroboration measure past survival of tests, not inductive certainty.",
    "works": [
      "The Logic of Scientific Discovery",
      "The Open Society and Its Enemies",
      "Conjectures and Refutations",
      "The Poverty of Historicism"
    ],
    "legacy": "Falsificationism remains a touchstone—and target—in philosophy of science and science education. Liberal democrats drew on his defense of criticism against totalizing ideologies. Debates on induction, probability, and political prophecy still engage his framework.",
    "birthDate": "1902-07-28",
    "deathDate": "1994-09-17"
  },
  "René Descartes": {
    "lifespan": "1596–1650",
    "school": "Rationalism",
    "jobTitle": "philosopher and mathematician",
    "knowsAbout": [
      "method",
      "mind",
      "mathematics"
    ],
    "overview": "René Descartes (1596–1650) was a French mathematician and philosopher who helped launch early modern rationalism. Educated by Jesuits, he traveled as a soldier and settled for long periods in the Dutch Republic. Discourse on Method and the Meditations sought certain foundations for science after skeptical crisis. He corresponded widely and briefly tutored Queen Christina of Sweden, where he died. Handbook dates: 1596–1650. Analytic geometry and mechanistic physics accompany his metaphysical dualism.",
    "ideas": "Methodic doubt strips away uncertain beliefs until the cogito—thinking existence—stands firm. Clear and distinct perception, guaranteed by a non-deceiving God, rebuilds knowledge of mind, God, and material nature. Mind is thinking substance; body is extended substance—raising the interaction problem. Mathematical physics explains nature by figure and motion rather than substantial forms. Error arises from will outrunning understanding. The passions are explained physiologically yet ethically trainable for a contented life.",
    "works": [
      "Meditations on First Philosophy",
      "Discourse on Method",
      "Principles of Philosophy",
      "Passions of the Soul"
    ],
    "legacy": "Descartes became the emblematic modern subject and a permanent sparring partner for empiricists, Kantians, and phenomenologists. His mathematics reshaped science; his dualism frames mind–body debates still. Classroom philosophy often begins with the Meditations’ skeptical ascent.",
    "birthDate": "1596-03-31",
    "deathDate": "1650-02-11"
  },
  "G. W. F. Hegel": {
    "lifespan": "1770–1831",
    "school": "German idealism",
    "jobTitle": "philosopher and professor",
    "knowsAbout": [
      "history",
      "dialectic",
      "recognition",
      "freedom"
    ],
    "overview": "Georg Wilhelm Friedrich Hegel (1770–1831) was the systematic giant of German idealism, teaching at Jena, Nuremberg, Heidelberg, and Berlin. Phenomenology of Spirit (1807) narrates consciousness’s education toward absolute knowing; later Encyclopaedia and Philosophy of Right unfold logic, nature, and spirit. He lived through the French Revolution’s aftermath and Napoleon’s European upheavals. Handbook dates: 1770–1831. Students split into rival Left and Right Hegelians after his death.",
    "ideas": "Reality is intelligible as dialectical development: contradictions in limited standpoints drive Aufhebung—cancellation and preservation at a higher level. Spirit (Geist) comes to know itself through history, culture, and institutions. Freedom is not mere arbitrary choice but being-with-oneself in rational ethical life (Sittlichkeit)—family, civil society, and state. Logic analyzes categories as living determinations, not empty forms. Art, religion, and philosophy are modes of absolute spirit’s self-presentation. History is rational in retrospect as the progress of freedom’s consciousness, without denying contingency’s pain.",
    "works": [
      "Phenomenology of Spirit",
      "Science of Logic",
      "Philosophy of Right",
      "Encyclopaedia of the Philosophical Sciences"
    ],
    "legacy": "Hegel shaped Marxism, existentialism, British idealism, and contemporary recognition theory. Analytic neglect reversed late in the twentieth century with renewed metaphysical and political readings. He remains indispensable—and controversial—for philosophies of history and freedom.",
    "birthDate": "1770-08-27",
    "deathDate": "1831-11-14"
  },
  "Hannah Arendt": {
    "lifespan": "1906–1975",
    "school": "political theory",
    "jobTitle": "political theorist",
    "knowsAbout": [
      "totalitarianism",
      "action",
      "judgment"
    ],
    "overview": "Hannah Arendt (1906–1975) was a German-Jewish political theorist who fled Nazism and wrote in the United States in English and German. A student of Heidegger and Jaspers, she refused the label “philosopher” yet produced lasting works on totalitarianism, revolution, and the vita activa. The Origins of Totalitarianism (1951) and The Human Condition (1958) made her public intellectual standing. Coverage of Eichmann’s trial coined “the banality of evil,” sparking fierce debate. Handbook dates: 1906–1975. Statelessness and exile shaped her civic thought.",
    "ideas": "She distinguishes labor, work, and action: action in the public realm discloses agents and founds political freedom. Totalitarianism atomizes society and makes terror a permanent principle, destroying spontaneity. Plurality—the fact that humans are distinct—is the condition of politics; tyranny flees it. Thinking as inner dialogue is a safeguard against thoughtless evil, yet thinking alone does not guarantee goodness. Revolutions succeed when they institutionalize freedom, not only liberation from oppression. Authority, power, and violence are carefully separated conceptual tools.",
    "works": [
      "The Origins of Totalitarianism",
      "The Human Condition",
      "Eichmann in Jerusalem",
      "On Revolution"
    ],
    "legacy": "Arendt anchors contemporary debates on totalitarianism, human rights, and public space. Controversies over Eichmann and Zionism keep her reception contested. Political theory curricula treat her as a twentieth-century classic of civic freedom.",
    "birthDate": "1906-10-14",
    "deathDate": "1975-12-04"
  },
  "Francis Bacon": {
    "lifespan": "1561–1626",
    "school": "empiricism",
    "jobTitle": "statesman and philosopher",
    "knowsAbout": [
      "induction",
      "science",
      "method"
    ],
    "overview": "Francis Bacon (1561–1626) was an English statesman, jurist, and philosopher of inductive science under Elizabeth I and James I. He rose to Lord Chancellor before falling in a bribery scandal. The Advancement of Learning and Novum Organum urged a new method to relieve mankind’s estate through organized experiment. He died after a chill caught in a snow-preservation experiment—an emblematic anecdote of the new science. Handbook dates: 1561–1626. He became a patron saint of empiricism and scientific societies.",
    "ideas": "Idols of the tribe, cave, marketplace, and theatre distort natural inquiry; method must correct them. Induction should proceed by controlled elimination and tables of presence/absence, not hasty generalization. Knowledge is power oriented to works that improve human life. Natural philosophy should be collaborative and institutional, not solitary scholastic disputation. Final causes belong to metaphysics/theology; physics tracks efficient and material operations. Aphoristic style models provisional, progressive inquiry.",
    "works": [
      "Novum Organum",
      "The Advancement of Learning",
      "New Atlantis",
      "Essays"
    ],
    "legacy": "Bacon inspired the Royal Society’s self-image and early modern experimental rhetoric. Critics note gaps between his method and later hypothetico-deductive science. His Essays remain models of worldly moral counsel.",
    "birthDate": "1561-01-22",
    "deathDate": "1626-04-09"
  },
  "Simone Weil": {
    "lifespan": "1909–1943",
    "school": "Christian mysticism",
    "jobTitle": "philosopher and activist",
    "knowsAbout": [
      "attention",
      "affliction",
      "justice"
    ],
    "overview": "Simone Weil (1909–1943) was a French philosopher, mystic, and political activist who taught, worked in factories, and engaged labor and anti-fascist causes. A brilliant Normalienne, she sought experiential solidarity with the oppressed. Writings on attention, affliction, and force were mostly published after her early death in England. She combined Platonic and Christian motifs with rigorous social criticism. Handbook dates: 1909–1943. Short life and intensity made her a twentieth-century spiritual-philosophical witness.",
    "ideas": "Attention is the rarest and purest form of generosity—emptying the self to receive reality and the neighbor. Affliction (malheur) destroys the “I” and reveals both social crushing and spiritual possibility. Force turns persons into things; the Iliad becomes a document of that metamorphosis. Obligations precede rights in her moral grammar; roots (enracinement) name needed cultural nourishment. Decreation and waiting on God describe a mysticism allergic to consolatory ideology. Labor, geometry, and prayer alike train consent to necessity.",
    "works": [
      "Gravity and Grace",
      "The Need for Roots",
      "Waiting for God",
      "Oppression and Liberty"
    ],
    "legacy": "Weil influences theology, political ethics, and theories of attention far beyond academic philosophy departments. Activists and contemplatives alike claim her. Controversies over self-starvation and church boundaries accompany her reception.",
    "birthDate": "1909-02-03",
    "deathDate": "1943-08-24"
  },
  "Anselm of Canterbury": {
    "lifespan": "c. 1033–1109",
    "school": "Scholasticism",
    "jobTitle": "theologian and archbishop",
    "knowsAbout": [
      "faith",
      "reason",
      "God"
    ],
    "overview": "Anselm of Canterbury (1033–1109) was a Benedictine theologian, prior and abbot of Bec, then archbishop of Canterbury amid investiture conflicts with English kings. Born in Aosta, he brought a rigorous “faith seeking understanding” to Latin scholastic theology. The Proslogion presents the famous ontological argument; Cur Deus Homo rethinks atonement. Handbook dates: 1033–1109. He stands between monastic meditation and high medieval scholastic method.",
    "ideas": "Credo ut intelligam: faith seeks reasons without treating reason as faith’s foundation. God is “that than which nothing greater can be thought”; existence in reality follows from this notion on pain of contradiction—his ontological argument. Satisfaction theory explains the Incarnation as restoring honor and justice disordered by sin. Free will and truth receive careful conceptual analyses in smaller treatises. Prayer and logic intertwine; the Proslogion is addressed to God. He models scholastic clarity without yet using full Aristotelian university apparatus.",
    "works": [
      "Proslogion",
      "Monologion",
      "Cur Deus Homo",
      "De Veritate"
    ],
    "legacy": "The ontological argument structured debates from Aquinas and Descartes to Kant and contemporary analytic philosophy of religion. Atonement theology continually revisits Cur Deus Homo. He remains a bridge from monastic to scholastic Christian thought.",
    "birthDate": "1033",
    "deathDate": "1109"
  },
  "William of Ockham": {
    "lifespan": "c. 1287–1347",
    "school": "Nominalism",
    "jobTitle": "friar and logician",
    "knowsAbout": [
      "logic",
      "universals",
      "economy"
    ],
    "overview": "William of Ockham (c. 1287–1347) was an English Franciscan philosopher-theologian associated with late medieval nominalism. Educated at Oxford, he faced doctrinal charges at Avignon and later sided with the Franciscan minister general against Pope John XXII on poverty. Political writings defended limits on papal power. Handbook consensus places his life c. 1287–1347. “Ockham’s razor” popularly names his preference for theoretical parsimony.",
    "ideas": "Universals are names and concepts, not shared real forms existing outside the mind. Cognition begins with intuitive grasp of particulars; abstraction yields general terms. Razor-like parsimony rejects unnecessary entities in explanations. God’s absolute power (potentia absoluta) underscores contingency of the created order without denying ordained regularity. Ethics emphasizes will and divine command themes in contested modern readings. Church–empire polemics argue that spiritual and temporal jurisdictions must be distinguished to protect evangelical poverty and secular legitimacy.",
    "works": [
      "Summa Logicae",
      "Quodlibetal Questions",
      "Opera Politica",
      "Commentary on the Sentences"
    ],
    "legacy": "Nominalism and logical theory shaped late scholastic and early modern philosophy. Political tracts fed conciliar and secularizing debates. The razor became a proverb of scientific method beyond its medieval setting.",
    "birthDate": "1287",
    "deathDate": "1347"
  },
  "Mozi": {
    "lifespan": "c. 470–c. 391 BCE",
    "school": "Mohism",
    "jobTitle": "teacher and social reformer",
    "knowsAbout": [
      "impartial care",
      "utility",
      "peace"
    ],
    "overview": "Mozi (Mo Di, c. 470–c. 391 BCE) founded Mohism, a Warring States school rivaling early Confucianism. A former craftsmanly or artisan milieu is often inferred from the text’s technical and disciplinary tone. Mohists organized disciplined groups advocating inclusive care and opposing aggressive war. The Mozi compiles doctrines, logic, and military defense chapters. Handbook dates are approximate for the fifth–fourth centuries BCE. His challenge forced Confucians to clarify graded love and ritual expense.",
    "ideas": "Jian ai (impartial concern) extends care beyond one’s own kin to all, measured by benefit to the world. Heaven (Tian) desires righteousness and watches conduct—an early form of divine command cum consequentialist ethic. Condemnations of elaborate funerals, music, and fatalism target waste and passivity. Standards of judgment appeal to the will of Heaven, evidence of the ancients, and present utility. Dialectical chapters develop names, disputation, and model-based reasoning. Defensive warfare manuals show pragmatic statecraft allied to anti-aggression ethics.",
    "works": [
      "Mozi",
      "Dialectical chapters (Mozi)",
      "Against Offensive War (Mozi)"
    ],
    "legacy": "Mohism nearly vanished as a living school after the Qin–Han but remains crucial for reconstructing classical Chinese ethics and logic. Comparative philosophers read Mozi as an early consequentialist voice. Confucian orthodoxy defined itself partly against his critiques.",
    "birthDate": "-0470",
    "deathDate": "-0391"
  },
  "Sunzi": {
    "lifespan": "traditionally 5th century BCE",
    "school": "military strategy",
    "jobTitle": "strategist",
    "knowsAbout": [
      "strategy",
      "conflict",
      "leadership"
    ],
    "overview": "Sunzi (Sun Wu) is the traditional author of The Art of War, a classic of Chinese strategic thought usually dated to the late Spring and Autumn or early Warring States milieu. Historical details are sparse and partly legendary; the text may be composite. It treats warfare as a matter of assessment, deception, and economy of force rather than mere valor. Handbook tradition links him to the state of Wu. The work entered military canons across East Asia and, much later, global business and strategy literature.",
    "ideas": "Supreme excellence is subduing the enemy without battle when possible; calculation precedes combat. Know yourself and the opponent; terrain, weather, leadership, and doctrine are measurable factors. Deception, speed, and formlessness (avoiding fixed shape) preserve initiative. Victory favors those who create situations of imbalance rather than meeting strength with strength. Discipline and clear rewards/punishments make armies instruments of policy. War serves the state’s survival and should not be romanticized.",
    "works": [
      "The Art of War",
      "Commentarial tradition (Cao Cao et al.)",
      "Sun Bin Bingfa (related corpus)"
    ],
    "legacy": "Sunzi became East Asia’s premier military classic and a global metaphor for strategic thinking. Business, diplomacy, and e-sports cultures continually retranslate its maxims. Historians caution against reading it as a single autobiographical voice."
  },
  "Zhang Zai": {
    "lifespan": "1020–1077",
    "school": "Neo-Confucianism",
    "jobTitle": "philosopher",
    "knowsAbout": [
      "qi",
      "cosmos",
      "ethics"
    ],
    "overview": "Zhang Zai (1020–1077) was a Northern Song Neo-Confucian cosmologist and moral thinker associated with the “gas” (qi) metaphysics of the period. Teaching in Guanzhong, he influenced later Cheng-Zhu orthodoxy even where they revised him. The Western Inscription became a famous statement of cosmic kinship. Handbook dates: 1020–1077. He bridges classical Confucian ethics and Song metaphysical systematization.",
    "ideas": "All things are condensations and dispersions of qi; void and form are phases of one continuum. Heaven and Earth are parents; all people are siblings—ethics expands from cosmic kinship. Human nature must be clarified by transforming impure qi through ritual and learning. Knowledge of the moral mind differs from mere sensory knowing. Pacifism and practical statecraft appear in his political reflections. The Western Inscription lyricizes unity without erasing differentiated duties.",
    "works": [
      "Correcting Ignorance (Zheng meng)",
      "Western Inscription",
      "Collected works (Zhangzi quanshu)"
    ],
    "legacy": "Zhang’s qi cosmology shaped Neo-Confucian natural philosophy and modern New Confucian retrievals. The Western Inscription remains a touchstone for Confucian universalism. He ranks among the foundational Song masters.",
    "birthDate": "1020",
    "deathDate": "1077"
  },
  "Wang Fuzhi": {
    "lifespan": "1619–1692",
    "school": "Confucian realism",
    "jobTitle": "philosopher and historian",
    "knowsAbout": [
      "history",
      "qi",
      "ethics"
    ],
    "overview": "Wang Fuzhi (1619–1692) was a Ming–Qing Confucian philosopher who refused service to the Manchu Qing and wrote in seclusion. A fierce critic of Song–Ming metaphysical dualisms he judged empty, he emphasized concrete historical qi and practical learning. Massive commentaries on the Changes, Chronicles, and Four Books survive. Handbook dates: 1619–1692. Nationalism and historicism in his work attracted modern Chinese readers.",
    "ideas": "Dao is inseparable from concrete vessels and historical situations; empty talk of principle above qi misleads. Human nature develops in embodied practice within institutions. History teaches political prudence; ethnic and civilizational continuity mattered to his Ming loyalism. Emotions and desires are not simply to be suppressed but ordered in context. Commentarial method recovers classical meaning against Buddhist and Daoist dilutions as he saw them. Knowledge aims at governing and self-cultivation in a ruined age.",
    "works": [
      "Commentary on the Yijing",
      "Readings of the Four Books",
      "Yellow Book (Huang shu)",
      "Records of Thinking"
    ],
    "legacy": "Late Qing and twentieth-century reformers revived Wang as a resource for historical Confucianism and anti-abstract metaphysics. He remains central to studies of Ming loyalist thought. Comparativists note his proto-historicist temper.",
    "birthDate": "1619",
    "deathDate": "1692"
  },
  "Wang Guowei": {
    "lifespan": "1877–1927",
    "school": "modern Chinese philosophy",
    "jobTitle": "scholar and critic",
    "knowsAbout": [
      "aesthetics",
      "literature",
      "comparative thought"
    ],
    "overview": "Wang Guowei (1877–1927) was a late Qing–Republican scholar who joined classical Chinese learning with Western aesthetics and philosophy. He wrote on tragedy, ci poetry, oracle bones, and the history of Song–Yuan drama. After the Qing fall he retained a complex loyalty that ended in suicide at Kunming Lake. Handbook dates: 1877–1927. He exemplifies China’s early encounter with Schopenhauer, Kant, and Nietzsche.",
    "ideas": "Aesthetic “worlds” (jingjie) measure poetic excellence by the fusion of feeling and scene. Tragedy and desire draw on Schopenhauerian themes of will and resignation refracted through Chinese genres. Scholarship should combine evidential research (kaozheng) with philosophical reflection. Cultural crisis after dynastic collapse frames his sense of form and fate. He treats literature as a site where metaphysical longing becomes visible. Bridging traditions meant neither simple Westernization nor closed classicism.",
    "works": [
      "Remarks on Lyrics in the Human World",
      "History of Song and Yuan Drama",
      "Studies on Oracle-Bone Inscriptions",
      "Essays on aesthetics"
    ],
    "legacy": "Wang shaped modern Chinese literary criticism and the academic study of early China. His suicide became a cultural symbol of the old order’s end. Aesthetic vocabulary of jingjie remains standard in Chinese poetics.",
    "birthDate": "1877",
    "deathDate": "1927"
  },
  "Feng Youlan": {
    "lifespan": "1895–1990",
    "school": "modern Confucianism",
    "jobTitle": "philosopher and historian",
    "knowsAbout": [
      "Chinese philosophy",
      "metaphysics",
      "history"
    ],
    "overview": "Feng Youlan (1895–1990) was a leading twentieth-century historian and reconstructor of Chinese philosophy, trained partly at Columbia under pragmatist influence. His multi-volume History of Chinese Philosophy introduced generations to a systematic narrative of schools. He later worked under PRC intellectual constraints, revising positions across political campaigns. Handbook dates: 1895–1990. He sought a “new lixue” continuous with Song Neo-Confucianism yet modern.",
    "ideas": "Chinese philosophy can be periodized and compared with Western categories without erasing its problems. A new Rational Philosophy updates Cheng-Zhu themes for a scientific age. Sphere-of-living ethics ranks natural, utilitarian, moral, and transcendent attitudes. Historical writing should clarify methods and schools rather than mere anthology. Engagement with Marxism forced continual renegotiation of idealism and materialism labels. Clarity for students was itself a philosophical vocation.",
    "works": [
      "A History of Chinese Philosophy",
      "New Rational Philosophy (Xin lixue)",
      "A New Treatise on the Nature of Man",
      "Selected philosophical essays"
    ],
    "legacy": "Feng’s History remained a gateway text in China and in English translation abroad. Debates on his political compromises accompany respect for his synthesis. He helped make “Chinese philosophy” a modern academic field.",
    "birthDate": "1895",
    "deathDate": "1990"
  },
  "Liang Shuming": {
    "lifespan": "1893–1988",
    "school": "modern Confucianism",
    "jobTitle": "philosopher and reformer",
    "knowsAbout": [
      "culture",
      "rural reconstruction",
      "Confucianism"
    ],
    "overview": "Liang Shuming (1893–1988) was a modern Confucian thinker and rural reformer who argued for China’s cultural distinctiveness against wholesale Westernization. Though not a classicist by training alone, he taught at Peking University and led village reconstruction efforts. Eastern and Western Cultures and Their Philosophies (1921) made him famous. Handbook dates: 1893–1988. He debated Mao and Marxists while defending Confucian ethical life.",
    "ideas": "Cultures orient will differently: Western forward-conquest, Chinese harmonizing adjustment, Indian world-renunciation—ideal types for comparison. China’s path should renew Confucian reasonableness rather than copy Western conflict models wholesale. Rural reconstruction builds ethical community from the village upward. Intuition and moral reason (liangzhi themes) outrank utilitarian calculation in human relations. Buddhism and Confucianism both informed his evolving stages of thought. Modernization without cultural self-hatred was his civic aim.",
    "works": [
      "Eastern and Western Cultures and Their Philosophies",
      "The Substance of Chinese Culture",
      "Writings on rural reconstruction",
      "Treatise on Confucian philosophy"
    ],
    "legacy": "Liang became a emblem of New Confucian cultural confidence and agrarian reform idealism. Historians study his debates as a map of Republican intellectual options. His comparative typology remains influential and contested.",
    "birthDate": "1893",
    "deathDate": "1988"
  },
  "Gottfried Wilhelm Leibniz": {
    "lifespan": "1646–1716",
    "school": "Rationalism",
    "jobTitle": "philosopher, mathematician, and diplomat",
    "knowsAbout": [
      "metaphysics",
      "logic",
      "calculus"
    ],
    "overview": "Gottfried Wilhelm Leibniz (1646–1716) was a German polymath—philosopher, mathematician, jurist, and diplomat—who developed calculus independently of Newton and a metaphysical system of monads. Serving courts at Mainz and Hanover, he corresponded across Europe’s republic of letters. Essays on theodicy, logic, and China show encyclopedic range. Handbook dates: 1646–1716. He sought reconciliations: faith and reason, Catholic and Protestant, East and West.",
    "ideas": "Reality consists of windowless monads—simple substances whose perceptions unfold in pre-established harmony. This is the best of possible worlds, chosen by a wise God—his theodicy of optimism. Truths of reason versus truths of fact structure modality and contingency. Sufficient reason and identity of indiscernibles guide metaphysics. Infinitesimal calculus and binary arithmetic display his mathematical originality. Chinese rites controversy and universal character projects show his comparative and formal ambitions.",
    "works": [
      "Monadology",
      "Discourse on Metaphysics",
      "Theodicy",
      "New Essays on Human Understanding"
    ],
    "legacy": "Leibniz shaped modern logic, metaphysics, and the calculus priority dispute’s aftermath. Optimism became a European debating point from Voltaire onward. Computer science and formal semantics still salute his combinatorial dreams.",
    "birthDate": "1646",
    "deathDate": "1716"
  },
  "Jeremy Bentham": {
    "lifespan": "1748–1832",
    "school": "Utilitarianism",
    "jobTitle": "philosopher and reformer",
    "knowsAbout": [
      "utility",
      "law",
      "reform"
    ],
    "overview": "Jeremy Bentham (1748–1832) was the English founder of classical utilitarianism and a relentless legal reformer. Trained at Oxford and Lincoln’s Inn, he spent decades drafting codes, critiquing common law fictions, and proposing institutions such as the Panopticon. An Introduction to the Principles of Morals and Legislation (1789) states the greatest-happiness principle. Handbook dates: 1748–1832. His auto-icon at UCL literalizes a life devoted to public utility.",
    "ideas": "Pleasure and pain are sovereign masters; the principle of utility judges acts by effects on happiness. Intensities, duration, certainty, and extent of pleasures are measurable in principle—felicific calculus. Rights talk without utility is “nonsense upon stilts,” yet legal rights can be justified instrumentally. Codification should replace opaque precedent with transparent rules. Panoptic surveillance designs discipline through visibility—later a critical metaphor for modern power. Animal suffering counts in the moral calculus because sentience, not reason, matters.",
    "works": [
      "An Introduction to the Principles of Morals and Legislation",
      "Of Laws in General",
      "Constitutional Code",
      "Panopticon writings"
    ],
    "legacy": "Bentham fathered utilitarian ethics, animal ethics openings, and much modern policy analysis language. Foucault and others turned the Panopticon against his progressive self-image. Legal positivism and reform movements continually revisit his drafts.",
    "birthDate": "1748",
    "deathDate": "1832"
  },
  "Charles Sanders Peirce": {
    "lifespan": "1839–1914",
    "school": "Pragmatism",
    "jobTitle": "logician and scientist",
    "knowsAbout": [
      "signs",
      "inquiry",
      "logic"
    ],
    "overview": "Charles Sanders Peirce (1839–1914) was an American logician, scientist, and founder of pragmatism (which he later renamed pragmaticism). Employed irregularly by the Coast Survey and in brief academic posts, he wrote vast unpublished manuscripts. He developed semiotics, abductive inference, and a fallibilist philosophy of science. Handbook dates: 1839–1914. Poverty marked his later years despite seminal influence.",
    "ideas": "The pragmatic maxim clarifies meaning by conceivable practical bearings of a conception. Inquiry is a self-correcting community process aiming at truth as the ideal end of investigation. Abduction, deduction, and induction form a cycle of hypothesis and test. Signs are icons, indices, and symbols in a triadic semiotics. Synechism and tychism affirm continuity and real chance in nature. Categories of Firstness, Secondness, and Thirdness structure phenomenology and metaphysics.",
    "works": [
      "Collected Papers",
      "Illustrations of the Logic of Science essays",
      "Syllabus of Certain Topics of Logic",
      "Writings on existential graphs"
    ],
    "legacy": "Peirce underpins pragmatism, modern semiotics, and philosophies of science emphasizing fallibilism. James and Dewey popularized related themes he often disputed in detail. Formal logic and AI-era semiotics still mine his archives.",
    "birthDate": "1839",
    "deathDate": "1914"
  },
  "George Santayana": {
    "lifespan": "1863–1952",
    "school": "naturalism",
    "jobTitle": "philosopher and writer",
    "knowsAbout": [
      "reason",
      "culture",
      "aesthetics"
    ],
    "overview": "George Santayana (1863–1952) was a Spanish-born American philosopher, poet, and novelist who taught at Harvard before retiring to Europe. The Life of Reason and Scepticism and Animal Faith develop a naturalistic yet Platonizing vision. He wrote elegant English prose on beauty, religion, and culture. Handbook dates: 1863–1952. Though often grouped with pragmatists, he kept ironic distance from American optimism.",
    "ideas": "Animal faith names the unavoidable trust that lets knowledge begin amid skepticism. Essence and matter dualism allows contemplation of eternal forms without denying natural existence. Reason is a harmony of instincts in the life of a human animal, not a detached faculty. Religions are imaginative interpretations of the moral world—true as poetry, not as physics. Beauty is pleasure objectified. Cultural criticism warns that those who cannot remember the past are condemned to repeat it.",
    "works": [
      "The Life of Reason",
      "Scepticism and Animal Faith",
      "The Sense of Beauty",
      "Realms of Being"
    ],
    "legacy": "Santayana influenced aesthetics, naturalistic philosophy of religion, and literary modernism. His aphorisms entered public culture beyond academic philosophy. He remains a bridge between classical contemplation and American naturalism.",
    "birthDate": "1863",
    "deathDate": "1952"
  },
  "Martin Buber": {
    "lifespan": "1878–1965",
    "school": "dialogical philosophy",
    "jobTitle": "philosopher and theologian",
    "knowsAbout": [
      "dialogue",
      "relation",
      "religion"
    ],
    "overview": "Martin Buber (1878–1965) was an Austrian-Jewish philosopher and theologian best known for I and Thou (1923). Active in Zionist cultural politics, Hasidic storytelling, and Bible translation with Franz Rosenzweig, he later taught at Hebrew University. He emphasized dialogical encounter over objectifying knowledge. Handbook dates: 1878–1965. Exile from Nazi Germany shaped his ethical witness.",
    "ideas": "Two primary words structure existence: I–It (instrumental relating) and I–Thou (mutual presence). Genuine dialogue risks the self; God is the eternal Thou met in relation, not a deduced object. Hasidic tales exemplify sanctification of everyday life. Community (Gemeinschaft) contrasts with hollow collectivism. Education and politics should foster presence rather than mere technique. Biblical humanism reads Scripture as address calling for response.",
    "works": [
      "I and Thou",
      "Between Man and Man",
      "Tales of the Hasidim",
      "Eclipse of God"
    ],
    "legacy": "Buber shaped Jewish thought, Christian theology, psychotherapy, and educational theory of dialogue. I–Thou entered common moral vocabulary. Critics debate romanticism versus rigor in his ontology of relation.",
    "birthDate": "1878",
    "deathDate": "1965"
  },
  "Iris Murdoch": {
    "lifespan": "1919–1999",
    "school": "moral philosophy",
    "jobTitle": "philosopher and novelist",
    "knowsAbout": [
      "attention",
      "virtue",
      "art"
    ],
    "overview": "Iris Murdoch (1919–1999) was an Irish-British philosopher and novelist who revived moral attention to the good against mid-century linguistic narrowness. A student at Oxford and briefly influenced by Sartre, she turned toward Plato. The Sovereignty of Good collects key essays; dozens of novels explore egoism and love. Handbook dates: 1919–1999. Alzheimer’s marked her final years, documented by John Bayley.",
    "ideas": "Moral philosophy needs a realistic idea of the Good beyond will and choice alone. Egoism clouds vision; love and art can purify attention toward particular realities. Inner life is ethically thick, not a behaviorist fiction. Ordinary language ethics underdescribes vision, fantasy, and conversion. Plato’s sun metaphor returns as a secular-religious magnetism of value. Novels test how characters fail or succeed at just seeing others.",
    "works": [
      "The Sovereignty of Good",
      "Metaphysics as a Guide to Morals",
      "The Fire and the Sun",
      "Under the Net"
    ],
    "legacy": "Murdoch helped reopen Anglo-American ethics to virtue, vision, and the Good. Literary scholars read her novels as moral philosophy in narrative form. She remains a touchstone for care ethics and anti-existentialist Platonism.",
    "birthDate": "1919",
    "deathDate": "1999"
  },
  "Karl Jaspers": {
    "lifespan": "1883–1969",
    "school": "existential philosophy",
    "jobTitle": "psychiatrist and philosopher",
    "knowsAbout": [
      "existence",
      "communication",
      "limits"
    ],
    "overview": "Karl Jaspers (1883–1969) was a German psychiatrist-turned-existential philosopher who taught at Heidelberg and later Basel. General Psychopathology professionalized descriptive psychiatry; philosophical works treat freedom, communication, and transcendence. He opposed Nazi ideology and was barred from teaching under the regime. Handbook dates: 1883–1969. Postwar he became a public voice for democratic responsibility.",
    "ideas": "Boundary situations—death, struggle, guilt, chance—disclose Existenz beyond empirical ego. Truth appears in existential communication, not solitary certainty. The Encompassing (das Umgreifende) names modes of being thought cannot objectify completely. Philosophy is a perennial world philosophy linking axial-age insights across cultures. Science explains objects; philosophy elucidates freedom and transcendence without becoming dogma. Guilt after 1945 includes political co-responsibility in his essays.",
    "works": [
      "Philosophy",
      "General Psychopathology",
      "The Origin and Goal of History",
      "The Question of German Guilt"
    ],
    "legacy": "Jaspers shaped existential psychiatry, German democratic thought, and comparative “axial age” historiography. He stands beside Heidegger with a more communicative, anti-totalitarian temper. Medical humanities still use his psychopathology.",
    "birthDate": "1883",
    "deathDate": "1969"
  },
  "Dōgen": {
    "lifespan": "1200–1253",
    "school": "Zen Buddhism",
    "jobTitle": "monk and teacher",
    "knowsAbout": [
      "meditation",
      "Buddha-nature",
      "practice"
    ],
    "overview": "Dōgen (1200–1253) was the Japanese founder of the Sōtō school of Zen after studying in Song China under Rujing. Returning to Japan, he established monastic communities culminating at Eiheiji. Shōbōgenzō (“Treasury of the True Dharma Eye”) gathers vernacular philosophical sermons on practice-enlightenment. Handbook dates: 1200–1253. He insisted on zazen as the authentic Buddha-dharma.",
    "ideas": "Practice and enlightenment are not sequential; zazen itself is enacted Buddha-nature. Being-time (uji) teaches that each moment is a complete temporal existence, not a point on a line. Language both traps and reveals; paradoxical fascicles work through dualisms of here/there, self/other. Dropping off body-mind names liberation within disciplined form. Ethics of monastic regulations embody awakening in cooking, walking, and sitting. He criticizes merely intellectual or antinomian Zen.",
    "works": [
      "Shōbōgenzō",
      "Eihei Kōroku",
      "Fukanzazengi",
      "Gakudō yōjinshū"
    ],
    "legacy": "Dōgen anchors Sōtō Zen liturgy and modern global Zen philosophy. Heideggerians and phenomenologists mine being-time fascicles. He is central to any serious account of Japanese Buddhist thought.",
    "birthDate": "1200",
    "deathDate": "1253"
  },
  "Huineng": {
    "lifespan": "638–713",
    "school": "Chan Buddhism",
    "jobTitle": "Zen patriarch",
    "knowsAbout": [
      "sudden awakening",
      "nonattachment",
      "mind"
    ],
    "overview": "Huineng (638–713) is revered as the Sixth Patriarch of Chan (Zen) Buddhism in China; the Platform Sutra presents his autobiography and teachings. Historical layers of the text are complex; the legend contrasts an illiterate laborer with scholastic rivals. Southern Chan’s “sudden enlightenment” rhetoric crystallizes around him. Handbook tradition dates him 638–713. He became Chan’s paradigmatic enlightened everyman.",
    "ideas": "Buddha-nature is originally present; enlightenment is sudden recognition rather than gradual accumulation of merit alone. “No-thought,” non-attachment, and seeing nature (jianxing) structure practice. The mind ground is pure; defilements are adventitious clouds. Verse contests over the mirror-mind dramatize sudden versus gradual paths. Meditation and wisdom are inseparable in ordinary activity. Transmission outside scriptures still uses scripture—the Platform Sutra—to authorize the claim.",
    "works": [
      "Platform Sutra of the Sixth Patriarch",
      "Chan lamp histories (associated)",
      "Verse traditions on mind"
    ],
    "legacy": "Huineng’s legend shaped East Asian Zen identity and modern popular images of sudden awakening. Scholars debate history versus myth while affirming the Platform Sutra’s cultural power. Later koan and silent illumination traditions both claim Chan ancestry through him.",
    "birthDate": "638",
    "deathDate": "713"
  },
  "Han Feizi": {
    "lifespan": "c. 280–233 BCE",
    "school": "Legalism",
    "jobTitle": "political philosopher",
    "knowsAbout": [
      "law",
      "power",
      "government"
    ],
    "overview": "Han Feizi (c. 280–233 BCE) was the major synthesizer of Legalism (fajia) in late Warring States China. A prince of Han and student associated with Xunzi’s milieu, he urged impersonal law, administrative technique, and strategic power. Summoned to Qin, he died in prison amid court intrigue—tradition blames Li Si. The Han Feizi compiles essays that guided Qin statecraft. Handbook dates are approximate for the third century BCE.",
    "ideas": "Order rests on fa (public laws), shu (administrative techniques), and shi (positional power)—not on ruler’s personal virtue alone. Human beings respond to reward and punishment; relying on goodwill invites chaos. The enlightened ruler hides preferences so ministers cannot fish for favor. Past models cannot be copied blindly; institutions must fit present conditions. Words must match deeds; empty talk is punished. Compassion without standards undermines deterrence.",
    "works": [
      "Han Feizi",
      "The Two Handles",
      "The Five Vermin",
      "On the Dominant System of Authority"
    ],
    "legacy": "Legalism supplied tools for Qin unification and a permanent foil for Confucian virtue politics. Modern readers see anticipations of realist state theory and principal–agent control. The text remains essential for classical Chinese political philosophy.",
    "birthDate": "-0280",
    "deathDate": "-0233"
  },
  "Qian Mu": {
    "lifespan": "1895–1990",
    "school": "Chinese intellectual history",
    "jobTitle": "historian and philosopher",
    "knowsAbout": [
      "tradition",
      "history",
      "education"
    ],
    "overview": "Qian Mu (1895–1990) was a leading modern historian of Chinese thought who defended the continuity of China’s cultural tradition amid revolution and Westernization. Largely self-taught, he taught in mainland universities before settling in Hong Kong and later Taiwan. Outline of National History and studies of Zhu Xi shaped conservative humanist historiography. Handbook dates: 1895–1990. He opposed reducing China to a failed foil of the West.",
    "ideas": "Chinese history displays enduring political-cultural patterns that demand internal understanding. Confucian scholarly spirit links personal cultivation to public order without mere theocracy. Comparative method should avoid civilizational self-hatred and crude stage theories. Neo-Confucianism receives sympathetic systematic exposition. Education transmits living tradition, not museum antiquarianism. Nationhood is cultural before it is merely racial or economic.",
    "works": [
      "Outline of National History",
      "A History of Chinese Thought",
      "New Interpretation of Zhu Xi",
      "Essays on Chinese culture"
    ],
    "legacy": "Qian influenced Sinophone humanities education in Hong Kong and Taiwan for decades. Critics call him romantic; admirers credit cultural confidence without isolationism. He remains a major Republican-era intellectual historian.",
    "birthDate": "1895",
    "deathDate": "1990"
  },
  "Rabindranath Tagore": {
    "lifespan": "1861–1941",
    "school": "humanism",
    "jobTitle": "poet, educator, and philosopher",
    "knowsAbout": [
      "humanism",
      "education",
      "nationalism"
    ],
    "overview": "Rabindranath Tagore (1861–1941) was a Bengali poet, educator, and thinker—the first non-European Nobel laureate in Literature (1913). He founded Visva-Bharati to embody cosmopolitan learning rooted in Indian traditions. Essays and lectures address nationalism, freedom, and the religion of man. Handbook dates: 1861–1941. Dialogue with Gandhi and travels in Asia and the West made him a global intellectual.",
    "ideas": "Creative freedom and personality unfold in relation to an infinite that exceeds nation-state idols. Nationalism can become a predatory abstraction against the living human. Education should awaken curiosity and artistic sympathy, not drill alone. The religion of man seeks spiritual unity without sectarian hatred. East–West encounter should be mutual hospitality, not domination. Poetry and song are modes of philosophical disclosure.",
    "works": [
      "Gitanjali",
      "Nationalism",
      "The Religion of Man",
      "Sadhana"
    ],
    "legacy": "Tagore shaped modern Indian letters, comparative education, and critiques of chauvinist nationalism. His songs include India’s and Bangladesh’s national anthems. Philosophers of cosmopolitanism continually reread his lectures.",
    "birthDate": "1861",
    "deathDate": "1941"
  },
  "Al-Ghazali": {
    "lifespan": "1058–1111",
    "school": "Islamic Philosophy",
    "jobTitle": "theologian, jurist, and philosopher",
    "knowsAbout": [
      "causation",
      "skepticism",
      "sufism",
      "kalām",
      "knowledge and action"
    ],
    "overview": "Abū Ḥāmid al-Ghazālī (1058–1111) taught law and theology in Baghdad before a crisis of certainty drove him from public office into Sufi practice and writing. He mastered the falāsifa well enough to attack their metaphysics in The Incoherence of the Philosophers, then narrated his own epistemic itinerary in Deliverance from Error. The Revival of the Religious Sciences integrates Ashʿarite doctrine with ethical-spiritual discipline for a broad audience.",
    "ideas": "Al-Ghazālī denies that observed regularities prove necessary causal links independent of God’s will, while still defending disciplined reasoning within theology. Sense and unaided intellect can fail; certainty may require an experiential ‘taste’ beyond imitation. Knowledge that does not move the limbs remains incomplete. Prophecy and inspiration open a stage beyond ordinary intellect without abolishing law or dialectic.",
    "works": [
      "The Incoherence of the Philosophers",
      "Deliverance from Error",
      "The Revival of the Religious Sciences",
      "The Alchemy of Happiness"
    ],
    "legacy": "He reshaped Sunni theology, Sufism, and later debates on science, causation, and faith. Averroes answered him point by point; modern philosophy of religion still returns to his critique of necessary connection and his autobiography of doubt.",
    "birthDate": "1058",
    "deathDate": "1111"
  },
  "Paul Tillich": {
    "lifespan": "1886–1965",
    "school": "existential theology",
    "jobTitle": "theologian and philosopher",
    "knowsAbout": [
      "faith",
      "anxiety",
      "culture"
    ],
    "overview": "Paul Tillich (1886–1965) was a German-American Protestant theologian and philosopher of religion who fled Nazism for Union Seminary, Harvard, and Chicago. The Courage to Be and Systematic Theology correlatively linked existential questions to Christian symbols. He treated philosophy and theology as mutually critical partners. Handbook dates: 1886–1965. His public lectures made him a mid-century religious intellectual celebrity.",
    "ideas": "Faith is ultimate concern—what claims us unconditionally—risking idolatry when finite things are absolutized. Being-itself names God beyond theistic objectification; symbols participate in what they point to. Correlation method answers existential questions with theological symbols. Anxiety of fate, guilt, and meaninglessness meets the courage to be. Protestant principle criticizes every finite claim to absoluteness. Culture is a theological concern: art and politics disclose ultimate concern.",
    "works": [
      "Systematic Theology",
      "The Courage to Be",
      "Dynamics of Faith",
      "Theology of Culture"
    ],
    "legacy": "Tillich shaped mainline Protestant thought, existential theology, and dialogue with secular culture. Critics fault vagueness; admirers credit conceptual hospitality. “Ultimate concern” entered wider religious studies vocabulary.",
    "birthDate": "1886",
    "deathDate": "1965"
  },
  "Erich Fromm": {
    "lifespan": "1900–1980",
    "school": "humanistic psychoanalysis",
    "jobTitle": "psychoanalyst and social critic",
    "knowsAbout": [
      "freedom",
      "love",
      "society"
    ],
    "overview": "Erich Fromm (1900–1980) was a German-Jewish social psychologist and humanist Marxist associated with the Frankfurt School early on, later more independent. Fleeing Nazism, he wrote in the United States and Mexico. Escape from Freedom analyzes modern authoritarianism; The Art of Loving popularizes relational ethics. Handbook dates: 1900–1980. He joined psychoanalysis to social critique.",
    "ideas": "Freedom’s burden can drive escape into authoritarianism, destructiveness, or automaton conformity. Productive love and reason contrast with marketing and hoarding character orientations under capitalism. Humanistic ethics affirms growth of powers against necrophilic attraction to control and death. Religion can be humanistic or authoritarian depending on whether it fosters autonomy. Marx and Freud both need correction by a normative humanism. Social character links individual psyche to economic structure.",
    "works": [
      "Escape from Freedom",
      "The Art of Loving",
      "Man for Himself",
      "To Have or to Be?"
    ],
    "legacy": "Fromm influenced humanistic psychology, popular ethics, and critiques of consumer society. Academic psychology often sidelined him; social theory still cites escape-from-freedom mechanisms. He remains a bridge from Frankfurt themes to general readers.",
    "birthDate": "1900",
    "deathDate": "1980"
  },
  "Alexis de Tocqueville": {
    "lifespan": "1805–1859",
    "school": "liberal political thought",
    "jobTitle": "political thinker and historian",
    "knowsAbout": [
      "democracy",
      "equality",
      "civil society"
    ],
    "overview": "Alexis de Tocqueville (1805–1859) was a French aristocrat, magistrate, and political thinker whose Democracy in America interpreted the United States as the advance guard of modern equality. An 1831 journey ostensibly studying prisons yielded a classic of political sociology. The Old Regime and the Revolution analyzed France’s centralizing path. Handbook dates: 1805–1859. Liberal yet wary, he feared soft despotism as much as mob rule.",
    "ideas": "Equality of conditions is history’s driving fact; democracy reshapes minds, families, and associations. Intermediate institutions—townships, associations, religion—buffer individuals from the state. Tyranny of the majority threatens liberty of thought. Soft despotism tutelage can pacify citizens into dependent spectators. Moores and laws interact; habits of the heart sustain free regimes. Revolution can accelerate administrative centralization begun under monarchy.",
    "works": [
      "Democracy in America",
      "The Old Regime and the Revolution",
      "Recollections",
      "Writings on poverty and colonies"
    ],
    "legacy": "Tocqueville remains required reading for democratic theory, American studies, and comparative revolution. Liberals and conservatives both claim him. Soft despotism and associational life frame contemporary civic anxiety.",
    "birthDate": "1805",
    "deathDate": "1859"
  },
  "Adam Smith": {
    "lifespan": "1723–1790",
    "school": "Scottish Enlightenment",
    "jobTitle": "moral philosopher and economist",
    "knowsAbout": [
      "sympathy",
      "markets",
      "justice"
    ],
    "overview": "Adam Smith (1723–1790) was a Scottish moral philosopher and political economist of the Enlightenment, professor at Glasgow and friend of Hume. The Theory of Moral Sentiments (1759) precedes The Wealth of Nations (1776), which analyzes markets, division of labor, and commercial society. He traveled as tutor in Europe and later served as a customs official. Handbook dates: 1723–1790. Caricatures of pure selfishness miss his moral psychology.",
    "ideas": "Sympathy and the impartial spectator explain moral judgment without reducing ethics to utility alone. Division of labor raises productivity yet can narrow minds without education. Markets coordinate via price signals—the “invisible hand” metaphor in limited contexts—while justice requires enforceable rules. Mercantilist privileges distort natural liberty of trade. Virtues of prudence, justice, and beneficence structure character in commercial society. Political economy is continuous with moral philosophy, not a value-free science of greed.",
    "works": [
      "The Theory of Moral Sentiments",
      "The Wealth of Nations",
      "Lectures on Jurisprudence",
      "Essays on philosophical subjects"
    ],
    "legacy": "Smith founded modern economics’ self-image while remaining central to ethics and political theory. Debates on capitalism continually re-stage Moral Sentiments against Wealth of Nations. Scottish Enlightenment curricula still pair him with Hume.",
    "birthDate": "1723",
    "deathDate": "1790"
  },
  "Plutarch": {
    "lifespan": "c. 46–c. 119 CE",
    "school": "Middle Platonism",
    "jobTitle": "biographer and essayist",
    "knowsAbout": [
      "character",
      "history",
      "ethics"
    ],
    "overview": "Plutarch (c. 46–c. 119 CE) was a Greek biographer and Middle Platonist from Chaeronea who became a Roman citizen and Delphic priest. Parallel Lives pairs Greek and Roman figures for moral comparison; Moralia gathers essays on ethics, religion, and education. He wrote in Greek under the early Empire. Handbook dates are approximate across the late first and early second centuries. His portraits shaped later European images of antiquity.",
    "ideas": "Character is revealed in small actions as much as public deeds; biography is moral philosophy in examples. Virtue lies in a mean trainable by habit and philosophy—Platonist ethics with Aristotelian color. Divine providence and daimonic intermediaries structure a religious cosmology. Superstition and atheism are twin errors about the gods. Education forms the soul through poetry carefully filtered. Comparative lives teach statesmanship through likeness and contrast.",
    "works": [
      "Parallel Lives",
      "Moralia",
      "On the Delay of Divine Justice",
      "How to Read Poetry"
    ],
    "legacy": "Renaissance humanists and Shakespeare drew heavily on Plutarch’s Lives. Moral essay traditions echo the Moralia. Classicists still use him as a window onto imperial Greek culture.",
    "birthDate": "0046",
    "deathDate": "0119"
  },
  "Auguste Comte": {
    "lifespan": "1798–1857",
    "school": "Positivism",
    "jobTitle": "philosopher and sociologist",
    "knowsAbout": [
      "science",
      "society",
      "progress"
    ],
    "overview": "Auguste Comte (1798–1857) was the French founder of positivism and an early systematizer of sociology. Once secretary to Saint-Simon, he later built an independent course of positive philosophy. He proposed a Religion of Humanity with calendar and rites. Handbook dates: 1798–1857. Mental health crises marked his life; disciples institutionalized his school.",
    "ideas": "The law of three stages—theological, metaphysical, positive—charts sciences and societies toward empirical lawfulness. Sociology (social physics) crowns the hierarchy of sciences. Order and progress must be combined; positivism rejects revolutionary metaphysics. Consensus of hearts requires a secular spiritual power—the Religion of Humanity. Classification of sciences guides education and politics. Altruism as a coined moral ideal opposes egoistic individualism.",
    "works": [
      "Course of Positive Philosophy",
      "System of Positive Polity",
      "Catechism of Positive Religion",
      "Discourses on the Positive Spirit"
    ],
    "legacy": "Comte named sociology and shaped nineteenth-century secular religions of science. Later positivists kept the empiricism and dropped the cult. Critics see authoritarian temper in his spiritual power.",
    "birthDate": "1798",
    "deathDate": "1857"
  },
  "Zengzi": {
    "lifespan": "c. 505–436 BCE",
    "school": "Confucianism",
    "jobTitle": "teacher",
    "knowsAbout": [
      "filial piety",
      "self-cultivation",
      "ritual"
    ],
    "overview": "Zengzi (Zeng Shen, 505–435 BCE) was a prominent disciple of Confucius, traditionally associated with filial piety and the transmission of the Great Learning. Classical sources depict him as earnest, sometimes overly scrupulous, in ritual and self-examination. Later Confucians credited him with key lines on daily reflection. Handbook tradition places him in the fifth century BCE. He became a model of xiao in ancestral cult and education.",
    "ideas": "Filial piety structures moral life from family outward; serving parents trains serving the wider order. Daily self-examination asks whether one has been loyal in counsel, trustworthy with friends, and practiced what was taught. The Great Learning’s program—investigation, sincerity, self-cultivation, family, state, world—was linked to his lineage. Care for the dying and mourning rites express cultivated feeling. Integrity in small duties outweighs brilliant speech. Transmission of Confucian learning depends on character as much as doctrine.",
    "works": [
      "Great Learning (associated)",
      "Classic of Filial Piety (associated)",
      "Analects passages on Zengzi"
    ],
    "legacy": "Zengzi became a canonical Confucian sage in temple rankings and elementary moral education. Modern historians separate legend from Analects evidence while affirming his early importance. Filial discourse in East Asia continually cites his example.",
    "birthDate": "-0505",
    "deathDate": "-0436"
  },
  "Protagoras": {
    "lifespan": "c. 490–c. 420 BCE",
    "school": "Sophism",
    "jobTitle": "teacher and rhetorician",
    "knowsAbout": [
      "relativism",
      "rhetoric",
      "education"
    ],
    "overview": "Protagoras (c. 490–c. 420 BCE) was the most famous Greek Sophist, a traveling teacher of virtue and civic speech from Abdera. Plato’s Protagoras and Theaetetus dramatize his relativism and educational claims. Tradition says he was charged with impiety in Athens; details are uncertain. Handbook dates are approximate for the fifth century BCE. He helped make paid higher education a public issue.",
    "ideas": "“Man is the measure of all things” asserts that appearances are true for the perceiver—sparking debates on relativism about truth. Virtue (excellence) is teachable through training in logos and civic practice. Opposed arguments (dissoi logoi) can be developed on every issue; the weaker can be made stronger—raising ethical alarms. Gods’ existence is opaque; theological agnosticism fits human measure. Rhetoric and political techne are central to democratic life. Education promises success in the polis for a fee.",
    "works": [
      "Truth (fragments)",
      "On the Gods (fragments)",
      "Reported in Plato’s Protagoras",
      "Reported in Plato’s Theaetetus"
    ],
    "legacy": "Protagoras remains the emblem of sophistic relativism and of democratic education’s promises and risks. Epistemology textbooks still open with man-the-measure. Rehabilitation of the Sophists in modern scholarship starts with him.",
    "birthDate": "-0490",
    "deathDate": "-0420"
  },
  "Plotinus": {
    "lifespan": "204/5–270",
    "school": "Neoplatonism",
    "jobTitle": "philosopher",
    "knowsAbout": [
      "the One",
      "soul",
      "contemplation"
    ],
    "overview": "Plotinus (204/5–270 CE) was the founder of Neoplatonism, teaching in Rome after studying in Alexandria under Ammonius Saccas. His student Porphyry edited the Enneads and wrote a Life of Plotinus. He sought mystical union with the One beyond being while organizing a hierarchical metaphysics. Handbook dates: mid-third century. Late antique pagan philosophy’s spiritual peak is often identified with him.",
    "ideas": "Reality emanates from the One through Intellect (Nous) and Soul to the material world without depleting the source. Ascent returns by virtue, dialectic, and contemplation toward unification. Matter is a principle of privation and scattering; evil is deficiency rather than a rival substance. Beauty in sensibles awakens eros for intelligible form. The true self is intellective; civic virtues prepare but do not exhaust philosophical life. Providence permeates levels of being in a graded way.",
    "works": [
      "Enneads",
      "Porphyry’s Life of Plotinus",
      "Treatises on beauty and the One"
    ],
    "legacy": "Neoplatonism shaped late pagan, Christian, Islamic, and Jewish metaphysics for centuries. Renaissance Platonists rediscovered the Enneads avidly. Mystical philosophy still speaks Plotinian language of ascent.",
    "birthDate": "0204",
    "deathDate": "0270"
  },
  "George Berkeley": {
    "lifespan": "1685–1753",
    "school": "Empiricism and idealism",
    "jobTitle": "philosopher and bishop",
    "knowsAbout": [
      "perception",
      "immaterialism",
      "knowledge"
    ],
    "overview": "George Berkeley (1685–1753) was an Irish immaterialist philosopher and Anglican bishop of Cloyne. A Treatise Concerning the Principles of Human Knowledge and Three Dialogues argue that esse est percipi for sensible things. He also wrote on vision, mathematics, and tar-water medicine. Handbook dates: 1685–1753. He hoped to found a college in Bermuda for colonial education.",
    "ideas": "Sensible objects are collections of ideas; matter as mind-independent substance is an empty abstraction. God continuously perceives the world, securing objectivity without material substrate. Abstract general ideas are critiqued; language can mislead philosophy. Visual language of nature suggests divine signification. Mathematics and science remain intact as studies of idea-regularities under divine order. Immaterialism aims to defeat skepticism and atheistic materialism together.",
    "works": [
      "Principles of Human Knowledge",
      "Three Dialogues between Hylas and Philonous",
      "Essay Towards a New Theory of Vision",
      "De Motu"
    ],
    "legacy": "Berkeley became empiricism’s most radical ontologist and a permanent exam question in metaphysics. Phenomenalists and some physicists later echoed anti-material motifs. Idealism’s history runs through him to later British and German forms.",
    "birthDate": "1685",
    "deathDate": "1753"
  },
  "Giambattista Vico": {
    "lifespan": "1668–1744",
    "school": "historicism",
    "jobTitle": "philosopher and historian",
    "knowsAbout": [
      "history",
      "myth",
      "knowledge"
    ],
    "overview": "Giambattista Vico (1668–1744) was a Neapolitan philosopher of history and rhetoric who opposed Cartesian method as inadequate for the human world. The New Science (Scienza Nuova) proposes a genetic understanding of nations through myths, law, and language. Largely neglected in life, he later inspired historicists and anthropologists. Handbook dates: 1668–1744. He taught rhetoric at the University of Naples.",
    "ideas": "Verum factum: the true and the made convert—humans know history because they make it. Nations rise through ages of gods, heroes, and men, with possible ricorso after decline. Myths are serious modes of early poetic wisdom, not mere errors. Philology and philosophy must unite to interpret institutions. Cartesian clear ideas miss the certainty proper to civil things. Providence guides history without erasing human making.",
    "works": [
      "The New Science",
      "On the Study Methods of Our Time",
      "On the Most Ancient Wisdom of the Italians",
      "Autobiography"
    ],
    "legacy": "Vico became a founder for philosophies of history, hermeneutics, and cultural anthropology. Joyce and others mined the New Science literarily. He offers a classic alternative to ahistorical rationalism.",
    "birthDate": "1668",
    "deathDate": "1744"
  },
  "José Ortega y Gasset": {
    "lifespan": "1883–1955",
    "school": "perspectivism",
    "jobTitle": "philosopher and essayist",
    "knowsAbout": [
      "perspective",
      "mass society",
      "life"
    ],
    "overview": "José Ortega y Gasset (1883–1955) was Spain’s leading twentieth-century philosopher and essayist, founder of Revista de Occidente. Meditations on Quixote and The Revolt of the Masses diagnose modern culture and mass society. He taught in Madrid, went into exile during the Civil War, and returned later. Handbook dates: 1883–1955. “I am I and my circumstance” became his signature formula.",
    "ideas": "Life is the radical reality: self and circumstance co-define each other; salvation is through the circumstances. Perspectivism holds that each life opens a point of view on the world without collapsing into relativist chaos. Mass man demands rights without excellence, threatening liberal culture. Metaphor and vital reason grasp living truths beyond pure mathematized reason. Generations structure historical change. Europe needs a project beyond nationalist fragmentation.",
    "works": [
      "The Revolt of the Masses",
      "Meditations on Quixote",
      "What Is Philosophy?",
      "History as a System"
    ],
    "legacy": "Ortega shaped Spanish-language philosophy, journalism, and debates on mass culture. Revolt of the Masses remains a European classic of cultural criticism. Phenomenological and existential themes enter Iberian letters through him.",
    "birthDate": "1883",
    "deathDate": "1955"
  },
  "Mary Wollstonecraft": {
    "lifespan": "1759–1797",
    "school": "feminist Enlightenment",
    "jobTitle": "writer and philosopher",
    "knowsAbout": [
      "rights",
      "education",
      "equality"
    ],
    "overview": "Mary Wollstonecraft (1759–1797) was an English radical writer whose A Vindication of the Rights of Woman (1792) founded modern liberal feminist argument. She wrote on education, the French Revolution, and travel, and mixed in Dissenting and Jacobin circles. Personal life—including relationship with Gilbert Imlay and marriage to William Godwin—fed hostile biographies after her death in childbirth. Handbook dates: 1759–1797. She demanded reason’s rights for women as human beings.",
    "ideas": "Women’s apparent inferiority stems largely from false education in coquetry and dependence, not nature. Republican virtue and middle-class rationality should replace aristocratic gallantry. Rights of men incomplete without rights of woman; citizenship requires cultivated reason. Marriage as friendship between equals contrasts with legal slavery of wives. Sensibility without fortitude corrupts both sexes. Education reform is political reform at the root.",
    "works": [
      "A Vindication of the Rights of Woman",
      "A Vindication of the Rights of Men",
      "Thoughts on the Education of Daughters",
      "Letters Written in Sweden"
    ],
    "legacy": "Wollstonecraft became a foundational feminist philosopher despite nineteenth-century smears. Liberal and radical feminisms both claim and contest her. Syllabi in political theory now treat Vindication as a classic.",
    "birthDate": "1759",
    "deathDate": "1797"
  },
  "Maimonides": {
    "lifespan": "1138–1204",
    "school": "Jewish Rationalism",
    "jobTitle": "rabbi, physician, and philosopher",
    "knowsAbout": [
      "negative theology",
      "law",
      "prophecy",
      "Aristotle",
      "ethics"
    ],
    "overview": "Moses ben Maimon (1138–1204), known as Maimonides or Rambam, fled Almohad persecution from Córdoba to Fez and finally to Egypt, where he served as a communal leader and court physician. He codified Jewish law in the Mishneh Torah and wrote the Guide of the Perplexed for readers torn between Torah and Aristotelian science. His Eight Chapters adapt Greek virtue ethics to a Jewish frame.",
    "ideas": "God is known chiefly by negation: affirmative attributes risk corporealizing the divine. The Law aims at the welfare of body and soul; intellectual perfection measures nearness to God. Prophecy is an overflow through the Active Intellect to reason and imagination. Moral virtue is a mean between extremes, cultivated by habit under divine commandment.",
    "works": [
      "Guide of the Perplexed",
      "Mishneh Torah",
      "Eight Chapters",
      "Commentary on the Mishnah"
    ],
    "legacy": "He became the central medieval Jewish philosopher and influenced Latin scholastics including Aquinas. Later Jewish thought continually renegotiates his balance of reason and revelation; popular misattributions (such as Talmudic sayings) must be separated from his own texts.",
    "birthDate": "1138",
    "deathDate": "1204"
  },
  "Ibn Khaldun": {
    "lifespan": "1332–1406",
    "school": "Islamic Philosophy",
    "jobTitle": "historian and statesman",
    "knowsAbout": [
      "ʿaṣabiyya",
      "civilization",
      "dynastic cycles",
      "historiography",
      "political economy"
    ],
    "overview": "Ibn Khaldūn (1332–1406) served courts across the Maghrib and Egypt before composing the Muqaddimah as a prolegomenon to his universal history. Drawing on political experience, he treated history as a science of social causes rather than a chronicle of wonders. Climate, economy, urban luxury, and group feeling structure his account of rise and decline.",
    "ideas": "Royal authority rests on ʿaṣabiyya (group feeling); conquest succeeds when solidarity is strong, then softens under sedentary luxury. The past resembles the future enough for patterned explanation. Custom and environment shape character more than pedigree alone. Critical source criticism guards against superstition and court flattery.",
    "works": [
      "Muqaddimah",
      "Kitāb al-ʿIbar"
    ],
    "legacy": "Often read as a forerunner of sociology and critical historiography, he remains central to Islamic and global philosophy of history. Modern social theory cites his cycle of solidarity and decadence without reducing him to a mere precursor slogan.",
    "birthDate": "1332",
    "deathDate": "1406"
  },
  "Gabriel Marcel": {
    "lifespan": "1889–1973",
    "school": "Christian existentialism",
    "jobTitle": "philosopher and dramatist",
    "knowsAbout": [
      "being",
      "hope",
      "presence"
    ],
    "overview": "Gabriel Marcel (1889–1973) was a French Christian existentialist philosopher and playwright who distinguished his “philosophy of existence” from Sartrean atheism. Converted to Catholicism in 1929, he explored fidelity, hope, and availability (disponibilité). The Mystery of Being collects Gifford Lectures. Handbook dates: 1889–1973. Drama and music informed his concrete method.",
    "ideas": "Problems are solvable objectively; mysteries—being, embodiment, evil—involve the questioner and resist technical mastery. Primary and secondary reflection move from broken world abstraction back to concrete presence. Availability and fidelity constitute intersubjective communion. Having versus being criticizes possessive stances toward others and God. Hope is a mystery of participation, not optimism calculus. Technology’s functional world can eclipse presence without careful reflection.",
    "works": [
      "The Mystery of Being",
      "Being and Having",
      "Man Against Mass Society",
      "Creative Fidelity"
    ],
    "legacy": "Marcel offered a theistic existential alternative to Sartre and Camus in mid-century Europe. Pastoral theology and personalist ethics drew on disponibilité. He remains central to Christian existentialism’s canon.",
    "birthDate": "1889",
    "deathDate": "1973"
  },
  "Averroes": {
    "lifespan": "1126–1198",
    "school": "Islamic Philosophy",
    "jobTitle": "philosopher, jurist, and physician",
    "knowsAbout": [
      "Aristotle",
      "demonstration",
      "law and philosophy",
      "causation",
      "allegory"
    ],
    "overview": "Ibn Rushd (Averroes, 1126–1198) served as qāḍī and physician in al-Andalus while producing the most influential Arabic commentaries on Aristotle. In the Decisive Treatise he argues that the Law itself obliges demonstrative reflection; in The Incoherence of the Incoherence he answers al-Ghazālī’s attack on the philosophers. Political misfortune late in life did not erase his Latin afterlife as ‘the Commentator.’",
    "ideas": "Truth does not contradict truth: demonstration and revelation agree when scripture’s apparent sense is read allegorically for those capable of proof. Assent comes rhetorically, dialectically, or demonstratively according to hearers’ natures. Denying natures and regular effects abolishes science. Philosophy is the Law’s companion and milk-sister, not its rival.",
    "works": [
      "The Decisive Treatise",
      "The Incoherence of the Incoherence",
      "Commentaries on Aristotle"
    ],
    "legacy": "Latin Averroism shaped medieval European debates on intellect and faith. He remains a symbol of rationalist Aristotelianism in Islamic philosophy and a touchstone for reason–revelation models.",
    "birthDate": "1126",
    "deathDate": "1198"
  },
  "Democritus": {
    "lifespan": "c. 460–c. 370 BCE",
    "school": "Atomism",
    "jobTitle": "philosopher",
    "knowsAbout": [
      "atoms",
      "nature",
      "ethics"
    ],
    "overview": "Democritus (c. 460–c. 370 BCE) of Abdera developed ancient atomism with Leucippus, explaining nature by indivisible atoms moving in the void. Ancient reports make him a prolific traveler and laughing sage of cheerfulness (euthymia). Almost all works are lost; fragments and testimonia survive via later authors. Handbook dates are approximate for the classical period. He offered a thoroughgoing materialist cosmology rivaling teleological physics.",
    "ideas": "Atoms differ by shape, arrangement, and position; void makes motion and plurality possible. Sensible qualities are conventional effects of atomic interactions on perceivers. Necessity and collision, not purpose, explain natural processes. Knowledge distinguishes bastard perception from legitimate rational grasp of atoms. Ethics of cheerfulness recommends moderation and wise pleasure within a material world. Cosmology includes innumerable worlds arising by atomic vortex.",
    "works": [
      "On Cheerfulness (fragments)",
      "Physical fragments (atoms and void)",
      "Ethical fragments",
      "Testimonia in Aristotle and later doxographers"
    ],
    "legacy": "Atomism resurfaced in Epicureanism and early modern corpuscular science. Materialist philosophies claim Democritus as ancestor. Loss of his books makes reconstruction forever partial yet philosophically vivid.",
    "birthDate": "-0460",
    "deathDate": "-0370"
  },
  "Diogenes of Sinope": {
    "lifespan": "c. 412/404–323 BCE",
    "school": "Cynicism",
    "jobTitle": "philosopher",
    "knowsAbout": [
      "simplicity",
      "freedom",
      "convention"
    ],
    "overview": "Diogenes of Sinope (c. 412/403–c. 323 BCE) was the most famous Cynic, dramatizing austerity in the Athenian and Corinthian public eye. Anecdotes—lantern in daylight seeking an honest man, barrel dwelling, defying Alexander—define his legend more than treatises. He practiced shamelessness (anaideia) as critique of convention. Handbook dates are approximate across the fourth century BCE. Cynicism’s performance philosophy centers on him.",
    "ideas": "Virtue is life according to nature; social conventions that enslave desire deserve ridicule. Autarkeia (self-sufficiency) reduces needs to what a dog or sage can bear. Cosmopolitan identity—“citizen of the world”—relativizes polis snobbery. Shameless acts teach freedom from opinion (doxa). Philosophy is training (askesis), not bookish display. Frank speech (parrhesia) toward the powerful is a civic medicine.",
    "works": [
      "Anecdotes in Diogenes Laertius",
      "Lost dialogues (reported)",
      "Cynic epistles (spurious/later)",
      "Sayings traditions"
    ],
    "legacy": "Diogenes became Western culture’s icon of philosophical insolence and voluntary poverty. Stoics softened Cynic askesis into systematized ethics. Modern countercultures continually restage his gestures.",
    "birthDate": "-0412",
    "deathDate": "-0323"
  },
  "Ovid": {
    "lifespan": "43 BCE–17/18 CE",
    "school": "Roman literature",
    "jobTitle": "poet",
    "knowsAbout": [
      "myth",
      "love",
      "exile"
    ],
    "overview": "Publius Ovidius Naso (43 BCE–17/18 CE) was Rome’s virtuoso poet of love and myth, author of the Metamorphoses, Ars Amatoria, and exile elegies. Augustan politics turned against him; he was banished to Tomis on the Black Sea and never returned. Handbook dates: 43 BCE–17/18 CE. Though not a systematic philosopher, his myths shaped moral and metaphysical imagination for millennia.",
    "ideas": "Metamorphosis reveals unstable boundaries of identity, desire, and divine power. Love is craft and pathology—taught, mocked, and suffered across the amatory works. Exile poetry reflects on speech, empire, and the poet’s vulnerability to power. Mythic etiology explains cults and natural forms through narrative rather than argument. Irony and pathos educate readers in the costs of passion and hubris. Cultural memory of Greece is remade for Roman readers.",
    "works": [
      "Metamorphoses",
      "Ars Amatoria",
      "Fasti",
      "Tristia"
    ],
    "legacy": "Ovid’s Metamorphoses became a medieval and Renaissance mythographic bible for artists and poets. Philosophers of identity and feminist classicists reread his transformations critically. Exile literature takes him as an early paradigm.",
    "birthDate": "-0043",
    "deathDate": "0018"
  },
  "The Buddha": {
    "lifespan": "c. 5th–4th century BCE",
    "school": "Buddhism",
    "jobTitle": "religious teacher",
    "knowsAbout": [
      "suffering",
      "impermanence",
      "meditation"
    ],
    "overview": "Siddhartha Gautama, the Buddha (“Awakened One”), taught a path beyond suffering in the eastern Gangetic plain; precise dates remain debated (often fifth–fourth century BCE). Born into a Sakya family, tradition narrates renunciation, awakening at Bodh Gaya, and decades of teaching a Sangha. He wrote nothing; early discourses survive in Pali and other canons. Handbook consensus treats him as a historical teacher whose legend grew. He founded one of the world’s major wisdom traditions.",
    "ideas": "The Four Noble Truths diagnose suffering (dukkha), its origin in craving, its cessation, and the Eightfold Path. Impermanence, non-self, and suffering mark conditioned existence. Dependent origination explains cyclical becoming without a permanent soul. Ethical precepts, meditation, and wisdom jointly liberate. The Middle Way avoids sensual indulgence and self-mortification. Nirvana names the unconditioned freedom from greed, hatred, and delusion.",
    "works": [
      "Pali Canon discourses",
      "Dhammapada",
      "Sutta Nipata",
      "Vinaya traditions"
    ],
    "legacy": "Buddhism spread across Asia in diverse schools and now globally in modern forms. Philosophy of mind and ethics continually engage non-self and compassion. The Buddha remains a paradigm of teacherly awakening rather than mere doctrine."
  },
  "Horace": {
    "lifespan": "65–8 BCE",
    "school": "Roman literature",
    "jobTitle": "poet",
    "knowsAbout": [
      "ethics",
      "moderation",
      "poetry"
    ],
    "overview": "Quintus Horatius Flaccus (65–8 BCE) was Rome’s master of lyric and hexameter satire under Augustus, friend of Maecenas. The Odes, Satires, Epistles, and Ars Poetica blend ethics, aesthetics, and social observation. A Republican soldier at Philippi, he later accepted the principate’s peace. Handbook dates: 65–8 BCE. Philosophical eclecticism—Epicurean colors with Stoic maxims—marks his counsel.",
    "ideas": "Carpe diem urges measured enjoyment under mortality’s limit, not frantic luxury. The golden mean (aurea mediocritas) guides desire and status anxiety. Poetry instructs and delights; the Ars Poetica theorizes craft and decorum. Satire corrects folly with urbane laughter rather than Cynic rage. Friendship and rural simplicity counter urban ambition. Philosophical tags serve lived prudence more than school loyalty.",
    "works": [
      "Odes",
      "Satires",
      "Epistles",
      "Ars Poetica"
    ],
    "legacy": "Horace set European lyric’s ethical tone and classroom Latin for centuries. “Carpe diem” entered world vernaculars. Literary criticism still starts from Ars Poetica’s commonplaces.",
    "birthDate": "-0065",
    "deathDate": "-0008"
  },
  "Dante Alighieri": {
    "lifespan": "1265–1321",
    "school": "medieval Christian thought",
    "jobTitle": "poet and political thinker",
    "knowsAbout": [
      "justice",
      "love",
      "theology"
    ],
    "overview": "Dante Alighieri (1265–1321) was the Florentine poet-philosopher of the Divine Comedy, exiled in the Guelf–Ghibelline conflicts. He wrote vernacular epic that synthesizes Aristotelian ethics, scholastic theology, and civic passion. Monarchia and Convivio show explicit philosophical ambition. Handbook dates: 1265–1321. Exile made him Italy’s prophetic wanderer of justice and love.",
    "ideas": "The Comedy maps moral order: infernal contrapasso, purgatorial ascent, and beatific vision ordered by love. Will and intellect find rest in God; misdirected love generates the vices. Empire and papacy should be distinct powers coordinating earthly peace and eternal ends. Vernacular eloquence can bear highest truth. Beatrice and courtly motifs become theological allegory. Justice in the city mirrors cosmic justice.",
    "works": [
      "Divine Comedy",
      "Monarchia",
      "Convivio",
      "De vulgari eloquentia"
    ],
    "legacy": "Dante defined Italian literary language and Christian epic imagination for Europe. Political theologians still argue with Monarchia. The Comedy remains a total artwork of medieval moral cosmology.",
    "birthDate": "1265",
    "deathDate": "1321"
  },
  "Baruch Spinoza": {
    "lifespan": "1632–1677",
    "school": "Rationalism",
    "jobTitle": "philosopher",
    "knowsAbout": [
      "substance",
      "freedom",
      "emotion"
    ],
    "overview": "Baruch (Benedictus) Spinoza (1632–1677) was a Dutch philosopher of Portuguese-Jewish descent who developed a rigorous geometric metaphysics of God-or-Nature. Excommunicated from Amsterdam’s Jewish community in 1656, he ground lenses and wrote in Latin with a small circle of freethinkers. The Ethics and Theological-Political Treatise argue for intellectual love of God and freedom of philosophizing. Handbook dates: 1632–1677. He became early modern rationalism’s most radical systematizer.",
    "ideas": "There is one substance—God or Nature—with infinite attributes; mind and body are parallel expressions, not interacting substances. Everything follows from divine necessity; freedom is understanding necessity, not uncaused will. Affects are explained geometrically; inadequate ideas yield bondage, adequate ideas yield blessedness. Scripture teaches obedience and piety; reason teaches truth—hermeneutics must not confuse them. Democracy and freedom of judgment best preserve peace. Conatus—the striving to persevere—structures psychology and politics.",
    "works": [
      "Ethics",
      "Theological-Political Treatise",
      "Political Treatise",
      "Treatise on the Emendation of the Intellect"
    ],
    "legacy": "Spinoza shaped German idealism, secular biblical criticism, and contemporary affect theory. Pantheism controversies made his name a cultural battlefield. He remains central to metaphysics, politics, and philosophy of mind.",
    "birthDate": "1632",
    "deathDate": "1677"
  },
  "Thomas Aquinas": {
    "lifespan": "1225–1274",
    "school": "Scholasticism",
    "jobTitle": "theologian and philosopher",
    "knowsAbout": [
      "natural law",
      "Aristotle",
      "theology"
    ],
    "overview": "Thomas Aquinas (1225–1274) was the Dominican scholastic who synthesized Aristotelian philosophy with Christian theology in the Summa Theologiae and Summa contra Gentiles. Educated at Naples, Paris, and Cologne under Albert the Great, he taught in Paris and Italian studia. Canonized and later named a Doctor of the Church, he died en route to the Council of Lyon. Handbook dates: 1225–1274. His work became the backbone of Catholic philosophical theology.",
    "ideas": "Faith and reason are harmonious; theology uses philosophy as handmaid without collapsing into it. Five Ways argue from motion, causation, contingency, degrees, and teleology toward God. Natural law participates in eternal law and grounds moral precepts accessible to reason. Virtue ethics of Aristotle is baptized: infused theological virtues elevate acquired moral virtues. Essence and existence distinction structures created being. Analogy of being lets language speak of God without univocity or pure equivocity.",
    "works": [
      "Summa Theologiae",
      "Summa contra Gentiles",
      "Disputed Questions on Truth",
      "Commentary on the Nicomachean Ethics"
    ],
    "legacy": "Thomism dominated Catholic education and continually revives in analytic and continental forms. Legal theorists still debate natural law via Aquinas. He remains Christianity’s premier Aristotelian.",
    "birthDate": "1225",
    "deathDate": "1274"
  },
  "David Hume": {
    "lifespan": "1711–1776",
    "school": "Empiricism",
    "jobTitle": "philosopher and historian",
    "knowsAbout": [
      "causation",
      "skepticism",
      "sentiment"
    ],
    "overview": "David Hume (1711–1776) was the Scottish Enlightenment’s greatest empiricist and skeptical naturalist, author of the Treatise of Human Nature and later Enquiries. Largely denied academic chairs over religious suspicion, he served as librarian and diplomat and wrote a bestselling History of England. Dialogues Concerning Natural Religion scrutinize design arguments. Handbook dates: 1711–1776. Adam Smith eulogized his cheerfulness and integrity.",
    "ideas": "All ideas derive from impressions; meaningful philosophy traces terms to experience. Causation is constant conjunction plus customary projection, not perceived necessary connection. Induction lacks non-circular rational justification yet remains psychologically inevitable. The self is a bundle of perceptions; personal identity is practical fiction. Morality rests on sentiment—sympathy and usefulness—not pure reason alone. Miracles and natural religion fail evidentiary tests against uniform experience.",
    "works": [
      "A Treatise of Human Nature",
      "Enquiry Concerning Human Understanding",
      "Enquiry Concerning the Principles of Morals",
      "Dialogues Concerning Natural Religion"
    ],
    "legacy": "Hume awoke Kant and shaped analytic empiricism, cognitive science of religion, and secular ethics. Skepticism about induction remains a live problem. He is Scotland’s philosophical signature worldwide.",
    "birthDate": "1711",
    "deathDate": "1776"
  },
  "John Locke": {
    "lifespan": "1632–1704",
    "school": "Empiricism",
    "jobTitle": "philosopher and physician",
    "knowsAbout": [
      "experience",
      "rights",
      "government"
    ],
    "overview": "John Locke (1632–1704) was the English philosopher of empiricism and liberal politics whose Essay Concerning Human Understanding and Two Treatises of Government defined a century’s agenda. Associated with Shaftesbury and the Glorious Revolution settlement, he wrote on toleration, education, and money. Handbook dates: 1632–1704. He spent exile years in Holland before 1689’s return.",
    "ideas": "The mind at birth is without innate speculative principles; ideas come from sensation and reflection. Primary qualities resemble external powers; secondary qualities do not. Personal identity rests on continuity of consciousness, not bare substance. Natural rights to life, liberty, and property constrain government by consent and trust. Tyranny dissolves political obligation and may justify resistance. Religious toleration (with noted exclusions) follows from the limits of magisterial force over belief.",
    "works": [
      "An Essay Concerning Human Understanding",
      "Two Treatises of Government",
      "A Letter Concerning Toleration",
      "Some Thoughts Concerning Education"
    ],
    "legacy": "Locke framed Anglo-American constitutionalism and empiricist psychology. Property theory remains contested by left and right. Classroom modernity often begins with the Essay and Second Treatise.",
    "birthDate": "1632",
    "deathDate": "1704"
  },
  "Jean-Jacques Rousseau": {
    "lifespan": "1712–1778",
    "school": "Republicanism",
    "jobTitle": "philosopher and writer",
    "knowsAbout": [
      "freedom",
      "inequality",
      "education"
    ],
    "overview": "Jean-Jacques Rousseau (1712–1778) was a Genevan-born philosopher and novelist of the French Enlightenment who unsettled its confidence in progress. Discourses on inequality and the arts, Émile, and The Social Contract made him famous and persecuted. Autobiographical Confessions remade modern self-writing. Handbook dates: 1712–1778. Relations with Voltaire, Hume, and the Encyclopedists swung between alliance and rupture.",
    "ideas": "Natural goodness is corrupted by social comparison, property, and amour-propre. Legitimate polity arises from the general will, not aggregate private interests. Freedom is obedience to law one prescribes as citizen. Education should protect the child’s nature before introducing social artifice. Pity and self-preservation are natural; reason alone does not found morals. Music, language, and inequality share intertwined genealogies.",
    "works": [
      "The Social Contract",
      "Émile",
      "Discourse on Inequality",
      "Confessions"
    ],
    "legacy": "Rousseau shaped Revolution-era politics, romanticism, pedagogy, and critiques of civilization. Totalitarian and democratic readers fight over the general will. He remains modernity’s most eloquent critic of polish without virtue.",
    "birthDate": "1712",
    "deathDate": "1778"
  },
  "Simone de Beauvoir": {
    "lifespan": "1908–1986",
    "school": "existentialism and feminism",
    "jobTitle": "philosopher and writer",
    "knowsAbout": [
      "gender",
      "freedom",
      "ethics"
    ],
    "overview": "Simone de Beauvoir (1908–1986) was a French existentialist philosopher and novelist whose The Second Sex (1949) transformed feminist theory. A Normalienne, she partnered intellectually with Sartre while building an independent oeuvre on ethics, aging, and politics. She wrote fiction, memoirs, and travel reports alongside philosophy. Handbook dates: 1908–1986. She became twentieth-century feminism’s philosophical landmark.",
    "ideas": "One is not born, but becomes, a woman—gender as historical situation, not fixed essence. Woman has been cast as man’s Other; liberation requires economic and existential autonomy. Ambiguity of freedom and facticity grounds an ethics beyond abstract purity. Oppression mystifies immanence as destiny. Aging and death disclose social myths of usefulness. Literature and philosophy jointly analyze lived experience (le vécu).",
    "works": [
      "The Second Sex",
      "The Ethics of Ambiguity",
      "The Coming of Age",
      "Memoirs of a Dutiful Daughter"
    ],
    "legacy": "Beauvoir founded modern feminist philosophy’s existential wing and inspired second-wave activism. Debates continue on her relation to Sartre and to later gender theory. The Second Sex remains a global classic.",
    "birthDate": "1908",
    "deathDate": "1986"
  },
  "Jean-Paul Sartre": {
    "lifespan": "1905–1980",
    "school": "existentialism",
    "jobTitle": "philosopher and writer",
    "knowsAbout": [
      "freedom",
      "consciousness",
      "responsibility"
    ],
    "overview": "Jean-Paul Sartre (1905–1980) was the public face of French existentialism, author of Being and Nothingness, plays, novels, and political essays. Captured in World War II, he later co-founded Les Temps modernes and refused the 1964 Nobel Prize. Engagement with Marxism and anti-colonial causes marked his later thought. Handbook dates: 1905–1980. Café philosophy and literary fame intertwined.",
    "ideas": "Existence precedes essence for humans: we are condemned to be free and responsible without excuses. Bad faith flees anguish by pretending to be a fixed thing. The look of the Other objectifies; conflict structures much interpersonal life. Nothingness is introduced by consciousness into being-in-itself. Literature can be a mode of freedom’s disclosure. Later Critique seeks dialectical reason in history and groups.",
    "works": [
      "Being and Nothingness",
      "Existentialism Is a Humanism",
      "Critique of Dialectical Reason",
      "Nausea"
    ],
    "legacy": "Sartre defined mid-century existential culture worldwide and shaped phenomenology’s French reception. Feminists, postcolonial writers, and analytic critics all argue with him. Theater still stages No Exit’s gaze.",
    "birthDate": "1905",
    "deathDate": "1980"
  },
  "Arthur Schopenhauer": {
    "lifespan": "1788–1860",
    "school": "pessimism",
    "jobTitle": "philosopher",
    "knowsAbout": [
      "will",
      "suffering",
      "art"
    ],
    "overview": "Arthur Schopenhauer (1788–1860) was a German philosopher of pessimism whose The World as Will and Representation fused Kantian phenomena with a blind metaphysical will. Largely ignored while Hegel dominated Berlin, he later won fame influencing artists and psychologists. He drew on Platonic Ideas and—among the first Europeans so deeply—Indian thought. Handbook dates: 1788–1860. Aphorisms on life’s suffering made him a literary philosopher.",
    "ideas": "The world is representation structured by space, time, and causality; underlying it is will—endless striving without final satisfaction. Aesthetic contemplation briefly quiets will, especially in music. Compassion is the basis of ethics; egoism expresses will’s conflict. Ascetic denial of the will-to-live is salvation’s path. Character is innate; motivation can be explained but not casually remade. Eastern renunciation motifs corroborate his pessimism.",
    "works": [
      "The World as Will and Representation",
      "On the Fourfold Root of the Principle of Sufficient Reason",
      "Parerga and Paralipomena",
      "On the Basis of Morality"
    ],
    "legacy": "Schopenhauer shaped Wagner, Nietzsche’s early thought, Freud’s climate, and modernist literature. Pessimism and aesthetics curricula still assign him. He opened European philosophy toward Buddhism and the Upanishads.",
    "birthDate": "1788",
    "deathDate": "1860"
  },
  "Søren Kierkegaard": {
    "lifespan": "1813–1855",
    "school": "Christian existentialism",
    "jobTitle": "philosopher and writer",
    "knowsAbout": [
      "faith",
      "anxiety",
      "individual"
    ],
    "overview": "Søren Kierkegaard (1813–1855) was a Danish religious author and critic of Christendom who wrote under pseudonyms exploring aesthetic, ethical, and religious existence. Inheriting a melancholy family fortune, he attacked Hegelian system and lukewarm official faith in Copenhagen. Fear and Trembling, Either/Or, and the Sickness unto Death remain central. Handbook dates: 1813–1855. He is often called existentialism’s grandfather.",
    "ideas": "Truth is subjectivity: appropriation matters more than objective surplus of results. Stages of life—aesthetic, ethical, religious—name existential spheres, not mere theories. Faith is a paradoxical leap, as in Abraham’s trial, beyond universal ethics’ mediation. Anxiety and despair diagnose the self before God. Indirect communication via pseudonyms respects the reader’s freedom. Critique of the crowd and the present age targets leveling modernity.",
    "works": [
      "Either/Or",
      "Fear and Trembling",
      "The Sickness unto Death",
      "Philosophical Fragments"
    ],
    "legacy": "Kierkegaard shaped existential theology, phenomenology, and literary modernism. Protestant and secular readers fight over his Christian intent. He remains the classic of anxious individuality.",
    "birthDate": "1813",
    "deathDate": "1855"
  },
  "Blaise Pascal": {
    "lifespan": "1623–1662",
    "school": "Christian philosophy",
    "jobTitle": "mathematician and religious writer",
    "knowsAbout": [
      "faith",
      "reason",
      "probability"
    ],
    "overview": "Blaise Pascal (1623–1662) was a French mathematician, physicist, and Christian apologist who invented an early calculator and advanced probability and fluid mechanics. After a decisive religious conversion, he defended Jansenism in the Provincial Letters and left unfinished Pensées. Handbook dates: 1623–1662. Scientific genius and existential wager share one short life.",
    "ideas": "Human greatness and wretchedness coincide; diversion hides death and emptiness. The heart has reasons reason does not know—knowledge by esprit de finesse as well as geometry. Wager argument frames belief under uncertainty about God’s existence. Fallen reason needs grace; proofs alone do not save. Critique of casuistry targets moral laxity in Jesuit practice as he saw it. Infinity and nothingness frame the human condition between two abysses.",
    "works": [
      "Pensées",
      "Provincial Letters",
      "Writings on grace",
      "Scientific treatises on vacuum and cycloid"
    ],
    "legacy": "Pascal shaped Christian existential apologetics, probability, and French prose. The wager remains a philosophy-of-religion staple. Scientists and theologians alike claim his dual vocation.",
    "birthDate": "1623",
    "deathDate": "1662"
  },
  "Thomas Hobbes": {
    "lifespan": "1588–1679",
    "school": "social contract theory",
    "jobTitle": "philosopher",
    "knowsAbout": [
      "sovereignty",
      "security",
      "materialism"
    ],
    "overview": "Thomas Hobbes (1588–1679) was the English philosopher of absolutist sovereignty and mechanistic psychology, author of Leviathan (1651). Tutor and associate of aristocratic families, he weathered Civil War exile in Paris and scientific debate with Boyle’s circle. Handbook dates: 1588–1679. Fear of violent death frames his politics more than civic glory.",
    "ideas": "In a state of nature without common power, life is war of all against all—solitary, poor, nasty, brutish, and short. Rational covenants transfer rights to a sovereign to secure peace. Sovereignty must be undivided; mixed constitution invites relapse into war. Materialism explains mind as motions; language and reason serve calculation of consequences. Natural laws are precepts of prudence toward survival. Religion’s public face belongs under sovereign authority to prevent sedition.",
    "works": [
      "Leviathan",
      "De Cive",
      "Elements of Law",
      "De Corpore"
    ],
    "legacy": "Hobbes founded modern social-contract realism and remains liberalism’s dark twin. Game theory and political realism continually restage his state of nature. He set the English template for secular political science.",
    "birthDate": "1588",
    "deathDate": "1679"
  },
  "Voltaire": {
    "lifespan": "1694–1778",
    "school": "Enlightenment",
    "jobTitle": "writer and philosopher",
    "knowsAbout": [
      "toleration",
      "reason",
      "satire"
    ],
    "overview": "Voltaire (François-Marie Arouet, 1694–1778) was the French Enlightenment’s sharpest satirist and campaigner for toleration, author of Candide and countless polemics. Imprisoned in the Bastille, exiled in England, resident at Cirey and Ferney, he fought judicial fanaticism in cases such as Calas. Handbook dates: 1694–1778. Deism, wit, and Écrasez l’infâme defined his public persona.",
    "ideas": "Fanaticism and superstition corrupt justice; toleration is a civil necessity. Philosophical optimism à la Leibniz is mocked when earthquake and cruelty strike—cultivate the garden instead. English empiricism and limited government offered models against absolutist abuses. Deism affirms a creator but rejects revealed dogma’s cruelty. History should be philosophical: manners and arts over dynastic chronicle alone. Wit is a weapon of critique as much as ornament.",
    "works": [
      "Candide",
      "Philosophical Dictionary",
      "Letters Concerning the English Nation",
      "Treatise on Tolerance"
    ],
    "legacy": "Voltaire became Enlightenment cosmopolitanism’s emblem and free speech’s secular saint. Human-rights campaigns claim his interventions. Classroom satire still begins with Candide’s garden.",
    "birthDate": "1694",
    "deathDate": "1778"
  },
  "Ralph Waldo Emerson": {
    "lifespan": "1803–1882",
    "school": "Transcendentalism",
    "jobTitle": "essayist and lecturer",
    "knowsAbout": [
      "self-reliance",
      "nature",
      "individuality"
    ],
    "overview": "Ralph Waldo Emerson (1803–1882) was the American Transcendentalist essayist and lecturer who urged self-reliance and unbroken relation to nature and the Over-Soul. A former Unitarian minister in Concord, he gathered the Dial circle and mentored younger writers including Thoreau. Handbook dates: 1803–1882. Lyceum lectures made him the Republic’s secular preacher.",
    "ideas": "Self-reliance trusts the aboriginal self against conformity and secondhand creed. Nature is a symbol and discipline of spirit, not dead resource only. The Over-Soul names impersonal unity flowing through particular minds. History and biography illustrate representative men as lenses of ideas. Compensation and circles describe moral and intellectual balance in experience. American scholarship must think from new experience, not copy Europe timidly.",
    "works": [
      "Nature",
      "Essays: First Series",
      "Essays: Second Series",
      "The Conduct of Life"
    ],
    "legacy": "Emerson shaped American literature, pragmatism’s climate, and ideals of nonconformity. Critics note elision of social power; admirers credit democratic individuality. He remains Transcendentalism’s central voice.",
    "birthDate": "1803",
    "deathDate": "1882"
  },
  "Henry David Thoreau": {
    "lifespan": "1817–1862",
    "school": "Transcendentalism",
    "jobTitle": "writer and naturalist",
    "knowsAbout": [
      "civil disobedience",
      "nature",
      "simplicity"
    ],
    "overview": "Henry David Thoreau (1817–1862) was an American essayist, naturalist, and political dissenter of the Concord Transcendentalist circle. Walden (1854) recounts deliberate life at Walden Pond; “Civil Disobedience” justifies refusal of unjust tax. He surveyed, botanized, and kept journals of extraordinary density. Handbook dates: 1817–1862. Night in jail over poll tax became a global political emblem.",
    "ideas": "Simplify needs to recover awake life; most luxuries are hindrances. Conscience outranks majority law when the state abets slavery or aggressive war. Nature observation is spiritual and scientific attention together. Walking and wildness renew perception dulled by commerce. Economy must be measured in life expended, not merely money. Resistance should be nonviolent yet uncompromising in integrity.",
    "works": [
      "Walden",
      "Civil Disobedience",
      "A Week on the Concord and Merrimack Rivers",
      "The Maine Woods"
    ],
    "legacy": "Thoreau inspired Gandhi, King, environmentalism, and simple-living movements. Ecocriticism treats the Journals as philosophical field notes. He remains America’s classic of conscientious refusal.",
    "birthDate": "1817",
    "deathDate": "1862"
  },
  "William James": {
    "lifespan": "1842–1910",
    "school": "Pragmatism",
    "jobTitle": "psychologist and philosopher",
    "knowsAbout": [
      "experience",
      "truth",
      "religion"
    ],
    "overview": "William James (1842–1910) was the Harvard psychologist-philosopher who popularized pragmatism and pioneered scientific psychology in America. Brother of novelist Henry James, he trained in medicine and wrote The Principles of Psychology and The Varieties of Religious Experience. Handbook dates: 1842–1910. Openness to experience made him a bridge between science and religion.",
    "ideas": "Truth is what works in the way of belief—cash-value in experiential consequences—without crude subjectivism. Stream of consciousness replaces atomistic mental chemistry. The will to believe may be legitimate under genuine, forced, momentous options when evidence is insufficient. Radical empiricism takes pure experience relations as real. Pluralistic universe resists block-universe monism. Religious varieties are judged by fruits in life.",
    "works": [
      "The Principles of Psychology",
      "Pragmatism",
      "The Varieties of Religious Experience",
      "Essays in Radical Empiricism"
    ],
    "legacy": "James founded American psychology’s literary-scientific style and global pragmatism’s public face. Philosophy of religion still leans on Varieties. Cognitive science and phenomenology reclaim the stream of thought.",
    "birthDate": "1842",
    "deathDate": "1910"
  },
  "Alfred North Whitehead": {
    "lifespan": "1861–1947",
    "school": "process philosophy",
    "jobTitle": "mathematician and philosopher",
    "knowsAbout": [
      "process",
      "science",
      "metaphysics"
    ],
    "overview": "Alfred North Whitehead (1861–1947) was an English mathematician-philosopher who co-authored Principia Mathematica with Russell, then developed process metaphysics at Harvard. Science and the Modern World and Process and Reality rethink nature as events, not inert stuff. Handbook dates: 1861–1947. He moved from logic and education reform to speculative cosmology.",
    "ideas": "Actual occasions are drops of experience becoming; reality is process, not static substance. Prehension names how entities feel and take account of others. Eternal objects are pure potentials ingressing into occasions. God lures novelty as primordial and consequent nature—not coercive omnipotence. Bifurcation of nature into bare matter plus mind is a modern error. Education should foster imagination and generalization, not mere inert ideas.",
    "works": [
      "Process and Reality",
      "Science and the Modern World",
      "Principia Mathematica",
      "Adventures of Ideas"
    ],
    "legacy": "Process theology and metaphysics take Whitehead as founder; ecologists and physicists of becoming cite him. Educationists reclaim Aims of Education. He bridges analytic origins and speculative system.",
    "birthDate": "1861",
    "deathDate": "1947"
  },
  "Augustine of Hippo": {
    "lifespan": "354–430",
    "school": "Christian Platonism",
    "jobTitle": "bishop and theologian",
    "knowsAbout": [
      "time",
      "will",
      "grace"
    ],
    "overview": "Augustine of Hippo (354–430) was the North African bishop and theologian who shaped Latin Christianity’s doctrines of grace, sin, and the two cities. A former Manichaean and rhetor, he converted under Ambrose’s influence at Milan and narrated his restless heart in the Confessions. City of God answered pagan critiques after Rome’s sack. Handbook dates: 354–430. He became Western theology’s most formative Church Father.",
    "ideas": "Restless hearts find rest only in God; memory, time, and inwardness structure the Confessions’ philosophy of mind. Original sin and grace frame freedom: without grace the will is bound to disordered love. Evil is privation of good, not a positive substance. Two cities—love of God versus love of self—interweave in history. Illumination and divine ideas explain knowledge beyond pure empiricism. Just war criteria and political theology emerge amid late Roman crisis.",
    "works": [
      "Confessions",
      "City of God",
      "On the Trinity",
      "On Free Choice of the Will"
    ],
    "legacy": "Augustine dominated medieval theology and continually returns in phenomenology of time, political theology, and philosophy of religion. Protestants and Catholics alike claim him. He remains Africa’s most globally consequential classical philosopher-theologian.",
    "birthDate": "0354",
    "deathDate": "0430"
  },
  "Boethius": {
    "lifespan": "c. 480–524/525",
    "school": "late antique Platonism",
    "jobTitle": "statesman and philosopher",
    "knowsAbout": [
      "fortune",
      "providence",
      "logic"
    ],
    "overview": "Anicius Manlius Severinus Boethius (c. 480–524/5) was a Roman statesman and philosopher who translated Aristotle’s logic into Latin and wrote the Consolation of Philosophy in prison under Theodoric. Executed after a treason charge, he became a medieval school authority. Handbook dates: c. 480–524/5. He bridged late antique philosophy and scholastic curricula.",
    "ideas": "Lady Philosophy consoles by distinguishing Fortune’s goods from the highest good of true happiness. Providence and fate relate as nested orders; divine knowledge does not destroy contingency as Boethius analyzes eternity. Participation in God measures degrees of goodness and being. Logical Organon translations set Latin vocabulary for centuries. Music and arithmetic belong to the quadrivium’s philosophical education. Virtue is the only secure possession amid political ruin.",
    "works": [
      "The Consolation of Philosophy",
      "Commentaries on Porphyry and Aristotle",
      "De topicis differentiis",
      "De institutione musica"
    ],
    "legacy": "The Consolation became a medieval bestseller bridging pagan philosophy and Christian readers. Boethius’s logic shaped university arts faculties. Prison literature and theodicy continually revisit his dialogue.",
    "birthDate": "0480",
    "deathDate": "0525"
  },
  "Cicero": {
    "lifespan": "106–43 BCE",
    "school": "Roman eclecticism",
    "jobTitle": "statesman, orator, and philosopher",
    "knowsAbout": [
      "republic",
      "law",
      "duty"
    ],
    "overview": "Marcus Tullius Cicero (106–43 BCE) was Rome’s greatest orator and a statesman who transmitted Greek philosophy into Latin prose. Caught in the Republic’s death throes, he opposed Caesar’s assassins’ enemies and was killed in the proscriptions. Academic skepticism, Stoic ethics, and political theory fill his dialogues. Handbook dates: 106–43 BCE. Humanists made him the model of eloquence and civic virtue.",
    "ideas": "Natural law and right reason bind humans in a cosmopolitan community of justice. Academic skepticism recommends probable assent without dogmatic certainty. Duties (officia) structure honestas in public and private roles—On Duties became a handbook. Rhetoric serves republican persuasion under law, not mere flattery. Mixed constitution theory seeks stability against tyranny and mob rule. Philosophy in Latin made Rome culturally equal to Greece in his ambition.",
    "works": [
      "On Duties (De Officiis)",
      "On the Republic",
      "On the Laws",
      "Tusculan Disputations"
    ],
    "legacy": "Cicero educated Europe’s lawyers, clergy, and humanists for centuries. Natural-law and republican traditions continually quote him. His death became a symbol of eloquence crushed by empire.",
    "birthDate": "-0106",
    "deathDate": "-0043"
  },
  "Heraclitus": {
    "lifespan": "c. 540–c. 480 BCE",
    "school": "Presocratic philosophy",
    "jobTitle": "philosopher",
    "knowsAbout": [
      "change",
      "logos",
      "opposites"
    ],
    "overview": "Heraclitus of Ephesus (fl. c. 500 BCE) was a Pre-Socratic who wrote a famously obscure book of aphorisms on logos, flux, and the unity of opposites. Ancient nicknames called him the obscure and the weeping philosopher. Only fragments survive via later quotation. Handbook floruit is around 500 BCE. He rivaled Parmenides as a pole of early Greek metaphysics.",
    "ideas": "All things flow; you cannot step into the same river twice—identity persists through change. Conflict is justice; opposites cohere in hidden harmony. Logos is common, yet many live as if they had private understanding. Fire symbolizes ordered transformation of the cosmos. Character is fate for a human; insolence should be quenched more than a blaze. Sleepers miss the shared world the waking logos discloses.",
    "works": [
      "On Nature (fragments)",
      "River fragments",
      "Logos fragments",
      "Political/ethical fragments"
    ],
    "legacy": "Heraclitus inspired Stoics, Hegel’s dialectic imagery, and process philosophies. Poets prize his density; analysts reconstruct argument from shards. He remains flux’s classical spokesman.",
    "birthDate": "-0540",
    "deathDate": "-0480"
  },
  "Epicurus": {
    "lifespan": "341–270 BCE",
    "school": "Epicureanism",
    "jobTitle": "philosopher and school founder",
    "knowsAbout": [
      "pleasure",
      "atoms",
      "friendship"
    ],
    "overview": "Epicurus (341–270 BCE) founded the Garden school in Athens, teaching atomist physics and a therapy of desire aimed at ataraxia. He admitted women and slaves as students and wrote extensively; most works are lost, leaving letters and maxims plus Lucretius’s later poem. Handbook dates: 341–270 BCE. He opposed both superstitious fear and political ambition’s turmoil.",
    "ideas": "Pleasure is the beginning and end of the blessed life—chiefly absence of bodily pain and mental disturbance, not endless luxury. Natural and necessary desires are few; empty desires breed anxiety. Death is nothing to us: when we are, death is not; when death is, we are not. Gods exist as blissful models but do not govern or punish. Atoms and void explain nature without teleology. Friendship is the greatest instrument of happiness.",
    "works": [
      "Letter to Menoeceus",
      "Letter to Herodotus",
      "Principal Doctrines",
      "Vatican Sayings"
    ],
    "legacy": "Epicureanism spread across the Hellenistic and Roman worlds and revived in early modernity via Lucretius. Therapeutic ethics and secularism claim him. Caricatures of gluttony miss his austere hedonism.",
    "birthDate": "-0341",
    "deathDate": "-0270"
  },
  "Lucretius": {
    "lifespan": "c. 99–c. 55 BCE",
    "school": "Epicureanism",
    "jobTitle": "poet and philosopher",
    "knowsAbout": [
      "atoms",
      "mortality",
      "nature"
    ],
    "overview": "Titus Lucretius Carus (c. 99–c. 55 BCE) was the Roman poet of De rerum natura, the fullest surviving exposition of Epicurean physics and ethics. Little secure biography remains; Jerome’s tales of love potion and suicide are doubtful. Handbook dates are approximate for the mid-first century BCE. Hexameter science made philosophy sublime for Latin readers.",
    "ideas": "Atoms and void explain everything from cosmos to mind; nothing comes from nothing. Fear of gods and death is cured by understanding natural causes. Swerve (clinamen) allows freedom and new combinations. Love’s furor and social ambition disturb quiet; modest pleasures suffice. Culture and language arise by utility and convention over time. Poetry’s honey on the cup helps bitter truth heal.",
    "works": [
      "De rerum natura",
      "Books on atoms and void",
      "Books on mind and mortality",
      "Books on cosmology and society"
    ],
    "legacy": "Lucretius transmitted Epicurus to Rome and to Renaissance freethinkers after rediscovery. Scientists and poets still cite his cosmic sublime. He is classical materialism’s greatest poem.",
    "birthDate": "-0099",
    "deathDate": "-0055"
  },
  "Xunzi": {
    "lifespan": "c. 310–c. 235 BCE",
    "school": "Confucianism",
    "jobTitle": "teacher and political thinker",
    "knowsAbout": [
      "ritual",
      "human nature",
      "education"
    ],
    "overview": "Xunzi (Xun Kuang, c. 310–c. 235 BCE) was the systematic Confucian of late Warring States who argued that human nature is bad and requires ritual transformation. Teacher of figures linked to Qin Legalism, he still defended Confucian learning and li as civilizing arts. The Xunzi is a crafted set of essays unlike Analects’ sayings. Handbook dates are approximate for the third century BCE. He became Mencius’s great foil.",
    "ideas": "Nature (xing) tends to envy and disorder; goodness is the product of deliberate effort (wei) and teachers. Ritual and music reshape desire into civility; law supplements but cannot replace li. Heaven is regular natural process, not a moral responder to sacrifice. Names must be fixed by kings to stop chaotic speech. Learning is cumulative accumulation, like blue dye deeper than indigo. Strength of state rests on talent and clear standards, not mere harshness.",
    "works": [
      "Xunzi",
      "Discourse on Heaven",
      "Discourse on Ritual",
      "Against Physiognomy"
    ],
    "legacy": "Xunzi shaped Han Confucianism’s institutional realism and modern debates on moral psychology. Compared with Mencius, he offers Confucianism’s tougher pedagogy. Legalist students made his reception politically ambivalent.",
    "birthDate": "-0310",
    "deathDate": "-0235"
  },
  "Wang Yangming": {
    "lifespan": "1472–1529",
    "school": "Neo-Confucianism",
    "jobTitle": "official and philosopher",
    "knowsAbout": [
      "mind",
      "knowledge",
      "action"
    ],
    "overview": "Wang Yangming (Wang Shouren, 1472–1529) was the Ming Neo-Confucian who taught unity of knowledge and action and innate moral knowing (liangzhi). A statesman and general who suppressed rebellions, he developed teachings in exile and military camps. Instructions for Practical Living records dialogues with disciples. Handbook dates: 1472–1529. He rivaled Zhu Xi as East Asia’s most influential later Confucian.",
    "ideas": "Mind is principle; seeking principle only in external books misses the moral mind. Liangzhi is innate clear knowing that should be extended to all affairs. Knowledge and action are one: genuine knowing already includes doing. Investigation of things means correcting the mind’s affairs, not exhaustively cataloguing externals. Evil is obscuration by selfish desire removable through practice. Everyone can become a sage by reclaiming original clarity.",
    "works": [
      "Instructions for Practical Living",
      "Inquiry on the Great Learning",
      "Record of Music Mountain",
      "Political and military memorials"
    ],
    "legacy": "Wang’s school spread through Ming–Qing China, Korea, and Japan (Yōmeigaku) and inspired modern reformers. Comparative philosophers link him to moral intuitionism and pragmatism. He remains Neo-Confucianism’s activist conscience.",
    "birthDate": "1472",
    "deathDate": "1529"
  },
  "Zhu Xi": {
    "lifespan": "1130–1200",
    "school": "Neo-Confucianism",
    "jobTitle": "philosopher and educator",
    "knowsAbout": [
      "principle",
      "qi",
      "learning"
    ],
    "overview": "Zhu Xi (1130–1200) was the Southern Song synthesizer of Neo-Confucianism whose commentaries on the Four Books became imperial orthodoxy for centuries. He organized cosmology of li (principle) and qi (vital stuff) and built academy pedagogy. Political frustrations and censorial attacks marked his career. Handbook dates: 1130–1200. East Asian civil-service learning bore his stamp into modernity.",
    "ideas": "Li is the coherent pattern in all things; qi individuates and can obscure nature. Human nature is originally good as principle; cultivation clears turbid qi through investigation of things (gewu) and reverence. The Four Books curriculum—Great Learning, Analects, Mencius, Mean—structures moral education. Principle is one, manifestations many. Quiet sitting and reading jointly discipline the mind. Orthodoxy defines itself against Buddhist emptiness and Daoist quietism as he construed them.",
    "works": [
      "Commentaries on the Four Books",
      "Reflections on Things at Hand",
      "Conversations of Master Zhu",
      "Explanations of the Book of Changes"
    ],
    "legacy": "Zhu Xi defined late imperial Confucian orthodoxy across China, Korea, and Japan. Modern New Confucians and critics still argue with his dualism of li/qi. He is Song philosophy’s institutional giant.",
    "birthDate": "1130",
    "deathDate": "1200"
  },
  "Hu Shi": {
    "lifespan": "1891–1962",
    "school": "Chinese pragmatism",
    "jobTitle": "philosopher and public intellectual",
    "knowsAbout": [
      "pragmatism",
      "language",
      "reform"
    ],
    "overview": "Hu Shi (1891–1962) was a Chinese liberal pragmatist, vernacular literature reformer, and student of John Dewey at Columbia. A leader of the May Fourth New Culture Movement, he championed experimentalism, critical thought, and writing in baihua. Later he served as diplomat and academic in Taiwan. Handbook dates: 1891–1962. He sought gradual reform against both Confucian freeze and revolutionary dogma.",
    "ideas": "Bold hypothesis and careful verification—Deweyan method—should guide scholarship and politics. Literary revolution replaces dead classical prose with living vernacular for democracy of letters. Tolerance and skepticism check ideological fanaticism. Reconstructing civilization means critical sorting of China’s past, not wholesale iconoclasm or worship. Pragmatism judges ideas by consequences for life. Science’s spirit matters more than imported slogans.",
    "works": [
      "Outline of the History of Chinese Philosophy",
      "Essays on vernacular literature",
      "Collected lectures on pragmatism",
      "Autobiographical writings"
    ],
    "legacy": "Hu Shi shaped modern Chinese language reform, liberal intellectual culture, and academic Sinology. Communists attacked him; liberals reclaim him. He remains May Fourth’s pragmatic face.",
    "birthDate": "1891",
    "deathDate": "1962"
  }
};
