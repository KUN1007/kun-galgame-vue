<script setup lang="ts">
import SingleHistory from './SingleLog.vue'
</script>

<template>
  <div class="article-history">
    <!-- 历史更新列表 -->
    <ul class="history-list">
      <SingleHistory />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
/* 历史更新的内容 */
.article-history {
  border-left: 1px solid var(--kungalgame-blue-4);
  height: 75%;
  padding: 10px;
}
/* 历史更新列表 */
.history-list {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* y 轴溢出滚动 */
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: inline;
    width: 4px;
    height: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--kungalgame-blue-4);
    border-radius: 2px;
  }
}
</style>
