<!-- 话题的底部区域，推话题，回复，点赞等 -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
// 全局消息组件（底部）
import { useKUNGalgameMessageStore } from '@/store/modules/message'
// 全局消息组件（顶部）
import message from '@/components/alert/Message'
// 导入话题页面 store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'

// 接受父组件的传值
const props = defineProps<{
  uid: number
  tid: number
  rid: number
  upvotes: number[]
  toUid: number
}>()

const upvotesArray = ref(props.upvotes)
const isUpvote = ref(false)

// 推话题
const upvoteTopic = async () => {
  // 调用弹窗确认
  const res = await useKUNGalgameMessageStore().alert(
    'AlertInfo.edit.upvoteTopic',
    true
  )

  // 这里实现用户的点击确认取消逻辑
  if (res) {
    // 请求推话题的接口
    const res = await useKUNGalgameTopicStore().updateTopicUpvote(
      props.tid,
      props.toUid
    )

    if (res.code === 200) {
      // 更新推数
      upvotesArray.value.length++

      message('Topic upvote successfully', '推话题成功', 'success')
    } else {
      message('Topic upvote failed!', '推话题失败', 'error')
    }
  }
}

// 推回复
const upvoteReply = async () => {
  // 调用弹窗确认
  const res = await useKUNGalgameMessageStore().alert(
    'AlertInfo.edit.upvoteReply',
    true
  )

  // 这里实现用户的点击确认取消逻辑
  if (res) {
    // 请求推话题的接口
    const res = await useKUNGalgameTopicStore().updateReplyUpvote(
      props.tid,
      props.toUid,
      props.rid
    )

    if (res.code === 200) {
      // 更新推数
      upvotesArray.value.length++

      message('Reply upvote successfully', '推回复成功', 'success')
    } else {
      message('Reply upvote failed!', '推回复失败', 'error')
    }
  }
}

// 推
const handleClickUpvote = async () => {
  // 当前用户不可以推自己
  if (props.uid === props.toUid) {
    message('You cannot upvote your own topic', '您不可以推自己的话题', 'warn')
    return
  }

  // 为零是楼主的话题
  if (props.rid === 0) {
    upvoteTopic()
  } else {
    upvoteReply()
  }
}

// 初始化按钮的状态
onMounted(() => {
  // 已经推过
  if (props.upvotes.includes(props.uid)) {
    isUpvote.value = true
  }
})
</script>

<template>
  <!-- 推话题 -->
  <li>
    <span
      class="icon"
      :class="isUpvote ? 'active' : ''"
      @click="handleClickUpvote"
    >
      <Icon icon="bi:rocket" />
    </span>
    {{ upvotes.length }}
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

/* 图标字体的样式 */
.icon {
  font-size: 24px;
  color: var(--kungalgame-font-color-2);
  cursor: pointer;
}

/* 激活后的样式 */
.active {
  color: var(--kungalgame-blue-4);
}
</style>
