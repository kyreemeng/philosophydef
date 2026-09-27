import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

/**
 * Rasterises public/favicon.svg into the icon set search engines and browsers
 * request directly. Google fetches /favicon.ico and the declared rel="icon"
 * URLs with Googlebot-Image; an SVG-only declaration left /favicon.ico as a 404
 * and the search-result favicon blank.
 *
 * The .ico holds PNG-encoded images, which every browser and Googlebot accept.
 */

const svg = await readFile(new URL("../public/favicon.svg", import.meta.url));
const png = (size) => sharp(svg, { density: 1200 }).resize(size, size).png().toBuffer();

const outputs = {
  "favicon-48x48.png": 48,
  "favicon-192x192.png": 192,
  "favicon-512x512.png": 512,
  "apple-touch-icon.png": 180,
};
for (const [name, size] of Object.entries(outputs)) {
  await writeFile(new URL(`../public/${name}`, import.meta.url), await png(size));
}

const icoSizes = [16, 32, 48];
const images = await Promise.all(icoSizes.map(png));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(images.length, 4);
const entries = [];
let offset = 6 + 16 * images.length;
images.forEach((image, index) => {
  const entry = Buffer.alloc(16);
  const size = icoSizes[index];
  entry.writeUInt8(size, 0);
  entry.writeUInt8(size, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(image.length, 8);
  entry.writeUInt32LE(offset, 12);
  offset += image.length;
  entries.push(entry);
});
await writeFile(
  new URL("../public/favicon.ico", import.meta.url),
  Buffer.concat([header, ...entries, ...images]),
);

console.log(`icons: favicon.ico (${icoSizes.join("/")}), ${Object.keys(outputs).join(", ")}`);
