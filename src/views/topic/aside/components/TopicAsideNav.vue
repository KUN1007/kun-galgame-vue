<!-- 
  This is the functional area of the topic section, including functions like scrolling back to the top.
-->
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { asideNavItem } from './asideNavItem'

import { useTempReplyStore } from '@/store/temp/topic/reply'
import { storeToRefs } from 'pinia'

const { isScrollToTop, replyRequest } = storeToRefs(useTempReplyStore())

const handleSortReply = (sortField: string) => {
  useTempReplyStore().resetPageStatus()
  replyRequest.value.sortField = sortField
}

const orderAscending = () => {
  useTempReplyStore().resetPageStatus()
  replyRequest.value.sortOrder = 'asc'
}

const orderDescending = () => {
  useTempReplyStore().resetPageStatus()
  replyRequest.value.sortOrder = 'desc'
}

const handleBackToTop = () => {
  useTempReplyStore().resetPageStatus()
  isScrollToTop.value = true
}
</script>

<template>
  <div class="nav">
    <!-- Interactive area container -->
    <div class="item">
      <span @click="handleBackToTop">
        <Icon class="icon" icon="line-md:arrow-close-up" />{{
          $tm('topic.aside.top')
        }}
      </span>
      <span
        v-for="kun in asideNavItem"
        :key="kun.index"
        @click="handleSortReply(kun.sortField)"
      >
        <Icon class="icon" :icon="kun.icon" />{{
          $tm(`topic.aside['${kun.name}']`)
        }}
      </span>
    </div>
    <div class="sort-order">
      <span @click="orderAscending">
        <Icon icon="tdesign:order-ascending" />
      </span>
      <span @click="orderDescending">
        <Icon icon="tdesign:order-descending" />
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid var(--kungalgame-trans-blue-4);
  background-color: var(--kungalgame-trans-blue-0);
  box-shadow: var(--shadow);
  border-radius: 5px;
  margin-bottom: 17px;
  overflow: hidden;

  .item {
    flex-grow: 1;
    display: flex;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    & > span {
      height: 40px;
      padding: 0 11px;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      white-space: nowrap;
      cursor: pointer;
      font-size: 15px;

      &:nth-child(1) {
        color: var(--kungalgame-blue-4);
      }

      &::before {
        transform: scaleX(0);
        transform-origin: bottom right;
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        inset: 0 0 0 0;
        background-color: var(--kungalgame-red-4);
        z-index: -1;
        transition: transform 0.3s ease;
      }

      &:hover::before {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
}

.icon {
  margin-right: 4px;
  font-size: 17px;
}

.sort-order {
  width: 100%;
  display: flex;
  cursor: default;

  span {
    height: 27px;
    color: var(--kungalgame-blue-4);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;

    &:hover {
      transition: all 0.2s;
      color: var(--kungalgame-red-4);
    }
  }
}
</style>
