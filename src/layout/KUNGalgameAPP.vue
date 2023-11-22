<script setup lang="ts">
import { onMounted, watch, ref } from 'vue'
import 'animate.css'
import { getCurrentBackground } from '@/hooks/useBackgroundPicture'
import KUNGalgameTopBar from '@/components/top-bar/KUNGalgameTopBar.vue'

import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'
import { getImage } from '@/hooks/useLocalforage'

const { showKUNGalgameBackground, showKUNGalgameCustomBackground } =
  storeToRefs(useKUNGalgameSettingsStore())

const imageURL = ref('')

onMounted(async () => {
  const backgroundImageBlobData = await getImage('kun-galgame-custom-bg')
  if (showKUNGalgameBackground.value === 'bg1007' && backgroundImageBlobData) {
    showKUNGalgameCustomBackground.value = URL.createObjectURL(
      backgroundImageBlobData
    )
  }
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
  <!-- #default is shorthand for v-slot, route is the route, Component is a v-node -->
  <div class="app" :style="{ backgroundImage: `url(${imageURL})` }">
    <div class="top-bar">
      <KUNGalgameTopBar />
    </div>

    <RouterView #default="{ route, Component }">
      <Transition
        :enter-active-class="`animate__animated ${route.meta.transition}`"
      >
        <!-- ATTENTION! You must include a key here; otherwise
          , Vue Router won't recognize page updates for the same page
          , causing the page not to refresh -->
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
