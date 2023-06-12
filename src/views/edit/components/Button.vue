<script setup lang="ts">
import { useKUNGalgameMessageStore } from '@/store/modules/message'

const info = useKUNGalgameMessageStore()

import { button } from './button'

import { ref } from 'vue'

const buttonStatus = ref(false)

const handlePublish = async () => {
  const res = await info.alert('AlertInfo.publish', true)
  // TODO:
  // 这里实现用户的点击确认取消逻辑
  if (res) {
    info.info('AlertInfo.publishSuccess')
  } else {
    info.info('AlertInfo.publishCancel')
  }
}

const handleSave = () => {
  // TODO:
  // 这里实现用户的保存逻辑
  info.info('AlertInfo.draft')
}
</script>

<template>
  <!-- 话题分类的容器 -->
  <div class="topic-group">
    <div>点击选择帖子的分区（可多选）:</div>
    <!-- 分类容器的按钮集合 -->
    <div class="group-btn" :class="buttonStatus ? 'selected-btn' : ''">
      <span
        class="btn"
        v-for="kun in button"
        :key="kun.index"
        @click="kun.isActive.value = !kun.isActive.value"
        :class="{ active: kun.isActive.value }"
      >
        {{ kun.name }}
      </span>
    </div>
  </div>
  <!-- 按钮的容器 -->
  <div class="btn-container">
    <!-- 确认按钮 -->

    <button class="confirm-btn" @click="handlePublish">确认发布</button>

    <!-- 保存按钮 -->
    <button class="save-btn" @click="handleSave">保存草稿</button>
  </div>
</template>

<style lang="scss" scoped>
/* 话题分类的容器 */
.topic-group {
  width: 100%;
  margin: 10px 0;
}
/* 分类容器的按钮集合 */
.group-btn {
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
/* 单个按钮的样式 */
.btn {
  height: 30px;
  width: 20%;
  font-size: 17px;
  cursor: pointer;
  border: 1px solid var(--kungalgame-blue-1);
  background-color: var(--kungalgame-trans-blue-0);
  color: var(--kungalgame-blue-4);
  display: flex;
  justify-content: center;
  align-items: center;
}
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

/* 被选中按钮的样式 */
.active {
  transition: 0.2s;
  background-color: var(--kungalgame-blue-4);
  color: var(--kungalgame-white);
}
</style>
