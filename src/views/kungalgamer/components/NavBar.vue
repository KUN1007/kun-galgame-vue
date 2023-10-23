<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { navBarRoute } from './routeName'

// Get the current user's role based on UID
import { getCurrentUserRole } from '@/utils/getCurrentUserRole'

const props = defineProps<{
  uid: number
}>()

// UID of the current page
const currentPageUid = ref(0)
// Show the nav item for other users' profiles based on their permissions
const isShowNavItem = (permission: number[]) =>
  permission.includes(getCurrentUserRole(currentPageUid.value))

// Apply active CSS class to the selected item
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
