<script setup lang="ts">
import KUNGalgameTopBar from '@/components/TopBar/KUNGalgameTopBar.vue'
import Log from './components/Log.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'
</script>

<template>
  <div class="root">
    <!-- 头部 -->
    <KUNGalgameTopBar />
    <!-- 内容区容器 -->
    <div class="container">
      <!-- 页面标题 -->
      <div class="title">{{ $t('nonMoe.log') }}</div>
      <!-- 文章部分 -->
      <div class="article">
        <!-- 文章标题 -->
        <div class="article-title">
          {{ $t('nonMoe.title') }}
        </div>
        <!-- 内容区容器 -->
        <div class="content">
          <!-- 所有的记录 -->
          <Log />
        </div>
      </div>
    </div>
    <!-- 版权 -->
    <KUNGalgameFooter style="margin: 20px auto" />
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 100vh;
  display: flex;
  flex-direction: column;
  min-width: 800px;
  min-height: 750px;
}
/* 根容器 */
.container {
  /* 固定宽高 */
  height: 600px;
  width: 700px;
  /* 居中 */
  margin: auto;
  background-color: var(--kungalgame-trans-white-5);
  border: 1px solid var(--kungalgame-red-4);
  overflow: hidden;
  border-radius: 7px;
  /* 模糊背景 */
  backdrop-filter: blur(5px);
  display: flex;
  color: var(--kungalgame-font-color-3);
  position: relative;
  box-shadow: var(--shadow);
}
/* 页面标题 */
.title {
  /* 字体竖直方向分布 */
  font-size: 30px;
  padding: 30px;
  width: 100px;
  writing-mode: vertical-rl;
  text-orientation: upright;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: var(--kungalgame-font-color-2);
}
/* 文章部分 */
.article {
  width: 600px;
  flex-shrink: 0;
  background-color: var(--kungalgame-trans-white-5);
  border-left: 1px solid var(--kungalgame-red-4);
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* 文章标题 */
.article-title {
  margin: 20px 0;
  font-size: 20px;
}
/* 内容区容器 */
.content {
  width: 100%;
  height: 100%;
  height: 500px;
  /* y 轴溢出滚动 */
  overflow-y: scroll;
  padding: 0 10px;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: inline;
    width: 4px;
    height: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--kungalgame-blue-4);
    border-radius: 2px;
  }
}
</style>
