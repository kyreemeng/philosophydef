#!/usr/bin/env node
/**
 * Source-normalisation audit.
 *
 * The corpus records its citation in a single free-text `source` field, and an
 * audit of the 692 entries found the same work written several ways: Mozi's
 * 兼愛 chapter under three English titles, Mencius's 離婁下 as both "Li Lou II"
 * and "Lilou II", Schopenhauer's Parerga under its German and English forms,
 * and the same book with and without its year of publication on different
 * pages. A reader cannot tell from the locator alone whether two of those are
 * one chapter or two.
 *
 * `src/data/source-registry.ts` fixes this for the works it covers. This script
 * measures the coverage and produces the backlog, so the remaining work can be
 * done in batches rather than in one unverifiable pass — the same rule the rest
 * of the archive's content work follows.
 *
 * Node cannot import the TypeScript registry, so the two fields this script
 * needs (`title` and the `aliases` array) are read from the source with an
 * anchored regex. That is a deliberate trade: the guard below fails loudly if
 * the parse stops finding records, so a silent mis-parse cannot masquerade as
 * "coverage is fine".
 */

import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const quotes = JSON.parse(readFileSync(join(root, "src/data/quotes.json"), "utf8"));
const registrySource = readFileSync(join(root, "src/data/source-registry.ts"), "utf8");

/** Pull `{ title, aliases }` pairs out of the registry's `works` array. */
function parseRegistry(source) {
  const records = [];
  for (const block of source.split(/\n  \{\n/).slice(1)) {
    const title = block.match(/^\s*title: "([^"]+)"/m)?.[1];
    if (!title) continue;
    const aliasBlock = block.match(/aliases: \[([\s\S]*?)\],\n/)?.[1] ?? "";
    const aliases = [...aliasBlock.matchAll(/"([^"]+)"/g)].map((m) => m[1].toLowerCase());
    records.push({ title, aliases });
  }
  return records;
}

const registry = parseRegistry(registrySource);

/**
 * A mis-parse would report perfect coverage of nothing, so the audit refuses to
 * run rather than printing a comforting number.
 */
if (registry.length < 30) {
  console.error(
    `Source audit: parsed only ${registry.length} registry records — expected 30+. ` +
      `The parser needs updating for the current shape of source-registry.ts.`,
  );
  process.exit(1);
}

// Longest alias first, matching the resolver in src/lib/citation.ts, so the
// audit's coverage figure is the figure the pages actually get.
const aliasIndex = registry
  .flatMap((record) => record.aliases.map((alias) => ({ alias, record })))
  .sort((a, b) => b.alias.length - a.alias.length);

function matchRecord(raw) {
  const probe = raw.trim().replace(/^[“"']+/, "").toLowerCase();
  return aliasIndex.find(
    (candidate) =>
      probe === candidate.alias ||
      probe.startsWith(`${candidate.alias} `) ||
      probe.startsWith(`${candidate.alias},`),
  )?.record;
}

const resolvedBy = new Map();
const unresolved = [];
for (const quote of quotes) {
  const record = matchRecord(quote.source);
  if (record) {
    resolvedBy.set(record.title, (resolvedBy.get(record.title) ?? 0) + 1);
  } else {
    unresolved.push(quote);
  }
}

/** Group the unresolved sources by author: that is what makes two comparable. */
const byAuthor = new Map();
for (const quote of unresolved) {
  const head = quote.source.trim().split(",")[0].replace(/^[“"']+/, "").trim();
  const list = byAuthor.get(quote.author) ?? [];
  list.push({ quote, head });
  byAuthor.set(quote.author, list);
}

/* -------------------------------------------------------------------------
 * Backlog, split by defect kind.
 * Two different problems hide behind "the source field is inconsistent", and
 * they need different fixes:
 *
 *   A. Unseparated. The source has no comma, so the work and the locator are
 *      fused into one string — "Republic IV 433a", "Dhammapada 5". The page
 *      cannot say which part is the work, and neither can a reader.
 *
 *   B. Renamed work. The author's sources name the same work in more than one
 *      way — Schopenhauer's Parerga under its German and English titles, Mozi's
 *      兼愛 chapter under three English titles. A reader cannot tell whether
 *      two locators point at one chapter or two.
 *
 *   C. Genuinely distinct works by one author. This is not a defect; it is
 *      listed so the batches are not confused about which authors are which.
 * ---------------------------------------------------------------------- */

/** Tokens that carry no identity, so they must not make two titles look alike. */
const STOPWORDS = new Set([
  "the", "a", "an", "of", "on", "and", "or", "in", "to", "is", "it", "its",
  "part", "vol", "volume", "book", "ch", "chapter", "related", "standard",
  "form", "popular", "cf", "via", "common", "numbering", "et", "al",
]);

function headTokens(head) {
  return new Set(
    head
      .toLowerCase()
      .replace(/[^a-z0-9\u00c0-\u024f\u4e00-\u9fff ]+/g, " ")
      .split(/\s+/)
      .filter((token) => token.length > 1 && !STOPWORDS.has(token)),
  );
}

function similar(a, b) {
  if (a === b) return true;
  if (a.startsWith(b) || b.startsWith(a)) return true;
  const ta = headTokens(a);
  const tb = headTokens(b);
  if (!ta.size || !tb.size) return false;
  const shared = [...ta].filter((token) => tb.has(token)).length;
  return shared / Math.min(ta.size, tb.size) >= 0.6;
}

const unseparated = [];
const renamed = [];
const distinct = [];

for (const [author, entries] of byAuthor) {
  const withComma = entries.filter((entry) => entry.quote.source.includes(","));
  const withoutComma = entries.filter((entry) => !entry.quote.source.includes(","));

  if (withoutComma.length) {
    const heads = [...new Set(withoutComma.map((entry) => entry.head))].sort();
    unseparated.push({ author, count: withoutComma.length, heads });
  }

  const heads = [...new Set(withComma.map((entry) => entry.head))];
  const groups = [];
  for (const head of heads) {
    const group = groups.find((candidate) => similar(candidate[0], head));
    if (group) group.push(head);
    else groups.push([head]);
  }

  const renamedGroups = groups.filter((group) => group.length > 1);
  for (const group of renamedGroups) {
    const involved = withComma.filter((entry) => group.includes(entry.head)).length;
    renamed.push({ author, variants: group, count: involved });
  }

  const distinctGroups = groups.filter((group) => group.length === 1);
  if (distinctGroups.length > 1) {
    distinct.push({ author, works: distinctGroups.flat() });
  }
}

renamed.sort((a, b) => b.count - a.count);
unseparated.sort((a, b) => b.count - a.count);
distinct.sort((a, b) => b.works.length - a.works.length);

/* ---------------------------------------------------------------------- */

const covered = quotes.length - unresolved.length;
const pct = ((covered / quotes.length) * 100).toFixed(1);

const lines = [];
lines.push("# 出处规范化审计");
lines.push("");
lines.push(`生成时间：${new Date().toISOString().slice(0, 10)}`);
lines.push("");
lines.push("## 覆盖率");
lines.push("");
lines.push("| 指标 | 数值 |");
lines.push("|---|---:|");
lines.push(`| 注册表作品记录 | ${registry.length} |`);
lines.push(`| 注册表别名 | ${aliasIndex.length} |`);
lines.push(`| 已解析语料条数 | ${covered} / ${quotes.length}（${pct}%）|`);
lines.push(`| A 类 未分离（source 无逗号）| ${unseparated.reduce((n, i) => n + i.count, 0)} 条 |`);
lines.push(`| B 类 同作品异名 | ${renamed.length} 组 |`);
lines.push("");
lines.push("## A 类 — source 未分离");
lines.push("");
lines.push("整条 source 里没有逗号，作品名与定位符黏在一起，");
lines.push("页面无法指出哪一段是作品名，读者也无法判断。这类需要先拆分，再进注册表。");
lines.push("");
lines.push("| 作者 | 条数 | 原始写法 |");
lines.push("|---|---:|---|");
for (const item of unseparated) {
  lines.push(`| ${item.author} | ${item.count} | ${item.heads.join("；")} |`);
}
lines.push("");
lines.push("## B 类 — 同一作品多种写法（优先处理）");
lines.push("");
lines.push("同一作者下，两个上述写法指向同一部作品，读者却无法辨认。");
lines.push("这批是注册表要解决的核心问题，每批建议不超过 50 部。");
lines.push("");
lines.push("| 作者 | 涉及条数 | 指向同一作品的写法 |");
lines.push("|---|---:|---|");
for (const item of renamed) {
  lines.push(`| ${item.author} | ${item.count} | ${item.variants.join(" ↔ ")} |`);
}
lines.push("");
lines.push("## C 类 — 同一作者的多部不同作品（非缺陷，供批次参考）");
lines.push("");
lines.push("| 作者 | 作品数 | 作品 |");
lines.push("|---|---:|---|");
for (const item of distinct) {
  lines.push(`| ${item.author} | ${item.works.length} | ${item.works.join("；")} |`);
}
lines.push("");

const outDir = join(root, "docs/corpus");
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "source-normalisation-backlog.md");
writeFileSync(outFile, lines.join("\n"));

console.log(
  `Source registry: ${registry.length} works / ${aliasIndex.length} aliases; ` +
    `${covered}/${quotes.length} corpus sources resolved (${pct}%).`,
);
console.log(
  `Backlog: ${unseparated.reduce((n, i) => n + i.count, 0)} sources unseparated (A), ` +
    `${renamed.length} works renamed (B), ${distinct.length} authors with multiple works (C).`,
);
console.log(`Written to docs/corpus/source-normalisation-backlog.md`);

