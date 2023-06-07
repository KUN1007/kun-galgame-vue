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

import { currBackground } from '@/hooks/useBackgroundPicture'
</script>

<template>
  <!-- #default 是 v-slot 的简写，route 就是路由，Component 是一个 v-node -->
  <div class="app" :style="{ backgroundImage: currBackground }">
    <!-- <RouterView /> -->
    <RouterView #default="{ route, Component }">
      <transition
        :enter-active-class="`animate__animated ${route.meta.transition}`"
      >
        <component :is="Component"></component>
      </transition>
    </RouterView>
  </div>
</template>

<style lang="scss" scoped>
.app {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-color: var(--kungalgame-white);
  min-width: 900px;
}
</style>