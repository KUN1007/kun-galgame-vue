<script setup lang="ts">
import SearchBox from './SearchBox.vue'
import SearchHistory from './SearchHistory.vue'

const props = defineProps<{
  isShowSearch: boolean
}>()
</script>

<template>
  <Teleport to="body" :disabled="props.isShowSearch">
    <Transition name="search">
      <div class="mask" v-if="!props.isShowSearch">
        <div class="container">
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
  color: var(--kungalgame-font-color-3);
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  position: relative;
  color: var(--kungalgame-font-color-3);
}
</style>
