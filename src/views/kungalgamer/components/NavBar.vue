<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { navBarRoute } from './routeName'

// 根据 uid 获取当前用户的权限
import { getCurrentUserRole } from '@/utils/getCurrentUserRole'

const props = defineProps<{
  uid: number
}>()

// 当前页面的 uid
const currentPageUid = ref(0)
// 是否展示 nav item，其它用户访问主页时
const isShowNavItem = (permission: number[]) =>
  permission.includes(getCurrentUserRole(currentPageUid.value))

// 点击样式激活
const activeClass = (currentPageUid: number, routeName: string) => {
  return useRoute().fullPath === `/kungalgamer/${currentPageUid}/${routeName}`
    ? 'active'
    : ''
}

onMounted(() => {
  currentPageUid.value = props.uid
})
</script>

<template>
  <!-- 左侧交互区 -->
  <div class="nav">
    <!-- 这里 v-for 不能和 v-if 一起用 -->
    <div
      class="item"
      v-for="kun in navBarRoute"
      :key="kun.index"
      :class="activeClass(currentPageUid, kun.router)"
      v-show="isShowNavItem(kun.permission)"
    >
      <router-link :to="`/kungalgamer/${currentPageUid}/${kun.router}`">
        {{ kun.name }}
      </router-link>
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
