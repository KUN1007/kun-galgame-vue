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
import Message from '@/components/alert/Message'

import { useTempMessageStore } from '@/store/temp/message'

import { TopicDetail, TopicReply } from '@/api'

import Aside from './aside/Aside.vue'
import Master from './components/Master.vue'
import Reply from './components/reply/Reply.vue'
import Bar from './components/Bar.vue'
const ReplyPanel = defineAsyncComponent(
  () => import('./components/reply/ReplyPanel.vue')
)

import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { usePersistKUNGalgameTopicStore } from '@/store/modules/topic/topic'

import { useTempTopicStore } from '@/store/temp/topic/topic'
import { useTempReplyStore } from '@/store/temp/topic/reply'
import { useTempCommentStore } from '@/store/temp/topic/comment'

import { storeToRefs } from 'pinia'

const route = useRoute()

const { showKUNGalgamePageWidth } = storeToRefs(useKUNGalgameSettingsStore())
const { isShowAdvance } = storeToRefs(usePersistKUNGalgameTopicStore())
const { isReplyRewriting } = storeToRefs(useTempReplyStore())

const {
  isEdit,
  replyRequest,
  isScrollToTop,
  isLoading,
  scrollToReplyId,
  tempReply,
} = storeToRefs(useTempReplyStore())

const { isShowCommentPanelRid } = storeToRefs(useTempCommentStore())

const tid = ref(parseInt(route.params.tid as string))

const topicData = ref<TopicDetail>()
const repliesData = ref<TopicReply[]>([])
const content = ref<HTMLElement>()
const isExecuteScrollToReplyAnimate = ref(false)
const contentScrollHeight = ref(0)

const getTopic = async (): Promise<TopicDetail> => {
  return (await useTempTopicStore().getTopicByTid(tid.value)).data
}

const getReplies = async (): Promise<TopicReply[]> => {
  return (await useTempReplyStore().getReplies(tid.value)).data
}

watch(
  () => [replyRequest.value.sortOrder, replyRequest.value.sortField],
  async () => {
    if (repliesData.value && repliesData.value?.length < 3) {
      isLoading.value = false
      return
    }
    repliesData.value = await getReplies()
  }
)

watch(
  () => tempReply.value.rid,
  async () => {
    repliesData.value = [...repliesData.value, tempReply.value]

    await new Promise((resolve) => {
      setTimeout(resolve, 107)
    })

    scrollToReplyId.value = tempReply.value.floor
    if (repliesData.value.length === tempReply.value.floor) {
      isLoading.value = false
    }
  }
)

watch(isScrollToTop, () => {
  if (content.value) {
    content.value.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    isScrollToTop.value = false
  }
})

watch(
  () => scrollToReplyId.value,
  async () => {
    if (content.value && scrollToReplyId.value !== -1) {
      const childElement = content.value.querySelector(
        `#kungalgame-reply-${scrollToReplyId.value}`
      ) as HTMLElement

      if (childElement) {
        childElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
        childElement.classList.add('active')

        await new Promise((resolve) => {
          setTimeout(resolve, 3000)
        })

        childElement.classList.remove('active')
      } else {
        Message(
          'Unable to find the specified reply for now. Please scroll down.',
          '暂时找不到指定回复，请下滑',
          'info'
        )
      }
      scrollToReplyId.value = -1
    }
  }
)

const handelScroll = async () => {
  if (isScrollAtBottom() && isLoading.value) {
    replyRequest.value.page++

    const lazyLoadReplies = await getReplies()

    if (!lazyLoadReplies.length) {
      isLoading.value = false
      return
    }

    repliesData.value = [...repliesData.value, ...lazyLoadReplies]
  }
}

const isScrollAtBottom = () => {
  if (content.value) {
    const scrollHeight = content.value.scrollHeight
    const scrollTop = content.value.scrollTop
    const clientHeight = content.value.clientHeight

    contentScrollHeight.value = scrollTop

    const errorMargin = 1.007
    return Math.abs(scrollHeight - scrollTop - clientHeight) < errorMargin
  }
}

onMounted(async () => {
  useTempReplyStore().resetPageStatus()
  topicData.value = await getTopic()
  repliesData.value = await getReplies()

  if (repliesData.value.length < 3) {
    isLoading.value = false
  }
})

const topicPageWidth = computed(() => {
  return showKUNGalgamePageWidth.value.Topic + '%'
})

const resetPanelStatus = () => {
  isShowCommentPanelRid.value = 0
  isShowAdvance.value = false
  isEdit.value = false
}

onBeforeRouteLeave(async (to, from, next) => {
  if (isReplyRewriting.value) {
    const res = await useTempMessageStore().alert('AlertInfo.edit.leave', true)
    if (res) {
      useTempReplyStore().resetRewriteReplyData()
      resetPanelStatus()
      next()
    } else {
      next(false)
    }
  } else {
    next()
  }
})

onBeforeMount(() => {
  resetPanelStatus()
})
</script>

<template>
  <div class="root">
    <ReplyPanel />

    <div class="content-container">
      <Aside
        v-if="topicData?.tags && topicData.user"
        :tags="topicData.tags"
        :uid="topicData.user.uid"
      />

      <div class="content" ref="content" @scroll="handelScroll">
        <Transition
          enter-active-class="animate__animated animate__fadeInDown animate__faster"
        >
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

    <Bar />
  </div>
</template>

<style lang="scss" scoped>
.root {
  min-height: calc(100vh - 65px);
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
}

.content-container {
  width: v-bind(topicPageWidth);
  transition: width 0.2s;
  height: calc(100vh - 65px);
  min-height: 500px;
  margin: 0 auto;
  display: flex;
  backdrop-filter: blur(5px);
  background-color: var(--kungalgame-trans-white-5);
  border: 1px solid var(--kungalgame-blue-0);
  border-radius: 5px;
  padding: 5px;
}

.content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
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
