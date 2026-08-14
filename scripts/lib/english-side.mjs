/**
 * Take the English side of bilingual "中文 / English" fields.
 * Chinese may use fullwidth ／ internally; English may contain ASCII "/".
 * Split on the first " / " that follows CJK, not on every slash.
 */
export function englishSide(value) {
  const text = String(value).trim();
  const match = text.match(/^(.*?[\u3400-\u9fff\uf900-\ufaff].*?)\s+\/\s+(.+)$/u);
  if (match) return match[2].trim();
  // Fullwidth-only bilingual without ASCII " / "
  const fullwidth = text.split(/\s*／\s*/);
  if (fullwidth.length > 1) {
    const last = fullwidth[fullwidth.length - 1].trim();
    if (last && !/[\u3400-\u9fff\uf900-\ufaff]/u.test(last)) return last;
  }
  return text;
}
