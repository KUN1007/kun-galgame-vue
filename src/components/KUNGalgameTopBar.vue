<script setup lang="ts">
// 引入一个 vue3 中传参的函数
import { defineProps } from 'vue'
import { useHeaderStore } from '@/store/modules/header'

// 接受父组件的传值
const props = defineProps(['isMainPage'])

const store = useHeaderStore()

let navItemNum = store.topBarItem.length

const navItemNumString = navItemNum + '00px'

const isMain = true

if (isMain === true) {
  store.topBarItem.unshift()
}

let topBarItem: string[] = store.topBarItem
</script>

<template>
  <div class="header" :isMainPage="isMain">
    <!-- 顶部左侧交互栏 -->
    <div class="nav-top">
      <div class="kungal-info">
        <!-- 网站的名字和网站图标 -->
        <img src="../assets/images/favicon.png" alt="KUNgal" />
        <span>KUNGalgame</span>
      </div>
      <div class="top-bar">
        <ul>
          <!-- 顶部单个板块 -->
          <li v-for="(kun, index) in topBarItem" :key="index">{{ kun }}</li>
          <!-- 顶部板块下部的 hover 效果 -->
          <div class="top-bar-box"></div>
        </ul>
      </div>
    </div>
    <div class="kungalgamer-info">
      <img src="../assets/images/KUN.jpg" alt="KUN" />
      <span>KUN</span>
    </div>
  </div>
</template>

<style scoped>
/* 头部样式 */
.header {
  /* 头部高度 */
  height: 58px;
  /* 头部下方阴影 */
  box-shadow: 0 2px 4px 0 var(--kungalgame-trans-blue-1);
  /* 头部背景 */
  backdrop-filter: blur(5px);
  background-color: var(--kungalgame-trans-white-5);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-top {
  display: flex;
  align-items: center;
}
.kungal-info {
  display: flex;
  align-items: center;
}
/* 网站 LOGO */
.kungal-info img {
  height: 50px;
  margin-left: 50px;
  cursor: pointer;
}
/* 网站名称 */
.kungal-info span {
  margin-left: 20px;
  margin-right: 7px;
  color: var(--kungalgame-font-color-3);
  font-weight: bold;
  cursor: pointer;
}
/* 顶部导航栏 */
.top-bar {
  /* 导航条内容个数的变化 */
  width: v-bind(navItemNumString);
  position: relative;
  text-align: center;
}
.top-bar ul {
  display: flex;
  align-items: center;
  right: 5%;
}
.top-bar ul .top-bar-box {
  position: absolute;
  bottom: 0;
  left: 0;
  /* 如果导航栏就六个导航，那么每个导航的宽度都是整个导航
            的六分之一 */
  width: calc((100% / v-bind(navItemNum)) * 1);
  height: 7px;
  border-radius: 2px;
  transition: 0.5s;
}
.top-bar ul li {
  width: 100%;
  color: var(--kungalgame-blue-5);
  font-weight: bold;
  display: block;
  width: 100%;
  line-height: 58px;
  cursor: pointer;
}
.top-bar ul li:hover {
  background-color: var(--kungalgame-blue-0);
  transition: 0.5s;
  border-radius: 2px;
}
.top-bar ul li:nth-child(1):hover ~ .top-bar-box {
  left: calc(100% / 4 * 0);
  background-color: var(--kungalgame-red-3);
}
.top-bar ul li:nth-child(2):hover ~ .top-bar-box {
  left: calc(100% / 4 * 1);
  background-color: var(--kungalgame-yellow-3);
}
.top-bar ul li:nth-child(3):hover ~ .top-bar-box {
  left: calc(100% / 4 * 2);
  background-color: var(--kungalgame-blue-3);
}
.top-bar ul li:nth-child(4):hover ~ .top-bar-box {
  left: calc(100% / 4 * 3);
  background-color: var(--kungalgame-green-3);
}

/* 顶部搜索框 */
/* 

TODO:

*/

/* 用户个人信息 */
.kungalgamer-info {
  display: flex;
  align-items: center;
  overflow: hidden;
}

.kungalgamer-info img {
  border-radius: 50%;
  height: 40px;
}

.kungalgamer-info > span {
  color: var(--kungalgame-font-color-2);
  margin-left: 30px;
  padding-right: 50px;
}
</style>
