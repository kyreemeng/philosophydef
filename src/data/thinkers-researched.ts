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
    "overview": "Confucius taught during the political fragmentation of the Spring and Autumn period. He presented himself as a transmitter and interpreter of an older ritual and moral tradition. Active within the tradition labeled Confucianism, Confucius worked as a teacher and political adviser whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 551–479 BCE. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Analects, Five Classics tradition. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Confucius. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "He centered humane concern (ren), ritual propriety (li), moral example, and lifelong learning; rulers should govern by virtue rather than fear. Systematically, the teaching links ritual, ethics, education, government into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Analects shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Analects",
      "Five Classics tradition"
    ],
    "legacy": "Confucian learning deeply shaped Chinese education, family ethics, statecraft, and East Asian intellectual traditions. Reception history carried Confucius into curricula, religious movements, and public rhetoric far from the original setting of Confucianism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Mencius defended Confucian moral cultivation amid the Warring States debates. He travelled among rulers and argued that humane government was politically effective. Active within the tradition labeled Confucianism, Mencius worked as a teacher and political thinker whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at c. 371–c. 289 BCE. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Mencius. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Mencius. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "He held that people have innate beginnings of compassion, shame, deference, and moral discernment, which cultivation can enlarge into virtues. Systematically, the teaching links moral psychology, benevolence, government into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Mencius shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Mencius"
    ],
    "legacy": "His account of good human nature became a major Confucian position and a lasting resource for Chinese moral psychology. Reception history carried Mencius into curricula, religious movements, and public rhetoric far from the original setting of Confucianism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Laozi is the traditional author of the Daodejing, though the historical person and the text's formation remain uncertain. The work criticizes coercive ambition and artificial distinctions. Active within the tradition labeled Daoism, Laozi worked as a legendary sage whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at traditionally 6th century BCE. Exact years remain less certain than for better-documented modern figures, so chronological claims should stay provisional. Major points of entry include Daodejing. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Laozi. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "It describes the Dao as the generative way of things and recommends wu wei, flexible action that does not force outcomes. Systematically, the teaching links Dao, non-action, simplicity into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Daodejing shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Daodejing"
    ],
    "legacy": "The text became foundational for Daoism and influenced Chinese religion, poetry, politics, and comparative philosophy. Reception history carried Laozi into curricula, religious movements, and public rhetoric far from the original setting of Daoism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans."
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
    "overview": "The Zhuangzi combines parables, jokes, and encounters to unsettle fixed standards of knowledge, social rank, and identity. 369–c. Active within the tradition labeled Daoism, Zhuangzi worked as a writer and philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at c. 369–c. 286 BCE. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Zhuangzi. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Zhuangzi. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "Its transformations and dream stories encourage wandering freely, accepting change, and resisting the urge to impose one perspective as final. Systematically, the teaching links skepticism, spontaneity, perspectivism into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Zhuangzi shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Zhuangzi"
    ],
    "legacy": "Zhuangzi's literary philosophy has influenced Daoist practice and modern discussions of pluralism, language, and freedom. Reception history carried Zhuangzi into curricula, religious movements, and public rhetoric far from the original setting of Daoism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Marcus Aurelius ruled the Roman Empire amid war and plague while privately composing reflections addressed to himself. Active within the tradition labeled Stoicism, Marcus Aurelius worked as a roman emperor and philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 121–180. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Meditations. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Marcus Aurelius. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "He urged attention to what lies within one's agency, acceptance of nature's order, and justice toward fellow rational beings. Systematically, the teaching links ethics, self-discipline, cosmopolitanism into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Meditations shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Meditations"
    ],
    "legacy": "Meditations remains the best-known Stoic text and a practical guide to resilience and civic responsibility. Reception history carried Marcus Aurelius into curricula, religious movements, and public rhetoric far from the original setting of Stoicism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Seneca served Nero's court and wrote essays and letters that adapt Stoic ethics to wealth, grief, anger, and political danger. Active within the tradition labeled Stoicism, Seneca worked as a statesman, playwright, and philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at c. 4 BCE–65 CE. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Letters from a Stoic, On Anger, On the Shortness of Life. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Seneca. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "He treats philosophy as therapy for destructive passions and urges daily preparation for mortality and loss. Systematically, the teaching links ethics, anger, mortality into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Letters from a Stoic shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Letters from a Stoic",
      "On Anger",
      "On the Shortness of Life"
    ],
    "legacy": "His vivid Latin prose transmitted Stoicism to Renaissance and early modern readers. Reception history carried Seneca into curricula, religious movements, and public rhetoric far from the original setting of Stoicism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Born enslaved, Epictetus later taught Stoicism at Nicopolis; his student Arrian recorded his teaching. 50–c. Active within the tradition labeled Stoicism, Epictetus worked as a teacher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at c. 50–c. 135. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Discourses, Enchiridion. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Epictetus. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "The central distinction is between what depends on us—judgment and choice—and what does not; freedom consists in governing the former. Systematically, the teaching links agency, ethics, freedom into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Discourses shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Discourses",
      "Enchiridion"
    ],
    "legacy": "His concise moral discipline influenced Roman, Christian, and modern therapeutic traditions. Reception history carried Epictetus into curricula, religious movements, and public rhetoric far from the original setting of Stoicism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Nietzsche attacked inherited moralities and diagnosed European nihilism after the decline of religious certainties. His aphoristic books combine philology, psychology, and cultural criticism. Active within the tradition labeled genealogy and vitalism, Friedrich Nietzsche worked as a philosopher and classical philologist whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1844–1900. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Thus Spoke Zarathustra, Beyond Good and Evil, On the Genealogy of Morality. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Friedrich Nietzsche. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking.",
    "ideas": "He developed genealogical critique, perspectivism, the will to power, and ideals of self-overcoming rather than a systematic doctrine. Systematically, the teaching links morality, culture, nihilism, art into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Thus Spoke Zarathustra shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Thus Spoke Zarathustra",
      "Beyond Good and Evil",
      "On the Genealogy of Morality"
    ],
    "legacy": "He transformed existentialism, psychoanalysis, literary theory, and poststructuralism, despite frequent ideological misappropriation. Reception history carried Friedrich Nietzsche into curricula, religious movements, and public rhetoric far from the original setting of genealogy and vitalism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Kant sought to explain how objective knowledge and moral obligation are possible while limiting speculative metaphysics. Active within the tradition labeled German idealism, Immanuel Kant worked as a philosopher and professor whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1724–1804. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Critique of Pure Reason, Groundwork, Critique of Judgment. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Immanuel Kant. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "He argued that experience is structured by a priori forms and categories, and that morality rests on autonomy and the categorical imperative. Systematically, the teaching links epistemology, ethics, aesthetics, law into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Critique of Pure Reason shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Critique of Pure Reason",
      "Groundwork",
      "Critique of Judgment"
    ],
    "legacy": "Kant set the agenda for German idealism and remains central to debates on knowledge, dignity, and universal law. Reception history carried Immanuel Kant into curricula, religious movements, and public rhetoric far from the original setting of German idealism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Dewey joined philosophical inquiry to experimental education and democratic reform. He saw ideas as tools arising from problematic situations. Active within the tradition labeled Pragmatism, John Dewey worked as a philosopher and educator whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1859–1952. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Democracy and Education, Experience and Nature, The Public and Its Problems. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with John Dewey. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "Inquiry reconstructs experience through testing consequences; democracy is a way of associated living, not merely a voting system. Systematically, the teaching links democracy, education, experience into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Democracy and Education shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Democracy and Education",
      "Experience and Nature",
      "The Public and Its Problems"
    ],
    "legacy": "Dewey strongly influenced progressive education and American social philosophy. Reception history carried John Dewey into curricula, religious movements, and public rhetoric far from the original setting of Pragmatism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans. Philological and historical research continues to refine attribution, chronology, and emphasis.",
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
    "overview": "Wittgenstein's early and later philosophies differ sharply but both examine how language can mislead philosophical reflection. Active within the tradition labeled analytic philosophy, Ludwig Wittgenstein worked as a philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1889–1951. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Tractatus Logico-Philosophicus, Philosophical Investigations. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Ludwig Wittgenstein. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "The Tractatus connects meaningful propositions to logical form; later work explains meaning through language-games and forms of life. Systematically, the teaching links language, logic, mind, meaning into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Tractatus Logico-Philosophicus shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Tractatus Logico-Philosophicus",
      "Philosophical Investigations"
    ],
    "legacy": "He redirected twentieth-century philosophy of language, mind, logic, and ordinary practice. Reception history carried Ludwig Wittgenstein into curricula, religious movements, and public rhetoric far from the original setting of analytic philosophy. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Russell helped establish analytic philosophy through work on logic and the foundations of mathematics, while also writing widely on public affairs. Active within the tradition labeled analytic philosophy, Bertrand Russell worked as a philosopher, logician, and activist whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1872–1970. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Principia Mathematica, On Denoting, The Problems of Philosophy. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Bertrand Russell. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "His theory of descriptions clarified reference; with Whitehead he pursued logicism, the view that mathematics rests on logic. Systematically, the teaching links logic, mathematics, knowledge, peace into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Principia Mathematica shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Principia Mathematica",
      "On Denoting",
      "The Problems of Philosophy"
    ],
    "legacy": "His technical methods and public intellectual role shaped modern analytic philosophy. Reception history carried Bertrand Russell into curricula, religious movements, and public rhetoric far from the original setting of analytic philosophy. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Popper opposed verificationism and historicist political prediction, emphasizing fallible conjecture and criticism. Active within the tradition labeled critical rationalism, Karl Popper worked as a philosopher of science whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1902–1994. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include The Logic of Scientific Discovery, The Open Society and Its Enemies. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Karl Popper. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "Scientific theories take risks by excluding possible observations; knowledge advances through attempted refutation, not final proof. Systematically, the teaching links science, falsification, politics into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to The Logic of Scientific Discovery shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "The Logic of Scientific Discovery",
      "The Open Society and Its Enemies"
    ],
    "legacy": "His account of criticism remains influential in philosophy of science and liberal political thought. Reception history carried Karl Popper into curricula, religious movements, and public rhetoric far from the original setting of critical rationalism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Descartes sought secure foundations for knowledge through methodological doubt and contributed decisively to analytic geometry. Active within the tradition labeled Rationalism, René Descartes worked as a philosopher and mathematician whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1596–1650. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Meditations on First Philosophy, Discourse on Method, Principles of Philosophy. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with René Descartes. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "The cogito identifies thinking as indubitable; he distinguished thinking substance from extended substance and defended clear and distinct ideas. Systematically, the teaching links method, mind, mathematics into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Meditations on First Philosophy shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Meditations on First Philosophy",
      "Discourse on Method",
      "Principles of Philosophy"
    ],
    "legacy": "Cartesian rationalism framed modern debates about mind, body, certainty, and scientific method. Reception history carried René Descartes into curricula, religious movements, and public rhetoric far from the original setting of Rationalism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Hegel developed a systematic account of consciousness, social institutions, history, logic, and art as mutually intelligible developments. G. Active within the tradition labeled German idealism, G. W. F. Hegel worked as a philosopher and professor whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1770–1831. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Phenomenology of Spirit, Science of Logic, Philosophy of Right. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with G. W. F. Hegel. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "Freedom becomes actual through recognition and institutions; contradictions are not simple errors but moments in conceptual and historical development. For G. Systematically, the teaching links history, dialectic, recognition, freedom into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Phenomenology of Spirit shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Phenomenology of Spirit",
      "Science of Logic",
      "Philosophy of Right"
    ],
    "legacy": "Hegel influenced Marxism, existentialism, critical theory, theology, and theories of recognition. W. Reception history carried G. W. F. Hegel into curricula, religious movements, and public rhetoric far from the original setting of German idealism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Arendt analyzed totalitarian domination, statelessness, public action, and the conditions under which people can appear to one another as equals. Active within the tradition labeled political theory, Hannah Arendt worked as a political theorist whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1906–1975. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include The Origins of Totalitarianism, The Human Condition, Eichmann in Jerusalem. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Hannah Arendt. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "She distinguished labor, work, and action, and argued that political freedom arises in shared speech and initiative. Systematically, the teaching links totalitarianism, action, judgment into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to The Origins of Totalitarianism shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "The Origins of Totalitarianism",
      "The Human Condition",
      "Eichmann in Jerusalem"
    ],
    "legacy": "Her work remains essential to reflection on authoritarianism, citizenship, responsibility, and public life. Reception history carried Hannah Arendt into curricula, religious movements, and public rhetoric far from the original setting of political theory. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Bacon criticized inherited scholastic habits and promoted organized empirical inquiry aimed at useful knowledge. Active within the tradition labeled empiricism, Francis Bacon worked as a statesman and philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1561–1626. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Novum Organum, The Advancement of Learning, New Atlantis. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Francis Bacon. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "He catalogued idols that distort judgment and advocated gradual induction from observations and experiments. Systematically, the teaching links induction, science, method into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Novum Organum shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Novum Organum",
      "The Advancement of Learning",
      "New Atlantis"
    ],
    "legacy": "He became an emblem of the scientific revolution and institutional science. Reception history carried Francis Bacon into curricula, religious movements, and public rhetoric far from the original setting of empiricism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Weil united radical social criticism with religious reflection, factory labor, and anti-fascist commitment. Active within the tradition labeled Christian mysticism, Simone Weil worked as a philosopher and activist whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1909–1943. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Gravity and Grace, The Need for Roots. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Simone Weil. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "Attention is an impersonal openness to reality; affliction reveals both oppression and the need for obligation toward the vulnerable. Systematically, the teaching links attention, affliction, justice into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Gravity and Grace shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Gravity and Grace",
      "The Need for Roots"
    ],
    "legacy": "Her demanding moral and spiritual prose influences theology, political thought, and ethics. Reception history carried Simone Weil into curricula, religious movements, and public rhetoric far from the original setting of Christian mysticism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Anselm pursued a faith seeking understanding within medieval Christian theology. Active within the tradition labeled Scholasticism, Anselm of Canterbury worked as a theologian and archbishop whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at c. 1033–1109. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Proslogion, Cur Deus Homo. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Anselm of Canterbury. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "He formulated an ontological argument and theories of atonement while defending rational reflection on doctrine. Systematically, the teaching links faith, reason, God into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Proslogion shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Proslogion",
      "Cur Deus Homo"
    ],
    "legacy": "His arguments remain central cases in philosophy of religion and medieval logic. Reception history carried Anselm of Canterbury into curricula, religious movements, and public rhetoric far from the original setting of Scholasticism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Ockham developed rigorous medieval logic and opposed unnecessary metaphysical entities. Active within the tradition labeled Nominalism, William of Ockham worked as a friar and logician whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at c. 1287–1347. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Summa Logicae, Ordinatio. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with William of Ockham. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "His methodological razor favors explanations that do not multiply kinds beyond need; universals are signs rather than separate things. Systematically, the teaching links logic, universals, economy into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Summa Logicae shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Summa Logicae",
      "Ordinatio"
    ],
    "legacy": "Ockham helped shape nominalism and later empiricist habits of analysis. Reception history carried William of Ockham into curricula, religious movements, and public rhetoric far from the original setting of Nominalism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Mozi led a movement that criticized aristocratic ritual expenditure and aggressive warfare in the Warring States period. 470–c. Active within the tradition labeled Mohism, Mozi worked as a teacher and social reformer whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at c. 470–c. 391 BCE. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Mozi. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Mozi. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "He defended impartial concern, merit-based office, frugality, and evaluating teachings by their social benefit. Systematically, the teaching links impartial care, utility, peace into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Mozi shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Mozi"
    ],
    "legacy": "Mohism offers an early systematic Chinese ethics of universal concern and consequential evaluation. Reception history carried Mozi into curricula, religious movements, and public rhetoric far from the original setting of Mohism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Sunzi is the traditional author of a compact military classic whose authorship and date remain debated. Active within the tradition labeled military strategy, Sunzi worked as a strategist whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at traditionally 5th century BCE. Exact years remain less certain than for better-documented modern figures, so chronological claims should stay provisional. Major points of entry include The Art of War. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Sunzi. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "It treats intelligence, adaptation, terrain, morale, and minimizing costly conflict as keys to successful command. Systematically, the teaching links strategy, conflict, leadership into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to The Art of War shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "The Art of War"
    ],
    "legacy": "The work influenced East Asian strategy and later business and political rhetoric. Reception history carried Sunzi into curricula, religious movements, and public rhetoric far from the original setting of military strategy. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans."
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
    "overview": "Zhang Zai developed a cosmology in which all things are transformations of qi, the vital material force. Active within the tradition labeled Neo-Confucianism, Zhang Zai worked as a philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1020–1077. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Correcting Youthful Ignorance, Western Inscription. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Zhang Zai. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "His Great Western Inscription frames all people as kin within a shared cosmos, joining metaphysics to moral responsibility. Systematically, the teaching links qi, cosmos, ethics into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Correcting Youthful Ignorance shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Correcting Youthful Ignorance",
      "Western Inscription"
    ],
    "legacy": "He became a major source for Song Neo-Confucian cosmology. Reception history carried Zhang Zai into curricula, religious movements, and public rhetoric far from the original setting of Neo-Confucianism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans. Philological and historical research continues to refine attribution, chronology, and emphasis.",
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
    "overview": "Writing after the Ming collapse, Wang Fuzhi defended historically grounded Confucian learning against Buddhist and Daoist abstraction. Active within the tradition labeled Confucian realism, Wang Fuzhi worked as a philosopher and historian whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1619–1692. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Reading the Comprehensive Mirror, Commentary on the Book of Changes. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Wang Fuzhi. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "He treated qi and patterned activity as inseparable and saw moral understanding as formed in concrete historical practice. Systematically, the teaching links history, qi, ethics into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Reading the Comprehensive Mirror shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Reading the Comprehensive Mirror",
      "Commentary on the Book of Changes"
    ],
    "legacy": "His work later informed Chinese nationalism and modern reassessments of Confucian materialism. Reception history carried Wang Fuzhi into curricula, religious movements, and public rhetoric far from the original setting of Confucian realism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Wang Guowei brought German philosophy, especially Schopenhauer, into conversation with Chinese literary criticism and historical scholarship. Active within the tradition labeled modern Chinese philosophy, Wang Guowei worked as a scholar and critic whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1877–1927. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Human Words, A Critique of A Dream of Red Mansions. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Wang Guowei. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "He analyzed aesthetic distance and stages of artistic insight while studying classical poetry and antiquities. Systematically, the teaching links aesthetics, literature, comparative thought into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Human Words shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Human Words",
      "A Critique of A Dream of Red Mansions"
    ],
    "legacy": "He helped establish modern Chinese aesthetics and comparative intellectual history. Reception history carried Wang Guowei into curricula, religious movements, and public rhetoric far from the original setting of modern Chinese philosophy. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Fung Yu-lan is the alternate Wade-Giles romanization of Feng Youlan, the historian and New Principle Learning philosopher. Active within the tradition labeled modern Confucianism, Fung Yu-lan worked as a philosopher and historian whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1895–1990. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include A History of Chinese Philosophy, New Principle Learning. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Fung Yu-lan. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "He interpreted classical Chinese thought through modern categories and described progressive levels of human moral and spiritual life. Systematically, the teaching links Chinese philosophy, metaphysics, history into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to A History of Chinese Philosophy shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "A History of Chinese Philosophy",
      "New Principle Learning"
    ],
    "legacy": "Under this romanization, his work remains a standard gateway to Chinese philosophical history. Reception history carried Fung Yu-lan into curricula, religious movements, and public rhetoric far from the original setting of modern Confucianism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Liang compared Chinese, Indian, and Western cultures while working on rural reconstruction in Republican China. Active within the tradition labeled modern Confucianism, Liang Shuming worked as a philosopher and reformer whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1893–1988. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Eastern and Western Cultures and Their Philosophies. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Liang Shuming. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "He argued that cultures express distinctive orientations of will and sought a renewed Confucian social ethic. Systematically, the teaching links culture, rural reconstruction, Confucianism into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Eastern and Western Cultures and Their Philosophies shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Eastern and Western Cultures and Their Philosophies"
    ],
    "legacy": "He remains important to debates about Chinese modernity and Confucian renewal. Reception history carried Liang Shuming into curricula, religious movements, and public rhetoric far from the original setting of modern Confucianism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Leibniz combined metaphysics, mathematics, law, and projects for international cooperation. Active within the tradition labeled Rationalism, Gottfried Wilhelm Leibniz worked as a philosopher, mathematician, and diplomat whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1646–1716. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Monadology, Discourse on Metaphysics, Theodicy. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Gottfried Wilhelm Leibniz. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "He described reality as coordinated monads, defended sufficient reason and the best possible world, and independently developed calculus. Systematically, the teaching links metaphysics, logic, calculus into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Monadology shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Monadology",
      "Discourse on Metaphysics",
      "Theodicy"
    ],
    "legacy": "His ideas anticipate symbolic logic, computation, and modern metaphysics. Reception history carried Gottfried Wilhelm Leibniz into curricula, religious movements, and public rhetoric far from the original setting of Rationalism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Bentham criticized legal fictions and campaigned for transparent institutions, prison reform, and broader political rights. Active within the tradition labeled Utilitarianism, Jeremy Bentham worked as a philosopher and reformer whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1748–1832. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include An Introduction to the Principles of Morals and Legislation, Panopticon. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Jeremy Bentham. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "Actions and laws should promote the greatest happiness, assessed through pleasure and pain. Systematically, the teaching links utility, law, reform into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to An Introduction to the Principles of Morals and Legislation shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "An Introduction to the Principles of Morals and Legislation",
      "Panopticon"
    ],
    "legacy": "He founded classical utilitarianism and influenced legal positivism and social reform. Reception history carried Jeremy Bentham into curricula, religious movements, and public rhetoric far from the original setting of Utilitarianism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Peirce was a wide-ranging logician and scientist who originated pragmatism and semiotics. Active within the tradition labeled Pragmatism, Charles Sanders Peirce worked as a logician and scientist whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1839–1914. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include How to Make Our Ideas Clear, The Fixation of Belief. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Charles Sanders Peirce. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "Beliefs are habits of action; inquiry is communal self-correction, and meaning lies in conceivable practical effects. Systematically, the teaching links signs, inquiry, logic into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to How to Make Our Ideas Clear shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "How to Make Our Ideas Clear",
      "The Fixation of Belief"
    ],
    "legacy": "He is a foundational figure in pragmatism, semiotics, and the logic of science. Reception history carried Charles Sanders Peirce into curricula, religious movements, and public rhetoric far from the original setting of Pragmatism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Santayana developed a poetic naturalism that joined skepticism about knowledge with appreciation of art, religion, and cultural life. Active within the tradition labeled naturalism, George Santayana worked as a philosopher and writer whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1863–1952. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include The Life of Reason, Scepticism and Animal Faith. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with George Santayana. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "He distinguished material existence from essences and treated reason as an imaginative ordering of experience. Systematically, the teaching links reason, culture, aesthetics into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to The Life of Reason shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "The Life of Reason",
      "Scepticism and Animal Faith"
    ],
    "legacy": "His elegant prose shaped American philosophy and literary criticism. Reception history carried George Santayana into curricula, religious movements, and public rhetoric far from the original setting of naturalism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans. Philological and historical research continues to refine attribution, chronology, and emphasis.",
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
    "overview": "Buber explored human existence through the difference between instrumental relations and genuine encounter. Active within the tradition labeled dialogical philosophy, Martin Buber worked as a philosopher and theologian whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1878–1965. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include I and Thou, The Way of Man. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Martin Buber. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "I–Thou relation addresses another as a presence rather than an object; dialogue grounds ethical and religious life. Systematically, the teaching links dialogue, relation, religion into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to I and Thou shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "I and Thou",
      "The Way of Man"
    ],
    "legacy": "His relational thought influenced theology, education, psychotherapy, and ethics. Reception history carried Martin Buber into curricula, religious movements, and public rhetoric far from the original setting of dialogical philosophy. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Murdoch challenged behaviorist and existentialist moral theories through a Platonic account of inner moral vision. Active within the tradition labeled moral philosophy, Iris Murdoch worked as a philosopher and novelist whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1919–1999. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include The Sovereignty of Good, Metaphysics as a Guide to Morals. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Iris Murdoch. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "Moral progress involves just and loving attention to reality, aided by art and the idea of the Good. Systematically, the teaching links attention, virtue, art into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to The Sovereignty of Good shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "The Sovereignty of Good",
      "Metaphysics as a Guide to Morals"
    ],
    "legacy": "She renewed virtue ethics and integrated literary insight into moral philosophy. Reception history carried Iris Murdoch into curricula, religious movements, and public rhetoric far from the original setting of moral philosophy. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Jaspers moved from psychiatry to a philosophy of existence focused on situations where technical control fails. Active within the tradition labeled existential philosophy, Karl Jaspers worked as a psychiatrist and philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1883–1969. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Philosophy, The Origin and Goal of History. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Karl Jaspers. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "Boundary situations such as death, guilt, and struggle can awaken authentic existence through communication. Systematically, the teaching links existence, communication, limits into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Philosophy shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Philosophy",
      "The Origin and Goal of History"
    ],
    "legacy": "He shaped existential thought and introduced the influential idea of an Axial Age. Reception history carried Karl Jaspers into curricula, religious movements, and public rhetoric far from the original setting of existential philosophy. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Dogen brought Soto Zen to Japan after study in China and made sitting meditation central to his community. Active within the tradition labeled Zen Buddhism, Dogen worked as a monk and teacher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1200–1253. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Shobogenzo, Fukan zazengi. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Dogen. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "Practice and awakening are not separate achievements: zazen expresses already-present Buddha-nature. Systematically, the teaching links meditation, Buddha-nature, practice into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Shobogenzo shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "works": [
      "Shobogenzo",
      "Fukan zazengi"
    ],
    "legacy": "His subtle writings are central to Japanese Buddhism and global Zen practice. Reception history carried Dogen into curricula, religious movements, and public rhetoric far from the original setting of Zen Buddhism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Huineng is traditionally remembered as the Sixth Patriarch of Chan, especially through the later Platform Sutra. Active within the tradition labeled Chan Buddhism, Huineng worked as a zen patriarch whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 638–713. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Platform Sutra. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Huineng. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "He emphasized direct insight into one's nature and nonattachment to fixed forms, including attachment to meditation itself. Systematically, the teaching links sudden awakening, nonattachment, mind into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Platform Sutra shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Platform Sutra"
    ],
    "legacy": "His image of sudden awakening profoundly shaped Chan and Zen lineages. Reception history carried Huineng into curricula, religious movements, and public rhetoric far from the original setting of Chan Buddhism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Han Feizi synthesized Legalist statecraft during the Warring States period and served the state of Han. Active within the tradition labeled Legalism, Han Feizi worked as a political philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at c. 280–233 BCE. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Han Feizi. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Han Feizi. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "Stable rule requires clear laws, reliable rewards and punishments, and administrative techniques rather than reliance on rulers' virtue. Systematically, the teaching links law, power, government into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Han Feizi shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Han Feizi"
    ],
    "legacy": "His analysis of institutions influenced Qin governance and remains a major Chinese theory of power. Reception history carried Han Feizi into curricula, religious movements, and public rhetoric far from the original setting of Legalism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Qian Mu interpreted Chinese history as a continuous moral and cultural tradition, often opposing reductive political readings. Active within the tradition labeled Chinese intellectual history, Qian Mu worked as a historian and philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1895–1990. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Outline of Chinese National History, The Spirit of Chinese Culture. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Qian Mu. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "He stressed the educational and ethical resources of Confucian civilization for modern Chinese life. Systematically, the teaching links tradition, history, education into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Outline of Chinese National History shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Outline of Chinese National History",
      "The Spirit of Chinese Culture"
    ],
    "legacy": "He was an influential twentieth-century historian of Chinese thought. Reception history carried Qian Mu into curricula, religious movements, and public rhetoric far from the original setting of Chinese intellectual history. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Tagore was a Bengali poet and educator who criticized narrow nationalism while seeking a universal human culture. Active within the tradition labeled humanism, Rabindranath Tagore worked as a poet, educator, and philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1861–1941. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Sadhana, Nationalism, The Religion of Man. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Rabindranath Tagore. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "He defended creative freedom, learning through nature and art, and dialogue across civilizations. Systematically, the teaching links humanism, education, nationalism into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Sadhana shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Sadhana",
      "Nationalism",
      "The Religion of Man"
    ],
    "legacy": "His thought links Indian modernity, education, literature, and international humanism. Reception history carried Rabindranath Tagore into curricula, religious movements, and public rhetoric far from the original setting of humanism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Tillich interpreted Christian symbols through existential questions of meaning, anxiety, and estrangement. Active within the tradition labeled existential theology, Paul Tillich worked as a theologian and philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1886–1965. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include The Courage to Be, Systematic Theology. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Paul Tillich. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "God is not a being among beings but the ground of being; faith is ultimate concern. Systematically, the teaching links faith, anxiety, culture into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to The Courage to Be shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "The Courage to Be",
      "Systematic Theology"
    ],
    "legacy": "He influenced twentieth-century theology and philosophy of religion. Reception history carried Paul Tillich into curricula, religious movements, and public rhetoric far from the original setting of existential theology. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans. Philological and historical research continues to refine attribution, chronology, and emphasis.",
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
    "overview": "Fromm combined Freud, Marx, and humanism to explain how modern people flee freedom into conformity and authoritarianism. Active within the tradition labeled humanistic psychoanalysis, Erich Fromm worked as a psychoanalyst and social critic whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1900–1980. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Escape from Freedom, The Art of Loving. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Erich Fromm. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "Healthy life requires productive love, autonomy, and social arrangements that serve human needs. Systematically, the teaching links freedom, love, society into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Escape from Freedom shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Escape from Freedom",
      "The Art of Loving"
    ],
    "legacy": "His accessible social psychology influenced popular and academic discussions of alienation. Reception history carried Erich Fromm into curricula, religious movements, and public rhetoric far from the original setting of humanistic psychoanalysis. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Tocqueville studied American democracy to understand equality's political and cultural consequences. Active within the tradition labeled liberal political thought, Alexis de Tocqueville worked as a political thinker and historian whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1805–1859. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Democracy in America, The Old Regime and the Revolution. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Alexis de Tocqueville. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "He praised local associations and civic habits while warning of majority tyranny and soft despotism. Systematically, the teaching links democracy, equality, civil society into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Democracy in America shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Democracy in America",
      "The Old Regime and the Revolution"
    ],
    "legacy": "His analysis remains central to democratic theory and sociology. Reception history carried Alexis de Tocqueville into curricula, religious movements, and public rhetoric far from the original setting of liberal political thought. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Smith joined moral psychology to political economy, asking how social cooperation emerges without centralized design. Active within the tradition labeled Scottish Enlightenment, Adam Smith worked as a moral philosopher and economist whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1723–1790. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include The Theory of Moral Sentiments, The Wealth of Nations. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Adam Smith. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "Sympathy and the impartial spectator structure moral judgment; division of labor can enrich societies but requires justice and education. Systematically, the teaching links sympathy, markets, justice into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to The Theory of Moral Sentiments shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "The Theory of Moral Sentiments",
      "The Wealth of Nations"
    ],
    "legacy": "He is a foundational thinker for economics and moral philosophy. Reception history carried Adam Smith into curricula, religious movements, and public rhetoric far from the original setting of Scottish Enlightenment. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Plutarch wrote comparative biographies and moral essays that use historical lives as material for ethical reflection. 46–c. Active within the tradition labeled Middle Platonism, Plutarch worked as a biographer and essayist whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at c. 46–c. 119 CE. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Parallel Lives, Moralia. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Plutarch. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "He explored character, education, religious custom, and the relation between Greek and Roman civic virtues. Systematically, the teaching links character, history, ethics into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Parallel Lives shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Parallel Lives",
      "Moralia"
    ],
    "legacy": "His portraits shaped Renaissance political thought, drama, and popular ideas of antiquity. Reception history carried Plutarch into curricula, religious movements, and public rhetoric far from the original setting of Middle Platonism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Comte proposed a scientific study of society and coined sociology while seeking social order after revolution. Active within the tradition labeled Positivism, Auguste Comte worked as a philosopher and sociologist whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1798–1857. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Course of Positive Philosophy, System of Positive Polity. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Auguste Comte. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "His law of three stages describes movement from theological through metaphysical to positive explanation. Systematically, the teaching links science, society, progress into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Course of Positive Philosophy shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Course of Positive Philosophy",
      "System of Positive Polity"
    ],
    "legacy": "He founded positivism and influenced early sociology and secular reform movements. Reception history carried Auguste Comte into curricula, religious movements, and public rhetoric far from the original setting of Positivism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Zengzi was a disciple in the Confucian tradition and is associated with teachings on daily self-examination and filial conduct. Active within the tradition labeled Confucianism, Zengzi worked as a teacher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at c. 505–436 BCE. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Great Learning tradition, Analects tradition. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Zengzi. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "He linked moral learning to sincerity, ritual responsibility, and reflection on one's obligations to others. Systematically, the teaching links filial piety, self-cultivation, ritual into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Great Learning tradition shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Great Learning tradition",
      "Analects tradition"
    ],
    "legacy": "Later Confucians treated him as an important transmitter of Confucian cultivation. Reception history carried Zengzi into curricula, religious movements, and public rhetoric far from the original setting of Confucianism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Protagoras taught rhetoric and civic argument in democratic Greece, charging fees for instruction. 490–c. Active within the tradition labeled Sophism, Protagoras worked as a teacher and rhetorician whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at c. 490–c. 420 BCE. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Truth, Antilogiai. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Protagoras. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "His claim that humanity is the measure of things prompted debates about relativism, perception, and public judgment. Systematically, the teaching links relativism, rhetoric, education into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Truth shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Truth",
      "Antilogiai"
    ],
    "legacy": "He remains a key figure in accounts of sophistry, rhetoric, and relativism. Reception history carried Protagoras into curricula, religious movements, and public rhetoric far from the original setting of Sophism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Plotinus reinterpreted Plato in a hierarchical metaphysics developed through teaching in Rome. Active within the tradition labeled Neoplatonism, Plotinus worked as a philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 204/5–270. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Enneads. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Plotinus. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Comparative reading across languages further clarifies what is distinctive in the arguments. Classroom and scholarly use keep the primary texts in circulation beyond specialist circles.",
    "ideas": "All reality proceeds from the One through Intellect and Soul, while return occurs through intellectual and mystical contemplation. Systematically, the teaching links the One, soul, contemplation into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Enneads shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Enneads"
    ],
    "legacy": "Neoplatonism profoundly influenced late antique, Islamic, Jewish, and Christian philosophy. Reception history carried Plotinus into curricula, religious movements, and public rhetoric far from the original setting of Neoplatonism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans. Philological and historical research continues to refine attribution, chronology, and emphasis.",
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
    "overview": "Berkeley argued against material substance while retaining empiricist attention to experience. Active within the tradition labeled Empiricism and idealism, George Berkeley worked as a philosopher and bishop whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1685–1753. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Treatise Concerning the Principles of Human Knowledge, Three Dialogues. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with George Berkeley. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "To be is to be perceived; ideas exist in minds, with God ensuring the continuity and order of perceived nature. Systematically, the teaching links perception, immaterialism, knowledge into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Treatise Concerning the Principles of Human Knowledge shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Treatise Concerning the Principles of Human Knowledge",
      "Three Dialogues"
    ],
    "legacy": "His immaterialism sharpened debates about perception, causation, and realism. Reception history carried George Berkeley into curricula, religious movements, and public rhetoric far from the original setting of Empiricism and idealism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Vico opposed reducing human affairs to the methods of physics and sought a science of history, language, and institutions. Active within the tradition labeled historicism, Giambattista Vico worked as a philosopher and historian whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1668–1744. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include The New Science. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Giambattista Vico. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "Humans can know the civil world because they made it; poetic imagination and myth organize early social consciousness. Systematically, the teaching links history, myth, knowledge into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to The New Science shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "The New Science"
    ],
    "legacy": "He anticipated historicism, anthropology, and interpretive social science. Reception history carried Giambattista Vico into curricula, religious movements, and public rhetoric far from the original setting of historicism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans. Philological and historical research continues to refine attribution, chronology, and emphasis.",
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
    "overview": "Ortega developed a philosophy of life and perspective while analyzing Spain and twentieth-century mass politics. Active within the tradition labeled perspectivism, José Ortega y Gasset worked as a philosopher and essayist whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1883–1955. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Meditations on Quixote, The Revolt of the Masses. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with José Ortega y Gasset. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "Each life encounters reality from a situation; mass society risks replacing excellence and responsibility with passive conformity. Systematically, the teaching links perspective, mass society, life into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Meditations on Quixote shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Meditations on Quixote",
      "The Revolt of the Masses"
    ],
    "legacy": "He influenced Spanish philosophy, cultural criticism, and theories of mass democracy. Reception history carried José Ortega y Gasset into curricula, religious movements, and public rhetoric far from the original setting of perspectivism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Wollstonecraft challenged the social arrangements that denied women serious education and civic independence. Active within the tradition labeled feminist Enlightenment, Mary Wollstonecraft worked as a writer and philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1759–1797. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include A Vindication of the Rights of Woman, A Vindication of the Rights of Men. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Mary Wollstonecraft. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "Reason and virtue belong to women as well as men; unequal education produces artificial dependence and distorted character. Systematically, the teaching links rights, education, equality into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to A Vindication of the Rights of Woman shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "A Vindication of the Rights of Woman",
      "A Vindication of the Rights of Men"
    ],
    "legacy": "She is a founding figure in feminist political philosophy. Reception history carried Mary Wollstonecraft into curricula, religious movements, and public rhetoric far from the original setting of feminist Enlightenment. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Marcel contrasted technical problem-solving with mysteries in which the inquirer is personally involved. Active within the tradition labeled Christian existentialism, Gabriel Marcel worked as a philosopher and dramatist whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1889–1973. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Being and Having, Homo Viator. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Gabriel Marcel. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "Availability, fidelity, and hope disclose persons as presences rather than objects to possess or manage. Systematically, the teaching links being, hope, presence into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Being and Having shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Being and Having",
      "Homo Viator"
    ],
    "legacy": "He offered a relational, religious alternative within existential philosophy. Reception history carried Gabriel Marcel into curricula, religious movements, and public rhetoric far from the original setting of Christian existentialism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Democritus developed atomism with Leucippus, explaining natural change without purpose-driven cosmic design. 460–c. Active within the tradition labeled Atomism, Democritus worked as a philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at c. 460–c. 370 BCE. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Fragments. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Democritus. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "Reality consists of atoms and void; ethical well-being involves cheerful balance and measured desires. Systematically, the teaching links atoms, nature, ethics into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Fragments shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Fragments"
    ],
    "legacy": "Atomism became a crucial alternative to teleological natural philosophy. Reception history carried Democritus into curricula, religious movements, and public rhetoric far from the original setting of Atomism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans. Philological and historical research continues to refine attribution, chronology, and emphasis.",
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
    "overview": "Diogenes used provocative public performance to expose dependence on wealth, status, and social convention. Active within the tradition labeled Cynicism, Diogenes of Sinope worked as a philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at c. 412/404–323 BCE. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include No surviving writings, Anecdotal tradition. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Diogenes of Sinope. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "Virtue requires radical self-sufficiency and frank speech rather than respectability or possessions. Systematically, the teaching links simplicity, freedom, convention into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to No surviving writings shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "No surviving writings",
      "Anecdotal tradition"
    ],
    "legacy": "His Cynicism provided a lasting model of philosophical dissent and ascetic freedom. Reception history carried Diogenes of Sinope into curricula, religious movements, and public rhetoric far from the original setting of Cynicism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Ovid was a Roman poet whose transformations and erotic elegies reflect on desire, art, and political power. Active within the tradition labeled Roman literature, Ovid worked as a poet whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 43 BCE–17/18 CE. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Metamorphoses, Ars Amatoria, Tristia. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Ovid. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "His mythic narratives make change, unstable identity, and artistic invention central themes. Systematically, the teaching links myth, love, exile into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Metamorphoses shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "works": [
      "Metamorphoses",
      "Ars Amatoria",
      "Tristia"
    ],
    "legacy": "Ovid's stories supplied European art and literature with enduring philosophical images of transformation. Reception history carried Ovid into curricula, religious movements, and public rhetoric far from the original setting of Roman literature. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Siddhartha Gautama, the Buddha, taught a path away from suffering in northern India; precise dates remain uncertain. Active within the tradition labeled Buddhism, The Buddha worked as a religious teacher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at c. 5th–4th century BCE. Exact years remain less certain than for better-documented modern figures, so chronological claims should stay provisional. Major points of entry include Pali Canon tradition, Dhammapada. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with The Buddha. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "The Four Noble Truths diagnose craving and prescribe the Eightfold Path; impermanence and non-self challenge fixed identity. Systematically, the teaching links suffering, impermanence, meditation into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Pali Canon tradition shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Pali Canon tradition",
      "Dhammapada"
    ],
    "legacy": "Buddhist philosophy developed across Asia into diverse traditions of ethics, meditation, logic, and metaphysics. Reception history carried The Buddha into curricula, religious movements, and public rhetoric far from the original setting of Buddhism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans."
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
    "overview": "Horace adapted Greek lyric and philosophical themes for Roman readers under Augustus. Active within the tradition labeled Roman literature, Horace worked as a poet whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 65–8 BCE. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Odes, Satires, Epistles. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Horace. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "His poems commend measured pleasure, friendship, and awareness of time while testing the relation of art to patronage. Systematically, the teaching links ethics, moderation, poetry into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Odes shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Odes",
      "Satires",
      "Epistles"
    ],
    "legacy": "His phrase carpe diem and ideals of poetic balance became staples of European moral culture. Reception history carried Horace into curricula, religious movements, and public rhetoric far from the original setting of Roman literature. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Dante fused scholastic theology, classical philosophy, and Florentine political experience in visionary poetry. Active within the tradition labeled medieval Christian thought, Dante Alighieri worked as a poet and political thinker whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1265–1321. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Divine Comedy, De Monarchia, Convivio. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Dante Alighieri. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "The Divine Comedy orders desire through moral accountability, intellectual illumination, and divine love. Systematically, the teaching links justice, love, theology into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Divine Comedy shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Divine Comedy",
      "De Monarchia",
      "Convivio"
    ],
    "legacy": "His vernacular epic shaped Italian language and Western moral imagination. Reception history carried Dante Alighieri into curricula, religious movements, and public rhetoric far from the original setting of medieval Christian thought. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Spinoza constructed an austere metaphysics and ethics after his exclusion from Amsterdam's Jewish community. Active within the tradition labeled Rationalism, Baruch Spinoza worked as a philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1632–1677. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Ethics, Theological-Political Treatise. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Baruch Spinoza. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "God and Nature are one infinite substance; freedom is understanding necessity and transforming passive emotions into active understanding. Systematically, the teaching links substance, freedom, emotion into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Ethics shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Ethics",
      "Theological-Political Treatise"
    ],
    "legacy": "His naturalism influenced Enlightenment criticism, secularism, psychology, and contemporary metaphysics. Reception history carried Baruch Spinoza into curricula, religious movements, and public rhetoric far from the original setting of Rationalism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Aquinas integrated Aristotelian philosophy with Christian theology in a vast scholastic synthesis. Active within the tradition labeled Scholasticism, Thomas Aquinas worked as a theologian and philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1225–1274. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Summa Theologiae, Summa contra Gentiles. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Thomas Aquinas. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "Reason can know aspects of natural law and God from effects, while revelation completes what reason cannot attain. Systematically, the teaching links natural law, Aristotle, theology into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Summa Theologiae shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Summa Theologiae",
      "Summa contra Gentiles"
    ],
    "legacy": "Thomism remains a major Catholic philosophical tradition and a standard reference in natural-law theory. Reception history carried Thomas Aquinas into curricula, religious movements, and public rhetoric far from the original setting of Scholasticism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Hume examined human understanding through observation of mental habits rather than metaphysical speculation. Active within the tradition labeled Empiricism, David Hume worked as a philosopher and historian whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1711–1776. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include A Treatise of Human Nature, An Enquiry Concerning Human Understanding. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with David Hume. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "Causal necessity is a learned expectation, the self is a bundle of perceptions, and moral approval rests in sentiment. Systematically, the teaching links causation, skepticism, sentiment into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to A Treatise of Human Nature shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "A Treatise of Human Nature",
      "An Enquiry Concerning Human Understanding"
    ],
    "legacy": "His skepticism challenged rationalism and deeply provoked Kant and later analytic philosophy. Reception history carried David Hume into curricula, religious movements, and public rhetoric far from the original setting of Empiricism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Locke linked an empiricist account of mind to a defense of limited government and religious toleration. Active within the tradition labeled Empiricism, John Locke worked as a philosopher and physician whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1632–1704. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Essay Concerning Human Understanding, Two Treatises of Government. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with John Locke. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "Ideas originate in experience; legitimate political authority rests on consent and protects life, liberty, and property. Systematically, the teaching links experience, rights, government into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Essay Concerning Human Understanding shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Essay Concerning Human Understanding",
      "Two Treatises of Government"
    ],
    "legacy": "He shaped Enlightenment epistemology, liberalism, and constitutional thought. Reception history carried John Locke into curricula, religious movements, and public rhetoric far from the original setting of Empiricism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans. Philological and historical research continues to refine attribution, chronology, and emphasis.",
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
    "overview": "Rousseau diagnosed social inequality and dependence within modern civilization while seeking forms of political freedom. Active within the tradition labeled Republicanism, Jean-Jacques Rousseau worked as a philosopher and writer whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1712–1778. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include The Social Contract, Emile, Discourse on Inequality. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Jean-Jacques Rousseau. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "The social contract makes citizens authors of law through the general will; education should protect natural development. Systematically, the teaching links freedom, inequality, education into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to The Social Contract shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "The Social Contract",
      "Emile",
      "Discourse on Inequality"
    ],
    "legacy": "He influenced democratic republicanism, Romanticism, education, and revolutionary politics. Reception history carried Jean-Jacques Rousseau into curricula, religious movements, and public rhetoric far from the original setting of Republicanism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans. Philological and historical research continues to refine attribution, chronology, and emphasis.",
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
    "overview": "Beauvoir extended existentialism into a landmark analysis of women's social and symbolic subordination. Active within the tradition labeled existentialism and feminism, Simone de Beauvoir worked as a philosopher and writer whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1908–1986. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include The Second Sex, The Ethics of Ambiguity. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Simone de Beauvoir. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "One becomes woman through social formation; ethical freedom requires willing oneself and others as free in concrete situations. Systematically, the teaching links gender, freedom, ethics into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to The Second Sex shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "The Second Sex",
      "The Ethics of Ambiguity"
    ],
    "legacy": "She founded modern feminist philosophy and remains central to gender theory. Reception history carried Simone de Beauvoir into curricula, religious movements, and public rhetoric far from the original setting of existentialism and feminism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Sartre argued that human beings are radically free yet embedded in social conflict and historical circumstances. Active within the tradition labeled existentialism, Jean-Paul Sartre worked as a philosopher and writer whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1905–1980. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Being and Nothingness, Existentialism Is a Humanism, Critique of Dialectical Reason. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Jean-Paul Sartre. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "Existence precedes essence; bad faith evades responsibility by treating oneself as a fixed object. Systematically, the teaching links freedom, consciousness, responsibility into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Being and Nothingness shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Being and Nothingness",
      "Existentialism Is a Humanism",
      "Critique of Dialectical Reason"
    ],
    "legacy": "He made existentialism a global cultural force and linked philosophy to political commitment. Reception history carried Jean-Paul Sartre into curricula, religious movements, and public rhetoric far from the original setting of existentialism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Schopenhauer combined Kant, Plato, and Indian thought into a philosophy centered on blind striving and suffering. Active within the tradition labeled pessimism, Arthur Schopenhauer worked as a philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1788–1860. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include The World as Will and Representation. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Arthur Schopenhauer. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "The world as representation is driven by an insatiable will; art, compassion, and ascetic denial offer partial release. Systematically, the teaching links will, suffering, art into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to The World as Will and Representation shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "The World as Will and Representation"
    ],
    "legacy": "He influenced Nietzsche, psychoanalysis, aesthetics, and philosophical pessimism. Reception history carried Arthur Schopenhauer into curricula, religious movements, and public rhetoric far from the original setting of pessimism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans. Philological and historical research continues to refine attribution, chronology, and emphasis.",
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
    "overview": "Kierkegaard used pseudonyms and indirect communication to examine subjective commitment, despair, and Christian faith. Active within the tradition labeled Christian existentialism, Søren Kierkegaard worked as a philosopher and writer whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1813–1855. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Either/Or, Fear and Trembling, The Sickness Unto Death. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Søren Kierkegaard. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "Truth in existential matters concerns appropriation; anxiety reveals possibility, and faith cannot be reduced to objective proof. Systematically, the teaching links faith, anxiety, individual into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Either/Or shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Either/Or",
      "Fear and Trembling",
      "The Sickness Unto Death"
    ],
    "legacy": "He is a foundational voice for existentialism and modern theology. Reception history carried Søren Kierkegaard into curricula, religious movements, and public rhetoric far from the original setting of Christian existentialism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Pascal made major mathematical discoveries while writing a searching defense of Christian commitment and a critique of distraction. Active within the tradition labeled Christian philosophy, Blaise Pascal worked as a mathematician and religious writer whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1623–1662. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Pensées, Provincial Letters. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Blaise Pascal. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "Human greatness and misery reveal a divided condition; practical reason may wager where demonstrative certainty is unavailable. Systematically, the teaching links faith, reason, probability into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Pensées shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Pensées",
      "Provincial Letters"
    ],
    "legacy": "His reflections endure in philosophy of religion, decision theory, and literary moral psychology. Reception history carried Blaise Pascal into curricula, religious movements, and public rhetoric far from the original setting of Christian philosophy. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Hobbes explained political authority from the need to escape violent insecurity among roughly equal individuals. Active within the tradition labeled social contract theory, Thomas Hobbes worked as a philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1588–1679. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Leviathan, De Cive. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Thomas Hobbes. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "In the state of nature conflict is likely; covenant authorizes a sovereign to secure peace, while thought is bodily motion. Systematically, the teaching links sovereignty, security, materialism into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Leviathan shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Leviathan",
      "De Cive"
    ],
    "legacy": "He remains central to political obligation, sovereignty, and materialist philosophy. Reception history carried Thomas Hobbes into curricula, religious movements, and public rhetoric far from the original setting of social contract theory. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Voltaire used satire, history, and public campaigns to oppose fanaticism, judicial cruelty, and censorship. Active within the tradition labeled Enlightenment, Voltaire worked as a writer and philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1694–1778. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Candide, Philosophical Letters, Treatise on Tolerance. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Voltaire. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "He favored civil toleration, critical reason, and reform while distrusting metaphysical optimism and clerical authority. Systematically, the teaching links toleration, reason, satire into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Candide shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Candide",
      "Philosophical Letters",
      "Treatise on Tolerance"
    ],
    "legacy": "He became an emblem of Enlightenment criticism and free expression. Reception history carried Voltaire into curricula, religious movements, and public rhetoric far from the original setting of Enlightenment. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans. Philological and historical research continues to refine attribution, chronology, and emphasis.",
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
    "overview": "Emerson led American Transcendentalism through essays and lectures that made nature and intuition sources of spiritual insight. Active within the tradition labeled Transcendentalism, Ralph Waldo Emerson worked as a essayist and lecturer whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1803–1882. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Nature, Self-Reliance, The American Scholar. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Ralph Waldo Emerson. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "Self-reliance asks individuals to resist conformity and trust their active relation to the universal. Systematically, the teaching links self-reliance, nature, individuality into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Nature shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Nature",
      "Self-Reliance",
      "The American Scholar"
    ],
    "legacy": "He shaped American literary culture, pragmatism, and ideals of individual expression. Reception history carried Ralph Waldo Emerson into curricula, religious movements, and public rhetoric far from the original setting of Transcendentalism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Thoreau experimented with simple living at Walden and refused to support a government implicated in slavery and war. Active within the tradition labeled Transcendentalism, Henry David Thoreau worked as a writer and naturalist whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1817–1862. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Walden, Civil Disobedience. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Henry David Thoreau. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "Conscience can require noncooperation with injustice; close attention to nature corrects commercial and political distraction. Systematically, the teaching links civil disobedience, nature, simplicity into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Walden shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Walden",
      "Civil Disobedience"
    ],
    "legacy": "He influenced environmentalism, nonviolent resistance, and American nature writing. Reception history carried Henry David Thoreau into curricula, religious movements, and public rhetoric far from the original setting of Transcendentalism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "James connected psychology, religious experience, and pragmatic accounts of belief in a pluralistic philosophy. Active within the tradition labeled Pragmatism, William James worked as a psychologist and philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1842–1910. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include The Principles of Psychology, Pragmatism, The Varieties of Religious Experience. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with William James. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "Truth is tested in experience and consequences; temperament and lived options matter where evidence cannot compel choice. Systematically, the teaching links experience, truth, religion into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to The Principles of Psychology shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "The Principles of Psychology",
      "Pragmatism",
      "The Varieties of Religious Experience"
    ],
    "legacy": "He shaped psychology, pragmatism, and philosophy of religion. Reception history carried William James into curricula, religious movements, and public rhetoric far from the original setting of Pragmatism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans. Philological and historical research continues to refine attribution, chronology, and emphasis.",
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
    "overview": "Whitehead moved from mathematical logic to a metaphysics designed to accommodate creativity, events, and modern physics. Active within the tradition labeled process philosophy, Alfred North Whitehead worked as a mathematician and philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1861–1947. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Principia Mathematica, Process and Reality. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Alfred North Whitehead. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "Reality is composed of occasions of experience rather than static substances; becoming is fundamental. Systematically, the teaching links process, science, metaphysics into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Principia Mathematica shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Principia Mathematica",
      "Process and Reality"
    ],
    "legacy": "Process thought influenced theology, ecology, education, and metaphysics. Reception history carried Alfred North Whitehead into curricula, religious movements, and public rhetoric far from the original setting of process philosophy. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Augustine fused Christian doctrine with Platonist introspection in works on memory, time, evil, and political community. Active within the tradition labeled Christian Platonism, Augustine of Hippo worked as a bishop and theologian whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 354–430. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Confessions, City of God, On the Trinity. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Augustine of Hippo. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "Evil is privation rather than substance; restless will needs grace, and earthly politics cannot be confused with ultimate salvation. Systematically, the teaching links time, will, grace into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Confessions shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Confessions",
      "City of God",
      "On the Trinity"
    ],
    "legacy": "He shaped Western theology, philosophy of mind, and political thought for centuries. Reception history carried Augustine of Hippo into curricula, religious movements, and public rhetoric far from the original setting of Christian Platonism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Boethius wrote philosophy while imprisoned amid the collapse of Roman political order in Italy. Active within the tradition labeled late antique Platonism, Boethius worked as a statesman and philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at c. 480–524/525. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include The Consolation of Philosophy, Logical commentaries. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Boethius. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "The Consolation contrasts unstable fortune with the good of wisdom and explores divine foreknowledge and human freedom. Systematically, the teaching links fortune, providence, logic into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to The Consolation of Philosophy shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "The Consolation of Philosophy",
      "Logical commentaries"
    ],
    "legacy": "His work transmitted ancient logic and moral philosophy to medieval Europe. Reception history carried Boethius into curricula, religious movements, and public rhetoric far from the original setting of late antique Platonism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Cicero translated Greek philosophical debates into Latin while defending the Roman republic during its final crises. Active within the tradition labeled Roman eclecticism, Cicero worked as a statesman, orator, and philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 106–43 BCE. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include On Duties, On the Republic, Tusculan Disputations. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Cicero. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "He developed natural-law and duty-based arguments through Academic skepticism and Stoic moral ideas. Systematically, the teaching links republic, law, duty into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to On Duties shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "On Duties",
      "On the Republic",
      "Tusculan Disputations"
    ],
    "legacy": "His prose and political ideals profoundly influenced Renaissance humanism and republicanism. Reception history carried Cicero into curricula, religious movements, and public rhetoric far from the original setting of Roman eclecticism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Heraclitus offered compressed fragments on nature, conflict, and the shared logos ordering an unstable world. 540–c. Active within the tradition labeled Presocratic philosophy, Heraclitus worked as a philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at c. 540–c. 480 BCE. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Fragments. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Heraclitus. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "Change is fundamental, and opposites belong together in a dynamic order grasped by understanding. Systematically, the teaching links change, logos, opposites into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Fragments shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Fragments"
    ],
    "legacy": "His thought became a lasting source for dialectical and process conceptions of reality. Reception history carried Heraclitus into curricula, religious movements, and public rhetoric far from the original setting of Presocratic philosophy. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Epicurus taught in the Garden that philosophy should free people from fear of gods, death, and pain. Active within the tradition labeled Epicureanism, Epicurus worked as a philosopher and school founder whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 341–270 BCE. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Letter to Menoeceus, Principal Doctrines. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Epicurus. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "Pleasure is tranquil freedom from bodily distress and mental disturbance, achieved through modest desires, friendship, and atomist understanding. Systematically, the teaching links pleasure, atoms, friendship into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Letter to Menoeceus shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Letter to Menoeceus",
      "Principal Doctrines"
    ],
    "legacy": "Epicureanism offered a durable materialist ethics of happiness and peace of mind. Reception history carried Epicurus into curricula, religious movements, and public rhetoric far from the original setting of Epicureanism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Lucretius presented Epicurean atomism in Latin verse to liberate readers from fear and superstition. 99–c. Active within the tradition labeled Epicureanism, Lucretius worked as a poet and philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at c. 99–c. 55 BCE. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include On the Nature of Things. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Lucretius. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "Nature works through atoms and void without divine intervention; understanding mortality permits calmer, more humane life. Systematically, the teaching links atoms, mortality, nature into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to On the Nature of Things shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "On the Nature of Things"
    ],
    "legacy": "His rediscovery helped nourish Renaissance naturalism and modern scientific materialism. Reception history carried Lucretius into curricula, religious movements, and public rhetoric far from the original setting of Epicureanism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans. Philological and historical research continues to refine attribution, chronology, and emphasis.",
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
    "overview": "Xunzi defended a rigorous Confucian program of education and ritual amid Warring States intellectual competition. 310–c. Active within the tradition labeled Confucianism, Xunzi worked as a teacher and political thinker whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at c. 310–c. 235 BCE. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Xunzi. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Xunzi. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "Human tendencies are unruly without cultivation; ritual, teachers, and institutions transform them into moral order. Systematically, the teaching links ritual, human nature, education into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Xunzi shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Xunzi"
    ],
    "legacy": "His institutional and educational Confucianism influenced Han political thought. Reception history carried Xunzi into curricula, religious movements, and public rhetoric far from the original setting of Confucianism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans. Philological and historical research continues to refine attribution, chronology, and emphasis.",
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
    "overview": "Wang Yangming developed a mind-centered Neo-Confucianism while serving as an official and military commander. Active within the tradition labeled Neo-Confucianism, Wang Yangming worked as a official and philosopher whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1472–1529. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Instructions for Practical Living, Records of Wang Yangming. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Wang Yangming. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Comparative reading across languages further clarifies what is distinctive in the arguments.",
    "ideas": "Principle is present in mind; genuine knowledge is inseparable from action, and moral insight requires removing selfish obstruction. Systematically, the teaching links mind, knowledge, action into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Instructions for Practical Living shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Instructions for Practical Living",
      "Records of Wang Yangming"
    ],
    "legacy": "His teachings spread across East Asia and challenged Zhu Xi's emphasis on external investigation. Reception history carried Wang Yangming into curricula, religious movements, and public rhetoric far from the original setting of Neo-Confucianism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Zhu Xi synthesized Song Confucian traditions into a curriculum and metaphysics that became orthodox for centuries. Active within the tradition labeled Neo-Confucianism, Zhu Xi worked as a philosopher and educator whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1130–1200. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include Four Books commentaries, Reflections on Things at Hand. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Zhu Xi. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "Principle (li) patterns things through qi; investigation of things and disciplined self-cultivation clarify moral understanding. Systematically, the teaching links principle, qi, learning into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to Four Books commentaries shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "Four Books commentaries",
      "Reflections on Things at Hand"
    ],
    "legacy": "His interpretations structured civil-service education in China and influenced Korea and Japan. Reception history carried Zhu Xi into curricula, religious movements, and public rhetoric far from the original setting of Neo-Confucianism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
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
    "overview": "Hu Shi studied with John Dewey and promoted vernacular writing, experimental inquiry, and intellectual reform in modern China. Active within the tradition labeled Chinese pragmatism, Hu Shi worked as a philosopher and public intellectual whose influence depends on both teaching and textual transmission. Handbook consensus places the life span at 1891–1962. Where day-level dates are known, they are recorded in the accompanying birth and death fields. Major points of entry include The Chinese Renaissance, The Development of the Logical Method in Ancient China. Interpreters still argue about emphasis, authenticity of particular passages, and how far later disciples reshaped the voice associated with Hu Shi. The summary follows mainstream reference works rather than sectarian hagiography or purely literary mythmaking. Philological and historical research continues to refine attribution, chronology, and emphasis.",
    "ideas": "He opposed dogma in favor of bold hypotheses and careful verification, applying pragmatism to culture and politics. Systematically, the teaching links pragmatism, language, reform into a practical and theoretical whole. Rather than offering isolated maxims, the arguments specify what counts as knowledge, virtue, or legitimate order and what failures of judgment produce social or spiritual harm. Method matters: dialectic, meditation, demonstration, genealogy, or historical analysis—each school privileges different tools for correcting opinion. Close attention to The Chinese Renaissance shows how definitions, examples, and counterarguments carry the doctrine. Later schools often radicalized one strand while soft-pedaling another; reconstructing the original balance requires reading across genres and against later orthodoxy. The ideas remain philosophically live because they still organize disputes about freedom, authority, nature, and the good life.",
    "works": [
      "The Chinese Renaissance",
      "The Development of the Logical Method in Ancient China"
    ],
    "legacy": "He was a leading voice of the May Fourth intellectual movement. Reception history carried Hu Shi into curricula, religious movements, and public rhetoric far from the original setting of Chinese pragmatism. Modern scholarship both demythologizes and renews interest, separating usable arguments from legend. For a quotes-oriented readership, the durable value lies in precise problems and formulations that resist reduction to motivational slogans.",
    "birthDate": "1891",
    "deathDate": "1962"
  }
};
