<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { useTempReplyStore } from '@/store/temp/topic/reply'
import { storeToRefs } from 'pinia'

import { asideItem, sortItem } from './asideItem'
import type { SortField, SortOrder } from './asideItem'

const { isScrollToTop, replyRequest } = storeToRefs(useTempReplyStore())

const handleSortReply = (sortField: SortField) => {
  useTempReplyStore().resetPageStatus()
  replyRequest.value.sortField = sortField
}

const handleClickSortOrder = (sortOrder: SortOrder) => {
  useTempReplyStore().resetPageStatus()
  replyRequest.value.sortOrder = sortOrder
}

const handleBackToTop = () => {
  isScrollToTop.value = true
}
</script>

<template>
  <Transition
    enter-active-class="animate__animated animate__slideInUp animate__faster"
    appear
  >
    <div class="item">
      <span
        v-for="kun in asideItem"
        :key="kun.index"
        @click="handleSortReply(kun.sortField)"
      >
        <Icon class="icon" :icon="kun.icon" />
      </span>

      <span
        class="sort"
        v-for="order in sortItem"
        :key="order.index"
        @click="handleClickSortOrder(order.sortOrder)"
      >
        <Icon class="icon" :icon="order.icon" />
      </span>

      <span class="top" @click="handleBackToTop">
        <Icon class="icon" icon="line-md:arrow-close-up" />
      </span>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--kungalgame-font-color-3);

  span {
    margin-top: 20px;

    &:hover {
      transition: color 0.2s;
      color: var(--kungalgame-blue-4);
    }

    &:last-child {
      margin-top: 50px;
    }
  }
  .sort {
    color: var(--kungalgame-blue-4);

    &:hover {
      color: var(--kungalgame-red-4);
    }
  }
}

.icon {
  font-size: 20px;
}
</style>
