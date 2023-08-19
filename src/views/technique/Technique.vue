<script setup lang="ts">
import SingleTopic from './components/SingleTopic.vue'
import Pagination from './components/Pagination.vue'
import Aside from './components/Aside.vue'

import { ref, onBeforeMount } from 'vue'
import { getTopicRangeApi } from '@/api/topic/index'
import { KUNGalgameTopic } from '@/api/topic/types/topic'

// 在组件中定义响应式的话题数据
const topics = ref<KUNGalgameTopic[]>([])

// 在组件挂载时调用 fetchTopics 获取话题数据
onBeforeMount(async () => {
  try {
    const start = 0 // 起始位置
    const count = 17 // 获取的话题数量

    // TODO: 这里接口获取到的数据太多了，其实获取 title，like，view，comment，text 这几个字段就足够了
    topics.value = await getTopicRangeApi(start, count)
  } catch (error) {
    console.error('Error fetching topics:', error)
  }
})
</script>

<template>
  <div class="root">
    <!-- 内容区 -->
    <div class="content">
      <Aside class="aside" />
      <!-- 文章容器 -->
      <div class="article">
        <!-- 所有文章的容器 -->
        <div class="article-container">
          <div class="topic" v-for="topic in topics" :key="topic.topicId">
            <SingleTopic :data="topic" />
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 1500px;
  display: flex;
  flex-direction: column;
}
/* 内容区 */
.content {
  /* 距离内部的距离 */
  padding: 5px;
  height: 1400px;
  /* 占总页面的宽度 */
  width: 95%;
  /* 水平垂直居中 */
  margin: 0 auto;
  display: flex;
  background-color: var(--kungalgame-trans-white-5);
  /* 全局字体颜色 */
  color: var(--kungalgame-font-color-3);
  border: 1px solid var(--kungalgame-trans-blue-2);
  border-radius: 5px;
}
/*

文章部分

*/
.article {
  height: 100%;
  width: 1px;
  /* 随页面大小变化自增长 */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  /* 距离左侧交互的距离 */
  margin-left: 10px;
}
/* 所有文章的容器 */
.article-container {
  height: 1px;
  flex-grow: 1;
  display: grid;
  /* 自填充自增长子元素 */
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  /* 固定 5 行，行高固定 */
  grid-template-rows: repeat(5, 255px);
  /* 设置 grid 布局的块间距，gap 取代了之前的 grid-gap */
  gap: 10px;
}

.topic {
  width: 100%;
  height: 100%;
}

@media (max-width: 1000px) {
  .aside {
    display: none;
  }
  .article {
    margin-left: 0;
  }
  .content {
    padding: 0;
  }
}
</style>
