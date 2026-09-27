# GSC 2026-09-13 → Batch 2 执行记录

**数据**：`philosophydef.com-Performance-on-Search-2026-09-13.xlsx`（过去 3 个月）  
**执行日**：2026-09-27  
**状态**：代码已改、本地构建通过；**未提交、未部署**（等你确认）

---

## 一、数据结论（比专家建议更重要的事实）

### 流量悬崖

| 时段 | 日均展示 | 日均点击 | 平均排名 |
|---|---:|---:|---:|
| 7/26–8/15 | ~250 | ~1 | ~30 |
| 8/16–8/31 | ~8 | 0 | ~70 |
| 9/1–9/10 | ~1 | ≈0 | 波动 |

8/16 断崖与 8/14 语料扩容（499→673）+ URL 暴增的时间线吻合——这是**质量重评 / 抓取预算再分配**，不是「某个词掉了」。

### 你真正能打的词（本表）

| 信号 | 证据 | 动作 |
|---|---|---|
| **精确原句 + source** 已进前十 | `william james … quote source` **2.4**；Marcus hive **5.1**；Seneca stars **8.3**；多条 source 长尾 pos 2–10 | **守住并扩核验**；CTR 几乎全是 0% → 标题/摘要是瓶颈 |
| 头号曝光页 | `/quotes/q0001` **390 展示** / 1 点击 / pos **39** | 标题改为 Who Said 形态；核验区块已有 |
| 思想家品牌词 | Socrates/Nietzsche quotes 展示高、pos 65–76、CTR 0 | 标题加 “with Sources”，别硬刚百科 |
| `who said this quote` 头词 | **本导出未出现** | hub 在 9/14 才上线，本表覆盖不到；继续押 `/quote-source` |
| epistemology 135k | pos 64、0 点击 | **继续放弃**（与专家 P2-12 一致） |
| 印尼 | 241 展示 / 0 点击（展示份额高） | P2：人工小批量，不做机翻全站 |

### CTR 诊断

多数 source 长尾 **已经排在前十却 0 点击**——不是「没被看见」，是 SERP 标题不够让人点。  
最糟一例：`/quotes/q0148` 在相关查询约 **2.4 位**，旧标题却是  
`Mencius on Love: "Mencius said: Those…" | Philosophy Blind Box`（对话框「Mencius said」污染标题）。

---

## 二、与专家 P1 的对齐状态

| 项 | 状态 |
|---|---|
| 5 `/quote-source` hub | ✅ 已上线（9/14） |
| 6 一页一词 + thinker / quote-slug | ✅ 已上线 |
| 7 精确原句页 | ✅ 31→**58**（本批 +27） |
| 8 存量引文模板升级 | ✅ 模板已有；本批再给 27 页写入核验正文 |
| 9 sitemap 拆分 + 真实 lastmod | ✅ 4 份；本构建 **27 new / 44 changed** |
| 10 外链 | ❌ 只能人做（见下） |
| 11 印尼语 | ⏸ 暂缓机翻 |
| 12 epistemology | ⏸ 放弃本季 |

---

## 三、本批（Batch 2）落地

### 核验登记 + 原句溯源页（+27）

按 9/13 展示量与 source 意图排序写入 `quote-verification.ts`，并加入 `batch-2-2026-09-27`：

Q0148, Q0362, Q0346, Q0005, Q0073, Q0019, Q0051, Q0093, Q0336, Q0181, Q0348, Q0127, Q0023, Q0101, Q0448, Q0259, Q0397, Q0261, Q0080, Q0439, Q0304, Q0393, Q0423, Q0258, Q0335, Q0415, Q0283

每条含：原文（如有）、常见改写、归属说明、`lastVerified: 2026-09-27`。  
构建后自动生成对应 `/quote-source/[slug]`。

### CTR 标题

- **Q0148** 等 20 条补 `seo-overrides`（去掉「Mencius said」类污染）
- **Q0001** → `Who Said "The Unexamined Life…"? Socrates (Apology 38a)`
- Socrates / Nietzsche 思想家页 → 标题加 **with Sources**

### 构建验收

```
1282 pages | sitemap 1191 URL (27 new, 44 changed)
indexability passed | link audit 0 broken
quote-source 子页：84（26 thinker + 58 原句）
核验登记：58 / 692
```

---

## 四、你上线后要做的（本周）

1. **部署本批**，GSC 重新提交 `sitemap-index.xml`
2. URL 检查优先请求索引：
   - `/quote-source`
   - `/quotes/q0148`、`/quotes/q0001`
   - `/quote-source/` 下本批新增 slug（尤其 Mencius / Schiller / James overlook）
3. **外链（唯一能进 who-said 前十的动作）**  
   每周固定：维基引文条目参考文献、Quora/Reddit「谁说的」问答、高校书单、引文站互链。  
   不买垃圾包。目标引用域中值约 45（专家口径）。
4. **不要**再一次性加几百 URL；下一批仍 ≤50 核验/周。

---

## 五、下周指标（只盯这四个）

1. 已抓取–未编入索引：是否止住增长  
2. 本批 27 个原句溯源页：是否开始有展示  
3. 前 10 位页面数（相对 9/13 基线）  
4. `who said this quote` / `quote source` 家族位次  

CTR 单独盯没有意义——位置上来了 CTR 会跟着上；本批标题改动是为已经进前十、却 0 点击的那批词准备的。
