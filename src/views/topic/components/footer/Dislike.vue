<!-- 话题的底部区域，推话题，回复，点赞等 -->
<script setup lang="ts">
import { watch, ref } from 'vue'
import { Icon } from '@iconify/vue'
// 全局消息组件（顶部）
import message from '@/components/alert/Message'
// throttle 函数
import { throttle } from '@/utils/throttle'

// 导入话题页面 store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'

// 接受父组件的传值
const props = defineProps<{
  uid: number
  tid: number
  rid: number
  dislikes: number[]
  toUid: number
}>()

const isDisliked = ref(props.dislikes.includes(props.uid))
const dislikesCount = ref(props.dislikes.length)

// 响应式
watch(
  () => props.dislikes,
  (newLikes) => {
    // 更新 isLiked 和 likesCount
    isDisliked.value = newLikes.includes(props.uid)
    dislikesCount.value = newLikes.length
  }
)

// throttle 回调函数
const throttleCallback = () => {
  message(
    'You can only perform one operation within 1007 milliseconds',
    '您在 1007 毫秒内只能进行一次操作',
    'warn'
  )
}

// 点踩
const dislikeOperation = async (
  tid: number,
  rid: number,
  toUid: number,
  isPush: boolean
) => {
  // rid 为零表示点赞的是楼主的话题
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

// 点踩 / 取消点踩
const toggleDislike = async () => {
  // 当前用户不可以给自己点赞
  if (props.uid === props.toUid) {
    message('You cannot dislike yourself', '您不可以给自己点踩', 'warn')
    return
  }

  const { tid, rid, toUid } = props
  const isPush = !isDisliked.value // 取反表示点赞或取消点赞

  // 执行点赞或取消点赞操作
  const res = await dislikeOperation(tid, rid, toUid, isPush)

  if (res.code === 200) {
    isDisliked.value = isPush
    dislikesCount.value += isPush ? 1 : -1

    if (isPush) {
      message('Dislike successfully!', '点踩成功！', 'success')
    } else {
      message('Cancel dislike successfully!', '取消点踩成功！', 'success')
    }
  } else {
    if (isPush) {
      message('Dislike failed!', '点踩失败！', 'error')
    } else {
      message('Cancel dislike failed!', '取消点踩失败！', 'error')
    }
  }
}

// throttle 函数，1007 毫秒仅会触发一次点踩
const handleClickDislikeThrottled = throttle(
  toggleDislike,
  1007,
  throttleCallback
)

// 点踩
const handleClickDislike = () => {
  handleClickDislikeThrottled()
}
</script>

<template>
  <!-- 踩 -->
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
