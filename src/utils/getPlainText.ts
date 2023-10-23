export function getPlainText(html: string): string {
  // Remove HTML tags
  const plainText = html.replace(/<[^>]*>/g, '')

  // Decode HTML entities
  const textWithEntitiesDecoded = new DOMParser().parseFromString(
    plainText,
    'text/html'
  ).body.textContent

  return textWithEntitiesDecoded ? textWithEntitiesDecoded : ''
}
