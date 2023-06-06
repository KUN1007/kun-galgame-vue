<!-- 
  KUNGalgame 的帖子页面
 -->
<script setup lang="ts">
import KUNGalgameTopBar from '../../components/KUNGalgameTopBar.vue'
import KUNGalgameTopicAside from './aside/KUNGalgameTopicAside.vue'
import KUNGalgameTopicContent from './content/KUNGalgameTopicContent.vue'
// 导入背景图片
import { currBackground } from '@/hooks/useBackgroundPicture'
</script>
<template>
  <!-- 总容器 -->
  <div class="main-wrapper" :style="{ backgroundImage: currBackground }">
    <KUNGalgameTopBar :isMainPage="false" :isTopicPage="true" />
    <!-- 下面帖子详情区的容器 -->
    <div class="topic-wrapper">
      <!-- 下方可视内容区的容器 -->
      <div class="content-wrapper">
        <KUNGalgameTopicAside />
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
  min-width: 1040px;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-color: var(--kungalgame-white);
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
</style>
