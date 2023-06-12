<!-- 
  KUNGalgame 的帖子界面

  右边展示的所有帖子，可以一直向下滚动

  页面被拆成 3 个大组件，这是帖子部分
 -->
<script setup lang="ts">
import TopicMaster from './master/TopicMaster.vue'
import TopicOthers from './others/TopicOthers.vue'
</script>
<template>
  <div class="content-right-part">
    <TopicMaster />
    <TopicOthers />
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
}
</style>
