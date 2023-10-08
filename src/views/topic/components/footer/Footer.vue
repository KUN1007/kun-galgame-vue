<!-- 话题的底部区域，推话题，回复，点赞等 -->
<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
// 推组件
import Upvote from './Upvote.vue'
// 点赞组件
import Like from './Like.vue'
// 踩组件
import Dislike from './Dislike.vue'
// 回复组件
import Reply from './Reply.vue'
// 重新编辑组件
import Rewrite from './Rewrite.vue'

// 全局消息组件（顶部）
import message from '@/components/alert/Message'

// 导入用户的 store
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
// 导入设置面板 store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

// 使用设置面板的 store
const settingsStore = useKUNGalgameSettingsStore()
const { showKUNGalgameLanguage } = storeToRefs(settingsStore)

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
  toUser: {
    uid: number
    name: string
  }
  toFloor: number
}>()

const info = computed(() => props.info)
const content = computed(() => props.content)
const toUser = computed(() => props.toUser)

/**
 * 这里只是简单起见，不显示重新编辑
 * 实际上如果用户自己修改了 localStorage 中保存的信息，这个验证就失效了
 * 但是修改了也没有用，验证逻辑位于后端
 */
// 当前登录用户的 uid
const currUserUid = useKUNGalgameUserStore().uid

// 分享
const handleClickShare = () => {
  const shareLinkEN = computed(
    () =>
      `Share Link from KUN Visual Novel Forum ~~~
Title: ${props.content.title}
Link: https://www.kungal.com/topic/${props.info.tid}`
  )

  const shareLinkCN = computed(
    () =>
      `来自鲲 Galgame 论坛的分享链接 ~~~
标题: ${props.content.title}
链接: https://www.kungal.com/topic/${props.info.tid}`
  )

  const shareLink =
    showKUNGalgameLanguage.value === 'en' ? shareLinkEN : shareLinkCN

  navigator.clipboard
    .writeText(shareLink.value)
    .then(() => {
      message('Share Link copied successfully!', '分享链接复制成功', 'success')
    })
    .catch((err) => {
      message('Share Link copied failed!', '分享链接复制失败!', 'error')
    })
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
          :tid="info.tid"
          :rid="info.rid"
          :upvotes="info.upvotes"
          :to-uid="toUser.uid"
        />

        <!-- 浏览数，楼主才会显示 -->
        <li v-if="info.views > 0">
          <span class="icon"><Icon icon="ic:outline-remove-red-eye" /></span>
          {{ info.views }}
        </li>

        <!-- 点赞 -->
        <Like
          :uid="currUserUid"
          :tid="info.tid"
          :rid="info.rid"
          :likes="info.likes"
          :to-uid="toUser.uid"
        />

        <!-- 踩 -->
        <Dislike
          :uid="currUserUid"
          :tid="info.tid"
          :rid="info.rid"
          :dislikes="info.dislikes"
          :to-uid="toUser.uid"
        />
      </ul>
    </div>

    <!-- 底部右侧部分（回复、评论、只看、编辑） -->
    <div class="right">
      <Reply
        :tid="info.tid"
        :to-user-name="toUser.name"
        :to_uid="toUser.uid"
        :to_floor="toFloor"
      />

      <!-- 分享 -->
      <span @click="handleClickShare" class="icon"
        ><Icon icon="majesticons:share-line"
      /></span>

      <!-- 只看 TODO: -->
      <!-- <span class="icon"><Icon icon="ph:user-focus-duotone" /></span> -->

      <!-- 编辑 -->
      <Rewrite
        :tid="info.tid"
        :rid="info.rid"
        :uid="currUserUid"
        :title="content.title"
        :content="content.content"
        :tags="content.tags"
        :category="content.category"
        :to-uid="toUser.uid"
      />

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
