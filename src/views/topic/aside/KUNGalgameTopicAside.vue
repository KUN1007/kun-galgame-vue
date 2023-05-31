<!-- 
  KUNGalgame 的帖子界面

  这是左边的页面，包括了交互区域、相同 TAG 的帖子、楼主的其他帖子

  页面被拆成 3 个大组件，这是左边的侧边栏部分
 -->
<script setup lang="ts">
import TopicAsideNav from './components/TopicAsideNav.vue'
import TopicAsideSame from './components/TopicAsideSame.vue'
import TopicAsideMaster from './components/TopicAsideMaster.vue'
// 导入 Footer
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'
</script>
<template>
  <div class="content-left-part">
    <TopicAsideNav />
    <TopicAsideSame />
    <TopicAsideMaster />
    <KUNGalgameFooter />
  </div>
</template>
<style scoped>
/* 左侧内容区 */
.content-left-part {
  top: 70px;
  position: sticky;
  /* 左侧区域的总高度 */
  height: 1000px;
  /* 左侧区域宽度 */
  width: 250px;
  /* 左侧内容区为弹性盒，方便分成上下两部分 */
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
</style>
