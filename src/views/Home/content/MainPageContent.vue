<script lang="ts">
import MainPageAside from "./aside/MainPageAside.vue";
import MainPageArticle from "./article/MainPageArticle.vue";
export default {
  name: "MainPageContent",
  components: { MainPageAside, MainPageArticle },
};
</script>

<template>
  <!-- 主体部分 -->
  <div class="main">
    <!-- 主容器 -->
    <div class="main-container">
      <!-- 内容区容器 -->
      <div class="content-container">
        <MainPageAside />
        <MainPageArticle />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 主体部分配置 */
.main {
  width: 100%;
  height: 1px;
  flex-grow: 21;
  /* 背景图片 */
  /*   background-image: url(../img/bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
}
.main-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
/* 可视内容部分宽度 */
.content-container {
  width: 61.8%;
  /* 可视页面的最小宽度 */
  min-width: 700px;
  /* 盒子边线在内部，页面缩小到最小时右侧不留白 */
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
  /* 设置可视内容区不覆盖顶部 shadow */
  margin-top: 5px;
  /* 可视内容区为弹性盒 */
  display: flex;
  /* 可视内容区居中 */
  align-items: center;
  /* 设置背景毛玻璃效果 */
  backdrop-filter: blur(5px);
  background-color: var(--kungalgame-trans-white-5);
  /* 设置背景边框和圆角 */
  border-radius: 5px;
  padding: 5px;
}
</style>
