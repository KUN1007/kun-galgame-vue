<script setup lang="ts">
import { TooltipProvider } from '@milkdown/plugin-tooltip'
import { toggleStrongCommand } from '@milkdown/preset-commonmark'
import { callCommand } from '@milkdown/utils'
import { useInstance } from '@milkdown/vue'
import { usePluginViewContext } from '@prosemirror-adapter/vue'
import { onMounted, onUnmounted, ref, VNodeRef, watch } from 'vue'

const { view, prevState } = usePluginViewContext()
const [loading, get] = useInstance()

const divRef = ref<VNodeRef>()

let tooltipProvider: TooltipProvider

onMounted(() => {
  tooltipProvider = new TooltipProvider({
    content: divRef.value as any,
  })

  tooltipProvider.update(view.value, prevState.value)
})

watch([view, prevState], () => {
  tooltipProvider?.update(view.value, prevState.value)
})

onUnmounted(() => {
  tooltipProvider.destroy()
})

const toggleBold = (e: Event) => {
  if (loading.value) return

  e.preventDefault()

  get()!.action(callCommand(toggleStrongCommand.key))
}
</script>

<template>
  <div ref="divRef">
    <button class="tooltip" @mousedown="toggleBold">Bold</button>
  </div>
</template>

<style lang="scss" scoped>
.tooltip {
  padding: 7px;
  border: 1px solid var(--kungalgame-blue-4);
}
</style>
