<!-- App -->
<script setup lang="ts">
// 导入通知和提示组件
import Alert from '@/components/KUNGalgameAlert/Alert.vue'
import Info from '@/components/KUNGalgameAlert/Info.vue'

import { onBeforeMount } from 'vue'
// 导入设置面板 store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

// 使用设置面板的 store
const settingsStore = useKUNGalgameSettingsStore()
const { showKUNGalgameMode } = storeToRefs(settingsStore)

// 必须在这里调用生命周期函数，初始化主题
onBeforeMount(() => {
  const theme = showKUNGalgameMode.value

  // 恢复保存的主题状态
  if (theme) {
    document.documentElement.className = theme
  }
})
</script>

<template>
  <!-- 全局警告组件 -->
  <Alert />

  <!-- 全局通知组件 -->
  <Info />
  <RouterView />
</template>

<style scoped></style>
