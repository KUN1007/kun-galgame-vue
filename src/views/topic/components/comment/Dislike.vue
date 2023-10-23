<script setup lang="ts">
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import Message from '@/components/alert/Message'
import { throttle } from '@/utils/throttle'

import { useKUNGalgameTopicStore } from '@/store/modules/topic'

const props = defineProps<{
  tid: number
  cid: number
  uid: number
  toUid: number

  dislikes: number[]
}>()

const isDisliked = ref(props.dislikes.includes(props.uid))
const dislikesCount = ref(props.dislikes.length)

// Reactivity
watch(
  () => props.dislikes,
  (newLikes) => {
    isDisliked.value = newLikes.includes(props.uid)
    dislikesCount.value = newLikes.length
  }
)

// Throttle callback function
const throttleCallback = () => {
  Message(
    'You can only perform one operation within 1007 milliseconds',
    '您在 1007 毫秒内只能进行一次操作',
    'warn'
  )
}

const dislikeComment = async () => {
  // Already disliked
  if (isDisliked.value) {
    Message(`You've already disliked it`, '您已经点过踩了', 'warn')
    return
  }

  // The current user cannot dislike themselves
  if (props.uid === props.toUid) {
    Message('You cannot dislike yourself', '您不可以给自己点踩', 'warn')
    return
  }

  const { tid, cid, toUid } = props
  const res = await useKUNGalgameTopicStore().updateCommentDislike(
    tid,
    cid,
    toUid
  )

  if (res.code === 200) {
    dislikesCount.value++
    isDisliked.value = true
    Message('Dislike successfully!', '点踩成功', 'success')
  } else {
    Message('Dislike failed!', '点踩失败', 'error')
  }
}

// Throttle function, can only trigger dislikes every 1007 milliseconds
const handleClickDislikeThrottled = throttle(
  dislikeComment,
  1007,
  throttleCallback
)

const handleClickDislike = () => {
  handleClickDislikeThrottled()
}
</script>

<template>
  <li :class="isDisliked ? 'active' : ''" @click="handleClickDislike">
    <Icon class="icon" icon="line-md:thumbs-down-twotone" />
    {{ dislikesCount }}
  </li>
</template>

<style lang="scss" scoped>
li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  .icon {
    cursor: pointer;
    color: var(--kungalgame-font-color-2);
    margin-right: 2px;
  }
}

/* Styles after activation */
.active .icon {
  color: var(--kungalgame-blue-4);
}
</style>
