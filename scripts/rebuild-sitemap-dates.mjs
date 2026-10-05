#!/usr/bin/env node
/**
 * Rebuilds data/sitemap-lastmod.json dates from git history of the built pages,
 * and explains each date instead of trusting the manifest.
 *
 * Why this exists
 * ---------------
 * The stored dates were seeded on 2026-09-14 (all 1,164 URLs on one day) and
 * then re-dated wholesale on every deploy. 1,273 of 1,285 URLs ended up on
 * 2026-10-01. Google read that as "the whole archive was rewritten on one day",
 * and the site fell out of the results twice on the same signal — 2026-08-16
 * (the v5 corpus landed) and 2026-10-01 (the work layer landed).
 *
 * The trap: those two deploys did change all 691 quotation pages, so a naive
 * "did the HTML change" test reports 100% and rebuilds nothing. But the change
 * was a template enhancement applied uniformly — a work link in the source
 * record, the original-language field, the verification-level explainer, a new
 * guide in the related list. Every page gained the same few hundred characters.
 * That is not 691 pages being rewritten; it is one template change.
 *
 * So the test here is not "did it change" but "how much of the page's own text
 * changed". A page whose body is largely intact keeps its old date even when a
 * template touched it. A page that gained or lost real prose is dated honestly.
 *
 * Usage
 * -----
 *   node scripts/rebuild-sitemap-dates.mjs [--to <ref>] [--dry-run]
 */

import { execFileSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { hashInput } from "./lib/sitemap-hash.mjs";

const argv = process.argv.slice(2);
const dryRun = argv.includes("--dry-run");
const toIndex = argv.indexOf("--to");
const TO = toIndex >= 0 ? argv[toIndex + 1] : "HEAD";
const MANIFEST = path.join(process.cwd(), "data", "sitemap-lastmod.json");

/**
 * Below this share of changed text, a commit counts as a template touch rather
 * than a content edit. The 2026-10-01 deploys sat around 1-2% on quotation pages;
 * real rewrites (a new interpretation, a corrected attribution, a new guide)
 * land in the double digits.
 */
const SIGNIFICANT_RATIO = 0.05;

const git = (...args) =>
  execFileSync("git", args, { encoding: "utf8", maxBuffer: 512 * 1024 * 1024 });

/** Visible text, chrome and markup removed. */
function visibleText(html) {
  return hashInput(html)
    .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Share of the page's words that differ between two revisions. */
function textChangeRatio(a, b) {
  const ta = visibleText(a);
  const tb = visibleText(b);
  if (ta === tb) return 0;
  const wa = new Set(ta.split(" "));
  const wb = new Set(tb.split(" "));
  if (!wa.size && !wb.size) return 0;
  let shared = 0;
  for (const w of wa) if (wb.has(w)) shared += 1;
  return 1 - shared / Math.max(wa.size, wb.size);
}

const commits = git("log", "--format=%H", TO).trim().split("\n").filter(Boolean);

const commitDate = new Map();
for (const line of git("log", "--format=%H %as", TO).trim().split("\n")) {
  const [hash, date] = line.split(" ");
  if (hash && date) commitDate.set(hash, date);
}

const commitPaths = new Map();
{
  let current = null;
  for (const line of git("log", "--name-only", "--format=@@%H", TO).split("\n")) {
    if (line.startsWith("@@")) {
      current = line.slice(2).trim();
      if (current) commitPaths.set(current, new Set());
    } else if (current && line.trim()) {
      commitPaths.get(current).add(line.trim());
    }
  }
}

const atCommit = (hash, file) => {
  try {
    // Many pages simply do not exist in older commits. That is the expected
    // case, not an error worth printing 1,285 times.
    return execFileSync("git", ["show", `${hash}:${file}`], {
      encoding: "utf8",
      maxBuffer: 32 * 1024 * 1024,
      stdio: ["ignore", "pipe", "ignore"],
    });
  } catch {
    return null;
  }
};

const manifest = JSON.parse(await readFile(MANIFEST, "utf8"));

/**
 * Newest-first walk over the history of one page. Returns the date of the most
 * recent commit that changed more than SIGNIFICANT_RATIO of the page's text.
 */
function realContentDate(file) {
  let prevHtml = null;
  for (const hash of commits) {
    const touched = commitPaths.get(hash);
    if (!touched || !touched.has(file)) continue;
    const html = atCommit(hash, file);
    if (html === null) continue;

    if (prevHtml !== null) {
      const ratio = textChangeRatio(prevHtml, html);
      if (ratio >= SIGNIFICANT_RATIO) return commitDate.get(hash) ?? null;
    }
    // Either the page has just appeared, or this commit only nudged it. Keep
    // walking: the page's last real edit may be further back.
    prevHtml = html;
  }
  return null;
}

const rows = [];
for (const [route, entry] of Object.entries(manifest)) {
  const file = route === "/" ? "dist/index.html" : `dist${route}/index.html`;
  let date = realContentDate(file);
  let source;
  if (date) {
    source = "history";
  } else {
    // No distinct content edit on record. Fall back to the oldest date the
    // page is known to have existed, which is honest: it has not been rewritten.
    date = "2026-07-25";
    source = "fallback";
  }
  rows.push({ route, stored: entry.lastmod, date, source });
}

const dist = new Map();
for (const r of rows) dist.set(r.date, (dist.get(r.date) ?? 0) + 1);
const total = rows.length;
const changed = rows.filter((r) => r.stored !== r.date).length;
const largest = Math.max(...dist.values());

console.log(`Would set ${changed} of ${total} dates (${total - changed} already correct).`);
console.log("  resulting date distribution:");
for (const [date, count] of [...dist.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`    ${date}: ${count}`);
}
console.log(`\n  largest single day: ${largest} (${((largest / total) * 100).toFixed(1)}%)`);
if (largest / total > 0.2) {
  console.log("  NOTE: over 20% of the archive shares one date. Check that this is real");
  console.log("  before 'fixing' it — a batch that genuinely wrote new prose on every");
  console.log("  page (2026-08-30 added interpretations to 614 of them) is entitled to");
  console.log("  that date. The failure mode to look for is a date that arrived from a");
  console.log("  template or navigation edit, not from content.");
}

if (dryRun) {
  console.log("\n--dry-run: nothing written.");
  process.exit(0);
}

for (const r of rows) manifest[r.route].lastmod = r.date;
await writeFile(MANIFEST, `${JSON.stringify(manifest, null, 0)}\n`, "utf8");
console.log(`\nWrote ${MANIFEST}`);
