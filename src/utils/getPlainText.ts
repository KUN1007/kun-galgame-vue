export function getPlainText(html: string): string {
  const re1 = new RegExp('<.+?>', 'g')
  const arrEntities: Record<string, string> = {
    lt: '<',
    gt: '>',
    nbsp: ' ',
    amp: '&',
    quot: '"',
    ldquo: '“',
    mdash: '—',
    rdquo: '”',
  }

  const plainText = html
    .replace(re1, '')
    .replace(/&(lt|gt|nbsp|amp|quot|ldquo|mdash|rdquo);/gi, function (all, t) {
      return arrEntities[t]
    })

  return plainText
}
