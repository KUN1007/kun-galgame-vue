<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, onBeforeMount } from 'vue'
import SingleTopic from './SingleTopic.vue'
// 导入计算时间差的函数
import { hourDiff } from '@/utils/time'

import { HomeTopic } from '@/api'

// 导入主页 store
import { useKUNGalgameHomeStore } from '@/store/modules/home'
import { storeToRefs } from 'pinia'

const { page, keywords, sortField, sortOrder, isLoading } = storeToRefs(
  useKUNGalgameHomeStore()
)

// 在组件中定义响应式的话题数据
const topics = ref<HomeTopic[]>([])
// 页面的容器，用于计算是否到达底部
const content = ref<HTMLElement>()

// 获取页面话题的函数
const getTopics = async (): Promise<HomeTopic[]> => {
  return (await useKUNGalgameHomeStore().getHomeTopic()).data
}

// 调用 fetchTopics 获取话题数据（watch 大法好！）
watch([keywords, sortField, sortOrder], async () => {
  topics.value = await getTopics()
})

// 滚动事件处理函数
const scrollHandler = async () => {
  // 滚动到底部的处理逻辑
  if (isScrollAtBottom() && isLoading.value) {
    // 自动增加页数
    page.value++

    // 获取下一页的话题
    const lazyLoadTopics = await getTopics()

    // 判断是否已经将数据加载完，加载完则不需要加载了
    if (!lazyLoadTopics.length) {
      isLoading.value = false
    }

    // 将新加载的回复数据追加到已有的回复数据中
    topics.value = [...topics.value, ...lazyLoadTopics]
  }
}

// 判断是否滚动到底部
const isScrollAtBottom = () => {
  if (content.value) {
    const scrollHeight = content.value.scrollHeight
    const scrollTop = content.value.scrollTop
    const clientHeight = content.value.clientHeight

    // 使用误差范围来比较，因为 js 浮点数不精确
    // 为什么是 1007 呢，因为我抽到鲲是在 10 月 7 日，啊哈哈哈
    const errorMargin = 1.007
    return Math.abs(scrollHeight - scrollTop - clientHeight) < errorMargin
  }
}

onBeforeMount(async () => {
  // 挂载之前重置页数，是否加载等页面状态
  useKUNGalgameHomeStore().resetPageStatus()
})

// 在组件挂载后，添加滚动事件监听器
onMounted(async () => {
  // 获取滚动元素的引用
  const element = content.value

  // 获取到了则启动监听器，监听页面滚动行为
  if (element) {
    element.addEventListener('scroll', scrollHandler)
  }

  // 首次加载获取话题
  topics.value = await getTopics()
})

// 在组件卸载前，移除滚动事件监听器
onBeforeUnmount(() => {
  const element = content.value
  // 如果获取到页面元素则销毁监听器
  if (element) {
    element.removeEventListener('scroll', scrollHandler)
  }
})
</script>

<template>
  <div class="topic-container" ref="content">
    <TransitionGroup name="list" tag="div">
      <!-- 被推时间在 10h 之内 -->
      <div
        v-for="topic in topics"
        :key="topic.tid"
        :class="
          hourDiff(topic.upvote_time, 10) ? 'kungalgame-comet-surround' : ''
        "
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        <SingleTopic :topic="topic" />
      </div>
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/effect/effect.scss';
/* 话题区容器 */
.topic-container {
  /* 话题区域占文章总区域的宽度 */
  width: 100%;
  padding: 0 7px;
  overflow-y: scroll;
  /* 所有话题的总区域占左侧页面的下边距 */
  margin: 5px 0;
  /* 话题区域弹性盒 */
  display: flex;
  flex-direction: column;
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

  div {
    margin-bottom: 5px;
  }
}

/* 规范一下样式 */
.kungalgame-comet-surround {
  padding: 0;
  flex-shrink: 0;
  border: 2px solid var(--kungalgame-red-4);
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
