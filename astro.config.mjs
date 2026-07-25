import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { themeRedirects } from "./src/lib/content.ts";

const redirects = themeRedirects();

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
        return path !== "/404" && !path.endsWith("/404");
      },
      changefreq: "weekly",
      priority: 0.7,
      serialize(item) {
        return {
          ...item,
          lastmod: new Date().toISOString(),
        };
      },
    }),
  ],
});