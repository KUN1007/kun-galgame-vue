<!-- 
  这里是帖子部分的功能区，有返回顶部等功能
 -->
<script setup lang="ts"></script>

<template>
  <div class="topic-page-nav">
    <!-- 交互区容器 -->
    <div class="topic-page-nav-container">
      <ul>
        <li><i class="fa-solid fa-people-group fa-bounce"></i>进入帖子池</li>
        <li><i class="fa-solid fa-arrows-up-to-line"></i>返回到顶端</li>
        <li><i class="fa-solid fa-house"></i>返回到首页</li>
      </ul>
      <ul>
        <li><i class="fa-regular fa-clock"></i>按时间排序</li>
        <li><i class="fa-regular fa-thumbs-up"></i>按点赞排序</li>
        <li><i class="fa-regular fa-comment-dots"></i>按回复排序</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* 帖子详情页的交互 */
.topic-page-nav {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  /* 左边第一个部分的边 */
  border: 1px solid var(--kungalgame-trans-red-4);
  box-shadow: var(--shadow);
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
  background-color: var(--kungalgame-trans-yellow-0);
}
/* 两列的无序列表 */
.topic-page-nav ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-grow: 1;
}
.topic-page-nav ul:nth-child(1) {
  border-right: 1px dashed var(--kungalgame-trans-purple-4);
  box-sizing: border-box;
}
/* 每个功能 */
.topic-page-nav ul li {
  padding: 0 11px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-bottom: 1px dashed var(--kungalgame-trans-purple-4);
  box-sizing: border-box;
  /* 页面变化时不换行 */
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
}
.topic-page-nav ul li i {
  margin-right: 4px;
  font-size: 17px;
}
/* 功能区 hover */
.topic-page-nav ul li::before {
  transform: scaleX(0);
  transform-origin: bottom right;
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  inset: 0 0 0 0;
  background-color: var(--kungalgame-trans-blue-3);
  z-index: -1;
  transition: transform 0.3s ease;
}
.topic-page-nav ul:nth-child(1) li:nth-child(1):before {
  background-color: var(--kungalgame-red-4);
}
.topic-page-nav ul li:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
