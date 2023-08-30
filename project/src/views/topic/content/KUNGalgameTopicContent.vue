<!-- 
  KUNGalgame 的话题界面

  右边展示的所有话题，可以一直向下滚动

  页面被拆成 3 个大组件，这是话题部分
 -->
<script setup lang="ts">
import { onMounted, ref, watch, computed } from 'vue'
import Master from './components/Master.vue'
import Reply from './components/Reply.vue'

import { TopicDetail, TopicReply } from '@/api/index'

// 导入 topic store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

import { useRoute } from 'vue-router'

const route = useRoute()

const requestData = storeToRefs(useKUNGalgameTopicStore())

// 在组件挂载时调用 fetchTopics 获取话题数据（watch 大法好！）
// watch(
//   [requestData.keywords, requestData.sortField, requestData.sortOrder],
//   async () => {
//     topics.value = (await useKUNGalgameHomeStore().getHomeTopic()).data
//   },
//   { immediate: true }
// )

const tid = computed(() => {
  return Number(route.params.tid)
})

// 单个话题数据
const topicData = ref<TopicDetail>()

// 单个话题的回复数据
const repliesData = ref<TopicReply[]>([])

/** 这里拿到的已经是后端返回回来的 data 数据了  */
onMounted(async () => {
  // 获取单个话题的数据
  const topicResponseData = (
    await useKUNGalgameTopicStore().getTopicByTid(tid.value)
  ).data

  topicData.value = topicResponseData

  // 懒加载获取单个话题下面的回复数据
  const replyResponseData = (
    await useKUNGalgameTopicStore().getReplies(tid.value)
  ).data
  repliesData.value = replyResponseData
})
</script>

<template>
  <div class="content">
    <Master v-if="topicData" :topicData="topicData" />
    <Reply v-if="repliesData" :repliesData="repliesData" />
  </div>
</template>

<style lang="scss" scoped>
/* 右侧内容区 */
.content {
  height: 100%;
  width: 1px;
  flex-grow: 4;
  /* 右侧内容区为弹性盒（用户可以一直向下滑） */
  display: flex;
  flex-direction: column;
}
</style>
