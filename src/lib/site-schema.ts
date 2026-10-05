import quotes from "../data/quotes.json";
import { contactEmail, editor } from "../data/editorial";
import { themeGroups } from "./content";

export const SITE_NAME = "Philosophy Defined";

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
 *
 * The WebSite node deliberately carries no SearchAction: Google retired the
 * sitelinks search box globally in November 2024, and the markup now serves
 * site-name recognition only. Keeping the action would be dead weight on
 * every page.
 */
export function websiteSchema(site: URL = SITE_URL) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: ["philosophydef", "philosophydef.com"],
    url: site,
    inLanguage: "en",
    description:
      "Philosophy quotations traced to the work and passage they come from, with original-language wording where the archive holds it.",
    publisher: { "@type": "Organization", name: SITE_NAME, url: site },
  };
}

export function organizationSchema(site: URL = SITE_URL) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: site,
    logo: {
      "@type": "ImageObject",
      url: new URL("/favicon-512x512.png", site).href,
      width: 512,
      height: 512,
    },
    description:
      "An English archive of philosophy quotations traced to their sources, with thinker, theme, and beginner guides.",
    // Stating what the archive actually covers lets Google associate the site
    // with those topics rather than inferring it from page text alone.
    knowsAbout: [...themeNames, ...schoolNames],
    // Linking to published standards documents is the strongest available
    // trustworthiness signal for a site with no named individual editor.
    publishingPrinciples: new URL("/editorial-policy", site).href,
    ownershipFundingInfo: new URL("/about", site).href,
    actionableFeedbackPolicy: new URL("/editorial-policy", site).href,
    correctionsPolicy: new URL("/editorial-policy#corrections-log", site).href,
    ...(editor
      ? {
          founder: {
            "@type": "Person",
            name: editor.name,
            description: editor.bio,
            ...(editor.sameAs?.length ? { sameAs: editor.sameAs } : {}),
          },
        }
      : {}),
    ...(contactEmail
      ? {
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "editorial corrections",
            email: contactEmail,
          },
        }
      : {}),
  };
}
