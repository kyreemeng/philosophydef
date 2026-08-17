import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import {
  themeRedirects,
  thinkerSlugRedirects,
  themeGroups,
  thinkerGroups,
} from "./src/lib/content.ts";
import { shouldIndexTheme, shouldIndexThinker } from "./src/lib/indexing.ts";

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

        return {
          ...item,
          url,
          // This date reflects the corpus/indexability rewrite. Keep it
          // stable until a page really changes; fake build-time dates are
          // ignored by Google.
          lastmod: new Date("2026-08-17T00:00:00Z"),
          changefreq: isQuote ? "monthly" : "weekly",
          priority: isCoreHub ? 1 : isGuide ? 0.9 : isQuote ? 0.6 : 0.8,
        };
      },
    }),
  ],
});