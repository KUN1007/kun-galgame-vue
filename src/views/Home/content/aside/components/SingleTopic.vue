<script setup lang="ts">
import { Icon } from '@iconify/vue'

// 接受父组件 Topic 的传值
const props = defineProps(['data', 'isHotTopic'])
const { title, value, time } = props.data
const isHotTopic = props.isHotTopic
</script>

<template>
  <div class="new-topic">
    <!-- 热门话题的标题 -->
    <div class="title">{{ title }}</div>
    <!-- 热门话题的热度值 -->
    <div class="new" v-if="!isHotTopic">
      <Icon icon="svg-spinners:clock" />
      <span>{{ time }}</span>
    </div>
    <div class="hot" v-if="isHotTopic">
      <Icon icon="bi:fire" />
      <span>{{ value }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 单个新话题的样式 */
.new-topic {
  width: 100%;
  display: flex;
  /* 设置空白左右居中 */
  justify-content: space-between;
  height: 100%;
  color: var(--kungalgame-font-color-3);
  align-items: center;
  cursor: pointer;
  /* 单个新话题的 hover */
  &:hover {
    box-shadow: var(--kungalgame-shadow-1);
  }
  &:active {
    box-shadow: var(--kungalgame-shadow-2);
  }
}
/* 单个话题的标题样式 */
.title {
  /* 单个话题标题左侧的一段距离 */
  padding-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* 设置话题的字体大小 */
  font-size: smaller;
}
/* 设置单个话题右侧的热度值盒子 */
.new {
  /* 时间距离右侧的距离 */
  margin-right: 10px;
  display: flex;
  /* 右侧热度区域不换行 */
  white-space: nowrap;
  align-items: center;
  /* 设置 fa 图标字体的颜色 */
  color: var(--kungalgame-purple-4);
  span {
    width: 36px;
    font-size: xx-small;
    /* 右侧区域距离最右侧的距离 */
    margin-left: 5px;
    color: var(--kungalgame-font-color-3);
  }
}

/* 右侧区域的大小 */
.hot {
  /* 热度值距离右侧的距离 */
  margin-right: 10px;
  display: flex;
  white-space: nowrap;
  align-items: center;
  color: var(--kungalgame-red-4);
  span {
    width: 38px;
    font-size: small;
    margin-left: 5px;
    color: var(--kungalgame-font-color-3);
  }
}
</style>
