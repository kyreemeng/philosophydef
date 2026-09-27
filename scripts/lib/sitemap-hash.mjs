import { createHash } from "node:crypto";

/**
 * What a sitemap lastmod hash covers.
 *
 * Astro content-hashes asset filenames, so hashed `/_astro/` names are
 * flattened: otherwise one global.css edit dates all 1200 pages to the same day.
 *
 * JSON-LD and icon/manifest links are removed. Neither is read by a visitor,
 * both come from the shared layout, and a schema or favicon fix would otherwise
 * have the same site-wide effect.
 *
 * Whitespace is collapsed, because a template edit that only moves an empty
 * conditional block reshuffles it on every page that uses the template.
 *
 * The site chrome (navigation, footer) stays in: a change there does alter what
 * every reader sees.
 *
 * Changing this function changes every stored hash. Re-baseline with
 * `node scripts/rebaseline-sitemap-hashes.mjs` before the next build, or every
 * URL will read as updated today.
 */
export function hashInput(html) {
  return html
    .replace(/\/_astro\/[^"'\s>]+?\.([a-z]+)/g, "/_astro/asset.$1")
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, "")
    .replace(/<link rel="(?:icon|apple-touch-icon|manifest)"[^>]*>/g, "")
    .replace(/>\s+</g, "><")
    .replace(/\s+/g, " ");
}

export function pageHash(html) {
  return createHash("sha1").update(hashInput(html)).digest("hex");
}
