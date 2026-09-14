import { defineConfig } from "astro/config";
import {
  themeRedirects,
  thinkerSlugRedirects,
} from "./src/lib/content.ts";

const redirects = { ...themeRedirects(), ...thinkerSlugRedirects() };

/**
 * Sitemap generation moved out of the build config and into
 * `scripts/build-sitemaps.mjs`, which runs after `astro build`.
 *
 * The integration could only express one output file and, more importantly,
 * only one date per URL group: its lastmod came from build configuration, so
 * every deploy that touched the config re-dated the whole site. A crawler
 * reading a single date across a thousand URLs learns nothing about which pages
 * changed and reads the uniformity as a batch rewrite — which is one of the
 * three signals correlated with the August visibility collapse. The script
 * hashes each built page instead, so a URL's date moves only when its output
 * actually differs.
 */
export default defineConfig({
  site: "https://www.philosophydef.com",
  output: "static",
  trailingSlash: "never",
  compressHTML: true,
  build: {
    format: "directory",
  },
  redirects,
});
