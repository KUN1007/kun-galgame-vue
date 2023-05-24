<script setup lang="ts">
import SingleNewTopic from './components/SingleNewTopic.vue'

import singleTopic from './topic'
</script>

<template>
  <!-- 侧边栏动态推送今日热度帖子 -->
  <div class="top-topic-wrap">
    <!-- 今日热度帖子的标题名 -->
    <div class="title">今日热门话题</div>
    <!-- 热门帖子的目录 -->
    <span class="top-topic-content" v-for="kun in singleTopic" :key="kun.index">
      <SingleNewTopic :data="kun.data" :to="{ path: kun.router }" />
    </span>
  </div>
</template>

<style lang="less" scoped>
/* 侧边栏动态推送帖子的总容器 */
.top-topic-wrap {
  width: 100%;
  height: 100%;
  /* 热门帖子距离最新帖子的距离 */
  margin-bottom: 5px;
  /* 今日热门帖子区域为竖直弹性盒 */
  display: flex;
  flex-direction: column;
}
/* “今日热门话题”六个字的样式 */
.title {
  height: 100%;
  border: 3px dashed @kungalgame-trans-blue-1;
  border-bottom: none;
  /* 设置（今日热门话题）居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  color: @kungalgame-font-color-3;
  /* 设置页面缩小到最小时该行不换行 */
  overflow: hidden;
  white-space: nowrap;
}
/* 展示热门帖子的区域 */
.top-topic-content {
  height: 100%;
  background-color: @kungalgame-trans-blue-1;
  /* 热门帖子标题部分为弹性盒 */
  display: flex;
  flex-direction: column;
}
</style>
