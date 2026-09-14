/**
 * Guides for the corpus entries that are texts, anthologies, or traditions
 * rather than individuals — plus the six Chan masters whose teaching reaches us
 * only through their communities' records.
 *
 * These fifteen entries were the last authors in the corpus without a guide, and
 * five of them (the Bhagavad Gita, the Dhammapada, Linji, the Doctrine of the
 * Mean, the Great Learning) hold enough passages that their hub pages are built
 * and indexed. A hub page whose only substance is a list of passages is the
 * thin-content shape this archive has already been penalised for once, so each
 * of these carries the same four sections every other thinker hub does.
 *
 * The writing follows the same rule as the rest of the archive's editorial
 * layer: state what the text or the record actually supports, and say plainly
 * where the attribution is a tradition's rather than a document's.
 */
import type { ThinkerGuide } from "./enrichment";

export const traditionGuides: Record<string, ThinkerGuide> = {
  "Bhagavad Gita": {
    lifespan: "Received form c. 2nd century BCE – 2nd century CE",
    school: "Indian Classical Philosophy",
    jobTitle: "Epic dialogue within the Mahābhārata",
    knowsAbout: [
      "action",
      "duty",
      "detachment",
      "self",
      "yoga",
      "impermanence",
    ],
    overview:
      "The Bhagavad Gītā is not a treatise but a conversation: on the field at Kurukṣetra, with two armies drawn up, Arjuna refuses to fight and Kṛṣṇa answers him across eighteen chapters. It survives as Book VI of the Mahābhārata and was read within that epic for centuries before it acquired a commentary tradition of its own. Śaṅkara, Rāmānuja, and Madhva each wrote foundational commentaries on it, and their disagreements about its central teaching are a good indication of how much the text leaves open. Its 700 verses are dated as a composition of roughly the last centuries BCE and the first centuries CE; the dating is a range, not a year. The Gītā's influence runs through Vedānta, through the nineteenth-century Indian reformers, and — after Emerson and Thoreau read it — through American transcendentalism, which is why its lines circulate in English far more widely than their Sanskrit readership alone would explain.",
    ideas:
      "The argument turns on the distinction between action and its fruits. Arjuna's objection is that acting will make him complicit in slaughter; Kṛṣṇa's answer is not that the slaughter is permissible but that Arjuna has misdescribed the self that would be doing it. The Self is not the perishable body, and the agent who acts for results has bound himself to outcomes he cannot control. Hence the text's most quoted verse (2.47), which sets a claim on action against any claim on its results. Three disciplines are laid out as routes: the yoga of action performed without attachment, the yoga of knowledge, and the yoga of devotion. A later chapter reworks Arjuna's own question, and the dialogue closes not with a command but with Kṛṣṇa telling him to deliberate and then do as he chooses — a detail that matters, because it makes the Gītā an argument the reader is asked to follow rather than an order the reader is asked to obey. Throughout, the vocabulary is technical: karman, dharma, svabhāva, the guṇas, and the three yogas are terms of art, and passages quoted without them lose their precision.",
    works: [
      "Bhagavad Gītā (Mahābhārata VI.23–40)",
      "Śaṅkara, Gītābhāṣya",
      "Rāmānuja, Gītābhāṣya",
      "Madhva, Gītābhāṣya",
      "Mādhva and Advaita commentary traditions",
    ],
    legacy:
      "The Gītā is the single most translated text in Indian philosophy, which is also the reason caution is warranted about any English line from it: renderings differ sharply on key terms, and the popular English of 2.47 as a 'right' to action imports a modern juridical sense the Sanskrit adhikāra does not carry. In modern India it was read by Tilak as a call to action, by Gandhi as a charter of non-attachment, and by Ambedkar as a text of caste apology — three incompatible readings, all argued from the same verses.",
  },

  Dhammapada: {
    lifespan: "Verses from the early Buddhist tradition; received form c. 3rd century BCE",
    school: "Early Buddhism",
    jobTitle: "Verse anthology of the Pali canon",
    knowsAbout: [
      "mind",
      "anger",
      "self-reliance",
      "effort",
      "ethics",
      "impermanence",
    ],
    overview:
      "The Dhammapada is a collection of 423 verses arranged in 26 chapters, preserved in Pali and belonging to the Khuddaka Nikāya of the Theravāda canon. It is not a composition but an anthology: the verses are drawn from the wider body of early Buddhist verse and have parallels in the texts of other early schools, which is why scholars treat it as inherited teaching rather than as a single author's work. Its dates are correspondingly awkward — the verses are older than the collection, and the collection's received form is usually placed around the third century BCE. The name means, roughly, 'the path of the teaching'. Its subjects are practical: how attention precedes action, why hatred does not end by hatred, what one can and cannot rely on, and what a person must do for themselves because no one else can do it for them.",
    ideas:
      "The first pair of verses sets out the text's central claim — that mind precedes and shapes what one does — and the rest of the anthology works out the consequences. Anger is met by non-anger, evil by good, and the admonition is specific rather than sentimental: the verses observe that feeding resentment enlarges it. Against this sits a firm insistence on self-reliance. The Buddhas point the way; the walking is the practitioner's, and verse 160 makes the point bluntly by denying that any refuge but oneself is available. The chapter on the mind treats it as the thing most in need of training and least willing to submit to it. Much of the practical force comes from a sober reading of impermanence as the reason for effort rather than for resignation. What the anthology does not offer is a systematic metaphysics: those are elsewhere in the canon, and the Dhammapada's authority is precisely the authority of a text a practitioner can hold in memory.",
    works: [
      "Dhammapada (Khuddaka Nikāya)",
      "Dhammapada-aṭṭhakathā (commentarial tradition)",
      "Buddhaghosa, commentary",
      "Parallel texts in the Chinese and Sanskrit collections",
    ],
    legacy:
      "Translated into dozens of languages and often the only Buddhist text an English reader owns. That popularity has a cost: the verses travel without the commentarial frame that supplies the situation each was spoken in, so a line of practical instruction is easily read as an abstract maxim. Different translations also disagree on central terms — dhamma, citta, and taṇhā are each rendered several ways — and a passage quoted from the Dhammapada should say which rendering it follows.",
  },

  "The Doctrine of the Mean": {
    lifespan: "Warring States period, c. 4th – 3rd century BCE",
    school: "Confucianism",
    jobTitle: "Confucian treatise, one of the Four Books",
    knowsAbout: ["equilibrium", "sincerity", "nature", "cultivation", "heaven"],
    overview:
      "The Zhōngyōng is a short text in thirty-three chapters, traditionally attributed to Zisi — Kong Ji, a grandson of Confucius — and usually dated to the Warring States period. Its standing today is largely the work of Zhu Xi, who in the twelfth century lifted it out of the Lǐjì, the Book of Rites, and made it one of the Four Books that structured Confucian education for the next eight centuries. The opening sentence sets the whole text in motion: what Heaven mandates is called nature, following that nature is called the Way, and cultivating the Way is called teaching. Everything afterward suspends from that chain. It is a demanding text — considerably more metaphysical than the Analects — and it is where Confucian thought comes closest to a doctrine of human nature grounded in cosmology rather than in custom.",
    ideas:
      "The title resists translation in a way that matters. Zhōng is not the compromise between two positions, and yōng is not a mediocre middle. Zhōng names the equilibrium that holds before joy, anger, sorrow, and pleasure are aroused; once they arise and each reaches its due measure, the state is called harmony. The two together describe an inner condition that is both prior to feeling and correct within it, and 'the golden mean' — the traditional English rendering — loses exactly that structure. From this the text develops sincerity as the pivot: sincerity is the Way of Heaven, and making oneself sincere is the human route to it. The famous five-step prescription sits here as pedagogy rather than as a slogan — study it broadly, inquire accurately, think it over carefully, distinguish it clearly, and carry it out earnestly. Hiddenness is another recurring concern: the noble person is watchful over what is not seen and apprehensive over what is not heard, because the course of things becomes evident exactly where attention has lapsed.",
    works: [
      "Lǐjì, chapter 31 (Zhōngyōng)",
      "The Book of Rites (Lǐjì)",
      "Zhu Xi, Sishu zhangju jizhu (Collected Commentaries on the Four Books)",
    ],
    legacy:
      "Through the Four Books the Zhōngyōng shaped East Asian education and the vocabulary of self-cultivation for centuries, and through Zhu Xi it reached Korea, Vietnam, and Tokugawa Japan. Its sincerity vocabulary was later read against Buddhist and Daoist accounts of the same ground, with the result that the text became a meeting point between three traditions rather than a purely Confucian document. Modern scholarship reads it as philosophy of mind and as moral psychology, not only as ethical instruction.",
  },

  "The Great Learning": {
    lifespan: "Warring States period, c. 4th – 3rd century BCE",
    school: "Confucianism",
    jobTitle: "Confucian treatise, one of the Four Books",
    knowsAbout: [
      "self-cultivation",
      "governance",
      "knowledge",
      "sincerity",
      "order",
    ],
    overview:
      "The Dàxué is the shortest of the Four Books and the most programmatic. Like the Zhōngyōng it was lifted out of the Lǐjì by Zhu Xi, and it is traditionally divided into a brief 'classic' section attributed to Confucius and a commentary attributed to his disciple Zengzi. That division is a traditional attribution rather than a manuscript fact, but it explains the text's shape: a thesis, followed by elaboration. The famous first paragraph names the three commitments of great learning — illuminating luminous virtue, renewing the people, and resting in the highest good — and the rest of the text sets them inside a single sequence running from the investigation of things outward to the pacification of the world. Its brevity is the reason it served for centuries as the first text a student read and the last one they fully exhausted.",
    ideas:
      "The text's structure is its argument. Eight items are arranged in one direction: investigate things, extend knowledge, make the will sincere, rectify the mind, cultivate the person, regulate the family, order the state, and bring peace to the world. Each item is the precondition of the one after it, so the sequence is a claim about where political order comes from — not from institutions imposed downward but from persons who have done the prior work. The sentence that gathers the whole chain is the one about roots and branches: knowing what comes first and what follows is close to the Way itself. Two nodes in the sequence carry the most weight in later commentary. The investigation of things became a battleground between Zhu Xi's reading, in which one inquires into the principles of external things, and Wang Yangming's, in which the work is rectifying the mind's own intentions — an argument that ran through Chinese thought for centuries. And sincerity is treated as the hinge between knowing and acting, the point at which an insight becomes a commitment.",
    works: [
      "Lǐjì, chapter 42 (Dàxué)",
      "Zhu Xi, Daxue zhangju",
      "Wang Yangming, Daxue wen (Inquiry on the Great Learning)",
    ],
    legacy:
      "As the opening text of the Four Books, the Dàxué gave East Asian education its most portable ideas — the sequence of cultivation, and the priority of rooting order in the person. Zhu Xi and Wang Yangming read it against each other, and that disagreement is one of the major fault lines in later Confucian philosophy. In the twentieth century it was also read as a civic text, its eight items supplying a vocabulary for arguments about whether social reform begins with the individual or with institutions.",
  },

  "The Book of Changes": {
    lifespan: "Core text c. 9th – 7th century BCE; commentaries c. 4th – 2nd century BCE",
    school: "Confucianism",
    jobTitle: "Divination manual with a philosophical commentary",
    knowsAbout: ["change", "perseverance", "virtue", "timing", "cycle"],
    overview:
      "The Yìjīng reached the modern reader in two strata that are often quoted as one. The older layer, the Zhōuyì, is a divination manual assembled in the Western Zhou period: sixty-four hexagrams, each with a statement and statements for its individual lines, used to answer questions put to it. The later layer, the Yì zhuàn or 'Ten Wings', is a body of interpretive essays traditionally ascribed to Confucius but generally dated from the Warring States into the early Han. It is the Wings that read the hexagrams cosmologically and ethically, and it is the Wings that supply almost every line of the Yìjīng an English reader is likely to know. The passages in this archive come from that commentary layer — the Commentary on the Images in particular, which draws a moral lesson from each hexagram's shape. The distinction is not pedantic: it is the difference between an oracle and a philosophy book, and the text is both, in layers.",
    ideas:
      "The book's central subject is change itself, treated as a process with a shape: things reach an extreme, turn, pass through, and settle. Its practical interest is in timing — in recognising where on that curve a situation sits, and acting accordingly rather than against it. The Commentary on the Images turns this into a programme of character: the hexagram for Heaven in motion yields the instruction to strengthen oneself without cease; the hexagram for Earth's receptivity yields the instruction to thicken one's virtue until it can bear things. Paired hexagrams are read as complementary dispositions, which is why the text's ethics is so often about the appropriate response rather than the right act. The Wings also develop the vocabulary of yīn and yáng as aspects of process rather than as substances, and the notion that exhaustion is not an end but a transition — the sequence that runs from exhaustion to change to passage to endurance.",
    works: [
      "Zhōuyì (Zhou Changes)",
      "Yì zhuàn (Ten Wings), including the Xìcí and the Dàxiàng",
      "Wang Bi, Zhouyi zhu",
      "Zhu Xi, Zhouyi benyi",
    ],
    legacy:
      "The Yìjīng is the most widely translated Chinese book after the Daodejing, and no other text has been so thoroughly assimilated into European and American esoteric reading. That reception is a caution rather than a credential: syncretic twentieth-century commentaries often present the Wings' cosmology as though it were the older manual's own voice, or attach to the hexagrams meanings the tradition never gave them. Inside China the book's standing was mostly philosophical and scholarly — the Song Neo-Confucians read it as metaphysics, and its vocabulary of change, tendency, and timing runs through later political thought.",
  },

  Guanzi: {
    lifespan: "Layers compiled c. 4th – 2nd century BCE",
    school: "Legalism",
    jobTitle: "Composite treatise on statecraft and economy",
    knowsAbout: [
      "governance",
      "economy",
      "livelihood",
      "ritual",
      "statecraft",
      "order",
    ],
    overview:
      "The Guanzi is a large compilation of eighty-six extant chapters covering statecraft, economics, cosmology, and self-cultivation, attributed to the statesman Guan Zhong — a minister of Qi who died in 645 BCE and who never wrote it. The received text was assembled over several centuries, in part by scholars associated with the Jixia Academy at Qi, and its chapters differ enough in vocabulary and position that their datings are usually given individually rather than for the work as a whole. That heterogeneity is the point of interest. One of the earliest Chinese texts to argue from the condition of people's lives to the condition of their morals, it contains the archive's most-quoted line, from the chapter On Shepherding the People: when the granaries are full, people know ritual and restraint. The claim is an argument about the material preconditions of virtue, and it is one of the few places in early Chinese thought where an economic thesis is stated so plainly.",
    ideas:
      "The Guanzi's most distinctive contribution is the ordering it proposes between material life and moral life. Against the view that ritual and propriety are what make a people orderly, the text argues that a population without food and clothing is not in a position to practise either — the granaries come first, and the ethical vocabulary follows. That is a claim about causation, and it is accompanied by practical proposals: managing grain and prices, the state's involvement in markets, and techniques for redistributing without provoking resentment. Alongside this the compilation carries Daoist-influenced discussions of quietude and the ordering of the mind, and chapters on law and administration that sit close to the Legalist school. The chapters do not agree with one another, which is why reading a single passage as 'the Guanzi's view' misstates the character of the book. On Shepherding the People is best read as one position in an argument the compilation is conducting internally.",
    works: [
      "Guanzi, On Shepherding the People (Mùmín)",
      "Guanzi, Shàofǔ and Qīngzhòng chapters (economics)",
      "Guanzi, Inner Cultivation (Nèiyè)",
      "Guanzi, The Heart of the Mind (Xīnshù)",
    ],
    legacy:
      "The Guanzi's economic chapters are regularly cited in modern scholarship on early Chinese political economy, and the granaries passage turns up in arguments about whether material security is a precondition of civic virtue — including in contemporary development and governance literature. Its Inner Cultivation chapters are studied alongside the Daodejing for what they show about the traffic between Daoist and Legalist ideas in the fourth and third centuries BCE.",
  },

  "Talmudic tradition": {
    lifespan: "Mishnah c. 200 CE; Jerusalem Talmud c. 400 CE; Babylonian Talmud c. 500–600 CE",
    school: "Rabbinic Judaism",
    jobTitle: "Rabbinical corpus of law, argument, and narrative",
    knowsAbout: ["doubt", "duty", "responsibility", "inquiry", "self", "time"],
    overview:
      "The Talmud is not one book. Under that name sit two distinct corpora — the Jerusalem Talmud, closed around 400 CE, and the Babylonian Talmud, closed roughly two centuries later — each woven from the same two elements: the Mishnah, a concise compilation of legal rulings redacted around 200 CE, and the Gemara, the centuries of discussion that follow it. The Mishnah is Hebrew; the Gemara is largely Aramaic in both corpora. The Babylonian recension covers sixty-three tractates and is the one usually meant in English. Reading it is unlike reading any other work in this archive: it proceeds by objection and reply, preserves minority opinions rather than resolving them away, and moves without warning between legal analysis, scriptural interpretation, anecdote, and proverb. Its unit of thought is the argument, not the sentence, and the discussion frequently ends in a stated uncertainty — teku, 'let it stand unresolved'.",
    ideas:
      "Several features of the corpus bear directly on how a line from it should be read. First, it preserves disagreement as content: an opinion is recorded together with the strongest case against it, and both remain available. Second, it assigns responsibility for study rather than for completion — the passage in Avot 2:16 that denies it is one's duty to finish the work while denying also that one is free to abandon it is a statement about obligation under conditions of incompleteness. Third, it takes ignorance seriously as a discipline: teaching the tongue to say 'I do not know' is advice about intellectual honesty in a tradition that treats proper doubt as a form of respect for the law. Alongside the legal reasoning runs a substantial wisdom literature in Avot and elsewhere, much of it concerned with the relation between the self and others — Hillel's sequence, which will not let either self-assertion or self-abnegation stand alone, is the best-known case. Any single quoted line usually belongs to one voice in a dispute that the page is conducting.",
    works: [
      "Mishnah Avot (Pirkei Avot)",
      "Babylonian Talmud, Berakhot",
      "Talmud Bavli / Talmud Yerushalmi",
      "Gemara and Mishnah (the two layers of the corpus)",
    ],
    legacy:
      "The Talmud is the foundational text of rabbinic Judaism and, in the form of its reasoning, one of the most distinctive intellectual inheritances in world philosophy: it models law as a continuing argument rather than as a settled code. Its study continues in the yeshiva and now in university departments, and its dialectical form has been taken up by modern philosophy of law and by comparative work on argumentation. For a reader encountering it in translation, the practical caution is that tractate and folio are part of the citation, because the two Talmuds and the several editions disagree on wording and do not always contain the same material.",
  },

  "Diamond Sutra": {
    lifespan: "c. 2nd – 4th century CE",
    school: "Mahayana Buddhism",
    jobTitle: "Perfection of Wisdom scripture",
    knowsAbout: ["emptiness", "attachment", "non-abiding", "concepts", "compassion"],
    overview:
      "The Vajracchedikā Prajñāpāramitā Sūtra — the Diamond Sutra — is a short Mahāyāna scripture in dialogue form, traditionally divided into thirty-two sections. It was composed in Sanskrit in roughly the second to fourth centuries CE, and it is the scripture that supplied the most widely cited fact in book history: a printed copy recovered from the Dunhuang caves carries a colophon dated 868 CE, making it the earliest dated printed book known. Across East Asia the text is read in Kumārajīva's Chinese translation of 401 CE rather than in the Sanskrit, and the section divisions and phrasing that readers encounter follow that version and its commentaries. Its central teaching is easy to state and unusually difficult to hold: that a mind which abides nowhere is the mind that the practice is asking for.",
    ideas:
      "The sutra's method is a repeated grammatical motion. A concept is asserted, then negated, then restated in a form that holds both: what is called a dharma is not a dharma, therefore it is called a dharma. A reader meeting one turn of that motion in isolation sees only contradiction or paradox; read across the whole short text, it is a training in how to use a concept without grasping it. The practical instruction that follows is to give rise to a mind that abides nowhere — a mind whose activity is not fixed on any object it has produced. The sutra is also insistent that merit lies in the practice rather than in the text as an object, a point it makes by comparing vast quantities of material offering unfavourably against the comprehension of a single verse. And throughout, the negations are not a denial of compassionate action: the text returns repeatedly to the vow to liberate all beings while denying that any being is thereby liberated, which keeps the act and removes the ledger.",
    works: [
      "Vajracchedikā Prajñāpāramitā Sūtra",
      "Kumārajīva, Chinese translation (401 CE)",
      "Asaṅga and Vasubandhu commentarial traditions",
      "Dunhuang printed copy (868 CE)",
    ],
    legacy:
      "The Diamond Sutra is one of the most commented-on texts in Buddhism, and among the most quoted inside the tradition — the Platform Sutra makes a verse from it the turning point of Huineng's awakening. Its print history makes it a landmark in the history of the book. In the twentieth century its instruction on non-abiding attracted philosophical readers well outside Buddhist studies, and it remains one of the few scriptures whose central chapter can be read approvingly by someone who accepts none of its metaphysics.",
  },

  "Mazu Daoyi": {
    lifespan: "709–788 CE",
    school: "Zen Buddhism",
    jobTitle: "Tang-dynasty Chan master, Hongzhou school",
    knowsAbout: ["ordinary mind", "Buddha-nature", "practice", "everyday activity"],
    overview:
      "Mazu Daoyi was a Tang-dynasty Chan master whose teaching community in Jiangxi became the largest of its time and, through its descendants, the ancestor of most later Chan lineages. He trained under Nanyue Huairang and is remembered above all for collapsing the distance between practice and ordinary activity: asked what the Way is, his recorded answer is that ordinary mind is the Way. Nothing he wrote survives. What exists is a body of recorded sayings compiled by his disciples and embedded in later transmission histories such as the Jingde Record of the Transmission of the Lamp, and the wording of a given exchange varies between those collections. He was given the posthumous title Daji Chanshi. His method was famously abrupt, and it included physical demonstration as readily as explanation.",
    ideas:
      "The single insight the tradition credits to Mazu is that the Way is not a state to be arrived at but the ordinary functioning of mind, so that the search for it is what keeps it hidden. The consequence he drew is that deliberate effort to become a Buddha is a form of obstruction, because it posits a gap between what one is and what one is trying to be. His exchanges therefore typically refuse the question's premise rather than answering it: when a monk asks about the meaning of the patriarch's coming from the west, the reply is often a concrete particular — a thing in front of them, a task at hand. This is not anti-intellectualism but a technique aimed at a specific error, and it depends on the student having studied long enough for the answer to land. The tradition also records more doctrinaire formulations from him, including that mind itself is Buddha, followed by sayings that withdraw even that claim — the pattern of asserting a teaching and then removing the place to stand on it.",
    works: [
      "Record of Mazu (Mazu yulu)",
      "Jingde Chuandenglu (Transmission of the Lamp)",
      "Zutang ji",
      "Hongzhou school lineage records",
    ],
    legacy:
      "Mazu's Hongzhou school reshaped Chan practice and its lineages lead to the great Song masters whose sayings fill the koan collections. Because his teaching survives only through communal records, his historical voice is harder to recover than his reputation suggests; what is securely his is a stance rather than a set of sentences. The phrase about ordinary mind remains one of the most quoted in Chan and Zen, and one of the most often read as a licence for passivity — a reading its recorded context does not support.",
  },

  "Baizhang Huaihai": {
    lifespan: "749–814 CE",
    school: "Zen Buddhism",
    jobTitle: "Tang-dynasty Chan master, monastic legislator",
    knowsAbout: ["work", "discipline", "monastic rule", "practice", "self-sufficiency"],
    overview:
      "Baizhang Huaihai was a Tang-dynasty Chan master and a disciple of Mazu Daoyi, remembered less for a metaphysical teaching than for a form of communal life. He is associated with establishing an independent Chan monastic code — a set of rules for communities that lived by their own labour rather than depending on alms and on the older Vinaya institutions — and with the principle that a day without work is a day without food. He died in 814 CE and received the posthumous title Dazhi Chanshi. The historical caution is specific and worth stating: the extant 'Pure Rules of Baizhang' is a later text, compiled and expanded well after his death, so the code as it survives is a tradition's retrospective attribution. What the transmission records present as his own behaviour — continuing to work in the fields in old age, and refusing food on a day he had not worked — is the concrete form the principle took.",
    ideas:
      "The teaching attached to Baizhang is that practice and ordinary labour are not two things. Where an earlier monastic economy had rested on the support of lay donors, his communities supported themselves, and the rule that makes this a discipline rather than an economy is the pairing of work with food. The point is not that labour is virtuous in itself but that a community which does not feed itself has divided its life into a spiritual part and a dependent part, and Chan practice claims exactly that division is the error. His recorded sayings deal with this in the vocabulary of the tradition — the mind, the Buddha, the ordinary act — but his institutional influence carried further than his doctrine: the model of the self-supporting Chan monastery outlasted the Tang, and the discipline of daily work is one of the very few things in Chan that observers from outside the tradition have consistently recognised as its own.",
    works: [
      "Recorded sayings of Baizhang",
      "Chanmen guishi (attributed)",
      "Baizhang qinggui (later compilation, traditionally ascribed)",
      "Jingde Chuandenglu",
    ],
    legacy:
      "The monastic pattern credited to Baizhang shaped the great Zen monasteries of China, Korea, and Japan, where the pairing of manual work with practice remained a defining feature — and through the Japanese monastic and later lay movements it reached twentieth-century Western accounts of Zen as 'a day without work, a day without food'. Because the surviving rule text is later than the master, scholarship distinguishes between the institution's real historical development and the ascription of the whole code to one Tang figure.",
  },

  "Linji Yixuan": {
    lifespan: "d. 866 CE",
    school: "Zen Buddhism",
    jobTitle: "Tang-dynasty Chan master, founder of the Linji school",
    knowsAbout: [
      "direct pointing",
      "authority",
      "independence",
      "ordinary activity",
    ],
    overview:
      "Linji Yixuan, who died in 866 CE, founded the Linji school — Rinzai in Japanese — one of the two Chan lineages that survived the Song reforms and the one that shaped Japanese Zen most deeply. He trained under Huangbo Xiyun after an initial period under Baizhang's disciple Chengshen, and his teaching community near modern Zhengding was known for its severity. The Record of Linji was compiled by his disciples after his death and then edited, substantially, through the Song dynasty; the received text is therefore a communal and later construction rather than a transcript. Two of his formulations are among the best known in Chan: that there is a true person of no rank who ceaselessly comes and goes through the gates of your face, and the instruction that wherever you stand is real if you make yourself master of it. He was posthumously given the title Huizhao Chanshi.",
    ideas:
      "Linji's teaching is aimed at a specific failure: the tendency to treat an authoritative other — a Buddha, a patriarch, a scripture, a teacher — as a place to stand instead of as one's own activity. His celebrated instruction to kill the Buddha on meeting him is not iconoclasm for its own sake but the point in its most compressed form, and it is immediately followed by the same instruction for patriarchs and arhats, which shows it is a method rather than a target. Against this, his positive teaching is that ordinary activity is already complete and only needs to be occupied without hesitation. The Record also codifies technique: the three mysteries, the four shouts, and the demanding of an answer before the question is finished, all of which are ways of interrupting the reflex of explanation. Notably, the record's sharpest passages sit alongside a repeated, and less quoted, warning against confusing freedom with licence — Linji's own practice was closer to strict discipline than the dramatic sayings suggest.",
    works: [
      "Record of Linji (Linji lu)",
      "Zhenzhou Linji Huizhao chanshi yulu",
      "Wudeng huiyuan (Five Lamps)",
      "Later Song-dynasty editions and the Japanese Rinzai transmission",
    ],
    legacy:
      "The Linji line, and its Japanese Rinzai form, is the tradition most Western readers have in mind when they speak of Zen at all — the koan, the shout, the iconoclastic answer, and much of the aesthetic vocabulary of Zen all arrive through it. His sayings were canonised in the koan collections and elaborated by Hakuin and others. Because the text is a posthumous compilation edited over centuries, scholars treat the received Record as evidence for the tradition's self-image at least as much as for the ninth-century master, and that caution applies to any line quoted from it.",
  },

  "Zhaozhou Congshen": {
    lifespan: "778–897 CE",
    school: "Zen Buddhism",
    jobTitle: "Tang-dynasty Chan master",
    knowsAbout: ["Buddha-nature", "doubt", "language", "ordinary attention"],
    overview:
      "Zhaozhou Congshen lived to a traditional ninety-nine years, from 778 to 897, and the length of his life is part of his standing: he came to teaching unusually late and is remembered as the patriarch of a temperament rather than of an institution. He trained under Nanquan Puyuan. No writings are ascribed to him. His sayings survive as items embedded in the transmission records and in the great gong'an anthologies, and this has a consequence for citation: the wording of the same exchange differs between the Gateless Barrier, the Blue Cliff Record, and the later collections, and the commentary a Song compiler attached to it is a separate layer again. Three of his replies are canonised — that a dog has no Buddha-nature, though the tradition itself teaches that every being has one; an instruction to go and drink tea; and, asked why Bodhidharma came from the west, a reference to the cypress tree in the courtyard.",
    ideas:
      "Zhaozhou's most studied exchange is the first case of the Gateless Barrier. A monk asks whether a dog has Buddha-nature and receives one syllable: wú. The difficulty is that the received doctrine answers yes, so the reply is not information but a barrier — the task is not to decode it but to notice the demand for an answer it refuses to satisfy. Later tradition reads the syllable as an instruction to stop conceptualising rather than as a denial, which is why it resists translation and usually stays untranslated. His other famous replies work the same way: 'go drink tea' is not a brush-off but an instruction to return to what is in front of the questioner, and the cypress tree answers a doctrinal question with an ordinary particular that cannot be paraphrased without losing its point. His exchanges are notably short and notably domestic — the tea, the tree, the everyday task — and the tradition's consistency about his temperament suggests that this was the method and not merely the anecdote.",
    works: [
      "Record of Zhaozhou",
      "Wumen Huikai, Gateless Barrier, case 1",
      "Bi and Yuanwu, Blue Cliff Record",
      "Wudeng huiyuan (Five Lamps)",
    ],
    legacy:
      "Zhaozhou is the most quoted master in the gong'an literature after Linji, and the syllable wú has become the standard entry point for koan practice in both Chinese Chan and Japanese Zen, where it is known as the first case a student works. Because the exchanges are preserved by compilers who were also interpreters, modern scholarship reads them as the product of a transmission process: what survives is a tradition's selection of memorable replies, and the attributions carry that qualification.",
  },

  "Yunmen Wenyan": {
    lifespan: "c. 862/864–949 CE",
    school: "Zen Buddhism",
    jobTitle: "Tang–Five Dynasties Chan master, founder of the Yunmen school",
    knowsAbout: ["wordlessness", "everyday life", "presence", "direct speech"],
    overview:
      "Yunmen Wenyan, whose dates are usually given as around 862 or 864 to 949, founded the Yunmen school, one of the five houses of Chan. He trained under Muzhou Daozong and Xuansha Shibei and taught at Yunmen mountain in Guangdong, where his community attracted students from across southern China. No writings are his; what survives comes through the transmission records and the school's own anthologies, and his sayings circulated as instruction recorded and selected by his community. He was given the posthumous title Kuangzhen Chanshi. His reputation rests on two things: extreme economy of speech — his technique was nicknamed the one-word barrier, because a single word or a single concrete noun was often his whole answer — and an unusual insistence that the ordinary passage of days is already the whole matter.",
    ideas:
      "Yunmen's method is compression to the point where explanation becomes impossible, and his most quoted line shows why that is a teaching and not a mannerism: every day is a good day. Read flatly it is a platitude, and the tradition has never let it be one — the point is the word 'every', which includes the days that go badly. His other celebrated replies work by answering a general question with a specific object: asked the traditional questions of doctrine, a monk receives 'cake', a thing in the ordinary world that cannot be turned into a concept without being abandoned. He compared his own method to a flash of lightning — the answer arrives before the question can be prepared for, precisely so that the habits of interpretation have no time to work. In the gong'an collections he is also the master whose cases most resist commentary, which is why later compilers' verses are often more quoted than his own replies.",
    works: [
      "Record of Yunmen (Yunmen kuangzhen chanshi guanglu)",
      "Yunmen yulu",
      "Wudeng huiyuan (Five Lamps)",
      "Yuanwu, Blue Cliff Record (Yunmen cases)",
    ],
    legacy:
      "Yunmen's school declined after the Song but its cases remain central to the koan literature, and his sayings are among the most anthologised in Chan. The nickname for his method survived the school that produced it: a syllable that opens rather than closes is still a standard way of describing what a teacher is for. As with all this group, the text is a later compilation and the attributions are the tradition's.",
  },

  "Wumen Huikai": {
    lifespan: "1183–1260 CE",
    school: "Zen Buddhism",
    jobTitle: "Southern Song Chan master, compiler of the Gateless Barrier",
    knowsAbout: ["koan", "barrier", "doubt", "attention", "ordinary life"],
    overview:
      "Wumen Huikai lived from 1183 to 1260, a Southern Song Chan master whose importance rests on a single act of editorship: in 1228 he completed the Wúménguān — the Gateless Barrier — a collection of forty-eight cases drawn from earlier Chan records, each with his own commentary and a verse. Almost every case cited in his name in this archive comes from that compilation, so the collection is where his teaching is, and the distinction between a case he selected and the comment he wrote on it matters for anyone quoting him. He trained under Yuelin Shiguan and was given the posthumous title Foguo Chanshi. The book's preface contains the line that names the whole enterprise and that has become one of the most quoted sentences in Zen: the Great Way has no gate, and yet a thousand paths lead into it.",
    ideas:
      "The Gateless Barrier is not an anthology for reading; it is an instrument, and its structure is pedagogical. Each case presents an exchange in which a question is answered in a way that refuses to satisfy it, and Wumen's commentary then sets the reader a task rather than explaining the exchange — most famously with case 1, where the whole instruction is to hold the syllable wú and to bring it before oneself continuously, without letting it become a verbal puzzle. His preface names the difficulty honestly: passing the checkpoint is what matters, and the checkpoints are notional. His verse on the ordinary passage of seasons — a hundred flowers in spring, a cool breeze in summer — is usually quoted alone, and it reads differently once it is seen as a comment attached to a case about a dog and a syllable. The collection's authority is as an instrument whose cases had already circulated for centuries, assembled and annotated by a compiler who is deliberately part of the argument.",
    works: [
      "Wúménguān (Gateless Barrier, 1228), 48 cases",
      "Wumen Huikai, commentary and verses",
      "Zongshao, late-Song epilogue",
      "Dahui and earlier Chan case collections",
    ],
    legacy:
      "The Gateless Barrier is with the Blue Cliff Record the most-studied koan collection in East Asia and the standard introduction to koan practice in Western Zen. Its cases, and Wumen's comments on them, are the origin of a large share of the Zen material that circulates in English — which is also why the attributions need care: a case's original speaker, the collector's commentary, and the verse are three different things, and popular quotation frequently merges them.",
  },
};
