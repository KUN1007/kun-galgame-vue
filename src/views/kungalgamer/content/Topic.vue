<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { UserInfo, UserTopic, UserReply, UserComment } from '@/api'
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import dayjs from 'dayjs'

const props = defineProps<{
  user: UserInfo
}>()

const route = useRoute()
const topics = ref<UserTopic[]>([])
const replies = ref<UserReply[]>([])
const comments = ref<UserComment[]>([])

const tidArray = computed(() => {
  if (route.name === 'KUNGalgamerPublishedTopic') {
    return props.user.topic
  }
  if (route.name === 'KUNGalgamerLikedTopic') {
    return props.user.likeTopic
  }
  if (route.name === 'KUNGalgamerUpvoteTopic') {
    return props.user.upvoteTopic
  }
  return []
})

const ridArray = computed(() => {
  if (route.name === 'KUNGalgamerReply') {
    return props.user.reply
  }
  return []
})

const cidArray = computed(() => {
  if (route.name === 'KUNGalgamerComment') {
    return props.user.comment
  }
  return []
})

onMounted(async () => {
  // If there are topics, get topics
  if (tidArray.value.length) {
    const response = await useKUNGalgameUserStore().getTopics(tidArray.value)
    topics.value = response.data
  }
  // If there are replies, get replies
  if (ridArray.value.length) {
    const response = await useKUNGalgameUserStore().getReplies(ridArray.value)
    replies.value = response.data
  }
  // If there are comments, get comments
  if (cidArray.value.length) {
    const response = await useKUNGalgameUserStore().getComments(cidArray.value)
    comments.value = response.data
  }
})
</script>

<template>
  <!-- Right content area -->
  <div class="article">
    <!-- If it's topics -->
    <div class="topic" v-if="tidArray.length">
      <div class="item" v-for="(topic, index) in topics" :key="index">
        <RouterLink :to="`/topic/${topic.tid}`">
          <div class="title">
            {{ topic.title }}
          </div>
          <div class="time">
            {{ dayjs(topic.time).format('YYYY/MM/DD') }}
          </div>
        </RouterLink>
      </div>
    </div>

    <!-- If it's replies -->
    <div class="reply" v-if="ridArray.length">
      <div class="item" v-for="(reply, index) in replies" :key="index">
        <RouterLink :to="`/topic/${reply.tid}`">
          <div class="title">
            {{ reply.content }}
          </div>
          <div class="time">
            {{ dayjs(reply.time).format('YYYY/MM/DD') }}
          </div>
        </RouterLink>
      </div>
    </div>

    <!-- If it's comments -->
    <div class="comment" v-if="cidArray.length">
      <div class="item" v-for="(comment, index) in comments" :key="index">
        <RouterLink :to="`/topic/${comment.tid}`">
          <div class="title">
            {{ comment.content }}
          </div>
        </RouterLink>
      </div>
    </div>

    <!-- If there is nothing -->
    <div
      v-if="!tidArray.length && !ridArray.length && !cidArray.length"
      class="null"
    >
      {{ $tm('user.profile.null') }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article {
  width: 100%;
  padding: 7px 17px;
  display: flex;
  flex-direction: column;
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

  scrollbar-width: thin;
  scrollbar-color: var(--kungalgame-blue-4) var(--kungalgame-blue-1);
}

/* Style for individual topics */
.item {
  transition: all 0.2s;
  width: 100%;
  height: 30px;
  padding: 2px 5px;
  margin: 5px 0;
  border-bottom: 1px solid var(--kungalgame-blue-1);
  border-left: 2px solid var(--kungalgame-blue-4);
  cursor: pointer;
  a {
    height: 100%;
    color: var(--kungalgame-font-color-3);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &:hover {
    border-bottom: 1px solid var(--kungalgame-blue-4);
    background-color: var(--kungalgame-trans-blue-1);
  }
}

.reply,
.comment {
  .item {
    border-bottom: 1px solid var(--kungalgame-red-1);
    border-left: 2px solid var(--kungalgame-red-3);
    &:hover {
      border-bottom: 1px solid var(--kungalgame-red-3);
      background-color: var(--kungalgame-trans-red-1);
    }
  }
}

/* Title of an individual topic */
.title {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.null {
  margin: auto;
  color: var(--kungalgame-blue-2);
  font-style: oblique;
}
</style>
