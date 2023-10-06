<!-- 话题的底部区域，推话题，回复，点赞等 -->
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'

import { useRouter } from 'vue-router'
// 全局消息组件（底部）
import { useKUNGalgameMessageStore } from '@/store/modules/message'
// 全局消息组件（顶部）
import message from '@/components/alert/Message'
// throttle 函数
import { throttle } from '@/utils/throttle'

import { TopicUserInfo } from '@/api'

// 导入编辑界面的 store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
// 导入话题页面 store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
// 导入用户的 store
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import { storeToRefs } from 'pinia'

// 当前的话题 tid
const tid = parseInt(useRoute().params.tid as string)

// 使用话题页面的 store
const topicStore = useKUNGalgameTopicStore()
const { isEdit, replyDraft } = storeToRefs(topicStore)

// 接受父组件的传值
const props = defineProps<{
  info: {
    rid: number
    likes: number[]
    dislikes: number[]
    upvotes: number[]
    // 被回复人的 floor
    to_floor: number
  }
  master: TopicUserInfo
}>()

/**
 * 这里只是简单起见，不显示重新编辑
 * 实际上如果用户自己修改了 localStorage 中保存的信息，这个验证就失效了
 * 但是修改了也没有用，验证逻辑位于后端
 */
// 当前登录用户的 uid
const currUserUid = useKUNGalgameUserStore().uid
// 话题发布者的 uid
const masterUid = props.master.uid
// 是否具有重新编辑的权限
const isShowRewrite = currUserUid === masterUid

// footer 左侧的动作，点赞等
const actions = reactive({
  upvotes: props.info.upvotes,
  likes: props.info.likes,
  dislikes: props.info.dislikes,
})

// 是否已经点过赞，点过踩
const isActive = reactive({
  isUpvote: false,
  isLiked: false,
  isDisliked: false,
  isShared: false,
})

// throttle 回调函数
const throttleCallback = () => {
  message(
    'You can only perform one operation within 1007 milliseconds',
    '您在 1007 毫秒内只能进行一次操作',
    'warn'
  )
}

// throttle 函数，1007 毫秒仅会触发一次点赞
const handleClickLikeThrottled = throttle(
  async () => {
    // 当前用户不可以给自己点赞
    if (currUserUid === masterUid) {
      message(
        'You cannot like your own reply',
        '您不可以给自己的回复点赞',
        'warn'
      )
      return
    }

    // 切换点赞激活状态
    isActive.isLiked = !isActive.isLiked

    const res = await useKUNGalgameTopicStore().updateReplyLike(
      tid,
      masterUid,
      props.info.rid,
      isActive.isLiked
    )

    if (res.code === 200) {
      // 更新点赞数
      actions.likes.length = isActive.isLiked
        ? actions.likes.length + 1
        : actions.likes.length - 1
    } else {
      message('Reply like failed!', '点赞回复失败', 'error')
    }
  },
  1007,
  throttleCallback
)

// throttle 函数，1007 毫秒仅会触发一次点踩
const handleClickDislikeThrottled = throttle(
  async () => {
    if (currUserUid === masterUid) {
      message(
        'You cannot dislike your own reply',
        '您不可以给自己的回复点踩',
        'warn'
      )
      return
    }

    isActive.isDisliked = !isActive.isDisliked
    const res = await useKUNGalgameTopicStore().updateReplyDislike(
      tid,
      masterUid,
      props.info.rid,
      isActive.isDisliked
    )

    if (res.code === 200) {
      // 更新点赞数
      actions.dislikes.length = isActive.isDisliked
        ? actions.dislikes.length + 1
        : actions.dislikes.length - 1
    } else {
      message('Reply dislike failed!', '点踩回复失败', 'error')
    }
  },
  1007,
  throttleCallback
)

// 推话题
const handleClickUpvote = async () => {
  // 当前用户不可以推自己的话题
  if (currUserUid === masterUid) {
    message('You cannot upvote your own reply', '您不可以推自己的回复', 'warn')
    return
  }

  // TODO: 该功能必须有错误处理
  // if (useKUNGalgameUserStore().moemoepoint < 1100) {
  //   message(
  //     'Your Moe Moe Points are less than 1100, and you cannot use the upvote feature',
  //     '您的萌萌点小于 1100，无法使用推功能',
  //     'warn'
  //   )
  //   return
  // }

  // 调用弹窗确认
  const res = await useKUNGalgameMessageStore().alert(
    'AlertInfo.edit.upvote',
    true
  )

  // 这里实现用户的点击确认取消逻辑
  if (res) {
    // 请求推话题的接口
    const res = await useKUNGalgameTopicStore().updateReplyUpvote(
      tid,
      masterUid,
      props.info.rid
    )

    if (res.code === 200) {
      // 更新推数
      actions.upvotes.length++

      message('Topic upvote successfully', '推话题成功', 'success')
    } else {
      message('Topic upvote failed!', '推话题失败', 'error')
    }
  }
}

// 点赞
const handleClickLike = () => {
  handleClickLikeThrottled()
}

// 点踩
const handleClickDislike = () => {
  handleClickDislikeThrottled()
}

// 点击回复打开回复面板
const handelReply = async () => {
  // 保存必要信息，以便发表回复
  replyDraft.value.tid = tid
  replyDraft.value.replyUserName = props.master.name
  replyDraft.value.to_uid = props.master.uid
  replyDraft.value.to_floor = props.info.to_floor

  isEdit.value = true
}

// 重新编辑
const handleClickEdit = () => {}

// 初始化按钮的状态，是否已点赞等
onMounted(() => {
  // 已经推过
  if (props.info.upvotes.includes(currUserUid)) {
    isActive.isUpvote = true
  }

  // 已经点赞
  if (props.info.likes.includes(currUserUid)) {
    isActive.isLiked = true
  }

  // 已经点踩
  if (props.info.dislikes.includes(currUserUid)) {
    isActive.isDisliked = true
  }
})
</script>

<template>
  <!-- 楼主话题底部 -->
  <div class="footer">
    <!-- 底部左侧部分（点赞、推话题、踩） -->
    <div class="left">
      <ul>
        <!-- 推话题 -->
        <li>
          <span
            class="icon"
            :class="isActive.isUpvote ? 'active' : ''"
            @click="handleClickUpvote"
          >
            <Icon icon="bi:rocket" />
          </span>
          {{ actions.upvotes.length }}
        </li>
        <!-- 点赞 -->
        <li>
          <span
            class="icon"
            :class="isActive.isLiked ? 'active' : ''"
            @click="handleClickLike"
          >
            <Icon icon="line-md:thumbs-up-twotone" />
          </span>
          {{ actions.likes.length }}
        </li>
        <!-- 踩 -->
        <li>
          <span
            class="icon"
            :class="isActive.isDisliked ? 'active' : ''"
            @click="handleClickDislike"
          >
            <Icon icon="line-md:thumbs-down-twotone" />
          </span>
          {{ actions.dislikes.length }}
        </li>
      </ul>
    </div>
    <!-- 底部右侧部分（回复、评论、只看、编辑） -->
    <div class="right">
      <ul>
        <li @click="handelReply">
          <div class="reply">
            {{ $tm('topic.content.reply') }}
          </div>
        </li>
        <!-- 分享 -->
        <li>
          <span class="icon"><Icon icon="majesticons:share-line" /></span>
        </li>
        <!-- 只看 -->
        <li>
          <span class="icon"><Icon icon="ph:user-focus-duotone" /></span>
        </li>
        <!-- 编辑 -->
        <li>
          <span @click="handleClickEdit" class="icon">
            <Icon icon="line-md:pencil-twotone-alt" />
          </span>
        </li>

        <!-- 回复的插槽 -->
        <li>
          <slot name="comment"></slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 楼主话题底部 */
.footer {
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 底部左侧部分（点赞、推话题、踩） */
.left ul {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--kungalgame-font-color-3);
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
}

/* 图标字体的样式 */
.icon {
  font-size: 24px;
  color: var(--kungalgame-font-color-2);
  cursor: pointer;
}
/* 底部右侧部分（回复、评论、只看、编辑） */
.right ul {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  li {
    margin-right: 17px;
    span {
      display: flex;
    }
  }
}

.reply {
  position: relative;
  width: 70px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--kungalgame-blue-4);
  cursor: pointer;
  transition: all 0.2s;
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    left: 0;
    box-sizing: border-box;
    border: 2px solid transparent;
  }
  &:hover {
    color: var(--kungalgame-pink-4);

    &::before {
      transition: width 0.2s, height 0.2s, border-bottom-color 0s;
      transition-delay: 0.2s, 0s, 0.2s;
      width: 70px;
      height: 30px;
      border-left: 2px solid var(--kungalgame-pink-4);
      border-bottom: 2px solid var(--kungalgame-pink-4);
    }

    &::after {
      transition: width 0.2s, height 0.2s, border-right-color 0.2s;
      transition-delay: 0s, 0.2s, 0.2s;
      width: 70px;
      height: 30px;
      border-top: 2px solid var(--kungalgame-pink-4);
      border-right: 2px solid var(--kungalgame-pink-4);
    }
  }
}

/* 激活后的样式 */
.active {
  color: var(--kungalgame-blue-4);
}

@media (max-width: 700px) {
  .footer {
    flex-direction: column;
  }
}
</style>
