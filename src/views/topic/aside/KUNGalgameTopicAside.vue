<script setup lang="ts">
import TopicAsideNav from "./nav/TopicAsideNav.vue";
import TopicAsideSame from "./same/TopicAsideSame.vue";
import TopicAsideMaster from "./master/TopicAsideMaster.vue";
import TopicAsideFooter from "./footer/TopicAsideFooter.vue";
</script>
<template>
  <div class="content-left-part">
    <TopicAsideNav />
    <TopicAsideSame />
    <TopicAsideMaster />
    <TopicAsideFooter />
  </div>
</template>
<style scoped></style>
