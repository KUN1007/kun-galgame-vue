<!-- 先放一个 Layout 在这里，后面应该用得到 -->
<script setup lang="ts">
// 导入动画
import 'animate.css'

import { currBackground } from '@/hooks/useBackgroundPicture'

import KUNGalgameTopBar from '@/components/TopBar/KUNGalgameTopBar.vue'
</script>

<template>
  <!-- #default 是 v-slot 的简写，route 就是路由，Component 是一个 v-node -->
  <div class="app" :style="{ backgroundImage: currBackground }">
    <div class="top-bar">
      <KUNGalgameTopBar />
    </div>
    <!-- <RouterView /> -->
    <RouterView #default="{ route, Component }">
      <Transition
        :enter-active-class="`animate__animated ${route.meta.transition}`"
      >
        <component :is="Component"></component>
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
