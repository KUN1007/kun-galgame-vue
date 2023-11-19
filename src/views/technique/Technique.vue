<script setup lang="ts">
import SingleTopic from './components/SingleTopic.vue'
import Pagination from './components/Pagination.vue'

import { ref, onBeforeMount } from 'vue'

const topics = ref()

onBeforeMount(async () => {
  try {
  } catch (error) {
    console.error('Error fetching topics:', error)
  }
})

import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const { showKUNGalgamePageWidth } = storeToRefs(useKUNGalgameSettingsStore())

const techniquePageWidth = computed(() => {
  return showKUNGalgamePageWidth.value.Technique + '%'
})
</script>

<template>
  <div class="root">
    <div class="content">
      <div class="article">
        <div class="article-container">
          <h1 style="margin: auto">This page is under development.</h1>

          <div class="topic" v-for="topic in topics" :key="topic.topicId">
            <SingleTopic :data="topic" />
          </div>
        </div>
        <Pagination />
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
  background-color: var(--kungalgame-trans-white-5);
  color: var(--kungalgame-font-color-3);
  border: 1px solid var(--kungalgame-trans-blue-2);
  border-radius: 5px;
}

.article {
  height: 100%;
  width: 1px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}

.article-container {
  height: 1px;
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-template-rows: repeat(5, 255px);
  gap: 10px;
}

.topic {
  width: 100%;
  height: 100%;
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
