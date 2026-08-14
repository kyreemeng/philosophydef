# Philosophy Corpus Audit & Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Raise the bilingual philosophy corpus to ~650–700 classic-readable entries with balanced women / Islamic–Jewish medieval / African & diaspora coverage, while fixing schools, attributions, and templated thinker bios.

**Architecture:** Dual-track edit of `data/philosophy_quotes_curated.md` (Track A revise, Track B expand), gated by a new corpus validator script; regenerate `src/data/quotes.json` via `npm run build:quotes`; rewrite thinker guides and patch public editorial copy.

**Tech Stack:** Markdown corpus, Node (`scripts/build-quotes.mjs`), TypeScript enrichment data, Astro static site, Python/Node one-off validators.

**Spec:** `docs/superpowers/specs/2026-08-14-philosophy-corpus-audit-design.md`

---

## File map

| File | Responsibility |
|------|----------------|
| `data/philosophy_quotes_curated.md` | Canonical bilingual corpus (edit here) |
| `data/school-shortlist.json` | Create: canonical school English labels + remap table |
| `scripts/validate-corpus.mjs` | Create: count, schools, template-bio, pillar heuristics |
| `scripts/build-quotes.mjs` | Extend author aliases for new/normalized names |
| `src/data/quotes.json` | Generated only — never hand-edit |
| `src/data/thinkers-researched.ts` | Primary researched bios (detemplate + new authors) |
| `src/data/thinkers-extra.ts` | Overflow / secondary bios |
| `src/data/enrichment.ts` | Theme guides, `TEXT_TRADITION_NAMES`, merge of guides |
| `src/data/theme-merge.json` | Canonical theme gate for new thin labels |
| `src/pages/about.astro` | Coverage claims / counts |
| `src/pages/editorial-policy.astro` | Policy text if coverage claims change |
| `src/pages/sourcing-method.astro` | Method text if version bump |

**Entry template** (every new/revised Markdown block must match):

```markdown
#### Q0XXX

- **作者 / Author**: 中文名（生卒） / English Name (dates)
- **学派 / School**: 中文标签 / Canonical English School
- **出处 / Source**: 中文出处 / English source with locus
- **原文语言 / Language**: 中文 / English language name
- **原文 / Original**: …
- **英译 / English**: …
- **中译 / Chinese**: …
- **主题 / Themes**: 中文主题 / English, Themes, Here
- **置信度 / Confidence**: ★ (High)   # or ☆ (Medium)
- **备注 / Note**: optional context (required for ☆ and for “classic-readable” technical lines)
```

**Quota counting rule:** each new entry belongs to exactly one pillar (see spec §4).

---

### Task 1: School shortlist + corpus validator

**Files:**
- Create: `data/school-shortlist.json`
- Create: `scripts/validate-corpus.mjs`
- Modify: `package.json` (add `"validate:corpus": "node scripts/validate-corpus.mjs"`)

- [x] **Step 1: Write `data/school-shortlist.json`**

```json
{
  "canonical": [
    "Socratic School",
    "Platonism",
    "Peripatetic School",
    "Stoicism",
    "Epicureanism",
    "Cynicism",
    "Sophists",
    "Pre-Socratic",
    "Neoplatonism",
    "Patristic Philosophy",
    "Scholasticism",
    "Islamic Philosophy",
    "Jewish Rationalism",
    "Rabbinic Judaism",
    "Confucianism",
    "Neo-Confucianism",
    "Daoism",
    "Legalism",
    "Mohism",
    "Early Buddhism",
    "Zen Buddhism",
    "Kyoto School",
    "Indian Classical Philosophy",
    "Vedanta",
    "Rationalism",
    "Empiricism",
    "British Empiricism",
    "Scottish Enlightenment",
    "Critical Philosophy",
    "German Idealism",
    "Utilitarianism",
    "Pragmatism",
    "Existentialism",
    "Phenomenology",
    "Analytic Philosophy",
    "Critical Rationalism",
    "Transcendentalism",
    "Process Philosophy",
    "Feminist Philosophy",
    "Africana Philosophy",
    "Social Contract Theory",
    "Political Liberalism",
    "Philosophy of the Absurd",
    "Dialogical Philosophy",
    "Renaissance Humanism",
    "Voluntarism",
    "Philosophy of Will",
    "Logotherapy",
    "Modern New Confucianism",
    "Military Thought",
    "Religious Existentialism",
    "Christian Existential Precursor",
    "Platonic Moral Philosophy"
  ],
  "remap": {
    "Philosophy of Life": {
      "Friedrich Nietzsche": "Philosophy of Will",
      "Henri Bergson": "Process Philosophy"
    },
    "Philosophy of life": {
      "Henri Bergson": "Process Philosophy"
    },
    "Enlightenment": {
      "Voltaire": "Political Liberalism",
      "Jean-Jacques Rousseau": "Social Contract Theory"
    },
    "Enlightenment / Social Contract": {
      "*": "Social Contract Theory"
    },
    "Political Philosophy": {
      "Hannah Arendt": "Political Liberalism",
      "John Locke": "Social Contract Theory",
      "Alexis de Tocqueville": "Political Liberalism"
    },
    "Political philosophy": {
      "Hannah Arendt": "Political Liberalism"
    },
    "Modern Political Philosophy": {
      "Thomas Hobbes": "Social Contract Theory"
    },
    "Roman Philosophy": {
      "Cicero": "Stoicism"
    },
    "Roman Literary Thought": {
      "Horace": "Stoicism",
      "Ovid": "Renaissance Humanism"
    },
    "Moral Philosophy": {
      "Simone Weil": "Religious Existentialism",
      "David Hume": "Scottish Enlightenment",
      "Adam Smith": "Scottish Enlightenment",
      "Iris Murdoch": "Platonic Moral Philosophy"
    },
    "Philosophy of Existence": {
      "Karl Jaspers": "Existentialism"
    },
    "Early Modern Thought": {
      "Blaise Pascal": "Christian Existential Precursor"
    },
    "Medieval Thought": {
      "Dante Alighieri": "Scholasticism"
    },
    "Analytic philosophy": { "*": "Analytic Philosophy" },
    "German idealism": { "*": "German Idealism" },
    "Islamic philosophy": { "*": "Islamic Philosophy" },
    "Critical rationalism": { "*": "Critical Rationalism" },
    "Process philosophy": { "*": "Process Philosophy" },
    "Philosophy of the absurd": { "*": "Philosophy of the Absurd" },
    "Zen / Chan": { "*": "Zen Buddhism" },
    "Chan / Zen": { "*": "Zen Buddhism" },
    "Chan / Zen Buddhism": { "*": "Zen Buddhism" },
    "Epicurean School": { "*": "Epicureanism" }
  }
}
```

- [x] **Step 2: Write failing validator `scripts/validate-corpus.mjs`**

```js
import { readFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const mdPath = resolve(root, "data/philosophy_quotes_curated.md");
const shortlistPath = resolve(root, "data/school-shortlist.json");
const thinkersPath = resolve(root, "src/data/thinkers-researched.ts");

const md = await readFile(mdPath, "utf8");
const shortlist = JSON.parse(await readFile(shortlistPath, "utf8"));
const thinkersSrc = await readFile(thinkersPath, "utf8");

const ids = [...md.matchAll(/^####\s+(Q\d+)\s*$/gm)].map((m) => m[1]);
const schools = [...md.matchAll(/\*\*学派 \/ School\*\*:\s*(.+)/g)].map((m) => {
  const parts = m[1].split(/\s*[\/／]\s*/);
  return (parts[parts.length - 1] || m[1]).trim();
});

const errors = [];
if (ids.length < 650 || ids.length > 700) {
  errors.push(`count ${ids.length} not in 650–700`);
}
const nonCanonical = [...new Set(schools.filter((s) => !shortlist.canonical.includes(s)))];
if (nonCanonical.length) {
  errors.push(`non-canonical schools (${nonCanonical.length}): ${nonCanonical.slice(0, 20).join("; ")}`);
}
const templateHits = (
  thinkersSrc.match(/Method matters: dialectic, meditation/g) || []
).length;
if (templateHits > 0) {
  errors.push(`templated bios remaining: ${templateHits}`);
}

if (errors.length) {
  console.error("validate-corpus FAILED:");
  for (const e of errors) console.error(" -", e);
  process.exit(1);
}
console.log(`validate-corpus OK: ${ids.length} entries, schools canonical, bios detemplated`);
```

- [x] **Step 3: Wire npm script and run validator (expect FAIL on count)**

```bash
# package.json scripts add:
# "validate:corpus": "node scripts/validate-corpus.mjs"

npm run validate:corpus
```

Expected: FAIL with `count 500 not in 650–700` (and likely non-canonical schools / templated bios).

- [x] **Step 4: Commit**

```bash
git add data/school-shortlist.json scripts/validate-corpus.mjs package.json
git commit -m "$(cat <<'EOF'
Add school shortlist and corpus validator for the v5 expansion.

EOF
)"
```

---

### Task 2: Remap vague schools in the Markdown corpus (Track A)

**Files:**
- Modify: `data/philosophy_quotes_curated.md`
- Modify: `data/school-shortlist.json` (only if remap reveals missing canonical labels)

- [x] **Step 1: Apply remaps mechanically**

Run a one-off Node script (may live as `scripts/remap-schools.mjs` then delete, or run inline) that:

1. Parses each `#### Qxxxx` block  
2. Reads Author (English side) + School (English side)  
3. Looks up `shortlist.remap[school][author] || shortlist.remap[school]["*"]`  
4. Rewrites the English side of the School line; keep a sensible Chinese label matching the new school  

Also normalize case/duplicates listed in `remap` (e.g. `Analytic philosophy` → `Analytic Philosophy`).

- [x] **Step 2: Manual pass for remaining non-canonical schools**

```bash
node -e "
import {readFileSync} from 'fs';
const md=readFileSync('data/philosophy_quotes_curated.md','utf8');
const sl=JSON.parse(readFileSync('data/school-shortlist.json','utf8'));
const schools=[...md.matchAll(/\*\*学派 \/ School\*\*:\s*(.+)/g)].map(m=>{
  const p=m[1].split(/\s*[\/／]\s*/); return (p.at(-1)||'').trim();
});
console.log([...new Set(schools.filter(s=>!sl.canonical.includes(s)))].sort().join('\n'));
"
```

Map every remaining label into `canonical` (either by editing quotes or by promoting a label into `canonical` when it is a real tradition worth keeping — prefer remapping into the short list unless the tradition is load-bearing, e.g. `Mohism`).

- [x] **Step 3: Rebuild quotes.json and spot-check**

```bash
npm run build:quotes
node -e "import q from './src/data/quotes.json' with {type:'json'}; console.log([...new Set(q.map(x=>x.school))].sort().join('\n'))"
```

Expected: school set size roughly 40–70; no `Philosophy of Life`, bare `Enlightenment`, or bare `Political Philosophy`.

- [x] **Step 4: Commit**

```bash
git add data/philosophy_quotes_curated.md data/school-shortlist.json src/data/quotes.json
git commit -m "$(cat <<'EOF'
Normalize corpus school labels onto the maintainable shortlist.

EOF
)"
```

---

### Task 3: High-risk attribution & scripture author cleanup (Track A)

**Files:**
- Modify: `data/philosophy_quotes_curated.md`
- Modify: `scripts/build-quotes.mjs` (`authorAliases`)
- Modify: `src/data/enrichment.ts` (`TEXT_TRADITION_NAMES`)

- [ ] **Step 1: Fix scripture / tradition author display names**

Ensure Markdown Author English sides use stable names already aliased or add aliases:

| Prefer display name | Notes |
|---------------------|-------|
| `Dhammapada` | keep as text tradition |
| `Bhagavad Gita` | keep as text tradition |
| `Chandogya Upanisad` | keep spelling consistent |
| `Diamond Sutra` | keep |
| `The Book of Changes` | keep |
| `The Great Learning` | keep |
| `The Doctrine of the Mean` | keep |
| `Talmudic tradition` | keep |
| `Guanzi` | text tradition (already) |

For each, add/confirm a **备注 / Note** that this is a textual tradition attribution, not a modern individual biography.

Update `TEXT_TRADITION_NAMES` if any new scripture authors appear.

- [ ] **Step 2: Attribution audit checklist (must touch each)**

Review and correct or annotate these high-risk clusters (search by author or famous wording):

1. Nietzsche English lines — prefer Kaufmann / Cambridge loci; mark ☆ if compressed  
2. Stoic “popular” lines (Epictetus / Marcus / Seneca) — verify against Loeb / standard editions  
3. Confucius / Laozi — ensure chapter references (e.g. Analects book.chapter; Daodejing chapter)  
4. Any quote whose Note already flags paraphrase — keep ☆ and accurate source wording  
5. Remove or replace entries that fail keep-criteria (forgery, slogan, untraceable)

When replacing, reuse the same `Qxxxx` id only if the new text is a true correction of that slot; otherwise delete and free the id for Track B renumbering at the end.

- [ ] **Step 3: Rebuild + commit**

```bash
npm run build:quotes
git add data/philosophy_quotes_curated.md scripts/build-quotes.mjs src/data/enrichment.ts src/data/quotes.json
git commit -m "$(cat <<'EOF'
Fix high-risk attributions and normalize scripture author labels.

EOF
)"
```

---

### Task 4: Track B — Women philosophers (~55–60 new entries)

**Files:**
- Modify: `data/philosophy_quotes_curated.md` (append `Q0501` onward, or next free id)
- Create/Modify thinker guides for each new person in `src/data/thinkers-researched.ts` or `thinkers-extra.ts`

**Target roster (adjust counts, keep pillar total ~55–60):**

| Thinker | Target new quotes | School label |
|---------|-------------------|--------------|
| Mary Wollstonecraft | 4–5 | Feminist Philosophy |
| Simone de Beauvoir | 5–6 | Existentialism |
| Simone Weil | 4–5 | Religious Existentialism (canonical) |
| Iris Murdoch | 4–5 | Platonic Moral Philosophy |
| Hannah Arendt | 3–4 | Political Liberalism |
| Elizabeth Anscombe | 4–5 | Analytic Philosophy |
| Philippa Foot | 4–5 | Analytic Philosophy |
| Martha Nussbaum | 4–5 | Political Liberalism |
| Hypatia of Alexandria | 2–3 | Neoplatonism (☆ + note on source limits) |
| Christine de Pizan | 2–3 | Renaissance Humanism |
| Edith Stein | 2–3 | Phenomenology |
| María Lugones or Gloria Anzaldúa | 2–3 | Feminist Philosophy (only if quotable + citable) |
| Sophie Oluwole | 3–4 | Africana Philosophy (counts under Women pillar) |
| Angela Davis or Audre Lorde | 2–3 | Feminist Philosophy / Africana — only philosophically framed lines |

- [ ] **Step 1: Append bilingual entries `Q0501`–≈`Q0560`**

Use the entry template. Prefer ★. For technical but classic lines (Anscombe on intention; Beauvoir on ambiguity), add a one-sentence 备注.

Example shape (do not copy if unverified — replace with verified locus):

```markdown
#### Q0501

- **作者 / Author**: 玛丽·沃斯通克拉夫特（1759–1797） / Mary Wollstonecraft (1759–1797)
- **学派 / School**: 女性主义哲学 / Feminist Philosophy
- **出处 / Source**: 《女权辩护》 / A Vindication of the Rights of Woman (verify chapter)
- **原文语言 / Language**: 英语 / English
- **原文 / Original**: …
- **英译 / English**: …
- **中译 / Chinese**: …
- **主题 / Themes**: 教育、理性、平等 / Education, Reason, Equality
- **置信度 / Confidence**: ★ (High)
```

- [ ] **Step 2: Add non-templated thinker guides** for every new name (overview / ideas / works / legacy; no “Method matters…” prose).

- [ ] **Step 3: Rebuild and count pillar**

```bash
npm run build:quotes
node -e "
import q from './src/data/quotes.json' with {type:'json'};
const women=new Set(['Mary Wollstonecraft','Simone de Beauvoir','Simone Weil','Iris Murdoch','Hannah Arendt','Elizabeth Anscombe','Philippa Foot','Martha Nussbaum','Hypatia of Alexandria','Christine de Pizan','Edith Stein','Sophie Oluwole']);
console.log('women-ish quotes', q.filter(x=>[...women].some(n=>x.author.includes(n.split(' ').slice(-1)[0])||x.author===n)).length);
console.log('total', q.length);
"
```

- [ ] **Step 4: Commit**

```bash
git add data/philosophy_quotes_curated.md src/data/thinkers-researched.ts src/data/thinkers-extra.ts src/data/quotes.json
git commit -m "$(cat <<'EOF'
Add bilingual entries and guides for women philosophers.

EOF
)"
```

---

### Task 5: Track B — Islamic / Jewish medieval (~45–50)

**Files:**
- Modify: `data/philosophy_quotes_curated.md`
- Modify: thinker guide files
- Modify: `scripts/build-quotes.mjs` aliases for `Avicenna` / `Al-Farabi` / `Ibn Tufayl` / `Saadia Gaon` as needed

**Roster:**

| Thinker | Target | School |
|---------|--------|--------|
| Al-Farabi | 5–6 | Islamic Philosophy |
| Avicenna (Ibn Sina) | 6–7 | Islamic Philosophy |
| Averroes (Ibn Rushd) | 5–6 | Islamic Philosophy |
| Al-Ghazali | 4–5 | Islamic Philosophy |
| Ibn Tufayl | 3–4 | Islamic Philosophy |
| Ibn Khaldun | 3–4 | Islamic Philosophy (already present — deepen) |
| Maimonides | 5–6 | Jewish Rationalism |
| Saadia Gaon | 3–4 | Jewish Rationalism |
| Judah Halevi (optional) | 2–3 | Jewish Rationalism |

- [ ] **Step 1: Append ~45–50 bilingual entries** with Arabic/Hebrew originals when feasible; otherwise English + note on standard translation (e.g. Goodman, Pines).

- [ ] **Step 2: Thinker guides** (non-templated) for each new author; deepen existing Al-Ghazali / Averroes / Maimonides / Ibn Khaldun guides if still thin.

- [ ] **Step 3: Rebuild + commit**

```bash
npm run build:quotes
git add data/philosophy_quotes_curated.md scripts/build-quotes.mjs src/data/thinkers-researched.ts src/data/thinkers-extra.ts src/data/quotes.json
git commit -m "$(cat <<'EOF'
Expand Islamic and Jewish medieval quotations with verified bilingual entries.

EOF
)"
```

---

### Task 6: Track B — African & African diaspora (~45–50)

**Files:**
- Modify: `data/philosophy_quotes_curated.md`
- Modify: thinker guides
- Modify: `src/data/enrichment.ts` history blurbs only if a theme claims “no African…” falsely

**Roster:**

| Thinker | Target | School |
|---------|--------|--------|
| Kwasi Wiredu | 6–7 | Africana Philosophy |
| Paulin Hountondji | 5–6 | Africana Philosophy |
| Frantz Fanon | 6–7 | Africana Philosophy |
| Léopold Sédar Senghor | 4–5 | Africana Philosophy |
| Kwame Anthony Appiah | 5–6 | Africana Philosophy |
| Aimé Césaire | 3–4 | Africana Philosophy |
| Anton Wilhelm Amo (if solid sources) | 2–3 | Africana Philosophy |
| Ubuntu-related (Ramose or verified proverb tradition) | 2–4 | Africana Philosophy — ★/☆ strict |

Do **not** invent “ancient Egyptian philosophy” quotes without critical editions. Skip Ptahhotep unless a scholarly English locus is cited in 备注.

- [x] **Step 1: Append entries** (classic-readable: allow Fanon/Césaire political-philosophical lines with short context notes).

- [x] **Step 2: Guides + rebuild + commit**

```bash
npm run build:quotes
git add data/philosophy_quotes_curated.md src/data/thinkers-researched.ts src/data/thinkers-extra.ts src/data/quotes.json
git commit -m "$(cat <<'EOF'
Add Africana and diaspora philosophy quotations and thinker guides.

EOF
)"
```

---

### Task 7: Buffer / other gaps (~20–30) + ID hygiene

**Files:**
- Modify: `data/philosophy_quotes_curated.md`
- Header version block at top of the Markdown file → bump to **v5.0**

- [x] **Step 1: Add buffer entries** from: Kyoto School (Nishida deepen, Nishitani, Watsuji), Nāgārjuna or Dignāga (if quotable), selected Latin American (e.g. Zea, Dussel — only citable lines).

- [x] **Step 2: Replace weakest existing entries** if total would exceed 700 — prefer dropping untraceable or purely literary lines (weak Ovid/Horace/Dante slots) over cutting new pillar entries.

- [x] **Step 3: Ensure contiguous unique IDs `Q0001`…`Q0N` with no duplicates**

```bash
node -e "
import {readFileSync} from 'fs';
const ids=[...readFileSync('data/philosophy_quotes_curated.md','utf8').matchAll(/^####\s+(Q\d+)/gm)].map(m=>m[1]);
const dup=ids.filter((id,i)=>ids.indexOf(id)!==i);
console.log('count',ids.length,'dups',dup);
"
```

Expected: `dups []`, count ∈ 650–700.

- [x] **Step 4: Update Markdown header** (totals, version v5.0, date, coverage sentence including Africana).

- [x] **Step 5: Commit**

```bash
git add data/philosophy_quotes_curated.md src/data/quotes.json
git commit -m "$(cat <<'EOF'
Fill expansion buffer and bump curated corpus to v5.0.

EOF
)"
```

---

### Task 8: Detemplate all researched thinker bios (Track A)

**Files:**
- Modify: `src/data/thinkers-researched.ts`
- Modify: `src/data/thinkers-extra.ts` if templates exist there

- [x] **Step 1: Confirm template burden**

```bash
rg -c "Method matters: dialectic, meditation" src/data/thinkers-researched.ts src/data/thinkers-extra.ts
rg -c "Active within the tradition labeled" src/data/thinkers-researched.ts
```

Expected before fix: large counts (~89). After: `0`.

- [x] **Step 2: Rewrite strategy**

For each templated thinker:

1. Keep accurate `lifespan`, `school`, `jobTitle`, `knowsAbout`, dates  
2. Replace `overview` with 4–7 sentences of person-specific biography (SEP/Britannica/IEP consensus)  
3. Replace `ideas` with doctrine-specific summary (no shared boilerplate paragraph)  
4. Keep 3–5 real `works`  
5. Replace `legacy` with reception-specific 2–4 sentences  

Process in batches of ~20 thinkers per commit if needed (Ancient → Chinese → Modern → New Track B names already written in Tasks 4–6).

- [x] **Step 3: Verify zero templates**

```bash
rg "Method matters: dialectic, meditation" src/data || true
rg "Active within the tradition labeled" src/data || true
```

Expected: no matches.

- [x] **Step 4: Commit**

```bash
git add src/data/thinkers-researched.ts src/data/thinkers-extra.ts
git commit -m "$(cat <<'EOF'
Replace templated thinker biographies with figure-specific guides.

EOF
)"
```

---

### Task 9: Theme merge + public copy sync

**Files:**
- Modify: `src/data/theme-merge.json` (add thinMerges for any new one-off themes from Track B)
- Modify: `src/pages/about.astro`
- Modify: `src/pages/editorial-policy.astro`
- Modify: `src/pages/sourcing-method.astro`
- Modify: `src/data/enrichment.ts` only where theme history denies Africana/Islamic depth

- [ ] **Step 1: Collect raw themes not in keep/merge**

```bash
npm run build:quotes
node -e "
import q from './src/data/quotes.json' with {type:'json'};
import m from './src/data/theme-merge.json' with {type:'json'};
const keep=new Set(m.keepThemes);
const caseMap=m.caseMap; const thin=m.thinMerges;
const raw=new Set(q.flatMap(x=>x.themes));
const unresolved=[...raw].filter(t=>{
  const c=caseMap[t]??t; if(keep.has(c)) return false; return !(c in thin);
});
console.log(unresolved.sort().join('\n'));
"
```

Map each unresolved theme into `thinMerges` or `keepThemes`.

- [ ] **Step 2: Update about/editorial/sourcing** to say ~650–700 passages, and list Africana alongside Greco-Roman, Chinese, Indian, Islamic, Jewish, Japanese.

- [ ] **Step 3: Commit**

```bash
git add src/data/theme-merge.json src/pages/about.astro src/pages/editorial-policy.astro src/pages/sourcing-method.astro src/data/enrichment.ts
git commit -m "$(cat <<'EOF'
Sync theme merges and editorial copy with the v5 corpus.

EOF
)"
```

---

### Task 10: Full build, validate, acceptance

**Files:** none new (verification only)

- [x] **Step 1: Full pipeline**

```bash
npm run build:quotes
npm run validate:corpus
npm run build
npm run seo:verify
```

Expected:

- `validate-corpus OK: N entries` with N ∈ 650–700  
- Astro build succeeds  
- SEO verify exits 0 (or only pre-existing non-blocking warnings — do not introduce new broken canonicals)

- [x] **Step 2: Manual acceptance spot-check (≥10%)**

Pick ≥70 random IDs:

```bash
node -e "
import q from './src/data/quotes.json' with {type:'json'};
const idx=[...Array(q.length).keys()].sort(()=>Math.random()-0.5).slice(0,70);
for (const i of idx) console.log(q[i].id, q[i].author, q[i].source);
"
```

For each, open the Markdown block and confirm source + English/Chinese alignment. Log failures and fix before final commit.

- [x] **Step 3: Final commit if fixes landed**

```bash
git add data/philosophy_quotes_curated.md src/data/quotes.json src/data/thinkers-researched.ts src/data/thinkers-extra.ts
git commit -m "$(cat <<'EOF'
Finish v5 corpus acceptance fixes after spot-check.

EOF
)"
```

---

## Spec coverage check

| Spec requirement | Task(s) |
|------------------|---------|
| Size 650–700 | 4–7, 10 |
| Bilingual source maintained | 4–7 |
| Classic-readable standard | 3–6 notes |
| Balanced pillars | 4, 5, 6 + quota rule |
| School shortlist | 1–2 |
| Scripture author normalization | 3 |
| Detemplated bios | 8 |
| Theme control | 9 |
| About/editorial sync | 9 |
| Build + checklist | 10 |
| Non-goals respected | Throughout (no Chinese UI; no exhaustive canon) |

## Execution notes

- Prefer committing after each task.  
- Never hand-edit `src/data/quotes.json`.  
- When unsure of a citation, mark ☆ with an honest note — or omit the entry.  
- Africana women count under Task 4 quotas only (spec counting rule).
