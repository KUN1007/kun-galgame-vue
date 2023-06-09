<script setup lang="ts">
import KUNGalgameAlert from '@/components/KUNGalgameAlert/KUNGalgameAlert.vue'

import { props } from '@/components/KUNGalgameAlert/types'

import { type Ref, provide, ref } from 'vue'

// 如果用户点击确定或者取消处理的函数
const getAlertValue = (value: boolean) => {
  // 这里待定 TODO:
  console.log(value)
}

const alert: props = {
  info: 'AlertInfo.publish',
  isShowCancel: true,
  status: getAlertValue,
}

const info: props = {
  info: 'AlertInfo.draft',
  isShowCancel: true,
}

provide('alert', alert)
provide('info', info)

interface Button {
  index: number
  name: string
  isActive: Ref<boolean>
}

const button: Button[] = [
  {
    index: 1,
    name: 'galgame',
    isActive: ref(false),
  },
  {
    index: 2,
    name: '技术交流',
    isActive: ref(false),
  },
  {
    index: 3,
    name: '其它',
    isActive: ref(false),
  },
]

const buttonStatus = ref(false)
</script>

<template>
  <!-- 话题分类的容器 -->
  <div class="topic-group">
    <div>点击选择帖子的分区（可多选）:</div>
    <!-- 分类容器的按钮集合 -->
    <div class="group-btn" :class="buttonStatus ? 'selected-btn' : ''">
      <button
        class="btn"
        v-for="kun in button"
        :key="kun.index"
        @click="kun.isActive.value = !kun.isActive.value"
        :class="{ active: kun.isActive.value }"
      >
        {{ kun.name }}
      </button>
    </div>
  </div>
  <!-- 按钮的容器 -->
  <div class="btn-container">
    <!-- 确认按钮 -->

    <KUNGalgameAlert :type="'alert'">
      <button class="confirm-btn">确认发布</button>
    </KUNGalgameAlert>
    <!-- 保存按钮 -->
    <KUNGalgameAlert :type="'info'">
      <button class="save-btn">保存草稿</button>
    </KUNGalgameAlert>
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
  color: var(--kungalgame-orange-4);
  background-color: var(--kungalgame-trans-orange-1);
  border: 1px solid var(--kungalgame-orange-4);
}
.save-btn:hover {
  background-color: var(--kungalgame-orange-4);
  transition: 0.1s;
}
.save-btn:active {
  background-color: var(--kungalgame-orange-2);
  transform: scale(0.8);
}

/* 被选中按钮的样式 */
.active {
  transition: 0.2s;
  background-color: var(--kungalgame-blue-4);
  color: var(--kungalgame-white);
}
</style>
