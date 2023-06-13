<!-- 帖子的状态区域，显示帖子的状态为正常或是被封禁 -->
<script setup lang="ts"></script>

<template>
  <!-- 帖子状态 -->
  <div>帖子状态：<span>正常</span></div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  font-size: 12px;
  margin-left: 10px;
  color: var(--kungalgame-font-color-3);
}
/* 帖子状态 */
span {
  width: 30px;
  padding: 1px;
  background-color: var(--kungalgame-green-4);
  color: var(--kungalgame-white);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
