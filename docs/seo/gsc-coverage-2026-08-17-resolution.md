# GSC coverage resolution — 2026-08-17

Source: `philosophydef.com-Coverage-Drilldown-2026-08-17.xlsx`

## Export inventory

- Total URLs: 472
- Quote details: 374
- Quote archive pagination: 20
- Theme pages: 27
- Thinker pages: 23
- Guides/static pages: 15
- Remaining hubs, schools, and thinker-theme pages: 13

## Root cause

This is not a robots.txt, HTTP status, or canonical-wide failure. The site
released roughly 1,000 indexable URLs while still new, and most quote detail
pages used the same source/commentary template. Twenty near-identical archive
pagination pages were also included in the sitemap. That combination diluted
crawl attention and gave Google weak reasons to select every detail URL.

The Search Console export is historical. Google does not offer a general
purpose instant-indexing API for ordinary content, so no code change can
guarantee when Google will recrawl and select a URL. The correct fix is to make
the index signals internally consistent and materially improve page value.

## Changes

1. Quote pages now contain source-specific attribution, thinker context,
   theme-specific reading context, concept definitions, unique internal links,
   richer Quotation schema, keywords, citation, and `dateModified`.
2. All quote-to-search query links were replaced with stable thinker URLs,
   reducing crawlable query-parameter duplicates.
3. Obsolete `SearchAction` schema was removed.
4. Archive pages `/quotes/page/2` onward are now `noindex, follow` and excluded
   from the sitemap. They remain crawlable so Google can discover detail links.
5. Sitemap entries now carry stable, truthful `lastmod`, page-type-specific
   change frequency, and priority. Pagination is excluded.
6. Emotion hubs and theme hubs now have distinct titles.
7. The default robots directive permits full snippets and previews.
8. A build-blocking indexability audit now checks:
   - no redirect/noindex URL in the sitemap
   - every indexable page appears in the sitemap
   - self-referencing canonical integrity
   - title, description, and H1 presence/uniqueness
   - minimum quote-detail content depth
   - sitemap targets exist in the built output
9. The generic `Philosophy` fallback is no longer a noindex sink:
   - 305 thin/legacy theme redirects now resolve to the indexable `/themes` hub
   - quote and thinker-theme pages no longer link to `/themes/philosophy`
10. Vercel now runs `npm ci` and the full `npm run build` pipeline instead of
    trusting a potentially stale committed `dist`.
11. `/data/` JSON exports are excluded from crawler access in `robots.txt`.

## Post-build result

- 452 of the 472 exported URLs: index-ready, self-canonical, in sitemap
- 20 of the 472 exported URLs: intentionally consolidated pagination
  (`noindex, follow`, absent from sitemap)
- Missing files: 0
- Non-pagination noindex URLs in the export: 0
- Canonical errors: 0
- Index-ready URLs missing from sitemap: 0
- Quote detail content: minimum 432 words; average 569 words
- Whole-site audit: 969 indexable URLs and 969 sitemap URLs; passed
- Redirects targeting `/themes/philosophy`: 0
- Internal HTML links targeting `/themes/philosophy`: 0

Machine-readable per-URL result:
`docs/seo/gsc-coverage-2026-08-17-audit.json`

## Search Console follow-up

After deployment:

1. Resubmit `https://www.philosophydef.com/sitemap-index.xml`.
2. Start **Validate fix** for the affected coverage reason.
3. Request indexing only for a small representative set of high-value pages;
   do not manually submit hundreds of URLs.
4. Re-export the same report after Google has recrawled it. Coverage changes
   are expected to lag deployment.
