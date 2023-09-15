<!-- 
  KUNGalgame 的话题页面
 -->
<script setup lang="ts">
import {
  onMounted,
  ref,
  defineAsyncComponent,
  onBeforeMount,
  computed,
  watch,
  onBeforeUnmount,
} from 'vue'
import { onBeforeRouteLeave, useRoute } from 'vue-router'

import { TopicDetail, TopicReply } from '@/api'

// Aside
import Aside from './aside/Aside.vue'
import Master from './components/Master.vue'
import Reply from './components/Reply.vue'
// 异步导入回复面板
const ReplyPanel = defineAsyncComponent(
  () => import('./components/ReplyPanel.vue')
)

// 导入设置面板 store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
// 导入话题页面 store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

// 当前的路由
const route = useRoute()

// 使用设置面板的 store
const settingsStore = useKUNGalgameSettingsStore()
// 使用话题页面的 store
const topicStore = useKUNGalgameTopicStore()

const { showKUNGalgamePageWidth } = storeToRefs(settingsStore)
const { isShowAdvance, isEdit, replyDraft, replyRequest } =
  storeToRefs(topicStore)

const tid = computed(() => {
  return Number(route.params.tid)
})

// 单个话题数据
const topicData = ref<TopicDetail>()
// 单个话题的回复数据
const repliesData = ref<TopicReply[]>([])
// 页面的容器，用于计算是否到达底部
const content = ref<HTMLElement>()
// 当前的页数
const currentPage = ref(1)
// 是否加载，因为已经加载完了
const isLoading = ref(true)

/** 这里拿到的已经是后端返回回来的 data 数据了  */
onMounted(async () => {
  // 获取单个话题的数据
  const topicResponseData = (
    await useKUNGalgameTopicStore().getTopicByTid(tid.value)
  ).data
  topicData.value = topicResponseData
})

// 调用 getReplies 获取回复数据（watch 大法好！）
watch(
  () => [
    replyRequest.value.sortOrder,
    replyRequest.value.sortField,
    replyDraft.value.publishStatus,
  ],
  async () => {
    const replyResponseData = (
      await useKUNGalgameTopicStore().getReplies(tid.value)
    ).data
    repliesData.value = replyResponseData
  },
  { immediate: true }
)

// 滚动事件处理函数
const scrollHandler = async () => {
  // 滚动到底部的处理逻辑
  if (isScrollAtBottom() && isLoading.value) {
    // 自动增加页数
    currentPage.value++
    // 获取下一页的回复数据

    const lazyLoadReplies = await useKUNGalgameTopicStore().getReplies(
      tid.value,
      currentPage.value
    )

    // 判断是否已经将数据加载完，加载完则不需要加载了
    if (!lazyLoadReplies.data.length) {
      isLoading.value = false
    }

    // 将新加载的回复数据追加到已有的回复数据中
    repliesData.value = [...repliesData.value, ...lazyLoadReplies.data]
  }
}

// 判断是否滚动到底部
const isScrollAtBottom = () => {
  if (content.value) {
    const scrollHeight = content.value.scrollHeight
    const scrollTop = content.value.scrollTop
    const clientHeight = content.value.clientHeight

    return scrollHeight - scrollTop === clientHeight
  }
}

// 在组件挂载后，添加滚动事件监听器
onMounted(() => {
  // 获取滚动元素的引用
  const element = content.value

  if (element) {
    element.addEventListener('scroll', scrollHandler)
  }
})

// 在组件卸载前，移除滚动事件监听器
onBeforeUnmount(() => {
  const element = content.value

  if (element) {
    element.removeEventListener('scroll', scrollHandler)
  }
})
/* 话题界面的页面宽度 */
const topicPageWidth = computed(() => {
  return showKUNGalgamePageWidth.value.Topic + '%'
})

// 在页面跳转和刷新时重置回复面板状态，关闭高级模式、关闭面板
const resetPanelStatus = () => {
  isShowAdvance.value = false
  isEdit.value = false
}

onBeforeRouteLeave(() => {
  resetPanelStatus()
})

onBeforeMount(() => {
  resetPanelStatus()
})
</script>

<template>
  <!-- 回复面板组件 -->
  <!-- 总容器 -->
  <div class="root">
    <ReplyPanel />

    <!-- 下方可视内容区的容器 -->
    <div class="content-container">
      <!-- 侧边栏 -->
      <Aside v-if="topicData?.tags" :tags="topicData.tags" />

      <!-- 内容区 -->
      <div class="content" ref="content">
        <Master v-if="topicData" :topicData="topicData" />
        <Reply v-if="repliesData" :repliesData="repliesData" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 页面总容器 */
.root {
  min-height: calc(100vh - 65px);
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
}

/* 下方可视内容区的容器 */
.content-container {
  width: v-bind(topicPageWidth);
  transition: all 0.2s;
  height: calc(100vh - 65px);
  min-height: 500px;
  margin: 0 auto;
  display: flex;
  /* 设置背景的毛玻璃效果 */
  backdrop-filter: blur(5px);
  background-color: var(--kungalgame-trans-white-5);
  border: 1px solid var(--kungalgame-blue-0);
  /* 设置背景边框和圆角 */
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
  overflow: hidden;
}

/* 右侧内容区 */
.content {
  height: 100%;
  width: 100%;
  /* 右侧内容区为弹性盒（用户可以一直向下滑） */
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: visible;
}

@media (max-width: 1000px) {
  .aside {
    display: none;
  }
  .content-wrapper {
    padding: 0;
  }
}
</style>
