<script setup lang="ts">
import { Icon } from '@iconify/vue'

const props = defineProps(['data'])
console.log(props)
</script>

<template>
  <div class="new-topic">
    <!-- 热门帖子的标题 -->
    <div class="title">
      啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
    </div>
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
  width: 100%;
  display: flex;
  /* 设置空白左右居中 */
  justify-content: space-between;
  height: 100%;
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
.title {
  /* 单个帖子标题左侧的一段距离 */
  padding-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
