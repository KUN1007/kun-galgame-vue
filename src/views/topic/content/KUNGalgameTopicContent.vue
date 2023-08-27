<!-- 
  KUNGalgame 的话题界面

  右边展示的所有话题，可以一直向下滚动

  页面被拆成 3 个大组件，这是话题部分
 -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Master from './components/Master.vue'
import Reply from './components/Reply.vue'

import { getTopicByTid } from '@/api/topic/index'
import { TopicDetailResponseData } from '@/api/topic/types/topic'

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
