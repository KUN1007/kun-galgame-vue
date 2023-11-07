<script setup lang="ts"></script>

<template>
  <RouterView #default="{ route, Component }">
    <component :is="Component" :key="route.fullPath"></component>
  </RouterView>
</template>

<style lang="scss" scoped>
.app {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-color: var(--kungalgame-white);
}

.top-bar {
  position: sticky;
  top: 0;
  z-index: 1007;
}
</style>
