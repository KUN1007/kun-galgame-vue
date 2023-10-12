export function getPlainText(html: string): string {
  // 去除 HTML 标记
  const plainText = html.replace(/<[^>]*>/g, '')

  // 解码 HTML 实体
  const textWithEntitiesDecoded = new DOMParser().parseFromString(
    plainText,
    'text/html'
  ).body.textContent

  return textWithEntitiesDecoded ? textWithEntitiesDecoded : ''
}
