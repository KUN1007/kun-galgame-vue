<script setup lang="ts">
import KUNGalgameTopBar from '@/components/KUNGalgameTopBar.vue'
// 导入背景图片
import { currBackground } from '@/hooks/useBackgroundPicture'
import KUNGalgameSearchBox from '@/components/KUNGalgameSearchBox.vue'
import Tags from './components/Tags.vue'
import Line from './components/Line.vue'
const list = [
  {
    index: 1,
    image: '/src/assets/images/bg/bg1-m.png',
    alt: 'azkhx',
  },
  {
    index: 2,
    image: '/src/assets/images/bg/bg2-m.png',
    alt: 'azkhx',
  },
  {
    index: 3,
    image: '/src/assets/images/bg/bg3-m.png',
    alt: 'azkhx',
  },
  {
    index: 4,
    image: '/src/assets/images/bg/bg4-m.png',
    alt: 'azkhx',
  },
  {
    index: 5,
    image: '/src/assets/images/bg/bg5-m.png',
    alt: 'azkhx',
  },
  {
    index: 6,
    image: '/src/assets/images/bg/bg6-m.png',
    alt: 'azkhx',
  },
  {
    index: 7,
    image: '/src/assets/images/bg/bg7-m.png',
    alt: 'azkhx',
  },
  {
    index: 8,
    image: '/src/assets/images/bg/bg8-m.png',
    alt: 'azkhx',
  },
  {
    index: 9,
    image: '/src/assets/images/bg/bg9-m.png',
    alt: 'azkhx',
  },
]
</script>

<template>
  <div class="content-wrapper">
    <div class="visual-wrapper" :style="{ backgroundImage: currBackground }">
      <!-- 头部 -->
      <KUNGalgameTopBar />
      <!-- 帖子池容器 -->
      <div class="pool-container">
        <KUNGalgameSearchBox style="width: 100%; height: 40px" />
        <Line />
        <Tags />
        <!-- 帖子池内容区容器 -->
        <div class="content-container">
          <!-- 帖子池单个帖子列容器 -->
          <div class="single-topic-column-container"></div>
        </div>
      </div>
      <!-- 右侧的功能栏 -->
      <div class="kungalgame-right-bar"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.visual-wrapper {
  height: 1500px;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: 700px;
  background-color: var(--kungalgame-white);
}
/* 帖子池容器 */
.pool-container {
  /* 最小宽度 */
  min-width: 900px;
  /* 最大宽度 */
  max-width: 1450px;
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
  border-radius: 7px;
}
/* 帖子池内容区容器 */
.content-container {
  display: flex;
}
/* 帖子池单个帖子列容器 */
.single-topic-column-container {
  /* 根据页面宽度增长 */
  width: 1px;
  flex-grow: 1;
  /* 5 行的行距 */
  margin: 5px;
}
/* 右侧的功能栏 */
.kungalgame-right-bar {
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
