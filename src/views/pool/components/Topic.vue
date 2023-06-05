<script setup lang="ts"></script>

<template>
  <!-- 单个帖子容器 -->
  <div class="single-topic-container">
    <!-- 帖子的标题 -->
    <div class="topic-title">
      啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
    </div>
    <!-- 帖子的内容区 -->
    <div class="topic-content">
      啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
      啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
      啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
      啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
      啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
    </div>
    <!-- 帖子的状态 -->
    <div class="topic-status">
      <!-- 浏览数 -->
      <span><i class="fa-regular fa-eye"></i>10007</span>
      <!-- 点赞数 -->
      <span><i class="fa-regular fa-thumbs-up"></i>10007</span>
    </div>
    <!-- 发帖时间 -->
    <div class="topic-post-time">
      <i class="fa-solid fa-hourglass-half"></i>
      <div>10月7日-10:07:00 发布</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 帖子池单个帖子 */
.single-topic-container {
  /* 单个帖子距下方的距离 */
  margin-bottom: 7px;
  /* 竖直方向弹性布局 */
  display: flex;
  flex-direction: column;
  /* 圆角 */
  border-radius: 7px;
  /* Scss random color */
  background-color: azure;
  border: 1px solid black;
  cursor: pointer;
}
.single-topic-container:hover {
  background-color: var(--kungalgame-blue-1);
}
/* 帖子的标题 */
.topic-title {
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
.topic-content {
  /* 单个帖子的最大高度 */
  max-height: 700px;
  overflow: hidden;
  font-size: 14px;
  padding: 0 10px;
  margin: 7px 0;
}
/* 帖子的状态 */
.topic-status {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  /* 窗口缩小不换行 */
  overflow: hidden;
  flex-wrap: wrap;
}
.topic-status i {
  color: var(--kungalgame-red-4);
}
.topic-post-time {
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
.topic-post-time i {
  margin: 0 5px;
  color: var(--kungalgame-purple-5);
}
</style>
