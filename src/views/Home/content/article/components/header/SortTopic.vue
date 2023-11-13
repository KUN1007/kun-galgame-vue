<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

import { useTempHomeStore } from '@/store/temp/home'
import { storeToRefs } from 'pinia'

import { navSortItem } from './navSortItem'

const ascClass = ref('')

const { sortField, sortOrder } = storeToRefs(useTempHomeStore())

const handleSortByField = (field: string) => {
  useTempHomeStore().resetPageStatus()
  sortField.value = field
}

const orderAscending = () => {
  useTempHomeStore().resetPageStatus()
  sortOrder.value = 'asc'
  // Change style
  ascClass.value = 'active'
}

const orderDescending = () => {
  useTempHomeStore().resetPageStatus()
  sortOrder.value = 'desc'
  ascClass.value = ''
}

const iconMap: Record<string, string> = {
  updated: 'line-md:arrows-vertical',
  time: 'eos-icons:hourglass',
  popularity: 'bi:fire',
  views: 'ic:outline-remove-red-eye',
  likes_count: 'line-md:thumbs-up-twotone',
  replies_count: 'ri:reply-line',
  comments: 'fa-regular:comment-dots',
}
</script>

<template>
  <div class="container" :class="ascClass">
    <span>{{ $tm('mainPage.header.filter') }}</span>
    <span class="filter">
      <Icon :icon="iconMap[sortField]" />
    </span>

    <!-- Secondary menu for sorting -->
    <div class="sort-container">
      <div class="sort-submenu">
        <div
          class="sort-item"
          v-for="kun in navSortItem"
          :key="kun.index"
          @click="handleSortByField(kun.sortField)"
        >
          <span><Icon class="icon-item" :icon="kun.icon" /></span>
          <span>{{ $tm(`mainPage.header.${kun.name}`) }}</span>
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
}

.container {
  background-color: var(--kungalgame-trans-blue-3);
  flex-grow: 1;
  border-radius: 5px 0 0 0;
  position: relative;
  border-right: 1px solid var(--kungalgame-trans-blue-4);
  cursor: pointer;

  &:hover {
    background-color: var(--kungalgame-trans-white-5);
  }
}

.sort-container {
  width: 100%;
  top: 100%;
  position: absolute;
}

.filter {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-left: 7px;
  color: var(--kungalgame-blue-4);
}

.sort-submenu {
  display: none;
  flex-direction: column;
  box-shadow: 1px 2px 1px 1px var(--kungalgame-trans-blue-4);
}

.container:hover .sort-submenu {
  display: flex;
}

.sort-item {
  padding: 10px 0;
  background-color: var(--kungalgame-trans-white-2);
  font-size: 14px;
  color: var(--kungalgame-font-color-3);
  text-decoration: none;
  display: flex;
  justify-content: space-around;

  &:hover {
    background-color: var(--kungalgame-trans-blue-1);
    backdrop-filter: blur(5px);
  }

  &:active {
    background-color: var(--kungalgame-trans-blue-2);
  }
}

.icon-item {
  color: var(--kungalgame-blue-4);
  padding-right: 3px;
  font-size: 20px;
}

.sort-order {
  width: 100%;
  padding: 10px 0;
  display: flex;
  cursor: default;
  background-color: var(--kungalgame-trans-white-2);

  span {
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

    &:nth-child(2) {
      border-left: 1px solid var(--kungalgame-trans-blue-4);
    }
  }
}
.active {
  background-color: var(--kungalgame-trans-red-3);

  .filter {
    color: var(--kungalgame-red-4);
  }
}

@media (max-width: 700px) {
  .sort-item {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      &:nth-child(1) {
        display: none;
      }
    }
  }
}
</style>
