<script setup lang="ts">
import Topic from './Topic.vue'
</script>

<template>
  <!-- 帖子排行 -->
  <div class="topic-ranking">
    <!-- 帖子排行标题 -->
    <div class="topic-title">最萌的帖子</div>
    <!-- 帖子排行的交互 -->
    <div class="topic-nav">
      <!-- 浏览数 -->
      <div class="view">按浏览数排序</div>
      <!-- 点赞数 -->
      <div class="like">按点赞数排序</div>
      <!-- 按回复数排序 -->
      <div class="comment">按回复数排序</div>
      <!-- 按推贴数排序 -->
      <div class="top">按推贴数排序</div>
    </div>
    <!-- 单个帖子的容器 -->
    <div class="topic-container">
      <Topic />
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 帖子排行 */
.topic-ranking {
  width: 50%;
}
/* 帖子排行标题 */
.topic-title {
  font-size: 30px;
  color: var(--kungalgame-blue-4);
  font-style: italic;
  text-shadow: 2px 2px 4px var(--kungalgame-pink-0);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
/* 帖子排行的交互 */
.topic-nav {
  display: flex;
  justify-content: space-around;
  margin-left: 10px;
  cursor: pointer;
}
.topic-nav > div:hover {
  background-color: var(--kungalgame-blue-1);
  transition: 0.2s;
}
/* 单个交互项目 */
.view,
.like,
.comment,
.top {
  height: 30px;
  width: 100%;
  border: 1px solid var(--kungalgame-blue-4);
  display: flex;
  justify-content: center;
  align-items: center;
}
.like,
.comment,
.top {
  border-left: none;
}
/* 单个帖子的容器 */
.topic-container {
  height: 650px;
  border: 1px solid var(--kungalgame-blue-4);
  border-top: none;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  overflow-y: scroll;
}
/* 滚动条的样式 */
.topic-container::-webkit-scrollbar {
  display: inline;
  width: 4px;
  height: 0;
  background-color: var(--kungalgame-red-2);
  border-radius: 2px;
}
.topic-container::-webkit-scrollbar-thumb {
  background: var(--kungalgame-blue-4);
  border-radius: 2px;
}
</style>
