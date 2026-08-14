# Philosophy Corpus Audit & Expansion Design

**Date:** 2026-08-14  
**Status:** Approved for planning  
**Site:** Philosophy Blind Box (`philosophydef`)  
**Approach:** Dual-track parallel (Track A: revise existing; Track B: expand)

## 1. Problem

The site presents a curated archive of English philosophy quotations (source of truth: `data/philosophy_quotes_curated.md` → `src/data/quotes.json`). The corpus is already at 500 bilingual entries with confidence marks, but a professional review finds:

- Vague school labels (e.g. `Philosophy of Life`, `Enlightenment`, `Political Philosophy`)
- Scriptural works treated as personal authors (`Dhammapada`, `Bhagavad Gita`, etc.)
- Heavy template repetition in thinker biographies (~89 identical boilerplate blocks)
- Thin representation of women philosophers (~5) and no African / African-diaspora tradition coverage
- Islamic–Jewish medieval coverage present but shallow relative to Greco-Roman / Chinese weight
- Theme fragmentation upstream of `theme-merge` (500+ raw theme strings)

## 2. Goals

| Goal | Target |
|------|--------|
| Corpus size | ~650–700 entries (keep corrected base + ~+150–200 new) |
| Source format | Full bilingual entries (language, original, English, Chinese, themes, confidence, notes) |
| Editorial standard | “Classic-readable”: verifiable + accurate translation; allow a few representative canonical lines with short context |
| Coverage | Balanced new weight across women, Islamic/Jewish medieval, African & diaspora |
| Enrichment quality | Non-templated thinker guides; school short-list; controlled themes |
| Site surface | Remains English-first for readers; bilingual Markdown remains the editorial archive |

### Success criteria

- Entry count ∈ 650–700
- New entries roughly balanced across the three gap pillars (~45–60 each) plus a small buffer
- Clear drop in misattribution risk and vague school labels
- No residual “Method matters: dialectic, meditation…” template prose in thinker guides
- `npm run build` (or at least `build:quotes` + site data export) succeeds; SEO verify script still usable

### Non-goals (this round)

- Chinese UI / Chinese-first site
- Exhaustive coverage of any tradition
- Turning the site into a full-text academic database
- Unverifiable internet “inspirational” quotations

## 3. Editorial policy (shared by both tracks)

### Keep only if all hold

1. Source is citable, or explicitly marked as a reliable later paraphrase / standard English rendering  
2. English and Chinese align with the sense of the original (original text included when possible; if lost, note it)  
3. The line either offers lasting insight for a general reader **or** is historically representative and carries 1–2 sentences of context  
4. Excludes: forgery / misattribution, sloganized political propaganda, opaque jargon without context, chapter-dependent arguments cut into misleading “quotes”

### Confidence

- ★ (High): original wording and source verified  
- ☆ (Medium): sense secure; wording is a standard compression, excerpt, or reliable paraphrase  

### Author field

- Persons: standard English name on site; Chinese / English in Markdown source  
- Scriptures and anonymous traditions: do **not** pretend to be a single person. Prefer “text + tradition” labeling (e.g. *Dhammapada* / Early Buddhism) or established conventional attribution (e.g. The Buddha) with a note on textual history  

### School field

- Retire over-broad primary labels: `Philosophy of Life`, `Enlightenment`, `Political Philosophy`, `Roman Philosophy`, `Moral Philosophy` as catch-alls  
- Map the corpus onto a maintainable short list (~40–60 labels), e.g. Nietzsche → a specific modern label used consistently site-wide; Rousseau → social-contract / Genevan context label rather than bare `Enlightenment`  

### Themes

- Continue using `src/data/theme-merge.json` as the publish gate  
- New themes only when necessary; thin labels merge into canonical themes  

## 4. Expansion quotas (~+170 mid-target)

| Pillar | Approx. new entries | Direction (illustrative, not final roster) |
|--------|---------------------|--------------------------------------------|
| Women philosophers | ~55–60 | Deepen Wollstonecraft, Beauvoir, Weil, Murdoch, Arendt; add Anscombe, Foot, Hypatia (cautious), Nussbaum, selected Africana women philosophers |
| Islamic / Jewish medieval | ~45–50 | Al-Farabi, Avicenna, deepen Averroes & Al-Ghazali, Ibn Tufayl, deepen Maimonides, Saadia where quotable |
| African & African diaspora | ~45–50 | Wiredu, Hountondji, Fanon, Senghor, Appiah; cautious use of early wisdom literature only when sourceable; Ubuntu-related lines only if verifiable |
| Other gaps / replace buffer | ~20–30 | Kyoto School depth, selected Indian logic / later Buddhist lines, a few Latin American figures; replace weakest existing entries |

Existing 500: **revise in place**; replace only when an entry fails the keep-criteria.

**Quota counting rule:** An entry belongs to exactly one pillar for quota math. Africana / African-diaspora women count under **Women philosophers** (diversity within that pillar), not double-counted under African & diaspora. Medieval Jewish women (if any) count under **Women**; otherwise Jewish medieval men under **Islamic / Jewish medieval**.

## 5. Dual-track workflow

### Track A — Revise existing corpus

1. High-risk attribution audit (Stoic popularizations, Montaigne/Seneca mix-ups, unstable Nietzsche English, etc.)  
2. Normalize author fields for scriptures and composite traditions  
3. Apply school short-list mapping across all entries  
4. Merge / retag themes through existing merge config  
5. Rewrite thinker biographies: remove templates; follow SEP / Britannica / IEP consensus for overview, ideas, works, legacy — for every author who has quotes, including new authors from Track B  

### Track B — Write new bilingual entries

1. Draft against the same Markdown schema as v4.3  
2. Each new tradition batch must include at least some ★ entries  
3. Every new author gets a non-templated thinker guide before publish  
4. Themes land on canonical themes or explicitly approved new ones  

### Merge & publish

1. Merge both tracks into `data/philosophy_quotes_curated.md`  
2. Bump document version notes (e.g. v5.0)  
3. Run `npm run build:quotes` (and full `npm run build` before release)  
4. Patch `about` / `editorial-policy` / `sourcing-method` counts and coverage claims  
5. Light-touch updates to `enrichment.ts` theme guides and `guides.ts` only where coverage claims would otherwise be false  

## 6. Site surfaces touched

| Asset | Role |
|-------|------|
| `data/philosophy_quotes_curated.md` | Canonical bilingual corpus |
| `src/data/quotes.json` | Generated English site corpus |
| `src/data/thinkers-researched.ts` / `thinkers-extra.ts` | Thinker guides |
| `src/data/enrichment.ts` | Theme guides + guide merge |
| `src/data/theme-merge.json` | Theme canon |
| `src/pages/about.astro` (+ editorial/sourcing pages) | Public method & coverage claims |

UI/layout redesign is out of scope.

## 7. Final checklist

- [ ] Entry count ∈ 650–700  
- [ ] Three gap pillars roughly balanced at the intended new-entry scale  
- [ ] Spot-check ≥10% of sources and translations  
- [ ] No biography template catchphrases remaining  
- [ ] Build + data export succeed; SEO verify still runnable  

## 8. Open decisions resolved in discovery

| Question | Decision |
|----------|----------|
| Scope | Systematic expansion + quality (option C) |
| Size | ~650–700 (option B) |
| Tone | Classic-readable (option B) |
| Expansion mix | Balanced pillars (option A) |
| Source language | Full bilingual Markdown (option A) |
| Delivery | Dual-track parallel (approach 2) |

## 9. Next step

Write an implementation plan (`writing-plans`) that sequences Track A and Track B tasks, verification commands, and acceptance checks — then execute against this spec.
