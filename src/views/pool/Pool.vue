<script setup lang="ts">
import KUNGalgameTopBar from '@/components/KUNGalgameTopBar.vue'
import KUNGalgameSearchBox from '@/components/KUNGalgameSearchBox.vue'
import Tags from './components/Tags.vue'
import Topic from './components/Topic.vue'
import Grid from './components/Grid.vue'
</script>

<template>
  <div class="pool">
    <!-- 头部 -->
    <KUNGalgameTopBar />
    <!-- 帖子池容器 -->
    <div class="pool-container">
      <KUNGalgameSearchBox style="width: 100%; height: 40px" />
      <Tags />

      <Grid />
    </div>
    <!-- 右侧的功能栏 -->
    <div class="bar"></div>
  </div>
</template>

<style lang="scss" scoped>
.pool {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}
/* 帖子池容器 */
.pool-container {
  /* 占页面的宽度比例 */
  width: 90%;
  /* 居中 */
  margin: 0 auto;
  display: flex;
  /* 不收缩 */
  flex-shrink: 0;
  /* 竖直方向弹性盒 */
  flex-direction: column;
  /* 毛玻璃背景 */
  backdrop-filter: blur(5px);
  background-color: var(--kungalgame-trans-white-5);
  padding: 5px;
}
/* 右侧的功能栏 */
.bar {
  /* 位置 fix */
  position: fixed;
  top: 70%;
  /* 距离右侧的距离 */
  right: 1%;
  z-index: 7;
  /* 居中 */
  display: flex;
}
</style>
