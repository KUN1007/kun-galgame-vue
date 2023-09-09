<script setup lang="ts">
// 全局消息组件（底部）
import { useKUNGalgameMessageStore } from '@/store/modules/message'
// 全局消息组件（顶部）
import message from '@/components/alert/Message'
// Vue 函数
import { toRaw } from 'vue'
// 导入编辑帖子的 store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
// 导入用户 store
import { useKUNGalgamerStore } from '@/store/modules/kungalgamer'
import { storeToRefs } from 'pinia'
// 导入路由
import { useRouter } from 'vue-router'
// 导入请求数据格式
import {
  EditCreateTopicRequestData,
  EditCreateTopicResponseData,
} from '@/api/index'

const router = useRouter()

const { content, isSave } = storeToRefs(useKUNGalgameEditStore())

const messageStore = useKUNGalgameMessageStore()

const checkPublish = (topicData: EditCreateTopicRequestData) => {
  if (!topicData.title.trim()) {
    // 标题为空的话，警告
    message('Title cannot be empty!', '标题不可为空！', 'warn')
    return false
  } else if (!content.value.trim()) {
    // 内容为空的话，警告
    message('Content cannot be empty!', '内容不可为空！', 'warn')
    return false
  } else if (topicData.tags.length === 0) {
    message('Please use at least one tag!', '请至少使用一个标签！', 'warn')
  } else if (topicData.category.length === 0) {
    message(
      'Please select at least one category!',
      '请至少选择一个分类！',
      'warn'
    )
  } else {
    return true
  }
}

const handlePublish = async () => {
  const res = await messageStore.alert('AlertInfo.edit.publish', true)
  // 这里实现用户的点击确认取消逻辑
  if (res) {
    // 坑，storeToRefs 不等于 vue 中的 ref 或者 reactive，不能用 toRaw
    const rawData = toRaw(useKUNGalgameEditStore().$state)

    // 发送给后端的数据
    const topicToCreate = {
      title: rawData.title,
      content: rawData.content,
      time: Date.now(),
      tags: rawData.tags,
      category: rawData.category,
      uid: useKUNGalgamerStore().uid,
    }

    // 检查提交数据是否合法
    if (checkPublish(topicToCreate)) {
      // 后端返回的创建好的话题数据
      const createdTopic: EditCreateTopicResponseData =
        await useKUNGalgameEditStore().createNewTopic(topicToCreate)

      // 获取创建好话题的 tid
      const tid = createdTopic.data.tid

      // 将用户 push 进对应 tid 话题的详情页面
      router.push({
        name: 'Topic',
        params: {
          tid: tid,
        },
      })

      messageStore.info('AlertInfo.edit.publishSuccess')
      // 清除数据，并不再保存数据，因为此时该话题已被发布，这里使用 pinia 自带的 $reset 重置状态
      useKUNGalgameEditStore().$reset()
    }
  } else {
    messageStore.info('AlertInfo.edit.publishCancel')
  }
}

const handleSave = () => {
  // 这个值为 true 的时候每次页面加载的时候都会预加载上一次的话题数据
  isSave.value = true
  messageStore.info('AlertInfo.edit.draft')
}
</script>

<template>
  <!-- 按钮的容器 -->
  <div class="btn-container">
    <!-- 确认按钮 -->

    <button class="confirm-btn" @click="handlePublish">
      {{ $tm('edit.publish') }}
    </button>

    <!-- 保存按钮 -->
    <button class="save-btn" @click="handleSave">
      {{ $tm('edit.draft') }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
/* 按钮的容器 */
.btn-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* 距离最底端的距离 */
  margin-bottom: 20px;
}
/* 单个按钮的样式 */
.btn-container button {
  transition: all 0.2s;
  height: 40px;
  width: 200px;
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  flex-shrink: 0;
  &:hover {
    color: var(--kungalgame-white);
  }
}
/* 确认按钮的样式 */
.confirm-btn {
  color: var(--kungalgame-blue-4);
  background-color: var(--kungalgame-trans-blue-1);
  border: 1px solid var(--kungalgame-blue-4);
}
.confirm-btn:hover {
  background-color: var(--kungalgame-blue-4);
  transition: 0.1s;
}
/* 保存按钮的样式 */
.save-btn {
  color: var(--kungalgame-pink-4);
  background-color: var(--kungalgame-trans-pink-1);
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

@media (max-width: 700px) {
  .btn-container button {
    width: 150px;
    font-size: 17px;
  }
}
</style>
