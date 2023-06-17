<!-- 
  KUNGalgame 的帖子页面
 -->
<script setup lang="ts">
import KUNGalgameTopicAside from './aside/KUNGalgameTopicAside.vue'
import KUNGalgameTopicContent from './content/KUNGalgameTopicContent.vue'
</script>
<template>
  <!-- 总容器 -->
  <div class="main-wrapper">
    <!-- 下面帖子详情区的容器 -->
    <div class="topic-wrapper">
      <!-- 下方可视内容区的容器 -->
      <div class="content-wrapper">
        <KUNGalgameTopicAside class="aside" style="margin-right: 10px" />
        <KUNGalgameTopicContent />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 页面总容器 */
.main-wrapper {
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
}
/* 下面帖子详情区的容器 */
.topic-wrapper {
  display: flex;
  flex-shrink: 0;
}
/* 下方可视内容区的容器 */
.content-wrapper {
  width: 90%;
  max-width: 1500px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  /* 设置背景的毛玻璃效果 */
  backdrop-filter: blur(5px);
  background-color: var(--kungalgame-trans-white-5);
  /* 设置背景边框和圆角 */
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
}

@media (max-width: 1000px) {
  .aside {
    display: none;
  }
  .content-wrapper {
    padding: 0;
  }
}
</style>
