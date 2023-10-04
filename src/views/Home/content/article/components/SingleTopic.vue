<script setup lang="ts">
import UserPart from './UserPart.vue'
import TopicPart from './TopicPart.vue'

import { HomeTopic } from '@/api'

const props = defineProps<{
  topic: HomeTopic
}>()
</script>

<template>
  <div class="topic">
    <UserPart :user="props.topic.user" />
    <!-- 进入指定话题的路由 -->
    <router-link :to="`/topic/${props.topic.tid}`">
      <TopicPart :topic="props.topic" />
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
/* 单个话题 */
.topic {
  width: 100%;
  height: 70px;
  flex-shrink: 0;
  border-radius: 3px;
  padding: 5px;
  background-color: var(--kungalgame-trans-white-5);
  display: flex;
  flex-shrink: 0;
  &:hover {
    background-color: var(--kungalgame-white);
    box-shadow: var(--kungalgame-shadow-1);
    transition: 0.2s;
  }
  &:last-child {
    margin-bottom: 0;
  }
  /** 宽度为单个话题总宽度减去用户部分的宽度
      这里为 2 + 5 + 60 + 5 + 2 = 74px */
  a {
    width: calc(100% - 74px);
  }
}
</style>
