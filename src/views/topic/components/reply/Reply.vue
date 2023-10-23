<!-- 
  This is the section below the KUNGalgame topic display area where topics posted by other users will be shown.

  This area contains all the replies from other users to the topic's master.
  Each user's reply will be split into separate components.
 -->
<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
// Content component
import Content from '../Content.vue'
// Import Comment component
import Comments from '../comment/Comments.vue'
// Import Footer component
import Footer from '../footer/Footer.vue'
// Import Time component
import Time from '../Time.vue'
// Import Tags component
import Tags from '../Tags.vue'
// Import Rewrite component
import Rewrite from '../Rewrite.vue'
// Import KUNGalgamerInfo component
import KUNGalgamerInfo from '../KUNGalgamerInfo.vue'

// Import the function to calculate the time difference
import { hourDiff } from '@/utils/time'

import { TopicReply } from '@/api/index'

// Import the topic page store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'

// Use the non-persistent comment store
import { useTempCommentStore } from '@/store/temp/comment'
import { storeToRefs } from 'pinia'

const { scrollToReplyId } = storeToRefs(useKUNGalgameTopicStore())

const { tid, rid, toUid, toUsername, isShowCommentPanelRid } = storeToRefs(
  useTempCommentStore()
)

const props = defineProps<{
  repliesData: TopicReply[]
  title: string
}>()

// Reactive values of props for use in child components
const replies = computed(() => props.repliesData)

// Value to control the comment panel visibility
const isCommentPanelOpen = ref(false)

// Function to toggle the comment panel's state
const handleClickComment = (
  topicId: number,
  replyIid: number,
  uid: number,
  name: string
) => {
  isCommentPanelOpen.value = !isCommentPanelOpen.value
  if (isCommentPanelOpen.value) {
    tid.value = topicId
    rid.value = replyIid
    toUid.value = uid
    toUsername.value = name
    isShowCommentPanelRid.value = replyIid
  } else {
    isShowCommentPanelRid.value = 0
  }
}
</script>

<template>
  <!-- Other people's replies -->
  <!-- We use Math.random as the key must be unique -->
  <Transition
    enter-active-class="animate__animated animate__fadeInUp animate__faster"
    appear
  >
    <div>
      <!-- Apply style changes for topics upvoted within 10 hours -->
      <div
        class="other-topic-container"
        v-for="(reply, index) in replies"
        :class="hourDiff(reply.upvote_time, 10) ? 'active-upvote' : ''"
        :key="`${index}`"
        :id="`kungalgame-reply-${reply.floor}`"
      >
        <!-- Floor marker -->
        <div class="floor" :class="reply.edited ? 'rewrite' : ''">
          <span>K{{ reply.floor }}</span>
        </div>
        <!-- Container for the content of other people's topics -->
        <div class="container">
          <!-- Content of other people's replies -->
          <div class="content">
            <!-- Upper part of other people's replies -->
            <div class="article">
              <!-- Left side of the upper part of other people's replies -->
              <KUNGalgamerInfo :user="reply.r_user" />
              <!-- Right side of the upper part of other people's replies -->
              <div class="right">
                <!-- Top part on the right side -->
                <div class="top">
                  <!-- Left side of the top part -->
                  <div class="reply">
                    {{ `${$tm('topic.panel.to')} @` }}

                    <span @click="scrollToReplyId = reply.to_floor">
                      {{ reply.to_user.name }}
                    </span>
                  </div>
                  <!-- Right side of the top part -->
                  <Rewrite v-if="reply.edited" :time="reply.edited" />
                </div>

                <!-- Rich text content display area -->
                <Content :content="reply.content" />
              </div>
            </div>
            <!-- Bottom part of other people's replies -->
            <div class="bottom">
              <Tags :tags="reply.tags" />
              <Time :time="reply.time" />
            </div>
          </div>

          <!-- Placeholder for views, title, and category as replies do not have them -->
          <!-- Footer component -->
          <Footer
            :info="{
              tid: reply.tid,
              rid: reply.rid,
              views: 0,
              likes: reply.likes,
              dislikes: reply.dislikes,
              upvotes: reply.upvotes,
            }"
            :content="{
              title: props.title,
              content: reply.content,
              tags: reply.tags,
              category: [],
            }"
            :to-user="{
              uid: reply.r_user.uid,
              name: reply.r_user.name,
            }"
            :to-floor="reply.floor"
          >
            <template #comment>
              <span
                @click="
                  handleClickComment(
                    reply.tid,
                    reply.rid,
                    reply.r_user.uid,
                    reply.r_user.name
                  )
                "
                class="icon"
              >
                <Icon icon="fa-regular:comment-dots" />
              </span>
            </template>
          </Footer>

          <!-- Comment area -->
          <Comments
            :tid="reply.tid"
            :rid="reply.rid"
            :to-user="{ uid: reply.r_user.uid, name: reply.r_user.name }"
          />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
/* Other people's replies */
/* Styling for each person's topic */
.other-topic-container {
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Styling for individual replies */
.floor {
  width: 100%;
  display: flex;
  justify-content: end;
  font-weight: bold;
  font-style: oblique;
  color: var(--kungalgame-red-3);
  border-bottom: none;
  filter: drop-shadow(1px 2px 2px var(--kungalgame-trans-blue-4));
  margin: 5px 0;

  span {
    transform: rotate(10deg) translateY(40px);
    padding: 0 30px;
    text-align: center;
    background-color: var(--kungalgame-trans-white-2);
    font-size: 20px;
    clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0 50%);
  }
}

/* Container for the content of other people's topics */
.container {
  width: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  border: 1px solid var(--kungalgame-blue-1);
  border-radius: 5px;
  background-color: var(--kungalgame-trans-white-5);
  box-shadow: var(--shadow);
  transition: all 0.5s;
}

/* Content of other people's replies */
.content {
  width: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
}

/* Upper part of other people's replies */
.article {
  display: flex;
  flex-grow: 1;
}

/* Right side of the upper part of other people's replies */
.right {
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Top part on the right side */
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  letter-spacing: 1px;
}

/* Left side of the top part */
.reply {
  font-size: 17px;
  color: var(--kungalgame-font-color-3);

  span {
    color: var(--kungalgame-blue-5);
    font-weight: 500;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 2px;
    }
  }
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: var(--kungalgame-font-color-2);
  cursor: pointer;
  margin-right: 17px;
}

/* Right side of the top part */
/* Styling for replies that have been edited */
.rewrite {
  span {
    transform: rotate(0) translateY(0) translateX(-7px);
  }
}

/* Styling for upvoted replies within 10 hours */
.active-upvote .container {
  border: 1px solid var(--kungalgame-red-4);
}

/* Styling for activated topics when scrolling to a specific topic */
.active .container {
  border: 1px solid var(--kungalgame-red-3);
  background-color: var(--kungalgame-trans-red-1);
}

@media (max-width: 1000px) {
  .top {
    flex-direction: column;
  }
  .bottom {
    flex-direction: column;
  }
}

@media (max-width: 700px) {
  .article {
    flex-direction: column;
  }
  .top {
    margin: 0;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--kungalgame-blue-1);
  }
}
</style>
