<!-- 话题的底部区域，推话题，回复，点赞等 -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
// 推组件
import Upvote from './Upvote.vue'
// 点赞组件
import Like from './Like.vue'
// 踩组件
import Dislike from './Dislike.vue'

// 导入编辑界面的 store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
// 导入话题页面 store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
// 导入用户的 store
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import { storeToRefs } from 'pinia'

// 使用编辑界面的 store
const { topicRewrite } = storeToRefs(useKUNGalgameEditStore())
// 使用话题页面的 store
const { isEdit, replyDraft } = storeToRefs(useKUNGalgameTopicStore())
// 使用路由
const router = useRouter()

// 接受父组件的传值
const props = defineProps<{
  info: {
    tid: number
    rid: number
    views: number
    likes: number[]
    dislikes: number[]
    upvotes: number[]
  }
  content: {
    title: string
    content: string
    tags: string[]
    category: string[]
  }
  toUid: number
}>()

/**
 * 这里只是简单起见，不显示重新编辑
 * 实际上如果用户自己修改了 localStorage 中保存的信息，这个验证就失效了
 * 但是修改了也没有用，验证逻辑位于后端
 */
// 当前登录用户的 uid
const currUserUid = useKUNGalgameUserStore().uid
// 话题 / 回复发布者的 uid
const masterUid = props.toUid
// 是否具有重新编辑的权限
const isShowRewrite = currUserUid === masterUid

// 点击回复打开回复面板
const handleClickReply = async () => {
  // 保存必要信息，以便发表回复
  replyDraft.value.tid = props.info.tid
  // 被回复人就是发表人的 uid
  replyDraft.value.to_uid = masterUid
  // 楼主的 floor 就是 0
  replyDraft.value.to_floor = 0
  // 打开回复面板
  isEdit.value = true
}

// 重新编辑
const handleClickRewrite = () => {
  // 保存数据
  topicRewrite.value.tid = props.info.tid
  topicRewrite.value.title = props.content.title
  topicRewrite.value.content = props.content.content
  topicRewrite.value.tags = props.content.tags
  topicRewrite.value.category = props.content.category

  // 设置正在重新编辑状态为真
  topicRewrite.value.isTopicRewriting = true

  // 跳转到编辑界面
  router.push({ name: 'Edit' })
}
</script>

<template>
  <!-- 楼主话题底部 -->
  <div class="footer">
    <!-- 底部左侧部分（点赞、推话题、踩） -->
    <div class="left">
      <ul>
        <!-- 推话题 -->
        <Upvote
          :uid="currUserUid"
          :tid="props.info.tid"
          :rid="props.info.rid"
          :upvotes="props.info.upvotes"
          :to-uid="masterUid"
        />

        <!-- 浏览数，楼主才会显示 -->
        <li v-if="props.info.views > 0">
          <span class="icon"><Icon icon="ic:outline-remove-red-eye" /></span>
          {{ info.views }}
        </li>

        <!-- 点赞 -->
        <Like
          :uid="currUserUid"
          :tid="props.info.tid"
          :rid="props.info.rid"
          :likes="props.info.likes"
          :to-uid="masterUid"
        />

        <!-- 踩 -->
        <Dislike
          :uid="currUserUid"
          :tid="props.info.tid"
          :rid="props.info.rid"
          :dislikes="props.info.dislikes"
          :to-uid="masterUid"
        />
      </ul>
    </div>

    <!-- 底部右侧部分（回复、评论、只看、编辑） -->
    <div class="right">
      <div @click="handleClickReply" class="reply">
        {{ $tm('topic.content.reply') }}
      </div>

      <!-- 分享 -->
      <span class="icon"><Icon icon="majesticons:share-line" /></span>

      <!-- 只看 -->
      <span class="icon"><Icon icon="ph:user-focus-duotone" /></span>

      <!-- 编辑 -->
      <span v-if="isShowRewrite" @click="handleClickRewrite" class="icon">
        <Icon icon="line-md:pencil-twotone-alt" />
      </span>

      <!-- 回复的插槽 -->

      <slot name="comment"></slot>
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
.right {
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    display: flex;
    margin-right: 17px;
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
  margin-right: 10px;
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
  .reply {
    margin-right: 0;
  }
}
</style>
