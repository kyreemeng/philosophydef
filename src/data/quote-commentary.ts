/**
 * Per-quotation commentary.
 *
 * Before this file existed, a quotation page assembled its commentary from the
 * thinker guide and the theme guide, so every passage filed under "freedom"
 * displayed the same two sentences. That repetition is what made the pages
 * look interchangeable to a reader — and to a quality rater.
 *
 * Each entry below is written for one specific passage. Two fields:
 *
 *   interpretation — what the claim is doing in its own argument: what it
 *     distinguishes, what it assumes, what it would deny.
 *   insight — why it still bears on a reader now, stated concretely rather
 *     than as encouragement.
 *
 * Both together stay under roughly 200 words. Longer commentary was tried and
 * cut: past a few sentences the text starts restating the quotation instead of
 * explaining it.
 *
 * Attribution is checked rather than smoothed over. Where a famous line is a
 * later summarizer's phrasing rather than the author's own sentence, the
 * interpretation says so — a quotation archive is worth little if it launders
 * misattributions into facts.
 */

export type QuoteCommentary = {
  interpretation: string;
  insight: string;
  /** Date the commentary was written (YYYY-MM-DD); older entries predate the field. */
  written?: string;
};

export const quoteCommentary: Record<string, QuoteCommentary> = {
  Q0001: {
    interpretation:
      "Socrates says this while proposing a penalty after his conviction, so it is not a slogan about self-improvement but a claim about what a human life is for. The Greek verb behind \"examined\" belongs to the practice of testing a claim by questioning it. Socrates is arguing that a life run on untested opinions is not merely worse than a considered one, but not properly human, because the capacity to give an account of oneself is what distinguishes a person from an animal or a machine. The sentence is severe on purpose: he is about to tell the court he will not stop doing this even if acquitted on that condition.",
    insight:
      "The test is uncomfortable because it applies to opinions we hold for social reasons. A useful version: take one conviction you defend often, and ask what evidence would change it. If nothing could, you are not holding a view — you are being held by one.",
  },
  Q0140: {
    interpretation:
      "In the Analects the \"Way\" (dao) is not a doctrine but a pattern of right order that can be perceived in conduct, ritual, and governance. Confucius is not praising early death; he is ranking the objects of concern. If understanding the Way is what makes a life intelligible, then once it is genuinely heard, duration adds nothing comparable. The morning-evening construction makes the point by compressing time to nothing, so the listener cannot treat the claim as a trade to be calculated.",
    insight:
      "Read it as a question about attention rather than mortality: what would you need to understand for the rest of your life to feel complete rather than merely longer? Most people never name that thing, and so accumulate years without the sense of arrival.",
  },
  Q0183: {
    interpretation:
      "Aquinas is answering an objection that grace overrides or cancels human nature. His position is that grace presupposes nature: what is perfected must continue to exist and act, otherwise the word is being used loosely. The formula does real work in his system — it lets him hold that human capacities are genuinely damaged by sin without concluding they are destroyed, which is why moral effort and education still matter theologically.",
    insight:
      "It is also a constraint on any reform programme: if you want to change people, build on what they already are rather than treating their existing motives as obstacles to be replaced. Programs that assume the opposite tend to produce compliance, not change.",
  },
  Q0062: {
    interpretation:
      "The opening line of The Social Contract states the problem the book tries to solve rather than a conclusion. \"Born free\" describes a state prior to lawful authority; \"everywhere in chains\" describes the actual condition of people under existing governments. The question Rousseau then asks is what could make obedience legitimate rather than merely habitual. The line is often quoted as a defence of rebellion, but the book is equally suspicious of mere force and spends most of its argument trying to identify authority a person could rationally consent to.",
    insight:
      "The persistent question is not whether constraints exist — they always do — but which ones you could endorse on reflection. That reframing separates the useful complaint from the merely resentful one.",
  },
  Q0102: {
    interpretation:
      "Marcus Aurelius is reasoning against a private, self-contained happiness. The image is from Stoic cosmology: a human being is a part of a larger whole, as a bee belongs to a hive, and a part cannot flourish in a way that damages the whole it belongs to. The line appears in his notebooks as a reminder to himself, which is why it is compressed — it is a rule for daily conduct, not a published argument.",
    insight:
      "It supplies a practical test for decisions that feel purely personal: if everyone affected made the same choice you are making, would the arrangement still work? The answer often settles questions that self-interest alone leaves open.",
  },
  Q0197: {
    interpretation:
      "Weil is writing to a friend who was severely wounded, and the sentence belongs to her claim that attention is a moral capacity rather than a cognitive one. To attend is to hold another person in view without immediately converting what you see into your own purposes. She calls it rare because most apparent generosity costs the giver little attention — money, sympathy, agreement. She calls it pure because it cannot be faked for long and does not flatter the one who gives it.",
    insight:
      "The everyday failure is listening while preparing a reply. Weil's standard is narrower and harder: can you stay with what someone is actually saying long enough for it to change what you were about to say?",
  },
  Q0032: {
    interpretation:
      "Seneca is using a physical image to rule out a shortcut. The stars are not reached by effortlessness but by a path that does not admit of ease, and the claim is that excellence in anything difficult has the same structure. In Stoic terms the obstacle is not external circumstance but the cultivation of judgment, which cannot be acquired by a single decision. The line is often quoted as encouragement; in context it is closer to a warning about the shape of the work.",
    insight:
      "It is a useful corrective to methods built on removing friction. What you actually want is usually on the far side of a difficulty you cannot design away, so the practical question is which friction is worth keeping.",
  },
  Q0019: {
    interpretation:
      "Epicurus is arguing that the fear of death is a mistake about what death is, not a failure of courage. His reasoning is that harm requires a subject who can experience it: once the organism has dissolved there is no one left for death to happen to. So the terror people feel is about anticipation, not about death itself. The point is therapeutic — he wants to remove a fear that he thinks ruins a life without any corresponding benefit.",
    insight:
      "The argument is more limited than it sounds: it addresses fear of being dead, not fear of dying, and not the grief of those left behind. Used precisely, it removes one specific dread and leaves the others intact.",
  },
  Q0005: {
    interpretation:
      "In the Republic this is a definition proposed in the course of building an ideal city, and it is deliberately narrow. Plato is not offering a theory of fairness between persons; he is describing a condition of a well-ordered whole in which each part performs its proper function without interfering with the others. Justice in a soul and justice in a city are the same structural property. The definition is incomplete by modern standards, which is part of why it generates the argument that follows.",
    insight:
      "It still gives a sharp diagnostic: much of what we call injustice is meddling — taking on what is not ours. Before asking whether a situation is fair, ask whether people are doing what is actually theirs to do.",
  },
  Q0346: {
    interpretation:
      "James is making a claim about the economy of attention. In the Principles he describes consciousness as selecting from a field far larger than it can hold, so judgement is not mainly about adding considerations but about excluding them. Wisdom on this account is a skill of selection rather than accumulation. The formulation is pragmatist: an idea's value shows up in what it lets you disregard, not only in what it asserts.",
    insight:
      "Most advice about thinking concerns gathering more information. James's point is that the bottleneck is usually the opposite — deciding what does not matter, then accepting the cost of that decision.",
  },
  Q0362: {
    interpretation:
      "Schiller's line is usually read as resignation, but the mechanism is worth stating: stupidity here means not low intelligence but an inability to follow an argument one is being shown. Where a person will not or cannot track reasons, there is nothing for a better reason to engage, so the conflict is not one that argument can win. The gods are invoked precisely to make the point that even overwhelming power meets the same limit.",
    insight:
      "It clarifies a common frustration: explaining harder to someone who is not tracking the explanation wastes effort. The useful move is to find out whether the disagreement is about reasons at all.",
  },
  Q0051: {
    interpretation:
      "Montaigne takes an ancient philosophical claim and makes it literal. The tradition held that philosophy is preparation for death, meaning that examining one's assumptions removes the terror that makes death dominate a life. Montaigne's Essays test this against his own experience, including serious illness, so the sentence is an experiment rather than a doctrine. Learning to die, for him, means learning to stop treating mortality as an interruption.",
    insight:
      "Read as a reversal: we usually treat death as the event that ends a life and so put off living until it is settled. Montaigne's claim is that settling it is what frees the intervening years.",
  },
  Q0120: {
    interpretation:
      "This is the core of James's theory of truth and the sentence most often quoted out of his argument. He is denying that an idea is true by corresponding to a ready-made reality and proposing instead that truth is something that happens to an idea when acting on it works out. \"Made true by events\" means verification is a process in time, not a property an idea already has. Critics have argued this conflates truth with usefulness, and James spent later lectures trying to answer that objection.",
    insight:
      "The practical version: treat a belief as a hypothesis whose value is shown by where acting on it leads. That stance makes revision cheaper, since being wrong is information rather than a defeat.",
  },
  Q0073: {
    interpretation:
      "Zarathustra's declaration is about the human as a thing to be surpassed, not improved. The German verb implies going over and beyond, so the claim is that the human condition is a condition to be left behind. What follows in the book is the figure of the overman as whatever comes after, defined by self-creation rather than by any fixed nature. The sentence is provocative because it refuses to treat human nature as a standard.",
    insight:
      "It raises a question worth asking without the mythology: are you trying to become a better instance of what you already are, or something you cannot yet describe? The two produce very different plans.",
  },
  Q0393: {
    interpretation:
      "Locke is stating the constraint that makes a political community possible. Equality here is a moral claim — no one has natural authority over another — not a claim that people are alike in ability. From it he derives the limits on what anyone may do to another, and independently, the requirement that government exist to protect those same things. The list — life, health, liberty, possessions — is deliberately concrete so that the limit can be applied.",
    insight:
      "The structure is worth noticing: a right is stated by naming what others may not do to you. Abstract declarations of rights tend to be unenforceable; specified ones can be argued about.",
  },
  Q0436: {
    interpretation:
      "Aristotle's doctrine of the mean is frequently misread as moderation for its own sake. The mean he describes is relative to the agent and the situation — the right amount is not the midpoint of a scale but the point between excess and deficiency that a practically wise person would choose. Courage, for instance, is a mean between rashness and cowardice, but it is closer to rashness than to caution. It is a claim about hitting the right point, not about avoiding extremes.",
    insight:
      "The practical question is not \"am I being moderate?\" but \"what would be too much and too little here, for me?\" That version is answerable; the moderate-sounding one is not.",
  },
  Q0336: {
    interpretation:
      "Hume's sentence reverses the usual hierarchy in which reason governs passion. His argument in the Treatise is that reason alone cannot initiate action because it deals in relations of ideas and matters of fact, neither of which contains a motive. Motivation comes from desire or aversion; reason's job is to work out means and to correct factual errors about them. Calling reason the slave of the passions is deliberately shocking, but the claim is structural rather than a recommendation to stop thinking.",
    insight:
      "It explains why argument alone rarely changes anyone's mind. If a belief is held because it serves a desire, the productive question is what that desire is — not what further evidence might be supplied.",
  },
  Q0423: {
    interpretation:
      "Wittgenstein is giving a method, not an anti-intellectual slogan. In the Investigations he argues that philosophical problems arise when we theorise about how language must work instead of looking at how it is actually used. \"Don't think, but look!\" instructs the reader to replace speculation with description of real cases. The point is that the confusion is generated by the theory, so more theory deepens it.",
    insight:
      "It transfers well beyond philosophy: when a question will not resolve, check whether it was generated by a model rather than by anything observed. If so, the way forward is usually to describe the cases first.",
  },
  Q0395: {
    interpretation:
      "This sentence is widely attributed to Voltaire but was written by his biographer Evelyn Beatrice Hall in 1906, as a summary of his attitude rather than a quotation of his words. It remains a clear statement of the principle he defended in specific cases, including the Calas affair. The distinction matters: the phrasing is Hall's, the commitment it describes is Voltaire's. Attribution matters more than usual here because the line is cited as evidence of what he actually said.",
    insight:
      "The principle survives the correction: the right defended belongs to the person you think is wrong, or it is not this principle. Defending speech you agree with tests nothing.",
  },
  Q0348: {
    interpretation:
      "Russell places this at the start of his Autobiography as a summary rather than a confession. The three are ordered: love sought as relief from isolation, knowledge as an end in itself, and pity as what returns him from abstraction to other people. He describes them as governing forces — motives he did not choose — and the third is what keeps the other two from becoming self-contained. The passage is notable for admitting that a life of thought did not by itself settle the problem of suffering.",
    insight:
      "It is a rare honest accounting: he names the motive that pulled him outward, not only the ones that made him distinguished. Worth asking which of your own motives does that.",
  },
  Q0093: {
    interpretation:
      "Frankl writes this as a psychiatrist who had survived the camps, so the claim is clinical rather than inspirational. Everything external — family, property, health, even the ability to work — was in fact taken from the prisoners he describes. What he reports remaining is not optimism but the position one takes toward conditions one did not choose. He calls it the last of the freedoms in a precise sense: it is the one that cannot be removed by any further loss, because its exercise requires nothing external.",
    insight:
      "The claim is narrower than it is usually quoted as being: attitude is not a substitute for action, and Frankl does not suggest that suffering is worthwhile. It marks the point where choice still exists after everything else has been removed.",
  },
  Q0148: {
    interpretation:
      "Mencius is defending his claim that human nature tends toward goodness, and this is his argument from reciprocity rather than from sentiment. The structure is conditional: love and respect reliably return, so the failure of that return is evidence of something gone wrong rather than of human nature. In Mencius's usage the terms carry obligation, not only feeling — to respect others is to acknowledge their standing. He is making the cultivated person's behaviour the test of the theory.",
    insight:
      "It reframes a common complaint. Where return does not come, Mencius would have you ask what failed in the practice rather than conclude that people are ungrateful.",
  },
  Q0415: {
    interpretation:
      "Liang Qichao wrote this in 1900 as an argument about national renewal after China's defeats. The claim is not that young people are superior, but that the condition of a state is determined by the formation of its citizens, so reform must be directed at that formation. The parallel clauses make the dependence explicit: each quality of the nation is traced back to a quality of its youth. It is a claim about where to invest, addressed to a readership deciding what to do.",
    insight:
      "It remains a useful question for any institution: what you become depends on what you form, so the effort aimed at outcomes is often spent in the wrong place.",
  },
  Q0259: {
    interpretation:
      "This is Hegel's most misquoted sentence. In the Philosophy of Right preface he distinguishes the actual (wirklich) from the merely existent: not everything that happens is actual in his sense, only what has realised its rational structure. So the line is not a blessing on the status quo — it is a criterion for judging it. The second clause does the work: what counts as genuinely actual is what withstands rational scrutiny, which is why the formula can be used critically.",
    insight:
      "Read correctly it supplies a test rather than a comfort. The question it poses of any arrangement is whether it has earned its standing or merely persists.",
  },
  Q0002: {
    interpretation:
      "The sentence summarises Socrates' position at his trial rather than quoting Plato directly: after consulting politicians, poets, and craftsmen, he concludes that his superiority consists solely in not claiming knowledge he lacks. The claim is methodological, not sceptical. Socrates does not deny that knowledge is possible; he denies that he has it, and treats that denial as the starting point of inquiry. The Oracle's saying that no one is wiser becomes, on his reading, a reason to keep examining.",
    insight:
      "The distinction worth keeping is between holding a view and knowing it. Most disagreements would shrink if people stated which of the two they were doing.",
  },
  Q0196: {
    interpretation:
      "Buber's sentence is the thesis of I and Thou in miniature. He distinguishes two modes: treating something as an \"it\" — an object to be classified, used, or studied — and entering into relation with it as a \"thou\". His claim is that genuine living occurs in the second mode, and that a life organised entirely around the first is diminished even when it is successful. The word \"meeting\" is deliberate: relation is an event, not a property you possess.",
    insight:
      "It gives a way to notice the shift: are you dealing with this person, task, or place as something to be managed, or as something you are present to? The difference shows up in attention before it shows up in outcomes.",
  },
  Q0397: {
    interpretation:
      "Goethe gives this to Faust at a moment of paralysis, and it describes a divided will rather than a moral failing. One impulse reaches beyond the limits of a human life; the other clings to what can be secured. Faust's tragedy is not that he has two souls but that the conflict prevents either from governing, so he neither commits nor rests. The line is diagnostic — Goethe is showing what the condition costs before offering any resolution.",
    insight:
      "It names a recognisable state: the exhaustion comes less from wanting two things than from the inability to choose, which turns either option into a loss.",
  },
  Q0101: {
    interpretation:
      "Epictetus is stating the core Stoic technique in a single rule. The claim is that suffering comes from the gap between how things are and how you demand they be, so there are two ways to close it: change the world, or change the demand. He is not recommending passivity — the Enchiridion assumes you act — but noting that the second route is always available and the first often is not. \"Flow\" translates a term for a life without internal friction.",
    insight:
      "It is a test of where effort goes. Before trying to fix a situation, ask whether what hurts is the situation or your requirement that it be otherwise.",
  },
  Q0023: {
    interpretation:
      "This is the opening move of the Enchiridion and the premise of Stoic therapy. Epictetus separates the event from the judgement about it — \"my son is dead\" is one thing, \"this is a disaster\" is an addition. His claim is that disturbance is caused by the addition, not the event, and that the addition is something we supply. The point is not that loss is unreal but that our reaction contains a claim we have not examined.",
    insight:
      "The practical version is to state what happened without the verdict attached. That separation is where a response becomes a choice rather than a reflex.",
  },
  Q0448: {
    interpretation:
      "Schopenhauer is diagnosing a specific error: mistaking the limits of one's own experience for the limits of what exists. The mechanism is that we cannot see outside our own field of vision, and the absence of anything visible is easily read as an absence of anything. He applies it to disagreements about what is possible, where each party treats their own horizon as the boundary of the world. The remark is aimed at complacency about the range of one's own experience.",
    insight:
      "It is a good check on confident claims about what cannot be done. The question it raises is whether the limit is in the thing or in what you can see from where you stand.",
  },
  Q0283: {
    interpretation:
      "Mencius is making a claim about where to look. \"All things are complete in me\" does not mean the world is inside the mind; it means the resources for judging and acting are already present, so the work is recollection rather than acquisition. Turning inward and finding sincerity describes the practice of examining one's own reactions until they line up. The delight he mentions is the sign that the account is right, not a reward offered for effort.",
    insight:
      "It inverts the usual programme: instead of gathering principles, check whether you already act on ones you have not acknowledged.",
  },
  Q0304: {
    interpretation:
      "Linji is addressing students who kept locating authority elsewhere — in a teacher, a text, a future attainment. His instruction is that wherever you actually are is the only place from which anything can be done, so deferring until conditions improve means never acting. \"Master\" here means not deferring to circumstances. The second clause denies that there is a more authentic location you have to reach first.",
    insight:
      "It cuts against the habit of waiting to be ready. The only position from which you can act is the one you are in.",
  },
  Q0003: {
    interpretation:
      "Socrates defends this to Callicles in the Gorgias, and it is the most counter-intuitive of his claims. His argument is that injustice damages the soul of the one who commits it, and the soul is more important than the body or property, so the doer is worse off than the victim. He also argues it is worse to escape punishment than to suffer it, on the grounds that punishment treats the damage. The position follows from taking seriously that character is what a person most fundamentally has.",
    insight:
      "It is testable in a specific way: consider what repeated dishonesty does to the person practising it, independent of whether they are caught.",
  },
  Q0439: {
    interpretation:
      "Marcus uses body parts as his example because they cannot function alone: feet, hands, and eyelids only work in coordination. His claim is that human beings are the same kind of thing — parts of a whole whose good is not separable from the whole's. He is arguing against the idea that one could flourish at the expense of others, not against self-concern. Written as a reminder to himself, it is compressed into an image rather than an argument.",
    insight:
      "It sets a condition on any advantage: if it requires others to fail, it is not the kind of good he thinks you can have.",
  },
  Q0352: {
    interpretation:
      "Camus writes this in an essay about returning to Algeria during war, so the summer is not a feeling but something he found under conditions that contradicted it. The claim is about what survives: an invincible season is a capacity that persists through circumstances that should have extinguished it. Camus is careful not to turn this into consolation — the winter remains real, and he does not claim the summer explains or redeems it.",
    insight:
      "Its value is as a description rather than a remedy. It notes that capacity and circumstance are separable, which is worth knowing while the circumstances are still bad.",
  },
  Q0013: {
    interpretation:
      "Aristotle's claim in the Politics is that a human being is the kind of animal whose capacities are realised only in a polis — a community with shared rule. The argument is that speech and moral reasoning are social in the way that a bee's activity is not: they require others to whom one is answerable. So the point is not that people like company but that the specifically human functions cannot be exercised alone. Someone capable of living outside that is, on his account, either beast or god.",
    insight:
      "It reframes solitude as a cost rather than a preference. The question is which of your capacities go unused when you are not answerable to anyone.",
  },
  Q0356: {
    interpretation:
      "Popper is describing how inquiry actually proceeds rather than prescribing a method. His claim is that science does not start from observations but from stories we tell about the world, and that the distinctive move is not to abandon myths but to criticise them. What matters is that a conjecture be stated precisely enough to be refuted. The sentence is aimed at the picture of science as induction from neutral data, which he thinks is neither accurate nor possible.",
    insight:
      "The transferable point is that the quality of a belief depends on whether it can be tested, not on whether it began as a guess.",
  },
  Q0355: {
    interpretation:
      "Popper is arguing against the trade-off most people assume. Planning for security tends to centralise authority, and he holds that the result is less secure, because a system that cannot be corrected by those living under it makes worse mistakes and cannot be told. His claim is that freedom is not the opposite of security but a mechanism for achieving it. The argument is institutional rather than moral: the question is which arrangements can detect and repair their own failures.",
    insight:
      "It applies wherever reliability is the goal: the systems that fail least are usually the ones that can hear about their failures soonest.",
  },
  Q0146: {
    interpretation:
      "Mencius lists hardships — hunger, poverty, failure — and reads them as the formation required for responsibility. The claim is not that suffering is good in itself but that the capacities a great task needs are developed under pressure that removes easier options. The structure is conditional: Heaven is \"about to\" confer responsibility, so the hardship is preparatory rather than punitive. He is giving an account of why difficulty often precedes usefulness in a person's life.",
    insight:
      "It is a claim about formation, not a promise. The distinction matters: the same hardship that forms one person embitters another, so the outcome is not guaranteed by the event.",
  },
  Q0215: {
    interpretation:
      "Al-Ghazali is stating a requirement of his ethics rather than praising balance. Knowledge without action is vain because, in his account, the purpose of knowing the good is to do it, so unused knowledge is a failure of its own point. Action without knowledge is dangerous because effort unguided by understanding can do harm while feeling righteous. The two clauses are asymmetric: the first is wasted, the second is destructive.",
    insight:
      "It gives a sharper standard than \"practice what you preach\": check whether what you know has changed what you do, and separately, whether what you are doing rests on anything you have examined.",
  },
  Q0437: {
    interpretation:
      "Epicurus is redefining the goal of life, and the sentence sounds more hedonistic than it is. His claim is that natural desires are for the absence of discomfort, not for intensity, and that these are finite and easy to satisfy. Once hunger, thirst, and cold are removed, further accumulation does not add to the body's satisfaction. The point is therapeutic: by showing that the target is limited, he removes the rationale for endless acquisition.",
    insight:
      "It supplies a stopping rule, which is what most accounts of desire lack. If the aim is the absence of a discomfort, you can know when you have arrived.",
  },
  Q0432: {
    interpretation:
      "Bacon is asserting the principle that would later be called the unity of knowledge and power. His claim in the Novum Organum is that to know a cause is to be able to produce the effect, so ignorance and impotence have the same root. This redirects the aim of inquiry from contemplation to intervention, which is why it marks a break with the earlier tradition. He is careful that the knowledge in question is of causes, not of observed correlations.",
    insight:
      "It sets a demanding test for understanding: if you cannot produce or alter the effect, what you have may be familiarity rather than knowledge.",
  },
  Q0260: {
    interpretation:
      "Kierkegaard's definition in The Sickness unto Death is deliberately formal. A self is not a thing but a relation: consciousness relating to itself, and in doing so relating to what established it. The point of the formulation is that a self can be misrelated — despair is a failure in how the relation is held rather than a lack of something. He can therefore describe despair without assuming a fixed human nature, which is what makes the account applicable to people who feel no particular distress.",
    insight:
      "It reframes a question people usually ask about identity. Instead of \"what am I?\", the question becomes \"how am I holding myself?\" — which is something you can be doing badly without knowing it.",
  },
  Q0258: {
    interpretation:
      "In the Phenomenology this is the point where self-consciousness discovers it cannot certify itself alone. Hegel's argument is that recognition sought by cancelling the other fails, because the one cancelled cannot confer it. So satisfaction — the certainty the subject was after — is attainable only from another who is likewise free. The claim is structural: self-certainty turns out to require a social condition rather than being prior to it.",
    insight:
      "It explains a familiar failure: attempting to establish your standing by dominating others cannot deliver what it is after, because the recognition given under compulsion is not the thing wanted.",
  },
  Q0114: {
    interpretation:
      "Montaigne is distinguishing duration from use. His claim is that a long life is not thereby a full one, and that the relevant measure is what was done with the time rather than how much there was. He is writing in a tradition that treated philosophy as preparation for death, but he tests it against ordinary experience rather than accepting it. The sentence is characteristic in that it takes a grand claim and applies it to a mundane standard.",
    insight:
      "It reframes the goal: the aim is not more time but a better ratio of attention to time, which is available now rather than later.",
  },
  Q0010: {
    interpretation:
      "This is Aristotle's answer to the question the Ethics opens with. His method is to identify a function distinctive to human beings and then ask what doing it well would be; the answer is activity of soul in accordance with virtue. Two features matter: happiness is an activity rather than a state you can possess, and it spans a life rather than a moment. The definition excludes both pleasure and honour, which he examines and sets aside as incomplete.",
    insight:
      "The demanding part is that it is an activity. On this account you cannot have achieved it while at rest, and a single good period does not settle it.",
  },
  Q0447: {
    interpretation:
      "This is the formula Kant calls the categorical imperative: act only on a maxim you could will as a universal law. The test is not whether you would like the consequences but whether the rule you are acting on can be stated without contradiction when universalised. A maxim fails if willing it universally would destroy what the action is for — as a lying promise would destroy the trust that makes promising work. The criterion is thus logical, not consequentialist.",
    insight:
      "Its practical use is as a consistency check: state the rule you are about to act on, then ask what happens if everyone follows it. Many excuses do not survive being written down.",
  },
  Q0125: {
    interpretation:
      "From the Tractatus, where the claim is about the structure of representation rather than about vocabulary. Wittgenstein's position is that what can be said is bounded by the logical form shared by language and world, so the limit of language is the limit of what can be expressed. The sentence is often read as encouraging learning more words; his actual point is that the limit is structural and cannot be pushed outward by effort. The Tractatus ends by treating what lies beyond as something to be shown rather than said.",
    insight:
      "A weaker but usable version: the distinctions available to you are the distinctions your language draws, so an argument may be stuck because of what neither side can say.",
  },
  Q0394: {
    interpretation:
      "Hume ends the first book of the Treatise on this note, after his arguments have led him to conclusions he finds unlivable in practice. The line is not a retraction but a description: philosophical reasoning and ordinary life operate on different principles, and he finds that the second reasserts itself regardless. His honesty about the gap is the point — he does not pretend the arguments resolve it. The sentence is usually quoted as common sense; in context it is an admission of a problem.",
    insight:
      "It names a real condition: you can hold conclusions that your daily conduct does not track. Noticing the gap is more useful than pretending either side is wrong.",
  },
  Q0126: {
    interpretation:
      "This is among the closing remarks of the Tractatus and states its central limit. Wittgenstein's claim is that scientific answers, however complete, would not touch the questions that matter most to a person — the sense of the world, what to do, how to live. His point is not that science fails but that its completeness would leave those questions exactly where they were. The remark prepares the famous conclusion that the book's own sentences must be discarded once understood.",
    insight:
      "It is a useful corrective to assuming that more information will settle a question. Some questions are not waiting on data.",
  },
  Q0297: {
    interpretation:
      "Wang Yangming is stating the position that distinguishes his school from Zhu Xi's. \"Mind is principle\" denies that the pattern of things is to be investigated outside oneself and then applied; for Wang, the mind's knowing and the world's principle are not two things. The question that follows is rhetorical: if principle were outside the mind, there would be no way for inquiry to reach it or for knowledge to move anyone to act. His point is epistemic and moral at once.",
    insight:
      "It explains why his critics thought the position dangerously subjectivist, and why his followers found it more demanding: if knowing and acting are one, knowledge that changes nothing was never knowledge.",
  },
  Q0064: {
    interpretation:
      "Kant pairs the starry heavens and the moral law because each confronts him with something not of his own making — one vast in extent, the other in authority. His claim in the Critique of Practical Reason is that the second is the more remarkable, because the moral law reveals a capacity in him that no observation of nature could have established. The passage is often quoted for its beauty and its first half; the argument depends on the comparison between them.",
    insight:
      "The observation worth keeping is that moral experience was, for him, evidence of something about us that the physical sciences could not supply.",
  },
  Q0088: {
    interpretation:
      "Sartre's claim is that freedom is not a property people have but the condition they are in. \"Condemned\" means there is no opting out: even refusing to choose is a choice one is answerable for. In his framework existence precedes essence — there is no human nature to serve as excuse or as script — so what a person is comes entirely from what they do. The sentence is meant to be unsettling rather than liberating, since the responsibility it describes cannot be transferred.",
    insight:
      "It removes a familiar refuge. \"I had no choice\" is rarely literally true, and treating it as true is itself the thing Sartre is describing.",
  },
  Q0057: {
    interpretation:
      "In the Ethics Spinoza defines a free person as one who acts from the necessity of their own nature alone, and this description of the free person's thought belongs to that account. The claim is that understanding causes — including the causes of one's own desires — transforms passive suffering into activity, and that this is why the free person is not preoccupied with death. Freedom here is not contra-causal choice but adequacy of understanding, which is a difficult and unusual position.",
    insight:
      "It reframes freedom as something gained by understanding rather than something possessed by default, and therefore as unevenly distributed.",
  },
  Q0276: {
    interpretation:
      "This is Sartre's formulation of the priority of existence, compressed into a reversal of a scholastic formula. The claim is that there is no fixed human nature that precedes a person and determines what they are; a person first exists, then defines themselves through action. Because there is no prior blueprint, there is also no excuse — the account is the basis of his ethics of responsibility. The formulation is deliberately paradoxical because it inverts the traditional order.",
    insight:
      "The practical consequence is that you cannot settle what you are by looking it up. It is settled by what you do, which is why the question stays open.",
  },
  Q0248: {
    interpretation:
      "Locke's definition of a person is doing specific work in his account of responsibility and resurrection. A person is not the same thing as a human body or a soul-substance; it is a forensic notion — the bearer of consciousness that can extend backwards and own past actions. This is why he can say that someone who remembers a past action is answerable for it. The definition is counter-intuitive, and he acknowledges the cases that make it strange.",
    insight:
      "Its lasting relevance is to questions of responsibility over time: what makes you answerable for what you did is that you can now own it, not merely that you did it.",
  },
  Q0338: {
    interpretation:
      "Rousseau gives conscience a role that most Enlightenment accounts did not. In Émile he argues against the view that moral judgement is learned from society, holding instead that there is an innate sentiment that reliably distinguishes good from ill and that reasoning has mostly been used to rationalise what people wanted. The claim is not that conscience is infallible but that it is prior to and more reliable than the calculations built on top of it.",
    insight:
      "It is a useful check on cases where you have reasoned carefully to a conclusion you are uneasy about — that unease may be tracking something the reasoning omitted.",
  },
  Q0193: {
    interpretation:
      "Peirce is describing what inquiry is for. The irritation of doubt is not an annoyance to be eliminated but the thing that starts inquiry and gives it direction; the aim is to settle belief so action can proceed. What matters in his account is the method: a belief fixed by authority or by what is agreeable settles the feeling of doubt without settling anything real. Only a method answerable to something independent can produce stable belief.",
    insight:
      "It distinguishes settling a question from feeling settled about it. Many techniques for resolving uncertainty achieve only the second.",
  },
  Q0085: {
    interpretation:
      "Wittgenstein's later position, in contrast to the Tractatus, treats understanding as a capacity shown in use rather than a state accompanying a sentence. To understand an expression is to be able to go on correctly — to apply it in new cases in ways a community of users would accept. The criterion is therefore public and behavioural, not private. This is why understanding cannot be, on his account, an inner process one simply has.",
    insight:
      "It gives a test: if you cannot apply it in a new case, you probably do not have it, whatever the feeling of comprehension was.",
  },
  Q0070: {
    interpretation:
      "Nietzsche's remark is usually read as encouragement, which sits oddly with the rest of his work. The claim that fits his texts is narrower: resistance is what makes strength perceptible and developable, so an obstacle-free existence would leave capacities unrealised. He is not praising suffering and does not hold that hardship is beneficial in general — much of his writing is about damage that does not produce anything. The remark describes a condition of growth, not a recommendation to seek pain.",
    insight:
      "The accurate version is about response rather than event: what matters is what the difficulty calls out, which is why identical hardships produce opposite results.",
  },
  Q0135: {
    interpretation:
      "In the Analects ren is the virtue that makes someone fully human, and Confucius defines it differently for each questioner — here through the capacity to recognise others as like oneself. The formulation is negative in form (what you do not want, do not do), which makes it usable without knowing another person's desires in detail. It is a procedure rather than a sentiment, and it is meant to be applied in ordinary dealings rather than in exceptional ones.",
    insight:
      "The negative form is what makes it workable: you know what you want to avoid without having to guess what someone else wants.",
  },
  Q0282: {
    interpretation:
      "Mencius holds that human nature tends toward good in the way water tends downward — as an inclination that can be redirected but not as a finished state. His evidence is the spontaneous reaction people have to another's suffering, which he treats as a beginning rather than as virtue itself. The work of cultivation is to extend that beginning rather than to acquire something new. His position is contested by Xunzi, who argues the opposite reading of the same evidence.",
    insight:
      "The practical claim is that the raw material is present and needs development, which makes moral education cultivation rather than installation.",
  },
  Q0082: {
    interpretation:
      "Mill's harm principle sets the boundary of legitimate interference with a person. His claim in On Liberty is that power may be exercised over someone against their will only to prevent harm to others — their own good is not a sufficient reason. The argument rests on the claim that the individual is ordinarily the best judge of their own interests, and that error corrected by experience teaches in a way compulsion does not. It is a principle about the limits of coercion, not about the value of the behaviour.",
    insight:
      "It forces a specific question whenever interference is proposed: whose harm, and how would you know? Most proposed restrictions fail to answer it.",
  },
  Q0433: {
    interpretation:
      "The principle of sufficient reason is Leibniz's requirement that everything that is the case has a reason why it is so rather than otherwise. He uses it to argue for the existence of a ground of the world and to structure inquiry: an explanation is incomplete until it gives a reason, not merely a regularity. The principle is not empirical — it is a demand that reason makes on any account of things. Later philosophy, especially Hume and Kant, made its status a central problem.",
    insight:
      "As a working rule it is powerful: asking why this rather than that often moves a question past description toward explanation.",
  },
  Q0409: {
    interpretation:
      "This belongs to Zhuangzi's \"equalising\" discussion, where he argues that the distinctions people treat as fixed — this versus that, right versus wrong — depend on the standpoint from which they are drawn. His claim is not that all views are equally true but that each is conditioned by a perspective, so treating one's own as final is a mistake about what kind of thing a judgement is. The equality is of status as perspectives, not of merit.",
    insight:
      "It is a remedy for a specific failure: the confidence that comes from never having seen the question from the other side.",
  },
  Q0353: {
    interpretation:
      "Arendt argues that forgiveness and promising are the two capacities that make action bearable. Action is irreversible — what is done cannot be undone — so without forgiveness its consequences would accumulate into something no one could act within. Forgiveness, on her account, is not forgetting or excusing; it is a response to what was done that releases the doer from its consequences. She is careful that it is the act that is addressed, not the person excused.",
    insight:
      "It reframes forgiveness as a condition for continued action rather than as a favour to the person forgiven, which is partly why it is so hard.",
  },
  Q0058: {
    interpretation:
      "Spinoza's formula denies that anything occurs outside the order of nature or contrary to it. His target is the habit of treating events that surprise us as violations, which he thinks follows from ignorance of causes rather than from anything in the events. If nature is a single system governed by necessary laws, then the marvellous is a measure of our understanding, not a property of the thing. The claim is metaphysical and directed at superstition.",
    insight:
      "It is a discipline for the reaction of surprise: what looks like a violation is usually a cause you have not traced.",
  },
  Q0123: {
    interpretation:
      "Russell's claim in The Conquest of Happiness is that envy is damaging to the one who feels it, and that its remedy is not achievement but a redirected attention. He distinguishes envy from emulation: the first is concerned with what another has, the second with what one is doing. The reason it is so corrosive, on his account, is that it makes one's own life unintelligible — its standard is elsewhere and so never satisfied.",
    insight:
      "The test he offers is simple: if you were told the other person had lost what you covet, would you feel better? If so, the feeling is envy and not ambition.",
  },
  Q0076: {
    interpretation:
      "Kierkegaard compares anxiety to what a person feels looking down from a height: the dizziness comes not from the drop but from the discovery that one could jump. His claim is that anxiety is the experience of possibility itself — specifically of the possibility that one is free. It is therefore not a defect to be removed but the psychological mark of a self with options. This is why he distinguishes it from fear, which has an object, while anxiety's object is one's own freedom.",
    insight:
      "It reframes a familiar feeling: the vertigo before a real choice is not a sign you are unprepared, but the recognition that nothing has settled it for you.",
  },
  Q0476: {
    interpretation:
      "Weil equates prayer with attention, which removes it from the category of petition. To attend, in her usage, is to hold something steadily without immediately putting it to use — and since she holds that most of our contact with the world is instrumental, genuine attention is rare and difficult. The claim is that this difficulty is the whole of the discipline, so there is no technique to add. It also means prayer can fail by distraction rather than by doubt.",
    insight:
      "It is testable in an ordinary way: try to give something your full attention for two minutes without planning what to do with it. The resistance you meet is what she is describing.",
  },
  Q0080: {
    interpretation:
      "James is describing habit as a social mechanism rather than a personal failing. His claim in the Principles is that habit reduces the effort required for repeated action, which is what makes complex societies possible — most people most of the time are running on acquired routines. He calls it conservative because that is its function: it holds behaviour steady. The point is descriptive, and it cuts both ways, since the same stability makes change expensive.",
    insight:
      "It explains why change is hard without invoking weakness: the routine is doing real work, and removing it costs more than the effort of an isolated decision.",
  },
  Q0210: {
    interpretation:
      "Guanzi is making a claim about the material preconditions of ethical conduct, not about human nature. His argument is that ritual and shame are not reliably sustained among people whose survival is uncertain, so a government that wants an ordered society should secure livelihood first. This is not a denial of moral capacity but a claim about what it needs in order to operate. The sentence appears in a work of statecraft, addressed to a ruler weighing policies.",
    insight:
      "It is an argument worth reviving whenever conduct is blamed without examining conditions: the question is what the behaviour requires in order to be possible.",
  },
  Q0257: {
    interpretation:
      "Hegel's claim is that a proposition is true only within the whole system of which it is a part, so results separated from the process that produced them are not the truth but its corpse. This is why the Phenomenology refuses to state conclusions in advance: the argument is meant to be undergone rather than summarised. The claim is methodological and directed at philosophies that begin from an axiom and deduce, which he thinks leave the axiom's own standing unexamined.",
    insight:
      "It is a warning about quotable conclusions generally. Removed from the argument that earned them, they look like assertions and are usually mistaken for dogmas.",
  },
  Q0335: {
    interpretation:
      "Locke's tabula rasa is the opening move of his attack on innate ideas. His claim is that the mind has no contents prior to experience, and that what looks innate is either early and universal experience or a principle we have not noticed ourselves acquiring. The argument matters because it relocates the source of human difference: if knowledge comes from experience, then differences in understanding are differences in what has been encountered and attended to.",
    insight:
      "It makes education and environment the primary explanations of what a person knows, which is a demanding conclusion — it removes the option of attributing the gap to nature.",
  },
  Q0066: {
    interpretation:
      "Kant's answer to \"What is Enlightenment?\" identifies it with a kind of courage rather than a body of knowledge. His claim is that most people remain dependent not from lack of capacity but from unwillingness to judge for themselves, and that the exit is simply to begin. He is careful to distinguish the public use of reason, which should be free, from the private use within an assigned role, where obedience may be required. The definition is thus also a political claim.",
    insight:
      "The diagnosis is uncomfortable because it does not blame ignorance. The obstacle he names is the unwillingness to accept the exposure that judging for oneself involves.",
  },
  Q0014: {
    interpretation:
      "Aristotle's formula in the Ethics compresses a longer account: a friend is someone who shares your life, whose good you pursue for their sake, and through whom you come to know yourself. Calling them another self is his way of explaining why friendship is necessary for happiness rather than optional — self-knowledge is difficult from the inside, and a friend makes it observable. The claim is not that friends are similar, which he elsewhere denies for some kinds of friendship.",
    insight:
      "It gives friendship a cognitive role: friends show you your own character from a position you cannot occupy, which is why the loss of one is a loss of self-knowledge.",
  },
  Q0288: {
    interpretation:
      "Zhuangzi ends the butterfly passage without resolving it, and the refusal is the point. The question is not whether the dream was real but whether the distinction between waking and dreaming is as firm as it seems. He is not advancing scepticism about the external world so much as loosening the confidence with which we sort experience into categories. The passage belongs to his \"equalising\" discussion, where fixed distinctions are shown to depend on standpoint.",
    insight:
      "The useful effect is a loosening of certainty rather than a conclusion. It asks how much of what you take as given is a classification you have stopped noticing.",
  },
  Q0425: {
    interpretation:
      "Zarathustra's three stages describe what the will has to become in order to create values. The camel carries what is imposed and learns from it; the lion refuses, negating the \"thou shalt\" and clearing ground; the child begins again, which is the only stage capable of new value. The sequence matters — the lion can destroy but not create, which is why negation alone is incomplete. Nietzsche is describing a transformation in the one who wills rather than a set of behaviours.",
    insight:
      "It explains why criticism alone feels unfinished. Having rejected what was handed to you, the harder stage is the one that starts something, which requires a different disposition.",
  },
  Q0127: {
    interpretation:
      "This is the methodological core of the later Wittgenstein. His claim is that meaning is not an object a word stands for but the way the word is employed, so asking for the meaning apart from use is asking the wrong kind of question. The point is directed at his own earlier position, which held that meaning came from logical form. It also dissolves a class of philosophical puzzles that arise only because we assume meaning must be a thing.",
    insight:
      "It supplies a test for disputes about meaning: instead of asking what a word really means, ask how it is actually being used and whether the uses conflict.",
  },
  Q0273: {
    interpretation:
      "Whitehead's slogan describes how a new entity comes to be out of what already exists. Each occasion takes up the many prior occasions and unifies them into one, which then becomes part of the many for what follows. The claim reverses the usual priority: substances are not more fundamental than processes, but are what processes produce. The second half — \"increased by one\" — insists that the unification adds something rather than merely summing.",
    insight:
      "It is a way of thinking about continuity and novelty together: what comes next is made of what came before, and is nevertheless genuinely new.",
  },
  Q0285: {
    interpretation:
      "Xunzi opens the Encouraging Learning with this, and the argument that follows explains why: on his account human nature is raw material that becomes good only through deliberate training, so stopping means the work is undone. Learning is therefore not enrichment but formation. The claim is continuous with his disagreement with Mencius — he does not think the materials are already inclined toward goodness, which is precisely why the process cannot conclude.",
    insight:
      "It sets a sterner standard than encouragement usually does: if formation is the point, then what matters is not having learned at some point but whether the practice continues.",
  },
  Q0455: {
    interpretation:
      "This is Confucius's answer to Yan Hui on the substance of ren. \"Restraining the self and returning to ritual\" treats ren as something achieved through disciplined conduct rather than inward sentiment: the rites are the trained forms through which regard for others becomes practical. The second clause claims the effect is immediate and observable in how others respond. The formulation is notable for making an ethical ideal depend on specific practices rather than on intention alone.",
    insight:
      "It shifts attention from what you feel to what you do repeatedly. On this account character is built by the forms you submit to, not by the sincerity you start with.",
  },
  Q0460: {
    interpretation:
      "Zhuangzi uses the fish trap to argue that language is instrumental and should be set aside once it has done its work. The target is not language itself but the habit of treating words as what they point to, so that possession of the formula is mistaken for understanding. This is why his own writings are full of jokes, paradox, and discarded images — the form is designed to prevent attachment. The claim is about the relation between a tool and its purpose.",
    insight:
      "It is a useful check in learning anything: have you kept the phrase and lost the thing? Being able to state a principle is not the same as being able to act from it.",
  },
  Q0384: {
    interpretation:
      "Cicero is stating the Stoic premise behind his account of duty: human beings are fitted for association, so a life lived only for oneself is a life lived against one's own nature. The claim is not altruistic in the modern sense — he argues that serving the common good is also what secures one's own standing. The argument is the basis of the whole work, in which apparent conflicts between advantage and duty are meant to be resolved by showing they coincide.",
    insight:
      "It reframes self-interest rather than denying it: the question becomes what kind of creature you are, since the good available to you depends on the answer.",
  },
  Q0263: {
    interpretation:
      "Emerson's essay Compensation argues that every act carries its own consequence built into it, so nothing is gained without a corresponding loss. The claim is not that suffering is repaid later but that the two are the same event seen from different sides. This removes the expectation of external reward and with it the ground for resentment. His target is the habit of wanting the benefit without the cost that produced it.",
    insight:
      "It is a discipline for decisions: ask what each option costs in a currency you actually care about, since on this account the cost is unavoidable rather than negotiable.",
  },
  Q0265: {
    interpretation:
      "Thoreau's repetition is half-ironic — he is mocking himself for preaching — but the claim is serious. At Walden he reduced his expenses to the point where the question of how to live was no longer settled by the need to earn. Simplification is thus a method rather than an aesthetic: it removes the considerations that crowd out the ones he wants to examine. The experiment was designed to find out what remained once the rest was cut.",
    insight:
      "The practical version is diagnostic: how many of your current commitments exist to pay for other commitments? Removing those is often cheaper than earning more.",
  },
  Q0185: {
    interpretation:
      "Bacon's triad assigns a distinct faculty to each activity. Reading supplies material, conversation develops readiness to deploy it, and writing forces precision, because what cannot be written clearly has not been formed. His claim is that study completed by any one alone is defective — the scholar who only reads is stocked but slow, the one who only talks is quick but shallow. The sentence is prescriptive and comes from an essay advising how to study.",
    insight:
      "The third clause is the test worth keeping: if you cannot write it down exactly, the thought is probably less formed than it feels.",
  },
  Q0195: {
    interpretation:
      "Bergson's claim is that a living thing is not a thing that changes but a change that persists, so duration is not a container the organism occupies but what it is made of. His argument in Creative Evolution is against treating life as a mechanism, which he thinks misses that the whole and its history are inseparable. Mature here means continuing to elaborate rather than arriving. The formulation makes change the substance rather than an attribute.",
    insight:
      "It reframes stability: what persists in a person or an institution is not what stays the same but what keeps developing without breaking.",
  },
  Q0347: {
    interpretation:
      "Dewey is diagnosing a motive rather than praising inquiry. His claim is that the philosophical search for certainty was driven by the desire for safety, and that this desire misdirected it toward the unchanging — the eternal, the necessary — and away from the contingent world where action actually occurs. His alternative is to treat knowledge as a tool for managing what is uncertain. The sentence is a criticism of a tradition from within it.",
    insight:
      "It is worth asking of any demand for guarantees: what is being protected against? Often the answer reveals that the certainty wanted is emotional rather than practical.",
  },
  Q0327: {
    interpretation:
      "Aquinas's definition places prudence among the intellectual virtues while making it about action. Prudence is not caution; it is right reasoning about what to do here, which requires both a correct end and correct perception of circumstances. This is why he calls it right reason applied to action rather than knowledge of general rules — no general rule settles a particular case. It is, on his account, the virtue the others depend on.",
    insight:
      "It explains why good intentions and sound principles are not sufficient: something has to bridge from the general to this situation, and that bridge is the skill in question.",
  },
  Q0181: {
    interpretation:
      "Protagoras's measure doctrine is usually read as relativism, and Plato's Theaetetus — our source — pushes it that way. The Greek is ambiguous: \"of all things\" may mean things are as they appear to each person, or that a human being is the standard for judging them. Either reading made the claim famous and contested, since it appears to remove any court of appeal above individual appearance.",
    insight:
      "The difficulty it raises is still live: if disagreement is settled by whose appearance counts, there is no disagreement to settle — which suggests the doctrine cannot be stated coherently.",
  },
  Q0364: {
    interpretation:
      "Mencius is describing the person he calls a great man by what cannot be moved in them. The three clauses name the standard pressures — wealth and rank, poverty and obscurity, force — and claim each fails. The point is not insensitivity but that the person's orientation comes from something these do not reach. In context he is distinguishing this from mere stubbornness, which is why the list is of conditions rather than of hardships.",
    insight:
      "It supplies a concrete test of a commitment: name what would make you drop it. If nothing is named, it may be a preference rather than a conviction.",
  },
  Q0054: {
    interpretation:
      "Descartes arrives at this in the Meditations rather than the Discourse, after methodically doubting everything that could be doubted. The claim is not an inference in the ordinary sense but something he finds he cannot doubt: the act of doubting establishes that there is one who doubts. Its significance is methodological — it becomes the fixed point from which the rest is to be rebuilt. Critics have argued it also smuggles in an unexamined \"I\".",
    insight:
      "The lasting move is the method rather than the sentence: doubt not in order to remain sceptical, but to find what survives it.",
  },
  Q0017: {
    interpretation:
      "Heraclitus holds that what appears as conflict is the condition of what persists: a bow works because of the tension between string and frame, a harmony because of differing notes. The claim is that opposites are not rival forces but interdependent ones, so a world without tension would also be without structure. This is why he criticises those who wish strife would cease. The fragments consistently treat stability as produced rather than given.",
    insight:
      "It reframes tension in any arrangement — a team, an argument, a life — as possibly structural rather than as a fault to be eliminated.",
  },
  Q0389: {
    interpretation:
      "Augustine's sentence is a summary of his teaching on love rather than a quotation of a single text, and it is his most easily abused line. His point depends on a prior claim: love is a direction of the whole person, so where love is rightly ordered, the actions that follow are already governed. He is not licensing whatever one feels like — in his usage love has an object and an order, and most of his ethical writing is about correcting the order. Read without that framework the sentence means the opposite of what he meant.",
    insight:
      "The useful reading is diagnostic: look at what your actions are already serving. On this account conduct is not the puzzle; what you love is.",
  },
  Q0400: {
    interpretation:
      "Kierkegaard calls despair a sickness of the spirit rather than of the body or mind, because on his account what fails is the relation a person holds toward themselves. The illness is structural: the self is a relation, and despair is that relation misheld. He distinguishes forms in which a person is unaware of having a self from forms in which they refuse to be the self they are, and treats the second as the more serious. Its gravity comes from being unnoticed.",
    insight:
      "The uncomfortable claim is that the condition can be severe without feeling like anything. Not feeling distressed is not evidence of not being in it.",
  },
  Q0129: {
    interpretation:
      "From the 1945 lecture where Sartre was defending existentialism against the charge of pessimism. The claim is the one his whole ethics rests on: there is no human nature fixed in advance, so a person is what they have made of themselves through action. He adds the corollary in the same passage — a person is therefore responsible for what they are. The sentence is often read as empowerment; Sartre's emphasis falls on the responsibility it imposes.",
    insight:
      "It removes a specific evasion. \"That is just how I am\" describes a preference on this account, not a constraint, and treating it as a constraint is the bad faith he is describing.",
  },
  Q0011: {
    interpretation:
      "Aristotle is positioning virtue between two errors. Not by nature, because virtues are not like the capacity to perceive, which matures on its own; not contrary to nature, because we are fitted for them and they complete us rather than distorting us. The mechanism is habituation: we become just by doing just acts, as builders become builders by building. The claim is that character is acquired, which is why early training matters so much in his account.",
    insight:
      "It makes practice the cause rather than the expression of character. You do not wait until you are brave to act bravely; the acting is what produces the state.",
  },
  Q0406: {
    interpretation:
      "Mencius is making a point about capacity rather than restraint. His claim is that the ability to act well depends on having settled what one will not do, because a person who will do anything has no standard by which to choose. The \"not doing\" is what makes the \"doing\" deliberate. In context this belongs to his account of how a person preserves what distinguishes them, which requires refusing what would compromise it.",
    insight:
      "It is a test of whether you have a standard: can you name what you would refuse even if it succeeded? Without one, choices are made by circumstance.",
  },
  Q0428: {
    interpretation:
      "Seneca opens On the Shortness of Life by rejecting the complaint that life is too short. His claim is that we are given enough time and lose most of it to things we did not choose deliberately — obligation, distraction, postponement. The argument is a criticism of how time is spent rather than a consolation about its quantity. He is writing to a man with public duties, which is why the examples are of busy people who feel their time vanish.",
    insight:
      "The claim is harder than it sounds: if time is sufficient and mostly wasted, the loss is attributable rather than tragic, which removes the usual excuse.",
  },
  Q0180: {
    interpretation:
      "Liang Shuming is answering a question that Chinese intellectuals took up in the early twentieth century, when traditional accounts of life's meaning had lost their authority. His claim is that meaning is not discovered but produced through creative activity, and that this is what distinguishes human life. He draws on Confucian and Buddhist resources while rejecting both pure traditionalism and wholesale Westernisation. The formulation is deliberately constructive rather than contemplative.",
    insight:
      "It shifts the question from \"what is the meaning of life?\" to \"what have you made?\" — which is answerable but considerably more demanding.",
  },
  Q0031: {
    interpretation:
      "Seneca is quoting the Stoic teacher Hecato, and the sentence is a recommendation rather than an observation about reciprocity. His argument in the letter is that affection is not obtained by calculation or by obligation, but by being affectionate — so the usual strategy of trying to secure love is self-defeating. The claim rests on the Stoic view that what is up to us is our own conduct, not another person's response.",
    insight:
      "It is a correction to a common approach: trying to make someone love you through strategy fails for structural reasons. What is available is your own conduct.",
  },
  Q0241: {
    interpretation:
      "Pascal's claim in the Pensées is that human greatness is not found in what we occupy — the physical universe dwarfs us — but in the fact that we know we are dwarfed. Thought is the basis of dignity because it is the capacity by which we judge the world that crushes us. The argument deliberately uses our fragility as the starting point: a reed is the weakest thing in nature, but it is a thinking reed. The claim is therefore not a compliment to reason's power.",
    insight:
      "It locates dignity in a specific capacity rather than in status or achievement, which is why it does not depend on how well things are going.",
  },
  Q0110: {
    interpretation:
      "James is describing a case where the belief helps produce what it asserts. His argument in The Will to Believe is that some propositions are such that believing them makes them more likely to be true — a person convinced their efforts matter behaves in ways that make them matter. He restricts the claim to genuine options that are forced, living, and momentous, and he does not extend it to matters decidable by evidence.",
    insight:
      "It is narrower than it is quoted as being: it licenses commitment where evidence cannot settle the question, not where it can.",
  },
  Q0363: {
    interpretation:
      "Mencius holds that what separates humans from animals is small in extent — a set of incipient responses — and therefore easily lost. That is why he says ordinary people discard it while the noble person preserves it: the difference is not in what one is born with but in what one keeps. The claim is a demand rather than a compliment. His whole account of cultivation follows from treating this slight difference as something requiring deliberate maintenance.",
    insight:
      "It reframes the gap between people as a matter of what has been kept up rather than of what was there to begin with.",
  },
  Q0407: {
    interpretation:
      "Laozi contrasts two directions of practice. Learning adds — more knowledge, more distinctions, more technique — while the Way is approached by removing: fewer desires, fewer interventions, until action becomes unforced. The chapter ends at wuwei, doing without striving, which is the point the subtracting was for. It is not anti-intellectual; it distinguishes accumulation from the removal of what obstructs.",
    insight:
      "It names two different kinds of progress that are often confused. Some problems need more knowledge; others need something taken away.",
  },
  Q0065: {
    interpretation:
      "This is the same principle Kant formulates elsewhere in the Groundwork, in a version that foregrounds the will. The emphasis here falls on legislating: the agent is not consulting a pre-existing rule but asking whether the maxim they are about to act on could be willed as law by anyone. That makes the test one of authorship — you are deciding what kind of law you are laying down.",
    insight:
      "Framed as legislation it becomes harder to evade: the question is not whether the act is acceptable but whether you are willing to make the rule.",
  },
  Q0131: {
    interpretation:
      "Popper is contrasting two postures toward history. The prophet claims to know where history is going and therefore treats people as material for a predicted outcome; the maker accepts uncertainty and acts within it, remaining corrigible. His claim is that the first posture produces worse results as well as worse politics, because it removes the possibility of learning from error. The sentence is the conclusion of his argument against historicism.",
    insight:
      "The distinction is practical: predicting removes your ability to be wrong, and anything that removes that also removes your ability to correct course.",
  },
  Q0430: {
    interpretation:
      "Anselm's formula is not a refusal of reason but a statement of its place. He begins from commitment and uses understanding to articulate what is believed, so the relation runs belief toward understanding rather than the reverse. In the Proslogion this is the stance from which he attempts his famous argument. It is a methodological statement about order, not a claim that belief needs no grounds.",
    insight:
      "It describes an arrangement most inquiry actually runs on: you commit to a framework, then find out what it commits you to.",
  },
  Q0281: {
    interpretation:
      "Popper is identifying the asymmetry between confirmation and refutation. Evidence that fits a theory is easy to come by for almost any theory, so accumulating such evidence does not discriminate between them; what distinguishes a good theory is that it forbids things, and that it has survived attempts to refute it. His claim is therefore about method: the value of a test lies in how likely it was to fail.",
    insight:
      "The test to apply to any claim you hold: what would have to happen for you to give it up? If nothing, the evidence you have gathered is not doing the work you think.",
  },
  Q0167: {
    interpretation:
      "Mozi's doctrine of impartial care is a direct challenge to the Confucian view that regard should be graded by relationship. His argument is consequentialist rather than sentimental: partiality produces conflict, so the disorder of his time is traced to the failure to care equally. The second clause adds the reciprocal benefit, which is his answer to the objection that impartial care is unnatural. He is prescribing a standard on the basis of what it produces.",
    insight:
      "The challenge it poses is whether moral regard can really be equal, or whether our obligations to those close to us are themselves part of what morality requires.",
  },
  Q0234: {
    interpretation:
      "Augustine builds the City of God on two orientations: love of self to the contempt of God, and love of God to the contempt of self. What he calls cities are not institutions but communities formed by what their members love, which is why they are intermixed in any actual society. The claim is that history's conflicts are at bottom conflicts of orientation rather than of doctrine.",
    insight:
      "It supplies a way to read any group: what does it actually love? That tells you more about where it is going than its stated beliefs do.",
  },
  Q0189: {
    interpretation:
      "Leibniz's phrase comes from the Theodicy and has been mocked more than read. His claim is not that this world contains no suffering but that among all worlds God could have created, this one has the greatest balance of metaphysical good — and that God's choice is guided by goodness, not arbitrary. The argument trades on the notion of compossibility: not everything good can exist together. Voltaire's Candide attacked the optimistic misuse of the idea rather than the argument itself.",
    insight:
      "The serious version raises a real question: if goods conflict and cannot all be realised, what does an optimal choice look like? Mockery does not dispose of it.",
  },
  Q0322: {
    interpretation:
      "In the Phaedrus this belongs to the myth of the soul's pre-existence and the account of recollection. Plato's claim is that learning is not acquisition but recovery: the soul has, in some sense, seen the forms, and what we call coming to know is being reminded of them. The point is to explain how inquiry is possible at all — if we did not already have some grasp of what we are looking for, we could not recognise it on finding it.",
    insight:
      "Behind the myth is a genuine puzzle: how do you search for something you cannot yet identify? Plato's answer is that recognition is doing work memory usually gets credit for.",
  },
  Q0344: {
    interpretation:
      "Mill is revising utilitarianism rather than abandoning it. His critics held that if pleasure is the standard, the satisfied pig is better off than the dissatisfied human; his response is that pleasures differ in kind, and that those who have experienced both do not trade the higher for the lower. The claim is therefore about a hierarchy of pleasures rather than a rejection of hedonism. It is also, admittedly, an appeal to the judgement of competent judges.",
    insight:
      "The phrase worth keeping is his preference for dissatisfaction: the person who has known something better is not improved by being made comfortable.",
  },
  Q0443: {
    interpretation:
      "Descartes describes this in the Discourse as part of his provisional moral code. The reasoning is that most of what troubles us lies outside our control, so attempting to reorder the world is exhausting and futile; what is within reach is our own wanting. This is not resignation but a strategy for preserving effectiveness — he compares those who try to change the world to travellers who would reform the state.",
    insight:
      "It is a sorting rule: divide what is happening into what you can move and what you can only respond to, and spend accordingly.",
  },
  Q0049: {
    interpretation:
      "Ockham's principle is a methodological rule rather than a claim about the world. It says not to multiply entities beyond what explanation requires, so where a simpler account suffices, the additional postulate is unwarranted. It functions as a tie-breaker between theories rather than as proof that the simpler one is true. He applied it mainly to reject unnecessary metaphysical apparatus in his predecessors.",
    insight:
      "Used properly it chooses between adequate explanations, not between an explanation and none. It is often misused to dismiss the unfamiliar simply for being unfamiliar.",
  },
  Q0081: {
    interpretation:
      "Dewey is rejecting the idea that schooling is a period of preparation for a later real life. His claim is that growth happens in present experience, so treating education as deferral wastes the only time in which learning can actually occur. The consequence for method is significant: if education is living rather than preparing, then its content cannot be justified by future utility alone.",
    insight:
      "It is a challenge to any arrangement justified purely by what it prepares you for: if the present is not also genuine, the promised future rarely arrives.",
  },
  Q0028: {
    interpretation:
      "Seneca is quoting Cleanthes, and the image is of a dog tied to a moving cart: it can trot alongside or be dragged, but the cart's direction is not up to it. The claim is that necessity is not altered by resistance, only the quality of the journey is. In Stoic usage this is not fatalism about action but about outcomes — effort remains required, and the point is where it is spent.",
    insight:
      "It separates two things usually confused: what you can affect and how you go through it. Conflating them produces the exhaustion the sentence is meant to end.",
  },
  Q0109: {
    interpretation:
      "Beauvoir's claim is that freedom is not a private possession. In The Ethics of Ambiguity she argues that willing my own freedom requires willing the freedom of others, because my possibilities are opened or closed by theirs, and because a freedom secured by another's subjection rests on a condition that can be withdrawn. The argument is structural rather than charitable. It is her answer to the charge that existentialism is solipsistic.",
    insight:
      "It makes concern for others' freedom a condition of one's own rather than a sacrifice of it, which changes what is at stake in ignoring it.",
  },
  Q0358: {
    interpretation:
      "Buber is making a genetic claim: the self is not prior to relation but formed in it. In I and Thou he argues that the \"I\" arises only in address — one becomes a subject by being addressed by another as a subject. This reverses the usual order, in which a person first exists and then enters into relationships. The claim is that what we call a self is a product of relation rather than its precondition, which is why isolation diminishes it.",
    insight:
      "It suggests that who you are is partly an effect of how you have been met — which makes the company you keep a question about character rather than comfort.",
  },
  Q0034: {
    interpretation:
      "Seneca is using death as a description rather than a threat. His claim is that a person is constituted by what they attend to, so time emptied of anything demanding is not rest but the suspension of the self. He is writing to a friend considering retirement, and the point is that withdrawal without study does not produce freedom, only vacancy. Leisure in his account is not idleness but the condition for the work that matters.",
    insight:
      "It distinguishes rest from vacancy. Time off restores when there is something to return to; without it, the same hours do not recover anything.",
  },
  Q0036: {
    interpretation:
      "Seneca is criticising collection rather than reading. His claim is that a library beyond what one can work through produces distraction, because the reader skims among options instead of staying with anything. The remedy he offers is not asceticism but sufficiency: own what you can actually read. In the letter this belongs to his advice on how to read — slowly, repeatedly, and with a small number of books.",
    insight:
      "It applies to any accumulated resource: the value is in what gets used, and an excess of options tends to replace depth with browsing.",
  },
  Q0160: {
    interpretation:
      "Laozi is making a claim about causation and about timing. Great outcomes are the continuation of small beginnings rather than separate events, which is why the chapter advises attending to things while they are still manageable. The three images — tree, tower, journey — all make the same point about scale emerging from accumulation. This is the basis of the advice that follows: act before the problem consolidates.",
    insight:
      "It is an argument for early attention rather than heroic effort. What is easy to change now is usually the same thing that becomes intractable later.",
  },
  Q0039: {
    interpretation:
      "This is Marcus preparing for the day rather than complaining about it. He lists the difficult people he expects to meet and states what he takes to be true about them — that they act from ignorance of good and bad — so that his response is not surprise or retaliation. The practice is a form of pre-emptive reasoning: decide in advance what is up to you. It appears at the opening of the Meditations as a rule he sets for himself.",
    insight:
      "The transferable part is the anticipatory move: decide how you will respond before the situation arrives, while you still have the use of your judgement.",
  },
  Q0229: {
    interpretation:
      "Lucretius is describing a real pleasure while questioning it. His claim in the passage is not that watching another's distress is cruel but that the relief comes from knowing oneself safe, and that this is a poor foundation for tranquillity. He goes on to argue that the truly secure position is not a shore but the understanding that removes the fear. The image therefore serves a therapeutic argument rather than a moral one.",
    insight:
      "It identifies a specific comfort people rarely examine: feeling better because it happened to someone else. He asks whether that is worth building on.",
  },
  Q0373: {
    interpretation:
      "Wumen is describing what follows awakening rather than the method of reaching it. The gate is gateless — there is no single entrance — but once through, the practitioner stands alone, which means without reliance on a teacher or a formulation. The loneliness in the image is not isolation but independence. In a collection built around checkpoints, this is the remark that closes the series by removing the series' authority.",
    insight:
      "It marks the point at which instruction becomes irrelevant: the aim was never a correct answer but a condition in which you no longer need one.",
  },
  Q0375: {
    interpretation:
      "These are Wang Yangming's reported last words, and the sentence is the conclusion of his philosophy rather than a deathbed remark. His claim throughout was that the mind's knowing is complete in itself and needs nothing added from outside, so at the point of death there is nothing further to establish. The luminosity refers to the capacity he held to be present in everyone. Taken as doctrine, the statement is a summary rather than an argument.",
    insight:
      "Its force depends on the claim having been lived. As a statement about what remains when nothing more can be done, it is a test of whether the work was finished.",
  },
  Q0473: {
    interpretation:
      "Tocqueville is making an empirical observation about freedom rather than praising it. Having studied American institutions, he argues that self-government produces capacities and achievements that administered societies do not, because people who must manage their own affairs develop judgement. But he pairs this with warnings throughout Democracy in America about the fragility of the conditions that sustain it. The remark is deliberately double-edged.",
    insight:
      "It reframes freedom as demanding rather than relaxing: what it produces comes from the burden of deciding, which is why it is often traded away.",
  },
  Q0033: {
    interpretation:
      "Seneca opens the Letters with this as the practical conclusion of an argument about time. Most of it, he has said, is taken from us by others or lost to us; the remedy is to gather what remains and keep it. To claim yourself is to stop lending your attention to whatever arrives. The formulation is deliberately economic — he treats time as the one possession that is genuinely ours and therefore the one worth accounting for.",
    insight:
      "It is a question of ownership: how much of your attention was spent on what you chose, as opposed to what was simply available to be spent?",
  },
  Q0113: {
    interpretation:
      "Marcus is addressing himself about death, and the sentence turns on who releases him. If the universe that produced him also ends him, then dying is not an expulsion but a return within the same order — which is why he says the one who releases is at peace. The reasoning is Stoic physics applied to a personal fear. It is a rule he is giving himself rather than a proof.",
    insight:
      "It works, if it works, by changing what the event is taken to be. Much of the difficulty is in the description rather than in the fact.",
  },
  Q0161: {
    interpretation:
      "Laozi is stating a method: approach difficulty through what is easy about it, and greatness through what is small. The claim is not that large problems are illusory but that they have manageable components, and that attempting them whole is what makes them impossible. This is the companion to the previous chapter's advice to act before things consolidate. The chapter ends by warning against treating anything as too large to begin.",
    insight:
      "It is a practical answer to being overwhelmed: find the part that is currently easy, since the size of the whole is not what has to be handled at once.",
  },
  Q0255: {
    interpretation:
      "Kant's definition turns on the adjective \"self-incurred.\" Immaturity is the inability to think without another's guidance, and he holds that its cause is not a defect of understanding but a failure of resolve — people prefer the safety of being guided. This is why the remedy he proposes in the same essay is courage rather than instruction. The definition thus makes enlightenment a matter of will, available to anyone who will accept its risks.",
    insight:
      "The diagnosis is pointed: if the cause is resolve rather than capacity, then the obstacle is precisely the comfort of letting someone else decide.",
  },
  Q0179: {
    interpretation:
      "Feng Youlan is defining human life by the presence of awareness rather than by any specific faculty. His claim in the Xin Yuandao is that what distinguishes human beings is not that they act but that they understand what they are doing, and that the difference within human life is one of degree of that awareness. This lets him treat philosophy as the activity of raising it. The formulation is deliberately minimal so it can cover both moral and intellectual development.",
    insight:
      "It makes reflection the measure rather than achievement: the question is how much of what you do you are actually present to.",
  },
  Q0122: {
    interpretation:
      "Russell ranks envy just below worry among causes of unhappiness, and his reason is structural rather than moral: envy shifts the standard of one's own life outside it, so satisfaction becomes unreachable by any effort of one's own. He treats it as a habit of comparison that can be examined and unlearned, which is why the chapter prescribes attention to one's actual circumstances. The claim follows from his view that happiness depends on interests rather than on possessions.",
    insight:
      "The mechanism is worth naming: comparison makes your condition a function of someone else's, which puts it permanently out of reach.",
  },
  Q0141: {
    interpretation:
      "Confucius is drawing a contrast about where the cause is located. The exemplary person looks to themselves when something fails; the petty person looks to others. The claim is not that others are never at fault but that the location of the search determines whether anything can be done about it. In the Analects this is one of several passages making self-direction the mark of the person worth emulating.",
    insight:
      "It is a reliable diagnostic in practice: notice where you look first when something goes wrong. That reflex determines what you can do next.",
  },
  Q0012: {
    interpretation:
      "This is Aristotle's fuller definition, and it adds two qualifications to the bare formula. Virtue is a state concerned with choice, so it involves deliberation rather than mere habit or feeling; and the mean is relative to us, not a fixed midpoint. Together these exclude both the reading of virtue as moderation and the reading of it as a rule. What is required is judgement about what this situation calls for.",
    insight:
      "The addition that matters is \"relative to us\": the right action is not the average of two extremes but the one appropriate here, for you.",
  },
  Q0218: {
    interpretation:
      "Tillich's formulation is deliberately paradoxical. Acceptance, on his account, cannot be earned by becoming acceptable, since the anxiety he is addressing is precisely the awareness of failing to qualify. So the acceptance he describes must come from outside the self's own judgement — which is why he frames it as being accepted in spite of being unacceptable. The claim is about the structure of self-acceptance rather than a recommendation of self-esteem.",
    insight:
      "It addresses a specific failure: the person who cannot accept themselves because they are measuring by a standard they know they have failed.",
  },
  Q0144: {
    interpretation:
      "Confucius ranks three relations to a pursuit: knowing it, loving it, and delighting in it. The claim is that each is a genuine advance on the previous, and that the last is not intensity but a change in what the activity is for — it has become its own point. In the Analects this belongs to his repeated insistence that learning not be undertaken for external reward. The ranking is a diagnosis of why effort fails.",
    insight:
      "It gives a way to assess engagement: are you doing this because of what it leads to, or because of the doing? The difference shows under difficulty.",
  },
  Q0442: {
    interpretation:
      "The scholastic maxim states a condition on reception: what a thing becomes in you depends on the structure of what receives it. Aquinas uses it to explain how knowledge is possible without the soul being made of what it knows, and how the same teaching is understood differently by different people. The principle is epistemic rather than mystical. It places the limitation in the receiver rather than in the thing received.",
    insight:
      "It is a useful check on miscommunication: what someone takes from what you said is governed by what they have room for, not by what you meant.",
  },
  Q0310: {
    interpretation:
      "Nishida identifies the good with the realisation of personality, by which he means the actualisation of a unifying activity rather than the satisfaction of desires. In An Inquiry into the Good he argues that genuine experience precedes the split between subject and object, so the good is not a state one acquires but a coherence one achieves. This lets him treat ethics and self-cultivation as the same undertaking, continuous with Zen practice.",
    insight:
      "It reframes the good as integration rather than attainment — which makes the relevant question whether a person's various aims hold together.",
  },
  Q0357: {
    interpretation:
      "Bergson is not disparaging intelligence but identifying its function and its limit. Intelligence, on his account, evolved to handle solid, measurable things and to act on them, so it naturally represents life the way it represents matter — as composed of separate parts. That is exactly what living processes are not, since duration is continuous. The incomprehension is therefore built in rather than a failure of effort.",
    insight:
      "It explains a recurring difficulty: the tools that work on objects misrepresent anything that is essentially a process, including a life.",
  },
  Q0440: {
    interpretation:
      "Seneca's claim is that everything we treat as ours — property, body, even relationships — is held on terms we do not control, whereas time is the one thing genuinely at our disposal. The argument opens the Letters and sets up the whole work's concern with how attention is spent. The claim is not that time cannot be lost but that its loss is not something done to us.",
    insight:
      "It is a piece of accounting: of the things you call yours, which can be taken without your agreement? Seneca's answer is that only one cannot.",
  },
  Q0230: {
    interpretation:
      "Lucretius is stating what he takes his poem to be for. The religion he names is not piety as such but the fear of divine punishment, which he says lay on human life like a weight; his claim is that understanding nature removes it. This is why he presents Epicurean physics as a therapeutic work rather than a treatise. The passage is programmatic — it tells the reader what the poem is meant to accomplish.",
    insight:
      "It treats explanation as a remedy, on the view that a large part of what afflicts people is a false account of why things happen.",
  },
  Q0416: {
    interpretation:
      "Hu Shi uses a xiangqi image — a pawn that has crossed the river cannot move backward — to describe a commitment that has passed the point of reversibility. His claim is that once certain positions are taken, retreat is not available, so the only remaining option is to continue. He used it about China's modernisation and about his own intellectual commitments. The metaphor is doing real work: it turns a choice into a condition.",
    insight:
      "It names a situation worth recognising early: some decisions remove the option of return, and the relevant question is whether you meant to cross.",
  },
  Q0312: {
    interpretation:
      "Boethius has Philosophy argue this to him while he faces execution, and the claim is that misery depends on judgement rather than circumstance. The reasoning is that fortune cannot make anyone miserable without their assessment that what has happened is bad. This is not denial — he does not pretend the loss is small — but a claim about where the suffering originates. The Consolation works by gradually shifting what he counts as loss.",
    insight:
      "It is a demanding position because it removes consolation by complaint: if the judgement is doing the damage, the damage is not being done to you.",
  },
  Q0468: {
    interpretation:
      "This is Huineng's account of his awakening on hearing the Diamond Sutra, and the repeated \"who would have thought\" marks discovery rather than doctrine. The claims are about self-nature: originally pure, neither produced nor destroyed, self-sufficient, unmoving. The point is not that people are unaware of facts about themselves but that they have been looking for something to acquire. In the Platform Sutra this is the ground of his sudden-enlightenment position.",
    insight:
      "The formulation is notable for what it removes: if the nature is already complete, the practice cannot be about adding anything.",
  },
  Q0485: {
    interpretation:
      "Dante closes the Paradiso with this, and the grammar matters: love is the subject and the celestial machinery is what it moves. The claim is that the order of the cosmos is not a mechanism but an attraction, so the whole structure holds because of what draws it rather than what pushes it. Arriving here at the end of the poem, the sentence is the resolution of the journey rather than a proposition in it.",
    insight:
      "It offers a different image of order — one that coheres by being drawn rather than by being driven, which changes what holds a thing together.",
  },
  Q0333: {
    interpretation:
      "Spinoza's claim is epistemological rather than about personal survival after death. In the Ethics he distinguishes the duration a body has from the eternity belonging to the mind's adequate ideas, which are not measured by time at all. To know something truly is, on his account, to participate in that. The sentence therefore reports a kind of experience available now, not a promise about later.",
    insight:
      "Read this way it is about a particular kind of knowledge: the understanding that sees things as necessary is not the sort of thing that ages.",
  },
  Q0391: {
    interpretation:
      "Dante gives this to Francesca in the circle of the lustful, and it describes the specific structure of her punishment: she is not suffering a new loss but remembering a good she still knows as good. The pain comes from the contrast, which is why memory rather than fire is the instrument. In the Commedia this marks a departure from the usual economy of Hell, since the suffering depends on the person's own attachment remaining intact.",
    insight:
      "It identifies why some losses intensify rather than fade: what hurts is not the absence but the continued clarity of what was there.",
  },
  Q0192: {
    interpretation:
      "Vico's principle makes knowledge depend on making. His claim is that we can know a thing only if we have produced it, since we cannot grasp the internal structure of what we did not construct. He applies it to mathematics, which we make, and contrasts it with nature, which God made and therefore God fully knows. The principle is also the basis of his treatment of history, which he counts as made by human beings and so knowable in a way nature is not.",
    insight:
      "It sets a limit worth taking seriously: where you did not make it, your understanding is of patterns rather than of structure, and the two are often confused.",
  },
  Q0242: {
    interpretation:
      "Pascal's fear is not of the void's size but of its silence — that the universe does not answer. What frightens him is the absence of a response, which is a religious fear rather than a cosmological one. The Pensées use this as the starting point for the argument that follows, since he thinks the usual remedies — diversion, indifference — avoid rather than address it. The sentence is the most quoted line in a book largely about strategies of avoidance.",
    insight:
      "It names a specific dread that size alone does not explain: the worry is not that we are small, but that nothing is listening.",
  },
  Q0339: {
    interpretation:
      "Voltaire's line is usually read as cynicism, which inverts it. In the poem he is arguing that belief in a just God is socially necessary, because without it there is no reason for the powerful to restrain themselves. The claim is about what a society needs rather than about whether God exists — he is arguing against atheism among those who, as he puts it, would be dangerous without it. The sentence is a political argument in the form of a paradox.",
    insight:
      "Read accurately it is a claim about social order, not about theology, and it concedes more to the need for belief than most of his reputation suggests.",
  },
  Q0402: {
    interpretation:
      "Arendt is stating what she takes The Human Condition to be doing, and the modesty is strategic. Her claim is that modern achievements — automation, the conquest of space — have outrun the capacity to say what they mean, so the philosophical task is not to predict or to prescribe but to examine what is already underway. She distinguishes this thinking from both philosophy's traditional subject matter and from political programme. The sentence sets the scale of her ambition deliberately low.",
    insight:
      "It describes a neglected activity: not deciding what to do, but understanding what doing this has come to mean.",
  },
  Q0199: {
    interpretation:
      "Wollstonecraft is answering the charge that her argument aims at domination. Her claim is that what she wants for women is not power over men but the self-command that would let them act from their own judgement. This depends on her prior argument that apparent female weakness is produced by education rather than nature. The sentence is doing two things: deflecting a misreading and restating the substance of her case.",
    insight:
      "The distinction is useful beyond its context: wanting authority over one's own life is a different claim from wanting authority over someone else's.",
  },
  Q0047: {
    interpretation:
      "Augustine is praying, and the sentence states the problem his doctrine of grace is meant to solve. If God commands what we cannot do, the command would be pointless; so grace must supply the capacity as well as the requirement. The formulation is compact enough to be a rule of prayer: asking for the thing commanded is the acknowledgment that it is not already available. It also removes the ground for boasting about having obeyed.",
    insight:
      "Secularised, it is a way to state a requirement honestly: admitting that what is being asked of you is not within your present reach is the beginning of getting there.",
  },
  Q0174: {
    interpretation:
      "Wang Guowei borrows three lines of ci poetry to describe stages of a large undertaking. The first is standing alone and seeing the whole distance; the second is persistence to the point of emaciation without regret; the third is the recognition arriving without being sought. His claim is that genuine achievement has this structure regardless of field, and that the last stage cannot be forced. The formulation is unusual in taking literary images as the account.",
    insight:
      "The third stage is the one that matters: the arrival is unprepared, but it follows the second, which is a matter of endurance rather than insight.",
  },
  Q0332: {
    interpretation:
      "Spinoza opens the part of the Ethics on the emotions by rejecting three attitudes at once. His claim is that treating human conduct as ridiculous, pitiable, or wicked places the observer outside nature, whereas he intends to treat it as a set of effects with causes. Only the last of the four verbs yields knowledge; the other three are ways of having an opinion. The sentence is programmatic — it states the method for everything that follows.",
    insight:
      "It is a demanding standard because it forbids the satisfactions of judgment. Understanding something requires giving up the pleasure of reacting to it.",
  },
  Q0295: {
    interpretation:
      "Zhu Xi is describing knowing and practice as mutually reinforcing rather than sequential. His claim against a purely intellectual approach is that clarity without earnest practice is not yet real clarity; his claim against a purely practical one is that practice unguided by understanding does not deepen. The formulation makes them a single circuit. In his account this is why the investigation of things and the cultivation of the person are one undertaking.",
    insight:
      "It rules out two familiar evasions: waiting until you fully understand before acting, and staying busy to avoid having to understand.",
  },
  Q0451: {
    interpretation:
      "Emerson's compensation doctrine stated as a rule of exchange. His claim is that gain and loss are not separate events but the same transaction seen from two sides, since every commitment excludes what it did not choose. This is why he does not treat the losses as regrettable accidents requiring redress. The formulation is deliberately symmetrical: nothing is gained for free and nothing is lost without a corresponding acquisition.",
    insight:
      "It reframes regret as a failure to look at the whole transaction. The cost was not imposed afterwards; it was the other side of the choice.",
  },
  Q0111: {
    interpretation:
      "Emerson is not praising inconsistency; he is attacking a particular motive for consistency. His target is the person who refuses to change because they fear appearing to have been wrong, which he calls a hobgoblin — a small fear governing a mind. The claim is that this motive is external, so the resulting consistency is a form of deference. What he wants instead is coherence of a different kind, supplied by present conviction rather than by past statements.",
    insight:
      "It separates two reasons for standing by something: that it is right, or that you once said it. Only the first is a reason.",
  },
  Q0075: {
    interpretation:
      "Kierkegaard defines despair by what the self is doing rather than by how it feels. The self is a relation it must hold, and despair is the refusal to hold it in the form it has — wanting to be someone else, or not wanting to be a self at all. The \"sickness unto death\" is that the failure is in the part of a person that is supposed to be able to relate to everything else. Its severity is independent of how it presents.",
    insight:
      "The definition is uncomfortable because it identifies refusal rather than suffering. A person may be functioning well and still declining the self they have.",
  },
  Q0380: {
    interpretation:
      "In the Republic this belongs to the argument about education: what is learned first is hardest to unlearn, so the stories and habits a child meets set the direction of everything after. The claim is not that beginnings are the largest part by volume but that they are determinative. Plato's conclusion — that the material of early education must be supervised — follows from this rather than from prudishness. The popular form drops the argument and keeps the maxim.",
    insight:
      "It is a claim about leverage: effort spent at the start governs what later effort has to overcome.",
  },
  Q0477: {
    interpretation:
      "Murdoch is criticising the moral philosophy of her own time for organising itself around choice, duty, and will, leaving no place for the attention to particular people that she thinks moral life actually consists in. Her claim is that love is not a sentiment added to a theory but the capacity without which the theory describes nothing recognisable. The argument belongs to her broader case against the view that moral reality is made by decision.",
    insight:
      "It points at something most ethical frameworks omit: the long, unglamorous work of noticing someone accurately before any decision is called for.",
  },
  Q0007: {
    interpretation:
      "Socrates says this in the Phaedo after a long argument has failed to convince, and he is naming the real risk. His claim is that repeated disappointment with argument produces misology — a settled distrust of reasoning itself — which he compares to becoming a hater of people after being deceived by a few. The danger is that the person loses the capacity that could have corrected the error. His remedy is to blame the misuse of argument rather than argument.",
    insight:
      "It describes a real trajectory: cynicism about reasoning often follows from expecting more of it than it can deliver, rather than from seeing through it.",
  },
  Q0376: {
    interpretation:
      "The mishnah holds two claims together that are usually separated. You are not required to complete the task, which releases you from the despair of insufficiency; you are not permitted to abandon it, which refuses you the relief of exemption. The sentence is addressed to people working on something they will not finish, and it is meant to make that condition sustainable. Its force comes from denying both the heroic and the resigned reading.",
    insight:
      "It is the clearest statement available of how to work on a long problem: measure by contribution rather than completion, without conceding that contribution is optional.",
  },
  Q0475: {
    interpretation:
      "Bergson's image inverts the usual account of where religion comes from. He argues that the universe, left to the intelligence's representations, would produce beings paralysed by the foresight of death, so nature supplies what he calls a defensive reaction: the fabrication of gods and the belief in survival. The universe is a machine for making gods in the sense that the conditions of life generate religion. The claim is explanatory rather than reverent or dismissive.",
    insight:
      "It raises the question of function rather than truth: whatever else religion is, on this account it is doing something that a creature aware of death requires.",
  },
  Q0291: {
    interpretation:
      "The Great Learning uses the root-and-branch image to make a claim about order of dependence. Affairs have a sequence, and attending to what comes later without securing what comes earlier produces effort that cannot succeed. The claim is therefore about priority rather than importance: both root and branch matter, but they do not matter at the same time. Knowing which is which counts as being near the Way.",
    insight:
      "It supplies the question missing from most plans: what has to be true first? Getting the sequence wrong wastes work that is otherwise correct.",
  },
  Q0269: {
    interpretation:
      "James's phrase \"stream of consciousness\" was introduced to deny that experience arrives in discrete units. His claim is that thought is continuous and changing, with no clean seams between one moment and the next, and that our habit of carving it into separate ideas is a retrospective imposition. This matters for his account of the self, since the sense of inner continuity is not built from pieces. The metaphor is doing argumentative work rather than decorating it.",
    insight:
      "It is a reminder that the boundaries we perceive in our own mental life are largely imposed after the fact, which makes any inventory of consciousness suspect.",
  },
  Q0674: {
    interpretation:
      "The sentence closes Hume's essay \"The Sceptic\" (1742), where he has spent pages arguing that philosophical systems have almost no power to change what people feel or how they live. It is not a renunciation of philosophy but a placement of it: reflection is an activity conducted by beings who also have bodies, tempers, tables, and company. Hume's own practice matches the sentence — after skeptical arguments that seem to dissolve everything, he reports dining and backgammon pulling him back, and treats that return as data, not weakness.",
    insight:
      "It supplies a test for any worldview you are considering: can an actual human live it, on an ordinary Tuesday? A philosophy that requires you to stop being a person to be consistent has, for Hume, disqualified itself rather than you.",
  },
  Q0675: {
    interpretation:
      "This is Ross's translation of the definition at Nicomachean Ethics II.6, and \"mean\" is the most misread word in it. The mean is not splitting the difference or moderation as a character trait; each virtue sits between two determinate vices — courage between rashness and cowardice, generosity between prodigality and stinginess — and \"relative to us\" means the right amount varies with the person and situation, as the right diet differs for Milo the wrestler and a beginner. The final clause hands the standard to the practically wise person rather than a formula, which is why Aristotle's ethics cannot be reduced to rules.",
    insight:
      "It gives a usable decision procedure anyway: name the two available ways of failing, then ask what someone with judgment would do in this exact case. Most bad decisions reveal themselves as one of the vices once the pair is on the table.",
  },
  Q0676: {
    interpretation:
      "The Western Inscription opens Zhang Zai's account of what a person is: made of the same qi as everything else, small but not separate. From this cosmology the ethics follows in the next lines — all people are my siblings, all things my companions, so care for them is not charity toward strangers but conduct within one body. The passage became the canonical statement of Neo-Confucian unity with all things, and the \"four sentences\" (establish the mind for Heaven and Earth…) extend it from belonging into vocation.",
    insight:
      "It grounds concern for strangers and the natural world in shared constitution rather than sentiment — on this view you do not decide to include them, they were never excluded. Read as an actual claim about matter rather than a metaphor, it makes environmental ethics an internal affair.",
  },
  Q0678: {
    interpretation:
      "In the Platform Sutra's opening scene two monks are arguing over whether the wind or the flag is moving; Huineng's reply does not adjudicate but relocates the dispute. The taking of sides, the projection onto objects, the urgency itself — that is mind in motion. Read in context this is not an idealist metaphysics claiming only minds exist; it is a diagnostic pointer aimed at the arguers, and it is what brings Huineng to Huineng's attention in the narrative.",
    insight:
      "It works on arguments generally. Before working out which side is right, check whether the quarrel itself is the thing worth examining: much of what presents itself as a dispute about the world is a dispute happening in the observers.",
  },
  Q0680: {
    interpretation:
      "The \"killing\" is directed at attachments, not persons — and in the Record of Linji it targets Buddhist attachments specifically: masters, sutras, stages of attainment, the Buddha-image itself. Linji's students leaned on these as proxies for seeing, so his shock line severs the dependency. The positive teaching sits nearby in the same record: \"wherever you are, make yourself master\" — the provocation and the autonomy are one instruction. Later Chan tradition read \"Buddha\" here as any authority held outside one's own examination.",
    insight:
      "The criterion transfers beyond religion: any method, teacher, or framework you lean on instead of looking becomes a Buddha to kill. The test is not rebellion but whether your own judgment is now doing the work the borrowed authority was doing.",
  },
  Q0683: {
    interpretation:
      "This is the opening sentence of the Principles, and it does preliminary work before any argument: it inventories what anyone could count as an object of knowledge — ideas of sense, ideas attending the mind's passions and operations, and ideas of memory and imagination. Berkeley's later conclusion (that being is perceiving, and being perceived) will rest on the observation that every item on this list is mind-dependent. Placing the inventory first is the argumentative strategy: he wins before announcing the thesis.",
    insight:
      "It models a discipline worth borrowing: before debating what exists, list what your knowledge of anything is actually made of. Metaphysical disputes often survive only because that inventory was skipped.",
  },
  Q0686: {
    interpretation:
      "Marcel distinguishes problems — solvable with data available to anyone — from mysteries, where the inquirer is part of the question. Love belongs to the second kind, and this sentence from Homo Viator states what love does in it: to love someone is to address them, and the address carries an unconditional refusal of their death; the beloved is not an item whose replacement could be considered. Marcel is describing the phenomenology, not proving immortality — what love declares is what love is.",
    insight:
      "Grief makes the structure visible: love keeps addressing the dead long after biology has finished. It also marks the real difference between loving a person and valuing what they do — functions can be replaced, and this sentence explains why that thought never applies where love is involved.",
  },

  // 2026-09-27: the seven passage pages that drew Search Console impressions
  // while carrying no commentary of their own.
  Q0063: {
    written: "2026-09-27",
    interpretation:
      "These are the last words of Candide (1759), Candide's reply to Pangloss, who is still insisting that every disaster in the book was a necessary link in the best of all possible worlds. After the Lisbon earthquake, war, slavery, and the Inquisition, Voltaire lets the argument end not with a counter-theory but with a change of subject: the small community has found, through a Turkish farmer, that work keeps off “three great evils, boredom, vice, and need.” The garden is the refusal to keep explaining suffering in the abstract when there is something useful to do.",
    insight:
      "Readers argue over whether the ending is wisdom or retreat. Either way it offers a test for any grand explanation of why things are as they are: does it change what anyone does tomorrow? If not, Voltaire suggests, it is a way of not tending the garden.",
  },
  Q0025: {
    written: "2026-09-27",
    interpretation:
      "Enchiridion 17 applies the distinction the handbook opens with, between what is up to us and what is not. The part — poor or rich, lame or in office, long or short — is assigned; performing it well is ours. Epictetus, born a slave, is not recommending passivity about one's circumstances but relocating dignity: it lies in how a role is played, which no one can take away, rather than in which role one was given, which anyone might.",
    insight:
      "It is a useful check on resentment at work or in a family: separate the part you did not choose from the performance you do. The first may be worth changing; the second is already entirely yours, and it is usually where the real difference is made.",
  },
  Q0499: {
    written: "2026-09-27",
    interpretation:
      "Nicomachean Ethics VIII.3 sorts friendships by what the friends love in each other: usefulness, pleasure, or character. The first two are incidental and end when the use or pleasure does. Friendship between people good and alike in virtue is complete because each loves the other for who they are, and it contains the other two goods as well. Aristotle adds that such friendships are rare and slow — the friends must, as the saying goes, have eaten salt together — because trust in character takes time to earn.",
    insight:
      "It gives a sober way to take stock of one's friendships without cynicism: most are of use or pleasure, and there is nothing wrong with that. The rare kind is recognisable by whether it would survive the loss of the use and the pleasure.",
  },
  Q0354: {
    written: "2026-09-27",
    interpretation:
      "The phrase is the subtitle of Eichmann in Jerusalem: A Report on the Banality of Evil (1963) and appears in the book's final words about the “word-and-thought-defying banality of evil.” Arendt did not mean that the Holocaust was trivial or that Eichmann was a minor functionary. She meant that she found in him no demonic depth, only clichés and an inability to think from anyone else's standpoint — thoughtlessness rather than monstrous motive. Later historians, notably Bettina Stangneth, have argued that Eichmann was a committed ideologue performing blandness at his trial, so the phrase is better read as a claim about what evil can require than as a verdict on one man.",
    insight:
      "Its lasting force is as a warning about ordinary conditions: great harm can be carried out by people who never ask what they are doing, only whether they are doing it correctly. That places the defence against it in the habit of thinking, which is where Arendt's later work went.",
  },
  Q0303: {
    written: "2026-09-27",
    interpretation:
      "In the sixth chapter of the Gita, on meditation, Krishna plays on a single Sanskrit word, ātman, which means both “self” and “oneself”: uddhared ātmanātmānam — one should raise the self by the self. The next verse explains the paradox. The self is a friend to one who has mastered himself by himself, and an enemy to one who has not. English translations often capitalise one “Self” to mark a higher self lifting a lower; that capital is an interpreter's decision, not something the Sanskrit shows.",
    insight:
      "The verse refuses to outsource self-improvement: no teacher, circumstance, or practice raises a person unless the person does it. The same faculty that can undo you is the only one that can lift you, which is a hard teaching and a hopeful one.",
  },
  Q0203: {
    written: "2026-09-27",
    interpretation:
      "The first verse of the Dhammapada is about ethics, not metaphysics. “Mental states” renders dhammā, and the verse goes on: if one speaks or acts with a corrupted mind, suffering follows as the wheel follows the foot of the ox. The second verse repeats the pattern with a pure mind and happiness that follows like a shadow. The claim is that intention shapes what follows from action — the Buddhist teaching that intention is what makes an act karmically weighty — rather than that the world is made of mind.",
    insight:
      "Read as psychology it is directly testable: notice how the state you act from, irritation or goodwill, shapes the conversation that follows more than the words you choose. The verse puts the work where the leverage is.",
  },
  Q0103: {
    written: "2026-09-27",
    interpretation:
      "Seneca's Latin is homo, sacra res homini, and in Letter 95 it comes in an attack on the arena: man, a sacred thing to man, is now killed for sport. The letter argues that moral precepts are not enough without doctrines — a settled view of what a human being is — and this phrase states the doctrine: every person, because rational, shares in the divine reason that orders the cosmos. A few sections later Seneca draws the consequence that we are all members of one great body.",
    insight:
      "The sentence is short enough to be a slogan, but its context is its point: it was written against a public entertainment that most of Seneca's readers attended. Its test is whether we can name the practices of our own time that it would condemn.",
  },

  // 2026-09-27: passages the self, love, Socrates, and Nietzsche hub essays
  // cite and link to.
  Q0006: {
    written: "2026-09-27",
    interpretation:
      "Diotima's definition in the Symposium (206a) turns love from a feeling into a structure of desire. Everyone wants good things; love, in the strict sense, is wanting the good to be one's own, and to be one's own always. That last word does the work: because mortals cannot possess anything forever, love seeks the nearest substitute — “giving birth in beauty,” in children, in works, in laws, in ideas — which is why the speech moves at once from love to creativity and immortality.",
    insight:
      "It explains why love is restless even when it has what it wants: possession now is not possession always. The definition also suggests a diagnostic for any attachment — what good do you want to be yours, and is this the way to make it last?",
  },
  Q0045: {
    written: "2026-09-27",
    interpretation:
      "The sentence opens the most famous paragraph of the Confessions (X.27). Augustine has spent Book X searching his memory for where God is to be found, and the answer arrives as a reproach to himself: “You were within, and I was outside.” He had been looking for beauty in beautiful things, which would not exist without the beauty he was overlooking. The paragraph then runs through the five senses — God called, shone, breathed fragrance, was tasted, touched — to say that the conversion engaged the whole person, not the intellect alone.",
    insight:
      "“Late” is the key word: the regret is not for having loved the wrong things but for having loved the right thing only in its copies. It is a description, still recognisable, of spending years pursuing what points toward something before noticing what it points to.",
  },
  Q0087: {
    written: "2026-09-27",
    interpretation:
      "In the 1945 lecture published as Existentialism Is a Humanism, Sartre explains the formula with a paper-knife. An artisan conceives what a paper-knife is for before making one, so for artefacts essence precedes existence. If there is no God who conceives human nature in advance, human beings are the reverse case: they exist first and define themselves afterwards by what they do. The formula is therefore a claim about the absence of a given human nature, from which Sartre derives total responsibility — no fixed essence can be blamed for a choice.",
    insight:
      "The practical sting is in the excuses it removes. “That's just who I am” treats character as an essence that came first; Sartre's reply is that who you are is the sum of what you keep choosing, so the sentence describes a decision rather than a fact.",
  },
  Q0198: {
    written: "2026-09-27",
    interpretation:
      "Ortega's sentence in Meditations on Quixote (1914) — “Yo soy yo y mi circunstancia” — rejects two opposite pictures: the idealist self that exists prior to its world, and the determinist self that is merely produced by it. The self is the pair: a person and the concrete situation — this country, this time, this body, these people — they have to make something of. The second half makes it a task: to “save” the circumstance is to understand it and give it meaning, and without doing so one cannot save, that is realise, oneself.",
    insight:
      "It replaces the question “Who am I, underneath everything?” with a more useful one: “What does my situation ask of me?” The self, on this view, is found by taking one's circumstances seriously rather than by escaping them.",
  },
  Q0200: {
    written: "2026-09-27",
    interpretation:
      "In “The Sublime and the Good” (1959) Murdoch makes love a matter of perception rather than feeling. The natural movement of the mind is to see other people as figures in its own concerns — useful, threatening, flattering. Love is the difficult act of seeing that another person is as real as oneself, with a life not organised around one's own. Murdoch goes on to say that love, and so art and morals, is the discovery of reality, which is why for her moral progress is largely a matter of attending more accurately.",
    insight:
      "It gives love a test that affection alone can fail: do you see the other person as they are, or as they figure in your story? Many failures of love are failures of this kind of attention before they are failures of feeling.",
  },
  Q0205: {
    written: "2026-09-27",
    interpretation:
      "Tat tvam asi is the refrain of the sage Uddālaka Āruṇi as he teaches his son Śvetaketu in the sixth chapter of the Chandogya Upanishad, repeated after each example — salt dissolved in water, rivers merging in the sea — that points to the one subtle essence of everything. The three words carry very different readings in the Vedānta schools. For Śaṅkara's Advaita they state strict identity of the self and brahman; for Rāmānuja they state inseparable relation, as a body to its soul; Madhva's dualist school reads the sentence so that it affirms difference.",
    insight:
      "Which reading one accepts changes a great deal — whether liberation is discovering one was never separate, or coming into right relation with what one depends on. It is a rare case where a three-word quotation is also a map of a whole philosophical tradition's disagreements.",
  },
  Q0206: {
    written: "2026-09-27",
    interpretation:
      "The sentence is from Genjōkōan (1233), the most read fascicle of Dōgen's Shōbōgenzō, and it continues: to forget the self is to be actualised by the myriad things. Studying the self is not introspection for a stable core; it is practice in which the self is found to be no fixed thing, and the attempt to hold it falls away. What remains is not blankness but experience no longer organised around a separate observer — the “myriad things” come forward and are fully themselves.",
    insight:
      "It reverses the usual order of self-improvement, in which the self is the project and everything else material. Dōgen suggests that the moments we are least preoccupied with ourselves are the ones we are most fully present, which is recognisable well outside Zen.",
  },
  Q0222: {
    written: "2026-09-27",
    interpretation:
      "At the top of the ascent Diotima describes in the Symposium (211a), the lover sees Beauty itself, and this sentence begins the description of what it is not. It does not come to be or pass away, grow or diminish; it is not beautiful in one respect and ugly in another, or beautiful to some and not to others. Every beautiful body, law, or piece of knowledge has its beauty by sharing in this. It is one of the clearest statements in Plato of what a Form is: the thing itself, unqualified, of which particular things are partial instances.",
    insight:
      "Whatever one thinks of the metaphysics, the passage names a real experience: the sense that particular beautiful things point beyond themselves. It also sets the problem later theories of love inherited — whether loving Beauty itself leaves the particular beloved behind.",
  },
  Q0233: {
    written: "2026-09-27",
    interpretation:
      "Augustine's Latin — noli foras ire, in te ipsum redi; in interiore homine habitat veritas — comes from On True Religion (39.72) and gives the method he uses throughout his philosophy: truth is found not by surveying the world but by turning inward, because the mind can recognise unchanging truths it did not make. The sentence continues, and the continuation matters: if you find your own nature changeable, go beyond yourself. The inward turn is a route to something higher than the self, not a settling into it.",
    insight:
      "It is often quoted as advice to trust oneself, which reverses its point. The self is where the search begins because it is closest, and the search is meant to discover that the self is not the measure of truth.",
  },
  Q0250: {
    written: "2026-09-27",
    interpretation:
      "In the Treatise section “Of personal identity” (I.4.6) Hume tests the claim that we are intimately aware of a self that persists through our experiences. Looking inward, he finds only particular perceptions — heat, cold, love, hatred — and never a self that has them. He concludes that a person is “nothing but a bundle or collection of different perceptions” in perpetual flux, and that the idea of a single enduring self is produced by the imagination smoothing over resemblance and succession. In the Appendix he later confessed he could not make his account of what binds the bundle together satisfy him.",
    insight:
      "The experiment is easy to repeat and hard to escape: try to observe the observer and you find only something else being observed. Hume's honesty in the Appendix is as instructive as the argument — a clear sign of a problem that was real, not merely clever.",
  },
  Q0366: {
    written: "2026-09-27",
    interpretation:
      "The Great Learning (Daxue), a short chapter of the Record of Rites that Zhu Xi made one of the Four Books, sets out an order of cultivation that runs from the investigation of things, through extending knowledge, making intentions sincere, and rectifying the mind, to cultivating the person, ordering the family, governing the state, and bringing peace to the world. This passage is one link in that chain, read backwards: each stage presupposes the one inside it, so political order rests finally on sincerity of intention.",
    insight:
      "The sequence is an argument against reform that starts at the outside. On this view no institution works better than the intentions of the people in it — which is severe, and easy to confirm in any organisation.",
  },
  Q0456: {
    written: "2026-09-27",
    interpretation:
      "Mencius says this to King Xuan of Qi (Mencius 1A7), who has spared an ox from sacrifice because he could not bear its frightened look. Mencius uses the episode as evidence: the king already has the feeling that makes humane rule possible, and needs only to extend it. The formula states the Confucian view of love as graded — it begins with one's own family and reaches outward — against Mozi's demand for impartial care of everyone equally.",
    insight:
      "It offers a psychologically plausible account of how concern for strangers is built: not by abstract principle but by stretching the care one already feels for those close by. The question it leaves is how far the stretching can go before it thins out.",
  },
  Q0478: {
    written: "2026-09-27",
    interpretation:
      "Fromm's The Art of Loving (1956) argues against the idea that love is chiefly a matter of finding the right object and being swept away. Love is an activity with its own disciplines — care, responsibility, respect, and knowledge of the other — and it is primarily giving rather than receiving. “Standing in” rather than “falling for” marks the difference between an event that happens to a person and a practice a person sustains.",
    insight:
      "The distinction explains why intense beginnings are a poor predictor of lasting love: falling is involuntary, while standing takes skill that can be learned and neglected. Fromm's title is meant literally — love is an art in the sense of a craft.",
  },
  Q0562: {
    written: "2026-09-27",
    interpretation:
      "Avicenna's “floating man” appears in the psychology of his encyclopedia The Healing (Kitāb al-Shifāʾ). A person created fully mature, suspended in air with sight veiled and limbs apart so that no sensation reaches them, would still be aware that they exist, though not aware of having any body. Avicenna takes this to show that self-awareness does not depend on awareness of the body, and so that the self is not identical with the body. Readers since have compared it with Descartes' cogito six centuries later.",
    insight:
      "Whether the argument succeeds is disputed — imagining oneself without a body may not show that one could exist without it — but the thought experiment isolates a real puzzle: the sense of one's own existence seems more immediate than any perception of the body that has it.",
  },
};
