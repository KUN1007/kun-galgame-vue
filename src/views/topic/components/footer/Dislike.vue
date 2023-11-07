<!-- Topic's bottom area, including upvote, reply, like, etc. -->
<script setup lang="ts">
import { watch, ref } from 'vue'
import { Icon } from '@iconify/vue'
import Message from '@/components/alert/Message'
import { throttle } from '@/utils/throttle'

import { useKUNGalgameTopicStore } from '@/store/modules/topic'

const props = defineProps<{
  uid: number
  tid: number
  rid: number
  dislikes: number[]
  toUid: number
}>()

const isDisliked = ref(props.dislikes.includes(props.uid))
const dislikesCount = ref(props.dislikes.length)

// Reactive
watch(
  () => props.dislikes,
  (newLikes) => {
    // Update isDisliked and dislikesCount
    isDisliked.value = newLikes.includes(props.uid)
    dislikesCount.value = newLikes.length
  }
)

// Throttle callback
const throttleCallback = () => {
  Message(
    'You can only perform one operation within 1007 milliseconds',
    '您在 1007 毫秒内只能进行一次操作',
    'warn'
  )
}

// Dislike operation
const dislikeOperation = async (
  tid: number,
  rid: number,
  toUid: number,
  isPush: boolean
) => {
  // If rid is zero, it means the dislike is for the main topic
  const isMasterTopic = rid === 0
  if (isMasterTopic) {
    return await useKUNGalgameTopicStore().updateTopicDislike(
      tid,
      toUid,
      isPush
    )
  } else {
    return await useKUNGalgameTopicStore().updateReplyDislike(
      tid,
      toUid,
      rid,
      isPush
    )
  }
}

// Toggle dislike (dislike or cancel dislike)
const toggleDislike = async () => {
  // Current user cannot dislike themselves
  if (props.uid === props.toUid) {
    Message('You cannot dislike yourself', '您不可以给自己点踩', 'warn')
    return
  }

  const { tid, rid, toUid } = props
  const isPush = !isDisliked.value // Invert the value to dislike or cancel dislike

  // Perform dislike or cancel dislike operation
  const res = await dislikeOperation(tid, rid, toUid, isPush)

  if (res.code === 200) {
    isDisliked.value = isPush
    dislikesCount.value += isPush ? 1 : -1

    if (isPush) {
      Message('Dislike successfully!', '点踩成功！', 'success')
    } else {
      Message('Cancel dislike successfully!', '取消点踩成功！', 'success')
    }
  } else {
    if (isPush) {
      Message('Dislike failed!', '点踩失败！', 'error')
    } else {
      Message('Cancel dislike failed!', '取消点踩失败！', 'error')
    }
  }
}

// Throttled function, can only trigger dislike once within 1007 milliseconds
const handleClickDislikeThrottled = throttle(
  toggleDislike,
  1007,
  throttleCallback
)

// Handle dislike
const handleClickDislike = () => {
  handleClickDislikeThrottled()
}
</script>

<template>
  <!-- Dislike -->
  <li>
    <span
      class="icon"
      :class="isDisliked ? 'active' : ''"
      @click="handleClickDislike"
    >
      <Icon icon="line-md:thumbs-down-twotone" />
    </span>
    {{ dislikesCount }}
  </li>
</template>

<style lang="scss" scoped>
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

.icon {
  font-size: 24px;
  color: var(--kungalgame-font-color-2);
  cursor: pointer;
}

/* Styles after activation */
.active {
  color: var(--kungalgame-blue-4);
}
</style>
