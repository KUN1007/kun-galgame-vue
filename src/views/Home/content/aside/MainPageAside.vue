<script setup lang="ts">
import NewTopic from './topic/NewTopic.vue'
import HotTopic from './topic/HotTopic.vue'
// 导入图标
import { Icon } from '@iconify/vue'
// 导入 Vue 函数
import { ref } from 'vue'
// 用户点击项目跳转
import router from '@/router'

const handleClick = () => {
  router.push('/rank')
}
// 用户点击折叠左侧区域
// localStorage.setItem('KUNGalgameMainPageAsideBar', 'true')
// const asideBarStatus =
//   localStorage.getItem('KUNGalgameMainPageAsideBar') || true
const topic = ref(true)
const asideWidth = ref('240px')
const handleFold = () => {
  if (topic.value) {
    asideWidth.value = '40px'
  } else {
    asideWidth.value = '240px'
  }
  topic.value = !topic.value
}
</script>

<template>
  <!-- 侧边栏 -->
  <div class="aside">
    <!-- 侧边栏交互 -->
    <div class="nav-aside" @click="handleFold">
      <!-- fa 箭头图标字体 -->
      <Icon icon="line-md:arrow-left" />
      <span>折叠左侧区域</span>
    </div>
    <!-- 侧边栏功能区 -->
    <div class="item-box">
      <!-- 发布新文章 -->
      <div class="new-article" v-show="topic">
        <!-- 发布新文章的按钮 -->
        <button class="btn-new-article">发布帖子</button>
      </div>
      <!-- 功能盒子容器 -->
      <div class="item-box-container">
        <div>技术交流</div>
        <div>其它游戏</div>
        <div @click="handleClick">排行榜</div>
        <div>执行条例</div>
        <div>加入我们</div>
        <div>帖子池</div>
      </div>
    </div>
    <HotTopic v-show="topic" />
    <NewTopic v-show="topic" />
  </div>
</template>

<style lang="less" scoped>
/* 侧边栏部分 */
.aside {
  /* 侧边栏距离文章区域的距离 */
  margin-right: 5px;
  width: v-bind('asideWidth');
  /* 侧边栏相对于整体可视部分的占比 */
  /* 侧边栏高度 */
  height: 100%;
  /* 设置侧边栏为弹性盒子 */
  display: flex;
  /* 方向为竖向 */
  flex-direction: column;
  transition: 0.2s;
}
/* 侧边栏交互 */
.nav-aside {
  width: 100%;
  height: 1px;
  /* 折叠区相当于侧边栏的占比 */
  flex-grow: 1;
  /* 内容居中（折叠左侧区域） */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* 字体设置 */
  font-size: small;
  color: @kungalgame-font-color-3;
  cursor: pointer;
}
@media (max-width: 50px) {
  .nav-aside {
    background-color: aqua;
  }
}
/* 侧边栏功能区 */
.item-box {
  width: 100%;
  height: 1px;
  /* 功能区相对于侧边栏的占比 */
  flex-grow: 6;
  /* 设置六个功能（模式、排行、背景等）分布的弹性盒 */
  display: flex;
  flex-direction: column;
}
/* 发布帖子 */
.new-article {
  width: 100%;
  /* 发布帖子的按钮相对于功能区盒子的占比 */
  flex-grow: 2;
}
/* 发布按钮样式 */
.new-article button {
  height: 100%;
  width: 100%;
  background-color: @kungalgame-red-0;
  border: 1px solid @kungalgame-red-3;
  border-radius: 5px;
  cursor: pointer;
  color: @kungalgame-red-3;
  font-weight: bold;
  font-size: larger;
  /* 页面缩小到最小时不换行 */
  overflow: hidden;
  white-space: nowrap;
}
/* 发布按钮 hover 效果 */
.new-article button:hover {
  font-size: xx-large;
  background-color: @kungalgame-red-3;
  color: @kungalgame-red-0;
  /* 效果过渡时长 */
  transition: 0.3s;
}
/* 功能区容器 */
/* 功能区容器 */
.item-box-container {
  /* 两行三列 grid 布局 */
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-template-rows: repeat(2, 40px);
  font-size: 14px;
  /* 字体颜色 */
  color: @kungalgame-font-color-3;
  /* 相对定位 */
  position: relative;
}
/* 六个功能之间的距离 */
.item-box-container > div {
  /* 设置六个功能（模式、排行、背景等）之间的间距 */
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: @kungalgame-font-color-2;
}
/* 设置六个功能（模式、排行、背景等）的 hover */
.item-box-container > div:hover {
  color: @kungalgame-font-color-3;
  background-color: @kungalgame-blue-0;
  cursor: pointer;
}
</style>
