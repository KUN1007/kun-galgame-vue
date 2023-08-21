<script setup lang="ts">
import { useKUNGalgameMessageStore } from '@/store/modules/message'
import { toRaw } from 'vue'
// 导入编辑帖子的 store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
import { storeToRefs } from 'pinia'

const topicData = storeToRefs(useKUNGalgameEditStore())

const info = useKUNGalgameMessageStore()

const handlePublish = async () => {
  const res = await info.alert('AlertInfo.edit.publish', true)
  // TODO:
  // 这里实现用户的点击确认取消逻辑
  if (res) {
    // 坑，storeToRefs 不等于 vue 中的 ref 或者 reactive，不能用 toRaw
    const a = toRaw(useKUNGalgameEditStore().$state)

    // 发送给后端的数据
    console.log(JSON.stringify(a))

    info.info('AlertInfo.edit.publishSuccess')
    // 清除数据，并不再保存数据，因为此时该话题已被发布，这里使用 pinia 自带的 $reset 重置状态
    useKUNGalgameEditStore().$reset()
  } else {
    info.info('AlertInfo.edit.publishCancel')
  }
}

const handleSave = () => {
  // 这个值为 true 的时候每次页面加载的时候都会预加载上一次的话题数据
  topicData.isSave.value = true
  info.info('AlertInfo.edit.draft')
}
</script>

<template>
  <!-- 按钮的容器 -->
  <div class="btn-container">
    <!-- 确认按钮 -->

    <button class="confirm-btn" @click="handlePublish">确认发布</button>

    <!-- 保存按钮 -->
    <button class="save-btn" @click="handleSave">保存草稿</button>
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
</style>
./Category
