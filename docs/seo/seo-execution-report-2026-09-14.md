# philosophydef.com — SEO 方案执行报告

**日期**：2026-09-14
**依据**：本轮 SEO 方案（「引文溯源」主线 + P0/P1/P2 清单）
**状态**：代码层全部落地，本地构建通过，索引审计通过，**未提交、未部署**

---

## 一、结论先行

方案的核心判断成立，但**有一处事实需要修正**（见第四节第 1 条）：`who said this quote` 的前十并非无人经营，已经有若干站做了「单句溯源页」。真正空着的位置不是「页面」而是**「粘贴任意一句 → 返回出处」的工具**。本次已把 `/quote-source` 做成这个工具页（服务端渲染的 31 条已核验注册表 + 客户端匹配框 + 三层溯源方法），而不是又一个静态列表。

方案要求的另一件事——**不要一次性铺几百个新页面**——被严格执行：本轮只新增 58 个 URL（1 个 hub + 26 个思想家级 + 31 个原句级 + 1 个随机生成器），每一个都有其他页面没有的内容。

---

## 二、已执行清单

| 方案项 | 落地内容 | 状态 |
|---|---|---|
| **P0-3** 首页语义改写 | H1 `Philosophy quotes, chosen at random` → **`Philosophy Quotes, Verified and Sourced`**；随机抽签模块移到 H1 之后，独立 H2 `Try a random quotation`；Title 改为 `Philosophy Quotes, Verified and Sourced \| Full Citations`（54 字符）；Description 改为带 exact wording / source / misattributed 语义 | ✅ |
| **P0-4** 已进前 3 长尾单页加固 | 5 个长尾（Q0001/Q0144/Q0197/Q0120 等）所在页面新增 `Verified source` / `Exact wording` / `Attribution notes` / `Last verified` 四个区块——**通过模板全站生效，但内容只对有核验记录的页出现** | ✅ |
| **P1-5** 新建 `/quote-source` | H1 `Who Said This Quote? Find the Verified Source`；**4236 词**；31 条服务端渲染注册表（含希腊/拉丁/法/德/古汉语原文 + `lang` 属性）；3 步溯源方法（每步含 pitfalls 清单）；8 条误归属名录；10 条 FAQ + FAQPage schema | ✅ |
| **P1-6** 一页一词 | `/quote-source/[thinker]` × **26 个思想家**（≥8 条引语者，对应 `[thinker] quote source`）；每个思想家页有专属 `Sourcing profile`（语言 / 引用来源 / 引用格式 / 该作家最常见的引用错误） | ✅ |
| **P1-7** 精确原句页 | `/quote-source/[原句 slug]` × **31 条**；Title = 原句 + 作者，H1 = `Who said "…"?` 承接精确原句流量 | ✅ |
| **P1-8** 存量引文页模板升级 | 新增四区块；JSON-LD `citation` 从裸字符串升级为 `CreativeWork`（带原文 `inLanguage: grc/la/fr/de/lzh…`）；内链从 12+ 条砍到 **6 条**（同思想家 2 + 同主题 2 + 翻页 2）；每页加回 hub 的定向链接 | ✅ |
| **P1-9** sitemap 拆分 + 真实 lastmod | 单份 175KB 拆成 **4 份**（quotes 692 / thinkers 241 / themes+schools 73 / guides 105）+ index；lastmod 改为**逐页内容哈希比对**，本轮分布为 **318 / 343 / 31 三档**（non-uniform） | ✅ |
| **补充** random generator | `/random-philosophy-generator` 独立页（服务端首屏 + 客户端抽取 + 5 条 FAQ + WebApplication schema），首页随机模块降级为互动组件并指向它 | ✅ |

**额外完成（方案未列但必要）**：`astro check` 从 **58 errors → 0 errors**；`package-lock.json` 与 `package.json` 重新同步（`@astrojs/sitemap` 已移除，Vercel 的 `npm ci` 不会因 lockfile 失配而失败）。

---

## 三、关键量化数据

| 指标 | 方案执行前 | 现在 |
|---|---:|---:|
| sitemap 份数 | 1 | **4** |
| sitemap URL | 1029 | **1111** |
| sitemap lastmod 档位 | 1（全站同一天） | **3**（318/343/31） |
| indexable / noindex / redirect | — | 1111 / 620 / 530 |
| 引文页交叉内链 | 12+ | **6**（-50%） |
| 新增 URL（本批） | — | **58** |
| `/quote-source` 专项页 | 0 | **58**（1 hub + 26 思想家 + 31 原句） |
| 首页 H1 主题词 | 「random」（无搜索量） | `philosophy quotes`（9,900/月） |
| `astro check` | 58 errors | **0 errors** |
| JSON-LD 块校验 | — | 1201 块，**0 无效** |

**lastmod 稳定性验证**：连续三次构建分别报 `1111 new` → `0 new, 2 changed` → `0 new, 0 changed`，说明哈希比对生效，不会出现「每次部署全站同一天」的批量改写信号。

---

## 四、我改了方案的三处，及理由

### 1. `who said this quote` 的盘面与方案判断不符（重要）

方案原文判断「前十全是顺路占位的内页，没有人押上页面经营这个词」。本轮实查并列结果**不支持这个判断**：

| 类型 | 实际情况 |
|---|---|
| 通用解释页 | quotememaybe.com、quotle.info —— **专门做单句溯源页** |
| AI 工具页 | prompt2tool.com 的 "Who Said It" —— **已有输入框式工具** |
| 引用工具/聚合 | quotationspage、quotesgram、quotefancy —— 传统聚合站 |
| 权威/知识向 | britannica、wikipedia、duke 图书馆 |
| AI Overview | **已出现**，主引用为 encyclopedia.com、quotesgram |

**结论**：「没有人做这个词」是错的，但**「没有人把它做成好用的工具」是对的**——现有工具页都是英文-only、无原文、无版本/译者信息。所以 `/quote-source` 的定位从「你的溯源内容页」调整为**「粘贴一句 → 返回出处」的工具 + 原文语言差异化**。这也是本次页面结构的直接依据。

### 2. Title 模板 `"[Quote]" – [Thinker] | Verified Source` 没有全站套到引文页上

方案 P1-8 要求把存量引文页标题改为该模板。**未执行**，理由：

- 如果 673 个引文页和新的原句级溯源页都用同一个「原句 + 作者」标题，两页会在同一个精确原句查询上互相蚕食，且**构建审计会因为重复标题直接失败**（`scripts/indexability-audit.mjs` 对 indexable 页面做 title 唯一性硬校验）。
- 该标题形态**已落在 `/quote-source/[原句]` 上**——那本来就是为此意图建的页。引文页保留现有标题（`Author on Theme: "…"`），只加核验区块。
- 全站同时重写 673 个页面的 TDK，本身就是 8/17 那次「批量改写信号」的形态。方案自己在 P1-8 里也写了「分批 50 页/周，不要全站一次性重写」。

**需要你定**：如果你希望引文页也换标题，建议按批次走 `src/data/seo-overrides.ts` 的 override 机制，一次 50 页，不要全量。

### 3. 印尼语版本（P2-11）暂缓

印尼占访问 34.8% 是事实，但方案要求「先翻固定引文页 + /quote-source」。当前语料 692 条，机器翻译成印尼语会在一个刚因「批量扩张但质量未配套」被降权的站上，**再叠一层批量生成内容**。触发 Helpful Content 的成本远高于收益。

**建议**：先做 10–20 条**人工撰写**的核心页印尼语版本（含 hreflang），验证印尼流量的转化后再扩。需要你确认是否投入这笔内容成本。

---

## 五、还缺两份数据（方案 P0 的第 1、2 条，我拿不到）

1. **GSC 收录报告 xlsx**（`索引 → 网页 → 导出`，含「未编入索引」原因分布）。
   这决定你是停在「二级信号：已发现已抓取不收录」（→ 停止扩页 + 改造存量）还是滑进「三级信号：已发现不抓取不收录」（→ 全部 404）。
   **本地能做的最接近替代**：本次构建审计实测 `1111 indexable / 620 noindex / 530 redirect`，但这只是站内声明，不是 Google 的抓取账本。
2. **7/24–8/5 的 referrer 来源**（Vercel Analytics）。判断 7 月那 2,028 次曝光是不是站外传播带来的。

这两份给我，我立刻出判级和顺序调整。

---

## 六、`epistemology` 难度核实结果（P2-12）

**建议放弃，或放到 12 个月以后。** 该词头部的引用源全是 DR 80+ 的学术/权威站（Stanford Encyclopedia of Philosophy、Britannica、Wikipedia、IEP），页面都是 8,000 字以上的权威长文。以当前 DR 0，进前 20 的最短周期是 **12–24 个月**，且需要持续高质量学术内容投入。它不是这两个月该碰的词。

---

## 七、外链（P2-10）——唯一能决定能否进前 10 的动作，但需要人做

本轮拿到一个可用的门槛基准：该赛道头部站 **Quote Investigator（quoteinvestigator.com）** 已积累 **1,300+ 条溯源条目、约 28,000 个引用域、约 110 万条外链，Authority Score 约 47–48，月访问量级 20 万–50 万**（SEO 工具估算区间）。

它的模式值得抄的不是技术，而是**「一个人一条一条考证」**——这正是护城河，也是你已经在做的事（本批 31 条核验记录就是这个模式的第一个批次）。

**可执行渠道（围绕引文溯源才自然）**：
- 维基百科引文条目的参考文献（这是该赛道最集中的外链源）
- Quora / Reddit 上「这句话到底谁说的」类问答
- 高校哲学系课程资源页与阅读书目
- 引文类站点的互链

**节奏**：每周固定发，不冲量。按方案引用的话——「不能三天打鱼，九十七天晒网」。

---

## 八、上线后你需要在 GSC 做的动作

1. **重新提交 sitemap**：提交 `sitemap-index.xml`（现在指向 4 份子 sitemap，Search Console 会分别报覆盖率）。
2. **URL 检查工具请求重新索引**（优先级排序）：
   - `/quote-source`（新主战场）
   - `/`（H1 与 TDK 已重写）
   - `/quote-source/truth-happens-to-an-idea-it-becomes-true`
   - `/random-philosophy-generator`
   - `/quotes/q0001`（224 展示 / CTR 0.45%）
3. **确认「人工操作」标签为空**。
4. 抓取频率设为最高。

---

## 九、验收指标（每周只盯这四个）

| # | 指标 | 目标 |
|---|---|---|
| 1 | 「已抓取-尚未编入索引」页数 | **不再增长**（唯一需要立刻止住的血） |
| 2 | 新增/升级页面的出词数 | 有多少页拿到曝光（不要求排名） |
| 3 | **前 10 位页面数** | 核心 KPI，靶子是当前平均排名 32.2 |
| 4 | `who said this quote` 位次 | 记录进前 20 / 前 10 的日期 |

**CTR 不要单独盯**——0.5% 是位置该有的值，位置上去 CTR 自然上去。

---

## 十、本批未做、留到下一批的事

- 引文页核验记录目前 **31/692**。下一批按 GSC 展示量排序继续写（每个批次建议 ≤50 页）。
- 需要**新增主体页 /quotes 的两处重复**：Q0070 与 Q0426 是同一条尼采引语（Twilight of the Idols, Maxims and Arrows §8）的两个页面，属站内自我竞争，建议合并并 301。这是我构建时发现的，方案未提。
- `/quote-source` hub 的方法论内容已经超过方案要求的 1500–2000 词（实测 4236 词），暂不需要扩写。
