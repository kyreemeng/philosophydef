import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://philosophy.page",
  output: "static",
  trailingSlash: "never",
  compressHTML: true,
  build: {
    format: "file",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
});
