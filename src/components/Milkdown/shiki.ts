import { getHighlighter, Highlighter } from 'shiki'
import { $proseAsync } from '@milkdown/utils'
import { Node } from '@milkdown/prose/model'
import { Plugin, PluginKey } from '@milkdown/prose/state'
import { Decoration, DecorationSet } from '@milkdown/prose/view'
import { findChildren } from '@milkdown/prose'
import { codeBlockSchema } from '@milkdown/preset-commonmark'

function getDecorations(doc: Node, highlighter: Highlighter) {
  const decorations: Decoration[] = []

  const children = findChildren((node) => node.type === codeBlockSchema.type())(
    doc
  )

  children.forEach(async (block) => {
    let from = block.pos + 1
    const { language } = block.node.attrs
    if (!language) return
    const nodes = highlighter
      .codeToThemedTokens(block.node.textContent, language)
      .map((token) =>
        token.map(({ content, color }) => ({
          content,
          color,
        }))
      )
    nodes.forEach((block) => {
      block.forEach((node) => {
        const to = from + node.content.length
        const decoration = Decoration.inline(from, to, {
          style: `color: ${node.color}`,
        })
        decorations.push(decoration)
        from = to
      })
      from += 1
    })
  })

  return DecorationSet.create(doc, decorations)
}

export const milkShiki = $proseAsync(async () => {
  const highlighter = await getHighlighter({
    theme: 'nord',
    langs: ['javascript', 'tsx', 'markdown'],
  })
  const key = new PluginKey('shiki')

  return new Plugin({
    key,
    state: {
      init: (_, { doc }) => getDecorations(doc, highlighter),
      apply: (tr, value, oldState, newState) => {
        const codeBlockType = codeBlockSchema.type()
        const isNodeName =
          newState.selection.$head.parent.type === codeBlockType
        const isPreviousNodeName =
          oldState.selection.$head.parent.type === codeBlockType
        const oldNode = findChildren((node) => node.type === codeBlockType)(
          oldState.doc
        )
        const newNode = findChildren((node) => node.type === codeBlockType)(
          newState.doc
        )

        const codeBlockChanged =
          tr.docChanged &&
          (isNodeName ||
            isPreviousNodeName ||
            oldNode.length !== newNode.length ||
            oldNode[0]?.node.attrs.language !== newNode[0]?.node.attrs.language)

        if (codeBlockChanged) {
          return getDecorations(tr.doc, highlighter)
        }

        return value.map(tr.mapping, tr.doc)
      },
    },
    props: {
      decorations(state) {
        return key.getState(state)
      },
    },
  })
})
