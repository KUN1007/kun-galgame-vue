<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { navBarRoute } from './routeName'

// 从路由参数中获取当前的用户 uid
const uid = computed(() => {
  return parseInt(useRoute().params.uid as string)
})

const fullPath = computed(() => {
  return useRoute().fullPath
})
</script>

<template>
  <!-- 左侧交互区 -->
  <div class="nav">
    <div
      class="item"
      v-for="kun in navBarRoute"
      :key="kun.index"
      :class="fullPath === `/kungalgamer/${uid}/${kun.router}` ? 'active' : ''"
    >
      <router-link :to="`/kungalgamer/${uid}/${kun.router}`">{{
        kun.name
      }}</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 左侧交互区 */
.nav {
  /* 固定宽度 */
  height: 100%;
  width: 120px;
  background-color: var(--kungalgame-trans-pink-0);
  border-radius: 0 0 0 7px;
  border-right: 1px solid var(--kungalgame-blue-4);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.item {
  height: 40px;
  background-color: var(--kungalgame-trans-blue-0);
  display: flex;
  transition: all 0.2s;
  &:hover {
    background-color: var(--kungalgame-trans-blue-2);
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--kungalgame-blue-4);
  }
}

/* 当前选中 */
.active {
  background-color: var(--kungalgame-blue-4);
  &:hover {
    background-color: var(--kungalgame-blue-4);
  }
  a {
    color: var(--kungalgame-white);
  }
}
</style>
