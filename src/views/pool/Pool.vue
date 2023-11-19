<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'
import Topic from './components/Topic.vue'
import Bar from './components/Bar.vue'

import { useTempPoolStore } from '@/store/temp/pool'
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

import type { PoolTopic } from '@/api'

const topics = ref<PoolTopic[]>([])

const { page, sortField, sortOrder } = storeToRefs(useTempPoolStore())
const { showKUNGalgamePageWidth } = storeToRefs(useKUNGalgameSettingsStore())
const isLoadingComplete = ref(false)

const poolPageWidth = computed(() => {
  return showKUNGalgamePageWidth.value.Pool + '%'
})

const getTopics = async () => {
  return (await useTempPoolStore().getTopics()).data
}

watch(
  () => [sortField.value, sortOrder.value],
  async () => {
    isLoadingComplete.value = false
    useTempPoolStore().resetPageStatus()
    topics.value = await getTopics()
  }
)

const handleLoadTopics = async () => {
  if (isLoadingComplete.value) {
    return
  }

  page.value++
  const newTopicData = await getTopics()

  if (newTopicData.length < 10) {
    isLoadingComplete.value = true
  }
  topics.value = [...topics.value, ...newTopicData]
}

onMounted(async () => {
  useTempPoolStore().resetPageStatus()
  topics.value = await getTopics()

  if (topics.value.length < 10) {
    isLoadingComplete.value = true
  }
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

      <div class="load">
        <span v-if="!isLoadingComplete" @click="handleLoadTopics">
          {{ $tm('pool.load') }}
        </span>

        <span v-else-if="isLoadingComplete">
          {{ $tm('pool.complete') }}
        </span>
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
  transition: width 0.2s;
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

.load {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;

  span {
    font-size: 20px;
    cursor: pointer;
    color: var(--kungalgame-blue-4);
    border-bottom: 2px solid var(--kungalgame-trans-white-9);

    &:hover {
      border-bottom: 2px solid var(--kungalgame-blue-4);
    }
  }
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
