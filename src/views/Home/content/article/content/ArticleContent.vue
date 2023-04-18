<script lang="ts">
import SingleTopic from "./topic/SingleTopic.vue";
export default {
  name: "ArticleContent",
  components: { SingleTopic },
};
</script>

<template>
  <div class="topic-container">
    <SingleTopic />
    <SingleTopic />
    <SingleTopic />
    <SingleTopic />
    <SingleTopic />
    <SingleTopic />
    <SingleTopic />
    <SingleTopic />
    <SingleTopic />
    <SingleTopic />
    <SingleTopic />
    <SingleTopic />
    <SingleTopic />
    <SingleTopic />
    <SingleTopic />
    <SingleTopic />
    <SingleTopic />
    <SingleTopic />
    <SingleTopic />
    <SingleTopic />
  </div>
</template>
<style scoped>
/* 帖子区容器 */
.topic-container {
  /* 帖子区域占文章总区域的宽度 */
  width: 98%;
  min-height: 1150px;
  overflow-y: scroll;
  /* 所有帖子的总区域占左侧页面的下边距 */
  margin-bottom: 5px;
  /* 帖子区域弹性盒 */
  display: flex;
  flex-direction: column;
}
/* 帖子区滚动条 */
.topic-container::-webkit-scrollbar {
  display: inline;
  width: 4px;
  height: 0;
  background-color: var(--kungalgame-red-2);
  border-radius: 2px;
}
.topic-container::-webkit-scrollbar-thumb {
  background: var(--kungalgame-blue-4);
  border-radius: 2px;
}
</style>
