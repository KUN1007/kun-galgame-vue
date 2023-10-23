<!-- This file is for adapting the top navigation bar for mobile devices -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'
// Import mode switch component
import Mode from '../setting-panel/components/Mode.vue'
// Import language switch component
import SwitchLanguage from '../setting-panel/components/SwitchLanguage.vue'
// Import top navigation bar items
import { topBarItem } from './topBarItem'
// Send a close command to the parent element
defineEmits(['showKUNGalgameHamburger'])
</script>

<template>
  <!-- Main container -->
  <div class="container">
    <div class="kungalgame">
      <img src="@/assets/images/favicon.webp" alt="KUNGalgame" />
      <span>{{ $tm('header.name') }}</span>
    </div>
    <!-- Interactive items -->
    <div class="item" style="font-size: 17px">
      <span v-for="kun in topBarItem" :key="kun.index">
        <RouterLink :to="kun.router">{{
          $tm(`header['${kun.name}']`)
        }}</RouterLink>
      </span>
    </div>

    <!-- Day and night mode switch component -->
    <Mode style="font-size: 20px" />

    <!-- Language switch component -->
    <SwitchLanguage style="font-size: 20px; margin-bottom: 40px" />
    <!-- Close button -->
    <div class="close">
      <Icon
        icon="line-md:menu-fold-left"
        @click="$emit('showKUNGalgameHamburger', false)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 400px;
  width: 277px;
  position: fixed;
  padding: 10px;
  top: 0;
  left: 0;
  background-color: var(--kungalgame-trans-white-2);
  border: 1px solid var(--kungalgame-blue-1);
  box-shadow: var(--shadow);
  border-left: none;
  border-top: none;
  border-radius: 0 5px 5px 5px;
  display: flex;
  flex-direction: column;
  color: var(--kungalgame-font-color-3);
  font-size: 25px;
}

.item {
  margin-left: 20px;
  margin-top: 20px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  a {
    color: var(--kungalgame-blue-4);
  }
}

.kungalgame {
  display: flex;
  align-items: center;
  img {
    height: 40px;
    margin-right: 10px;
  }
  span {
    font-size: 20px;
  }
}

.close {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
