<script setup lang="ts">
import Topic from './Topic.vue'
// 导入功能区的单个项目
import asideItem from './asideItem'

// 接受父组件的传值
const props = defineProps(['isActive'])
</script>

<template>
  <!-- 侧边栏功能区 -->
  <div class="item-box" v-show="props.isActive">
    <!-- 发布新文章 -->
    <div class="new-article">
      <!-- 发布新文章的按钮 -->
      <RouterLink to="/edit/index">
        <button class="btn-new-article">
          {{ $tm('mainPage.asideActive.create') }}
        </button>
      </RouterLink>
    </div>
    <!-- 功能盒子容器 -->
    <div class="item-box-container">
      <!-- 侧边栏单个项目 -->
      <span v-for="kun in asideItem" :key="kun.index">
        <RouterLink :to="{ path: kun.router }">{{
          $tm(`mainPage.asideActive['${kun.name}']`)
        }}</RouterLink>
      </span>
    </div>
  </div>

  <!-- 左侧交互话题板块 -->
  <Topic v-show="props.isActive" />
</template>

<style lang="scss" scoped>
/* 侧边栏功能区 */
.item-box {
  width: 100%;
  /* 设置六个功能（模式、排行、背景等）分布的弹性盒 */
  display: flex;
  flex-direction: column;
}
/* 发布话题 */
.new-article {
  width: 100%;
  height: 163px;
  /* 发布按钮样式 */
  button {
    height: 100%;
    width: 100%;
    background-color: var(--kungalgame-red-0);
    border: 1px solid var(--kungalgame-red-3);
    border-radius: 5px;
    cursor: pointer;
    color: var(--kungalgame-red-3);
    font-weight: bold;
    font-size: larger;
    /* 发布按钮 hover 效果 */
    &:hover {
      font-size: xx-large;
      background-color: var(--kungalgame-red-3);
      color: var(--kungalgame-red-0);
      /* 效果过渡时长 */
      transition: 0.3s;
    }
  }
}
/* 功能区容器 */
.item-box-container {
  /* 两行三列 grid 布局 */
  width: 100%;
  height: 80px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 2fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  font-size: 14px;
  /* 字体颜色 */
  color: var(--kungalgame-font-color-3);
  /* 相对定位 */
  position: relative;

  /* 六个功能之间的距离 */
  a {
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: var(--kungalgame-font-color-2);
    /* 设置六个功能（模式、排行、背景等）的 hover */
    &:hover {
      transition: color 0.2s;
      color: var(--kungalgame-blue-4);
      cursor: pointer;
    }
  }
}
</style>
