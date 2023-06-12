<script setup lang="ts">
import { Icon } from '@iconify/vue'

// 导入 i18n 格式化时间的函数
import { formatTime } from '@/utils/formatTime'

defineProps(['data'])
</script>
<template>
  <!-- 帖子信息 -->
  <div class="topic-info">
    <!-- 帖子的概览信息 -->
    <div class="topic-summary">
      <!-- 帖子的标题 -->
      <div class="topic-title">
        <div class="topic-title-container">
          <span>{{ $props.data.topicTitle }}</span>
        </div>
      </div>
      <!-- 帖子发布日期 -->
      <div class="topic-status">
        <ul>
          <li>
            <Icon icon="ic:outline-remove-red-eye" />{{
              $props.data.topicViews
            }}
          </li>
          <li>
            <Icon icon="line-md:thumbs-up-twotone" />{{
              $props.data.topicLikes
            }}
          </li>
          <li>
            <Icon icon="ri:reply-line" />{{ $props.data.topicReplyCount }}
          </li>
        </ul>
      </div>
      <!-- 帖子的状态，点赞数等 -->
      <div class="topic-post-date">
        <span>{{ formatTime($props.data.topicPublishTime) }}</span>
      </div>
    </div>
    <!-- 帖子的预览介绍 -->
    <div class="topic-introduction">
      <div class="topic-introduction-text">
        <p>
          {{ $props.data.topicContent }}
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 帖子信息 */
.topic-info {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
/* 帖子的概览信息 */
.topic-summary,
.topic-introduction {
  width: 100%;
  height: 1px;
}
/* 帖子展示的头部 */
.topic-summary {
  flex-grow: 1;
  /* 头部三个小部分为弹性盒 */
  display: flex;
  justify-content: space-between;
}
/* 帖子的头部信息，标题日期等 */
.topic-title {
  height: 100%;
  width: 1px;
}
/* 发帖标题 */
.topic-title {
  flex-grow: 5;
  /* 超出不换行省略 */
  display: flex;
  align-items: center;
}
/* 设置标题容器不换行显示省略号 */
.topic-title-container {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/* 帖子标题的字体颜色 */
.topic-title span {
  color: var(--kungalgame-font-color-3);
  font-weight: 500;
}
/* 帖子点赞数等信息 */
.topic-status {
  display: flex;
  justify-content: end;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
}
/* 设置点赞、评论、查看字体和位置 */
.topic-status ul {
  display: flex;
  color: var(--kungalgame-font-color-2);
  font-size: smaller;
}
/* 点赞、评论、查看之间的距离 */
.topic-status ul li {
  margin-left: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
/* 发帖日期 */
.topic-post-date {
  width: 45px;
  font-size: x-small;
  color: var(--kungalgame-font-color-0);
  /* 居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 不换行 */
  overflow: hidden;
  white-space: nowrap;
}
/* 帖子的预览介绍 */
.topic-introduction {
  flex-grow: 2;
  display: flex;
  align-items: center;
}
/* 文本域盒子 */
.topic-introduction-text {
  width: 100%;
  /* 设置文本超过两行就显示省略号 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;
  cursor: pointer;
}
/* 发帖预览信息的字体 */
.topic-introduction-text p {
  font-size: 14px;
  color: var(--kungalgame-font-color-2);
}
</style>
