<script setup lang="ts">
// 全局消息组件（底部）
import { useKUNGalgameMessageStore } from '@/store/modules/message'
// 全局消息组件（顶部）
import message from '@/components/alert/Message'
// 导入话题页面 store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
// 回复临时数据
import { useTempReplyStore } from '@/store/temp/reply'
import { storeToRefs } from 'pinia'
// 回复重新编辑响应的临时数据
import { useTempReplyRewriteStore } from '@/store/temp/replyRewrite'

const { rid, replyContent, tags, edited } = storeToRefs(
  useTempReplyRewriteStore()
)
// 使用话题页面的 store
const { isShowAdvance, replyDraft, replyRewrite, isEdit } = storeToRefs(
  useKUNGalgameTopicStore()
)

const messageStore = useKUNGalgameMessageStore()

// 检查回复是否合法
const isValidReply = () => {
  const count = replyDraft.value.textCount
  return count && count < 10007
}

// 发布回复的函数
const publishReply = async () => {
  if (isValidReply()) {
    // 重置页数，是否加载等页面状态
    useKUNGalgameTopicStore().resetPageStatus()
    // 发布回复
    const responseData = await useKUNGalgameTopicStore().postNewReply()

    if (responseData.code === 200) {
      // 保存新回复的数据
      useTempReplyStore().tempReply = responseData.data
      // 取消保存
      useKUNGalgameTopicStore().resetReplyDraft()
      // 关闭面板
      isEdit.value = false
      // 发布成功提示
      message('Publish reply successfully!', '发布回复成功！', 'success')
    } else {
      message('Publish reply failed!', '发布回复失败！', 'error')
    }
  } else {
    message('Reply content cannot be empty!', '回复内容不能为空！', 'warn')
  }
}

// 点击发布回复
const handlePublish = async () => {
  const res = await messageStore.alert('AlertInfo.edit.publish', true)
  // 这里实现用户的点击确认取消逻辑
  if (res) {
    publishReply()
  } else {
    // 取消发布提示
    message('Cancel publish reply', '取消发布回复', 'info')
  }
}

// 保存重新编辑的话题，临时保存，因为页面重新加载会自动返回后端数据，这样保存不用请求后端接口
const saveRewriteReply = () => {
  rid.value = replyRewrite.value.rid
  replyContent.value = replyRewrite.value.content
  tags.value = replyRewrite.value.tags
  edited.value = Date.now()
}

// 重新编辑
const handleRewrite = async () => {
  const res = await messageStore.alert('AlertInfo.edit.rewrite', true)
  // 这里实现用户的点击确认取消逻辑
  if (res) {
    // 更新话题
    const responseData = await useKUNGalgameTopicStore().updateReply()

    if (responseData.code === 200) {
      // 改变发布状态，前端会新增回复的数据

      message('Reply rewrite successfully', '回复重新编辑成功', 'success')
      // 保存新话题的数据，实际上就是草稿的数据
      saveRewriteReply()

      // 清除数据，因为此时该回复已被更新
      useKUNGalgameTopicStore().resetRewriteTopicData()
      // 关闭面板
      isShowAdvance.value = false
      isEdit.value = false
    } else {
      message('Reply rewrite failed!', '回复重新编辑失败！', 'error')
    }
  }
}

// 点击保存话题
const handleSave = () => {
  // 设置保存为 true
  replyDraft.value.isSaveReply = true
  // 这里实现用户的保存逻辑
  message(
    'The draft has been saved successfully!',
    '草稿已经保存成功',
    'success'
  )
}

// 显示高级编辑模式
const handleShowAdvance = () => {
  isShowAdvance.value = !isShowAdvance.value
}
</script>

<template>
  <!-- 按钮的容器 -->
  <div class="btn-container">
    <!-- 高级选项按钮 -->
    <button class="advance-btn" @click="handleShowAdvance">高级选项</button>

    <!-- 确认按钮 -->
    <button
      v-if="!replyRewrite.isReplyRewriting"
      class="confirm-btn"
      @click="handlePublish"
    >
      确认发布
    </button>

    <!-- 重新编辑 -->
    <button
      v-if="replyRewrite.isReplyRewriting"
      class="rewrite-btn"
      @click="handleRewrite"
    >
      确认 Rewrite
    </button>

    <!-- 保存按钮 -->
    <button class="save-btn" @click="handleSave">保存草稿</button>
  </div>
</template>

<style lang="scss" scoped>
/* 按钮的容器 */
.btn-container {
  padding: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
/* 单个按钮的样式 */
.btn-container button {
  margin: 10px 0;
  height: 40px;
  width: 150px;
  font-size: 17px;
  white-space: nowrap;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s;
  &:hover {
    color: var(--kungalgame-white);
  }
}

/* 确认按钮的样式 */
.confirm-btn {
  color: var(--kungalgame-blue-4);
  background-color: var(--kungalgame-trans-white-9);
  border: 1px solid var(--kungalgame-blue-4);
}
.confirm-btn:hover {
  background-color: var(--kungalgame-blue-4);
  transition: 0.1s;
}
.confirm-btn:active {
  background-color: var(--kungalgame-blue-3);
  transform: scale(0.8);
}

/* 重新编辑按钮的样式 */
.rewrite-btn {
  color: var(--kungalgame-red-4);
  background-color: var(--kungalgame-trans-white-9);
  border: 1px solid var(--kungalgame-red-4);
}
.rewrite-btn:hover {
  background-color: var(--kungalgame-red-4);
  transition: 0.1s;
}
.rewrite-btn:active {
  background-color: var(--kungalgame-red-3);
  transform: scale(0.8);
}

/* 保存按钮的样式 */
.save-btn {
  color: var(--kungalgame-pink-4);
  background-color: var(--kungalgame-trans-white-9);
  border: 1px solid var(--kungalgame-pink-4);
}
.save-btn:hover {
  background-color: var(--kungalgame-pink-4);
  transition: 0.1s;
}
.save-btn:active {
  background-color: var(--kungalgame-pink-3);
  transform: scale(0.8);
}

/* 高级选项按钮的样式 */
.advance-btn {
  color: var(--kungalgame-purple-4);
  background-color: var(--kungalgame-trans-white-9);
  border: 1px solid var(--kungalgame-purple-4);
}
.advance-btn:hover {
  background-color: var(--kungalgame-purple-4);
  transition: 0.1s;
}
.advance-btn:active {
  background-color: var(--kungalgame-purple-4);
  transform: scale(0.8);
}

/* 适配手机端 */
@media (max-width: 700px) {
  .advance-btn {
    display: none;
  }
}
</style>
