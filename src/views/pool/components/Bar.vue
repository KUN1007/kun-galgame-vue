<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { useTempPoolStore } from '@/store/temp/pool'
import { storeToRefs } from 'pinia'

import { sortItem } from './sortItem'

const { sortField, sortOrder } = storeToRefs(useTempPoolStore())
</script>

<template>
  <div class="bar">
    <div class="sort">
      <div class="func">
        <div
          class="item"
          v-for="item in sortItem"
          :key="item.index"
          @click="sortField = item.field"
        >
          <Icon :icon="item.icon" />
          <span>{{ $tm(`pool.${item.name}`) }}</span>
        </div>

        <div class="order">
          <span @click="sortOrder = 'asc'">
            <Icon icon="tdesign:order-ascending" />
          </span>
          <span @click="sortOrder = 'desc'">
            <Icon icon="tdesign:order-descending" />
          </span>
        </div>
      </div>

      <div class="icon">
        <Icon icon="bi:sort-down" />
      </div>
    </div>

    <div class="top">
      <div class="icon">
        <Icon icon="line-md:arrow-close-up" />
      </div>
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

.func {
  position: absolute;
  white-space: nowrap;
  right: 50px;
  cursor: pointer;
  display: none;
  background-color: var(--kungalgame-trans-white-2);
  border: 1px solid var(--kungalgame-blue-4);
  top: 0;
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;

  span {
    margin-left: 8px;
  }

  &:hover {
    background-color: var(--kungalgame-trans-blue-1);
  }
}

.order {
  display: flex;

  &:hover {
    background-color: var(--kungalgame-trans-white-2);
  }

  span {
    padding: 8px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: var(--kungalgame-blue-4);

    &:hover {
      background-color: var(--kungalgame-blue-4);
      color: var(--kungalgame-white);
    }
  }
}

.sort:hover .func {
  display: block;
}

.sort,
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

  .icon {
    font-size: 22px;
    color: var(--kungalgame-blue-4);
  }
}

.top {
  margin-top: 11px;
}
</style>
