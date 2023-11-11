<!-- Topic's bottom area, including upvote, reply, like, etc. -->
<script setup lang="ts">
import { watch, ref } from 'vue'
import { Icon } from '@iconify/vue'

import Message from '@/components/alert/Message'

import { throttle } from '@/utils/throttle'

import { useTempTopicStore } from '@/store/temp/topic/topic'
import { useTempReplyStore } from '@/store/temp/topic/reply'

const props = defineProps<{
  uid: number
  tid: number
  rid: number
  likes: number[]
  toUid: number
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

const likeOperation = async (
  tid: number,
  rid: number,
  toUid: number,
  isPush: boolean
) => {
  const isMasterTopic = rid === 0
  if (isMasterTopic) {
    return await useTempTopicStore().updateTopicLike(tid, toUid, isPush)
  } else {
    return await useTempReplyStore().updateReplyLike(tid, toUid, rid, isPush)
  }
}

const toggleLike = async () => {
  if (props.uid === props.toUid) {
    Message('You cannot like yourself', '您不可以给自己点赞', 'warn')
    return
  }

  const { tid, rid, toUid } = props
  const isPush = !isLiked.value

  const res = await likeOperation(tid, rid, toUid, isPush)

  if (res.code === 200) {
    isLiked.value = isPush
    likesCount.value += isPush ? 1 : -1

    if (isPush) {
      Message('Like successfully!', '点赞成功！', 'success')
    } else {
      Message('Unlike successfully!', '取消点赞成功！', 'success')
    }
  } else {
    if (isPush) {
      Message('Like failed!', '点赞失败！', 'error')
    } else {
      Message('Unlike failed!', '取消点赞失败！', 'error')
    }
  }
}

const handleClickLikeThrottled = throttle(toggleLike, 1007, throttleCallback)

const handleClickLike = () => {
  handleClickLikeThrottled()
}
</script>

<template>
  <li>
    <span
      class="icon"
      :class="isLiked ? 'active' : ''"
      @click="handleClickLike"
    >
      <Icon icon="line-md:thumbs-up-twotone" />
    </span>
    {{ likesCount }}
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

/* Style after activation */
.active {
  color: var(--kungalgame-blue-4);
}
</style>
