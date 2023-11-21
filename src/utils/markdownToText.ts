export const markdownToText = (markdown: string) => {
  return markdown
    .replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm, '')
    .replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, ' $1')
    .replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, '$1')
    .replace(/\n={2,}/g, '\n')
    .replace(/~{3}.*\n/g, '')
    .replace(/~~/g, '')
    .replace(/`{3}.*\n/g, '')
    .replace(/\[(.*?)\][\[\(](.*?)[\]\)]/g, '$1 ($2)')
    .replace(/<[^>]*>/g, '')
    .replace(/^[=\-]{2,}\s*$/g, '')
    .replace(/\[\^.+?\](\: .*?$)?/g, '')
    .replace(/\s{0,2}\[.*?\]: .*?$/g, '')
    .replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g, '$1')
    .replace(/\[(.*?)\][\[\(].*?[\]\)]/g, '$1')
    .replace(/^\s{0,3}>\s?/g, '')
    .replace(/(^|\n)\s{0,3}>\s?/g, '\n\n')
    .replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, '')
    .replace(
      /^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,
      '$1$2$3'
    )
    .replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, '$2')
    .replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, '$2')
    .replace(/(`{3,})(.*?)\1/gm, '$2')
    .replace(/`(.+?)`/g, '$1')
    .replace(/\n{2,}/g, '\n\n')
}
