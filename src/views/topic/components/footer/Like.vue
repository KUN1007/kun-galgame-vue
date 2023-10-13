<!-- 话题的底部区域，推话题，回复，点赞等 -->
<script setup lang="ts">
import { watch, ref } from 'vue'
import { Icon } from '@iconify/vue'
// 全局消息组件（顶部）
import Message from '@/components/alert/Message'
// throttle 函数
import { throttle } from '@/utils/throttle'

// 导入话题页面 store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'

// 接受父组件的传值
const props = defineProps<{
  uid: number
  tid: number
  rid: number
  likes: number[]
  toUid: number
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

// 点赞
const likeOperation = async (
  tid: number,
  rid: number,
  toUid: number,
  isPush: boolean
) => {
  // rid 为零表示点赞的是楼主的话题
  const isMasterTopic = rid === 0
  if (isMasterTopic) {
    return await useKUNGalgameTopicStore().updateTopicLike(tid, toUid, isPush)
  } else {
    return await useKUNGalgameTopicStore().updateReplyLike(
      tid,
      toUid,
      rid,
      isPush
    )
  }
}

// 点赞 / 取消点赞
const toggleLike = async () => {
  // 当前用户不可以给自己点赞
  if (props.uid === props.toUid) {
    Message('You cannot like yourself', '您不可以给自己点赞', 'warn')
    return
  }

  const { tid, rid, toUid } = props
  const isPush = !isLiked.value // 取反表示点赞或取消点赞

  // 执行点赞或取消点赞操作
  const res = await likeOperation(tid, rid, toUid, isPush)

  if (res.code === 200) {
    isLiked.value = isPush
    likesCount.value += isPush ? 1 : -1

    if (isPush) {
      Message('Like successfully!', '点赞成功！', 'success')
    } else {
      Message('Cancel like successfully!', '取消点赞成功！', 'success')
    }
  } else {
    if (isPush) {
      Message('Like failed!', '点赞失败！', 'error')
    } else {
      Message('Cancel like failed!', '取消点赞失败！', 'error')
    }
  }
}

// throttle 函数，1007 毫秒仅会触发一次点赞
const handleClickLikeThrottled = throttle(toggleLike, 1007, throttleCallback)

// 点赞
const handleClickLike = () => {
  handleClickLikeThrottled()
}
</script>

<template>
  <!-- 点赞 -->
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
