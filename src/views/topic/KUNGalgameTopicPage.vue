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
} from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

import TopicAsideNav from './aside/TopicAsideNav.vue'

// 相同标签下的其它话题
import TopicOtherTag from './aside/TopicOtherTag.vue'

// 楼主的其它话题
import TopicMaster from './aside/TopicMaster.vue'

// 导入 Footer
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'
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

import { TopicDetail, TopicReply } from '@/api/index'

import { useRoute } from 'vue-router'

const route = useRoute()

// 使用设置面板的 store
const settingsStore = useKUNGalgameSettingsStore()
// 使用话题页面的 store
const topicStore = useKUNGalgameTopicStore()

const requestData = storeToRefs(useKUNGalgameTopicStore())

// 在组件挂载时调用 fetchTopics 获取话题数据（watch 大法好！）
// watch(
//   [requestData.keywords, requestData.sortField, requestData.sortOrder],
//   async () => {
//     topics.value = (await useKUNGalgameHomeStore().getHomeTopic()).data
//   },
//   { immediate: true }
// )

const tid = computed(() => {
  return Number(route.params.tid)
})

// 单个话题数据
const topicData = ref<TopicDetail>()

// 单个话题的回复数据
const repliesData = ref<TopicReply[]>([])

/** 这里拿到的已经是后端返回回来的 data 数据了  */
onMounted(async () => {
  // 获取单个话题的数据
  const topicResponseData = (
    await useKUNGalgameTopicStore().getTopicByTid(tid.value)
  ).data

  topicData.value = topicResponseData

  // 懒加载获取单个话题下面的回复数据
  const replyResponseData = (
    await useKUNGalgameTopicStore().getReplies(tid.value)
  ).data
  repliesData.value = replyResponseData
})

const { showKUNGalgamePageWidth } = storeToRefs(settingsStore)
const { isShowAdvance, isEdit } = storeToRefs(topicStore)

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
    <!-- 下面话题详情区的容器 -->
    <div class="container">
      <!-- 下方可视内容区的容器 -->
      <div class="content-container">
        <div class="aside">
          <TopicAsideNav />
          <TopicOtherTag
            v-if="topicData?.tags"
            style="margin-bottom: 17px"
            :tags="topicData.tags"
          />
          <TopicMaster />
          <KUNGalgameFooter />
        </div>

        <div class="content">
          <Master v-if="topicData" :topicData="topicData" />
          <Reply v-if="repliesData" :repliesData="repliesData" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 页面总容器 */
.root {
  min-height: 1500px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
}
/* 下面话题详情区的容器 */
.container {
  display: flex;
  flex-shrink: 0;
}
/* 下方可视内容区的容器 */
.content-container {
  width: v-bind(topicPageWidth);
  transition: all 0.2s;
  max-width: 1500px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  /* 设置背景的毛玻璃效果 */
  backdrop-filter: blur(5px);
  background-color: var(--kungalgame-trans-white-5);
  /* 设置背景边框和圆角 */
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
}

/* 左侧内容区 */
.aside {
  top: 70px;
  position: sticky;
  /* 左侧区域的总高度 */
  height: 940px;
  /* 左侧区域宽度 */
  width: 250px;
  /* 左侧内容区为弹性盒，方便分成上下两部分 */
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  box-sizing: border-box;
  color: var(--kungalgame-font-color-3);
  margin-right: 5px;
}

/* 右侧内容区 */
.content {
  height: 100%;
  width: 100%;
  /* 右侧内容区为弹性盒（用户可以一直向下滑） */
  display: flex;
  flex-direction: column;
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
