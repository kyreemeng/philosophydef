import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import quotes from "../src/data/quotes.json" with { type: "json" };

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = join(root, "public", "data");
mkdirSync(dataDir, { recursive: true });

const compact = quotes
  .filter((quote) => quote.text.length <= 220)
  .map(({ id, author, school, source, text, themes }) => ({
    id,
    author,
    school,
    source,
    text,
    themes,
  }));

const archive = quotes.map(({ id, author, school, source, text, themes }) => ({
  id,
  author,
  school,
  source,
  text,
  themes,
}));

writeFileSync(join(dataDir, "quotes-compact.json"), JSON.stringify(compact));
writeFileSync(join(dataDir, "quotes-archive.json"), JSON.stringify(archive));
console.log(
  `Exported ${compact.length} compact quotes and ${archive.length} archive quotes to public/data`,
);
