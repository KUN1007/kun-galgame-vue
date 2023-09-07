<!-- KUNGalgame 通用切换按钮 -->

<script setup lang="ts">
import { watch } from 'vue'
// 导入编辑界面 store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
import { storeToRefs } from 'pinia'

// 使用编辑界面的 store
const settingsStore = useKUNGalgameEditStore()
const { isShowHotKeywords } = storeToRefs(settingsStore)

// 监听 store 中的状态变化，保持按钮状态与 store 同步
watch(isShowHotKeywords, (newValue) => {
  isShowHotKeywords.value = newValue
})
</script>

<template>
  <input type="checkbox" id="switch" v-model="isShowHotKeywords" /><label
    for="switch"
    >Toggle</label
  >
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
