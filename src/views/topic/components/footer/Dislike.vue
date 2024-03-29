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
  dislikes: number[]
  toUid: number
}>()

const isDisliked = ref(props.dislikes.includes(props.uid))
const dislikesCount = ref(props.dislikes.length)

watch(
  () => props.dislikes,
  (newLikes) => {
    isDisliked.value = newLikes.includes(props.uid)
    dislikesCount.value = newLikes.length
  }
)

const throttleCallback = () => {
  Message(
    'You can only perform one operation within 1007 milliseconds',
    '您在 1007 毫秒内只能进行一次操作',
    'warn'
  )
}

const dislikeOperation = async (
  tid: number,
  rid: number,
  toUid: number,
  isPush: boolean
) => {
  const isMasterTopic = rid === 0
  if (isMasterTopic) {
    return await useTempTopicStore().updateTopicDislike(tid, toUid, isPush)
  } else {
    return await useTempReplyStore().updateReplyDislike(tid, toUid, rid, isPush)
  }
}

const toggleDislike = async () => {
  if (props.uid === props.toUid) {
    Message('You cannot dislike yourself', '您不可以给自己点踩', 'warn')
    return
  }

  const { tid, rid, toUid } = props
  const isPush = !isDisliked.value

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

const handleClickDislikeThrottled = throttle(
  toggleDislike,
  1007,
  throttleCallback
)

const handleClickDislike = () => {
  handleClickDislikeThrottled()
}
</script>

<template>
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
