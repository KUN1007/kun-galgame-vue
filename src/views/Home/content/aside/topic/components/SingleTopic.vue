<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="new-topic">
    <!-- 热门帖子的标题 -->
    <div class="new-topic-title">啊这可海星</div>
    <!-- 热门帖子的热度值 -->
    <div class="new-topic-number">
      <Icon icon="svg-spinners:clock" />
      <span>刚刚</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
/* 单个新帖子的样式 */
.new-topic {
  display: flex;
  /* 设置空白左右居中 */
  justify-content: space-between;
  /* 设置每个帖子高度相等 */
  flex-grow: 1;
  color: @kungalgame-font-color-3;
  align-items: center;
  cursor: pointer;
}
/* 单个新帖子的 hover */
.new-topic:hover {
  box-shadow: -2px -2px 5px @kungalgame-white, 2px 2px 5px @kungalgame-gray-3;
}
.new-topic:active {
  box-shadow: inset 1px 1px 2px @kungalgame-gray-3,
    inset -1px -1px 2px @kungalgame-white;
}
/* 单个帖子的标题样式 */
.new-topic-title {
  /* 单个帖子标题左侧的一段距离 */
  padding-left: 10px;
  /* 设置页面变化时不换行，显示省略号 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 显示省略号 */
  display: -webkit-box; /* 将文本框转化为弹性伸缩盒子 */
  -webkit-box-orient: vertical; /* 设置为纵向排列 */
  -webkit-line-clamp: 2; /* 显示两行文本 */
  /* 设置帖子的字体大小 */
  font-size: smaller;
}
/* 设置单个帖子右侧的热度值盒子 */
.new-topic-number {
  /* 热度值距离右侧的距离 */
  margin-right: 10px;
  display: flex;
  /* 右侧热度区域不换行 */
  white-space: nowrap;
  align-items: center;
}
/* 时钟图标的颜色 */
.new-topic-number {
  /* 设置 fa 图标字体的颜色 */
  color: @kungalgame-purple-4;
}
/* 右侧区域的大小 */
.new-topic-number span {
  width: 36px;
  font-size: xx-small;
  /* 右侧区域距离最右侧的距离 */
  margin-left: 5px;
  color: @kungalgame-font-color-3;
}
</style>
