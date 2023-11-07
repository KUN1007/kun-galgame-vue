<!-- Topic's bottom area, including upvote, reply, like, etc. -->
<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
// Upvote component
import Upvote from './Upvote.vue'
// Like component
import Like from './Like.vue'
// Dislike component
import Dislike from './Dislike.vue'
// Reply component
import Reply from './Reply.vue'
// Rewrite component
import Rewrite from './Rewrite.vue'

// Global message component (at the top)
import Message from '@/components/alert/Message'

// Import the user's store
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
// Import the settings panel store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

// Use the settings panel store
const settingsStore = useKUNGalgameSettingsStore()
const { showKUNGalgameLanguage } = storeToRefs(settingsStore)

// Receive props from the parent component
const props = defineProps<{
  info: {
    tid: number
    rid: number
    views: number
    likes: number[]
    dislikes: number[]
    upvotes: number[]
  }
  content: {
    title: string
    content: string
    tags: string[]
    category: string[]
  }
  toUser: {
    uid: number
    name: string
  }
  toFloor: number
}>()

const info = computed(() => props.info)
const content = computed(() => props.content)
const toUser = computed(() => props.toUser)

/**
 * For simplicity, we don't display the "rewrite" option here.
 * In reality, if users modify the information saved in local storage,
 * this validation will become ineffective, but the validation logic is on the backend.
 */
// Current user's UID
const currUserUid = useKUNGalgameUserStore().uid

// Share
const handleClickShare = () => {
  const shareLinkEN = computed(
    () =>
      `Share Link from KUN Visual Novel Forum ~~~
Title: ${props.content.title}
Link: https://www.kungal.com/topic/${props.info.tid}`
  )

  const shareLinkCN = computed(
    () =>
      `来自鲲 Galgame 论坛的分享链接 ~~~
标题: ${props.content.title}
链接: https://www.kungal.com/topic/${props.info.tid}`
  )

  const shareLink =
    showKUNGalgameLanguage.value === 'en' ? shareLinkEN : shareLinkCN

  navigator.clipboard
    .writeText(shareLink.value)
    .then(() => {
      Message('Share Link copied successfully!', '分享链接复制成功', 'success')
    })
    .catch((err) => {
      Message('Share Link copied failed!', '分享链接复制失败!', 'error')
    })
}
</script>

<template>
  <!-- Main topic's bottom -->
  <div class="footer">
    <!-- Left part of the bottom (upvote, share, and dislike) -->
    <div class="left">
      <ul>
        <!-- Upvote -->
        <Upvote
          :uid="currUserUid"
          :tid="info.tid"
          :rid="info.rid"
          :upvotes="info.upvotes"
          :to-uid="toUser.uid"
        />

        <!-- Number of views (only shown for the topic owner) -->
        <li v-if="info.views > 0">
          <span class="icon"><Icon icon="ic:outline-remove-red-eye" /></span>
          {{ info.views }}
        </li>

        <!-- Like -->
        <Like
          :uid="currUserUid"
          :tid="info.tid"
          :rid="info.rid"
          :likes="info.likes"
          :to-uid="toUser.uid"
        />

        <!-- Dislike -->
        <Dislike
          :uid="currUserUid"
          :tid="info.tid"
          :rid="info.rid"
          :dislikes="info.dislikes"
          :to-uid="toUser.uid"
        />
      </ul>
    </div>

    <!-- Right part of the bottom (reply, comment, view only, edit) -->
    <div class="right">
      <Reply
        :tid="info.tid"
        :to-user-name="toUser.name"
        :to_uid="toUser.uid"
        :to_floor="toFloor"
      />

      <!-- Share -->
      <span @click="handleClickShare" class="icon">
        <Icon icon="majesticons:share-line" />
      </span>

      <!-- View Only (TODO) -->
      <!-- <span class="icon"><Icon icon="ph:user-focus-duotone" /></span> -->

      <!-- Edit -->
      <Rewrite
        :tid="info.tid"
        :rid="info.rid"
        :uid="currUserUid"
        :title="content.title"
        :content="content.content"
        :tags="content.tags"
        :category="content.category"
        :to-uid="toUser.uid"
      />

      <!-- Comment slot -->
      <slot name="comment"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Main topic's bottom */
.footer {
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* Left part of the bottom (upvote, share, and dislike) */
.left ul {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--kungalgame-font-color-3);

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    margin: 17px;
    margin-right: 0;

    span {
      display: flex;
      margin-right: 3px;
    }

    &:nth-child(1) span {
      color: var(--kungalgame-red-4);
    }
  }
}

/* Icon font styles */
.icon {
  font-size: 24px;
  color: var(--kungalgame-font-color-2);
  cursor: pointer;
}

/* Right part of the bottom (reply, comment, view only, edit) */
.right {
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: flex;
    margin-right: 17px;
  }
}

/* Styles after activation */
.active {
  color: var(--kungalgame-blue-4);
}

@media (max-width: 700px) {
  .footer {
    flex-direction: column;
  }
  .reply {
    margin-right: 0;
  }
}
</style>
