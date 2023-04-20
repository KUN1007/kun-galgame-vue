<!-- 
  KUNGalgame 的帖子页面
 -->
<script setup lang="ts">
import KUNGalgameTopBar from "../../components/KUNGalgameTopBar.vue";
import KUNGalgameTopicAside from "./aside/KUNGalgameTopicAside.vue";
import KUNGalgameTopicContent from "./content/KUNGalgameTopicContent.vue";
</script>
<template>
  <!-- 总容器 -->
  <div class="main-wrapper">
    <KUNGalgameTopBar />
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
<style scoped>
/* 页面总容器 */
.main-wrapper {
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  min-width: 1040px;
  /* 背景图片 */
  /* background-image: url(../img/bg.png); */
  /*         background-image: url(../img/bg-dark.png); */
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
}
/* 下面帖子详情区的容器 */
.topic-wrapper {
  display: flex;
  flex-shrink: 0;
}
/* 下方可视内容区的容器 */
.content-wrapper {
  width: 90%;
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
/* 左侧内容区 */
.content-left-part {
  top: 73px;
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
