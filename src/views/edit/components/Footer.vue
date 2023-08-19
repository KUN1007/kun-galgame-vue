<script setup lang="ts">
// 导入按钮
import Button from './Button.vue'

import { button } from './button'

import { ref } from 'vue'

const buttonStatus = ref(false)
</script>

<template>
  <!-- 话题分类的容器 -->
  <div class="topic-group">
    <div>点击选择话题的分区（可多选）:</div>
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

  <!-- 发布按钮 -->
  <Button />
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

/* 被选中按钮的样式 */
.active {
  transition: 0.2s;
  background-color: var(--kungalgame-blue-4);
  color: var(--kungalgame-white);
}
</style>
