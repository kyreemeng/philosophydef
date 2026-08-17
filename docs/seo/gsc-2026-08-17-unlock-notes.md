# GSC Unlock Notes (2026-08-17)

Source: `philosophydef.com-Performance-on-Search-2026-08-17.xlsx` (Web; past 3 months filter; chart ~Jul 24–Aug 14).

## Snapshot
- ~21 clicks / ~5.0k impressions (early site)
- Desktop: high impressions, CTR ~0.28%, avg position ~38
- Mobile: fewer impressions, higher CTR (~1.4%), better avg position (~13.5)
- Top markets by impressions: US, Philippines, India, Indonesia, UK

## Diagnosis (SEO-Awesome STEP: 有站要优化)
1. **High imps / near-zero CTR** → rewrite TDH to match query intent (famous quote + source).
2. **Striking distance (pos 5–20)** → same pages; CTR lift is the lever to page 1.
3. **Broken slug** → `Søren Kierkegaard` was `s-ren-kierkegaard` (ø stripped); fixed to `soren-kierkegaard` + 301.

## Shipped 2026-08-17
| Opportunity | Action |
|-------------|--------|
| q0001 (390 imps, 0.3% CTR) | Title/H1/desc → “Unexamined life…” + Apology 38a |
| Source-intent quotes (James, Aurelius hive, Seneca stars, Weil, Nietzsche overcome, Aquinas, Rousseau…) | Override TDH with “Quote Source” framing |
| Default quote titles | Prefer `Author: “…” — Source: …` when citation exists |
| `/themes/self` | CTR title + Self intro/FAQ tied to examined life |
| `/quotes/about/love`, loneliness, peace | Stronger titles/descriptions |
| `/what-is-epistemology`, `/philosophy-of-ai` | Meaning/definition + AI intent in TDH |
| Socrates / Nietzsche / Nishida / Wang Yangming hubs | Query-matched titles + source cues |
| Kierkegaard URLs | slugify ø→o; 301 from `/thinkers/s-ren-kierkegaard/*` |

## Guard-list (keep watching)
| Query / page | Target URL |
|--------------|------------|
| philosophy quotes about self | `/themes/self` |
| kitaro nishida quotes | `/thinkers/nishida-kitaro` |
| wang yangming quotes | `/thinkers/wang-yangming` |
| socrates quotes | `/thinkers/socrates` |
| nietzsche quotes | `/thinkers/friedrich-nietzsche` |
| philosophical quotes about love | `/quotes/about/love` |
| epistemology / meaning | `/what-is-epistemology` |
| unexamined life / quote source | `/quotes/q0001` |
| hive / bee Marcus | `/quotes/q0102` |
| truth happens to an idea | `/quotes/q0120` |

## Next (after deploy)
- Resubmit sitemap in GSC; request indexing for q0001, themes/self, thinkers/soren-kierkegaard
- In 7–14 days: re-export GSC; expect CTR lift on override pages before position moves
