<script setup lang="ts">
import ArticleHeader from './components/header/ArticleHeader.vue'
import ArticleContent from './content/ArticleContent.vue'
</script>

<template>
  <!-- 文章区 -->
  <div class="article">
    <!-- 文章区容器 -->
    <div class="article-container">
      <ArticleHeader />
      <ArticleContent />
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 文章部分 */
.article {
  width: 1px;
  /* 文章区域相对于可视区域的占比 */
  flex-grow: 1;
  /* 文章区域高度 */
  height: 100%;
}
/* 文章容器 */
.article-container {
  /* 左侧文章区的总大小 */
  width: 100%;
  height: 100%;
  /* 盒子的边显示在内侧 */
  box-sizing: border-box;
  /* 文章区边上的颜色 */
  border: 1px solid var(--kungalgame-trans-blue-4);
  background-color: var(--kungalgame-trans-blue-0);
  border-radius: 5px;
  display: flex;
  /* 文章区所有组件居中 */
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}
</style>
