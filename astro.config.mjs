import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import {
  themeRedirects,
  thinkerSlugRedirects,
  themeGroups,
  thinkerGroups,
} from "./src/lib/content.ts";
import {
  shouldIndexQuote,
  shouldIndexTheme,
  shouldIndexThinker,
} from "./src/lib/indexing.ts";
import quotes from "./src/data/quotes.json" with { type: "json" };

const redirects = { ...themeRedirects(), ...thinkerSlugRedirects() };
const indexableThemePaths = new Set(
  themeGroups()
    .filter(shouldIndexTheme)
    .map((theme) => `/themes/${theme.slug}`),
);
const indexableThinkerPaths = new Set(
  thinkerGroups()
    .filter(shouldIndexThinker)
    .map((thinker) => `/thinkers/${thinker.slug}`),
);
const indexableQuotePaths = new Set(
  quotes
    .filter(shouldIndexQuote)
    .map((quote) => `/quotes/${quote.id.toLowerCase()}`),
);

// Quotation IDs at or below this number were already indexed before the v5
// corpus expansion. IDs above it are being admitted to the index for the first
// time, so they carry a NEWER lastmod. That is a truthful signal — those pages
// really are newly crawlable — and it prompts Googlebot to fetch them instead
// of trusting a stale cache. Do NOT stamp every URL with the same date: a
// site-wide identical lastmod reads as a batch rewrite and invites a quality
// re-evaluation.
const LEGACY_QUOTE_MAX = 499;
const NEWLY_INDEXABLE_DATE = new Date("2026-08-30T00:00:00Z");
const STABLE_INDEXABLE_DATE = new Date("2026-08-26T00:00:00Z");

function quoteNumber(path) {
  const match = /^\/quotes\/q(\d+)$/.exec(path);
  return match ? Number(match[1]) : null;
}

export default defineConfig({
  site: "https://www.philosophydef.com",
  output: "static",
  trailingSlash: "never",
  compressHTML: true,
  build: {
    format: "directory",
  },
  redirects,
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, "");
        if (path === "/404" || path.endsWith("/404")) return false;
        // Archive pagination exists only to expose detail links to crawlers.
        // Indexing 28 near-identical list pages wastes crawl budget and
        // competes with /quotes and the quotation detail pages.
        if (path.startsWith("/quotes/page/")) return false;
        if (/^\/quotes\/q\d+$/.test(path)) {
          return indexableQuotePaths.has(path);
        }
        if (path.startsWith("/themes/") && path.split("/").length === 3) {
          return indexableThemePaths.has(path);
        }
        if (path.startsWith("/thinkers/") && path.split("/").length === 3) {
          return indexableThinkerPaths.has(path);
        }
        return true;
      },
      serialize(item) {
        const url =
          item.url === "https://www.philosophydef.com"
            ? "https://www.philosophydef.com/"
            : item.url;
        const path = new URL(url).pathname.replace(/\/$/, "") || "/";
        const isQuote = /^\/quotes\/q\d+$/.test(path);
        const isCoreHub =
          path === "/" ||
          path === "/quotes" ||
          path === "/themes" ||
          path === "/thinkers" ||
          path === "/schools";
        const isGuide =
          !isQuote &&
          !path.startsWith("/themes/") &&
          !path.startsWith("/thinkers/") &&
          !path.startsWith("/schools/") &&
          !path.startsWith("/quotes/");

        // Only quotation pages get a differentiated date; everything else
        // keeps the stable corpus date because its content has not changed.
        const quoteNum = quoteNumber(path);
        const isNewlyIndexable =
          quoteNum !== null && quoteNum > LEGACY_QUOTE_MAX;
        const lastmod = isNewlyIndexable
          ? NEWLY_INDEXABLE_DATE
          : STABLE_INDEXABLE_DATE;

        return {
          ...item,
          url,
          lastmod,
          changefreq: isQuote ? "monthly" : "weekly",
          // Quotation pages are the long-tail entry points that actually earn
          // impressions, so they deserve a higher priority than the old 0.6
          // that starved them of crawl budget.
          priority: isCoreHub ? 1 : isGuide ? 0.9 : isQuote ? 0.8 : 0.8,
        };
      },
    }),
  ],
});