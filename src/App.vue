<!-- App -->
<script setup lang="ts">
import { defineAsyncComponent, onBeforeMount } from 'vue'
// Import notification and alert components
import Alert from '@/components/alert/Alert.vue'
import Info from '@/components/alert/Info.vue'

// Import human verification component
const Capture = defineAsyncComponent(
  () => import('@/components/capture/Capture.vue')
)
const KUNGalgameSearchBox = defineAsyncComponent(
  () => import('@/components/search/KUNGalgameSearchBox.vue')
)

import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

// Use the settings panel store
const { showKUNGalgameMode, showKUNGalgameFontStyle } = storeToRefs(
  useKUNGalgameSettingsStore()
)

// Lifecycle functions must be called here to initialize the theme and font
onBeforeMount(() => {
  const theme = showKUNGalgameMode.value
  const font = showKUNGalgameFontStyle.value

  // restore saved theme status
  if (theme) {
    document.documentElement.className = theme
  }
  // restore saved font settings
  if (font) {
    document.documentElement.style.fontFamily = font
  }
})
</script>

<template>
  <!-- Global alert component -->
  <Alert />

  <!-- Global info component -->
  <Info />

  <!-- Global capture component -->
  <Capture />

  <!-- Global search component -->
  <KUNGalgameSearchBox />

  <RouterView />
</template>

<style lang="scss" scoped></style>
