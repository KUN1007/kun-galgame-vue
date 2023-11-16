<script setup lang="ts">
import { Icon } from '@iconify/vue'
import SortTopic from './SortTopic.vue'

import { useTempHomeStore } from '@/store/temp/home'
import { storeToRefs } from 'pinia'

import { categoryItem } from './navItem'

const { category } = storeToRefs(useTempHomeStore())

const handleSortByCategory = (name: string) => {
  useTempHomeStore().resetPageStatus()
  category.value = name
}

const iconMap: Record<string, string> = {
  galgame: 'icon-park-outline:game',
  technique: 'mingcute:tool-line',
  others: 'basil:other-1-outline',
}
</script>

<template>
  <div class="nav-article">
    <div class="category">
      <span>{{ $tm('mainPage.header.category') }}</span>
      <span><Icon :icon="iconMap[category]" /></span>

      <div class="category-container">
        <div class="category-submenu">
          <div
            class="item"
            v-for="(kun, _) in categoryItem"
            :key="kun.index"
            @click="handleSortByCategory(kun.name)"
          >
            <span><Icon class="icon-item" :icon="kun.icon" /></span>
            <span>
              {{ $tm(`mainPage.header.${kun.name}`) }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <SortTopic />

    <RouterLink to="/pool" class="more">
      <span>{{ $tm('mainPage.header.all') }}</span>
      <Icon class="all-topic" icon="line-md:chevron-triple-right" />
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.nav-article {
  width: 100%;
  height: 40px;
  display: flex;
  flex-shrink: 0;
  color: var(--kungalgame-font-color-3);
  z-index: 1;
}

.category {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1px;
  flex-grow: 1;
  position: relative;
  background-color: var(--kungalgame-trans-white-5);
  border-radius: 5px;
  cursor: pointer;

  & > span:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    margin-left: 7px;
    color: var(--kungalgame-blue-4);
  }
}

.category-container {
  width: 100%;
  top: 40px;
  position: absolute;
}

.category-submenu {
  display: none;
  flex-direction: column;
  background-color: var(--kungalgame-trans-white-2);
  box-shadow: var(--shadow);
  border-radius: 5px;

  .item {
    padding: 10px 0;
    font-size: 14px;
    color: var(--kungalgame-font-color-3);
    text-decoration: none;
    display: flex;
    justify-content: space-around;
    cursor: pointer;

    &:hover {
      background-color: var(--kungalgame-trans-blue-1);
      backdrop-filter: blur(5px);
    }

    &:active {
      background-color: var(--kungalgame-trans-blue-2);
    }

    .icon-item {
      color: var(--kungalgame-blue-4);
      padding-right: 3px;
      font-size: 20px;
    }

    &:first-child {
      border-radius: 5px 5px 0 0;
    }

    &:last-child {
      border-radius: 0 0 5px 5px;
    }
  }
}

.category:hover .category-submenu {
  display: flex;
}

.more {
  height: 100%;
  width: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background-color: var(--kungalgame-trans-blue-3);
  flex-grow: 1;
  border-radius: 0 5px 0 0;
  cursor: pointer;
  color: var(--kungalgame-font-color-3);
  margin-left: 10px;

  &:hover {
    background-color: var(--kungalgame-trans-blue-2);
  }

  &:active {
    background-color: var(--kungalgame-trans-blue-4);
  }
}

.all-topic {
  font-size: 18px;
  margin-left: 7px;
}

@media (max-width: 1000px) {
  .more {
    display: none;
  }
}
</style>
