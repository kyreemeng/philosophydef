import quotes from "../data/quotes.json";
import themeMerge from "../data/theme-merge.json";

export type Quote = (typeof quotes)[number];

const caseMap = themeMerge.caseMap as Record<string, string>;
const thinMerges = themeMerge.thinMerges as Record<string, string>;
const keepThemes = new Set(themeMerge.keepThemes as string[]);

export function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Map any raw theme label to a publishable canonical theme. */
export function canonicalizeTheme(theme: string): string {
  const cased = caseMap[theme] ?? theme;
  if (keepThemes.has(cased)) return cased;
  return thinMerges[cased] ?? "Philosophy";
}

export function themeSlug(theme: string) {
  return slugify(canonicalizeTheme(theme));
}

export function thinkerGroups() {
  const groups = new Map<string, Quote[]>();
  for (const quote of quotes) {
    const existing = groups.get(quote.author) ?? [];
    existing.push(quote);
    groups.set(quote.author, existing);
  }
  return [...groups.entries()]
    .map(([name, items]) => ({
      name,
      slug: slugify(name),
      quotes: items,
    }))
    .sort((a, b) => b.quotes.length - a.quotes.length);
}

export function themeGroups() {
  const groups = new Map<string, Quote[]>();
  for (const quote of quotes) {
    const seen = new Set<string>();
    for (const theme of quote.themes) {
      const canonical = canonicalizeTheme(theme);
      if (seen.has(canonical)) continue;
      seen.add(canonical);
      const existing = groups.get(canonical) ?? [];
      existing.push(quote);
      groups.set(canonical, existing);
    }
  }
  return [...groups.entries()]
    .map(([name, items]) => ({
      name,
      slug: slugify(name),
      quotes: items,
    }))
    .filter((theme) => keepThemes.has(theme.name))
    .sort((a, b) => b.quotes.length - a.quotes.length);
}

/** Old thin/duplicate theme slugs → canonical theme path. */
export function themeRedirects(): Record<string, string> {
  const redirects: Record<string, string> = {};
  const allRaw = new Set<string>();
  for (const quote of quotes) {
    for (const theme of quote.themes) allRaw.add(theme);
  }
  for (const raw of allRaw) {
    const fromSlug = slugify(raw);
    const toSlug = slugify(canonicalizeTheme(raw));
    if (fromSlug !== toSlug) {
      redirects[`/themes/${fromSlug}`] = `/themes/${toSlug}`;
    }
  }
  // case-map only variants where slug already matched after lowercasing
  for (const [from, to] of Object.entries(caseMap)) {
    const fromSlug = slugify(from);
    const toSlug = slugify(canonicalizeTheme(to));
    if (fromSlug !== toSlug) {
      redirects[`/themes/${fromSlug}`] = `/themes/${toSlug}`;
    }
  }
  return redirects;
}

export function truncateWords(text: string, maxWords: number) {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text.trim();
  return `${words.slice(0, maxWords).join(" ")}…`;
}

export function quoteTitle(quote: Quote) {
  const snippet = truncateWords(quote.text, 12);
  const sharesOpening = quotes.some(
    (other) =>
      other.id !== quote.id &&
      other.author === quote.author &&
      truncateWords(other.text, 12) === snippet,
  );
  const who = sharesOpening ? `${quote.author} (${quote.id})` : quote.author;
  return `${who} Quote: “${snippet}” | Philosophy Blind Box`;
}

export function quoteDescription(quote: Quote) {
  const theme = canonicalizeTheme(quote.themes[0] ?? "Philosophy").toLowerCase();
  const source = quote.source ? ` Source: ${quote.source}.` : "";
  return `${quote.author} quote on ${theme}.${source} “${truncateWords(quote.text, 16)}”`.slice(
    0,
    155,
  );
}

export function relatedByAuthor(quote: Quote, limit = 5) {
  return quotes
    .filter((item) => item.author === quote.author && item.id !== quote.id)
    .slice(0, limit);
}

export function relatedByTheme(quote: Quote, limit = 5) {
  const primary = canonicalizeTheme(quote.themes[0] ?? "Philosophy");
  return quotes
    .filter((item) => {
      if (item.id === quote.id) return false;
      return item.themes.some((theme) => canonicalizeTheme(theme) === primary);
    })
    .slice(0, limit);
}

export function adjacentQuotes(quote: Quote) {
  const index = quotes.findIndex((item) => item.id === quote.id);
  const prev = index > 0 ? quotes[index - 1] : quotes[quotes.length - 1];
  const next = index < quotes.length - 1 ? quotes[index + 1] : quotes[0];
  return { prev, next };
}

export function thinkerThemePairs(minQuotes = 2) {
  const map = new Map<
    string,
    {
      author: string;
      authorSlug: string;
      theme: string;
      themeSlug: string;
      quotes: Quote[];
    }
  >();

  for (const quote of quotes) {
    const seen = new Set<string>();
    for (const raw of quote.themes) {
      const theme = canonicalizeTheme(raw);
      if (theme === "Philosophy") continue;
      const key = `${quote.author}:::${theme}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const existing = map.get(key);
      if (existing) existing.quotes.push(quote);
      else {
        map.set(key, {
          author: quote.author,
          authorSlug: slugify(quote.author),
          theme,
          themeSlug: themeSlug(theme),
          quotes: [quote],
        });
      }
    }
  }

  return [...map.values()].filter((pair) => pair.quotes.length >= minQuotes);
}

export function citationFormats(quote: Quote) {
  const year = "n.d.";
  const url = `https://www.philosophydef.com/quotes/${quote.id.toLowerCase()}`;
  return {
    apa: `${quote.author}. (${year}). ${quote.text} In Philosophy Blind Box. ${url}`,
    mla: `${quote.author}. “${truncateWords(quote.text, 8)}.” Philosophy Blind Box, ${url}.`,
    chicago: `${quote.author}. “${truncateWords(quote.text, 8)}.” Philosophy Blind Box. Accessed ${new Date().getFullYear()}. ${url}.`,
  };
}
