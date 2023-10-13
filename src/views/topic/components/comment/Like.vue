<!-- 
  这是回复话题下方的评论区，包含了所有的评论，是一个单独的组件，它的子组件是单个评论
 -->
<script setup lang="ts">
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
// 全局消息组件（顶部）
import Message from '@/components/alert/Message'
// throttle 函数
import { throttle } from '@/utils/throttle'

// 导入话题页面 store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'

const props = defineProps<{
  tid: number
  cid: number
  uid: number
  toUid: number

  likes: number[]
}>()

const isLiked = ref(props.likes.includes(props.uid))
const likesCount = ref(props.likes.length)

// 响应式
watch(
  () => props.likes,
  (newLikes) => {
    // 更新 isLiked 和 likesCount
    isLiked.value = newLikes.includes(props.uid)
    likesCount.value = newLikes.length
  }
)

// throttle 回调函数
const throttleCallback = () => {
  Message(
    'You can only perform one operation within 1007 milliseconds',
    '您在 1007 毫秒内只能进行一次操作',
    'warn'
  )
}

const likeComment = async () => {
  // 已经点赞
  if (isLiked.value) {
    Message(`You've already liked it`, '您已经点过赞了', 'warn')
    return
  }

  // 当前用户不可以给自己点赞
  if (props.uid === props.toUid) {
    Message('You cannot like yourself', '您不可以给自己点赞', 'warn')
    return
  }

  const { tid, cid, toUid } = props
  const res = await useKUNGalgameTopicStore().updateCommentLike(tid, cid, toUid)

  if (res.code === 200) {
    likesCount.value++
    isLiked.value = true
    Message('Like successfully!', '点赞成功', 'success')
  } else {
    Message('Like failed!', '点赞失败', 'error')
  }
}

// throttle 函数，1007 毫秒仅会触发一次点赞
const handleClickLikeThrottled = throttle(likeComment, 1007, throttleCallback)

// 点赞
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

/* 激活后的样式 */
.active .icon {
  color: var(--kungalgame-blue-4);
}
</style>
