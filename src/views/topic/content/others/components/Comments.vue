<!-- 
  这是回复话题下方的评论区，包含了所有的评论，是一个单独的组件，它的子组件是单个评论
 -->
<script setup lang="ts">
import SingleComment from './SingleComment.vue'
</script>

<template>
  <!-- 评论容器 -->
  <div class="comment">
    <!-- 评论的标题 -->
    <div class="title">
      <span>评论</span>
    </div>
    <SingleComment />
    <SingleComment />
    <SingleComment />
  </div>
</template>

<style lang="scss" scoped>
/* 评论的标题 */
.title {
  flex-shrink: 0;
  margin-bottom: 17px;
  color: var(--kungalgame-font-color-3);
}
/* 评论容器 */
.comment {
  width: 100%;
  padding: 17px;
}
</style>
