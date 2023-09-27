<!-- 话题的底部区域，推话题，回复，点赞等 -->
<script setup lang="ts">
import { nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'

import { TopicUserInfo } from '@/api'

// 导入话题页面 store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

// 当前的话题 tid
const tid = parseInt(useRoute().params.tid as string)

// 使用话题页面的 store
const topicStore = useKUNGalgameTopicStore()
const { isEdit, replyDraft } = storeToRefs(topicStore)

// 接受父组件的传值
const props = defineProps<{
  info: {
    views?: number
    likes: number[]
    dislikes: number[]
    upvotes: number[]
    // 被回复人的 floor
    to_floor: number
  }
  rUser: TopicUserInfo
}>()

// 点击回复打开回复面板
const handelReply = async () => {
  // 保存必要信息，以便发表回复
  replyDraft.value.tid = tid
  replyDraft.value.replyUserName = props.rUser.name
  replyDraft.value.to_uid = props.rUser.uid
  replyDraft.value.to_floor = props.info.to_floor

  // 打开回复面板
  await nextTick()
  isEdit.value = true
}

// 重新编辑
const handleClickEdit = () => {}
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
          {{ info?.upvotes?.length }}
        </li>
        <!-- 查看数量 -->
        <li v-if="info.views">
          <span class="icon"><Icon icon="ic:outline-remove-red-eye" /></span>
          {{ info.views }}
        </li>
        <!-- 点赞 -->
        <li>
          <span class="icon"><Icon icon="line-md:thumbs-up-twotone" /></span>
          {{ info?.likes?.length }}
        </li>
        <!-- 踩 -->
        <li>
          <span class="icon"><Icon icon="line-md:thumbs-down-twotone" /></span>
          {{ info?.dislikes?.length }}
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

@media (max-width: 700px) {
  .footer {
    flex-direction: column;
  }
}
</style>
