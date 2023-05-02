<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
<template>
  <!-- 帖子信息 -->
  <div class="topic-info">
    <!-- 帖子的概览信息 -->
    <div class="topic-summary">
      <!-- 帖子的标题 -->
      <div class="topic-title">
        <div class="topic-title-container">
          <a href="#"><span>啊这可海星</span></a>
        </div>
      </div>
      <!-- 帖子发布日期 -->
      <div class="topic-status">
        <ul>
          <li><Icon icon="ic:outline-remove-red-eye" />1007</li>
          <li><Icon icon="line-md:thumbs-up-twotone" />1007</li>
          <li><Icon icon="fa-regular:comment-dots" />1007</li>
        </ul>
      </div>
      <!-- 帖子的状态，点赞数等 -->
      <div class="topic-post-date">
        <span>10小时前</span>
      </div>
    </div>
    <!-- 帖子的预览介绍 -->
    <div class="topic-introduction">
      <div class="topic-introduction-text">
        <p>
          鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
/* 帖子信息 */
.topic-info {
  width: 1px;
  height: 100%;
  /* 单个帖子左右两部分发布人信息和帖子概览均为竖向弹性盒 */
  flex-grow: 1;
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
  color: @kungalgame-font-color-3;
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
  color: @kungalgame-gray-7;
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
  color: @kungalgame-gray-4;
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
  color: @kungalgame-font-color-2;
}
</style>
