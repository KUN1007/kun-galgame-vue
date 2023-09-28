<script setup lang="ts">
// 全局消息组件（底部）
import { useKUNGalgameMessageStore } from '@/store/modules/message'
// 全局消息组件（顶部）
import message from '@/components/alert/Message'
// 导入编辑话题的 store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
import { storeToRefs } from 'pinia'
// 导入路由
import { useRouter } from 'vue-router'

const router = useRouter()

const { isSaveTopic, topicRewrite } = storeToRefs(useKUNGalgameEditStore())
const messageStore = useKUNGalgameMessageStore()

// 发布话题
const handlePublish = async () => {
  const res = await messageStore.alert('AlertInfo.edit.publish', true)
  // 这里实现用户的点击确认取消逻辑
  if (res) {
    // 后端返回的创建好的话题数据
    const createdTopic = await useKUNGalgameEditStore().createNewTopic()

    if (createdTopic) {
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
      // 清除数据，并不再保存数据，因为此时该话题已被发布
      useKUNGalgameEditStore().resetTopicData()
    } else {
      message('Failed to create new topic', '发布话题失败', 'error')
    }
  } else {
    messageStore.info('AlertInfo.edit.publishCancel')
  }
}

// 重新编辑
const handleRewrite = async () => {
  const res = await messageStore.alert('AlertInfo.edit.rewrite', true)
  // 这里实现用户的点击确认取消逻辑
  if (res) {
    // 更新话题
    const res = await useKUNGalgameEditStore().rewriteTopic()

    console.log(res.data)

    // 获取创建好话题的 tid
    const tid = topicRewrite.value.tid

    // 将用户 push 进对应 tid 话题的详情页面
    router.push({
      name: 'Topic',
      params: {
        tid: tid,
      },
    })

    messageStore.info('AlertInfo.edit.rewriteSuccess')
    // 清除数据，并不再保存数据，因为此时该话题已被更新
    useKUNGalgameEditStore().resetRewriteTopicData()
  } else {
    messageStore.info('AlertInfo.edit.rewriteCancel')
  }
}

// 用户点击保存话题的逻辑
const handleSave = () => {
  // 这个值为 true 的时候每次页面加载的时候都会预加载上一次的话题数据
  isSaveTopic.value = true
  messageStore.info('AlertInfo.edit.draft')
}
</script>

<template>
  <!-- 按钮的容器 -->
  <div class="btn-container">
    <!-- 确认按钮 -->
    <button
      v-if="!topicRewrite.isTopicRewriting"
      class="confirm-btn"
      @click="handlePublish"
    >
      {{ $tm('edit.publish') }}
    </button>

    <!-- 重新编辑按钮 -->
    <button
      v-if="topicRewrite.isTopicRewriting"
      class="rewrite-btn"
      @click="handleRewrite"
    >
      {{ $tm('edit.rewrite') }}
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
  transition: 0.2s;
}

/* 重新编辑按钮的样式 */
.rewrite-btn {
  color: var(--kungalgame-red-4);
  background-color: var(--kungalgame-trans-red-1);
  border: 1px solid var(--kungalgame-red-4);
}
.rewrite-btn:hover {
  background-color: var(--kungalgame-red-4);
  transition: 0.2s;
}

/* 保存按钮的样式 */
.save-btn {
  color: var(--kungalgame-pink-4);
  background-color: var(--kungalgame-trans-pink-1);
  border: 1px solid var(--kungalgame-pink-4);
}
.save-btn:hover {
  background-color: var(--kungalgame-pink-4);
  transition: 0.2s;
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
