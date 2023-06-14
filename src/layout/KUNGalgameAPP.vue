<script setup lang="ts">
// 导入通知和提示组件
import Alert from '@/components/KUNGalgameAlert/Alert.vue'
import Info from '@/components/KUNGalgameAlert/Info.vue'

// 导入动画
import 'animate.css'

import { currBackground } from '@/hooks/useBackgroundPicture'
</script>

<template>
  <!-- #default 是 v-slot 的简写，route 就是路由，Component 是一个 v-node -->
  <div class="app" :style="{ backgroundImage: currBackground }">
    <!-- 全局警告组件 -->
    <Alert />

    <!-- 全局通知组件 -->
    <Info />

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
}
</style>
