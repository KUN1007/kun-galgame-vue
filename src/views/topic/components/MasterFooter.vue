<!-- 话题的底部区域，推话题，回复，点赞等 -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'

import { TopicUserInfo } from '@/api'

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
    views: number
    likes: number[]
    dislikes: number[]
    upvotes: number[]
    // 被回复人的 floor
    to_floor: number
  }
  topic: {
    tid: number
    title: string
    content: string
    tags: string[]
    category: string[]
  }
  rUser: TopicUserInfo
}>()

// 是否具有重新编辑的权限
/**
 * 这里只是简单起见，不显示重新编辑
 * 实际上如果用户自己修改了 localStorage 中保存的信息，这个验证就失效了
 * 但是修改了也没有用，验证逻辑位于后端
 */
const isShowRewrite = useKUNGalgameUserStore().uid === props.rUser.uid

// 点击回复打开回复面板
const handelReply = async () => {
  // 保存必要信息，以便发表回复
  replyDraft.value.tid = props.info.tid
  // 被回复人就是发表人的 uid
  replyDraft.value.to_uid = props.rUser.uid
  replyDraft.value.to_floor = props.info.to_floor

  isEdit.value = true
}

// 重新编辑
const handleClickEdit = () => {
  // 保存数据
  topicRewrite.value.tid = props.topic.tid
  topicRewrite.value.title = props.topic.title
  topicRewrite.value.content = props.topic.content
  topicRewrite.value.tags = props.topic.tags
  topicRewrite.value.category = props.topic.category

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
        <li>
          <span class="icon"><Icon icon="bi:rocket" /></span>
          {{ info.upvotes.length }}
        </li>
        <!-- 查看数量 -->
        <li>
          <span class="icon"><Icon icon="ic:outline-remove-red-eye" /></span>
          {{ info.views }}
        </li>
        <!-- 点赞 -->
        <li>
          <span class="icon"><Icon icon="line-md:thumbs-up-twotone" /></span>
          {{ info.likes.length }}
        </li>
        <!-- 踩 -->
        <li>
          <span class="icon"><Icon icon="line-md:thumbs-down-twotone" /></span>
          {{ info.dislikes.length }}
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
        <li v-if="isShowRewrite">
          <span @click="handleClickEdit" class="icon">
            <Icon icon="line-md:pencil-twotone-alt" />
          </span>
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

@media (max-width: 700px) {
  .footer {
    flex-direction: column;
  }
}
</style>
