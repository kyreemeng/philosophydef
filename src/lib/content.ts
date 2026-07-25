import quotes from "../data/quotes.json";

export function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function thinkerGroups() {
  const groups = new Map<string, typeof quotes>();
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
  const groups = new Map<string, typeof quotes>();
  for (const quote of quotes) {
    for (const theme of quote.themes) {
      const existing = groups.get(theme) ?? [];
      existing.push(quote);
      groups.set(theme, existing);
    }
  }
  return [...groups.entries()]
    .map(([name, items]) => ({
      name,
      slug: slugify(name),
      quotes: items,
    }))
    .sort((a, b) => b.quotes.length - a.quotes.length);
}
