<script setup lang="ts">
import SearchBox from './SearchBox.vue'
import SearchHistory from './SearchHistory.vue'

import { useTempHomeStore } from '@/store/temp/home'
import { storeToRefs } from 'pinia'
const { isShowSearch } = storeToRefs(useTempHomeStore())
</script>

<template>
  <Teleport to="body" :disabled="isShowSearch">
    <Transition name="search">
      <div class="mask" v-if="isShowSearch" @click="isShowSearch = false">
        <div class="container" @click.stop>
          <SearchBox />

          <SearchHistory />
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
  justify-content: center;
  align-items: start;
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
