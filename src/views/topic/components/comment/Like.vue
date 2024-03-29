<script setup lang="ts">
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import Message from '@/components/alert/Message'
import { throttle } from '@/utils/throttle'

import { useTempCommentStore } from '@/store/temp/topic/comment'

const props = defineProps<{
  tid: number
  cid: number
  uid: number
  toUid: number

  likes: number[]
}>()

const isLiked = ref(props.likes.includes(props.uid))
const likesCount = ref(props.likes.length)

watch(
  () => props.likes,
  (newLikes) => {
    isLiked.value = newLikes.includes(props.uid)
    likesCount.value = newLikes.length
  }
)

const throttleCallback = () => {
  Message(
    'You can only perform one operation within 1007 milliseconds',
    '您在 1007 毫秒内只能进行一次操作',
    'warn'
  )
}

const likeComment = async () => {
  if (isLiked.value) {
    Message(`You've already liked it`, '您已经点过赞了', 'warn')
    return
  }

  if (props.uid === props.toUid) {
    Message('You cannot like yourself', '您不可以给自己点赞', 'warn')
    return
  }

  const { tid, cid, toUid } = props
  const res = await useTempCommentStore().updateCommentLike(tid, cid, toUid)

  if (res.code === 200) {
    likesCount.value++
    isLiked.value = true
    Message('Like successfully!', '点赞成功', 'success')
  } else {
    Message('Like failed!', '点赞失败', 'error')
  }
}

const handleClickLikeThrottled = throttle(likeComment, 1007, throttleCallback)

const handleClickLike = () => {
  handleClickLikeThrottled()
}
</script>

<template>
  <li :class="isLiked ? 'active' : ''" @click="handleClickLike">
    <Icon class="icon" icon="line-md:thumbs-up-twotone" />
    {{ likesCount }}
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
