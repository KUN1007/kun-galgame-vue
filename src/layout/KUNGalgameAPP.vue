<!-- 先放一个 Layout 在这里，后面应该用得到 -->
<script setup lang="ts">
import { onMounted, watch, ref } from 'vue'
// 导入动画
import 'animate.css'
import { getCurrentBackground } from '@/hooks/useBackgroundPicture'
import KUNGalgameTopBar from '@/components/top-bar/KUNGalgameTopBar.vue'

import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

const { showKUNGalgameBackground, showKUNGalgameCustomBackground } =
  storeToRefs(useKUNGalgameSettingsStore())

const imageURL = ref('')

onMounted(async () => {
  imageURL.value = await getCurrentBackground()
})

watch(
  () => [showKUNGalgameBackground.value, showKUNGalgameCustomBackground.value],
  async () => {
    imageURL.value = await getCurrentBackground()
  }
)
</script>

<template>
  <!-- #default 是 v-slot 的简写，route 就是路由，Component 是一个 v-node -->
  <div class="app" :style="{ backgroundImage: `url(${imageURL})` }">
    <div class="top-bar">
      <KUNGalgameTopBar />
    </div>
    <!-- <RouterView /> -->
    <RouterView #default="{ route, Component }">
      <Transition
        :enter-active-class="`animate__animated ${route.meta.transition}`"
      >
        <!-- 坑！这里必须要加 key，不然同一界面 vue router 会识别不出来页面的更新，导致页面不刷新 -->
        <component :is="Component" :key="route.fullPath"></component>
      </Transition>
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
}

.top-bar {
  position: sticky;
  top: 0;
  z-index: 1007;
}
</style>
