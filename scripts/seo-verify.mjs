#!/usr/bin/env node
/**
 * Post-deploy SEO checks for philosophydef.com
 * - Confirms key pages return 200 + expected JSON-LD types
 * - Confirms quote OG images exist
 * - Runs PageSpeed Insights (mobile) when network allows
 *
 * Usage: node scripts/seo-verify.mjs [baseUrl]
 */

const baseUrl = (process.argv[2] || "https://www.philosophydef.com").replace(/\/$/, "");
const canonicalBaseUrl = "https://www.philosophydef.com";

/**
 * Expected JSON-LD types per page, aligned with Google's current structured
 * data documentation:
 *
 * - Thinker pages are CollectionPage + Person, NOT ProfilePage. Google scopes
 *   ProfilePage to pages about a person associated with the site itself (an
 *   author, a forum user); Socrates and Plato are not this site's creators,
 *   and the old expectation here existed only because an earlier audit script
 *   asked for it.
 * - FAQPage is gone everywhere: Google retired FAQ rich results in 2026, and
 *   the FAQ prose stays on the pages where it still answers readers.
 * - Theme, school, and work pages are CollectionPage + BreadcrumbList — not
 *   Article, which Google scopes to news/blog content.
 * - Article remains only on the long-form guides, which is what it is for.
 */
const checks = [
  { path: "/", expectTypes: ["WebSite"] },
  { path: "/quotes/q0001", expectTypes: ["Quotation", "BreadcrumbList"] },
  { path: "/themes/freedom", expectTypes: ["CollectionPage", "BreadcrumbList"] },
  { path: "/thinkers/socrates", expectTypes: ["CollectionPage", "Person", "BreadcrumbList"] },
  { path: "/thinkers/bhagavad-gita", expectTypes: ["CreativeWork"] },
  { path: "/quotes/about/love", expectTypes: ["CollectionPage", "BreadcrumbList"] },
  { path: "/schools/stoicism", expectTypes: ["CollectionPage", "BreadcrumbList"] },
  { path: "/works", expectTypes: ["CollectionPage", "BreadcrumbList"] },
  { path: "/works/meditations", expectTypes: ["CollectionPage", "BreadcrumbList"] },
  { path: "/misattributed-quotes", expectTypes: ["CollectionPage", "BreadcrumbList"] },
  { path: "/branches", expectTypes: ["CollectionPage", "BreadcrumbList"] },
  { path: "/branches/ethics", expectTypes: ["CollectionPage", "BreadcrumbList"] },
  { path: "/reference", expectTypes: ["CollectionPage", "BreadcrumbList"] },
  { path: "/history-of-philosophy", expectTypes: ["Article"] },
  { path: "/what-is-philosophy", expectTypes: ["Article"] },
  { path: "/editorial-policy", expectTypes: [] },
  { path: "/sitemap-index.xml", expectTypes: [], isXml: true },
  { path: "/sitemap.xml", expectTypes: [], isXml: true },
];

function extractTypes(html) {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  const types = new Set();
  for (const block of blocks) {
    try {
      const data = JSON.parse(block[1]);
      const nodes = Array.isArray(data) ? data : [data];
      for (const node of nodes) {
        if (node?.["@type"]) {
          const t = node["@type"];
          if (Array.isArray(t)) t.forEach((x) => types.add(x));
          else types.add(t);
        }
      }
    } catch {
      // ignore malformed JSON-LD for reporting
    }
  }
  return [...types];
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { "user-agent": "philosophydef-seo-verify/1.0" },
    redirect: "follow",
  });
  const text = await res.text();
  return { status: res.status, text, url: res.url };
}

async function checkPage(item) {
  const url = `${baseUrl}${item.path}`;
  try {
    const { status, text } = await fetchText(url);
    const types = item.isXml ? [] : extractTypes(text);
    const missing = (item.expectTypes || []).filter(
      (type) => !types.some((found) => found.includes(type)),
    );
    const ogOk =
      item.path.startsWith("/quotes/q") ?
        text.includes(`og:image`) && text.includes(`/og/quotes/`)
      : true;
    return {
      path: item.path,
      status,
      ok: status === 200 && missing.length === 0 && ogOk,
      types,
      missing,
      ogOk,
    };
  } catch (error) {
    return {
      path: item.path,
      status: 0,
      ok: false,
      types: [],
      missing: item.expectTypes || [],
      error: String(error.message || error),
    };
  }
}

async function checkOgAsset() {
  const url = `${baseUrl}/og/quotes/q0001.png`;
  try {
    const res = await fetch(url, { method: "HEAD", redirect: "follow" });
    return { url, status: res.status, ok: res.status === 200 };
  } catch (error) {
    return { url, status: 0, ok: false, error: String(error.message || error) };
  }
}

async function checkRedirect(url, expectedLocation) {
  try {
    const res = await fetch(url, { method: "HEAD", redirect: "manual" });
    const location = res.headers.get("location");
    return {
      url,
      status: res.status,
      location,
      ok: [301, 302, 307, 308].includes(res.status) && location === expectedLocation,
    };
  } catch (error) {
    return { url, status: 0, ok: false, error: String(error.message || error) };
  }
}

async function checkSitemap() {
  try {
    const [index, alias] = await Promise.all([
      fetchText(`${baseUrl}/sitemap-index.xml`),
      fetchText(`${baseUrl}/sitemap.xml`),
    ]);
    const locations = [...index.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
    const childSitemaps = await Promise.all(
      locations.map((location) => fetchText(`${baseUrl}${new URL(location).pathname}`)),
    );
    const sitemapUrls = childSitemaps.flatMap((sitemap) =>
      [...sitemap.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]),
    );
    const allCanonical = sitemapUrls.every((location) =>
      location.startsWith(canonicalBaseUrl),
    );
    const aliasMatchesIndex = alias.text === index.text;
    const forbiddenUrls = [
      `${canonicalBaseUrl}/themes/philosophy`,
      `${canonicalBaseUrl}/themes/conscience`,
      `${canonicalBaseUrl}/thinkers/plutarch`,
    ];
    const containsForbiddenUrl = forbiddenUrls.some((url) =>
      childSitemaps.some((sitemap) => sitemap.text.includes(`<loc>${url}</loc>`)),
    );
    return {
      status: index.status,
      sitemapCount: sitemapUrls.length,
      allCanonical,
      aliasMatchesIndex,
      containsForbiddenUrl,
      ok:
        index.status === 200 &&
        alias.status === 200 &&
        sitemapUrls.length > 0 &&
        allCanonical &&
        aliasMatchesIndex &&
        !containsForbiddenUrl,
    };
  } catch (error) {
    return { status: 0, ok: false, error: String(error.message || error) };
  }
}

async function pageSpeed(path) {
  const target = `${baseUrl}${path}`;
  const api = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(target)}&strategy=mobile&category=PERFORMANCE`;
  try {
    const res = await fetch(api);
    if (!res.ok) {
      return { path, ok: false, error: `PSI HTTP ${res.status}` };
    }
    const data = await res.json();
    const lighthouse = data.lighthouseResult;
    const audits = lighthouse?.audits || {};
    const score = Math.round((lighthouse?.categories?.performance?.score || 0) * 100);
    return {
      path,
      ok: score >= 70,
      score,
      lcp: audits["largest-contentful-paint"]?.displayValue,
      cls: audits["cumulative-layout-shift"]?.displayValue,
      inp: audits["interaction-to-next-paint"]?.displayValue,
      richResultsHint:
        "Validate JSON-LD in Google Rich Results Test: https://search.google.com/test/rich-results",
    };
  } catch (error) {
    return { path, ok: false, error: String(error.message || error) };
  }
}

console.log(`SEO verify against ${baseUrl}\n`);

const pageResults = [];
for (const item of checks) {
  const result = await checkPage(item);
  pageResults.push(result);
  const mark = result.ok ? "OK" : "FAIL";
  console.log(
    `[${mark}] ${result.path}  status=${result.status}  types=${result.types.join(",") || "-"}` +
      (result.missing?.length ? `  missing=${result.missing.join(",")}` : "") +
      (result.error ? `  error=${result.error}` : ""),
  );
}

const og = await checkOgAsset();
console.log(`[${og.ok ? "OK" : "FAIL"}] OG asset ${og.url} status=${og.status}`);

const sitemap = await checkSitemap();
console.log(
  `[${sitemap.ok ? "OK" : "FAIL"}] Sitemap alias/index status=${sitemap.status}` +
    ` children=${sitemap.sitemapCount || 0}` +
    ` canonical=${sitemap.allCanonical ?? false}` +
    ` alias=${sitemap.aliasMatchesIndex ?? false}` +
    ` excludedThinUrls=${!sitemap.containsForbiddenUrl}`,
);

const redirect = await checkRedirect(
  "https://philosophydef.com/",
  "https://www.philosophydef.com/",
);
console.log(
  `[${redirect.ok ? "OK" : "FAIL"}] Apex canonical redirect status=${redirect.status}` +
    ` location=${redirect.location || "-"}`,
);

console.log("\nPageSpeed Insights (mobile)...");
const psiPaths = ["/", "/quotes/q0001", "/quotes/about/love"];
const psiResults = [];
for (const path of psiPaths) {
  process.stdout.write(`  measuring ${path} ... `);
  const result = await pageSpeed(path);
  psiResults.push(result);
  if (result.error) {
    console.log(`FAIL (${result.error})`);
  } else {
    console.log(
      `${result.ok ? "OK" : "WARN"} score=${result.score} LCP=${result.lcp} CLS=${result.cls} INP=${result.inp || "n/a"}`,
    );
  }
}

console.log("\nManual Rich Results Test URLs:");
for (const path of ["/quotes/q0001", "/themes/freedom", "/thinkers/socrates", "/quotes/about/love"]) {
  console.log(
    `- https://search.google.com/test/rich-results?url=${encodeURIComponent(`${baseUrl}${path}`)}`,
  );
}

const failed = [...pageResults, og, sitemap, redirect].filter((r) => !r.ok);
process.exit(failed.length ? 1 : 0);
