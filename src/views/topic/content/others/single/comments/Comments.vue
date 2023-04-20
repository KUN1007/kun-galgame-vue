<!-- 
  这是回复贴下方的评论区，包含了所有的评论，是一个单独的组件，它的子组件是单个评论
 -->
<script setup lang="ts">
import SingleComment from './components/SingleComment.vue';
</script>

<template>
  <!-- 底部的评论 -->
  <div class="other-topic-footer-bottom">
    <!-- 评论的标题 -->
    <div class="other-topic-comment-title">
      <span>评论</span>
    </div>
    <!-- 评论容器 -->
    <div class="other-topic-comment-container">
      <SingleComment/>
      <SingleComment/>
      <SingleComment/>
    </div>
  </div>
</template>

<style scoped>
/* 底部的评论 */
.other-topic-footer-bottom {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
/* 评论的标题 */
.other-topic-comment-title {
  margin: 0 auto;
}
/* 评论容器 */
.other-topic-comment-container {
  width: 95%;
  margin: 0 auto;
}
</style>
