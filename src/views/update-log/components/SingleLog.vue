<script setup lang="ts">
import { getUpdateLogApi } from '@/api/update-log/index'
import { KUNGalgameUpdateLog } from '@/api/update-log/types/updateLog'
import { ref, onBeforeMount } from 'vue'

// 在组件中定义响应式的话题数据
const topics = ref<KUNGalgameUpdateLog[]>([])

// 在组件挂载时调用 fetchTopics 获取话题数据
onBeforeMount(async () => {
  try {
    topics.value = await getUpdateLogApi()
  } catch (error) {
    console.log('Error fetching updateLogs:', error)
  }
})

console.log(topics)
</script>

<template>
  <!-- 单个项目 -->
  <li v-for="kun in topics" :key="kun.upid">
    <!-- 更新内容 -->
    <!-- <div v-for="yuyu in kun.describe" :key="yuyu.index"> -->
    <div>
      <p>{{ kun.description }}</p>
    </div>
    <!-- 更新时间和版本 -->
    <div class="time">
      <span>{{ kun.time }} - Version {{ kun.version }}</span>
    </div>
  </li>
</template>

<style lang="scss" scoped>
/* 单个更新历史 */
li {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid var(--kungalgame-blue-4);
  &:first-child {
    margin-top: 10px;
  }
}
/* 单条更新内容 */
p {
  margin: 5px 0;
}
/* 更新时间和版本 */
.time {
  display: flex;
  justify-content: end;
  font-size: 13px;
  margin-top: 7px;
  margin-right: 10px;
  letter-spacing: 1px;
}
</style>
