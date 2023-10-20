<script setup lang="ts">
interface asideBar {
  index: number
  name: string
  router: string
}

const asideBarItem: asideBar[] = [
  { index: 1, name: 'privacy', router: '/privacy' },
  { index: 2, name: 'bylaw', router: '/bylaw' },
  { index: 3, name: 'update', router: '/update-log' },
  { index: 4, name: 'pl', router: '/balance' },
  { index: 5, name: 'nonMoe', router: '/non-moe' },
  { index: 6, name: 'join', router: '/contact' },
  { index: 7, name: 'thanks', router: '/thanks-list' },
  { index: 8, name: 'donate', router: '/donate' },
  { index: 9, name: 'home', router: '/' },
]
</script>

<template>
  <div class="aside">
    <span>{{ $tm('kungalgame.introduction') }}</span>
    <span>{{ $tm('kungalgame.operating') }}</span>
    <span>{{ $tm('kungalgame.rules') }}</span>
    <span class="skip" v-for="kun in asideBarItem" :key="kun.index">
      <RouterLink
        style="color: var(--kungalgame-blue-4)"
        :to="{ path: kun.router }"
      >
        {{ $tm(`kungalgame.${kun.name}`) }}
      </RouterLink>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.aside {
  width: 122px;
  height: 100%;
  flex-shrink: 0;
  border-right: 1px solid var(--kungalgame-blue-4);
  position: sticky;
  top: 0;
  color: var(--kungalgame-font-color-3);
  display: flex;
  flex-direction: column;
  align-items: center;

  & > span {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(3) {
      border-bottom: 1.5px solid var(--kungalgame-blue-4);
    }
  }
}

.skip {
  border-bottom: 1.5px solid var(--kungalgame-blue-4);
  cursor: pointer;
  color: var(--kungalgame-blue-4);

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: var(--kungalgame-trans-blue-2);
    }
  }
}

@media (max-width: 700px) {
  .aside {
    width: 90px;
    font-size: small;
  }
}
</style>
