import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { englishSide } from "./lib/english-side.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath =
  process.argv[2] ?? resolve(root, "data/philosophy_quotes_curated.md");
const outputPath = resolve(root, "src/data/quotes.json");
const markdown = await readFile(sourcePath, "utf8");
const lines = markdown.split(/\r?\n/);

const quotes = [];
let current = null;

/** Canonical display names for near-duplicate author spellings. */
const authorAliases = new Map([
  ["al-ghazālī", "Al-Ghazali"],
  ["al-ghazali", "Al-Ghazali"],
  ["g. w. leibniz", "Gottfried Wilhelm Leibniz"],
  ["gottfried wilhelm leibniz", "Gottfried Wilhelm Leibniz"],
  ["viktor e. frankl", "Viktor Frankl"],
  ["viktor frankl", "Viktor Frankl"],
  ["nishida kitarō", "Nishida Kitaro"],
  ["nishida kitaro", "Nishida Kitaro"],
  ["nishitani keiji", "Nishitani Keiji"],
  ["watsuji tetsuro", "Watsuji Tetsuro"],
  ["watsuji tetsurō", "Watsuji Tetsuro"],
  ["nagarjuna", "Nagarjuna"],
  ["nāgārjuna", "Nagarjuna"],
  ["dignaga", "Dignaga"],
  ["dignāga", "Dignaga"],
  ["leopoldo zea", "Leopoldo Zea"],
  ["enrique dussel", "Enrique Dussel"],
  ["ibn khaldūn", "Ibn Khaldun"],
  ["ibn khaldun", "Ibn Khaldun"],
  ["avicenna", "Avicenna"],
  ["ibn sina", "Avicenna"],
  ["ibn sīnā", "Avicenna"],
  ["al-farabi", "Al-Farabi"],
  ["al-fārābī", "Al-Farabi"],
  ["abu nasr al-farabi", "Al-Farabi"],
  ["ibn tufayl", "Ibn Tufayl"],
  ["ibn ṭufayl", "Ibn Tufayl"],
  ["saadia gaon", "Saadia Gaon"],
  ["saadiah gaon", "Saadia Gaon"],
  ["judah halevi", "Judah Halevi"],
  ["yehudah halevi", "Judah Halevi"],
  ["aimé césaire", "Aimé Césaire"],
  ["aime cesaire", "Aimé Césaire"],
  ["léopold sédar senghor", "Léopold Sédar Senghor"],
  ["leopold sedar senghor", "Léopold Sédar Senghor"],
  ["mogobe ramose", "Mogobe B. Ramose"],
  ["mogobe b. ramose", "Mogobe B. Ramose"],
  ["anton wilhelm amo", "Anton Wilhelm Amo"],
  ["averroes", "Averroes"],
  ["ibn rushd", "Averroes"],
  ["the book of changes (yijing)", "The Book of Changes"],
  ["the book of changes", "The Book of Changes"],
  ["the great learning (confucian classic)", "The Great Learning"],
  ["the great learning", "The Great Learning"],
  ["talmudic tradition (rabbi tarfon)", "Talmudic tradition"],
  ["talmudic tradition", "Talmudic tradition"],
  ["diamond sutra (via huineng’s awakening)", "Diamond Sutra"],
  ["diamond sutra (via huineng's awakening)", "Diamond Sutra"],
  ["the buddha (traditional attribution)", "The Buddha"],
  ["the buddha", "The Buddha"],
  ["chāndogya upaniṣad", "Chandogya Upanisad"],
  ["chandogya upanisad", "Chandogya Upanisad"],
  ["chandogya upanishad", "Chandogya Upanisad"],
  ["dhammapada", "Dhammapada"],
  ["bhagavad gita", "Bhagavad Gita"],
  ["bhagavad gītā", "Bhagavad Gita"],
  ["diamond sutra", "Diamond Sutra"],
  ["guanzi", "Guanzi"],
  ["the doctrine of the mean", "The Doctrine of the Mean"],
  ["laozi (spring and autumn period)", "Laozi"],
  ["sunzi (spring and autumn period)", "Sunzi"],
]);

function stripParenthetical(value) {
  return value.replace(/\s*\([^)]*\)\s*/g, " ").replace(/\s+/g, " ").trim();
}

function stripCjk(value) {
  return value
    .replace(/[\u3000-\u303f\u3400-\u9fff\uf900-\ufaff]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\s*([,;:])\s*/g, "$1 ")
    .replace(/\s+([.!?])/g, "$1")
    .trim();
}

function cleanAuthor(value) {
  let english = englishSide(value);
  english = stripParenthetical(english);
  english = stripCjk(english);

  const alias = authorAliases.get(english.toLowerCase());
  if (alias) return alias;

  return english;
}

function cleanSource(value) {
  const english = englishSide(value);
  return stripCjk(english);
}

function parseThemes(value) {
  const english = englishSide(value);
  return english
    .split(/,\s*/)
    .map((theme) => theme.trim())
    .filter(Boolean);
}

function finishQuote() {
  if (!current?.id || !current.text) return;
  if (!/^Q\d+$/.test(current.id)) return;

  quotes.push({
    id: current.id,
    author: current.author || "Unknown",
    school: current.school || "Philosophical Tradition",
    source: current.source || "",
    text: current.text,
    themes: current.themes || [],
  });
}

for (const line of lines) {
  const idMatch = line.match(/^####\s+(Q\d+)\s*$/);
  if (idMatch) {
    finishQuote();
    current = { id: idMatch[1] };
    continue;
  }

  if (!current) continue;

  const fieldMatch = line.match(/^-\s+\*\*(.+?)\*\*:\s*(.*)$/);
  if (!fieldMatch) continue;

  const [, label, value] = fieldMatch;
  const trimmed = value.trim();

  if (label.includes("Author")) {
    current.author = cleanAuthor(trimmed);
  } else if (label.includes("School")) {
    current.school = englishSide(trimmed);
  } else if (label.includes("Source")) {
    current.source = cleanSource(trimmed);
  } else if (label.includes("English") && !label.includes("Language")) {
    current.text = trimmed;
  } else if (label.includes("Themes")) {
    current.themes = parseThemes(trimmed);
  }
}

finishQuote();

if (!quotes.length) {
  throw new Error("No quotations were parsed from the source document.");
}

const unknown = quotes.filter((quote) => quote.author === "Unknown");
if (unknown.length) {
  console.warn(
    `Warning: ${unknown.length} quotes have unknown authors: ${unknown
      .map((quote) => quote.id)
      .join(", ")}`,
  );
}

const cjkAuthors = quotes.filter((quote) =>
  /[\u3400-\u9fff]/.test(quote.author),
);
if (cjkAuthors.length) {
  console.warn(
    `Warning: ${cjkAuthors.length} authors still contain CJK: ${cjkAuthors
      .map((quote) => `${quote.id}=${quote.author}`)
      .join(", ")}`,
  );
}

const missingThemes = quotes.filter((quote) => !quote.themes.length);
if (missingThemes.length) {
  console.warn(
    `Warning: ${missingThemes.length} quotes have no themes: ${missingThemes
      .map((quote) => quote.id)
      .join(", ")}`,
  );
}

await mkdir(resolve(root, "src/data"), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(quotes, null, 2)}\n`, "utf8");

const authorCount = new Set(quotes.map((quote) => quote.author)).size;
console.log(
  `Built ${quotes.length} quotations (${authorCount} thinkers) at ${outputPath}`,
);
