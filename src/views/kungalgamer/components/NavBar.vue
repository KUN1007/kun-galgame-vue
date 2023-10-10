<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { navBarRoute } from './routeName'

// 从路由参数中获取当前的用户 uid
const uid = computed(() => {
  return parseInt(useRoute().params.uid as string)
})
</script>

<template>
  <!-- 左侧交互区 -->
  <div class="nav">
    <!-- 交互区的单个项目 -->
    <ul>
      <li v-for="kun in navBarRoute" :key="kun.index">
        <KeepAlive>
          <router-link :to="`/kungalgamer/${uid}/${kun.router}`">{{
            kun.name
          }}</router-link>
        </KeepAlive>
      </li>
    </ul>
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
  & > ul {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    li {
      height: 40px;
      background-color: var(--kungalgame-trans-blue-0);
      display: flex;
      &:hover {
        background-color: var(--kungalgame-trans-red-2);
        transition: 0.1s;
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
  }
}
</style>
