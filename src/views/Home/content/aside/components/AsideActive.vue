<script setup lang="ts">
import NewTopic from '../topic/NewTopic.vue'
import HotTopic from '../topic/HotTopic.vue'
import { toRefs } from 'vue'

// 接受父组件的传值
let props = defineProps(['isActive'])
const isActive = toRefs(props.isActive)

// 单个项目的接口
interface aside {
  index: number
  name: string
  router: string
}

// 顶部导航栏的项目
const asideItem: aside[] = [
  { index: 1, name: '技术交流', router: '/pool' },
  { index: 2, name: '收支公示', router: '/balance' },
  { index: 3, name: '排行榜', router: '/rank' },
  { index: 4, name: '执行条例', router: '/regulations' },
  { index: 5, name: '加入我们', router: '/contacts' },
  { index: 6, name: '帖子池', router: '/pool' },
]
</script>

<template>
  <!-- 侧边栏功能区 -->
  <div class="item-box" v-show="isActive">
    <!-- 发布新文章 -->
    <div class="new-article">
      <!-- 发布新文章的按钮 -->
      <button class="btn-new-article">发布帖子</button>
    </div>
    <!-- 功能盒子容器 -->
    <div class="item-box-container">
      <!-- 顶部单个板块 -->
      <div v-for="kun in asideItem" :key="kun.index">
        <router-link :to="{ path: kun.router }">{{ kun.name }}</router-link>
      </div>
    </div>
  </div>
  <HotTopic v-show="isActive" />
  <NewTopic v-show="isActive" />
</template>

<style lang="less" scoped>
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
  width: 100%;
  height: 80px;
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-template-rows: repeat(2, 1fr);
  font-size: 14px;
  /* 字体颜色 */
  color: @kungalgame-font-color-3;
  /* 相对定位 */
  position: relative;
  /* 六个功能之间的距离 */
  & > div {
    /* 设置六个功能（模式、排行、背景等）之间的间距 */
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    a {
      color: @kungalgame-font-color-2;
    }
    /* 设置六个功能（模式、排行、背景等）的 hover */
    &:hover {
      color: @kungalgame-font-color-3;
      background-color: @kungalgame-blue-0;
      cursor: pointer;
    }
  }
}
</style>
