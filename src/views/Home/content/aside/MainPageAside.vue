<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, watch } from 'vue'
import AsideActive from './components/AsideActive.vue'

import Aside from './components/Aside.vue'

import { useKUNGalgameHomeStore } from '@/store/modules/home'
import { storeToRefs } from 'pinia'

const { isActiveMainPageAside } = storeToRefs(useKUNGalgameHomeStore())

const asideWidth = ref('240px')

const handleFold = () => {
  isActiveMainPageAside.value = !isActiveMainPageAside.value
}

watch(
  isActiveMainPageAside,
  () => {
    asideWidth.value = isActiveMainPageAside.value ? '240px' : '40px'
  },
  { immediate: true }
)
</script>

<template>
  <div class="aside">
    <div class="nav-aside" @click="handleFold">
      <Icon
        icon="line-md:arrow-left"
        style="font-size: 17px"
        v-if="isActiveMainPageAside"
      />
      <Icon
        icon="line-md:arrow-right"
        style="font-size: 17px"
        v-if="!isActiveMainPageAside"
      />
      <span v-if="isActiveMainPageAside">
        {{ $tm('mainPage.asideActive.fold') }}
      </span>
    </div>

    <div class="item-active" v-if="isActiveMainPageAside">
      <AsideActive :isActive="isActiveMainPageAside" />
    </div>

    <div class="item" v-if="!isActiveMainPageAside">
      <Aside :isActive="!isActiveMainPageAside" v-if="!isActiveMainPageAside" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aside {
  margin-right: 5px;
  width: v-bind('asideWidth');
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: 0.5s;

  span {
    white-space: nowrap;
  }
}

.nav-aside {
  height: 40px;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: small;
  color: var(--kungalgame-font-color-3);
  cursor: pointer;
}

.item-active {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

.item {
  height: 96.6%;
}
</style>
