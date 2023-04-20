<!-- 
  KUNGalgame 的帖子界面

  这是左边的页面，包括了交互区域、相同 TAG 的帖子、楼主的其他帖子

  页面被拆成 3 个大组件，这是左边的侧边栏部分
 -->
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
