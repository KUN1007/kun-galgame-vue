<!-- 
  KUNGalgame 的话题界面

  右边展示的所有话题，可以一直向下滚动

  页面被拆成 3 个大组件，这是话题部分
 -->
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import Master from './components/Master.vue'
import Reply from './components/Reply.vue'

import { getTopicByTid } from '@/api/topic/index'
import { TopicDetailResponseData } from '@/api/topic/types/topic'

import { HomeTopic } from '@/api/index'
import { TopicReplyRequestData, TopicReplyResponseData } from '@/api/index'

// 导入 topic store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

const requestData = storeToRefs(useKUNGalgameTopicStore())

// 在组件中定义响应式的话题数据
const topics = ref<HomeTopic[]>([])

// 在组件挂载时调用 fetchTopics 获取话题数据（watch 大法好！）
// watch(
//   [requestData.keywords, requestData.sortField, requestData.sortOrder],
//   async () => {
//     topics.value = (await useKUNGalgameHomeStore().getHomeTopic()).data
//   },
//   { immediate: true }
// )

const topicData = ref<TopicDetailResponseData>()
onMounted(async () => {
  const res = await getTopicByTid(1)
  topicData.value = res
})
</script>

<template>
  <div class="content-right-part">
    <Master v-if="topicData" :topicData="topicData" />
    <Reply v-if="topicData" :replyIDs="topicData.data.rid" />
  </div>
</template>

<style scoped>
/* 右侧内容区 */
.content-right-part {
  height: 100%;
  width: 1px;
  flex-grow: 4;
  /* 右侧内容区为弹性盒（用户可以一直向下滑） */
  display: flex;
  flex-direction: column;
}
</style>
