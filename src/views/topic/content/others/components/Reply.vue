<script setup lang="ts"></script>

<template>
  <!-- 上部区域的左边 -->
  <div class="reply">
    <!-- TODO: 跳转到页面中帖子的位置 -->
    <span>回复给@<router-link to="#">啊这可海星啊这</router-link></span>
  </div>
</template>

<style lang="scss" scoped>
/* 上部区域的左边 */
.reply {
  font-size: 17px;
  a {
    color: var(--kungalgame-blue-5);
    font-weight: 500;
    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 2px;
    }
  }
}
</style>
