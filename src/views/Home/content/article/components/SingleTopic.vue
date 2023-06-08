<script setup lang="ts">
import UserPart from './UserPart.vue'
import TopicPart from './TopicPart.vue'

const props = defineProps(['data'])

const isUpvote = props.data.topicStatus === 2 ? 'kungalgame-comet-surround' : ''
</script>

<template>
  <div class="topic">
    <UserPart :kungalgamer="props.data.topicAuthor" />
    <!-- TODO: 进入指定帖子的路由 -->
    <router-link to="/topic">
      <TopicPart :data="props.data" />
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
/* 单个帖子 */
.topic {
  width: 100%;
  height: 70px;
  flex-shrink: 0;
  border-radius: 3px;
  background-color: var(--kungalgame-trans-white-5);
  display: flex;
  &:hover {
    background-color: var(--kungalgame-white);
    transition: 0.2s;
  }
  &:last-child {
    margin-bottom: 0;
  }
  a {
    width: 100%;
  }
}
</style>
