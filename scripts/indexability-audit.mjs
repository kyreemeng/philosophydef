#!/usr/bin/env node
/**
 * Build-time indexability audit.
 *
 * Fails the build when the sitemap advertises redirects/noindex pages, when an
 * indexable HTML page has a broken or non-self canonical, or when indexable
 * pages reuse title/description/H1 signals.
 */

import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const SITE = "https://www.philosophydef.com";

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

function decode(value = "") {
  return value
    .replaceAll("&quot;", '"')
    .replaceAll("&amp;", "&")
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function extract(html, regex) {
  const match = html.match(regex);
  return decode(match?.[1]?.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function routeFor(file) {
  const relative = path.relative(DIST, path.dirname(file)).split(path.sep).join("/");
  return relative === "" ? "/" : `/${relative}`;
}

function expectedCanonical(route) {
  return route === "/" ? `${SITE}/` : `${SITE}${route}`;
}

function expectedSitemapUrl(route) {
  return route === "/" ? SITE : `${SITE}${route}`;
}

const indexXml = await readFile(path.join(DIST, "sitemap-index.xml"), "utf8");
const sitemapFiles = [
  ...indexXml.matchAll(/<loc>[^<]*\/([^/<]+\.xml)<\/loc>/g),
].map((match) => path.join(DIST, match[1]));
const sitemapUrls = new Set();
for (const file of sitemapFiles) {
  const xml = await readFile(file, "utf8");
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    sitemapUrls.add(decode(match[1]));
  }
}

const htmlFiles = (await walk(DIST)).filter((file) => file.endsWith("index.html"));
const pages = [];
for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const route = routeFor(file);
  const robots = extract(html, /<meta\s+name="robots"\s+content="([^"]*)"/i);
  pages.push({
    route,
    file: path.relative(ROOT, file),
    title: extract(html, /<title>([\s\S]*?)<\/title>/i),
    description: extract(
      html,
      /<meta\s+name="description"\s+content="([^"]*)"/i,
    ),
    h1: extract(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i),
    canonical: extract(
      html,
      /<link\s+rel="canonical"\s+href="([^"]*)"/i,
    ),
    noindex: /\bnoindex\b/i.test(robots),
    redirect: /<meta\s+http-equiv="refresh"/i.test(html),
    words: html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .split(/\s+/).length,
  });
}

const problems = [];
const indexable = pages.filter((page) => !page.noindex && !page.redirect);
const bySignal = (field) => {
  const groups = new Map();
  for (const page of indexable) {
    const value = page[field];
    if (!value) continue;
    groups.set(value, [...(groups.get(value) ?? []), page.route]);
  }
  return [...groups.entries()].filter(([, routes]) => routes.length > 1);
};

for (const page of pages) {
  const url = expectedCanonical(page.route);
  const inSitemap = sitemapUrls.has(expectedSitemapUrl(page.route));
  if ((page.noindex || page.redirect) && inSitemap) {
    problems.push(`${page.route}: noindex/redirect URL appears in sitemap`);
  }
  if (!page.noindex && !page.redirect) {
    if (!page.title || !page.description || !page.h1 || !page.canonical) {
      problems.push(`${page.route}: missing title, description, H1, or canonical`);
    }
    if (page.canonical !== url) {
      problems.push(
        `${page.route}: canonical ${page.canonical || "(missing)"} != ${url}`,
      );
    }
    if (!inSitemap) problems.push(`${page.route}: indexable page missing from sitemap`);
    if (page.route.startsWith("/quotes/q") && page.words < 180) {
      problems.push(`${page.route}: thin quote detail (${page.words} words)`);
    }
  }
}

for (const url of sitemapUrls) {
  const pathname = new URL(url).pathname.replace(/\/$/, "") || "/";
  const local = path.join(
    DIST,
    pathname === "/" ? "index.html" : pathname.slice(1),
    pathname === "/" ? "" : "index.html",
  );
  if (!existsSync(local)) problems.push(`${pathname}: sitemap target missing in dist`);
}

for (const field of ["title", "description", "h1"]) {
  for (const [value, routes] of bySignal(field)) {
    problems.push(
      `duplicate ${field} on ${routes.join(", ")}: ${value.slice(0, 100)}`,
    );
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  htmlPages: pages.length,
  indexablePages: indexable.length,
  noindexPages: pages.filter((page) => page.noindex).length,
  redirectPages: pages.filter((page) => page.redirect).length,
  sitemapUrls: sitemapUrls.size,
  quoteDetails: indexable.filter((page) => /^\/quotes\/q\d+$/.test(page.route))
    .length,
  problems,
};
const reportDir = path.join(ROOT, "tmp");
await mkdir(reportDir, { recursive: true });
await writeFile(
  path.join(reportDir, "indexability-report.json"),
  `${JSON.stringify(report, null, 2)}\n`,
);

console.log(
  `Indexability audit: ${report.indexablePages} indexable, ` +
    `${report.noindexPages} noindex, ${report.redirectPages} redirects, ` +
    `${report.sitemapUrls} sitemap URLs.`,
);
if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  for (const problem of problems.slice(0, 50)) console.error(`- ${problem}`);
  if (problems.length > 50) console.error(`- … ${problems.length - 50} more`);
  process.exit(1);
}
console.log("Indexability audit passed.");
