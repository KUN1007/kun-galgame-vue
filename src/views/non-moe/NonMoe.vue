<script setup lang="ts">
import KUNGalgameTopBar from '@/components/KUNGalgameTopBar.vue'
import { currBackground } from '@/hooks/useBackgroundPicture'
import Log from './components/Log.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'
</script>

<template>
  <div class="root" :style="{ backgroundImage: currBackground }">
    <!-- 头部 -->
    <KUNGalgameTopBar />
    <!-- 内容区容器 -->
    <div class="container">
      <!-- 页面标题 -->
      <div class="title">不萌记录</div>
      <!-- 文章部分 -->
      <div class="article">
        <!-- 文章标题 -->
        <div class="article-title">
          这里记录了迄今为止所有被处罚的记录，希望大家不要这样做
        </div>
        <!-- 内容区容器 -->
        <div class="content">
          <!-- 原因、处理方式 -->
          <div class="log-title">
            <span>原因</span>
            <span>后果</span>
          </div>
          <div>
            <!-- 所有的记录 -->
            <Log />
          </div>
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
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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
  background-color: $kungalgame-trans-white-5;
  border: 1px solid $kungalgame-red-4;
  overflow: hidden;
  border-radius: 7px;
  /* 模糊背景 */
  backdrop-filter: blur(5px);
  display: flex;
  color: $kungalgame-font-color-3;
  position: relative;
  box-shadow: $shadow;
}
/* 页面标题 */
.title {
  /* 字体竖直方向分布 */
  font-size: 30px;
  padding: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: $kungalgame-font-color-2;
}
/* 文章部分 */
.article {
  width: 90%;
  background-color: $kungalgame-trans-white-3;
  border-left: 1px solid $kungalgame-red-4;
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
}
/* 滚动条的样式 */
.content::-webkit-scrollbar {
  display: inline;
  width: 4px;
  height: 0;
  background-color: $kungalgame-red-2;
  border-radius: 2px;
}
.content::-webkit-scrollbar-thumb {
  background: $kungalgame-blue-4;
  border-radius: 2px;
}
/* 原因、处理方式 */
.log-title {
  top: 0;
  padding-top: 20px;
  height: 40px;
  /* 相对于标题粘滞定位 */
  position: sticky;
  display: flex;
  justify-content: space-between;
}
.copyright {
  margin: 10px auto;
}
</style>