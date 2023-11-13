<!-- Topic's bottom area, including upvote, reply, like, etc. -->
<script setup lang="ts">
import { watch, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useTempMessageStore } from '@/store/temp/message'
import Message from '@/components/alert/Message'

import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import { useTempTopicStore } from '@/store/temp/topic/topic'
import { useTempReplyStore } from '@/store/temp/topic/reply'

const props = defineProps<{
  uid: number
  tid: number
  rid: number
  upvotes: number[]
  toUid: number
}>()

const isUpvote = ref(props.upvotes.includes(props.uid))
const upvoteCount = ref(props.upvotes.length)

watch(
  () => props.upvotes,
  (newUpvote) => {
    isUpvote.value = props.upvotes.includes(props.uid)
    upvoteCount.value = newUpvote.length
  }
)

const upvoteTopic = async () => {
  const res = await useTempMessageStore().alert(
    'AlertInfo.edit.upvoteTopic',
    true
  )

  if (res) {
    const { tid, toUid } = props
    const res = await useTempTopicStore().updateTopicUpvote(tid, toUid)

    if (res.code === 200) {
      upvoteCount.value++
      isUpvote.value = true

      Message('Topic upvote successfully', '推话题成功', 'success')
    } else {
      Message('Topic upvote failed!', '推话题失败', 'error')
    }
  }
}

const upvoteReply = async () => {
  const res = await useTempMessageStore().alert(
    'AlertInfo.edit.upvoteReply',
    true
  )

  if (res) {
    const { tid, toUid, rid } = props
    const res = await useTempReplyStore().updateReplyUpvote(tid, toUid, rid)

    if (res.code === 200) {
      upvoteCount.value++
      isUpvote.value = true

      Message('Reply upvote successfully', '推回复成功', 'success')
    } else {
      Message('Reply upvote failed!', '推回复失败', 'error')
    }
  }
}

const handleClickUpvote = async () => {
  if (props.uid === props.toUid) {
    Message('You cannot upvote your own topic', '您不可以推自己的话题', 'warn')
    return
  }

  if (useKUNGalgameUserStore().moemoepoint < 1100) {
    Message(
      `Your moemoepoints are less than 1100, so you can't use the upvote topic feature`,
      '您的萌萌点不足 1100, 无法使用推话题功能',
      'warn'
    )
    return
  }

  if (props.rid === 0) {
    upvoteTopic()
  } else {
    upvoteReply()
  }
}
</script>

<template>
  <li>
    <span
      class="icon"
      :class="isUpvote ? 'active' : ''"
      @click="handleClickUpvote"
    >
      <Icon icon="bi:rocket" />
    </span>
    {{ upvoteCount }}
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

.active {
  color: var(--kungalgame-blue-4) !important;
}
</style>
