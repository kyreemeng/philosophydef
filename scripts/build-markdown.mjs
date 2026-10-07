#!/usr/bin/env node
/**
 * Post-build agent-readable layer: one Markdown twin per indexable page,
 * an OKF concept bundle, and a substantive llms-full.txt.
 *
 * The Markdown twins are what Vercel's Accept: text/markdown negotiation
 * serves to agents at the same canonical URL (see vercel.json routes). Only
 * indexable pages get twins: a noindex page answering a markdown request with
 * the archive's 404 markdown is the correct answer, and it keeps the twins
 * out of the indexes-vs-noindex accounting the build audits.
 *
 * Nothing here touches sitemap hashes: the twins are separate files, and the
 * sitemap script walks index.html only.
 */

import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const SITE = "https://www.philosophydef.com";

/** Pages excluded from Markdown twins even when indexable. */
const EXCLUDED = [/^\/okf(\/|$)/];

/** Chrome and interaction shells that carry no readable content. */
const SKIP_CLASSES = new Set([
  "quote-contents",
  "share-dialog",
  "share-social",
  "daily-card",
  "generator-stage",
  "featured-stage",
  // Card grids convert to broken link soup; the linked pages have their own
  // twins, so the grid carries nothing an agent loses.
  "guide-card-grid",
  "theme-doors",
]);

const td = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});
td.use(gfm);
td.remove([
  "script",
  "style",
  "button",
  "select",
  "input",
  "svg",
  "iframe",
  "noscript",
  "dialog",
]);
td.addRule("skip-ui", {
  filter: (node) =>
    node.nodeType === 1 &&
    typeof node.getAttribute === "function" &&
    (node.getAttribute("class") ?? "")
      .split(/\s+/)
      .some((cls) => SKIP_CLASSES.has(cls)),
  replacement: () => "",
});

async function walk(dir, out = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, out);
    else if (entry.name === "index.html") out.push(full);
  }
  return out;
}

function routeFor(file) {
  const relative = path
    .relative(DIST, path.dirname(file))
    .split(path.sep)
    .join("/");
  return relative === "" ? "/" : `/${relative}`;
}

function decodeEntities(value = "") {
  return value
    .replaceAll("&quot;", '"')
    .replaceAll("&amp;", "&")
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function metaOf(html) {
  const title = decodeEntities(
    html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim(),
  );
  const description = decodeEntities(
    html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1],
  );
  return { title, description };
}

function absolutize(markdown) {
  return markdown
    .replace(/\]\(#/g, "](https://www.philosophydef.com/#")
    .replace(/\]\((\/[^)\s]*)\)/g, `](${SITE}$1)`)
    .replace(/\(https:\/\/www\.philosophydef\.com\/#/g, "(#");
}

function toMarkdown(html) {
  const main = html.match(/<main[^>]*>([\s\S]*)<\/main>/i)?.[1];
  if (!main) return null;
  // Turndown emits headings and paragraph text on consecutive lines without a
  // blank line between blocks in some wrapper cases, which makes markdown
  // parsers fold them together. A blank line before every heading keeps the
  // document structure unambiguous.
  const converted = td
    .turndown(main)
    .replace(/\n{3,}/g, "\n\n")
    .replace(/(?<=\S)\n(#{1,6} )/g, "\n\n$1")
    .trim();
  const body = absolutize(converted);
  return body.length < 40 ? null : body;
}

function yamlString(value) {
  return `"${String(value ?? "").replaceAll('"', '\\"')}"`;
}

const okfTypeFor = (route) =>
  /^\/(quotes|thinkers|themes|schools|works|branches|glossary|reference)(\/.*)?$/.test(
    route,
  )
    ? "Collection"
    : "Article";

const htmlFiles = await walk(DIST);
const pages = [];
for (const file of htmlFiles) {
  const route = routeFor(file);
  if (EXCLUDED.some((re) => re.test(route))) continue;
  if (route === "/404") continue;
  const html = await readFile(file, "utf8");
  const robots =
    html.match(/<meta\s+name="robots"\s+content="([^"]*)"/i)?.[1] ?? "";
  const indexable =
    !/\bnoindex\b/i.test(robots) &&
    !/<meta\s+http-equiv="refresh"/i.test(html);
  const body = toMarkdown(html);
  if (indexable && body) {
    pages.push({ route, file, html, body, ...metaOf(html) });
  }
}

// Markdown twins: dist/{route}.md sits beside dist/{route}/index.html.
let written = 0;
let bytes = 0;
for (const page of pages) {
  const target = path.join(DIST, page.route === "/" ? "index.md" : `${page.route.slice(1)}.md`);
  if (path.dirname(target) !== DIST) {
    await mkdir(path.dirname(target), { recursive: true });
  }
  // The H1 title and the description blockquote open every twin; the page
  // body starts with its own H1 when the template leads with one, and that
  // duplicate is dropped so agents read one heading, not two.
  // Strip only the FIRST H1 (the template's own). A page may carry a second
  // H1 deeper in (the homepage's hero), which stays.
  // One H1 per twin: the <title> (usually the SEO title) heads the file, the
  // template's own H1 is dropped, and every heading still in the body is
  // demoted one level.
  const body = page.body
    .replace(/^# [^\n]+\n+/, "")
    .replace(/^(#{1,5}) /gm, "$1# ");
  const front = `> ${page.description ?? page.title}\n\n`;
  const md = `# ${page.title}\n\n${front}${body}\n`;
  await writeFile(target, md, "utf8");
  written += 1;
  bytes += md.length;
}

// 404 markdown, served by the vercel.json fallback for agent 404s.
const notFoundHtml = await readFile(path.join(DIST, "404.html"), "utf8");
const notFoundBody = toMarkdown(notFoundHtml) ?? "";
await writeFile(
  path.join(DIST, "404.md"),
  `${notFoundBody}\n\nStart from the [homepage](${SITE}/) or the [sitemap](${SITE}/sitemap-index.xml).\n`,
  "utf8",
);

// OKF concept bundle: hubs, guides, and glossary terms — the archive's
// concept layer. Quotation pages stay out; their 700 URLs would bury the
// concepts the bundle exists to expose.
const conceptRoutes = pages
  .map((page) => page.route)
  .filter((route) => !/^\/quotes\/(q|page|about)/.test(route));
await mkdir(path.join(DIST, "okf"), { recursive: true });
const okfSlug = (route) =>
  route.replace(/^\//, "").replaceAll("/", "--") || "home";
const okfEntries = [];
for (const route of conceptRoutes) {
  const page = pages.find((candidate) => candidate.route === route);
  const file = `${okfSlug(route)}.md`;
  const frontmatter = [
    "---",
    `type: ${okfTypeFor(route)}`,
    `title: ${yamlString(page.title)}`,
    page.description ? `description: ${yamlString(page.description)}` : null,
    `resource: ${SITE}${route === "/" ? "/" : route}`,
    "tags: [philosophy, quotations]",
    "---",
    "",
  ]
    .filter(Boolean)
    .join("\n");
  const okfBody = page.body.replace(/^# [^\n]+\n+/, "");
  await writeFile(
    path.join(DIST, "okf", file),
    `${frontmatter}\n\n${okfBody}\n`,
    "utf8",
  );
  okfEntries.push({
    route,
    file,
    title: page.title,
    description: page.description,
  });
}
const okfIndex = [
  "---",
  "type: Index",
  `title: "Philosophy Defined — OKF bundle"`,
  `description: "Agent-readable concept library: guides, hubs, glossary, and sourcing method."`,
  `resource: ${SITE}/okf/index.md`,
  "tags: [philosophy, quotations]",
  "---",
  "",
  "# Philosophy Defined — OKF bundle",
  "",
  "Cross-linked concept files for the Philosophy Defined archive. Each file",
  "carries the page's full readable content; the `resource` field points at",
  "the canonical HTML URL.",
  "",
  ...okfEntries.map(
    (entry) => `- [${entry.title}](${entry.file}) — ${entry.description ?? ""}`,
  ),
  "",
].join("\n");
await writeFile(path.join(DIST, "okf", "index.md"), okfIndex, "utf8");

// llms-full.txt: the full readable content of the archive's concept pages in
// one file, so an agent gets the library in a single request. Quotation
// detail stays behind its per-page twins; a full quote dump would make this
// file unreadable for the models that actually request it.
const fullRoutes = [
  "/",
  "/quote-source",
  "/misattributed-quotes",
  "/quotes/famous",
  "/quotes/short",
  "/quotes/best",
  "/quotes/about/love",
  "/quotes/about/loneliness",
  "/quotes/about/death",
  "/quotes/q0001",
  "/quotes/q0002",
  "/quotes/q0102",
  "/quotes/q0120",
  "/about",
  "/editorial-policy",
  "/sourcing-method",
  "/reference",
  "/branches",
  "/random-philosophy-generator",
  ...conceptRoutes.filter(
    (route) => route !== "/" && route !== "/quote-source",
  ),
];
const seen = new Set();
const fullParts = [
  "# Philosophy Defined — full content index",
  "",
  `Site: ${SITE}/`,
  "Language: English",
  "Purpose: sourced English philosophy quotations with verification records,",
  "plus guides, thinker profiles, theme collections, and a quotation-",
  "sourcing method. Per-quotation pages live at /quotes/{id}; each has a",
  "Markdown twin served on Accept: text/markdown. This file holds the",
  "concept layer in full.",
  "",
];
for (const route of fullRoutes) {
  if (seen.has(route)) continue;
  seen.add(route);
  const page = pages.find((candidate) => candidate.route === route);
  if (!page) continue;
  fullParts.push(
    "---",
    "",
    `## ${page.title}`,
    "",
    `Source: ${SITE}${route === "/" ? "/" : route}`,
    "",
    page.body.replace(/^# [^\n]+\n+/, ""),
    "",
  );
}
await writeFile(
  path.join(DIST, "llms-full.txt"),
  `${fullParts.join("\n")}\n`,
  "utf8",
);

const manifest = {
  generatedAt: new Date().toISOString(),
  twins: { count: written, bytes },
  okf: { files: okfEntries.length },
  llmsFullBytes: fullParts.join("\n").length,
  routes: pages.map((page) => page.route),
};
await mkdir(path.join(ROOT, "tmp"), { recursive: true });
await writeFile(
  path.join(ROOT, "tmp", "markdown-manifest.json"),
  `${JSON.stringify(manifest, null, 2)}\n`,
  "utf8",
);

console.log(
  `Markdown layer: ${written} twins (${(bytes / 1024).toFixed(0)} KB), ` +
    `${okfEntries.length} OKF files, llms-full.txt ${(manifest.llmsFullBytes / 1024).toFixed(0)} KB.`,
);
