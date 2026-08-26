/**
 * Search-demand guardrails from the 2026-08-26 Google Search Console export.
 *
 * The site expanded from 499 to 673 quotations on 2026-08-14. Search visibility
 * fell sharply immediately afterwards, while 93 previously ranking
 * thinker×theme URLs had also disappeared from the build. Keep the original
 * corpus indexable, preserve every landing page with measured demand, and
 * require stronger evidence before indexing newly generated pages.
 */

export const LEGACY_INDEXABLE_QUOTE_MAX = 499;

const observedThinkerSlugs = new Set(
  `
  adam-smith al-ghazali alexis-de-tocqueville anselm-of-canterbury aristotle
  arthur-schopenhauer augustine-of-hippo baizhang-huaihai bertrand-russell
  blaise-pascal boethius chandogya-upanisad confucius david-hume dhammapada
  diamond-sutra diogenes-of-sinope dogen epictetus epicurus feng-youlan
  francis-bacon friedrich-nietzsche friedrich-schiller g-w-f-hegel
  gabriel-marcel george-berkeley george-santayana giambattista-vico
  han-feizi hannah-arendt henri-bergson heraclitus horace huineng ibn-khaldun
  iris-murdoch jeremy-bentham john-dewey john-stuart-mill
  jose-ortega-y-gasset karl-jaspers laozi liang-qichao liang-shuming
  linji-yixuan ludwig-wittgenstein marcus-aurelius martin-buber mencius mozi
  nishida-kitaro ovid paul-tillich plotinus qian-mu rabindranath-tagore
  ralph-waldo-emerson rene-descartes seneca simone-de-beauvoir simone-weil
  socrates soren-kierkegaard wang-guowei william-james william-of-ockham
  xunzi zengzi zhang-zai zhuangzi
  `
    .trim()
    .split(/\s+/),
);

const observedThemeSlugs = new Set(
  `
  affirmation choice death equality faith fate happiness justice knowledge limits
  mind morality nature reason self time truth understanding
  `
    .trim()
    .split(/\s+/),
);

const observedThinkerThemePaths = new Set(
  `
  albert-camus/dignity
  albert-camus/hope
  anselm-of-canterbury/faith
  aristotle/choice
  aristotle/community
  aristotle/friendship
  aristotle/habit
  aristotle/virtue
  arthur-schopenhauer/self
  baruch-spinoza/eternity
  baruch-spinoza/freedom
  baruch-spinoza/understanding
  bertrand-russell/fear
  bertrand-russell/happiness
  bertrand-russell/knowledge
  bertrand-russell/love
  bhagavad-gita/endurance
  bhagavad-gita/self
  blaise-pascal/dignity
  blaise-pascal/humanity
  confucius/benevolence
  confucius/courage
  confucius/gentleman
  confucius/humility
  confucius/learning
  confucius/self
  david-hume/experience
  david-hume/reason
  dhammapada/practice
  dogen/self
  epictetus/desire
  epictetus/freedom
  epicurus/desire
  epicurus/life
  erich-fromm/love
  francis-bacon/knowledge
  friedrich-nietzsche/affirmation
  friedrich-nietzsche/creation
  friedrich-nietzsche/growth
  friedrich-nietzsche/self
  friedrich-schiller/freedom
  g-w-f-hegel/truth
  g-w-f-hegel/wholeness
  hannah-arendt/responsibility
  hannah-arendt/thinking
  henri-bergson/creation
  henry-david-thoreau/simplicity
  immanuel-kant/enlightenment
  immanuel-kant/morality
  immanuel-kant/reason
  iris-murdoch/love
  iris-murdoch/morality
  jean-jacques-rousseau/freedom
  jean-jacques-rousseau/society
  jean-paul-sartre/choice
  jean-paul-sartre/freedom
  jean-paul-sartre/responsibility
  jean-paul-sartre/self
  john-dewey/certainty
  john-locke/equality
  john-locke/experience
  john-locke/knowledge
  john-stuart-mill/dignity
  john-stuart-mill/happiness
  john-stuart-mill/liberty
  karl-popper/critique
  laozi/way
  lucretius/reason
  ludwig-wittgenstein/language
  ludwig-wittgenstein/limits
  ludwig-wittgenstein/meaning
  ludwig-wittgenstein/nature
  marcus-aurelius/death
  michel-de-montaigne/freedom
  michel-de-montaigne/self
  mozi/ethics
  mozi/love
  nishida-kitaro/experience
  paul-tillich/being
  paul-tillich/courage
  plato/love
  plato/responsibility
  plato/soul
  plato/truth
  ralph-waldo-emerson/authenticity
  rene-descartes/certainty
  rene-descartes/reason
  rene-descartes/truth
  seneca/life
  simone-de-beauvoir/freedom
  socrates/justice
  socrates/knowledge
  socrates/morality
  soren-kierkegaard/self
  the-doctrine-of-the-mean/sincerity
  thomas-aquinas/reason
  thomas-hobbes/nature
  wang-yangming/knowledge
  wang-yangming/mind
  wang-yangming/practice
  william-james/truth
  william-of-ockham/method
  xunzi/learning
  xunzi/perseverance
  zhu-xi/knowledge
  zhuangzi/freedom
  zhuangzi/life
  `
    .trim()
    .split(/\s+/),
);

export function hasObservedThinkerDemand(slug: string) {
  return observedThinkerSlugs.has(slug);
}

export function hasObservedThemeDemand(slug: string) {
  return observedThemeSlugs.has(slug);
}

export function hasObservedThinkerThemeDemand(
  thinkerSlug: string,
  themeSlug: string,
) {
  return observedThinkerThemePaths.has(`${thinkerSlug}/${themeSlug}`);
}

export function isLegacyIndexableQuoteId(id: string) {
  const numericId = Number(id.replace(/^q/i, ""));
  return Number.isInteger(numericId) && numericId <= LEGACY_INDEXABLE_QUOTE_MAX;
}
