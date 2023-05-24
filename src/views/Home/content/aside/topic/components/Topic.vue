<script setup lang="ts">
import SingleTopic from './SingleTopic.vue'
</script>

<template>
  <!-- 侧边栏动态推送今日热度帖子 -->
  <div class="top-topic-wrap">
    <!-- 今日热度帖子的标题名 -->
    <div class="top-topic-title-name">今日热门话题</div>
    <!-- 热门帖子的目录 -->
    <div class="top-topic-content">
      <SingleTopic />
    </div>
  </div>
</template>

<style lang="less" scoped>
/* 侧边栏动态推送帖子的总容器 */
.top-topic-wrap {
  width: 100%;
  height: 1px;
  /* 设置今日热门帖子占侧边栏的比例 */
  flex-grow: 12.5;
  /* 热门帖子距离最新帖子的距离 */
  margin-bottom: 5px;
  /* 今日热门帖子区域为竖直弹性盒 */
  display: flex;
  flex-direction: column;
}
.top-topic-title-name,
.top-topic-content {
  width: 100%;
  height: 1px;
}
/* “今日热门话题”六个字的样式 */
.top-topic-title-name {
  /* 设置盒子的 border 在内侧显示 */
  box-sizing: border-box;
  border: 3px dashed @kungalgame-trans-blue-1;
  border-bottom: none;
  /* 设置（今日热门话题）居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 设置（今日热门话题占整个热门区域的宽度） */
  flex-grow: 1;
  color: @kungalgame-font-color-3;
  /* 设置页面缩小到最小时该行不换行 */
  overflow: hidden;
  white-space: nowrap;
}
/* 展示热门帖子标题的区域 */
.top-topic-content {
  background-color: @kungalgame-trans-blue-1;
  /* 热门帖子标题区域占整个左侧页面中部的比例 */
  flex-grow: 10;
  /* 热门帖子标题部分为弹性盒 */
  display: flex;
  flex-direction: column;
}
</style>
