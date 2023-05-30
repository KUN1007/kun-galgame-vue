<!-- 
  这是回复贴下方的评论区，包含了所有的评论，是一个单独的组件，它的子组件是单个评论
 -->
<script setup lang="ts">
import SingleComment from './SingleComment.vue'
</script>

<template>
  <!-- 底部的评论 -->
  <div class="comment">
    <!-- 评论的标题 -->
    <div class="title">
      <span>评论</span>
    </div>
    <!-- 评论容器 -->
    <div class="container">
      <SingleComment />
      <SingleComment />
      <SingleComment />
    </div>
  </div>
</template>

<style scoped>
/* 底部的评论 */
.comment {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  margin-top: 10px;
}
/* 评论的标题 */
.title {
  flex-shrink: 0;
  margin: 10px;
}
/* 评论容器 */
.container {
  width: 100%;
  margin-bottom: 10px;
}
</style>
