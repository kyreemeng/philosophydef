import { readFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const mdPath = resolve(root, "data/philosophy_quotes_curated.md");
const shortlistPath = resolve(root, "data/school-shortlist.json");
const thinkersPath = resolve(root, "src/data/thinkers-researched.ts");

const md = await readFile(mdPath, "utf8");
const shortlist = JSON.parse(await readFile(shortlistPath, "utf8"));
const thinkersSrc = await readFile(thinkersPath, "utf8");

const ids = [...md.matchAll(/^####\s+(Q\d+)\s*$/gm)].map((m) => m[1]);
const schools = [...md.matchAll(/\*\*学派 \/ School\*\*:\s*(.+)/g)].map((m) => {
  const parts = m[1].split(/\s*[\/／]\s*/);
  return (parts[parts.length - 1] || m[1]).trim();
});

const errors = [];
if (ids.length < 650 || ids.length > 700) {
  errors.push(`count ${ids.length} not in 650–700`);
}
const nonCanonical = [...new Set(schools.filter((s) => !shortlist.canonical.includes(s)))];
if (nonCanonical.length) {
  errors.push(`non-canonical schools (${nonCanonical.length}): ${nonCanonical.slice(0, 20).join("; ")}`);
}
const templateHits = (
  thinkersSrc.match(/Method matters: dialectic, meditation/g) || []
).length;
if (templateHits > 0) {
  errors.push(`templated bios remaining: ${templateHits}`);
}

if (errors.length) {
  console.error("validate-corpus FAILED:");
  for (const e of errors) console.error(" -", e);
  process.exit(1);
}
console.log(`validate-corpus OK: ${ids.length} entries, schools canonical, bios detemplated`);
