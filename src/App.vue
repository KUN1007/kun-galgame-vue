<!-- App -->
<script setup lang="ts">
import 'animate.css'
</script>

<template>
  <!-- #default 是 v-slot 的简写，route 就是路由，Component 是一个 v-node -->
  <!-- <router-view #default="{ route, Component }">
    <transition
      :enter-active-class="`animate__animated ${route.meta.transition}`"
    >
      <component :is="Component"></component>
    </transition>
  </router-view> -->
  <RouterView />
</template>

<style scoped></style>
