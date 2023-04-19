<script lang="ts">
import UserPart from "./components/UserPart.vue";
import TopicPart from "./components/TopicPart.vue";

export default {
  name: "SingleTopic",
  components: { UserPart, TopicPart },
};
</script>
<template>
  <div class="topic">
    <UserPart />
    <TopicPart />
  </div>
</template>
<style scoped>
/* 单个帖子 */
.topic {
  width: 100%;
  height: 70px;
  flex-shrink: 0;
  border-radius: 3px;
  background-color: var(--kungalgame-trans-white-4);
  margin-bottom: 3px;
  /* 单个帖子横向弹性盒 */
  display: flex;
}
.topic:last-child {
  /* 最后一个帖子的没有下边距 */
  margin-bottom: 0;
}
</style>
