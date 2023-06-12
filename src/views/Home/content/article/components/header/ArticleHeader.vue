<script setup lang="ts">
import { Icon } from '@iconify/vue'
import KUNGalgameSearchBox from '@/components/KUNGalgameSearchBox.vue'
import SortTopic from './SortTopic.vue'
</script>

<template>
  <!-- 文章区顶部交互区 -->
  <div class="nav-article">
    <!-- 排序区域容器 -->

    <SortTopic />

    <!-- 搜索框 -->
    <KUNGalgameSearchBox :isMainPage="true" />
    <!-- 交互区域进入全部话题 -->
    <RouterLink to="/pool/index" class="more">
      <span>全部帖子</span>
      <Icon class="all-topic" icon="line-md:chevron-triple-right" />
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
/* 文章顶部交互栏 */
.nav-article {
  width: 100%;
  height: 40px;
  /* 整体弹性 */
  display: flex;
  flex-shrink: 0;
  border-bottom: 1px solid var(--kungalgame-trans-blue-4);
  color: var(--kungalgame-font-color-3);
  z-index: 1;
}

/* 更多 */
.more {
  height: 100%;
  width: 1px;
  /* 居中弹性盒 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 页面缩小不换行 */
  white-space: nowrap;
  background-color: var(--kungalgame-trans-blue-3);
  flex-grow: 1;
  border-radius: 0 5px 0 0;
  cursor: pointer;
  border-left: 1px solid var(--kungalgame-trans-blue-4);
  box-sizing: border-box;
  color: var(--kungalgame-font-color-3);
}
.more:hover {
  background-color: var(--kungalgame-trans-blue-2);
}
.more:active {
  background-color: var(--kungalgame-trans-blue-4);
}
.all-topic {
  font-size: 18px;
}

@media (max-width: 1000px) {
  .more {
    display: none;
  }
}
</style>
