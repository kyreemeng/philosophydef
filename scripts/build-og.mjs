import sharp from "sharp";
import { resolve } from "node:path";

const svg = `
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

await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toFile(resolve("public/og-default.png"));

console.log("Built public/og-default.png");
