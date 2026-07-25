# Philosophy Blind Box

A curated archive of English philosophy quotations. Each visit presents one passage at random.

## Brand voice

- Main: English words. Chance encounter.
- Value: A curated archive of philosophy quotations in English.
- CTA: Another quotation
- About: An archive of chance encounters

## Stack

- [Astro](https://astro.build) static HTML for crawlable pages
- `@astrojs/sitemap` for XML sitemaps
- DM Sans Variable + Newsreader Variable
- Source corpus: `philosophy_quotes_curated.md` (English renderings only)

## Commands

```bash
npm install
npm run build:quotes
npm run build:og
npm run dev
npm run build
npm run preview
```

Rebuild quotations from the curated Markdown source:

```bash
npm run build:quotes -- /path/to/philosophy_quotes_curated.md
```

## Site map

- `/` one English quotation selected at random
- `/quotes` searchable archive
- `/quotes/q0001` individual quotation pages
- `/thinkers` and `/thinkers/[slug]` thinker indexes
- `/themes` and `/themes/[slug]` theme indexes
- `/about` editorial method and purpose

Update `site` in `astro.config.mjs` and the Sitemap URL in `public/robots.txt` before deploying to a real domain.
