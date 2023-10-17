<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { RankingTopics } from '@/api'
import { computed } from 'vue'

const props = defineProps<{
  field: string
  topics: RankingTopics[]
}>()

const topics = computed(() => props.topics)

const icons: Record<string, string> = {
  popularity: 'bi:fire',
  upvotes: 'bi:rocket',
  views: 'ic:outline-remove-red-eye',
  likes: 'line-md:thumbs-up-twotone',
  replies: 'ri:reply-line',
  comments: 'fa-regular:comment-dots',
}

// 将传过来的数据转为数值
const parseTopicNumber = (field: string | string[]) => {
  return Array.isArray(field) ? field.length : Math.ceil(parseInt(field))
}
</script>

<template>
  <!-- 单个话题 -->
  <div class="single-topic" v-for="(topic, index) in topics" :key="index">
    <!-- 话题的名字 -->
    <div class="topic-name">
      {{ topic.title }}
    </div>
    <!-- 话题的其它信息 -->
    <div class="detail">
      <!-- 浏览数 -->
      <span>
        <Icon :icon="icons[props.field]" />
        {{ parseTopicNumber(topic.field) }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 单个话题 */
.single-topic {
  flex-shrink: 0;
  height: 37px;
  border-bottom: 1px solid var(--kungalgame-blue-4);
  margin: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 话题的名字 */
.topic-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* 话题的其它信息 */
.v-l-c-t {
  flex-shrink: 0;
}
.detail {
  display: flex;
  span {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
}
</style>
