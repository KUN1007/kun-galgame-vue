<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'
import Topic from './components/Topic.vue'
import Bar from './components/Bar.vue'

import { useTempPoolStore } from '@/store/temp/pool'
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

import type { PoolTopic } from '@/api'

const topics = ref<PoolTopic[]>([])

const { showKUNGalgamePageWidth } = storeToRefs(useKUNGalgameSettingsStore())

const poolPageWidth = computed(() => {
  return showKUNGalgamePageWidth.value.Pool + '%'
})

const getTopics = async () => {
  return (await useTempPoolStore().getTopics()).data
}

onMounted(async () => {
  topics.value = await getTopics()
})
</script>

<template>
  <div class="pool">
    <div class="pool-container">
      <div class="topic-container">
        <Topic
          v-for="(kun, index) in topics"
          :key="index"
          class="item"
          :topic="kun"
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

@media (max-width: 700px) {
  .pool-container {
    width: 100%;
  }

  .topic-container {
    grid-template-columns: repeat(2, minmax(100px, 222px));
    grid-auto-rows: minmax(100px, 300px);
  }
}
</style>
