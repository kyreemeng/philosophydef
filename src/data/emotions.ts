import quotes from "./quotes.json";
import { canonicalizeTheme, type Quote } from "../lib/content";

export type EmotionHub = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  themes: string[];
  keywords: string[];
};

/** Programmatic hubs for “philosophy quotes about [emotion]” queries. */
export const emotionHubs: EmotionHub[] = [
  {
    slug: "love",
    name: "Love",
    title: "Philosophical Quotes About Love",
    description:
      "Philosophical quotes about love—eros, friendship, care, and recognition—from Plato, Aristotle, Confucius, and modern ethics. Clear English, cited sources.",
    intro:
      "Philosophers treat love as more than a private feeling: it can be desire, mutual goodwill, recognition, or a disciplined commitment to another’s good. These passages gather that vocabulary without reducing love to a greeting-card slogan.",
    themes: ["Love", "Friendship", "Desire"],
    keywords: ["love", "beloved", "affection", "friendship", "eros", "philia"],
  },
  {
    slug: "happiness",
    name: "Happiness",
    title: "Philosophical Quotes for Happiness & Joy",
    description:
      "Philosophy quotes about happiness and flourishing—eudaimonia, pleasure, and the examined life—from Aristotle, Stoics, and beyond.",
    intro:
      "Happiness in philosophy often means flourishing (eudaimonia) rather than a fleeting mood. These quotations ask what kind of life is worth wanting, and which goods are stable enough to count as happiness.",
    themes: ["Happiness"],
    keywords: ["happy", "happiness", "joy", "flourishing", "eudaimonia", "felicity"],
  },
  {
    slug: "fear",
    name: "Fear",
    title: "Philosophical Quotes on Fear & Anxiety",
    description:
      "Philosophy quotes about fear, anxiety, and superstition—from Stoic counsel to modern analyses of what fear does to judgment.",
    intro:
      "Fear can protect life, but it can also distort judgment and enlarge superstition. Philosophers ask when fear is rational, when it should be trained, and what courage requires in its presence.",
    themes: ["Fear"],
    keywords: ["fear", "afraid", "terror", "anxiety", "superstition", "dread"],
  },
  {
    slug: "hope",
    name: "Hope",
    title: "Philosophical Quotes on Hope & Perseverance",
    description:
      "Philosophy quotes about hope—expectation, perseverance, and the ethics of looking forward without self-deception.",
    intro:
      "Hope sits between resignation and fantasy. These passages explore how expectation orients action, how despair can misdescribe the future, and when hope becomes a virtue rather than a mood.",
    themes: ["Hope"],
    keywords: ["hope", "hopeful", "optimism", "expect"],
  },
  {
    slug: "courage",
    name: "Courage",
    title: "Philosophical Quotes on Courage & Bravery",
    description:
      "Philosophy quotes about courage—endurance, moral bravery, and facing fear without theatrics—from Socrates to modern ethics.",
    intro:
      "Courage is often defined against fear: not fearlessness, but right action when fear is present. Classical and modern writers disagree about whether courage is mainly military, civic, or moral.",
    themes: ["Courage"],
    keywords: ["courage", "brave", "bravery", "fearless", "fortitude"],
  },
  {
    slug: "grief",
    name: "Grief",
    title: "Philosophy Quotes About Grief",
    description:
      "Philosophy quotes about grief, sorrow, and suffering—mortality, loss, and how thinkers answer pain without empty consolation.",
    intro:
      "Grief exposes what we valued. Philosophers of death, suffering, and consolation ask how to mourn without denial, and how suffering can clarify—or distort—our sense of the good.",
    themes: ["Death", "Suffering"],
    keywords: ["grief", "sorrow", "mourn", "suffer", "pain", "loss"],
  },
  {
    slug: "anger",
    name: "Anger",
    title: "Philosophy Quotes About Anger",
    description:
      "Philosophy quotes about anger, indignation, and rage—Stoic therapy, justice-seeking anger, and the ethics of strong feeling.",
    intro:
      "Anger can be a signal of injustice or a habit that destroys judgment. Stoic, Buddhist, and modern moral psychologists disagree about whether anger can be purified or must be extinguished.",
    themes: ["Anger"],
    keywords: ["anger", "angry", "rage", "wrath", "indignation", "resentment"],
  },
  {
    slug: "peace",
    name: "Peace",
    title: "Philosophy Quotes About Peace of Mind",
    description:
      "Philosophy quotes about peace, tranquility, and ataraxia—Stoic equanimity and calm without empty slogans. Verified English sources.",
    intro:
      "Peace names both a political condition and a settled mind. Epicurean ataraxia, Stoic equanimity, and East Asian calm each propose different disciplines for reducing unnecessary disturbance.",
    themes: ["Peace", "Tranquility"],
    keywords: ["peace", "tranquil", "serene", "calm", "ataraxia", "equanimity"],
  },
  {
    slug: "loneliness",
    name: "Loneliness",
    title: "Philosophy Quotes About Loneliness & Solitude",
    description:
      "Philosophy quotes about loneliness vs solitude—chosen quiet, unwanted isolation, and self-sufficiency. Verified English passages with thinkers and sources.",
    intro:
      "Solitude can be chosen for thought; loneliness names unwanted isolation. These passages distinguish independence from abandonment, and ask what community the examined life still requires.",
    themes: ["Solitude"],
    keywords: ["alone", "lonely", "loneliness", "solitude", "isolation"],
  },
  {
    slug: "desire",
    name: "Desire",
    title: "Philosophical Quotes on Desire & Craving",
    description:
      "Philosophy quotes about desire, appetite, and craving—Stoic, Buddhist, and modern analyses of wanting and its discipline.",
    intro:
      "Desire drives action and error alike. Philosophers ask which desires are trainable, which are endless, and how appetite relates to freedom, virtue, and a livable life.",
    themes: ["Desire"],
    keywords: ["desire", "want", "appetite", "craving", "wish"],
  },
];

const MIN_QUOTES = 8;

export const EMOTION_MIN_QUOTES = MIN_QUOTES;

export function matchesEmotion(hub: EmotionHub, quote: Quote): boolean {
  const themes = quote.themes.map((theme) => canonicalizeTheme(theme).toLowerCase());
  const haystack = `${quote.text} ${quote.themes.join(" ")}`.toLowerCase();
  if (hub.themes.some((theme) => themes.includes(theme.toLowerCase()))) {
    return true;
  }
  return hub.keywords.some((keyword) => haystack.includes(keyword.toLowerCase()));
}

export function quotesForEmotion(hub: EmotionHub): Quote[] {
  return quotes.filter((quote) => matchesEmotion(hub, quote));
}

export function publishableEmotionHubs() {
  return emotionHubs
    .map((hub) => ({
      ...hub,
      quotes: quotesForEmotion(hub),
    }))
    .filter((hub) => hub.quotes.length >= MIN_QUOTES)
    .map(({ quotes: items, ...hub }) => ({
      ...hub,
      count: items.length,
      path: `/quotes/about/${hub.slug}`,
    }));
}
