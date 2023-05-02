<!-- 
  这里是帖子部分的功能区，有返回顶部等功能
 -->
<script setup lang="ts"></script>

<template>
  <div class="topic-page-nav">
    <!-- 交互区容器 -->
    <ul class="topic-page-nav-container">
      <li><i class="fa-solid fa-people-group fa-bounce"></i>进入帖子池</li>
      <li><i class="fa-solid fa-arrows-up-to-line"></i>返回到顶端</li>
      <li><i class="fa-solid fa-house"></i>返回到首页</li>
      <li><i class="fa-regular fa-clock"></i>按时间排序</li>
      <li><i class="fa-regular fa-thumbs-up"></i>按点赞排序</li>
      <li><i class="fa-regular fa-comment-dots"></i>按回复排序</li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
/* 帖子详情页的交互 */
.topic-page-nav {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  /* 左边第一个部分的边 */
  border: 1px solid @kungalgame-trans-red-4;
  box-shadow: @shadow;
  border-radius: 5px;
  /* 距离顶部的距离 */
  margin-bottom: 17px;
  /* 隐藏溢出的边角 */
  overflow: hidden;
}
/* 两个列表的容器 */
.topic-page-nav-container {
  flex-grow: 1;
  display: flex;
  background-color: @kungalgame-trans-yellow-0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
/* 每个功能 */
.topic-page-nav-container > li {
  padding: 0 11px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  /* 页面变化时不换行 */
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
}
.topic-page-nav-container > li > i {
  margin-right: 4px;
  font-size: 17px;
}
/* 功能区 hover */
.topic-page-nav-container > li::before {
  transform: scaleX(0);
  transform-origin: bottom right;
  content: ' ';
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  inset: 0 0 0 0;
  background-color: @kungalgame-trans-red-4;
  z-index: -1;
  transition: transform 0.3s ease;
}
.topic-page-nav-container > li:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
