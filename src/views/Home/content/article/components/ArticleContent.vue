<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, onBeforeMount } from 'vue'
import SingleTopic from './SingleTopic.vue'
import HomeTopicSkeleton from '@/components/skeleton/home/HomeTopicSkeleton.vue'
import { hourDiff } from '@/utils/time'

import { HomeTopic } from '@/api'

// Import the homepage store
import { useKUNGalgameHomeStore } from '@/store/modules/home'
import { storeToRefs } from 'pinia'

const { page, keywords, sortField, sortOrder, isLoading } = storeToRefs(
  useKUNGalgameHomeStore()
)

// Define reactive topic data in the component
const topics = ref<HomeTopic[]>([])
// Page container for calculating whether it has reached the bottom
const content = ref<HTMLElement>()

// Function to get page topics
const getTopics = async (): Promise<HomeTopic[]> => {
  return (await useKUNGalgameHomeStore().getHomeTopic()).data
}

// Call fetchTopics to get topic data (watch is great!)
watch([keywords, sortField, sortOrder], async () => {
  topics.value = await getTopics()
})

// Scroll event handler
const scrollHandler = async () => {
  // Handling logic when scrolling to the bottom
  if (isScrollAtBottom() && isLoading.value) {
    // Automatically increment the page number
    page.value++

    // Get the topics for the next page
    const lazyLoadTopics = await getTopics()

    // Check if data has already been loaded, if so, no need to load more
    if (!lazyLoadTopics.length) {
      isLoading.value = false
    }

    // Append the newly loaded reply data to the existing reply data
    topics.value = [...topics.value, ...lazyLoadTopics]
  }
}

// Check if it has scrolled to the bottom
const isScrollAtBottom = () => {
  if (content.value) {
    const scrollHeight = content.value.scrollHeight
    const scrollTop = content.value.scrollTop
    const clientHeight = content.value.clientHeight

    // Compare with a margin of error, as JavaScript floating-point numbers are not precise
    // Why 1007? Because I got KUN san on October 7th, ahahaha
    const errorMargin = 1.007
    return Math.abs(scrollHeight - scrollTop - clientHeight) < errorMargin
  }
}

onBeforeMount(async () => {
  // Reset page number, loading status, etc. before mounting
  useKUNGalgameHomeStore().resetPageStatus()
})

// Add a scroll event listener after the component is mounted
onMounted(async () => {
  // Get a reference to the scrolling element
  const element = content.value

  // If the element is found, start the listener to track scroll behavior
  if (element) {
    element.addEventListener('scroll', scrollHandler)
  }

  // Load topics for the first time
  topics.value = await getTopics()
})

// Remove the scroll event listener before the component is unmounted
onBeforeUnmount(() => {
  const element = content.value
  // If the page element is found, remove the listener
  if (element) {
    element.removeEventListener('scroll', scrollHandler)
  }
})
</script>

<template>
  <div class="topic-container" ref="content">
    <TransitionGroup name="list" tag="div" v-if="topics.length">
      <!-- Posted within 10 hours -->
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

    <!-- Skeleton -->
    <HomeTopicSkeleton v-if="!topics.length" />

    <HomeTopicSkeleton v-if="isLoading && topics.length >= 16" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/effect/effect.scss';
.topic-container {
  width: 100%;
  padding: 0 7px;
  overflow-y: scroll;
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

  /* Compatibility with Firefox */
  scrollbar-width: thin;
  scrollbar-color: var(--kungalgame-blue-4) var(--kungalgame-blue-1); /* Firefox 64+ */

  div {
    & > div {
      margin: 7px 0;
    }
  }
}

/* Style normalization */
.kungalgame-comet-surround {
  padding: 0;
  flex-shrink: 0;
  border: 2px solid var(--kungalgame-red-4);

  & > div {
    margin: 0 !important;
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

/* Ensure that the leaving element is removed from the layout flow
   to calculate the moving animation correctly. */
.list-leave-active {
  position: absolute;
}
</style>
