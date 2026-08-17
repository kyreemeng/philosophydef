#!/usr/bin/env node
/**
 * Pull TabAPI domain intelligence for philosophydef.com (traffic + backlinks).
 * Docs: https://tabapi.com/docs
 *
 * Usage:
 *   TABAPI_API_KEY=sk_... npm run seo:tabapi
 *   # or load from .env.local automatically
 *
 * Note: TabAPI is a metered domain-data API (not an on-site visitor tracker).
 * Do not put the bearer key in frontend HTML — it would be public and billable.
 */

import { readFile, mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const BASE = "https://tabapi.com/api/v1";

async function loadEnvFile(filePath) {
  if (!existsSync(filePath)) return;
  const text = await readFile(filePath, "utf8");
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq < 1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

await loadEnvFile(path.join(ROOT, ".env.local"));
await loadEnvFile(path.join(ROOT, ".env"));

const apiKey = process.env.TABAPI_API_KEY;
const domain = (process.env.TABAPI_DOMAIN || "philosophydef.com").replace(
  /^https?:\/\//,
  "",
).replace(/\/$/, "");

if (!apiKey) {
  console.error(
    "Missing TABAPI_API_KEY. Add it to .env.local or pass it in the environment.",
  );
  process.exit(1);
}

async function tabGet(pathname, query = {}) {
  const url = new URL(`${BASE}${pathname}`);
  for (const [k, v] of Object.entries(query)) {
    if (v != null) url.searchParams.set(k, String(v));
  }
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${apiKey}`, Accept: "application/json" },
  });
  const text = await res.text();
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    body = { raw: text };
  }
  if (!res.ok) {
    const code = body?.error?.code || res.status;
    const message = body?.error?.message || text.slice(0, 200);
    throw new Error(`${pathname} → ${code}: ${message}`);
  }
  return body;
}

const months = Number(process.env.TABAPI_MONTHS || 3);
const withSerp = process.env.TABAPI_SERP === "1";

console.log(`TabAPI snapshot for ${domain} (months=${months})…`);

const [traffic, backlinks] = await Promise.all([
  tabGet(`/domains/${encodeURIComponent(domain)}/traffic`, { months }),
  tabGet(`/domains/${encodeURIComponent(domain)}/backlinks`),
]);

let serp = null;
if (withSerp) {
  serp = await tabGet("/search/google", {
    q: `site:${domain}`,
    country: "us",
    language: "en",
  });
}

const stamp = new Date().toISOString().slice(0, 10);
const outDir = path.join(ROOT, "docs", "seo");
await mkdir(outDir, { recursive: true });

const snapshot = {
  fetched_at: new Date().toISOString(),
  domain,
  source: "https://tabapi.com/docs",
  traffic,
  backlinks: {
    overview: backlinks.overview,
    sample_count: Array.isArray(backlinks.backlinks)
      ? backlinks.backlinks.length
      : 0,
    // Keep a short sample for review; full spammy PBN lists are noisy in git.
    sample: (backlinks.backlinks || []).slice(0, 10).map((b) => ({
      from_url: b.from_url,
      to_url: b.to_url,
      domain_rating: b.domain_rating,
      anchor: b.anchor?.slice?.(0, 120) ?? b.anchor,
    })),
  },
  ...(serp
    ? {
        serp_site_query: {
          query: `site:${domain}`,
          organic_count: serp.organic_results?.length ?? 0,
          top_results: (serp.organic_results || []).slice(0, 5).map((r) => ({
            position: r.position,
            title: r.title,
            link: r.link,
          })),
        },
      }
    : {}),
};

const jsonPath = path.join(outDir, `tabapi-${stamp}.json`);
await writeFile(jsonPath, `${JSON.stringify(snapshot, null, 2)}\n`);

const mdPath = path.join(outDir, `tabapi-${stamp}.md`);
const ov = traffic.overview || {};
const bl = backlinks.overview || {};
const md = `# TabAPI snapshot — ${domain}

Fetched: ${snapshot.fetched_at}  
Source: [TabAPI docs](https://tabapi.com/docs)

## Traffic (estimates)
| Metric | Value |
|--------|-------|
| Month | ${ov.month ?? "—"} |
| Visits | ${ov.visits ?? "—"} |
| Global rank | ${ov.global_rank ?? "—"} |
| Bounce rate | ${ov.bounce_rate ?? "—"} |
| Pages / visit | ${ov.pages_per_visit ?? "—"} |
| Time on site (s) | ${ov.time_on_site_seconds ?? "—"} |

### Monthly visits
${(traffic.monthly_visits || [])
  .map((m) => `- ${m.month}: ${m.visits}`)
  .join("\n") || "_none_"}

### Top keywords
${(traffic.top_keywords || [])
  .slice(0, 10)
  .map((k) => `- ${k.name} (vol ${k.volume}, value $${k.estimated_value})`)
  .join("\n") || "_none_"}

## Backlinks
| Metric | Value |
|--------|-------|
| Domain rating | ${bl.domain_rating ?? "—"} |
| Backlinks | ${bl.backlinks ?? "—"} |
| Referring domains | ${bl.referring_domains ?? "—"} |
| Dofollow backlinks % | ${bl.dofollow_backlinks_pct ?? "—"} |

> Sample referring URLs often include low-quality/PBN directories. Treat counts as noisy; prefer GSC + clean editorial links.

Raw JSON: \`${path.relative(ROOT, jsonPath)}\`

## Refresh
\`\`\`bash
npm run seo:tabapi
# optional SERP (costs 1 credit):
TABAPI_SERP=1 npm run seo:tabapi
\`\`\`
`;

await writeFile(mdPath, md);

console.log(`Wrote ${path.relative(ROOT, mdPath)}`);
console.log(`Wrote ${path.relative(ROOT, jsonPath)}`);
console.log(
  `Traffic visits(${ov.month}): ${ov.visits} · DR ${bl.domain_rating} · backlinks ${bl.backlinks} · ref domains ${bl.referring_domains}`,
);
