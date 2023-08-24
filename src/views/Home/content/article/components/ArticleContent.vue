<script setup lang="ts">
import { ref, watch } from 'vue'
import SingleTopic from './SingleTopic.vue'

import { HomeTopic } from '@/api/home/types/home'

// 导入用户 store
import { useKUNGalgameHomeStore } from '@/store/modules/home'
import { storeToRefs } from 'pinia'

const requestData = storeToRefs(useKUNGalgameHomeStore())

// 在组件中定义响应式的话题数据
const topics = ref<HomeTopic[]>([])

// 主页只有 Galgame
requestData.category.value = `["Galgame"]`

// 在组件挂载时调用 fetchTopics 获取话题数据（watch 大法好！）
watch(
  [requestData.sortField, requestData.sortOrder],
  async () => {
    topics.value = (await useKUNGalgameHomeStore().getHomeTopic()).data
  },
  { immediate: true }
)
</script>

<template>
  <div class="topic-container">
    <TransitionGroup name="list" tag="div">
      <!-- 该状态为 2 则话题处于被推状态 -->
      <div
        v-for="topic in topics"
        :key="topic.tid"
        :class="topic.upvotes ? 'kungalgame-comet-surround' : ''"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        <SingleTopic :data="topic" />
      </div>
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/effect/effect.scss';
/* 话题区容器 */
.topic-container {
  /* 话题区域占文章总区域的宽度 */
  width: 100%;
  padding: 0 7px;
  overflow-y: scroll;
  /* 所有话题的总区域占左侧页面的下边距 */
  margin: 5px 0;
  /* 话题区域弹性盒 */
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: inline;
    width: 4px;
    height: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--kungalgame-blue-4);
    border-radius: 2px;
  }
  div {
    margin-bottom: 5px;
  }
}

/* 规范一下样式 */
.kungalgame-comet-surround {
  padding: 0;
  flex-shrink: 0;
  border: 2px solid var(--kungalgame-red-2);
}

.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}
</style>
