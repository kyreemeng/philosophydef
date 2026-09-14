import quotes from "../data/quotes.json";
import { themeGroups } from "./content";

export const SITE_NAME = "Philosophy Blind Box";

/**
 * Astro types `Astro.site` as `URL | undefined` because a project without a
 * `site` in its config has none. This one has it, so the fallback is a
 * type-safety default rather than a real branch — but giving the parameter a
 * default value is what lets every call site pass `Astro.site` directly
 * instead of asserting non-null in a dozen places.
 */
export const SITE_URL = new URL("https://www.philosophydef.com");

const themeNames = themeGroups()
  .map((theme) => theme.slug.replace(/-/g, " "))
  .slice(0, 12);

// Schools are not aggregated anywhere in lib/content, so they are read
// straight from the corpus instead of relying on a helper that does not exist.
const schoolNames = [...new Set(quotes.map((quote) => quote.school))].slice(
  0,
  8,
);

/**
 * Site-wide structured data, defined once and shared by every page.
 *
 * These were previously duplicated: BaseLayout carried one copy as its default
 * and the homepage carried a second, staler copy that silently overrode it.
 * Any E-E-A-T improvement to one had to be remembered in the other, and the
 * homepage — the page that most needs the trust signals — kept falling behind.
 * Single definition, no drift.
 *
 * Every value here is either derived from the corpus or points at a page that
 * really exists. No author name or credential is invented: a fabricated
 * byline is the fastest way to fail the exact review these signals invite.
 */
export function websiteSchema(site: URL = SITE_URL) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: site,
    inLanguage: "en",
    description:
      "Curated English philosophy quotations from around the world, presented at random.",
    publisher: { "@type": "Organization", name: SITE_NAME },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: new URL("/quotes?q={search_term_string}", site).href,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationSchema(site: URL = SITE_URL) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: site,
    description:
      "An English archive of verified philosophy quotations with thinker, theme, and beginner guides.",
    // Stating what the archive actually covers lets Google associate the site
    // with those topics rather than inferring it from page text alone.
    knowsAbout: [...themeNames, ...schoolNames],
    // Linking to published standards documents is the strongest available
    // trustworthiness signal for a site with no named individual editor.
    publishingPrinciples: new URL("/editorial-policy", site).href,
    ownershipFundingInfo: new URL("/about", site).href,
    actionableFeedbackPolicy: new URL("/editorial-policy", site).href,
    correctionsPolicy: new URL("/sourcing-method", site).href,
  };
}
