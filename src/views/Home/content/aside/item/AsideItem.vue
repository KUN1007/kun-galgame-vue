<script lang="ts">
import { Icon } from "@iconify/vue";
export default {
  name: "AsideItem",
  components: {
    Icon,
  },
};
</script>

<template>

    <!-- 侧边栏交互 -->
    <div class="nav-aside">
      <!-- fa 箭头图标字体 -->
      <Icon icon="line-md:arrow-left" />
      折叠左侧区域
    </div>
    <!-- 侧边栏功能区 -->
    <div class="item-box">
      <!-- 发布新文章 -->
      <div class="new-article">
        <!-- 发布新文章的按钮 -->
        <button class="btn-new-article">发布帖子</button>
      </div>
      <!-- 功能盒子容器 -->
      <div class="item-box-container">
        <div class="function">模式切换</div>
        <div class="function">游戏排行</div>
        <div class="function">坛友排行</div>
        <div class="function">加入我们</div>
        <div class="function">背景设置</div>
        <div class="function">其它游戏</div>
      </div>
    </div>
</template>

<style scoped>
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
  color: var(--kungalgame-font-color-3);
  /* 页面缩小到最小时不换行 */
  overflow: hidden;
  white-space: nowrap;
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
  background-color: var(--kungalgame-red-0);
  border: 1px solid var(--kungalgame-red-3);
  border-radius: 5px;
  cursor: pointer;
  color: var(--kungalgame-red-3);
  font-weight: bold;
  font-size: larger;
  /* 页面缩小到最小时不换行 */
  overflow: hidden;
  white-space: nowrap;
}
/* 发布按钮 hover 效果 */
.new-article button:hover {
  font-size: xx-large;
  background-color: var(--kungalgame-red-3);
  color: var(--kungalgame-red-0);
  /* 效果过渡时长 */
  transition: 0.3s;
}
/* 功能区容器 */
.item-box-container {
  width: 100%;
  /* 设置六个功能（模式、排行、背景等）的容器为弹性 */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: var(--kungalgame-font-color-2);
  font-size: small;
  font-weight: bold;
}
/* 六个功能之间的距离 */
.item-box-container div {
  /* 设置六个功能（模式、排行、背景等）之间的间距 */
  padding: 14px;
  border-radius: 5px;
}
/* 设置六个功能（模式、排行、背景等）的 hover */
.item-box-container > div:hover {
  color: var(--kungalgame-font-color-3);
  background-color: var(--kungalgame-trans-red-1);
  cursor: pointer;
}
</style>
