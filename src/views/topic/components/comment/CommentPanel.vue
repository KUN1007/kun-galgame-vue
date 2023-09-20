<script setup lang="ts">
import { onMounted, ref } from 'vue'
// 全局消息组件（顶部）
import message from '@/components/alert/Message'
import { debounce } from '@/utils/debounce'

import { TopicComment } from '@/api/index'

// 导入用户 store
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
// 导入话题页面 store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

const { name, uid } = storeToRefs(useKUNGalgameUserStore())

// 定于父组件 props
const { tid, rid, to_user } = defineProps<{
  tid: number
  rid: number
  to_user: {
    uid: number
    name: string
  }
}>()

// 定义父组件 emits
const emits = defineEmits<{
  getCommentEmits: [newComment: TopicComment]
}>()

// 使用评论的 store
const { commentDraft } = storeToRefs(useKUNGalgameTopicStore())

// 评论的内容
const commentValue = ref('')

// 处理评论输入
const handleInputComment = () => {
  // 创建一个防抖处理函数
  const debouncedUpdateContent = debounce(() => {
    commentDraft.value.content = commentValue.value
  }, 1007)

  // 调用防抖处理函数，会在延迟时间内只执行一次更新操作
  debouncedUpdateContent()
}

// 保存评论信息
const saveComment = () => {
  commentDraft.value.tid = tid
  commentDraft.value.rid = rid
  commentDraft.value.c_uid = uid.value
  commentDraft.value.to_uid = to_user.uid
  commentDraft.value.content = commentValue.value
}

// 检查评论是否合法
const isValidComment = () => {
  // 评论内容为空警告
  if (!commentDraft.value.content.trim()) {
    message('Comment content cannot be empty!', '评论内容不能为空！', 'warn')
    return false
  }

  // 评论内容超出限制警告
  if (commentDraft.value.content.trim().length > 1007) {
    message(
      'The maximum length for comments should not exceed 1007 characters.',
      '评论最大长度不可超过1007个字符',
      'warn'
    )
    return false
  }

  return true
}

// 挂载时初始化评论信息
onMounted(() => {
  // 首先重置评论内容
  useKUNGalgameTopicStore().resetCommentDraft()
})

// 发布评论
const handlePublishComment = async () => {
  // 保存当前的回复内容
  saveComment()

  if (isValidComment()) {
    // 获取新评论
    const newComment = (await useKUNGalgameTopicStore().postNewComment()).data

    // 发表完毕还原回复内容
    useKUNGalgameTopicStore().resetCommentDraft()

    // 将新的评论内容给父组件
    emits('getCommentEmits', newComment)

    // 提醒用户
    message('Comment publish successfully!', '评论发布成功', 'success')
  }
}

// 关闭评论面板
const handleCloseCommentPanel = () => {
  commentDraft.value.isShowCommentPanelRid = 0
}
</script>

<template>
  <div class="panel" v-if="commentDraft.isShowCommentPanelRid === rid">
    <div class="top">
      <div class="title">
        <span>{{ name }}</span>
        <span>{{ $tm('topic.content.comment') }}</span>
        <span>{{ to_user.name }}</span>
      </div>
      <div class="confirm">
        <button @click="handlePublishComment">
          {{ $tm('topic.content.publish') }}
        </button>
        <button @click="handleCloseCommentPanel">
          {{ $tm('topic.content.close') }}
        </button>
      </div>
    </div>
    <!-- textarea 容器 -->
    <div class="container">
      <textarea
        name="comment"
        :placeholder="`${$tm('topic.content.hint')}`"
        rows="5"
        v-model="commentValue"
        @input="handleInputComment"
      >
      </textarea>

      <!-- 文字计数 -->
      <div class="count">{{ commentValue.length }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 评论区输入的弹出容器 */
.panel {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.top {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: var(--kungalgame-font-color-3);
  padding: 10px 0;
}

.title {
  display: flex;
  flex-wrap: wrap;
  span {
    padding-bottom: 5px;
    &:nth-child(2) {
      margin: 0 5px;
    }
    &:nth-child(3) {
      cursor: pointer;
      color: var(--kungalgame-blue-4);
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.confirm {
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    cursor: pointer;
    transition: all 0.2s;
    color: var(--kungalgame-blue-4);
    padding: 2px 7px;
    border: 1px solid var(--kungalgame-blue-4);
    border-radius: 5px;
    background-color: var(--kungalgame-trans-white-5);
    &:hover {
      background-color: var(--kungalgame-blue-4);
      color: var(--kungalgame-white);
    }
    &:nth-child(2) {
      margin-left: 5px;
    }
  }
}

.container {
  position: relative;
  display: flex;
  textarea {
    color: var(--kungalgame-font-color-3);
    flex: 1;
    margin-bottom: 20px;
    width: 100%;
    border: 1px solid var(--kungalgame-blue-4);
    background-color: var(--kungalgame-trans-white-9);
    border-radius: 5px;
    padding: 5px;
    &:focus {
      border: 1px solid var(--kungalgame-pink-3);
    }
  }
}

.count {
  position: absolute;
  bottom: 0;
  right: 0;
  color: var(--kungalgame-font-color-1);
}
</style>
