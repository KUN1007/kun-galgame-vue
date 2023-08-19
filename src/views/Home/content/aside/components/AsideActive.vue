<script setup lang="ts">
import Topic from './Topic.vue'
// 导入功能区的单个项目
import asideItem from '@/types/home/aside-item'

// 接受父组件的传值
const props = defineProps(['isActive'])
</script>

<template>
  <!-- 侧边栏功能区 -->
  <div class="item-box" v-show="props.isActive">
    <!-- 发布新文章 -->
    <div class="new-article">
      <!-- 发布新文章的按钮 -->
      <router-link to="/edit/index">
        <button class="btn-new-article">
          {{ $t('mainPage.asideActive.create') }}
        </button>
      </router-link>
    </div>
    <!-- 功能盒子容器 -->
    <div class="item-box-container">
      <!-- 侧边栏单个项目 -->
      <span v-for="kun in asideItem" :key="kun.index">
        <router-link :to="{ path: kun.router }">{{
          $t(`mainPage.asideActive['${kun.name}']`)
        }}</router-link>
      </span>
    </div>
  </div>
  <!-- 热门话题板块 -->
  <Topic v-show="props.isActive" :isHotTopic="true" />
  <!-- 新话题板块 -->
  <!-- 这个 style 使侧边栏和内容区等高 -->
  <Topic v-show="props.isActive" :isHotTopic="false" style="margin-bottom: 0" />
</template>

<style lang="scss" scoped>
/* 侧边栏功能区 */
.item-box {
  width: 100%;
  height: 600px;
  /* 设置六个功能（模式、排行、背景等）分布的弹性盒 */
  display: flex;
  flex-direction: column;
}
/* 发布话题 */
.new-article {
  width: 100%;
  /* 发布话题的按钮相对于功能区盒子的占比 */
  flex-grow: 1;
  flex-shrink: 0;
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
    border-radius: 5px;
    /* 设置六个功能（模式、排行、背景等）的 hover */
    &:hover {
      color: var(--kungalgame-font-color-3);
      background-color: var(--kungalgame-trans-blue-1);
      cursor: pointer;
    }
  }
}
</style>
