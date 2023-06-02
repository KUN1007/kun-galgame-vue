<script setup lang="ts">
import KUNGalgameTopBar from '@/components/KUNGalgameTopBar.vue'
// 导入背景图片
import { currBackground } from '@/hooks/useBackgroundPicture'
</script>

<template>
  <div class="root" :style="{ backgroundImage: currBackground }">
    <KUNGalgameTopBar />
    <!-- 信息区域容器 -->
    <div class="container">
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
      <!-- 内容区 -->
      <div class="content">
        <!-- 左侧交互区 -->
        <div class="nav">
          <!-- 交互区的单个项目 -->
          <ul>
            <li><RouterLink to="/kungalgamer/info">个人信息</RouterLink></li>
            <li>
              <RouterLink to="/kungalgamer/password">邮箱密码</RouterLink>
            </li>
            <li>发过的贴</li>
            <li>回过的贴</li>
            <li>赞过的帖</li>
            <li>推过的帖</li>
          </ul>
        </div>
        <RouterView />
      </div>
    </div>
    <!-- 版权 -->
    <div class="copyright">
      <span>Copyright © 2023 KUNgalgame</span>
      <span>All rights reserved | Version 0.01</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 100vh;
  width: 100vw;
  min-width: 960px;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
}
/* 页面头部 */
.container {
  /* 内容区占整个页面的比例 */
  width: 60%;
  height: 70%;
  /* 内容区的最大宽度和高度 */
  max-width: 1350px;
  max-width: 1200px;
  /* 背景色和边框阴影 */
  background-color: $kungalgame-trans-white-2;
  border: 1px solid $kungalgame-blue-4;
  box-shadow: $shadow;
  border-radius: 7px;
  /* 居中 */
  margin: auto;
  /* 竖直方向弹性盒 */
  display: flex;
  flex-direction: column;
  /* 用户页面的所有字体颜色 */
  color: $kungalgame-font-color-3;
}
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
  background-color: $kungalgame-trans-blue-0;
  align-items: center;
  span:nth-child(1) {
    position: absolute;
    font-size: 22px;
    /* 相对于 header 定位信息 */
    margin-left: 200px;
    margin-top: 60px;
    z-index: 1;
  }
  span:nth-child(2) {
    position: absolute;
    right: 0;
    font-size: 100px;
    color: $kungalgame-trans-white-6;
    font-style: italic;
    text-shadow: 2px 2px 2px $kungalgame-trans-white-8;
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
  box-shadow: 0px 0px 2px 4px $kungalgame-trans-red-2;
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
    box-shadow: 0px 0px 2px 7px $kungalgame-trans-red-2;
  }
}
/* 用户萌萌点 */
.moemoepoint {
  height: 1px;
  flex-grow: 1;
  /* 分割线 */
  border-top: 2px solid $kungalgame-blue-4;
  border-bottom: 1px solid $kungalgame-blue-4;
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
  background-color: $kungalgame-trans-blue-2;
}
/* 萌萌点进度提示数字 */
.moemoepoint span {
  position: absolute;
  right: 0;
  font-size: 17px;
  padding-right: 20px;
  font-style: italic;
}
/* 

内容区

*/
.content {
  /* 使帖子不溢出 */
  height: 1px;
  flex-grow: 1;
  display: flex;
}
/* 左侧交互区 */
.nav {
  /* 固定宽度 */
  height: 100%;
  width: 120px;
  background-color: $kungalgame-trans-red-0;
  border-right: 1px solid $kungalgame-blue-4;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}
/* 左侧交互区的无需列表容器 */
.nav > ul {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
/* 列表中的单个项目 */
.nav > ul li {
  height: 40px;
  background-color: $kungalgame-trans-blue-0;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 单个项目的 hover */
.nav > ul li:hover {
  background-color: $kungalgame-trans-blue-4;
  transition: 0.1s;
}
/* 版权 */
.copyright {
  margin: 0 auto;
  padding-bottom: 17px;
}
</style>
