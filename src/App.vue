<!-- App -->
<script setup lang="ts">
import 'animate.css'
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
  <!-- #default 是 v-slot 的简写，route 就是路由，Component 是一个 v-node -->
  <!-- <router-view #default="{ route, Component }">
    <transition
      :enter-active-class="`animate__animated ${route.meta.transition}`"
    >
      <component :is="Component"></component>
    </transition>
  </router-view> -->
  <RouterView />
  <!-- <Login /> -->
</template>

<style scoped></style>
