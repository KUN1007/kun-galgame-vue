<!-- 
  这是 KUNGalgame 帖子展示区域下方的其他人帖子展示部分，任何非楼主发布的帖子将会被展示在这里

  这个区域包含所有人回复给楼主的帖子，其中每个人的帖子将会被拆分成为单独的组件
 -->
<script setup lang="ts">
import SingleTopic from './components/SingleTopic.vue'
</script>

<template>
  <!-- 其它人的回帖 -->
  <div class="other-topic-container">
    <!-- 每个人的单个帖子 -->
    <SingleTopic />
    <SingleTopic />
    <SingleTopic />
  </div>
</template>

<style scoped>
/* 其它人的回帖 */
/* 每个人的帖子 */
.other-topic-container {
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
