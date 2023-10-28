<!-- Custom plugins, calculate text size -->

<script setup lang="ts">
import Settings from '../components/Settings.vue'
import { usePluginViewContext } from '@prosemirror-adapter/vue'
import { computed } from 'vue'

const { view } = usePluginViewContext()

const size = computed(() => {
  return view.value.state.doc.textContent.length
})
</script>

<template>
  <div class="footer">
    <Settings />
    <span> {{ size + ` ${$tm('edit.word')}` }} </span>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  padding: 10px 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
