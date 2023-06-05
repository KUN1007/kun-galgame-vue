<script setup lang="ts">
import SingleTopic from './components/SingleTopic.vue'

import singleTopic from './topic'

// 接受父组件 AsideActive 的传值
const props = defineProps(['isHotTopic'])

const isHotTopic = props.isHotTopic

let titleName = isHotTopic ? 'hot' : 'new'
</script>

<template>
  <!-- 侧边栏动态推送今日热度帖子 -->
  <div class="topic-wrap">
    <!-- 今日热度帖子的标题名 -->
    <!-- 这里调用全局注册的 i18n 函数 $t 对名字进行渲染 -->
    <div class="title" :class="titleName">
      {{ $t(`mainPage.asideActive['${titleName}']`) }}
    </div>
    <!-- 热门帖子的目录 -->
    <!-- 这里使用了父组件传过来的 isHotTopic 数据 -->
    <template v-for="kun in singleTopic" :key="kun.index">
      <span class="topic-content" v-if="isHotTopic" :class="`hot-bg`">
        <router-link :to="{ path: kun.router }">
          <SingleTopic :data="kun.data" :isHotTopic="isHotTopic" />
        </router-link>
      </span>
      <span class="topic-content" v-if="!isHotTopic" :class="`new-bg`">
        <router-link :to="{ path: kun.router }">
          <SingleTopic :data="kun.data" :isHotTopic="isHotTopic" />
        </router-link>
      </span>
    </template>
  </div>
</template>

<style lang="scss" scoped>
/* 侧边栏动态推送帖子的总容器 */
.topic-wrap {
  width: 100%;
  height: 100%;
  /* 热门帖子距离最新帖子的距离 */
  margin-bottom: 5px;
  /* 今日热门帖子区域为竖直弹性盒 */
  display: flex;
  flex-direction: column;
}
/* 标题六个字的样式 */
.title {
  height: 100%;
  /* 设置（今日热门话题）居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--kungalgame-font-color-3);
  /* 设置页面缩小到最小时该行不换行 */
  overflow: hidden;
  white-space: nowrap;
}
/* 展示热门帖子的区域 */
.topic-content {
  height: 100%;

  /* 热门帖子标题部分为弹性盒 */
  display: flex;
  flex-direction: column;
  a {
    display: block;
    height: 100%;
    width: 100%;
  }
}
.hot {
  border: 3px dashed var(--kungalgame-trans-blue-1);
  border-bottom: none;
}
.new {
  border: 3px dashed var(--kungalgame-trans-pink-1);
  border-bottom: none;
}
.hot-bg {
  background-color: var(--kungalgame-trans-blue-1);
}
.new-bg {
  background-color: var(--kungalgame-trans-pink-1);
}
</style>
