<!-- This is the area for displaying the main topic in the KUNGalgame topic display area.
  The main topic will be shown here and is located at the top of the topic display area. -->

<script setup lang="ts">
// Importing components
import Footer from './footer/Footer.vue'
// Whether the main topic has been edited
import Rewrite from '../components/Rewrite.vue'
// Main topic information
import KUNGalgamerInfo from '../components/KUNGalgamerInfo.vue'
// Topic content display area
import Content from './Content.vue'
// Posting time of the main topic
import Time from '../components/Time.vue'
// Tags of the main topic
import Tags from '../components/Tags.vue'

import { TopicDetail } from '@/api/topic/types/topic'
import { computed } from 'vue'

// Importing a function to calculate time difference
import { hourDiff } from '@/utils/time'

const topicData = defineProps<{
  topicData: TopicDetail
}>()

const {
  tid,
  title,
  views,
  likes,
  dislikes,
  time,
  content,
  upvotes,
  tags,
  edited,
  user,
  // replies,
  status,
  // share,
  category,
  // popularity,
  upvote_time,
} = topicData.topicData

// Topic status
const loliStatus = computed(() => {
  // If upvoted within 10 hours, it will be marked as "featured"
  if (hourDiff(upvote_time, 10)) {
    return 'featured'
  }

  if (status === 0) {
    return 'normal'
  } else if (status === 1) {
    return 'banned'
  } else {
    return ''
  }
})
</script>

<template>
  <Transition
    enter-active-class="animate__animated animate__fadeInRight animate__faster"
    appear
  >
    <!-- Main container for the main topic, the ID is for easy navigation -->
    <div class="container" :id="`kungalgame-reply-0`">
      <!-- Container for the main content of the main topic -->
      <div class="content-container">
        <!-- Header for the main topic -->
        <div class="header">
          <!-- Title of the main topic -->
          <div class="title">
            {{ title }}
          </div>
        </div>
        <!-- Content area for the main topic -->
        <div class="content">
          <!-- Top section of the content area -->
          <div class="content-top">
            <Tags v-if="tags" :tags="tags" />
            <Time v-if="time" :time="time" />
          </div>
          <!-- Middle section of the content area -->
          <div class="content-center">
            <KUNGalgamerInfo v-if="user" :user="user" />

            <!-- Rich text content display area -->
            <Content :content="content" />
          </div>
          <!-- Bottom section of the content area -->
          <div class="content-bottom">
            <!-- Topic status -->
            <div class="status">
              <span>{{ `${$tm('topic.content.status')}:` }}</span>
              <span :class="loliStatus">{{
                $tm(`topic.content.${loliStatus}`)
              }}</span>
            </div>
            <Rewrite v-if="edited" :time="edited" />
          </div>
        </div>
        <!-- Footer displaying topic information such as upvotes, views, likes, etc. -->
        <Footer
          :info="{
            tid,
            rid: 0,
            views,
            likes,
            dislikes,
            upvotes,
          }"
          :content="{
            title,
            content,
            tags,
            category,
          }"
          :to-user="{
            uid: user.uid,
            name: user.name,
          }"
          :to-floor="0"
        />
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
/* Main container for the main topic */
.container {
  width: 100%;
  /* Minimum height of the main topic */
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

/* Container for the main content of the main topic */
.content-container {
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border: 1px solid var(--kungalgame-blue-1);
  border-radius: 5px;
  box-shadow: var(--shadow);
  background-color: var(--kungalgame-trans-white-5);
  transition: all 0.5s;
}

/* Header for the main topic */
.header {
  width: 100%;
  min-height: 70px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--kungalgame-font-color-3);
  font-size: 17px;
  border-bottom: 1px solid var(--kungalgame-blue-1);
}
/* Title of the main topic */
.title {
  font-size: 17px;
  font-weight: bold;
  /* Letter spacing */
  letter-spacing: 1px;
}

/* Content area for the main topic */
.content {
  display: flex;
  flex-direction: column;
}
/* Top section of the content area */
.content-top {
  width: 100%;
  max-height: 100px;
  display: flex;
  text-align: center;
  /* Time and tags on separate sides */
  justify-content: space-between;
  /* Bottom separator */
  border-bottom: 1px solid var(--kungalgame-blue-1);
  flex-grow: 1;
}

/* Container for the main topic and main topic information */
.content-center {
  width: 100%;
  display: flex;
  border-bottom: 1px solid var(--kungalgame-blue-1);
}

/* Bottom section of the content area */
.content-bottom {
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--kungalgame-blue-1);
}

/* Topic status */
.status {
  display: flex;
  font-size: 12px;
  margin-left: 10px;
  color: var(--kungalgame-font-color-3);
  /* Topic status */
  span {
    &:nth-child(1) {
      margin-right: 5px;
    }
    &:nth-child(2) {
      width: 50px;
      padding: 1px;
      color: var(--kungalgame-white);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

/* Topic status styles */
.normal {
  background-color: var(--kungalgame-green-4);
}

.banned {
  background-color: var(--kungalgame-gray-4);
}

.featured {
  background-color: var(--kungalgame-pink-3);
}

/* Style when a topic is clicked to navigate */
/* Style when a specific topic is activated after scrolling */
.active .content-container {
  border: 1px solid var(--kungalgame-red-3);
  background-color: var(--kungalgame-trans-red-1);
}

@media (max-width: 1000px) {
  .content-top {
    justify-content: center;
    flex-wrap: wrap;
  }
}

@media (max-width: 700px) {
  .content-center {
    flex-direction: column;
  }
}
</style>
