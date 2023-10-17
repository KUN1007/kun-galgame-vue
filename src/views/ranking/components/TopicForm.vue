<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import Topic from './Topic.vue'

import { useKUNGalgameRankingStore } from '@/store/modules/ranking'
import { storeToRefs } from 'pinia'

import type { RankingTopics } from '@/api'
import { topicNavSortItem } from './navSortItem'

const { topic, user } = storeToRefs(useKUNGalgameRankingStore())
const topics = ref<RankingTopics[]>([])

// 获取话题
const getTopics = async () => {
  const responseData = await useKUNGalgameRankingStore().getTopics()
  return responseData.data
}

// 监听话题数据获取新话题
watch(
  () => topic,
  async () => {
    topics.value = await getTopics()
  },
  { deep: true }
)

// 挂载时获取话题
onMounted(async () => {
  topics.value = await getTopics()
})
</script>

<template>
  <!-- 话题排行 -->
  <div class="topic">
    <!-- 话题排行标题 -->
    <div class="title">最萌的话题</div>
    <!-- 话题排行的交互 -->
    <div class="nav">
      <!-- 升序降序 -->
      <div class="order">排序</div>

      <div class="field">
        <!-- 排序子菜单 -->
        <div class="sort-submenu">
          <div
            class="sort-item"
            v-for="kun in topicNavSortItem"
            :key="kun.index"
            @click="topic.sortField = kun.sortField"
          >
            <span><Icon class="icon-item" :icon="kun.icon" /></span>
            <span>按时间排序</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 单个话题的容器 -->
    <div class="container">
      <Topic :field="topic.sortField" :topics="topics" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 话题排行 */
.topic {
  width: 50%;
}
/* 话题排行标题 */
.title {
  font-size: 30px;
  color: var(--kungalgame-blue-4);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
/* 话题排行的交互 */
.nav {
  display: flex;
  margin-left: 10px;
}

/* 单个话题的容器 */
.container {
  height: 100%;
  border-top: none;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: inline;
    width: 4px;
    height: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--kungalgame-blue-4);
    border-radius: 2px;
  }
  /* 兼容火狐 */
  scrollbar-width: thin;
  scrollbar-color: var(--kungalgame-blue-4) var(--kungalgame-blue-1);
}
</style>
