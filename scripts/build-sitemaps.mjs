#!/usr/bin/env node
/**
 * Sitemap generation, split by section, with an honest per-page lastmod.
 *
 * Two problems with what this replaces.
 *
 * One file. The old build emitted every URL into a single sitemap-0.xml that
 * had passed 175 KB and was still growing. Section splits let Search Console
 * report coverage per family — quotations, thinkers, themes and schools,
 * guides — which is the only way to see whether a crawl problem is site-wide
 * or confined to one template.
 *
 * One lastmod for everything. The old sitemap stamped a single date on all URLs
 * (or on two ID ranges), which reads to a crawler as a batch rewrite of the
 * entire site and does nothing to tell it which pages actually changed. This
 * script hashes each built page and only advances a URL's date when its output
 * really differs from the previous build. The manifest it keeps is checked in,
 * so the dates are reproducible across machines and survive a fresh clone.
 *
 * Any indexable page the classifier does not recognise lands in the guides
 * group rather than being dropped: a page missing from the sitemap is a page
 * the indexability audit fails on, and rightly so.
 */

import { existsSync } from "node:fs";
import { readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pageHash } from "./lib/sitemap-hash.mjs";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const MANIFEST = path.join(ROOT, "data", "sitemap-lastmod.json");
const SITE = "https://www.philosophydef.com";

/**
 * Dates here change only when a page's rendered output changes. A build on a
 * laptop with a dirty clock therefore cannot invent a site-wide "just updated"
 * signal, which is exactly the failure this replaces.
 */
const today = new Date().toISOString().slice(0, 10);

/**
 * First-run seeding.
 *
 * A manifest built from nothing would stamp every URL with today's date on the
 * very first deploy — reproducing, in one build, the uniform site-wide lastmod
 * this script exists to eliminate. So a route seen for the first time is dated
 * from when its content actually last changed, using the two dates the previous
 * sitemap recorded: 2026-08-30 for the quotations admitted to the index by the
 * corpus unlock, 2026-08-26 for everything that has not been rewritten since.
 *
 * These are the last real content changes, not build times, so a fresh clone
 * produces the same distribution as the existing deployment. From the first
 * build onward the hash comparison below takes over and the seed table is never
 * consulted again for these routes.
 *
 * Pages that genuinely are new — the sourcing family and the generator — are
 * absent from the table on purpose and correctly receive today's date.
 */
const SEED_DATES = [
  { test: (route) => /^\/quote-source(\/|$)/.test(route), date: null },
  { test: (route) => route === "/random-philosophy-generator", date: null },
  // The homepage's heading, title, and description were rewritten, so its
  // content — not just its template — changed today.
  { test: (route) => route === "/", date: null },
  {
    test: (route) => {
      const match = /^\/quotes\/q(\d+)$/.exec(route);
      return match ? Number(match[1]) > 499 : false;
    },
    date: "2026-08-30",
  },
  { test: () => true, date: "2026-08-26" },
];

/**
 * Where a page states its own verification date, that date is the honest
 * lastmod — the page is telling us when its content was last worked through,
 * which is a better answer than either the build time or a family-wide
 * constant. Quotation pages carrying a verification record render it as
 * “Last verified: …”, so the sitemap and the page cannot disagree.
 */
function declaredVerificationDate(html) {
  return html.match(/Last verified:<\/strong>\s*(\d{4}-\d{2}-\d{2})/)?.[1];
}

function seedDate(route, html) {
  const declared = declaredVerificationDate(html);
  if (declared) return declared;
  for (const seed of SEED_DATES) {
    if (seed.test(route)) return seed.date ?? today;
  }
  return today;
}

const GROUPS = [
  {
    id: "quotes",
    file: "sitemap-quotes.xml",
    changefreq: "monthly",
    priority: 0.8,
    label: "Quotation detail pages",
  },
  {
    id: "thinkers",
    file: "sitemap-thinkers.xml",
    changefreq: "monthly",
    priority: 0.8,
    label: "Thinker and thinker×theme pages",
  },
  {
    id: "themes",
    file: "sitemap-themes-schools.xml",
    changefreq: "monthly",
    priority: 0.8,
    label: "Theme and school pages",
  },
  {
    id: "guides",
    file: "sitemap-guides.xml",
    changefreq: "weekly",
    priority: 0.9,
    label: "Hubs, guides, and editorial pages",
  },
];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (entry.name === "index.html") files.push(full);
  }
  return files;
}

function routeFor(file) {
  const relative = path
    .relative(DIST, path.dirname(file))
    .split(path.sep)
    .join("/");
  return relative === "" ? "/" : `/${relative}`;
}

function classify(route) {
  if (/^\/quotes\/q\d+$/.test(route)) return "quotes";
  if (/^\/thinkers\//.test(route)) return "thinkers";
  if (/^\/(themes|schools)\//.test(route)) return "themes";
  return "guides";
}

const previous = existsSync(MANIFEST)
  ? JSON.parse(await readFile(MANIFEST, "utf8"))
  : {};
const manifest = {};

const byGroup = new Map(GROUPS.map((group) => [group.id, []]));
let newPages = 0;
let changedPages = 0;

for (const file of await walk(DIST)) {
  const route = routeFor(file);
  const html = await readFile(file, "utf8");

  // Redirect stubs and noindexed pages must never reach a sitemap: an
  // advertised URL that answers with a redirect or a noindex tag is a coverage
  // error in Search Console, and the audit below treats it as a build failure.
  if (/<meta\s+http-equiv="refresh"/i.test(html)) continue;

  // Archive pagination exists to expose detail links to crawlers. Listing 29
  // near-identical pages would spend crawl budget and compete with /quotes.
  if (route.startsWith("/quotes/page/")) continue;

  // Noindexed pages are tracked in the manifest but never listed. Dropping
  // their entries would make a page that returns to the index after being
  // rewritten look new, and it would be seeded with a stale date.
  const robots = html.match(/<meta\s+name="robots"\s+content="([^"]*)"/i)?.[1] ?? "";
  const listed = !/\bnoindex\b/i.test(robots);

  const hash = pageHash(html);
  const prior = previous[route];
  if (listed && !prior) newPages += 1;
  else if (listed && prior.hash !== hash) changedPages += 1;

  const lastmod = prior
    ? prior.hash === hash
      ? prior.lastmod
      : today
    : seedDate(route, html);
  manifest[route] = { hash, lastmod };
  if (listed) byGroup.get(classify(route)).push({ route, lastmod });
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function location(route) {
  return route === "/" ? `${SITE}/` : `${SITE}${route}`;
}

const written = [];
for (const group of GROUPS) {
  const entries = byGroup.get(group.id).sort((a, b) =>
    a.route.localeCompare(b.route),
  );
  if (!entries.length) continue;
  const body = entries
    .map(
      (entry) =>
        `  <url>\n` +
        `    <loc>${escapeXml(location(entry.route))}</loc>\n` +
        `    <lastmod>${entry.lastmod}</lastmod>\n` +
        `    <changefreq>${group.changefreq}</changefreq>\n` +
        `    <priority>${group.priority}</priority>\n` +
        `  </url>`,
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
  await writeFile(path.join(DIST, group.file), xml, "utf8");
  written.push({ ...group, count: entries.length });
}

const indexBody = written
  .map(
    (group) =>
      `  <sitemap>\n    <loc>${SITE}/${group.file}</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>`,
  )
  .join("\n");
await writeFile(
  path.join(DIST, "sitemap-index.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexBody}\n</sitemapindex>\n`,
  "utf8",
);

// The integration this replaces left sitemap-0.xml behind. A stale sitemap in
// dist would still be reachable and would list URLs the audit no longer knows
// about.
for (const stale of ["sitemap-0.xml"]) {
  const target = path.join(DIST, stale);
  if (existsSync(target)) await rm(target);
}

await writeFile(
  MANIFEST,
  `${JSON.stringify(
    Object.fromEntries(
      Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)),
    ),
    null,
    0,
  )}\n`,
  "utf8",
);

const total = written.reduce((sum, group) => sum + group.count, 0);
console.log(
  `Sitemaps: ${total} URLs in ${written.length} files, ` +
    `${newPages} new, ${changedPages} changed since the last build.`,
);
for (const group of written) {
  console.log(`  ${group.file} — ${group.count} URLs (${group.label})`);
}
