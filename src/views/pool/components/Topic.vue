<script setup lang="ts">
const props = defineProps(['data', 'itemStyle'])
import { randomNum } from '@/utils/random'

const randomColor = `rgba(${randomNum(0, 100)}, ${randomNum(
  0,
  100
)}, ${randomNum(0, 255)}, ${Math.random().toFixed(2)})`

const randomTransColor = (
  color1: number,
  color2: number,
  color3: number,
  trans: number
) => {
  return `rgba(${randomNum(200, color1)}, ${randomNum(
    200,
    color2
  )}, ${randomNum(200, color3)}, ${randomNum(50, trans) / 100})`
}
</script>

<template>
  <!-- 单个帖子容器 -->
  <div class="topic">
    <!-- 帖子的标题 -->
    <div class="title">
      {{ props.data.title }}
    </div>
    <!-- 帖子的内容区 -->
    <div class="content">{{ props.data.content }}</div>
    <!-- 帖子的状态 -->
    <div class="status">
      <!-- 浏览数 -->
      <span><i class="fa-regular fa-eye"></i>{{ props.data.view }}</span>
      <!-- 点赞数 -->
      <span><i class="fa-regular fa-thumbs-up"></i>{{ props.data.like }}</span>
    </div>
    <!-- 发帖时间 -->
    <div class="time">
      <i class="fa-solid fa-hourglass-half"></i>
      <div>{{ props.data.time }} 发布</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 帖子池单个帖子 */
.topic {
  /* 单个帖子距下方的距离 */
  margin-bottom: 7px;
  /* 竖直方向弹性布局 */
  display: flex;
  flex-direction: column;
  /* 圆角 */
  border-radius: 7px;
  /* Scss random color */
  background-color: v-bind(randomTransColor(255, 255, 255, 100));
  border: 1px solid v-bind(randomTransColor(255, 255, 255, 100));
  color: var(--kungalgame-font-color-3);
  cursor: pointer;
}
.topic:hover {
  background-color: var(--kungalgame-blue-1);
}
/* 帖子的标题 */
.title {
  /* 标题显示两行、超出部分隐藏 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 显示省略号 */
  display: -webkit-box; /* 将文本框转化为弹性伸缩盒子 */
  -webkit-box-orient: vertical; /* 设置为纵向排列 */
  -webkit-line-clamp: 2; /* 显示两行文本 */
  /* 居中 */
  margin: 0 auto;
  margin-top: 7px;
  padding: 0 7px;
  font-weight: bold;
  color: var(--kungalgame-font-color-2);
}
/* 帖子的内容区 */
.content {
  overflow: hidden;
  font-size: 14px;
  padding: 0 10px;
  margin: 7px 0;
}
/* 帖子的状态 */
.status {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  /* 窗口缩小不换行 */
  overflow: hidden;
  flex-wrap: wrap;
}
.status i {
  color: var(--kungalgame-red-4);
}
.time {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: small;
  /* 文字间距 */
  letter-spacing: 1px;
  /* 窗口缩小不换行 */
  overflow: hidden;
  white-space: nowrap;
}
.time i {
  margin: 0 5px;
  color: var(--kungalgame-purple-5);
}
</style>
