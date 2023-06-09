<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getTopicRangeApi } from '@/api/topic/index'
import { KUNGalgameTopic } from '@/api/topic/types/topic'
import SingleTopic from './SingleTopic.vue'

// 在组件中定义响应式的帖子数据
const topics = ref<KUNGalgameTopic[]>([])

// 在组件挂载时调用 fetchTopics 获取帖子数据
onMounted(async () => {
  try {
    const start = 0 // 起始位置
    const count = 17 // 获取的帖子数量

    const fetchedTopics = await getTopicRangeApi(start, count)

    topics.value = fetchedTopics
  } catch (error) {
    console.error('Error fetching topics:', error)
  }
})
</script>

<template>
  <div class="topic-container">
    <!-- 该状态为 2 则帖子处于被推状态 -->
    <div
      v-for="topic in topics"
      :key="topic.topicId"
      :class="topic.topicStatus === 2 ? 'kungalgame-comet-surround' : ''"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <SingleTopic :data="topic" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/effect/effect.scss';
/* 帖子区容器 */
.topic-container {
  /* 帖子区域占文章总区域的宽度 */
  width: 100%;
  padding: 0 7px;
  overflow-y: scroll;
  /* 所有帖子的总区域占左侧页面的下边距 */
  margin: 5px 0;
  /* 帖子区域弹性盒 */
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
</style>
