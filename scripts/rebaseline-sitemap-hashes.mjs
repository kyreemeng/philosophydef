#!/usr/bin/env node
/**
 * Recomputes every stored hash in data/sitemap-lastmod.json with the current
 * `hashInput`, reading each page from the committed dist at a git ref (default
 * HEAD). Dates are kept as they are.
 *
 * Run once after changing scripts/lib/sitemap-hash.mjs and before building, so
 * the next build compares like with like and only pages whose content really
 * changed get a new lastmod.
 *
 *   node scripts/rebaseline-sitemap-hashes.mjs [ref]
 */

import { execFileSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pageHash } from "./lib/sitemap-hash.mjs";

const ref = process.argv[2] ?? "HEAD";
const MANIFEST = path.join(process.cwd(), "data", "sitemap-lastmod.json");
const manifest = JSON.parse(await readFile(MANIFEST, "utf8"));

let updated = 0;
let missing = 0;
for (const [route, entry] of Object.entries(manifest)) {
  const file = route === "/" ? "dist/index.html" : `dist${route}/index.html`;
  let html;
  try {
    html = execFileSync("git", ["show", `${ref}:${file}`], {
      encoding: "utf8",
      maxBuffer: 32 * 1024 * 1024,
      stdio: ["ignore", "pipe", "ignore"],
    });
  } catch {
    missing += 1;
    continue;
  }
  const hash = pageHash(html);
  if (hash !== entry.hash) {
    entry.hash = hash;
    updated += 1;
  }
}

await writeFile(MANIFEST, `${JSON.stringify(manifest, null, 0)}\n`, "utf8");
console.log(
  `Re-baselined ${updated} of ${Object.keys(manifest).length} hashes from ${ref}` +
    (missing ? `; ${missing} routes not found in ${ref}:dist and left as they were` : ""),
);
