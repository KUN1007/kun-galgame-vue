<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { UserInfo, UserTopic, UserReply } from '@/api'
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import dayjs from 'dayjs'
import { getPlainText } from '@/utils/getPlainText'

const props = defineProps<{
  user: UserInfo
}>()

const route = useRoute()
const topics = ref<UserTopic[]>([])
const replies = ref<UserReply[]>([])

const tidArray = computed(() => {
  if (route.name === 'KUNGalgamerPublishedTopic') {
    return props.user.topic
  }
  if (route.name === 'KUNGalgamerLikedTopic') {
    return props.user.like_topic
  }
  if (route.name === 'KUNGalgamerUpvoteTopic') {
    return props.user.upvote_topic
  }
  return []
})

const ridArray = computed(() => {
  if (route.name === 'KUNGalgamerReply') {
    return props.user.reply
  }
  return []
})

onMounted(async () => {
  // 如果有话题的话获取话题
  if (tidArray.value.length) {
    const response = await useKUNGalgameUserStore().getTopics(tidArray.value)
    topics.value = response.data
  }
  // 如果有回复的话获取回复
  if (ridArray.value.length) {
    const response = await useKUNGalgameUserStore().getReplies(ridArray.value)
    replies.value = response.data
  }
})
</script>

<template>
  <!-- 右侧内容区 -->
  <div class="article">
    <!-- 如果是话题 -->
    <div class="topic" v-if="tidArray.length">
      <div class="item" v-for="(topic, index) in topics" :key="index">
        <div class="title">
          {{ topic.title }}
        </div>
        <div class="time">
          {{ dayjs(topic.time).format('YYYY/MM/DD') }}
        </div>
      </div>
    </div>

    <!-- 如果是回复 -->
    <div class="topic" v-if="ridArray.length">
      <div class="item" v-for="(reply, index) in replies" :key="index">
        <div class="title">
          {{ getPlainText(reply.content) }}
        </div>
        <div class="time">
          {{ dayjs(reply.time).format('YYYY/MM/DD') }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 内容区 */
.article {
  width: 100%;
  padding: 7px 27px;
  /* 竖直弹性盒 */
  display: flex;
  flex-direction: column;
  /* 溢出显示滚动条 */
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

/* 单个话题的样式 */
.item {
  width: 100%;
  /* 单个话题高度 */
  height: 30px;
  /* 话题之间的距离 */
  padding: 2px 5px;
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--kungalgame-blue-1);
  box-sizing: border-box;
  border-left: 2px solid var(--kungalgame-blue-4);
  cursor: pointer;
}
.item:hover {
  border-bottom: 1px solid var(--kungalgame-blue-4);
  background-color: var(--kungalgame-trans-blue-1);
}
/* 单个话题的标题 */
.title {
  /* 单行显示，溢出省略号 */
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
