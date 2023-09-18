<!-- KUNGalgame 通用切换按钮 -->

<script setup lang="ts">
import { watch, computed } from 'vue'
import { useRoute } from 'vue-router'
// 导入编辑界面 store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
// 导入回复的 store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

// 当前页面的路由
const route = useRoute()
// 当前页面路由的名字
const routeName = computed(() => route.name as string)

// 使用编辑界面的 store
const { isShowHotKeywords } = storeToRefs(useKUNGalgameEditStore())
// 话题界面的 store，用于回复
const { replyDraft } = storeToRefs(useKUNGalgameTopicStore())

// 监听 store 中的状态变化，保持按钮状态与 store 同步
watch(
  () => [isShowHotKeywords.value, replyDraft.value.isShowHotKeywords],
  ([newValue1, newValue2]) => {
    isShowHotKeywords.value = newValue1
    replyDraft.value.isShowHotKeywords = newValue2
  }
)
</script>

<template>
  <!-- 根据路由名绑定不同的 model -->
  <input
    v-if="routeName === 'Edit'"
    type="checkbox"
    id="switch"
    v-model="isShowHotKeywords"
  />
  <input
    v-if="routeName === 'Topic'"
    type="checkbox"
    id="switch"
    v-model="replyDraft.isShowHotKeywords"
  />
  <label for="switch"></label>
</template>

<style lang="scss" scoped>
input {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 47px;
  height: 24px;
  background: var(--kungalgame-trans-blue-2);
  display: block;
  border-radius: 100px;
  position: relative;
}

label:after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: var(--kungalgame-white);
  border-radius: 15px;
  transition: 0.3s;
}

input:checked + label {
  background: var(--kungalgame-blue-4);
}

input:checked + label:after {
  left: calc(100% - 2px);
  transform: translateX(-100%);
}

// centering
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
