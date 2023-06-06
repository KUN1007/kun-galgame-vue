<script setup lang="ts">
import KUNGalgameTopBar from '@/components/KUNGalgameTopBar.vue'
import MainPageContent from './content/MainPageContent.vue'
import MainPageFooter from './footer/MainPageFooter.vue'

import { currBackground } from '@/hooks/useBackgroundPicture'
</script>

<template>
  <!-- 可视部分的容器 -->
  <div class="visual-wrapper" :style="{ backgroundImage: currBackground }">
    <KUNGalgameTopBar :isMainPage="true" />
    <MainPageContent />
    <MainPageFooter />
  </div>
</template>

<style lang="scss" scoped>
.visual-wrapper {
  height: 1500px;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: 800px;
  background-color: var(--kungalgame-white);
}
</style>
