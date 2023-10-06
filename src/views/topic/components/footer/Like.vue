<!-- 话题的底部区域，推话题，回复，点赞等 -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
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
  likes: number[]
  toUid: number
}>()

const likesArray = ref(props.likes)
const isLiked = ref(false)

// throttle 回调函数
const throttleCallback = () => {
  message(
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

// throttle 函数，1007 毫秒仅会触发一次点赞
const handleClickLikeThrottled = throttle(
  async () => {
    // 当前用户不可以给自己点赞
    if (props.uid === props.toUid) {
      message('You cannot like yourself', '您不可以给自己点赞', 'warn')
      return
    }

    // 切换点赞激活状态
    isLiked.value = !isLiked.value

    const res = await likeOperation(
      props.tid,
      props.rid,
      props.toUid,
      isLiked.value
    )

    if (res.code === 200) {
      // 更新点赞数
      likesArray.value.length = isLiked.value
        ? likesArray.value.length + 1
        : likesArray.value.length - 1
    } else {
      message('Like failed!', '点赞失败', 'error')
    }
  },
  1007,
  throttleCallback
)

// 点赞
const handleClickLike = () => {
  handleClickLikeThrottled()
}

// 初始化按钮的状态，是否已点赞等
onMounted(() => {
  // 已经点赞
  if (props.likes.includes(props.uid)) {
    isLiked.value = true
  }
})
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
    {{ likesArray.length }}
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
