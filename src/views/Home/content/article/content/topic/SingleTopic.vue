<script setup lang="ts">
import UserPart from './components/UserPart.vue'
import TopicPart from './components/TopicPart.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const toTopic = (url: string) => {
  router.push(url)
}
</script>
<template>
  <div class="topic" @click="toTopic('/topic')">
    <UserPart />
    <TopicPart />
  </div>
</template>
<style lang="less" scoped>
/* 单个帖子 */
.topic {
  width: 100%;
  height: 70px;
  flex-shrink: 0;
  border-radius: 3px;
  background-color: @kungalgame-trans-white-4;
  margin-bottom: 3px;
  /* 单个帖子横向弹性盒 */
  display: flex;
}
.topic:hover {
  background-color: @kungalgame-trans-white-1;
  transition: 0.2s;
}
.topic:last-child {
  /* 最后一个帖子的没有下边距 */
  margin-bottom: 0;
}
</style>
