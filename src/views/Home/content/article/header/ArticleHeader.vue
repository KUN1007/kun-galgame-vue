<script lang="ts">
import { Icon } from "@iconify/vue";
export default {
  name: "ArticleHeader",
  components: {
    Icon,
  },
};
</script>

<template>
  <!-- 文章区顶部交互区 -->
  <div class="nav-article">
    <!-- 排序区域容器 -->
    <div class="nav-article-sort-container">
      <div class="sort-container-title">
        <span>筛选</span>
        <Icon icon="bi:sort-down" />
      </div>
      <!-- 根据浏览数排序 -->
      <div class="sort-by-view"></div>
      <!-- 根据点赞数排序 -->
      <div class="sort-by-like"></div>
      <!-- 根据评论数排序 -->
      <div class="sort-by-comment"></div>
    </div>
    <!-- 交互区搜索框 -->
    <div class="nav-article-search-container">
      <span>搜索帖子</span>
      <Icon icon="line-md:search" />
    </div>
    <!-- 交互区域进入全部话题 -->
    <div class="nav-article-more-topic">
      <span>全部帖子</span>
      <Icon icon="line-md:chevron-triple-right" />
    </div>
  </div>
</template>

<style scoped>
/* 文章顶部交互栏 */
.nav-article {
  width: 100%;
  height: 50px;
  /* 设置交互栏的下边距 */
  margin-bottom: 5px;
  /* 整体弹性 */
  display: flex;
}
/* 筛选、搜索帖子、更多 */
.nav-article-sort-container,
.nav-article-search-container,
.nav-article-more-topic {
  height: 100%;
  width: 1px;
  /* 居中弹性盒 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 页面缩小不换行 */
  overflow: hidden;
  white-space: nowrap;
}
/* 筛选 */
.nav-article-sort-container {
  background-color: var(--kungalgame-trans-red-3);
  flex-grow: 1;
  border-radius: 5px 0 0 0;
}
/* 搜索帖子 */
.nav-article-search-container {
  background-color: var(--kungalgame-trans-blue-3);
  flex-grow: 2;
}
/* 更多 */
.nav-article-more-topic {
  background-color: var(--kungalgame-trans-purple-3);
  flex-grow: 1;
  border-radius: 0 5px 0 0;
}
</style>
