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
} from 'vue'
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import message from '@/components/alert/Message'
// 全局消息组件（底部）
import { useKUNGalgameMessageStore } from '@/store/modules/message'

import { TopicDetail, TopicReply } from '@/api'

// Aside
import Aside from './aside/Aside.vue'
import Master from './components/Master.vue'
import Reply from './components/reply/Reply.vue'
// 异步导入回复面板
const ReplyPanel = defineAsyncComponent(
  () => import('./components/reply/ReplyPanel.vue')
)

// 导入设置面板 store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
// 导入话题页面 store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
// 回复发布响应的临时数据
import { useTempReplyStore } from '@/store/temp/reply'
// 回复重新编辑响应的临时数据
import { useTempReplyRewriteStore } from '@/store/temp/replyRewrite'
// 使用不持久的评论 store
import { useTempCommentStore } from '@/store/temp/comment'
import { storeToRefs } from 'pinia'

// 当前的路由
const route = useRoute()

const { showKUNGalgamePageWidth } = storeToRefs(useKUNGalgameSettingsStore())
const {
  isShowAdvance,
  isEdit,
  replyRequest,
  replyRewrite,
  isScrollToTop,
  isLoading,
  scrollToReplyId,
} = storeToRefs(useKUNGalgameTopicStore())
const { tempReply } = storeToRefs(useTempReplyStore())
const { rid, replyContent, tags, edited } = storeToRefs(
  useTempReplyRewriteStore()
)
const { isShowCommentPanelRid } = storeToRefs(useTempCommentStore())

const tid = computed(() => {
  return Number(route.params.tid)
})

// 单个话题数据
const topicData = ref<TopicDetail>()
// 单个话题的回复数据
const repliesData = ref<TopicReply[]>([])
// 页面的容器，用于计算是否到达底部
const content = ref<HTMLElement>()
// 滚动到某个话题时触发动画
const isExecuteScrollToReplyAnimate = ref(false)
// 页面滚动的距离
const contentScrollHeight = ref(0)

// 获取话题详情的函数
const getTopic = async (): Promise<TopicDetail> => {
  return (await useKUNGalgameTopicStore().getTopicByTid(tid.value)).data
}

// 获取回复的函数
const getReplies = async (): Promise<TopicReply[]> => {
  return (await useKUNGalgameTopicStore().getReplies(tid.value)).data
}

// 调用 getReplies 获取回复数据（watch 大法好！），点击排序时获取回复
watch(
  () => [replyRequest.value.sortOrder, replyRequest.value.sortField],
  async () => {
    repliesData.value = await getReplies()
  }
)

// 用户新发布回复，滚动到这个回复
watch(
  () => tempReply.value.rid,
  async () => {
    // 新发布的回复加到原来回复的数据中
    repliesData.value = [...repliesData.value, tempReply.value]
    // 等待一段时间
    await new Promise((resolve) => {
      setTimeout(resolve, 107)
    })
    // 滚动到这个回复
    scrollToReplyId.value = tempReply.value.floor
    // 最底下的回复，不需要加载了
    if (repliesData.value.length === tempReply.value.floor) {
      isLoading.value = false
    }
  }
)

// 用户重新编辑回复
watch(
  () => edited.value,
  () => {
    // 找到 repliesData 中的数据
    const reply = repliesData.value.find((reply) => reply.rid === rid.value)
    // 更新必要的数据
    if (reply) {
      reply.content = replyContent.value
      reply.tags = tags.value
      reply.edited = edited.value
    }
  }
)

// 监视是否滚动到顶部
watch(isScrollToTop, () => {
  if (content.value) {
    // 将页面滚动到顶部
    content.value.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    // 将滚动值还原
    isScrollToTop.value = false
  }
})

// 监视用户想要跳转到哪个回复
watch(
  () => scrollToReplyId.value,
  async () => {
    // 这段语句会被执行两次（想想为什么）
    if (content.value && scrollToReplyId.value !== -1) {
      // 获取父元素下指定的子元素 id
      const childElement = content.value.querySelector(
        `#kungalgame-reply-${scrollToReplyId.value}`
      ) as HTMLElement

      // 滚动到指定位置并标识 style
      if (childElement) {
        childElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
        childElement.classList.add('active')

        // 等待一段时间
        await new Promise((resolve) => {
          setTimeout(resolve, 3000)
        })

        childElement.classList.remove('active')
        // 找不到指定话题，因为这个话题还没有被加载至 DOM
      } else {
        message(
          'Unable to find the specified reply for now. Please scroll down.',
          '暂时找不到指定回复，请下滑',
          'info'
        )
      }
      scrollToReplyId.value = -1
    }
  }
)

// 滚动事件处理函数
const handelScroll = async () => {
  // 滚动到底部的处理逻辑
  if (isScrollAtBottom() && isLoading.value) {
    // 自动增加页数
    replyRequest.value.page++

    // 获取下一页的回复数据
    const lazyLoadReplies = await getReplies()

    // 判断是否已经将数据加载完，加载完则不需要加载了
    if (!lazyLoadReplies.length) {
      isLoading.value = false
      return
    }

    // 将新加载的回复数据追加到已有的回复数据中
    repliesData.value = [...repliesData.value, ...lazyLoadReplies]
  }
}

// 判断是否滚动到底部
const isScrollAtBottom = () => {
  if (content.value) {
    const scrollHeight = content.value.scrollHeight
    const scrollTop = content.value.scrollTop
    const clientHeight = content.value.clientHeight

    // 记录页面滚动的距离给子组件
    contentScrollHeight.value = scrollTop

    // 使用误差范围来比较，因为 js 浮点数不精确
    const errorMargin = 1.007
    return Math.abs(scrollHeight - scrollTop - clientHeight) < errorMargin
  }
}

// 在组件挂载后，添加滚动事件监听器
onMounted(async () => {
  // 挂载之前重置页数，是否加载等页面状态
  useKUNGalgameTopicStore().resetPageStatus()

  // 获取单个话题的数据
  topicData.value = await getTopic()

  // 获取回复的数据
  repliesData.value = await getReplies()
})

/**
 * 其它操作，关闭回复面板和调整页面宽度等
 */

/* 话题界面的页面宽度 */
const topicPageWidth = computed(() => {
  return showKUNGalgamePageWidth.value.Topic + '%'
})

// 在页面跳转和刷新时关闭回复面板和评论面板
const resetPanelStatus = () => {
  isShowCommentPanelRid.value = 0
  isShowAdvance.value = false
  isEdit.value = false
  // 重置重新编辑回复的数据
  // useKUNGalgameTopicStore().resetRewriteTopicData()
}

// 页面离开时关闭回复面板，如果重新编辑回复需要确认离开
onBeforeRouteLeave(async (to, from, next) => {
  // 如果是正在更新回复
  if (replyRewrite.value.isReplyRewriting) {
    // 获取用户点击的结果
    const res = await useKUNGalgameMessageStore().alert(
      'AlertInfo.edit.leave',
      true
    )
    if (res) {
      resetPanelStatus()
      // 用户确认离开，继续导航
      next()
    } else {
      // 用户取消离开，阻止导航
      next(false)
    }
  } else {
    next()
  }
})

// 挂载之前关闭回复面板
onBeforeMount(() => {
  resetPanelStatus()
})
</script>

<template>
  <!-- 回复面板组件 -->
  <!-- 总容器 -->
  <div class="root">
    <!-- 回复面板组件 -->
    <ReplyPanel />

    <!-- 下方可视内容区的容器 -->
    <div class="content-container">
      <!-- 侧边栏 -->
      <Aside v-if="topicData?.tags" :tags="topicData.tags" />

      <!-- 内容区 -->
      <div class="content" ref="content" @scroll="handelScroll">
        <Transition
          enter-active-class="animate__animated animate__fadeInDown animate__faster"
        >
          <!-- 滚动时的 title -->
          <div class="title-scroll" v-if="contentScrollHeight > 400">
            {{ topicData?.title }}
          </div>
        </Transition>
        <Master v-if="topicData" :topicData="topicData" />
        <Reply
          v-if="topicData && repliesData"
          :repliesData="repliesData"
          :title="topicData.title"
          :isExecuteScrollToReplyAnimate="isExecuteScrollToReplyAnimate"
        />
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

.title-scroll {
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: bold;
  color: var(--kungalgame-font-color-3);
  background-color: var(--kungalgame-trans-white-5);
  border: 1px solid var(--kungalgame-blue-1);
  border-radius: 0 0 5px 5px;
  backdrop-filter: blur(5px);
  z-index: 1;
}

@media (max-width: 1000px) {
  .aside {
    display: none;
  }
  .content-wrapper {
    padding: 0;
  }
}

@media (max-width: 700px) {
  .content-container {
    width: 100%;
  }
}
</style>
