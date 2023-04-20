<script setup lang="ts">
import TopicMaster from './master/TopicMaster.vue';
import TopicOthers from './others/TopicOthers.vue';
</script>
<template>
  <div class="content-right-part">
    <TopicMaster/>
    <TopicOthers/>
  </div>
</template>
<style scoped>
/* 右侧内容区 */
.content-right-part {
  height: 100%;
  width: 1px;
  flex-grow: 4;
  /* 右侧内容区为弹性盒（用户可以一直向下滑） */
  display: flex;
  flex-direction: column;
  /* 右侧部分距离左侧的距离 */
  margin-left: 10px;
}
</style>
