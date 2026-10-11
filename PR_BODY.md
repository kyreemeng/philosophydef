## Summary

P0 academic-integrity fixes for Philosophy Defined, so Google and careful readers can treat the site as a **sourced quotation archive** rather than a confused encyclopedia.

### 1. Split Meditations (Aurelius vs Descartes)
- Registered **Meditations on First Philosophy** (Descartes, Latin, 1641) separately from **Meditations** (Marcus Aurelius).
- Longest-prefix aliases in `resolveSource` now route `Meditations on First Philosophy I/II` correctly.
- Build assertion `assertWorkCatalogueIntegrity()` fails if the two books merge again.
- Descartes work page published at `/works/meditations-on-first-philosophy` (`minPublishedQuotes: 2`).

### 2. Key terms by tradition/language (not theme co-occurrence)
- New `src/data/thinker-concepts.ts`: explicit maps for Confucius, Nietzsche, Aristotle, etc., plus school→language-family fallback.
- Thinker pages no longer call bare `conceptsForThemes`.
- Confucius → ren / li / junzi / zhongyong / cheng (not Greek vocabulary).
- Nietzsche → amor fati / Übermensch / ressentiment.
- Added glossary entries for **Übermensch** and **ressentiment**.

### 3. Isolate Peter Thiel / Philosophy of Business
- New `src/data/corpus-boundaries.ts`.
- Removed from `/reference` guide list.
- `shouldIndexThinker` returns false for Thiel (page stays, `noindex`).
- Guide marked `peripheral: true` → `noindex`.
- Quote adjacency no longer crosses academic ↔ business corpora.
- Organization `knowsAbout` excludes Philosophy of Business.

### 4. Replace unjustified “verified” wording
- Thinker default meta description uses **sourced** / **edition-checked** only when every passage is checked.
- Homepage title/description softened to “Sourced and Checkable”.
- SEO overrides for major thinker/theme collection pages: “verified English” → “sourced English” where the corpus is not fully edition-checked.

### 5. About + Person schema (no invented credentials)
- Editor display name **Kyree Meng** with honest bio (independent maintainer; not a university department).
- `sameAs`: GitHub profile + repo.
- About page adds Person JSON-LD and clarifies the archive is not a peer-reviewed encyclopedia; points to SEP/IEP.
- Corrections log entries for Meditations split and Key-terms fix (2026-10-11).

## Test plan
- [x] `astro build` succeeds (Node ≥22)
- [x] `/works/meditations` lists only Marcus Aurelius
- [x] `/works/meditations-on-first-philosophy` lists only Descartes
- [x] Confucius Key terms are Chinese; Nietzsche Key terms are amor fati / Übermensch / ressentiment
- [x] Thiel guide + thinker pages emit `noindex`
- [x] About shows Kyree Meng + Person schema

## Out of scope (P1+)
Glossary “related quotes” still theme-recall; misattribution register still small; verification rate still ~8%.
