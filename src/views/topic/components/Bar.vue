<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { useTempReplyStore } from '@/store/temp/topic/reply'
import { storeToRefs } from 'pinia'

const { isScrollToTop } = storeToRefs(useTempReplyStore())
</script>

<template>
  <div class="bar">
    <div class="top" @click="isScrollToTop = true">
      <Icon class="icon" icon="line-md:arrow-close-up" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bar {
  position: fixed;
  bottom: 50px;
  right: 17px;
  z-index: 7;
  display: flex;
  flex-direction: column;
}

.top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  box-shadow: var(--shadow);
  cursor: pointer;
  background-color: var(--kungalgame-trans-white-2);
  border: 1px solid var(--kungalgame-blue-1);
  color: var(--kungalgame-font-color-3);
  border-radius: 50%;

  .icon {
    font-size: 22px;
    color: var(--kungalgame-blue-4);
  }
}

.top {
  margin-top: 11px;
}
</style>
