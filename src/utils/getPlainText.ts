export function getPlainText(html: string): string {
  // 使用正则表达式匹配所有 HTML 标签并删除
  const plainText = html.replace(/<[^>]*>/g, '')

  // 使用实体编码映射表将 HTML 实体编码还原
  const entityMap: Record<string, string> = {
    lt: '<',
    gt: '>',
    nbsp: ' ',
    amp: '&',
    quot: '"',
    ldquo: '“',
    mdash: '—',
    rdquo: '”',
  }

  // 使用正则表达式匹配实体编码并还原
  const decodedText = plainText.replace(/&(\w+);/g, function (match, entity) {
    return entityMap[entity] || match
  })

  return decodedText
}
