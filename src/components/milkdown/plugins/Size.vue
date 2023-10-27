<!-- Custom plugins, calculate text size -->

<script setup lang="ts">
import { usePluginViewContext } from '@prosemirror-adapter/vue'
import { computed } from 'vue'

const { view } = usePluginViewContext()

const size = computed(() => {
  return view.value.state.doc.textContent.length
})
</script>

<template>
  <div>
    <span> Text count: {{ size }} </span>
  </div>
</template>
