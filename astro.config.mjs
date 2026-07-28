import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { themeRedirects, themeGroups, thinkerGroups } from "./src/lib/content.ts";
import { shouldIndexTheme, shouldIndexThinker } from "./src/lib/indexing.ts";

const redirects = themeRedirects();
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
        if (path.startsWith("/themes/") && path.split("/").length === 3) {
          return indexableThemePaths.has(path);
        }
        if (path.startsWith("/thinkers/") && path.split("/").length === 3) {
          return indexableThinkerPaths.has(path);
        }
        return true;
      },
      changefreq: "weekly",
      priority: 0.7,
      serialize(item) {
        return item.url === "https://www.philosophydef.com"
          ? { ...item, url: "https://www.philosophydef.com/" }
          : item;
      },
    }),
  ],
});