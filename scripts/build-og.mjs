import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import sharp from "sharp";

const root = resolve(import.meta.dirname, "..");
const quotes = JSON.parse(
  await readFile(resolve(root, "src/data/quotes.json"), "utf8"),
);

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function wrapText(text, maxCharsPerLine, maxLines) {
  const words = text.trim().split(/\s+/);
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length <= maxCharsPerLine) {
      current = next;
      continue;
    }
    if (current) lines.push(current);
    current = word;
    if (lines.length >= maxLines) break;
  }
  if (lines.length < maxLines && current) lines.push(current);
  if (words.join(" ").length > lines.join(" ").length) {
    const last = lines.at(-1) ?? "";
    lines[lines.length - 1] = `${last.replace(/[.…]*$/, "")}…`;
  }
  return lines.slice(0, maxLines);
}

function defaultSvg() {
  return `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#f6f2e9"/>
  <circle cx="1080" cy="80" r="250" fill="#b74831" opacity=".08"/>
  <g transform="translate(84 76)">
    <rect width="54" height="54" rx="11" fill="none" stroke="#b74831" stroke-width="3"/>
    <path d="M10 18l17-7 17 7-17 7-17-7zm0 6l15 6v14l-15-7V24zm34 0l-15 6v14l15-7V24z" fill="none" stroke="#302b27" stroke-width="2"/>
  </g>
  <text x="160" y="112" fill="#302b27" font-family="Arial, sans-serif" font-size="26" font-weight="700">PHILOSOPHY BLIND BOX</text>
  <text x="84" y="310" fill="#302b27" font-family="Georgia, serif" font-size="84" font-weight="500">English words.</text>
  <text x="84" y="410" fill="#302b27" font-family="Georgia, serif" font-size="84" font-weight="500">Chance encounter.</text>
  <line x1="84" y1="506" x2="1116" y2="506" stroke="#cfc4b7"/>
  <text x="84" y="558" fill="#766b62" font-family="Arial, sans-serif" font-size="23">A curated archive of philosophy quotations in English.</text>
</svg>`;
}

function quoteSvg(quote) {
  const lines = wrapText(quote.text, 42, 5);
  const fontSize = lines.length >= 5 ? 36 : lines.length >= 4 ? 40 : 46;
  const lineHeight = Math.round(fontSize * 1.28);
  const startY = 210 - ((lines.length - 1) * lineHeight) / 2;
  const textNodes = lines
    .map(
      (line, index) =>
        `<text x="84" y="${Math.round(startY + index * lineHeight)}" fill="#302b27" font-family="Georgia, serif" font-size="${fontSize}">${escapeXml(line)}</text>`,
    )
    .join("\n  ");

  return `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#f6f2e9"/>
  <circle cx="1080" cy="80" r="250" fill="#b74831" opacity=".08"/>
  <circle cx="60" cy="560" r="180" fill="#302b27" opacity=".04"/>
  <text x="84" y="88" fill="#b74831" font-family="Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="2">PHILOSOPHY BLIND BOX</text>
  <text x="84" y="140" fill="#766b62" font-family="Arial, sans-serif" font-size="20">${escapeXml(quote.id)}</text>
  ${textNodes}
  <line x1="84" y1="506" x2="1116" y2="506" stroke="#cfc4b7"/>
  <text x="84" y="558" fill="#302b27" font-family="Georgia, serif" font-size="28">${escapeXml(quote.author)}</text>
  <text x="84" y="592" fill="#766b62" font-family="Arial, sans-serif" font-size="18">philosophydef.com</text>
</svg>`;
}

await sharp(Buffer.from(defaultSvg()))
  .png({ compressionLevel: 9 })
  .toFile(resolve(root, "public/og-default.png"));

const quoteDir = resolve(root, "public/og/quotes");
await mkdir(quoteDir, { recursive: true });

let written = 0;
for (const quote of quotes) {
  const out = resolve(quoteDir, `${quote.id.toLowerCase()}.png`);
  await sharp(Buffer.from(quoteSvg(quote)))
    .png({ compressionLevel: 9 })
    .toFile(out);
  written += 1;
}

// Manifest helps debugging without listing hundreds of binaries in git.
await writeFile(
  resolve(quoteDir, "manifest.json"),
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      count: written,
      pattern: "/og/quotes/{id}.png",
    },
    null,
    2,
  ),
);

console.log(`Built public/og-default.png and ${written} quote OG images`);
