<script setup lang="ts">
import { computed } from 'vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'
import Topic from './components/Topic.vue'
import Bar from './components/Bar.vue'

import { topic } from './components/topic'

import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

const settingsStore = useKUNGalgameSettingsStore()
const { showKUNGalgamePageWidth } = storeToRefs(settingsStore)
const poolPageWidth = computed(() => {
  return showKUNGalgamePageWidth.value.Pool + '%'
})
</script>

<template>
  <div class="pool">
    <div class="pool-container">
      <div class="topic-container">
        <Topic
          v-for="kun in topic"
          class="item"
          :key="kun.index"
          :data="kun"
          :class="`item-${kun.index}`"
        />
      </div>

      <KUNGalgameFooter />
    </div>

    <Bar />
  </div>
</template>

<style lang="scss" scoped>
.pool {
  height: calc(100vh - 65px);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}

.pool-container {
  transition: all 0.2s;
  width: v-bind(poolPageWidth);
  margin: 0 auto;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  backdrop-filter: blur(5px);
  background-color: var(--kungalgame-trans-white-5);
  border-radius: 5px;
  padding: 5px;
}

.topic-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: minmax(100px, 320px);
  gap: 10px;
}
</style>
