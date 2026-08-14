/**
 * Generate ThemeGuide entries for keepThemes that have ≥4 quotes but no guide.
 * Usage: node scripts/generate-theme-guides.mjs [--write]
 * Without --write, prints TS fragment to stdout.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const quotes = JSON.parse(readFileSync(resolve(root, "src/data/quotes.json"), "utf8"));
const shortlist = JSON.parse(readFileSync(resolve(root, "src/data/theme-merge.json"), "utf8"));
const enrichPath = resolve(root, "src/data/enrichment.ts");
const enrich = readFileSync(enrichPath, "utf8");

const keep = new Set(shortlist.keepThemes);
const start = enrich.indexOf("export const themeGuides");
const end = enrich.indexOf("export function themeGuideFor", start);
const block = enrich.slice(start, end);
const existing = new Set(
  [...block.matchAll(/^\s{2}([A-Z][^:\n]+):\s*\{/gm)].map((m) => m[1].trim()),
);

const byTheme = new Map();
for (const q of quotes) {
  for (const t of q.themes ?? []) {
    if (!byTheme.has(t)) byTheme.set(t, []);
    byTheme.get(t).push(q);
  }
}

const TRADITION_HINTS = [
  ["Greek", /Stoic|Platon|Peripatetic|Socratic|Cynic|Epicurean|Neoplaton|Pre-Socratic/i],
  ["Chinese", /Confucian|Daoism|Legalism|Mohism|Modern Chinese/i],
  ["Indian", /Vedanta|Buddhism|Indian Classical|Mahayana/i],
  ["Islamic", /Islamic/i],
  ["Jewish", /Jewish|Rabbinic/i],
  ["Japanese", /Kyoto|Zen/i],
  ["Africana", /Africana/i],
  ["European modern", /Existential|Phenomenolog|Analytic|Rationalism|Empiricism|Idealism|Pragmatism|Critical|Utilitarian|Feminist|Liberal/i],
];

function traditionsFor(list) {
  const schools = list.map((q) => q.school);
  const found = [];
  for (const [label, re] of TRADITION_HINTS) {
    if (schools.some((s) => re.test(s))) found.push(label);
  }
  return found.length >= 2 ? found.slice(0, 4) : [...found, "modern European"].slice(0, 3);
}

function topCounts(items, n = 3) {
  const m = new Map();
  for (const x of items) m.set(x, (m.get(x) ?? 0) + 1);
  return [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, n);
}

function esc(s) {
  return String(s)
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, " ");
}

function keyLiteral(name) {
  return /^[A-Za-z_][A-Za-z0-9_]*$/.test(name) ? name : JSON.stringify(name);
}

function angles(theme, authors, schools) {
  const a0 = authors[0]?.[0] ?? "classical writers";
  const a1 = authors[1]?.[0] ?? authors[0]?.[0] ?? "later commentators";
  const s0 = schools[0]?.[0] ?? "several schools";
  const lower = theme.toLowerCase();
  return {
    intro: `${theme} appears in this archive as a live philosophical concern—not a slogan. These verified English passages show how thinkers treat ${lower} as a problem of judgment, practice, or explanation.`,
    overview: `Across ${listLen(authors)} recurring voices here (notably ${a0}${authors[1] ? ` and ${a1}` : ""}), ${lower} is framed through ${s0}${schools[1] ? ` and ${schools[1][0]}` : ""}. Some passages define ${lower}; others warn how it fails; still others relocate it inside habit, community, or language.`,
    history: `Discussions of ${lower} travel through ${traditionsPhrase(theme, schools)}. Compare the quotations below with their school labels rather than forcing a single definition.`,
  };
}

function listLen(authors) {
  return Math.max(authors.length, 1);
}

function traditionsPhrase(theme, schools) {
  // rebuild from school names via hints on synthetic list
  const fake = schools.map(([s]) => ({ school: s }));
  const trads = traditionsFor(fake);
  if (trads.length >= 2) return `${trads.slice(0, -1).join(", ")} and ${trads.at(-1)} traditions`;
  return "Greek, Chinese, and modern European traditions";
}

function buildGuide(theme, list) {
  const authors = topCounts(list.map((q) => q.author), 4);
  const schools = topCounts(list.map((q) => q.school), 3);
  const { intro, overview, history } = angles(theme, authors, schools);
  const lower = theme.toLowerCase();
  const a0 = authors[0]?.[0] ?? "major philosophers";
  return {
    intro,
    overview,
    history,
    faq: [
      {
        question: `What did philosophers say about ${lower}?`,
        answer: `They disagreed in productive ways. In this archive, ${a0}${authors[1] ? `, ${authors[1][0]}` : ""}, and related voices treat ${lower} as something to clarify, cultivate, or critique—not merely to celebrate.`,
      },
      {
        question: `Where can I find philosophy quotes about ${lower}?`,
        answer: `This theme page gathers ${list.length} verified English quotations tagged ${theme}, with links to thinkers and sources.`,
      },
      {
        question: `How should I read quotes about ${lower}?`,
        answer: `Read the sentence, then check school and source. A compact line is an entry point into an argument about ${lower}, not a substitute for the surrounding text.`,
      },
    ],
  };
}

const missing = [...keep]
  .filter((t) => t !== "Philosophy" && !existing.has(t))
  .map((t) => ({ t, list: byTheme.get(t) ?? [] }))
  .filter((x) => x.list.length >= 4)
  .sort((a, b) => b.list.length - a.list.length);

function toTs(theme, g) {
  return `  ${keyLiteral(theme)}: {
    intro:
      "${esc(g.intro)}",
    overview:
      "${esc(g.overview)}",
    history:
      "${esc(g.history)}",
    faq: [
      {
        question: "${esc(g.faq[0].question)}",
        answer:
          "${esc(g.faq[0].answer)}",
      },
      {
        question: "${esc(g.faq[1].question)}",
        answer:
          "${esc(g.faq[1].answer)}",
      },
      {
        question: "${esc(g.faq[2].question)}",
        answer:
          "${esc(g.faq[2].answer)}",
      },
    ],
  }`;
}

const fragment = missing.map(({ t, list }) => toTs(t, buildGuide(t, list))).join(",\n");

console.log(`Generated ${missing.length} theme guides`);
if (!process.argv.includes("--write")) {
  console.log(fragment.slice(0, 500) + "\n…");
  process.exit(0);
}

const insertAt = enrich.lastIndexOf("\n};", end);
// Insert before the closing of themeGuides object (the }; right after Dignity block)
// Find "  Dignity:" ... closing }; that ends themeGuides
const dignityEnd = enrich.indexOf("  Dignity:");
const afterDignity = enrich.indexOf("\n};", dignityEnd);
if (afterDignity < 0) throw new Error("Could not find themeGuides closing");
const next = enrich.slice(0, afterDignity) + ",\n" + fragment + enrich.slice(afterDignity);
writeFileSync(enrichPath, next);
console.log(`Wrote ${missing.length} guides into ${enrichPath}`);
