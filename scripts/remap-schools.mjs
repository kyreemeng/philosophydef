/**
 * Mechanically remap English school labels in the curated Markdown corpus
 * using data/school-shortlist.json (author-specific then "*").
 *
 * Usage: node scripts/remap-schools.mjs
 */
import { readFile, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { englishSide } from "./lib/english-side.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const mdPath = resolve(root, "data/philosophy_quotes_curated.md");
const shortlistPath = resolve(root, "data/school-shortlist.json");

/** Sensible Chinese label for each canonical English school. */
const ZH_LABEL = {
  "Socratic School": "苏格拉底学派",
  Platonism: "柏拉图主义",
  "Peripatetic School": "逍遥学派",
  Stoicism: "斯多葛主义",
  Epicureanism: "伊壁鸠鲁主义",
  Cynicism: "犬儒派",
  Sophists: "智者派",
  "Pre-Socratic": "前苏格拉底",
  Neoplatonism: "新柏拉图主义",
  "Patristic Philosophy": "教父哲学",
  Scholasticism: "经院哲学",
  "Islamic Philosophy": "伊斯兰哲学",
  "Jewish Rationalism": "犹太理性主义",
  "Rabbinic Judaism": "犹太拉比传统",
  Confucianism: "儒家",
  "Neo-Confucianism": "理学",
  Daoism: "道家",
  Legalism: "法家",
  Mohism: "墨家",
  "Early Buddhism": "早期佛教",
  "Zen Buddhism": "禅宗",
  "Kyoto School": "京都学派",
  "Indian Classical Philosophy": "印度古典哲学",
  Vedanta: "吠檀多",
  Rationalism: "理性主义",
  Empiricism: "经验主义",
  "British Empiricism": "英国经验主义",
  "Scottish Enlightenment": "苏格兰启蒙",
  "Critical Philosophy": "批判哲学",
  "German Idealism": "德国观念论",
  Utilitarianism: "功利主义",
  Pragmatism: "实用主义",
  Existentialism: "存在主义",
  Phenomenology: "现象学",
  "Analytic Philosophy": "分析哲学",
  "Critical Rationalism": "批判理性主义",
  Transcendentalism: "超验主义",
  "Process Philosophy": "过程哲学",
  "Feminist Philosophy": "女性主义哲学",
  "Africana Philosophy": "非洲哲学",
  "Social Contract Theory": "社会契约论",
  "Political Liberalism": "政治自由主义",
  "Philosophy of the Absurd": "荒诞哲学",
  "Dialogical Philosophy": "对话哲学",
  "Renaissance Humanism": "文艺复兴人文主义",
  Voluntarism: "唯意志论",
  "Philosophy of Will": "意志哲学",
  Logotherapy: "意义治疗",
  "Modern New Confucianism": "现代新儒家",
  "Military Thought": "兵家",
  "Religious Existentialism": "宗教存在主义",
  "Christian Existential Precursor": "基督教存在主义先声",
  "Platonic Moral Philosophy": "柏拉图式道德哲学",
};

function authorBase(englishAuthor) {
  return englishAuthor.replace(/\s*\([^)]*\)\s*$/, "").trim();
}

function chineseSide(value) {
  const text = String(value).trim();
  const match = text.match(/^(.*?[\u3400-\u9fff\uf900-\ufaff].*?)\s+\/\s+(.+)$/u);
  if (match) return match[1].trim();
  return text;
}

function lookupRemap(remap, school, author) {
  const bySchool = remap[school];
  if (!bySchool) return null;
  return bySchool[author] || bySchool["*"] || null;
}

const md = await readFile(mdPath, "utf8");
const shortlist = JSON.parse(await readFile(shortlistPath, "utf8"));
const remap = shortlist.remap || {};
const canonical = new Set(shortlist.canonical);

let changed = 0;
const unresolved = new Map(); // school -> authors
const missingZh = new Set();

const next = md.replace(
  /(####\s+Q\d+\s*\n)([\s\S]*?)(?=\n####\s+Q\d+|\n##\s|$)/g,
  (block, heading, body) => {
    const authorMatch = body.match(/\*\*作者 \/ Author\*\*:\s*(.+)/);
    const schoolMatch = body.match(/\*\*学派 \/ School\*\*:\s*(.+)/);
    if (!authorMatch || !schoolMatch) return block;

    const author = authorBase(englishSide(authorMatch[1]));
    const schoolEn = englishSide(schoolMatch[1]);
    const target = lookupRemap(remap, schoolEn, author);

    if (!target) {
      if (!canonical.has(schoolEn)) {
        if (!unresolved.has(schoolEn)) unresolved.set(schoolEn, new Set());
        unresolved.get(schoolEn).add(author);
      }
      return block;
    }

    if (!canonical.has(target)) {
      console.warn(`remap target not canonical: ${schoolEn} → ${target} (${author})`);
      return block;
    }

    const zh = ZH_LABEL[target];
    if (!zh) {
      missingZh.add(target);
      return block;
    }

    // schoolMatch[0] is "**学派 / School**: …" without the list "- "
    const oldField = schoolMatch[0];
    const newField = `**学派 / School**: ${zh} / ${target}`;
    if (oldField === newField) return block;

    changed += 1;
    return heading + body.replace(oldField, newField);
  },
);

await writeFile(mdPath, next, "utf8");

console.log(`remapped ${changed} school lines`);
if (missingZh.size) {
  console.log("missing ZH labels:", [...missingZh].sort().join("; "));
}
if (unresolved.size) {
  console.log(`unresolved non-canonical (${unresolved.size}):`);
  for (const [school, authors] of [...unresolved.entries()].sort()) {
    console.log(`  ${school}: ${[...authors].join(", ")}`);
  }
} else {
  console.log("no unresolved non-canonical schools");
}
