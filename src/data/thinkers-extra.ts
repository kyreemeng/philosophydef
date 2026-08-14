import type { ThinkerGuide } from "./enrichment";

/** Additional thinker biographies merged into enrichment at runtime. */
export const extraThinkerGuides: Record<string, ThinkerGuide> = {
  "Albert Camus": {
    lifespan: "1913–1960",
    school: "Absurdism / existential literature",
    birthDate: "1913-11-07",
    deathDate: "1960-01-04",
    jobTitle: "Writer and philosopher",
    knowsAbout: ["absurd", "revolt", "freedom", "ethics", "meaning"],
    overview:
      "Albert Camus (1913–1960) was a French-Algerian writer and thinker associated with the absurd: the tension between the human demand for meaning and a world that does not supply it. He received the Nobel Prize in Literature in 1957 and rejected being labeled an existentialist in the Sartrean sense, while remaining central to twentieth-century debates about revolt, justice, and lucid living without appeal to transcendence.",
    ideas:
      "In The Myth of Sisyphus, Camus asks whether life is worth living once the absurd is recognized, and answers with lucidity and revolt rather than leap of faith or suicide. Later political writings, including The Rebel, examine violence, solidarity, and limits. His fiction dramatizes moral clarity under occupation, plague, and indifference.",
    works: ["The Myth of Sisyphus", "The Stranger", "The Plague", "The Rebel"],
    legacy:
      "Camus remains widely read for accessible treatments of meaning, resistance, and ethical limit. His essays continue to shape public philosophy beyond academic specialization.",
  },
  "Augustine of Hippo": {
    lifespan: "354–430",
    school: "Christian philosophy / Patristics",
    birthDate: "0354-11-13",
    deathDate: "0430-08-28",
    jobTitle: "Bishop and theologian",
    knowsAbout: ["God", "will", "time", "evil", "confession"],
    overview:
      "Augustine of Hippo (354–430) was a North African bishop whose works shaped Latin Christian theology and Western philosophy of will, time, and history. Trained in rhetoric and influenced by Neoplatonism, he wrote Confessions, City of God, and extensive biblical commentary.",
    ideas:
      "Augustine analyzes memory, time, and inwardness; develops accounts of grace, original sin, and ordered love (ordo amoris); and frames history as a drama of two cities. His reflections on will and evil remain points of reference for medieval and modern philosophy.",
    works: ["Confessions", "City of God", "On Free Choice of the Will", "On the Trinity"],
    legacy:
      "Augustine is a bridge between classical antiquity and medieval thought, continuously reread in philosophy of religion, political theology, and theories of the self.",
  },
  "Baruch Spinoza": {
    lifespan: "1632–1677",
    school: "Rationalism",
    birthDate: "1632-11-24",
    deathDate: "1677-02-21",
    jobTitle: "Philosopher",
    knowsAbout: ["substance", "God", "freedom", "ethics", "politics"],
    overview:
      "Baruch Spinoza (1632–1677) was a Dutch philosopher of Portuguese-Jewish background whose Ethics presents a rigorous geometric system identifying God with Nature. Excommunicated from his community and cautious in publication, he became a central figure of early modern rationalism and radical Enlightenment.",
    ideas:
      "Spinoza’s monism treats mind and body as attributes of one substance. Freedom is understanding necessity rather than uncaused will. His political writings defend free philosophizing and analyze religion’s civic effects.",
    works: ["Ethics", "Theological-Political Treatise", "Political Treatise"],
    legacy:
      "Spinoza influences German Idealism, Marxism, psychoanalysis, and contemporary metaphysics and political theory. He remains a touchstone for debates about determinism and secular ethics.",
  },
  "Thomas Aquinas": {
    lifespan: "1225–1274",
    school: "Scholasticism",
    birthDate: "1225",
    deathDate: "1274-03-07",
    jobTitle: "Theologian and philosopher",
    knowsAbout: ["natural law", "God", "virtue", "metaphysics", "faith and reason"],
    overview:
      "Thomas Aquinas (c. 1225–1274) synthesized Aristotelian philosophy with Christian theology in works that defined much of later Catholic intellectual tradition. A Dominican friar, he wrote the Summa Theologiae and extensive commentaries on Aristotle.",
    ideas:
      "Aquinas distinguishes faith and reason while arguing they can harmonize; develops natural-law ethics; and offers classic arguments concerning God’s existence, analogy, and the virtues. Human flourishing is ordered to both natural and supernatural ends.",
    works: ["Summa Theologiae", "Summa Contra Gentiles", "Commentaries on Aristotle"],
    legacy:
      "Thomism shaped medieval universities and remains active in ethics, metaphysics, and philosophy of religion.",
  },
  "David Hume": {
    lifespan: "1711–1776",
    school: "Empiricism / Scottish Enlightenment",
    birthDate: "1711-05-07",
    deathDate: "1776-08-25",
    jobTitle: "Philosopher and historian",
    knowsAbout: ["empiricism", "causation", "skepticism", "morality", "religion"],
    overview:
      "David Hume (1711–1776) was a leading figure of the Scottish Enlightenment whose empiricism and skeptical arguments transformed epistemology, philosophy of religion, and moral psychology.",
    ideas:
      "Hume argues that ideas derive from impressions; causation is habit-based rather than necessary connection perceived in objects; and reason is often the slave of the passions in motivation. His Dialogues Concerning Natural Religion scrutinize design arguments.",
    works: [
      "A Treatise of Human Nature",
      "An Enquiry Concerning Human Understanding",
      "An Enquiry Concerning the Principles of Morals",
      "Dialogues Concerning Natural Religion",
    ],
    legacy:
      "Kant credited Hume with waking him from dogmatic slumber. Hume remains central to empiricism, cognitive science of religion, and naturalistic ethics.",
  },
  "John Locke": {
    lifespan: "1632–1704",
    school: "Empiricism / political liberalism",
    birthDate: "1632-08-29",
    deathDate: "1704-10-28",
    jobTitle: "Philosopher",
    knowsAbout: ["knowledge", "tolerance", "property", "government", "identity"],
    overview:
      "John Locke (1632–1704) was an English philosopher whose empiricism and political theory helped define modern liberalism. His Essay Concerning Human Understanding and Two Treatises of Government remain foundational.",
    ideas:
      "Locke rejects innate ideas, grounds knowledge in experience, and develops accounts of personal identity, property, consent, and limited government. Toleration and natural rights structure his political thought.",
    works: [
      "An Essay Concerning Human Understanding",
      "Two Treatises of Government",
      "A Letter Concerning Toleration",
    ],
    legacy:
      "Locke influenced the American founding, empiricist epistemology, and debates about rights, education, and religious freedom.",
  },
  "Jean-Jacques Rousseau": {
    lifespan: "1712–1778",
    school: "Enlightenment / political philosophy",
    birthDate: "1712-06-28",
    deathDate: "1778-07-02",
    jobTitle: "Philosopher and writer",
    knowsAbout: ["freedom", "general will", "education", "inequality", "nature"],
    overview:
      "Jean-Jacques Rousseau (1712–1778) was a Genevan writer whose critiques of inequality, theories of the social contract, and educational ideas reshaped modern political and moral thought.",
    ideas:
      "Rousseau argues that social inequality is largely artificial; legitimate politics expresses the general will; and education should protect natural development (Émile). Amour-propre and authenticity are recurring concerns.",
    works: ["Discourse on Inequality", "The Social Contract", "Émile", "Confessions"],
    legacy:
      "Rousseau influenced the French Revolution, Romanticism, democratic theory, and philosophy of education—often in conflicting directions.",
  },
  "Jean-Paul Sartre": {
    lifespan: "1905–1980",
    school: "Existentialism",
    birthDate: "1905-06-21",
    deathDate: "1980-04-15",
    jobTitle: "Philosopher and writer",
    knowsAbout: ["freedom", "bad faith", "existence", "responsibility", "phenomenology"],
    overview:
      "Jean-Paul Sartre (1905–1980) was the leading public face of French existentialism. Being and Nothingness and his essays popularized the claim that existence precedes essence for human beings.",
    ideas:
      "Sartre analyzes consciousness as nothingness, freedom as inescapable, and bad faith as flight from responsibility. Later work engages Marxism and collective praxis. Literature and philosophy are intertwined in his project.",
    works: ["Being and Nothingness", "Existentialism Is a Humanism", "Critique of Dialectical Reason", "Nausea"],
    legacy:
      "Sartre shaped postwar European culture, feminism’s dialogue with existentialism, and popular understandings of authenticity and commitment.",
  },
  "Simone de Beauvoir": {
    lifespan: "1908–1986",
    school: "Existentialism / feminist philosophy",
    birthDate: "1908-01-09",
    deathDate: "1986-04-14",
    jobTitle: "Philosopher and writer",
    knowsAbout: ["freedom", "gender", "ethics", "ambiguity", "oppression"],
    overview:
      "Simone de Beauvoir (1908–1986) developed existential ethics and a foundational analysis of women’s oppression in The Second Sex, becoming a central figure in feminist philosophy.",
    ideas:
      "Beauvoir examines ambiguity, reciprocity, and the making of woman as Other. Freedom is situated and historically constrained; ethics requires recognizing others as free subjects rather than objects.",
    works: ["The Second Sex", "The Ethics of Ambiguity", "Memoirs of a Dutiful Daughter"],
    legacy:
      "Beauvoir remains essential for feminist theory, existential ethics, and critiques of gendered social roles.",
  },
  "Søren Kierkegaard": {
    lifespan: "1813–1855",
    school: "Existential philosophy",
    birthDate: "1813-05-05",
    deathDate: "1855-11-11",
    jobTitle: "Philosopher and theologian",
    knowsAbout: ["faith", "anxiety", "self", "existence", "choice"],
    overview:
      "Søren Kierkegaard (1813–1855) was a Danish philosopher and Christian thinker whose pseudonymous works pioneered existential analyses of anxiety, despair, and subjective truth.",
    ideas:
      "Kierkegaard contrasts aesthetic, ethical, and religious stages of life; analyzes the leap of faith; and insists that existence cannot be reduced to a system. Anxiety and despair disclose the structure of the self before God.",
    works: [
      "Fear and Trembling",
      "Either/Or",
      "The Sickness unto Death",
      "Philosophical Fragments",
    ],
    legacy:
      "Kierkegaard influenced existentialism, Protestant theology, psychology, and literary modernism.",
  },
  "Arthur Schopenhauer": {
    lifespan: "1788–1860",
    school: "Post-Kantian philosophy",
    birthDate: "1788-02-22",
    deathDate: "1860-09-21",
    jobTitle: "Philosopher",
    knowsAbout: ["will", "representation", "aesthetics", "compassion", "pessimism"],
    overview:
      "Arthur Schopenhauer (1788–1860) developed a metaphysics of will that reinterpreted Kant and influenced later pessimism, aesthetics, and psychology.",
    ideas:
      "The world is will and representation: phenomenal order is representation, while underlying reality is blind striving will. Art, especially music, and compassion offer temporary relief from willing. Ascetic denial is an ethical ideal in his system.",
    works: [
      "The World as Will and Representation",
      "On the Fourfold Root of the Principle of Sufficient Reason",
      "Essays and Aphorisms",
    ],
    legacy:
      "Schopenhauer influenced Nietzsche, Freud, Wagner, and modernist literature, remaining a key source for philosophies of desire and suffering.",
  },
  "Blaise Pascal": {
    lifespan: "1623–1662",
    school: "Early modern philosophy / Jansenism",
    birthDate: "1623-06-19",
    deathDate: "1662-08-19",
    jobTitle: "Mathematician and philosopher",
    knowsAbout: ["faith", "reason", "wager", "human condition", "science"],
    overview:
      "Blaise Pascal (1623–1662) was a French mathematician, physicist, and religious thinker whose Pensées explores the greatness and misery of the human condition.",
    ideas:
      "Pascal analyzes diversion, boredom, and the limits of reason before questions of God. The wager frames belief under uncertainty. He distinguishes the spirit of geometry from the spirit of finesse.",
    works: ["Pensées", "Provincial Letters", "scientific treatises on probability and fluids"],
    legacy:
      "Pascal remains central to philosophy of religion, probability, and literary reflections on finitude.",
  },
  "Thomas Hobbes": {
    lifespan: "1588–1679",
    school: "Political philosophy / materialism",
    birthDate: "1588-04-05",
    deathDate: "1679-12-04",
    jobTitle: "Philosopher",
    knowsAbout: ["sovereignty", "social contract", "fear", "nature", "authority"],
    overview:
      "Thomas Hobbes (1588–1679) authored Leviathan, a foundational work of modern political philosophy arguing for strong sovereignty as the exit from a warlike state of nature.",
    ideas:
      "Hobbes presents humans as matter in motion, driven by appetite and aversion. Without common power, life is insecure; covenant creates the sovereign. Law and obligation depend on effective authority.",
    works: ["Leviathan", "De Cive", "Elements of Law"],
    legacy:
      "Hobbes frames later social-contract theory, realism in politics, and debates about absolute versus limited government.",
  },
  Voltaire: {
    lifespan: "1694–1778",
    school: "Enlightenment",
    birthDate: "1694-11-21",
    deathDate: "1778-05-30",
    jobTitle: "Writer and philosopher",
    knowsAbout: ["toleration", "critique", "reason", "religion", "freedom"],
    overview:
      "Voltaire (François-Marie Arouet, 1694–1778) was the emblematic public intellectual of the French Enlightenment, championing toleration, criticism of fanaticism, and literary satire.",
    ideas:
      "Across essays, histories, and Candide, Voltaire attacks superstition and cruelty while defending commerce, science, and limited religious freedom. Philosophical optimism is a frequent target of his irony.",
    works: ["Candide", "Philosophical Dictionary", "Treatise on Tolerance", "Letters on the English"],
    legacy:
      "Voltaire remains a symbol of critical Enlightenment culture and secular advocacy against persecution.",
  },
  "Ralph Waldo Emerson": {
    lifespan: "1803–1882",
    school: "Transcendentalism",
    birthDate: "1803-05-25",
    deathDate: "1882-04-27",
    jobTitle: "Essayist and philosopher",
    knowsAbout: ["self-reliance", "nature", "individualism", "intuition", "America"],
    overview:
      "Ralph Waldo Emerson (1803–1882) led American Transcendentalism, writing essays that link nature, self-trust, and spiritual independence.",
    ideas:
      "Emerson urges self-reliance against conformity, reads nature as symbol and resource, and treats the individual mind as continuous with a wider Over-Soul. His lectures helped define a distinctively American philosophical voice.",
    works: ["Nature", "Self-Reliance", "The American Scholar", "Essays: First and Second Series"],
    legacy:
      "Emerson shaped Thoreau, pragmatism’s climate, and American ideals of individuality and spiritual democracy.",
  },
  "Henry David Thoreau": {
    lifespan: "1817–1862",
    school: "Transcendentalism",
    birthDate: "1817-07-12",
    deathDate: "1862-05-06",
    jobTitle: "Writer and philosopher",
    knowsAbout: ["nature", "civil disobedience", "simplicity", "conscience", "freedom"],
    overview:
      "Henry David Thoreau (1817–1862) practiced and wrote a philosophy of deliberate living, most famously in Walden and the essay on civil disobedience.",
    ideas:
      "Thoreau experiments with simplicity at Walden Pond, criticizes unjust government, and links conscience to political refusal. Nature is both material setting and moral teacher.",
    works: ["Walden", "Civil Disobedience", "A Week on the Concord and Merrimack Rivers"],
    legacy:
      "Thoreau influenced environmental thought, nonviolent resistance, and critiques of consumer culture.",
  },
  "William James": {
    lifespan: "1842–1910",
    school: "Pragmatism",
    birthDate: "1842-01-11",
    deathDate: "1910-08-26",
    jobTitle: "Philosopher and psychologist",
    knowsAbout: ["pragmatism", "experience", "religion", "truth", "psychology"],
    overview:
      "William James (1842–1910) was a founder of American pragmatism and a pioneer of psychology, writing on truth, belief, and religious experience.",
    ideas:
      "James treats truth as what works in experience under inquiry, analyzes the will to believe, and maps varieties of religious experience. Consciousness is a stream; pluralism resists monistic closure.",
    works: [
      "The Principles of Psychology",
      "Pragmatism",
      "The Varieties of Religious Experience",
      "The Will to Believe",
    ],
    legacy:
      "James remains central to pragmatism, psychology of religion, and philosophies of pluralism and radical empiricism.",
  },
  "John Stuart Mill": {
    lifespan: "1806–1873",
    school: "Utilitarianism / liberalism",
    birthDate: "1806-05-20",
    deathDate: "1873-05-08",
    jobTitle: "Philosopher and political economist",
    knowsAbout: ["liberty", "utilitarianism", "individuality", "feminism", "democracy"],
    overview:
      "John Stuart Mill (1806–1873) refined utilitarianism and authored On Liberty, a classic defense of individuality against social and political tyranny.",
    ideas:
      "Mill’s harm principle limits interference with liberty; higher and lower pleasures revise Benthamite calculation; and The Subjection of Women argues for equality. Representative government and free discussion are institutional ideals.",
    works: ["On Liberty", "Utilitarianism", "The Subjection of Women", "Considerations on Representative Government"],
    legacy:
      "Mill remains a primary reference for liberal democracy, free speech, and utilitarian ethics.",
  },
  Epicurus: {
    lifespan: "341–270 BCE",
    school: "Epicureanism",
    birthDate: "-0341",
    deathDate: "-0270",
    jobTitle: "Philosopher",
    knowsAbout: ["pleasure", "atomism", "death", "friendship", "ataraxia"],
    overview:
      "Epicurus (341–270 BCE) founded a school teaching that the good life is freedom from disturbance (ataraxia) through moderated pleasure, friendship, and naturalistic physics.",
    ideas:
      "Epicurean atomism undercuts fear of divine punishment and of death. Pleasure is the absence of pain rightly understood, not endless luxury. Friendship is among life’s greatest goods.",
    works: ["Letter to Menoeceus", "Principal Doctrines", "Vatican Sayings (fragments)"],
    legacy:
      "Epicureanism rivaled Stoicism in antiquity and resurfaces in modern secular ethics and therapies of desire.",
  },
  Lucretius: {
    lifespan: "c. 99–c. 55 BCE",
    school: "Epicureanism",
    birthDate: "-0099",
    deathDate: "-0055",
    jobTitle: "Poet-philosopher",
    knowsAbout: ["atomism", "nature", "death", "religion", "science"],
    overview:
      "Titus Lucretius Carus (c. 99–c. 55 BCE) composed De Rerum Natura, the great Latin poem transmitting Epicurean physics and ethics.",
    ideas:
      "Lucretius explains the world by atoms and void, attacks superstitious fear, and consoles readers about death as the end of sensation. Poetry serves philosophical therapy.",
    works: ["On the Nature of Things (De Rerum Natura)"],
    legacy:
      "Lucretius shaped Renaissance science and remains a classic of philosophical poetry.",
  },
  Heraclitus: {
    lifespan: "fl. c. 500 BCE",
    school: "Presocratic philosophy",
    jobTitle: "Philosopher",
    knowsAbout: ["change", "logos", "fire", "opposites", "flux"],
    overview:
      "Heraclitus of Ephesus (flourished c. 500 BCE) is known through fragments emphasizing flux, the unity of opposites, and a cosmic logos.",
    ideas:
      "The world is an ever-living fire ordered by logos. Conflict and measure structure change. Obscurity of style matches the difficulty of grasping a reality always in motion.",
    works: ["Fragments (quoted by later authors)"],
    legacy:
      "Heraclitus influences Plato, Stoicism, Hegel, and modern philosophies of process and language.",
  },
  Cicero: {
    lifespan: "106–43 BCE",
    school: "Roman philosophy / Academic skepticism",
    birthDate: "-0106",
    deathDate: "-0043",
    jobTitle: "Statesman and philosopher",
    knowsAbout: ["rhetoric", "duty", "republic", "law", "ethics"],
    overview:
      "Marcus Tullius Cicero (106–43 BCE) transmitted Greek philosophy into Latin and wrote major works on duty, the republic, and the ends of good and evil.",
    ideas:
      "Cicero mediates Stoic, Academic, and Peripatetic debates for Roman audiences, emphasizing natural law, civic virtue, and the orator’s ethical responsibility.",
    works: ["On Duties", "On the Republic", "On the Laws", "Tusculan Disputations"],
    legacy:
      "Cicero shaped Renaissance humanism, republican political language, and European legal thought.",
  },
  Boethius: {
    lifespan: "c. 480–524",
    school: "Late antique philosophy",
    birthDate: "0480",
    deathDate: "0524",
    jobTitle: "Philosopher and statesman",
    knowsAbout: ["fortune", "consolation", "God", "music", "logic"],
    overview:
      "Anicius Manlius Severinus Boethius (c. 480–524) wrote The Consolation of Philosophy while imprisoned, becoming a bridge between classical and medieval learning.",
    ideas:
      "Lady Philosophy consoles Boethius about fortune, happiness, and providence. His translations and commentaries preserved Aristotelian logic for the Latin Middle Ages.",
    works: ["The Consolation of Philosophy", "logical translations and commentaries"],
    legacy:
      "Boethius was among the most copied authors of the Middle Ages and remains a classic of philosophical consolation literature.",
  },
  Xunzi: {
    lifespan: "c. 310–c. 235 BCE",
    school: "Confucianism",
    birthDate: "-0310",
    deathDate: "-0235",
    jobTitle: "Philosopher",
    knowsAbout: ["human nature", "ritual", "education", "governance", "language"],
    overview:
      "Xunzi (c. 310–c. 235 BCE) was a major Confucian thinker who argued that human nature tends toward disorder and requires ritual, law, and education to become good.",
    ideas:
      "Against Mencius’s optimism about innate goodness, Xunzi stresses artificial cultivation through li (ritual) and clear distinctions in language. Strong institutions and teachers transform desire.",
    works: ["Xunzi"],
    legacy:
      "Xunzi influenced Legalist students and later debates on human nature, education, and statecraft in East Asia.",
  },
  "Wang Yangming": {
    lifespan: "1472–1529",
    school: "Neo-Confucianism",
    birthDate: "1472-10-31",
    deathDate: "1529-01-09",
    jobTitle: "Philosopher and official",
    knowsAbout: ["innate knowing", "unity of knowledge and action", "mind", "ethics", "education"],
    overview:
      "Wang Yangming (1472–1529) was a Ming Neo-Confucian who taught the unity of knowledge and action and the extension of innate moral knowing (liangzhi).",
    ideas:
      "Moral knowledge is not complete until enacted. The mind’s innate knowing can grasp the ethical import of situations; investigation turns inward as well as toward affairs. His school rivaled Zhu Xi’s orthodoxy.",
    works: ["Instructions for Practical Living", "Inquiry on the Great Learning"],
    legacy:
      "Wang shaped East Asian Confucianism, modern Chinese thought, and comparative ethics of practice.",
  },
  "Zhu Xi": {
    lifespan: "1130–1200",
    school: "Neo-Confucianism",
    birthDate: "1130-10-18",
    deathDate: "1200-04-23",
    jobTitle: "Philosopher",
    knowsAbout: ["principle", "investigation of things", "education", "metaphysics", "ethics"],
    overview:
      "Zhu Xi (1130–1200) systematized Song Neo-Confucianism, establishing a curriculum and metaphysics that dominated later imperial examinations.",
    ideas:
      "Zhu develops li (principle) and qi (material force), emphasizes investigation of things (gewu), and edits the Four Books as educational core. Self-cultivation joins cosmology to ethics.",
    works: ["Commentaries on the Four Books", "Reflections on Things at Hand (anthology role)"],
    legacy:
      "Zhu Xi’s orthodoxy defined East Asian elite education for centuries and remains central to Neo-Confucian studies.",
  },
  Mozi: {
    lifespan: "c. 470–c. 391 BCE",
    school: "Mohism",
    birthDate: "-0470",
    deathDate: "-0391",
    jobTitle: "Philosopher",
    knowsAbout: ["impartial care", "utility", "governance", "against aggression", "standards"],
    overview:
      "Mozi (c. 470–c. 391 BCE) founded Mohism, advocating impartial concern (jian ai), consequentialist standards, and opposition to aggressive war and lavish ritual waste.",
    ideas:
      "Mohists measure policies by benefit to the people, defend a heavenly will as moral standard, and develop early Chinese logic and defensive military thought.",
    works: ["Mozi"],
    legacy:
      "Mohism was a major Warring States rival to Confucianism and is now studied for early consequentialism and philosophy of language.",
  },
  "Han Feizi": {
    lifespan: "c. 280–233 BCE",
    school: "Legalism",
    birthDate: "-0280",
    deathDate: "-0233",
    jobTitle: "Political theorist",
    knowsAbout: ["law", "power", "statecraft", "administration", "human nature"],
    overview:
      "Han Feizi (c. 280–233 BCE) synthesized Legalist statecraft emphasizing law (fa), administrative technique (shu), and positional power (shi).",
    ideas:
      "Rulers should rely on clear laws and impersonal mechanisms rather than moral example alone. Human motivations are treated cautiously; order depends on institutions.",
    works: ["Han Feizi"],
    legacy:
      "Legalism shaped Qin unification practices and remains a reference for realist theories of power in Chinese political thought.",
  },
  Sunzi: {
    lifespan: "trad. 5th century BCE",
    school: "Military strategy / Chinese thought",
    jobTitle: "Strategist",
    knowsAbout: ["strategy", "deception", "leadership", "conflict", "planning"],
    overview:
      "Sunzi (Sun Tzu) is the traditional author of The Art of War, a classic of strategy whose historicity is debated but whose influence on Chinese and global thought is vast.",
    ideas:
      "Victory through knowledge, preparation, and economy of force; deception and adaptation; and preference for winning without protracted destruction. Strategy is cognitive as much as martial.",
    works: ["The Art of War"],
    legacy:
      "Read far beyond military contexts—in business, politics, and game-theoretic metaphors—while remaining a Chinese philosophical-literary classic.",
  },
  "The Buddha": {
    lifespan: "c. 5th–4th century BCE (dates debated)",
    school: "Early Buddhism",
    jobTitle: "Religious teacher and philosopher",
    knowsAbout: ["suffering", "impermanence", "non-self", "ethics", "liberation"],
    overview:
      "The Buddha (Siddhartha Gautama) taught a path out of suffering centered on the Four Noble Truths and the Noble Eightfold Path. Exact dates are debated; traditional and scholarly estimates place him in the mid-first millennium BCE in northern India.",
    ideas:
      "Suffering (dukkha), impermanence, and non-self structure analysis of experience. Ethical conduct, meditation, and wisdom jointly lead toward liberation (nirvana). Dependent origination explains conditioned arising.",
    works: ["Early discourses preserved in Pali and other canons", "Dhammapada (associated anthology)"],
    legacy:
      "Buddhism became a major world philosophy-religion, generating sophisticated debates in metaphysics, mind, and ethics across Asia and globally.",
  },
  "Plotinus": {
    lifespan: "c. 204–270",
    school: "Neoplatonism",
    birthDate: "0204",
    deathDate: "0270",
    jobTitle: "Philosopher",
    knowsAbout: ["One", "emanation", "soul", "beauty", "contemplation"],
    overview:
      "Plotinus (c. 204–270) founded Neoplatonism, teaching that reality proceeds from the One through Intellect and Soul, as recorded in the Enneads edited by Porphyry.",
    ideas:
      "The One is beyond being; multiplicity emanates without diminishing the source. The soul’s task is return through virtue and contemplation. Beauty discloses higher reality.",
    works: ["Enneads"],
    legacy:
      "Neoplatonism shaped late antique, Islamic, Jewish, and Christian philosophy, and Renaissance Platonism.",
  },
  "Francis Bacon": {
    lifespan: "1561–1626",
    school: "Early modern empiricism",
    birthDate: "1561-01-22",
    deathDate: "1626-04-09",
    jobTitle: "Philosopher and statesman",
    knowsAbout: ["method", "induction", "science", "idols", "knowledge"],
    overview:
      "Francis Bacon (1561–1626) advocated a renewed natural philosophy based on inductive method and the reform of knowledge for human benefit.",
    ideas:
      "Bacon critiques idols of the mind that distort inquiry and proposes organized experiment and induction. Knowledge is power when directed toward the relief of the human condition.",
    works: ["Novum Organum", "The Advancement of Learning", "New Atlantis"],
    legacy:
      "Bacon became an emblem of scientific modernity, influencing the Royal Society’s culture of experiment.",
  },
  "Gottfried Wilhelm Leibniz": {
    lifespan: "1646–1716",
    school: "Rationalism",
    birthDate: "1646-07-01",
    deathDate: "1716-11-14",
    jobTitle: "Philosopher and mathematician",
    knowsAbout: ["monads", "optimism", "logic", "God", "sufficient reason"],
    overview:
      "Gottfried Wilhelm Leibniz (1646–1716) was a polymath rationalist who developed monadology, calculus (independently), and an ambitious metaphysics of sufficient reason.",
    ideas:
      "Reality consists of monads; this is the best of all possible worlds under divine choice; truths of reason and truths of fact are distinguished. Logic and metaphysics intertwine.",
    works: ["Monadology", "Theodicy", "New Essays on Human Understanding", "Discourse on Metaphysics"],
    legacy:
      "Leibniz shapes modern logic, metaphysics, and debates about optimism, identity, and possible worlds.",
  },
  "Jeremy Bentham": {
    lifespan: "1748–1832",
    school: "Utilitarianism",
    birthDate: "1748-02-15",
    deathDate: "1832-06-06",
    jobTitle: "Philosopher and legal reformer",
    knowsAbout: ["utility", "law", "pleasure", "pain", "reform"],
    overview:
      "Jeremy Bentham (1748–1832) founded classical utilitarianism, measuring right action by the greatest happiness of the greatest number and pressing legal and institutional reform.",
    ideas:
      "Pleasure and pain are the sovereign masters; felicific calculus aims to quantify consequences. Rights language is scrutinized when it obstructs utility. Panopticon designs exemplify institutional engineering.",
    works: ["An Introduction to the Principles of Morals and Legislation", "Fragment on Government"],
    legacy:
      "Bentham set the agenda for utilitarian ethics, animal welfare arguments, and modern cost-benefit styles of policy reasoning.",
  },
  "George Berkeley": {
    lifespan: "1685–1753",
    school: "Empiricism / idealism",
    birthDate: "1685-03-12",
    deathDate: "1753-01-14",
    jobTitle: "Philosopher and bishop",
    knowsAbout: ["idealism", "perception", "God", "abstraction", "empiricism"],
    overview:
      "George Berkeley (1685–1753) argued that sensible objects are ideas perceived by minds, culminating in a theistic immaterialism.",
    ideas:
      "Esse est percipi: to be is to be perceived (or to perceive). Abstract general ideas are criticized; God sustains the order of ideas. Berkeley aims to defeat skepticism and materialism together.",
    works: ["A Treatise Concerning the Principles of Human Knowledge", "Three Dialogues between Hylas and Philonous"],
    legacy:
      "Berkeley remains a classic of idealism and philosophy of perception.",
  },
  "Mary Wollstonecraft": {
    lifespan: "1759–1797",
    school: "Enlightenment feminism",
    birthDate: "1759-04-27",
    deathDate: "1797-09-10",
    jobTitle: "Philosopher and writer",
    knowsAbout: ["rights", "education", "women", "reason", "virtue"],
    overview:
      "Mary Wollstonecraft (1759–1797) argued for women’s rational education and political rights in A Vindication of the Rights of Woman, a founding text of feminist philosophy.",
    ideas:
      "Virtue and citizenship require developed reason; denying women education corrupts both sexes. Wollstonecraft links republican freedom to gender justice and critiques sensibility that excuses dependence.",
    works: [
      "A Vindication of the Rights of Men",
      "A Vindication of the Rights of Woman",
      "Letters Written During a Short Residence in Sweden, Norway, and Denmark",
    ],
    legacy:
      "Wollstonecraft anchors modern feminist political philosophy and debates about education and independence.",
  },
  "Simone Weil": {
    lifespan: "1909–1943",
    school: "Philosophy of attention / mysticism",
    birthDate: "1909-02-03",
    deathDate: "1943-08-24",
    jobTitle: "Philosopher and activist",
    knowsAbout: ["attention", "justice", "force", "affliction", "spirituality"],
    overview:
      "Simone Weil (1909–1943) was a French philosopher whose writings on attention, force, and affliction combine political commitment with spiritual intensity.",
    ideas:
      "Attention is a moral and epistemic act; force turns persons into things; affliction demands a response beyond sentimentality. Labor, education, and the sacred intersect in her notebooks and essays.",
    works: ["Gravity and Grace", "The Iliad, or the Poem of Force", "Waiting for God", "The Need for Roots"],
    legacy:
      "Weil influences ethics of care, political theology, and philosophies of attention and education.",
  },
  "Martin Buber": {
    lifespan: "1878–1965",
    school: "Dialogical philosophy",
    birthDate: "1878-02-08",
    deathDate: "1965-06-13",
    jobTitle: "Philosopher",
    knowsAbout: ["dialogue", "I-Thou", "relation", "religion", "community"],
    overview:
      "Martin Buber (1878–1965) developed a philosophy of dialogue centered on the I–Thou relation, influencing theology, education, and ethics.",
    ideas:
      "I–It objectifies; I–Thou encounters the other as presence. Genuine dialogue is mutual and transformative. Buber applies this to God, education, and community.",
    works: ["I and Thou", "Between Man and Man", "Paths in Utopia"],
    legacy:
      "Buber remains central to dialogical ethics, Jewish thought, and philosophies of encounter.",
  },
  "Iris Murdoch": {
    lifespan: "1919–1999",
    school: "Moral philosophy",
    birthDate: "1919-07-15",
    deathDate: "1999-02-08",
    jobTitle: "Philosopher and novelist",
    knowsAbout: ["attention", "good", "moral vision", "love", "Plato"],
    overview:
      "Iris Murdoch (1919–1999) renewed moral philosophy’s interest in vision, attention, and the sovereignty of good, alongside a major career as a novelist.",
    ideas:
      "Murdoch criticizes existentialist will-centered ethics, emphasizing unselfing attention to reality and the Good. Art and love train moral perception.",
    works: ["The Sovereignty of Good", "Metaphysics as a Guide to Morals", "novels including The Sea, The Sea"],
    legacy:
      "Murdoch influences virtue ethics, philosophy of literature, and contemporary work on moral perception.",
  },
  "Viktor Frankl": {
    lifespan: "1905–1997",
    school: "Existential psychology",
    birthDate: "1905-03-26",
    deathDate: "1997-09-02",
    jobTitle: "Psychiatrist and philosopher",
    knowsAbout: ["meaning", "suffering", "freedom", "responsibility", "logotherapy"],
    overview:
      "Viktor Frankl (1905–1997) founded logotherapy, arguing that the search for meaning is a primary human motivation, shaped by his experiences in Nazi concentration camps.",
    ideas:
      "Even under extreme constraint, an attitude toward suffering can be chosen. Meaning is discovered in work, love, and courage under unavoidable pain. Responsibility answers nihilism.",
    works: ["Man's Search for Meaning", "The Doctor and the Soul", "The Will to Meaning"],
    legacy:
      "Frankl bridges clinical practice and existential philosophy in popular and professional culture worldwide.",
  },
  "Henri Bergson": {
    lifespan: "1859–1941",
    school: "Process philosophy / vitalism",
    birthDate: "1859-10-18",
    deathDate: "1941-01-04",
    jobTitle: "Philosopher",
    knowsAbout: ["time", "duration", "memory", "intuition", "life"],
    overview:
      "Henri Bergson (1859–1941), Nobel laureate in Literature (1927), developed a philosophy of duration, memory, and creative evolution opposing purely spatialized time.",
    ideas:
      "Lived time (durée) differs from clock time; intuition grasps becoming; élan vital names life’s inventive push. Comedy, mysticism, and freedom appear across his essays.",
    works: ["Time and Free Will", "Matter and Memory", "Creative Evolution", "The Two Sources of Morality and Religion"],
    legacy:
      "Bergson influenced process thought, modernist literature, and later philosophies of time and life.",
  },
  "Alfred North Whitehead": {
    lifespan: "1861–1947",
    school: "Process philosophy",
    birthDate: "1861-02-15",
    deathDate: "1947-12-30",
    jobTitle: "Philosopher and mathematician",
    knowsAbout: ["process", "events", "metaphysics", "science", "education"],
    overview:
      "Alfred North Whitehead (1861–1947) co-authored Principia Mathematica with Russell and later developed process metaphysics in Process and Reality.",
    ideas:
      "Reality is made of events rather than static substances; creativity is ultimate; prehension relates occasions of experience. Education and religion receive speculative reconstruction.",
    works: ["Principia Mathematica (with Russell)", "Process and Reality", "Science and the Modern World", "The Aims of Education"],
    legacy:
      "Whitehead anchors process theology and metaphysics and remains influential in philosophy of science and education.",
  },
  "Michel de Montaigne": {
    lifespan: "1533–1592",
    school: "Renaissance humanism / skepticism",
    birthDate: "1533-02-28",
    deathDate: "1592-09-13",
    jobTitle: "Essayist and philosopher",
    knowsAbout: ["self", "skepticism", "custom", "experience", "moderation"],
    overview:
      "Michel de Montaigne (1533–1592) invented the modern essay as a form of self-study, combining classical learning with skeptical inquiry into custom and certainty.",
    ideas:
      "Que sais-je? What do I know? Montaigne examines the self as changing, criticizes anthropocentric pride, and treats philosophy as an art of living under uncertainty.",
    works: ["Essays"],
    legacy:
      "Montaigne shaped modern subjectivity, essayistic philosophy, and tolerant skepticism in European letters.",
  },
  "Nishida Kitaro": {
    lifespan: "1870–1945",
    school: "Kyoto School",
    birthDate: "1870-05-19",
    deathDate: "1945-06-07",
    jobTitle: "Philosopher",
    knowsAbout: ["pure experience", "nothingness", "self", "logic of place", " Zen"],
    overview:
      "Nishida Kitarō (1870–1945) founded the Kyoto School, bringing Zen-influenced concepts into dialogue with Western philosophy.",
    ideas:
      "Pure experience precedes subject–object split; later logic of basho (place) and absolute nothingness reframe self and world. Nishida seeks a philosophy adequate to both modern science and East Asian insight.",
    works: ["An Inquiry into the Good", "Fundamental Problems of Philosophy"],
    legacy:
      "Nishida remains central to modern Japanese philosophy and comparative metaphysics.",
  },
  "Hu Shi": {
    lifespan: "1891–1962",
    school: "Chinese liberalism / pragmatism",
    birthDate: "1891-12-17",
    deathDate: "1962-02-24",
    jobTitle: "Philosopher and reformer",
    knowsAbout: ["pragmatism", "language reform", "science", "liberalism", "method"],
    overview:
      "Hu Shi (1891–1962) was a leading intellectual of China’s New Culture Movement, promoting vernacular language, experimental method, and Deweyan pragmatism.",
    ideas:
      "Boldness in hypothesis, care in verification; cultural reform through education and science; liberalism as a temper of criticism. Philology and philosophy join in his scholarship.",
    works: ["essays on pragmatism and literary reform", "Autobiography at Forty"],
    legacy:
      "Hu Shi shaped modern Chinese intellectual culture and remains a reference for liberalism and scientific method in China.",
  },
  "Al-Ghazali": {
    lifespan: "1058–1111",
    school: "Islamic philosophy / theology",
    birthDate: "1058",
    deathDate: "1111",
    jobTitle: "Theologian and philosopher",
    knowsAbout: ["skepticism", "faith", "causation", "sufism", "knowledge"],
    overview:
      "Abū Ḥāmid al-Ghazālī (1058–1111) was a major Islamic theologian who critiqued the falāsifa and later integrated Sufi practice with Ashʿarite theology.",
    ideas:
      "In The Incoherence of the Philosophers he challenges necessary causation as understood by Avicenna; Deliverance from Error narrates a crisis of knowledge resolved through spiritual certainty.",
    works: ["The Incoherence of the Philosophers", "Deliverance from Error", "The Revival of the Religious Sciences"],
    legacy:
      "Al-Ghazālī reshaped Islamic intellectual history and remains central to philosophy of religion and epistemology in Islamic thought.",
  },
  Averroes: {
    lifespan: "1126–1198",
    school: "Islamic Aristotelianism",
    birthDate: "1126",
    deathDate: "1198",
    jobTitle: "Philosopher and jurist",
    knowsAbout: ["Aristotle", "reason", "religion", "intellect", "commentary"],
    overview:
      "Averroes (Ibn Rushd, 1126–1198) was an Andalusian philosopher whose commentaries on Aristotle deeply influenced Latin scholasticism.",
    ideas:
      "He defends the harmony of philosophy and religion rightly understood, advances accounts of intellect, and replies to al-Ghazālī in The Incoherence of the Incoherence.",
    works: ["Commentaries on Aristotle", "The Incoherence of the Incoherence", "Faṣl al-Maqāl"],
    legacy:
      "Latin Averroism shaped medieval European debates; he remains a symbol of rationalist Aristotelianism in Islamic philosophy.",
  },
  Maimonides: {
    lifespan: "1138–1204",
    school: "Jewish philosophy",
    birthDate: "1138",
    deathDate: "1204",
    jobTitle: "Philosopher and jurist",
    knowsAbout: ["God", "law", "prophecy", "Aristotle", "negative theology"],
    overview:
      "Maimonides (Moses ben Maimon, 1138–1204) was the foremost medieval Jewish philosopher, author of the Guide of the Perplexed and major legal codes.",
    ideas:
      "He reconciles Torah with Aristotelian science where possible, develops negative theology about divine attributes, and treats prophecy and providence within a philosophical frame.",
    works: ["Guide of the Perplexed", "Mishneh Torah", "Commentary on the Mishnah"],
    legacy:
      "Maimonides anchors Jewish philosophical theology and influenced Christian scholastics including Aquinas.",
  },
  "Ibn Khaldun": {
    lifespan: "1332–1406",
    school: "Philosophy of history / sociology",
    birthDate: "1332-05-27",
    deathDate: "1406-03-17",
    jobTitle: "Historian and philosopher",
    knowsAbout: ["history", "asabiyya", "civilization", "state", "economics"],
    overview:
      "Ibn Khaldūn (1332–1406) authored the Muqaddimah, a pioneering philosophy of history analyzing the rise and fall of dynasties through social cohesion (ʿaṣabiyya).",
    ideas:
      "Historical change follows patterns of solidarity, luxury, and decline. Climate, economy, and group feeling explain political cycles more than mere chronicle.",
    works: ["Muqaddimah", "Kitāb al-ʿIbar"],
    legacy:
      "Often called a forerunner of sociology and historiography, Ibn Khaldūn is central to Islamic and global philosophy of history.",
  },
  "Karl Jaspers": {
    lifespan: "1883–1969",
    school: "Existential philosophy",
    birthDate: "1883-02-23",
    deathDate: "1969-02-26",
    jobTitle: "Philosopher and psychiatrist",
    knowsAbout: ["existence", "communication", "boundary situations", "faith", "reason"],
    overview:
      "Karl Jaspers (1883–1969) developed an existential philosophy of boundary situations, communication, and philosophical faith, moving from psychiatry to systematic philosophy.",
    ideas:
      "Shipwreck in boundary situations (death, struggle, guilt, chance) discloses Existenz. Truth appears in loving communication; encompassing (das Umgreifende) names what thought cannot objectify.",
    works: ["Philosophy", "Reason and Existenz", "The Origin and Goal of History", "General Psychopathology"],
    legacy:
      "Jaspers influenced existential psychiatry, German postwar intellectual life, and philosophies of communication.",
  },
  "Paul Tillich": {
    lifespan: "1886–1965",
    school: "Philosophy of religion / theology",
    birthDate: "1886-08-20",
    deathDate: "1965-10-22",
    jobTitle: "Theologian and philosopher",
    knowsAbout: ["courage", "being", "faith", "culture", "anxiety"],
    overview:
      "Paul Tillich (1886–1965) correlated Christian theology with existential philosophy, analyzing anxiety, courage, and ultimate concern.",
    ideas:
      "God as being-itself; faith as ultimate concern; courage to be amid nonbeing. Culture and religion interpret each other in his method of correlation.",
    works: ["The Courage to Be", "Systematic Theology", "Dynamics of Faith"],
    legacy:
      "Tillich shaped mid-century Protestant thought and remains read in philosophy of religion and existential theology.",
  },
  "Erich Fromm": {
    lifespan: "1900–1980",
    school: "Critical theory / humanistic psychology",
    birthDate: "1900-03-23",
    deathDate: "1980-03-18",
    jobTitle: "Social psychologist and philosopher",
    knowsAbout: ["freedom", "love", "alienation", "society", "ethics"],
    overview:
      "Erich Fromm (1900–1980) combined psychoanalytic insight with social philosophy in analyses of freedom, authoritarianism, and love.",
    ideas:
      "Escape from Freedom examines why people flee liberty into submission. Love is an art requiring care, responsibility, respect, and knowledge. Productive orientation opposes marketing and authoritarian characters.",
    works: ["Escape from Freedom", "The Art of Loving", "To Have or To Be?", "The Sane Society"],
    legacy:
      "Fromm remains popular in ethics of love and critiques of consumer alienation.",
  },
  "Adam Smith": {
    lifespan: "1723–1790",
    school: "Scottish Enlightenment",
    birthDate: "1723-06-16",
    deathDate: "1790-07-17",
    jobTitle: "Moral philosopher and economist",
    knowsAbout: ["sympathy", "morality", "markets", "justice", "prudence"],
    overview:
      "Adam Smith (1723–1790) wrote The Theory of Moral Sentiments and The Wealth of Nations, joining moral psychology to political economy.",
    ideas:
      "Sympathy and the impartial spectator ground moral judgment; markets coordinate through exchange under justice and prudence. Self-interest is not the whole of human motivation in Smith’s system.",
    works: ["The Theory of Moral Sentiments", "The Wealth of Nations"],
    legacy:
      "Smith remains foundational for economics and for moral philosophy of commercial society.",
  },
  "Alexis de Tocqueville": {
    lifespan: "1805–1859",
    school: "Political philosophy",
    birthDate: "1805-07-29",
    deathDate: "1859-04-16",
    jobTitle: "Political theorist",
    knowsAbout: ["democracy", "equality", "liberty", "civil society", "tyranny of majority"],
    overview:
      "Alexis de Tocqueville (1805–1859) analyzed modern democracy’s strengths and dangers in Democracy in America and The Old Regime and the Revolution.",
    ideas:
      "Equality of conditions reshapes the soul of democracy; associations protect liberty; soft despotism and majority tyranny are risks. Religion, federalism, and habits of the heart matter as much as laws.",
    works: ["Democracy in America", "The Old Regime and the Revolution"],
    legacy:
      "Tocqueville remains essential for democratic theory, American studies, and critiques of mass society.",
  },
  "José Ortega y Gasset": {
    lifespan: "1883–1955",
    school: "Perspectivism / vital reason",
    birthDate: "1883-05-09",
    deathDate: "1955-10-18",
    jobTitle: "Philosopher",
    knowsAbout: ["perspective", "mass society", "life", "circumstance", "culture"],
    overview:
      "José Ortega y Gasset (1883–1955) developed a philosophy of vital reason and famously analyzed mass society in The Revolt of the Masses.",
    ideas:
      "Yo soy yo y mi circunstancia—I am myself and my circumstance. Perspective is constitutive; life is the radical reality. Mass-man threatens excellence and liberal culture.",
    works: ["The Revolt of the Masses", "Meditations on Quixote", "The Modern Theme"],
    legacy:
      "Ortega shaped Spanish-language philosophy and European debates on modernity and culture.",
  },
  "Giambattista Vico": {
    lifespan: "1668–1744",
    school: "Philosophy of history",
    birthDate: "1668-06-23",
    deathDate: "1744-01-23",
    jobTitle: "Philosopher",
    knowsAbout: ["history", "culture", "myth", "knowledge", "nations"],
    overview:
      "Giambattista Vico (1668–1744) argued in the New Science that the civil world is made by humans and thus knowable in a distinctive way, pioneering modern philosophy of history.",
    ideas:
      "Verum et factum convertuntur: the true and the made are convertible for human institutions. Nations cycle through ages; myth and poetry are early forms of knowledge.",
    works: ["The New Science", "On the Most Ancient Wisdom of the Italians"],
    legacy:
      "Vico influences historicism, cultural anthropology, and critiques of purely Cartesian method.",
  },
  "Charles Sanders Peirce": {
    lifespan: "1839–1914",
    school: "Pragmatism / semiotics",
    birthDate: "1839-09-10",
    deathDate: "1914-04-19",
    jobTitle: "Philosopher and logician",
    knowsAbout: ["pragmatism", "signs", "inquiry", "logic", "abduction"],
    overview:
      "Charles Sanders Peirce (1839–1914) founded pragmatism and modern semiotics, developing a theory of inquiry and a logic of relations.",
    ideas:
      "The meaning of concepts lies in conceivable practical effects; inquiry aims at truth as the ideal end of investigation; signs mediate thought. Abduction joins induction and deduction.",
    works: ["Collected Papers", "essays including How to Make Our Ideas Clear"],
    legacy:
      "Peirce underpins pragmatism, semiotics, and contemporary philosophy of science and logic.",
  },
  "George Santayana": {
    lifespan: "1863–1952",
    school: "Naturalism / American philosophy",
    birthDate: "1863-12-16",
    deathDate: "1952-09-26",
    jobTitle: "Philosopher and writer",
    knowsAbout: ["naturalism", "beauty", "skepticism", "animal faith", "culture"],
    overview:
      "George Santayana (1863–1952) combined literary elegance with naturalistic philosophy, writing on aesthetics, skepticism, and the life of reason.",
    ideas:
      "Animal faith underwrites belief beyond strict skepticism; beauty is objectified pleasure; spirit arises within nature without supernatural dualism. Cultural criticism joins metaphysics.",
    works: ["The Life of Reason", "Scepticism and Animal Faith", "The Sense of Beauty", "Dominations and Powers"],
    legacy:
      "Santayana remains a distinctive American philosophical voice linking aesthetics, naturalism, and cultural critique.",
  },
  "Anselm of Canterbury": {
    lifespan: "1033–1109",
    school: "Scholasticism",
    birthDate: "1033",
    deathDate: "1109-04-21",
    jobTitle: "Theologian and philosopher",
    knowsAbout: ["ontological argument", "faith", "reason", "atonement", "God"],
    overview:
      "Anselm of Canterbury (1033–1109) formulated the ontological argument and the motto faith seeking understanding (fides quaerens intellectum).",
    ideas:
      "God is that than which nothing greater can be thought; understanding elaborates faith without replacing it. Cur Deus Homo develops satisfaction theory of atonement.",
    works: ["Proslogion", "Monologion", "Cur Deus Homo"],
    legacy:
      "Anselm remains central to philosophy of religion and medieval metaphysics.",
  },
  "William of Ockham": {
    lifespan: "c. 1287–1347",
    school: "Scholasticism / nominalism",
    birthDate: "1287",
    deathDate: "1347",
    jobTitle: "Philosopher and theologian",
    knowsAbout: ["nominalism", "logic", "simplicity", "knowledge", "politics"],
    overview:
      "William of Ockham (c. 1287–1347) was a leading medieval nominalist associated with methodological simplicity (Ockham’s razor) and political writings on poverty and authority.",
    ideas:
      "Universals are names rather than real shared forms; explanations should not multiply entities without necessity; intuitive cognition grounds knowledge of particulars.",
    works: ["Summa Logicae", "political treatises on papal power"],
    legacy:
      "Ockham influences later empiricism, philosophy of language, and scientific ideals of parsimony.",
  },
  Dōgen: {
    lifespan: "1200–1253",
    school: "Sōtō Zen",
    birthDate: "1200",
    deathDate: "1253",
    jobTitle: "Zen master and philosopher",
    knowsAbout: ["zazen", "time", "Buddha-nature", "practice", "impermanence"],
    overview:
      "Dōgen (1200–1253) founded Japanese Sōtō Zen and wrote the Shōbōgenzō, a philosophically rich exploration of practice-enlightenment and time.",
    ideas:
      "Practice and enlightenment are not two; being-time (uji) rethinks temporality; sitting meditation (zazen) is the expressive enactment of the Way rather than a means only.",
    works: ["Shōbōgenzō", "Eihei Kōroku", "Fukanzazengi"],
    legacy:
      "Dōgen is central to Zen philosophy and comparative work on time, language, and practice.",
  },
  Huineng: {
    lifespan: "638–713",
    school: "Chan / Zen Buddhism",
    birthDate: "0638",
    deathDate: "0713",
    jobTitle: "Chan patriarch (traditional)",
    knowsAbout: ["sudden enlightenment", "mind", "no-thought", "Buddha-nature", "practice"],
    overview:
      "Huineng (638–713) is traditionally the Sixth Patriarch of Chan, associated with the Platform Sutra and teachings of sudden enlightenment.",
    ideas:
      "Buddha-nature is intrinsic; awakening can be sudden; no-thought and direct pointing challenge gradualist scholasticism. Historical layers of the Platform Sutra are complex, but the figure remains formative.",
    works: ["Platform Sutra (associated)"],
    legacy:
      "Huineng symbolizes Chan’s turn to mind and sudden awakening across East Asian Buddhism.",
  },
  Zengzi: {
    lifespan: "505–435 BCE (traditional)",
    school: "Confucianism",
    birthDate: "-0505",
    deathDate: "-0435",
    jobTitle: "Confucian disciple",
    knowsAbout: ["filial piety", "self-cultivation", "loyalty", "reflection", "ethics"],
    overview:
      "Zengzi (Zeng Shen, traditional dates 505–435 BCE) was a disciple of Confucius associated with filial piety and reflective self-examination in later Confucian tradition.",
    ideas:
      "Daily self-scrutiny, loyalty in relationships, and filial devotion structure ethical practice. Later tradition links him to transmission of the Great Learning.",
    works: ["Associated with traditions around the Great Learning and filial chapters"],
    legacy:
      "Zengzi remains a model of Confucian discipleship and moral seriousness in East Asian education.",
  },
  Protagoras: {
    lifespan: "c. 490–c. 420 BCE",
    school: "Sophism",
    birthDate: "-0490",
    deathDate: "-0420",
    jobTitle: "Sophist",
    knowsAbout: ["relativism", "man-measure", "rhetoric", "virtue", "knowledge"],
    overview:
      "Protagoras of Abdera (c. 490–c. 420 BCE) was a leading sophist, famous for the claim that man is the measure of all things.",
    ideas:
      "Perception and judgment are relative to the perceiver; virtue can be taught; rhetoric trains civic success. Plato’s dialogues preserve and contest his views.",
    works: ["Fragments and testimonies; portrayed in Plato’s Protagoras and Theaetetus"],
    legacy:
      "Protagoras anchors debates about relativism, education, and the ethics of persuasion.",
  },
  "Diogenes of Sinope": {
    lifespan: "c. 412–c. 323 BCE",
    school: "Cynicism",
    birthDate: "-0412",
    deathDate: "-0323",
    jobTitle: "Cynic philosopher",
    knowsAbout: ["asceticism", "nature", "frankness", "virtue", "autarky"],
    overview:
      "Diogenes of Sinope (c. 412–c. 323 BCE) embodied Cynic philosophy through radical simplicity, public frankness (parrhesia), and rejection of conventional status.",
    ideas:
      "Virtue is sufficient for happiness; nature trumps custom; shamelessness exposes social pretension. Philosophy is a way of life more than a treatise.",
    works: ["Anecdotes and testimonies (no complete works survive)"],
    legacy:
      "Diogenes became the emblem of Cynicism and influenced Stoic ethics of self-sufficiency.",
  },
  Democritus: {
    lifespan: "c. 460–c. 370 BCE",
    school: "Atomism",
    birthDate: "-0460",
    deathDate: "-0370",
    jobTitle: "Philosopher",
    knowsAbout: ["atoms", "void", "nature", "knowledge", "cheerfulness"],
    overview:
      "Democritus of Abdera (c. 460–c. 370 BCE) developed ancient atomism with Leucippus, explaining nature by atoms and void.",
    ideas:
      "Qualities arise from atomic arrangements; knowledge mixes sensation and reason; ethical cheerfulness (euthymia) accompanies naturalistic physics.",
    works: ["Fragments and later reports"],
    legacy:
      "Atomism resurfaces in Epicureanism and early modern science’s corpuscular imagination.",
  },
  Plutarch: {
    lifespan: "c. 46–c. 119",
    school: "Middle Platonism",
    birthDate: "0046",
    deathDate: "0119",
    jobTitle: "Philosopher and biographer",
    knowsAbout: ["virtue", "biography", "Platonism", "ethics", "history"],
    overview:
      "Plutarch of Chaeronea (c. 46–c. 119) wrote Parallel Lives and Moralia, combining biography with ethical and Platonic philosophy.",
    ideas:
      "Character is revealed in action; moral essays treat superstition, friendship, and education. Platonism frames his metaphysical and religious reflections.",
    works: ["Parallel Lives", "Moralia"],
    legacy:
      "Plutarch shaped Renaissance humanism and remains a classic source for ancient ethics and lives.",
  },
  "Auguste Comte": {
    lifespan: "1798–1857",
    school: "Positivism",
    birthDate: "1798-01-19",
    deathDate: "1857-09-05",
    jobTitle: "Philosopher",
    knowsAbout: ["positivism", "sociology", "science", "progress", "religion of humanity"],
    overview:
      "Auguste Comte (1798–1857) founded positivism and coined “sociology,” proposing a law of three stages in the development of knowledge.",
    ideas:
      "Theological, metaphysical, and positive stages mark intellectual history; science organizes society; a religion of humanity seeks moral cohesion without theology.",
    works: ["Course of Positive Philosophy", "System of Positive Polity"],
    legacy:
      "Comte influenced social science, secular religion debates, and nineteenth-century philosophies of progress.",
  },
  "Gabriel Marcel": {
    lifespan: "1889–1973",
    school: "Christian existentialism",
    birthDate: "1889-12-07",
    deathDate: "1973-10-08",
    jobTitle: "Philosopher",
    knowsAbout: ["being", "having", "hope", "fidelity", "mystery"],
    overview:
      "Gabriel Marcel (1889–1973) developed a Christian existential philosophy distinguishing problem and mystery, being and having.",
    ideas:
      "Primary reflection objectifies; secondary reflection recovers participation. Hope, fidelity, and availability (disponibilité) structure intersubjective life against technological reduction.",
    works: ["Being and Having", "The Mystery of Being", "Homo Viator"],
    legacy:
      "Marcel remains important for existential phenomenology and philosophies of hope and embodiment.",
  },
  "Rabindranath Tagore": {
    lifespan: "1861–1941",
    school: "Indian modern thought",
    birthDate: "1861-05-07",
    deathDate: "1941-08-07",
    jobTitle: "Poet and philosopher",
    knowsAbout: ["freedom", "education", "humanism", "nature", "spirituality"],
    overview:
      "Rabindranath Tagore (1861–1941), Nobel laureate in Literature (1913), articulated a humanistic and spiritual philosophy through poetry, essays, and educational practice at Santiniketan.",
    ideas:
      "Tagore defends creative freedom, critiques narrow nationalism, and links education to the fullness of personality in nature and art. Universal humanism meets Upanishadic resonance without scholastic closure.",
    works: ["Gitanjali", "The Religion of Man", "Nationalism", "essays on education"],
    legacy:
      "Tagore remains a global voice for cosmopolitan humanism and aesthetic education.",
  },
  "Swami Vivekananda": {
    lifespan: "1863–1902",
    school: "Vedanta / modern Hindu thought",
    birthDate: "1863-01-12",
    deathDate: "1902-07-04",
    jobTitle: "Philosopher and religious teacher",
    knowsAbout: ["Vedanta", "self", "service", "religion", "strength"],
    overview:
      "Swami Vivekananda (1863–1902) presented Vedanta to global audiences and urged strength, service, and spiritual universalism in modern India.",
    ideas:
      "The divine self in all grounds ethics of service; religions are paths to the same ocean; education should build character and fearlessness.",
    works: ["Raja Yoga", "Karma Yoga", "speeches at the 1893 Parliament of Religions", "Complete Works"],
    legacy:
      "Vivekananda shaped modern Hindu self-understanding and East–West philosophical exchange.",
  },
  "Liang Shuming": {
    lifespan: "1893–1988",
    school: "Modern Confucianism",
    birthDate: "1893-10-18",
    deathDate: "1988-06-23",
    jobTitle: "Philosopher",
    knowsAbout: ["culture", "Confucianism", "Buddhism", "rural reconstruction", "reason"],
    overview:
      "Liang Shuming (1893–1988) was a leading modern Confucian who compared Western, Chinese, and Indian cultures and engaged rural reconstruction.",
    ideas:
      "Cultures orient will differently; Confucian intuition and ethical life offer an alternative modernity; philosophy must address China’s concrete social path.",
    works: ["Eastern and Western Cultures and Their Philosophies", "The Substance of Chinese Culture"],
    legacy:
      "Liang is central to New Confucianism and twentieth-century Chinese cultural philosophy.",
  },
  "Feng Youlan": {
    lifespan: "1895–1990",
    school: "Modern Chinese philosophy",
    birthDate: "1895-12-04",
    deathDate: "1990-11-26",
    jobTitle: "Philosopher and historian of philosophy",
    knowsAbout: ["Chinese philosophy", "history", "metaphysics", "rationalism", "tradition"],
    overview:
      "Feng Youlan (Fung Yu-lan, 1895–1990) wrote a landmark History of Chinese Philosophy and sought a new rationalist metaphysics in dialogue with tradition.",
    ideas:
      "Feng periodizes Chinese thought, interprets Neo-Confucianism for modern readers, and constructs a “new lixue” aiming at clarity without abandoning Chinese categories.",
    works: ["A History of Chinese Philosophy", "New Treatise on Neo-Confucianism"],
    legacy:
      "Feng remains a primary gateway for English readers of Chinese philosophy’s history.",
  },
  "Wang Guowei": {
    lifespan: "1877–1927",
    school: "Modern Chinese aesthetics / philosophy",
    birthDate: "1877-12-03",
    deathDate: "1927-06-02",
    jobTitle: "Scholar and philosopher",
    knowsAbout: ["aesthetics", "tragedy", "Schopenhauer", "ci poetry", "scholarship"],
    overview:
      "Wang Guowei (1877–1927) brought Western aesthetics—especially Schopenhauer—into dialogue with Chinese literature and classical studies.",
    ideas:
      "Aesthetic contemplation offers relief from willing; tragic drama and ci lyricism disclose human limits; rigorous scholarship joins philosophy to philology.",
    works: ["Comments on Dream of the Red Chamber", "Renjian Cihua", "studies in ancient history"],
    legacy:
      "Wang is pivotal for modern Chinese aesthetics and the reception of European philosophy in China.",
  },
  "Wang Fuzhi": {
    lifespan: "1619–1692",
    school: "Late Ming–early Qing Confucianism",
    birthDate: "1619",
    deathDate: "1692",
    jobTitle: "Philosopher",
    knowsAbout: ["qi", "history", "ethics", "critique of empty principle", "politics"],
    overview:
      "Wang Fuzhi (1619–1692) developed a material-force (qi) centered Confucian philosophy after the Ming collapse, criticizing empty speculation.",
    ideas:
      "Principle does not float apart from qi; history and concrete conditions matter; ethical and political thought must face dynastic catastrophe without quietism.",
    works: ["Commentaries on the Four Books and Zhouyi", "Yellow Book", "Nightmare"],
    legacy:
      "Wang is a major resource for modern Chinese materialism and historically minded Confucianism.",
  },
  "Zhang Zai": {
    lifespan: "1020–1077",
    school: "Neo-Confucianism",
    birthDate: "1020",
    deathDate: "1077",
    jobTitle: "Philosopher",
    knowsAbout: ["qi", "heaven and earth", "ethics", "cosmology", "humaneness"],
    overview:
      "Zhang Zai (1020–1077) was an early Song Neo-Confucian known for the Western Inscription and a qi-based cosmology linking cosmos and ethics.",
    ideas:
      "Heaven is father, earth mother; all people are siblings in one body of qi. Forming one body with things grounds expansive humaneness.",
    works: ["Correcting Youthful Ignorance (Zheng meng)", "Western Inscription"],
    legacy:
      "Zhang’s cosmology influenced Zhu Xi’s synthesis and remains cited for ecological and ethical holism.",
  },
  "Qian Mu": {
    lifespan: "1895–1990",
    school: "Modern Confucian historiography",
    birthDate: "1895-07-30",
    deathDate: "1990-08-30",
    jobTitle: "Historian and philosopher",
    knowsAbout: ["Chinese culture", "history", "Confucianism", "education", "nation"],
    overview:
      "Qian Mu (1895–1990) was a major historian of Chinese thought who defended the continuity and value of Chinese cultural tradition in modernity.",
    ideas:
      "Chinese history has its own spirit; education transmits cultural life; modernization need not mean wholesale Western replacement of Confucian resources.",
    works: ["Outline of National History", "The Spirit of Chinese History"],
    legacy:
      "Qian influenced New Confucian cultural conservatism and Chinese historical education in Taiwan and beyond.",
  },
  "Liang Qichao": {
    lifespan: "1873–1929",
    school: "Modern Chinese reform thought",
    birthDate: "1873-02-23",
    deathDate: "1929-01-19",
    jobTitle: "Intellectual and reformer",
    knowsAbout: ["reform", "nation", "liberty", "historiography", "modernity"],
    overview:
      "Liang Qichao (1873–1929) was a leading late-Qing and early-Republican intellectual who introduced Western political ideas and reshaped Chinese historiography and public opinion.",
    ideas:
      "New historiography serves national awakening; liberty and civic virtue must be cultivated; cultural reform joins political change. Journalism is a philosophical-political practice.",
    works: ["essays on new historiography and civic education", "Intellectual Trends in the Qing Period"],
    legacy:
      "Liang is central to China’s intellectual transition to modernity and mass political culture.",
  },
  "Friedrich Schiller": {
    lifespan: "1759–1805",
    school: "German Idealism / aesthetics",
    birthDate: "1759-11-10",
    deathDate: "1805-05-09",
    jobTitle: "Poet and philosopher",
    knowsAbout: ["aesthetics", "freedom", "beauty", "play", "morality"],
    overview:
      "Friedrich Schiller (1759–1805) linked aesthetics and freedom in Letters on the Aesthetic Education of Man, alongside major dramatic works.",
    ideas:
      "Beauty reconciles sense and form; the play drive (Spieltrieb) educates toward freedom; aesthetic culture prepares moral and political maturity.",
    works: ["Letters on the Aesthetic Education of Man", "On Grace and Dignity", "dramas including Wallenstein"],
    legacy:
      "Schiller remains key for aesthetic education and German philosophies of freedom.",
  },
  "Johann Wolfgang von Goethe": {
    lifespan: "1749–1832",
    school: "German letters / nature philosophy",
    birthDate: "1749-08-28",
    deathDate: "1832-03-22",
    jobTitle: "Writer and thinker",
    knowsAbout: ["nature", "formation", "art", "knowledge", "life"],
    overview:
      "Johann Wolfgang von Goethe (1749–1832) was Germany’s preeminent writer whose scientific and reflective works engage morphology, color, and the formation of life and character.",
    ideas:
      "Living form is grasped by intuitive participation as well as analysis; Bildung names educational self-formation; poetry and science mutually illuminate nature.",
    works: ["Faust", "Theory of Colours", "Italian Journey", "Wilhelm Meister"],
    legacy:
      "Goethe influences philosophies of nature, Bildung, and the unity of art and science.",
  },
  "Elizabeth Anscombe": {
    lifespan: "1919–2001",
    school: "Analytic Philosophy",
    birthDate: "1919-03-18",
    deathDate: "2001-01-05",
    jobTitle: "Philosopher",
    knowsAbout: ["intention", "action", "virtue", "moral psychology", "Wittgenstein"],
    overview:
      "G. E. M. Anscombe (1919–2001) was a British analytic philosopher whose Intention and “Modern Moral Philosophy” reshaped action theory and revived virtue ethics. A student and literary executor of Wittgenstein, she taught at Oxford and Cambridge and combined rigorous conceptual analysis with a Thomistic moral outlook.",
    ideas:
      "Anscombe argues that intention is understood through the descriptions under which an agent acts, not through mysterious inner pushes. In ethics she criticizes consequentialism and the modern sense of “morally ought,” urging a return to thick concepts such as justice and the virtues once a lawgiver framework is absent.",
    works: ["Intention", "Modern Moral Philosophy", "Collected Philosophical Papers"],
    legacy:
      "She stands behind late-twentieth-century virtue ethics and remains central to philosophy of action; debates on double effect and moral vocabulary continually return to her essays.",
  },
  "Philippa Foot": {
    lifespan: "1920–2010",
    school: "Analytic Philosophy",
    birthDate: "1920-10-03",
    deathDate: "2010-10-03",
    jobTitle: "Philosopher",
    knowsAbout: ["virtue ethics", "natural goodness", "moral psychology", "practical reason"],
    overview:
      "Philippa Foot (1920–2010) was a leading Oxford moral philosopher who helped restore virtue ethics within analytic philosophy. Across essays collected in Virtues and Vices and the late book Natural Goodness, she linked moral evaluation to the needs and life-form of human beings rather than to free-floating emotivist attitudes.",
    ideas:
      "Foot treats virtues as beneficial traits humans need for living well together, and argues that moral judgment is constrained by the kinds of things humans are. Her discussions of trolley cases and double effect sharpened debates about killing, letting die, and the structure of practical reasons.",
    works: ["Virtues and Vices", "Natural Goodness", "Moral Dilemmas"],
    legacy:
      "Foot’s naturalism and virtue theory continue to shape metaethics, applied ethics, and neo-Aristotelian moral philosophy.",
  },
  "Martha Nussbaum": {
    lifespan: "1947–",
    school: "Political Liberalism",
    birthDate: "1947-05-06",
    jobTitle: "Philosopher",
    knowsAbout: ["capabilities", "emotions", "justice", "ancient ethics", "liberalism"],
    overview:
      "Martha Nussbaum (b. 1947) is an American philosopher whose work spans ancient Greek ethics, emotions, and contemporary political liberalism. With Amartya Sen she developed the capabilities approach; her books also defend the cognitive content of emotions and the civic role of literature and imagination.",
    ideas:
      "Human flourishing depends on substantial freedoms—capabilities to do and to be—secured by just institutions. Emotions are evaluative judgments open to education; narrative imagination prepares citizens for moral attention across difference. Luck and vulnerability remain central to a realistic account of the good life.",
    works: [
      "The Fragility of Goodness",
      "Upheavals of Thought",
      "Creating Capabilities",
      "Frontiers of Justice",
    ],
    legacy:
      "Nussbaum’s capabilities framework informs development policy and liberal political theory, while her emotion theory reshapes ethics and philosophy of mind.",
  },
  "Hypatia of Alexandria": {
    lifespan: "c. 350–415",
    school: "Neoplatonism",
    deathDate: "0415",
    jobTitle: "Philosopher and mathematician",
    knowsAbout: ["Neoplatonism", "mathematics", "astronomy", "public teaching"],
    overview:
      "Hypatia of Alexandria (c. 350–415) was a Neoplatonist philosopher and mathematician, daughter of the astronomer Theon. No authentic philosophical treatise in her own hand survives; our picture depends on Synesius’s letters and later reports by Socrates Scholasticus, Damascius, and others. She taught publicly in Alexandria and was murdered in 415 amid civic-religious conflict.",
    ideas:
      "Ancient testimonia present her as expounding Platonic philosophy and the mathematical sciences to mixed audiences, associated with a moderated Alexandrian Neoplatonism rather than theurgic extremes. Reconstruction of doctrines must remain cautious because first-person texts are lost.",
    works: [
      "Commentaries on Diophantus and Ptolemy (attested; not extant as her signed works)",
      "Editorial collaboration associated with Theon’s astronomical corpus (scholarly debate)",
    ],
    legacy:
      "Hypatia became a lasting symbol of learning under political violence and of women’s presence in ancient philosophy, while scholarship insists on strict source criticism rather than invented sayings.",
  },
  Damascius: {
    lifespan: "c. 462–after 538",
    school: "Neoplatonism",
    jobTitle: "Neoplatonist scholarch",
    knowsAbout: ["Neoplatonism", "Alexandrian schools", "biographical testimony"],
    overview:
      "Damascius was the last scholarch of the Athenian Neoplatonic school before Justinian’s closure of the Academy. His Life of Isidore survives mainly through the Suda and Photius; it preserves late antique portraits of teachers, including Hypatia of Alexandria.",
    ideas:
      "As a systematic Neoplatonist he developed an austere negative theology of the ineffable; the archive quotations under his name here are biographical testimonia about Hypatia rather than excerpts from his metaphysical treatises.",
    works: ["Life of Isidore (fragmentary)", "Problems and Solutions Concerning First Principles"],
    legacy:
      "He is a primary late source for Alexandrian and Athenian school history, and for cautious reconstruction of Hypatia’s public teaching.",
  },
  "Synesius of Cyrene": {
    lifespan: "c. 370–c. 413",
    school: "Neoplatonism",
    jobTitle: "Bishop and philosopher",
    knowsAbout: ["Neoplatonism", "letters", "Hypatia"],
    overview:
      "Synesius of Cyrene studied in Alexandria under Hypatia before becoming bishop of Ptolemais. His letters are among the warmest contemporary witnesses to her teaching and character.",
    ideas:
      "He blends Neoplatonic cosmology, civic duty, and Christian office; quotations gathered here primarily document his praise of Hypatia as a philosophical authority.",
    works: ["Letters", "On Kingship", "Dion"],
    legacy:
      "His correspondence remains essential for any historically responsible account of Hypatia.",
  },
  "Christine de Pizan": {
    lifespan: "1364–c. 1430",
    school: "Renaissance Humanism",
    birthDate: "1364",
    deathDate: "1430",
    jobTitle: "Writer and political thinker",
    knowsAbout: ["women’s education", "virtue", "political counsel", "humanism"],
    overview:
      "Christine de Pizan (1364–c. 1430) was an Italian-born writer active at the French court who authored poetry, political advice books, and The Book of the City of Ladies. Widowed young, she supported herself by letters and became an early public defender of women’s intellectual and moral dignity against misogynist literary tradition.",
    ideas:
      "Christine argues that women share fully in humanity and divine peoplehood, that education and virtue are open to them, and that calumnies against women often rest on envy and ignorance. Her allegorical city gathers exemplary women as a counter-history to inherited prejudice.",
    works: [
      "The Book of the City of Ladies",
      "The Treasure of the City of Ladies",
      "The Book of the Body Politic",
    ],
    legacy:
      "She is a founding figure for feminist intellectual history and late-medieval political thought, bridging courtly literature and civic counsel.",
  },
  "Edith Stein": {
    lifespan: "1891–1942",
    school: "Phenomenology",
    birthDate: "1891-10-12",
    deathDate: "1942-08-09",
    jobTitle: "Philosopher and Carmelite",
    knowsAbout: ["empathy", "personhood", "phenomenology", "Thomism"],
    overview:
      "Edith Stein (1891–1942), also known as St. Teresa Benedicta of the Cross, was a German phenomenologist who studied with Husserl and wrote On the Problem of Empathy. Of Jewish origin, she converted to Catholicism, entered Carmel, and was killed at Auschwitz; her later work joins phenomenology with Christian metaphysics.",
    ideas:
      "Stein analyzes empathy as a distinctive experiential act through which another subject is given, not inferred as a mere analogy from one’s own case. She develops accounts of the person, community, and the relation of finite being to eternal being, moving from early Husserlian description toward a realist ontology.",
    works: ["On the Problem of Empathy", "Philosophy of Psychology and the Humanities", "Finite and Eternal Being"],
    legacy:
      "Stein remains central to phenomenological ethics of the other and to twentieth-century Catholic philosophy; her life also marks philosophy under totalitarian persecution.",
  },
  "Gloria Anzaldúa": {
    lifespan: "1942–2004",
    school: "Feminist Philosophy",
    birthDate: "1942-09-26",
    deathDate: "2004-05-15",
    jobTitle: "Writer and theorist",
    knowsAbout: ["borderlands", "mestiza consciousness", "identity", "language"],
    overview:
      "Gloria Anzaldúa (1942–2004) was a Chicana feminist theorist and poet whose Borderlands/La Frontera mixed autobiography, myth, and political analysis of the U.S.–Mexico border. She wrote across English and Spanish to describe hybrid identity under colonial and patriarchal pressure.",
    ideas:
      "The borderland is an undetermined psychic and geographic space produced by unnatural boundaries; mestiza consciousness negotiates multiple languages, cultures, and genders without demanding purity. Language and storytelling become sites of resistance and self-formation.",
    works: ["Borderlands/La Frontera", "This Bridge Called My Back (co-edited)", "Light in the Dark/Luz en lo Oscuro"],
    legacy:
      "Anzaldúa shaped feminist, queer, and decolonial theory; “borderlands” remains a keyword across cultural studies and philosophy of identity.",
  },
  "Sophie Oluwole": {
    lifespan: "1935–2018",
    school: "Africana Philosophy",
    birthDate: "1935-05-12",
    deathDate: "2018-12-23",
    jobTitle: "Philosopher",
    knowsAbout: ["Yoruba philosophy", "Ifá", "comparative philosophy", "orality"],
    overview:
      "Sophie Bosede Oluwole (1935–2018) was a Nigerian philosopher and the first woman to earn a doctorate in philosophy in Nigeria. She taught at the University of Lagos and argued that Yoruba oral traditions, especially Ifá, contain rigorous classical philosophy comparable to Greek sources.",
    ideas:
      "In Socrates and Ọ̀rúnmìlà she compares the Greek and Yoruba sages as oral teachers whose ideas must be recovered from tradition. She contrasts Western binary opposition with African binary complementarity, insisting that matter and idea co-belong in phenomena and that African sayings deserve critical philosophical analysis.",
    works: [
      "Socrates and Ọ̀rúnmìlà: Two Patron Saints of Classical Philosophy",
      "Witchcraft, Reincarnation and the God-Head",
      "essays on Yoruba philosophy of mind and ethics",
    ],
    legacy:
      "Oluwole made Yoruba thought audible in global philosophy curricula and modeled comparative work that refuses the myth of Africa without philosophy.",
  },
  "Audre Lorde": {
    lifespan: "1934–1992",
    school: "Feminist Philosophy",
    birthDate: "1934-02-18",
    deathDate: "1992-11-17",
    jobTitle: "Poet and theorist",
    knowsAbout: ["difference", "silence", "power", "poetry as knowledge"],
    overview:
      "Audre Lorde (1934–1992) was a Black lesbian feminist poet and essayist whose Sister Outsider gathered speeches that treat difference, anger, and language as philosophical-political problems. She wrote as a self-described warrior poet confronting racism, sexism, and homophobia.",
    ideas:
      "Lorde argues that tools forged by domination cannot liberate the dominated; silence does not secure survival; poetry is a necessity for naming experience that official reason erases. Difference is a creative source rather than a threat to solidarity.",
    works: ["Sister Outsider", "Zami: A New Spelling of My Name", "The Cancer Journals"],
    legacy:
      "Her essays remain touchstones in feminist ethics, critical theory, and debates about method, voice, and coalition across difference.",
  },
};
