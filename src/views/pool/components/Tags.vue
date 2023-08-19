<script setup lang="ts">
import { tags } from '@/types/pool/tags'
</script>

<template>
  <!-- 话题池顶部交互栏 -->
  <div class="pool-nav-bar">
    <!-- 热门话题标签，根据所有话题的总标签数推断 -->
    <span class="nav-tags" v-for="kun in tags" :key="kun.index">{{
      kun.name
    }}</span>
  </div>
</template>

<style lang="scss" scoped>
/* 话题池顶部交互栏 */
.pool-nav-bar {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
}
/* 热门话题标签 */
.nav-tags {
  /* 单个标签不换行 */
  white-space: nowrap;
  /* 距离其它话题的距离 */
  font-size: 14px;
  margin: 2px;
  padding: 2px;
  background-color: var(--kungalgame-trans-blue-1);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--kungalgame-font-color-3);
}
</style>
