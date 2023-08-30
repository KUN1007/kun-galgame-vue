<script setup lang="ts">
import KUNGalgameSearchBox from '@/components/KUNGalgameSearchBox.vue'
import Tags from './components/Tags.vue'
import Topic from './components/Topic.vue'
import Bar from './components/Bar.vue'

import { topic } from './components/topic'
</script>

<template>
  <div class="pool">
    <!-- 话题池容器 -->
    <div class="pool-container">
      <KUNGalgameSearchBox style="width: 100%; height: 40px" />
      <Tags />

      <div class="topic-container">
        <Topic
          v-for="kun in topic"
          class="item"
          :key="kun.index"
          :data="kun"
          :class="`item-${kun.index}`"
        />
      </div>
    </div>

    <Bar />
  </div>
</template>

<style lang="scss" scoped>
.pool {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}
/* 话题池容器 */
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

.topic-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: minmax(100px, 320px);
  gap: 10px;
}
</style>
