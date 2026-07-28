import { copyFile, access } from "node:fs/promises";
import { constants } from "node:fs";
import { resolve } from "node:path";

const outputDirectory = resolve("dist");
const source = resolve(outputDirectory, "sitemap-index.xml");
const destination = resolve(outputDirectory, "sitemap.xml");

try {
  await access(source, constants.R_OK);
  await copyFile(source, destination);
  console.log("Created sitemap.xml compatibility alias.");
} catch {
  console.error("Missing dist/sitemap-index.xml; run the Astro build before creating the alias.");
  process.exitCode = 1;
}
