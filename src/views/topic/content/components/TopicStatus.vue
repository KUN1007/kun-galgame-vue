<!-- 帖子的状态区域，显示帖子的状态为正常或是被封禁 -->
<script setup lang="ts"></script>

<template>
  <!-- 内容区的底部 -->
  <div class="master-topic-content-bottom">
    <!-- 帖子状态 -->
    <span>帖子状态：<span>正常</span></span>
  </div>
</template>

<style lang="scss" scoped>
/* 帖子状态 */
.master-topic-content-bottom span span {
  background-color: $kungalgame-green-3;
  color: $kungalgame-white;
}
</style>
