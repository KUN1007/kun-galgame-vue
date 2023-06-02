<script setup lang="ts">
import SingleTopic from '../components/SingleTopic.vue'
</script>

<template>
  <!-- 右侧内容区 -->
  <div class="article">
    <SingleTopic />
  </div>
</template>

<style lang="scss" scoped>
/* 内容区 */
.article {
  width: 50%;
  flex-grow: 1;
  padding: 7px 27px;
  /* 竖直弹性盒 */
  display: flex;
  flex-direction: column;
  /* 溢出显示滚动条 */
  overflow-y: scroll;
}
/* 滚动条的样式 */
.article::-webkit-scrollbar {
  display: inline;
  width: 4px;
  height: 0;
  background-color: $kungalgame-red-2;
  border-radius: 2px;
}
.article::-webkit-scrollbar-thumb {
  background: $kungalgame-blue-4;
  border-radius: 2px;
}
</style>
