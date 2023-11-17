<script setup lang="ts">
import { ref, watch } from 'vue'
import SearchBox from './SearchBox.vue'
import SearchHistory from './SearchHistory.vue'
import SearchResult from './SearchResult.vue'

import { useTempHomeStore } from '@/store/temp/home'
import { storeToRefs } from 'pinia'

import { HomeSearchTopic } from '@/api'

const { search, isShowSearch } = storeToRefs(useTempHomeStore())

const topics = ref<HomeSearchTopic[]>([])

const searchTopics = async () => {
  topics.value = (await useTempHomeStore().searchTopic()).data
}

watch(
  () => [
    search.value.keywords,
    search.value.category,
    search.value.sortField,
    search.value.sortOrder,
  ],
  async () => {
    await searchTopics()
  }
)
</script>

<template>
  <Teleport to="body" :disabled="isShowSearch">
    <Transition name="search">
      <div class="mask" v-if="isShowSearch" @click="isShowSearch = false">
        <div class="container" @click.stop>
          <SearchBox />

          <SearchHistory v-if="search.keywords" />

          <SearchResult :topics="topics" v-if="topics.length" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--kungalgame-mask-color-0);
  display: flex;
  transition: opacity 0.3s ease;
  justify-content: center;
  align-items: center;
  color: var(--kungalgame-font-color-3);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  position: relative;
  color: var(--kungalgame-font-color-3);
  background-color: var(--kungalgame-trans-white-2);
  box-shadow: var(--kungalgame-shadow-0);
  border-radius: 17px;
  padding: 10px;
  width: 40vw;
  max-width: 500px;
  min-height: 200px;
  max-height: 600px;
  overflow-y: scroll;
}

.search-enter-from {
  opacity: 0;
}

.search-leave-to {
  opacity: 0;
}

.search-enter-from .container,
.search-leave-to .container {
  transition: all 0.3s ease;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
