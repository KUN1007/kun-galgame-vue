<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import '@wangeditor/editor/dist/css/style.css'
import '@/styles/editor/editor.scss'

const width = ref('')

defineProps<{
  content: string
}>()

onMounted(() => {
  width.value = computed(() => {
    return 100 + '%'
  }).value
})
</script>

<template>
  <!-- 内容区右侧的话题展示区，这里富文本必须用 v-html，已经确定文本经过三次处理 -->
  <!-- 这里用的 v-html，样式是页面刷新后才会有的，所以必须动态绑定样式 -->
  <div class="w-e-text-container">
    <div v-html="content" data-slate-editor></div>
  </div>
</template>

<style lang="scss" scoped>
/* 内容区右侧的话题展示区 */
.w-e-text-container {
  /** 100 + 20 + 20 + 1 = 141px */
  width: calc(100% - 141px);
  font-size: 15px;
  padding: 17px;
  border-left: 1px solid var(--kungalgame-blue-1);
  color: var(--kungalgame-font-color-3);
  :deep(*) {
    max-width: v-bind(width);
    overflow-y: scroll;
  }
}

@media (max-width: 700px) {
  .w-e-text-container {
    width: 100%;
  }
}
</style>
