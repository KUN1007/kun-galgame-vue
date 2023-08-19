<!-- 
  KUNGalgame 的话题界面

  这是左边的页面，包括了交互区域、相同 TAG 的话题、楼主的其他话题

  页面被拆成 3 个大组件，这是左边的侧边栏部分
 -->
<script setup lang="ts">
import TopicAsideNav from './components/TopicAsideNav.vue'
import Topic from './components/Topic.vue'
// 导入 Footer
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'
</script>
<template>
  <div class="content-left-part">
    <TopicAsideNav />
    <Topic style="margin-bottom: 17px" />
    <Topic :isMasterTopics="true" />
    <KUNGalgameFooter />
  </div>
</template>
<style scoped>
/* 左侧内容区 */
.content-left-part {
  top: 70px;
  position: sticky;
  /* 左侧区域的总高度 */
  height: 940px;
  /* 左侧区域宽度 */
  width: 250px;
  /* 左侧内容区为弹性盒，方便分成上下两部分 */
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: var(--kungalgame-font-color-3);
}
</style>
