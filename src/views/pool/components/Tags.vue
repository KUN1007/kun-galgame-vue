<script setup lang="ts">
import { tags } from '@/types/pool/tags'
</script>

<template>
  <!-- 帖子池顶部交互栏 -->
  <div class="pool-nav-bar">
    <!-- 热门帖子标签，根据所有帖子的总标签数推断 -->
    <span class="nav-tags" v-for="kun in tags" :key="kun.index">{{
      kun.name
    }}</span>
  </div>
</template>

<style lang="scss" scoped>
/* 帖子池顶部交互栏 */
.pool-nav-bar {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
}
/* 热门帖子标签 */
.nav-tags {
  /* 单个标签不换行 */
  white-space: nowrap;
  /* 距离其它帖子的距离 */
  font-size: 14px;
  margin: 2px;
  padding: 2px;
  background-color: var(--kungalgame-trans-blue-3);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
