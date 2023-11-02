<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { navBarRoute } from './routeName'

import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import { storeToRefs } from 'pinia'

const { uid, roles } = storeToRefs(useKUNGalgameUserStore())

const props = defineProps<{
  uid: number
}>()

const route = useRoute()
// UID of the current page
const currentPageUid = ref(0)

const currentPageUserRoles = computed(() => {
  if (props.uid === uid.value) {
    return 4
  } else {
    return roles.value
  }
})
// Show the nav item for other users' profiles based on their permissions
const isShowNavItem = (permission: number[]) =>
  permission.includes(currentPageUserRoles.value)

// Apply active CSS class to the selected item
const activeClass = (currentPageUid: number, routeName: string) => {
  return route.fullPath === `/kungalgamer/${currentPageUid}/${routeName}`
    ? 'active'
    : ''
}

watch(
  () => props.uid,
  () => {
    currentPageUid.value = props.uid
  },
  { immediate: true }
)
</script>

<template>
  <div class="nav">
    <!-- Using v-for and v-show together is not recommended -->
    <div
      class="item"
      v-for="kun in navBarRoute"
      :key="kun.index"
      :class="activeClass(currentPageUid, kun.router)"
      v-show="isShowNavItem(kun.permission)"
    >
      <RouterLink :to="`/kungalgamer/${currentPageUid}/${kun.router}`">
        <span>{{ $tm(`user.nav.${kun.name}`) }}</span>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  height: 100%;
  width: 120px;
  background-color: var(--kungalgame-trans-pink-0);
  border-radius: 0 0 0 7px;
  border-right: 1px solid var(--kungalgame-blue-4);
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

.active {
  background-color: var(--kungalgame-blue-4);

  &:hover {
    background-color: var(--kungalgame-blue-4);
  }

  a {
    color: var(--kungalgame-white);
  }
}

@media (max-width: 700px) {
  .nav {
    width: 70px;
    font-size: small;
  }
}
</style>
