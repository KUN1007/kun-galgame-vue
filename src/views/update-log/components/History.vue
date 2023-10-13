<script setup lang="ts">
import { getUpdateLogApi } from '@/api/update-log/index'
import { UpdateLog } from '@/api'
import { ref, onBeforeMount } from 'vue'

// 在组件中定义响应式的话题数据
const topics = ref<UpdateLog[]>([])

// 在组件挂载时调用 fetchTopics 获取话题数据
onBeforeMount(async () => {
  topics.value = await getUpdateLogApi()
})
</script>

<template>
  <div class="article-history">
    <!-- 历史更新列表 -->
    <ul class="history-list" v-if="topics.length">
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
    </ul>
  </div>
</template>

<style lang="scss" scoped>
/* 历史更新的内容 */
.article-history {
  border-left: 1px solid var(--kungalgame-blue-4);
  height: 75%;
  padding: 10px;
}
/* 历史更新列表 */
.history-list {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* y 轴溢出滚动 */
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
  scrollbar-color: var(--kungalgame-blue-4) var(--kungalgame-blue-1); /* Firefox 64+ */
}

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
