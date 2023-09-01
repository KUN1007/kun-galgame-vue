<script setup lang="ts">
import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core'
import { Milkdown, useEditor } from '@milkdown/vue'
import { commonmark } from '@milkdown/preset-commonmark'
import MilkdownMenu from './MilkdownMenu.vue'

/**
 * 编辑器插件
 */

// import { slash } from '@milkdown/plugin-slash'
// Ctrl + Z
import { history, historyKeymap } from '@milkdown/plugin-history'
// 数学公式插件
import { math } from '@milkdown/plugin-math'
// 表情
import { emoji } from '@milkdown/plugin-emoji'
// 代码语法高亮插件
import { prism } from '@milkdown/plugin-prism'
import { tooltipFactory } from '@milkdown/plugin-tooltip'
import { indent } from '@milkdown/plugin-indent'
import { trailing } from '@milkdown/plugin-trailing'
import { upload } from '@milkdown/plugin-upload'
import { cursor } from '@milkdown/plugin-cursor'
import { clipboard } from '@milkdown/plugin-clipboard'
import { listener, listenerCtx } from '@milkdown/plugin-listener'

// prosemirror
import { usePluginViewFactory } from '@prosemirror-adapter/vue'
const pluginViewFactory = usePluginViewFactory()

// Tooltip
import Tooltip from './MilkdownTooltip.vue'
const tooltip = tooltipFactory('Text')

// code highlight
import { milkShiki } from './shiki'

const markdown = `啊这可海星`

useEditor((root) =>
  Editor.make()
    .config((ctx) => {
      const listener = ctx.get(listenerCtx)

      // listener.markdownUpdated((ctx, markdown, prevMarkdown) => {
      //   if (markdown !== prevMarkdown) {
      //     YourMarkdownUpdater(markdown)
      //   }
      // })

      // Ctrl + z
      ctx.set(historyKeymap.key, {
        // Remap to one shortcut.
        Undo: 'Mod-z',
        // Remap to multiple shortcuts.
        Redo: ['Mod-y', 'Shift-Mod-z'],
      })
      ctx.set(rootCtx, root)
      ctx.set(defaultValueCtx, markdown)
      ctx.set(tooltip.key, {
        view: pluginViewFactory({
          component: Tooltip,
        }),
      })
    })
    .use(listener)
    .use(milkShiki)
    .use(commonmark)
    .use(history)
    .use(math)
    .use(emoji)
    .use(prism)
    .use(tooltip)
)
</script>

<template>
  <div class="editor">
    <MilkdownMenu />
    <div class="text-area">
      <Milkdown />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-area {
  min-height: 200px;
  margin-top: 10px;
  white-space: pre-wrap;
  border: 1px solid var(--kungalgame-red-4);
}
</style>
