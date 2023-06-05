<script setup lang="ts"></script>

<template>
  <!-- 页面头部 -->
  <div class="header">
    <!-- 用户头像 -->
    <div class="kungalgamer-avatar">
      <img src="@/assets/images/KUN.jpg" alt="KUN" />
    </div>
    <!-- 用户名 -->
    <div class="kungalgamer-name">
      <span>KUN</span>
      <span>KUNGalgame</span>
    </div>
    <!-- 用户萌萌点 -->
    <div class="moemoepoint">
      <div class="mp-progress"></div>
      <span>MP: 1007</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 页面的头部 */
.header {
  /* 固定高度 */
  height: 150px;
  /* 相对定位参考元素 */
  position: relative;
  display: flex;
  flex-direction: column;
}
/* 用户名 */
.kungalgamer-name {
  flex-grow: 2;
  width: 100%;
  /* 头部的颜色 */
  background-color: var(--kungalgame-trans-blue-0);
  align-items: center;
  span:nth-child(1) {
    font-family: serif;
    position: absolute;
    font-size: 22px;
    /* 相对于 header 定位信息 */
    margin-left: 200px;
    margin-top: 60px;
    z-index: 1;
  }
  span:nth-child(2) {
    font-family: serif;
    position: absolute;
    right: 0;
    font-size: 100px;
    color: var(--kungalgame-trans-white-6);
    font-style: italic;
    text-shadow: 2px 2px 2px var(--kungalgame-trans-white-8);
  }
}
/* 用户头像 */
.kungalgamer-avatar {
  position: absolute;
  /* 头像的定位 */
  top: 5px;
  left: 50px;
  z-index: 2;
}
/* 头像图片的属性 */
.kungalgamer-avatar img {
  width: 140px;
  border-radius: 50%;
  box-shadow: 0px 0px 2px 4px var(--kungalgame-trans-red-2);
}
/* 头像的 hover */
.kungalgamer-avatar img:hover {
  animation: spin 1s;
}
@keyframes spin {
  50% {
    transform: rotate(360deg);
  }
  70% {
    transform: scale(1.1);
  }
  80% {
    box-shadow: 0px 0px 2px 7px var(--kungalgame-trans-red-2);
  }
}
/* 用户萌萌点 */
.moemoepoint {
  height: 1px;
  flex-grow: 1;
  /* 分割线 */
  border-top: 2px solid var(--kungalgame-blue-4);
  border-bottom: 1px solid var(--kungalgame-blue-4);
  /* 内 border 盒子 */
  box-sizing: border-box;
  display: flex;
  align-items: center;
  z-index: 1;
}
/* 用户的萌萌点进度 */
.mp-progress {
  height: 100%;
  /* 这个数值会根据用户的萌萌点数增长，引起页面蓝色占比的变化 */
  width: 77%;
  background-color: var(--kungalgame-trans-blue-2);
}
/* 萌萌点进度提示数字 */
.moemoepoint span {
  position: absolute;
  right: 0;
  font-size: 17px;
  padding-right: 20px;
  font-style: italic;
}
</style>
