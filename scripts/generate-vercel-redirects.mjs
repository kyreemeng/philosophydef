import { readFile, writeFile } from "node:fs/promises";

const [quotesText, mergeText, configText] = await Promise.all([
  readFile("src/data/quotes.json", "utf8"),
  readFile("src/data/theme-merge.json", "utf8"),
  readFile("vercel.json", "utf8"),
]);

const quotes = JSON.parse(quotesText);
const { caseMap, thinMerges, keepThemes } = JSON.parse(mergeText);
const config = JSON.parse(configText);

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function canonicalizeTheme(theme) {
  const cased = caseMap[theme] ?? theme;
  if (keepThemes.includes(cased)) return cased;
  return thinMerges[cased] ?? "Philosophy";
}

const redirects = new Map();
for (const quote of quotes) {
  for (const rawTheme of quote.themes) {
    const fromSlug = slugify(rawTheme);
    const toSlug = slugify(canonicalizeTheme(rawTheme));
    if (fromSlug !== toSlug) redirects.set(`/themes/${fromSlug}`, `/themes/${toSlug}`);
  }
}
for (const [from, to] of Object.entries(caseMap)) {
  const fromSlug = slugify(from);
  const toSlug = slugify(canonicalizeTheme(to));
  if (fromSlug !== toSlug) redirects.set(`/themes/${fromSlug}`, `/themes/${toSlug}`);
}

config.redirects = [
  {
    source: "/:path*",
    has: [{ type: "host", value: "philosophydef.com" }],
    destination: "https://www.philosophydef.com/:path*",
    permanent: true,
  },
  ...[...redirects.entries()]
    .sort(([fromA], [fromB]) => fromA.localeCompare(fromB))
    .map(([source, destination]) => ({ source, destination, permanent: true })),
];

await writeFile("vercel.json", `${JSON.stringify(config, null, 2)}\n`);
console.log(`Generated ${redirects.size} permanent theme redirects in vercel.json.`);
