# GSC traffic recovery — 2026-08-26

Source: `philosophydef.com-Performance-on-Search-2026-08-26.xlsx`
(Google Search Console, Web, past three months).

## What the export shows

- 23 clicks and 5,191 impressions from July 24 through August 23.
- Overall CTR: 0.44%.
- The latest seven reported days produced 61 impressions and 0 clicks,
  compared with 809 impressions and 10 clicks in the previous seven days.
- The visibility drop began on August 16, immediately after the August 14
  corpus expansion from 499 to 673 quotations and its larger generated URL set.
- Quote details remain the largest opportunity: 2,152 impressions across 175
  observed pages.
- Thinker and thinker×theme pages contributed another 2,307 impressions.

This does not prove that page count alone caused the decline, but the timing and
route audit show that crawl/index allocation needed correction before adding
more programmatic pages.

## Critical route regression found

The GSC export contained 107 thinker×theme landing pages. The current build
generated only 29 of them:

- 93 GSC-observed URLs were missing from the local build.
- Those missing URLs had already earned 864 impressions and 4 clicks.
- Live spot checks confirmed 404 responses for pages including
  `/thinkers/socrates/justice`, `/thinkers/nishida-kitaro/experience`,
  `/thinkers/xunzi/learning`, and `/thinkers/paul-tillich/courage`.

The generation rule now preserves every thinker×theme path with measured GSC
demand, even when corpus normalization leaves fewer than four quotations in
that pair.

## Index allocation changes

The strategy is demand-preserving consolidation:

1. Keep the original Q0001–Q0499 corpus indexable.
2. Keep every GSC-observed thinker, theme, and thinker×theme landing page
   indexable.
3. Mark the later Q0500–Q0673 expansion `noindex, follow` and remove those
   detail pages from the sitemap until they demonstrate a stronger reason to
   compete.
4. Require at least 10 quotations for a new theme page and 4 for a new thinker
   page unless GSC has already observed demand.
5. Restore all GSC-proven thinker×theme routes without reopening the full set
   of 1,000+ one-quote combinations.

Result after build:

- Before: 969 indexable URLs.
- After: 849 indexable URLs.
- 397/397 GSC landing-page rows resolve to an indexable local page (accounting
  for the corrected Søren Kierkegaard redirect).
- 0 GSC landing pages missing.
- 0 GSC landing pages marked noindex.
- Sitemap/indexability audit passes.

## CTR and relevance work

Added or strengthened source-intent metadata for:

- Socrates — “What I do not know…”
- Martin Buber — “All real living is meeting”
- Linji Yixuan — “Wherever you are, make yourself master”
- Francis Bacon — “Human knowledge and human power meet in one”
- Aristotle — “Virtue lies in a mean”

Added query-matched metadata for Wang Guowei, Zengzi, Gabriel Marcel,
John Stuart Mill, and the strongest thinker×theme opportunities. Expanded the
love, fear, and loneliness hubs with distinct editorial explanations rather
than another undifferentiated quotation list. The homepage now links directly
to the high-impression epistemology guide.

## Production follow-up

After a reviewed production deployment:

1. Resubmit `https://www.philosophydef.com/sitemap-index.xml`.
2. Request recrawl for the restored high-opportunity pages:
   - `/thinkers/nishida-kitaro/experience`
   - `/thinkers/xunzi/learning`
   - `/thinkers/socrates/justice`
   - `/thinkers/paul-tillich/courage`
   - `/thinkers/william-james/truth`
3. In 7–14 days, compare impressions and indexed-page counts rather than
   reacting to daily volatility.
4. Do not add another large generated URL batch until visibility stabilizes.
