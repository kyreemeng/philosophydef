# ZensInk research — 2026-08-26

Toolkit: zens-ink keyword_research, keyword_cluster, search_intent, geo_fanout,
competitor_gap, site_audit, onpage_audit. Bing/Serper/Ahrefs keys were not
present, so volume, KD, and Domain Rating were skipped. KGR auto-exits without
a Bing key.

## Discovery

- 25 seed queries from GSC + autocomplete demand
- 992 unique Autocomplete keywords (`keywords.txt`)
- 142 semantic clusters (`clusters.json`)
- Intent: 97% informational, 3% commercial, 242 question-form queries

Largest useful clusters (noise such as crossword/meme/pdf ignored):

- Socrates quotes + life/wisdom/apology variants
- Philosophy quotes about death / life / love / self / loneliness
- Stoicism quotes + Marcus Aurelius / Meditations
- Confucius quotes + Chinese philosophy / the Way
- Epistemology definition, examples, vs ontology
- Existentialism / Kierkegaard quotes

## On-page mapping (no new URL types)

| Demand | Target URL |
|--------|------------|
| philosophy quotes | `/`, `/quotes`, `/quotes/famous` |
| socrates quotes | `/thinkers/socrates` |
| stoicism / marcus aurelius quotes | `/schools/stoicism`, `/thinkers/marcus-aurelius` |
| philosophy quotes about death | `/themes/death`, `/quotes/about/grief` |
| philosophy quotes about life | `/themes/life` |
| epistemology definition / vs ontology | `/what-is-epistemology` |
| chinese philosophy / the Way | `/chinese-philosophy` |
| existentialism quotes | `/schools/existentialism` |
| kierkegaard quotes | `/thinkers/soren-kierkegaard` |
| confucius quotes | `/thinkers/confucius` |

## Competitive note

IEP and this archive share almost no URL-path overlap. IEP is an encyclopedia;
this site is a sourced quotation archive. Do not clone encyclopedia slugs.

Live production sitemap still advertised 969 URLs at audit time; local build
after index consolidation is 850. Deploy is required before GSC matches local.

## Technical audit (local dist)

zens-ink `site_audit` counts many redirect stubs as missing H1/meta (expected
for thin-theme 301 HTML). GEO checks for llms.txt / When to use / how-to-call
and robots `ai-input` + `search` signals were added.

## On-page scores after TDH + H1 cleanup (indexable hubs)

zens-ink `onpage_audit` of the full `dist` includes redirect stubs (grade D)
and noindex pages, so the 62.2 average is not the live indexable set.

Sample of demand-mapped pages after this pass:

| URL | Grade | Score |
|-----|-------|-------|
| `/` | A | 91 |
| `/quotes` | A | 85 |
| `/quotes/famous` | A | 85 |
| `/schools/stoicism` | A | 93 |
| `/themes/death` | A | 93 |
| `/what-is-epistemology` | A | 90 |
| `/chinese-philosophy` | A | 93 |
| `/thinkers/socrates` | A | 93 |
| `/thinkers/marcus-aurelius` | A | 93 |

Thinker pages now list every indexable `/thinkers/{slug}/{theme}` pair to
reduce orphans from the previous “top 6 themes” cutoff.


## Follow-up that still needs keys

- Bing Webmaster API: real volume
- Serper: keyword difficulty
- GSC OAuth (`zens-ink setup_gsc`): live ranking pull instead of Excel export
