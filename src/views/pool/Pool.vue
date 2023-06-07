<script setup lang="ts">
import KUNGalgameTopBar from '@/components/KUNGalgameTopBar.vue'
import KUNGalgameSearchBox from '@/components/KUNGalgameSearchBox.vue'
import Tags from './components/Tags.vue'
import Topic from './components/Topic.vue'
// 导入瀑布流
import { Waterfall } from 'vue-waterfall-plugin-next'
import 'vue-waterfall-plugin-next/dist/style.css'

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

const backgroundColor = 'var()'
</script>

<template>
  <div class="content-wrapper">
    <div class="visual-wrapper">
      <!-- 头部 -->
      <KUNGalgameTopBar />
      <!-- 帖子池容器 -->
      <div class="pool-container">
        <KUNGalgameSearchBox style="width: 100%; height: 40px" />
        <Tags />
        <!-- 帖子池内容区容器 -->
        <div class="content-container">
          <!-- 帖子池单个帖子列容器 -->
          <div class="single-topic-column-container">
            <Waterfall
              :list="list"
              :background-color="'#00000000'"
              :breakpoints="{
                800: {
                  rowPerView: 4,
                },
                576: {
                  rowPerView: 3,
                },
              }"
            >
              <template #item="{ item, url, index }">
                <Topic />
              </template>
            </Waterfall>
          </div>
        </div>
      </div>
      <!-- 右侧的功能栏 -->
      <div class="kungalgame-right-bar"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.visual-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
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
