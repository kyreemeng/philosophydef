#!/usr/bin/env node
/**
 * Build-time internal link audit.
 *
 * The indexability audit checks that every page the sitemap advertises exists;
 * nothing checked that the links *inside* pages resolve. That gap produced real
 * breakage: the quotation template linked `/quote-source/<slug>` on all 692
 * pages while that route is built only for passages carrying a verification
 * record, so 661 pages pointed at a URL the build never emitted. A reader
 * following one got a 404, and no gate noticed.
 *
 * Two classes of failure are fatal:
 *
 *   broken link    a root-relative href with no built page behind it
 *   missing anchor a `/path#fragment` whose target page has no element with
 *                  that id — the page loads and the reader lands at the top,
 *                  which is worse than a 404 because nothing looks wrong
 *
 * Only root-relative links are checked. External URLs are somebody else's
 * uptime, and a build that fails because a third-party site is down teaches
 * people to skip the build.
 */

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const SITE = "https://www.philosophydef.com";

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name === "index.html") out.push(full);
  }
  return out;
}

/** Root-relative hrefs that end in a file extension rather than a page. */
const ASSET = /\.(xml|txt|png|jpe?g|svg|webp|avif|ico|json|webmanifest|woff2?|css|js|pdf|mp4)$/i;

const pages = walk(DIST);
const queryCache = new Map();
const readLocal = (local) => {
  if (!queryCache.has(local)) {
    queryCache.set(local, existsSync(local) ? readFileSync(local, "utf8") : null);
  }
  return queryCache.get(local);
};

const broken = new Map();
const missingAnchor = new Map();
const have = (map, key, from) => {
  if (!map.has(key)) map.set(key, new Set());
  map.get(key).add(from);
};

for (const file of pages) {
  const html = readFileSync(file, "utf8");
  const route =
    path.relative(DIST, path.dirname(file)).split(path.sep).join("/") || "/";

  for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
    const raw = match[1];
    const hashIndex = raw.indexOf("#");
    const href = hashIndex === -1 ? raw : raw.slice(0, hashIndex);
    const hash = hashIndex === -1 ? "" : raw.slice(hashIndex + 1);

    if (ASSET.test(href)) {
      if (!existsSync(path.join(DIST, href.slice(1)))) have(broken, href, route);
      continue;
    }

    const clean = href.replace(/\/+$/, "") || "/";
    const local =
      clean === "/"
        ? path.join(DIST, "index.html")
        : path.join(DIST, clean.slice(1), "index.html");
    const body = readLocal(local);
    if (body === null) {
      have(broken, href, route);
      continue;
    }
    if (hash && !new RegExp(`id="${hash.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`).test(body)) {
      have(missingAnchor, `${href}#${hash}`, route);
    }
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  pagesScanned: pages.length,
  site: SITE,
  brokenLinks: [...broken.entries()].map(([href, from]) => ({
    href,
    linkedFrom: [...from].sort(),
  })),
  missingAnchors: [...missingAnchor.entries()].map(([href, from]) => ({
    href,
    linkedFrom: [...from].sort(),
  })),
};

const reportDir = path.join(ROOT, "tmp");
await mkdir(reportDir, { recursive: true });
await writeFile(
  path.join(reportDir, "link-audit-report.json"),
  `${JSON.stringify(report, null, 2)}\n`,
);

console.log(
  `Link audit: ${pages.length} pages scanned, ` +
    `${report.brokenLinks.length} broken link target(s), ` +
    `${report.missingAnchors.length} missing anchor(s).`,
);

const problems = [
  ...report.brokenLinks.map(
    (entry) => `${entry.href} \u2190 ${entry.linkedFrom.slice(0, 3).join(", ")}${entry.linkedFrom.length > 3 ? ` (+${entry.linkedFrom.length - 3})` : ""}`,
  ),
  ...report.missingAnchors.map(
    (entry) => `${entry.href} \u2190 ${entry.linkedFrom.slice(0, 3).join(", ")}${entry.linkedFrom.length > 3 ? ` (+${entry.linkedFrom.length - 3})` : ""}`,
  ),
];

if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  for (const problem of problems.slice(0, 40)) console.error(`- ${problem}`);
  if (problems.length > 40) console.error(`- … ${problems.length - 40} more`);
  process.exit(1);
}
console.log("Link audit passed.");
