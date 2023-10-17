<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { RankingTopics } from '@/api'
import { computed } from 'vue'

const props = defineProps<{
  field: string
  topics: RankingTopics[]
}>()

const topics = computed(() => props.topics)

const iconMap: Record<string, string> = {
  popularity: 'bi:fire',
  upvotes_count: 'bi:rocket',
  views: 'ic:outline-remove-red-eye',
  likes_count: 'line-md:thumbs-up-twotone',
  replies_count: 'ri:reply-line',
  comments: 'fa-regular:comment-dots',
}

// 将传过来的数据转为数值
const parseTopicNumber = (field: string | string[]) => {
  return Array.isArray(field) ? field.length : Math.ceil(parseInt(field))
}
</script>

<template>
  <TransitionGroup name="list">
    <!-- 单个话题 -->
    <div class="single-topic" v-for="topic in topics" :key="topic.tid">
      <RouterLink :to="`/topic/${topic.tid}`">
        <!-- 话题的名字 -->
        <div class="topic-name">
          {{ topic.title }}
        </div>
        <!-- 话题的其它信息 -->
        <div class="detail">
          <!-- 浏览数 -->

          <Icon :icon="iconMap[props.field]" />
          <span>{{ parseTopicNumber(topic.field) }}</span>
        </div>
      </RouterLink>
    </div>
  </TransitionGroup>
</template>

<style lang="scss" scoped>
/* 单个话题 */
.single-topic {
  a {
    flex-shrink: 0;
    height: 37px;
    margin: 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--kungalgame-trans-blue-0);
    border: 1px solid var(--kungalgame-trans-blue-0);
    border-radius: 5px;
    color: var(--kungalgame-font-color-3);
    padding: 0 10px;
    cursor: pointer;

    &:hover {
      transition: all 0.5s;
      background-color: var(--kungalgame-trans-white-9);
      border: 1px solid var(--kungalgame-blue-4);
      color: var(--kungalgame-blue-4);
    }
  }
}
/* 话题的名字 */
.topic-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.detail {
  display: flex;
  align-items: center;
  color: var(--kungalgame-blue-4);
  span {
    color: var(--kungalgame-font-color-3);
    margin-left: 10px;
  }
}

.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}
</style>
