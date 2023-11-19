<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import Topic from './components/Topic.vue'

import { useTempTechniqueStore } from '@/store/temp/technique'
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

import type { TechniqueTopic } from '@/api'

const topics = ref<TechniqueTopic[]>([])

const { page } = storeToRefs(useTempTechniqueStore())
const { showKUNGalgamePageWidth } = storeToRefs(useKUNGalgameSettingsStore())

const techniquePageWidth = computed(() => {
  return showKUNGalgamePageWidth.value.Technique + '%'
})

const getTopics = async () => {
  return (await useTempTechniqueStore().getTopics()).data
}

watch(
  () => page.value,
  async () => {
    topics.value = await getTopics()
  }
)

onMounted(async () => {
  useTempTechniqueStore().resetPageStatus()
  topics.value = await getTopics()
})
</script>

<template>
  <div class="root">
    <div class="content">
      <!-- TODO: -->
      <div style="margin: auto">
        {{ $tm('technique.KKKKK') }}
      </div>

      <div class="container">
        <Topic :topics="topics" />
      </div>

      <div class="next">
        <span v-if="page > 1" @click="page--">
          {{ $tm('technique.prev') }}
        </span>
        <span v-if="topics.length === 10" @click="page++">
          {{ $tm('technique.next') }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: calc(100vh - 65px);
  display: flex;
  flex-direction: column;
}

.content {
  padding: 5px;
  height: 100%;
  transition: width 0.2s;
  width: v-bind(techniquePageWidth);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: var(--kungalgame-trans-white-5);
  color: var(--kungalgame-font-color-3);
  border: 1px solid var(--kungalgame-trans-blue-2);
  border-radius: 5px;
  overflow-y: scroll;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 10px;
}

.next {
  display: flex;
  justify-content: center;
  padding: 10px 0;

  span {
    font-size: 20px;
    cursor: pointer;
    color: var(--kungalgame-blue-4);
    border-bottom: 2px solid var(--kungalgame-trans-white-9);

    &:first-child {
      margin-right: 20px;
    }

    &:hover {
      border-bottom: 2px solid var(--kungalgame-blue-4);
    }
  }
}

@media (max-width: 1000px) {
  .aside {
    display: none;
  }
  .article {
    margin-left: 0;
  }
  .content {
    padding: 0;
  }
}
</style>
