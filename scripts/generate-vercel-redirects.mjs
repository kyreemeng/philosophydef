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
  const translit = {
    æ: "ae",
    Æ: "ae",
    ø: "o",
    Ø: "o",
    å: "a",
    Å: "a",
    ð: "d",
    Ð: "d",
    þ: "th",
    Þ: "th",
    ß: "ss",
    ł: "l",
    Ł: "l",
    đ: "d",
    Đ: "d",
  };
  const transliterated = value.replace(
    /[æÆøØåÅðÐþÞßłŁđĐ]/g,
    (ch) => translit[ch] ?? ch,
  );
  return transliterated
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

function themePath(theme) {
  const canonical = canonicalizeTheme(theme);
  return canonical === "Philosophy"
    ? "/themes"
    : `/themes/${slugify(canonical)}`;
}

const redirects = new Map([["/themes/philosophy", "/themes"]]);
for (const quote of quotes) {
  for (const rawTheme of quote.themes) {
    const fromSlug = slugify(rawTheme);
    const fromPath = `/themes/${fromSlug}`;
    const toPath = themePath(rawTheme);
    if (fromPath !== toPath) redirects.set(fromPath, toPath);
  }
}
for (const [from, to] of Object.entries(caseMap)) {
  const fromSlug = slugify(from);
  const fromPath = `/themes/${fromSlug}`;
  const toPath = themePath(to);
  if (fromPath !== toPath) redirects.set(fromPath, toPath);
}

config.redirects = [
  {
    source: "/:path*",
    has: [{ type: "host", value: "philosophydef.com" }],
    destination: "https://www.philosophydef.com/:path*",
    permanent: true,
  },
  // Legacy broken slug for Søren Kierkegaard (ø previously stripped → s-ren-…)
  {
    source: "/thinkers/s-ren-kierkegaard",
    destination: "/thinkers/soren-kierkegaard",
    permanent: true,
  },
  {
    source: "/thinkers/s-ren-kierkegaard/:path*",
    destination: "/thinkers/soren-kierkegaard/:path*",
    permanent: true,
  },
  ...[...redirects.entries()]
    .sort(([fromA], [fromB]) => fromA.localeCompare(fromB))
    .map(([source, destination]) => ({ source, destination, permanent: true })),
];

await writeFile("vercel.json", `${JSON.stringify(config, null, 2)}\n`);
console.log(`Generated ${redirects.size} permanent theme redirects in vercel.json.`);
