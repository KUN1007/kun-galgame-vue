<!-- KUNGalgame topic page -->
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
// Global message component (bottom)
import { useKUNGalgameMessageStore } from '@/store/modules/message'

import { TopicDetail, TopicReply } from '@/api'

// Aside
import Aside from './aside/Aside.vue'
import Master from './components/Master.vue'
import Reply from './components/reply/Reply.vue'
// Asynchronously import the reply panel
const ReplyPanel = defineAsyncComponent(
  () => import('./components/reply/ReplyPanel.vue')
)

import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { usePersistKUNGalgameTopicStore } from '@/store/modules/topic/topic'
import { usePersistKUNGalgameReplyStore } from '@/store/modules/topic/reply'

import { useTempTopicStore } from '@/store/temp/topic/topic'
import { useTempReplyStore } from '@/store/temp/topic/reply'
import { useTempCommentStore } from '@/store/temp/topic/comment'

import { storeToRefs } from 'pinia'

// Current route
const route = useRoute()

const { showKUNGalgamePageWidth } = storeToRefs(useKUNGalgameSettingsStore())
const { isShowAdvance } = storeToRefs(usePersistKUNGalgameTopicStore())
const { isReplyRewriting } = storeToRefs(usePersistKUNGalgameReplyStore())

const {
  isEdit,
  replyRequest,
  isScrollToTop,
  isLoading,
  scrollToReplyId,
  tempReply,
  tempReplyRewrite,
} = storeToRefs(useTempReplyStore())

const { isShowCommentPanelRid } = storeToRefs(useTempCommentStore())

const tid = computed(() => {
  return Number(route.params.tid)
})

// Single topic data
const topicData = ref<TopicDetail>()
// Single topic reply data
const repliesData = ref<TopicReply[]>([])
// Page container for calculating whether it has reached the bottom
const content = ref<HTMLElement>()
// Trigger animation when scrolling to a certain topic
const isExecuteScrollToReplyAnimate = ref(false)
// Page scrolling distance
const contentScrollHeight = ref(0)

// Function to get topic details
const getTopic = async (): Promise<TopicDetail> => {
  return (await useTempTopicStore().getTopicByTid(tid.value)).data
}

// Function to get replies
const getReplies = async (): Promise<TopicReply[]> => {
  return (await useTempReplyStore().getReplies(tid.value)).data
}

// Call getReplies to get reply data (watch is great!), get replies when sorting is clicked
watch(
  () => [replyRequest.value.sortOrder, replyRequest.value.sortField],
  async () => {
    repliesData.value = await getReplies()
  }
)

// User publishes a new reply, scroll to this reply
watch(
  () => tempReply.value.rid,
  async () => {
    // Add the newly published reply to the existing reply data
    repliesData.value = [...repliesData.value, tempReply.value]
    // Wait for a while
    await new Promise((resolve) => {
      setTimeout(resolve, 107)
    })
    // Scroll to this reply
    scrollToReplyId.value = tempReply.value.floor
    // If it's the bottom reply, no need to load more
    if (repliesData.value.length === tempReply.value.floor) {
      isLoading.value = false
    }
  }
)

// User edits a reply
watch(
  () => tempReplyRewrite.value.edited,
  () => {
    // Find the reply data in repliesData
    const reply = repliesData.value.find(
      (reply) => reply.rid === tempReplyRewrite.value.rid
    )
    // Update the necessary data
    if (reply) {
      reply.content = tempReplyRewrite.value.content
      reply.tags = tempReplyRewrite.value.tags
      reply.edited = tempReplyRewrite.value.edited
    }
  }
)

// Watch whether it has scrolled to the top
watch(isScrollToTop, () => {
  if (content.value) {
    // Scroll the page to the top
    content.value.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    // Reset the scrolling value
    isScrollToTop.value = false
  }
})

// Watch the user's intention to scroll to a specific reply
watch(
  () => scrollToReplyId.value,
  async () => {
    // This block of code will be executed twice (think about why)
    if (content.value && scrollToReplyId.value !== -1) {
      // Get the specified child element under the parent element by ID
      const childElement = content.value.querySelector(
        `#kungalgame-reply-${scrollToReplyId.value}`
      ) as HTMLElement

      // Scroll to the specified position and apply a 'style' class
      if (childElement) {
        childElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
        childElement.classList.add('active')

        // Wait for a while
        await new Promise((resolve) => {
          setTimeout(resolve, 3000)
        })

        childElement.classList.remove('active')
        // Unable to find the specified reply because this reply has not been loaded into the DOM yet
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

// Scroll event handler
const handelScroll = async () => {
  // Logic when scrolling to the bottom
  if (isScrollAtBottom() && isLoading.value) {
    // Automatically increase the page number
    replyRequest.value.page++

    // Get the next page of reply data
    const lazyLoadReplies = await getReplies()

    // Check if all data has been loaded, no need to load more if already loaded
    if (!lazyLoadReplies.length) {
      isLoading.value = false
      return
    }

    // Append the newly loaded reply data to the existing reply data
    repliesData.value = [...repliesData.value, ...lazyLoadReplies]
  }
}

// Check if it has scrolled to the bottom
const isScrollAtBottom = () => {
  if (content.value) {
    const scrollHeight = content.value.scrollHeight
    const scrollTop = content.value.scrollTop
    const clientHeight = content.value.clientHeight

    // Record the page scrolling distance for child components
    contentScrollHeight.value = scrollTop

    // Compare using an error margin because JavaScript floating-point numbers are not precise
    const errorMargin = 1.007
    return Math.abs(scrollHeight - scrollTop - clientHeight) < errorMargin
  }
}

// Reset the panel status when the component is mounted
onMounted(async () => {
  // Get data for the single topic
  topicData.value = await getTopic()

  // Get reply data
  repliesData.value = await getReplies()
})

/**
 * Other operations, close reply panels, adjust page width, etc.
 */

/* Topic page width */
const topicPageWidth = computed(() => {
  return showKUNGalgamePageWidth.value.Topic + '%'
})

// Close reply panels and comment panels when navigating and refreshing the page
const resetPanelStatus = () => {
  isShowCommentPanelRid.value = 0
  isShowAdvance.value = false
  isEdit.value = false
  // Reset data for editing replies
  // useKUNGalgameTopicStore().resetRewriteTopicData()
}

// Close the reply panel when leaving the page, confirm leaving if there are unsaved reply edits
onBeforeRouteLeave(async (to, from, next) => {
  // If a reply is being edited
  if (isReplyRewriting.value) {
    // Get the user's choice
    const res = await useKUNGalgameMessageStore().alert(
      'AlertInfo.edit.leave',
      true
    )
    if (res) {
      resetPanelStatus()
      // If the user confirms leaving, continue with the navigation
      next()
    } else {
      // If the user cancels leaving, prevent navigation
      next(false)
    }
  } else {
    next()
  }
})

// Close the reply panel before mounting the component
onBeforeMount(() => {
  resetPanelStatus()
})
</script>

<template>
  <!-- Reply panel component -->
  <!-- Main container -->
  <div class="root">
    <!-- Reply panel component -->
    <ReplyPanel />

    <!-- Container for visible content below -->
    <div class="content-container">
      <!-- Sidebar -->
      <Aside
        v-if="topicData?.tags && topicData.user"
        :tags="topicData.tags"
        :uid="topicData.user.uid"
      />

      <!-- Content area -->
      <div class="content" ref="content" @scroll="handelScroll">
        <Transition
          enter-active-class="animate__animated animate__fadeInDown animate__faster"
        >
          <!-- Title during scrolling -->
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
/* Overall container */
.root {
  min-height: calc(100vh - 65px);
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
}

/* Container for visible content below */
.content-container {
  width: v-bind(topicPageWidth);
  transition: all 0.2s;
  height: calc(100vh - 65px);
  min-height: 500px;
  margin: 0 auto;
  display: flex;
  /* Apply frosted glass effect to the background */
  backdrop-filter: blur(5px);
  background-color: var(--kungalgame-trans-white-5);
  border: 1px solid var(--kungalgame-blue-0);
  /* Add background border and rounded corners */
  border-radius: 5px;
  padding: 5px;
}

/* Right content area */
.content {
  height: 100%;
  width: 100%;
  /* Right content area is a flexbox (users can keep scrolling down) */
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
