<script setup lang="ts">
import Tags from './Tags.vue'
import Button from './Button.vue'
</script>

<template>
  <!-- 内容区的底部 -->
  <div class="content-footer">
    <Tags />

    <Button />
  </div>
</template>

<style lang="scss" scoped>
/* 内容区的底部样式 */
.content-footer {
  /* 距离内容区的距离 */
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
