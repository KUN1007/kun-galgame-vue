<!-- 
  这是 KUNGalgame 话题展示区域下方的其他人话题展示部分，任何非楼主发布的话题将会被展示在这里

  这个区域包含所有人回复给楼主的话题，其中每个人的话题将会被拆分成为单独的组件
 -->
<script setup lang="ts">
import SingleTopic from './components/SingleTopic.vue'
</script>

<template>
  <!-- 其它人的回复 -->
  <div class="other-topic-container">
    <!-- 每个人的单个话题 -->
    <SingleTopic />
    <SingleTopic />
    <SingleTopic />
  </div>
</template>

<style scoped>
/* 其它人的回复 */
/* 每个人的话题 */
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
