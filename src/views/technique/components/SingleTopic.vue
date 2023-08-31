<script setup lang="ts">
import { Icon } from '@iconify/vue'

const props = defineProps(['data'])

// TODO: 后端接口字段名还未定，不能确定
</script>

<template>
  <!-- 单个话题 -->
  <div class="topic">
    <!-- 话题 hover 后的边 -->
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <!-- 话题的标题 -->
    <div class="topic-title">{{ props.data.topicTitle }}</div>
    <!-- 话题的内容预览 -->
    <div class="topic-content">
      <p>{{ props.data.topicContent }}</p>
    </div>
    <!-- 话题的状态 -->
    <div class="topic-status">
      <!-- 话题的点击数 -->
      <div class="view"><Icon icon="ic:outline-remove-red-eye" />1007</div>
      <!-- 话题的点赞数 -->
      <div class="like"><Icon icon="line-md:thumbs-up-twotone" />1007</div>
      <!-- 话题的回复数 -->
      <div class="reply"><Icon icon="fa-regular:comment-dots" />1007</div>
    </div>
    <!-- 话题的标签 -->
    <div class="topic-tags">
      <Icon class="icon" icon="ant-design:tag-twotone" />
      <!-- 单个标签 -->
      <span v-for="kun in props.data.topicTags">{{ kun }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 单个话题 */
.topic {
  border: 1px solid var(--kungalgame-trans-blue-4);
  border-radius: 5px;
  background-color: var(--kungalgame-trans-white-2);
  /* 相对于底部状态的定位 */
  position: relative;
  display: inline-block;
  /* 隐藏 hover 的颜色露出 */
  overflow: hidden;
  box-sizing: border-box;
  max-width: 350px;
}
/* 单个话题 hover */
.topic:hover {
  box-shadow: var(--shadow);
  /* 放大、旋转 */
  transform: scale(1.2) rotate(1deg);
  transition: 0.2s;
  z-index: 1009;
}
/* 话题边的光效 */
.topic:hover > span {
  position: absolute;
  display: block;
  z-index: 1009;
}
.topic:hover > span:nth-child(1) {
  filter: hue-rotate(0deg);
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--kungalgame-blue-4));
  animation: animate1 1s linear infinite;
}
@keyframes animate1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}
.topic:hover > span:nth-child(2) {
  filter: hue-rotate(60deg);
  top: -100%;
  right: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(180deg, transparent, var(--kungalgame-blue-4));
  animation: animate2 1s linear infinite;
  animation-delay: 0.25s;
}
@keyframes animate2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}
.topic:hover > span:nth-child(3) {
  filter: hue-rotate(120deg);
  bottom: 0;
  right: 0;
  width: 100%;
  background: linear-gradient(270deg, transparent, var(--kungalgame-blue-4));
  animation: animate3 1s linear infinite;
  animation-delay: 0.5s;
}
@keyframes animate3 {
  0% {
    right: -100%;
    height: 3px;
  }
  50%,
  100% {
    height: 2px;
    right: 100%;
  }
}
.topic:hover > span:nth-child(4) {
  filter: hue-rotate(300deg);
  bottom: -100%;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(360deg, transparent, var(--kungalgame-blue-4));
  animation: animate4 1s linear infinite;
  animation-delay: 0.75s;
}
@keyframes animate4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
/* 话题标题 */
.topic-title {
  padding: 10px;
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 话题内容预览 */
.topic-content {
  font-size: 13px;
  max-height: 200px;
  /* 超过 11 行显示省略号 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  overflow: hidden;
  -webkit-box-orient: vertical;
  padding: 0 10px;
}
/* 话题的状态 */
.topic-status {
  height: 30px;
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* 相对于话题绝对定位 */
  position: absolute;
  background-color: var(--kungalgame-trans-white-2);
  bottom: 0;
  div {
    display: flex;
    align-items: center;
  }
}
/* 话题的标签 */
.topic-tags {
  /* 占满单个话题区域 */
  width: 100%;
  font-size: 12px;
  padding: 7px;
  position: absolute;
  top: 0;
  right: 0;
  /* 竖直分布 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: var(--kungalgame-trans-white-9);
  /* 起初看不见文字 */
  opacity: 0;
  cursor: pointer;
}
.topic-tags > span {
  display: block;
  margin-bottom: 3px;
}
.icon {
  position: absolute;
  left: 20px;
  font-size: 18px;
  color: var(--kungalgame-red-4);
  margin-right: 5px;
}
/* 单个话题 hover 时显示话题标签 */
.topic:hover .topic-tags {
  background-color: var(--kungalgame-trans-blue-0);
  backdrop-filter: blur(5px);
  /* 放大、旋转回正 */
  transform: scale(1.1) rotate(-1deg);
  /* 完全不透明，可视 */
  opacity: 1;
  transition: 0.2s;
}
</style>
