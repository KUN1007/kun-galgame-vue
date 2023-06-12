<!-- 
  这是 KUNGalgame 帖子展示区域楼主帖子的区域，楼主的帖子将会被展示在这里，位于帖子展示区域最上方
 -->
<script setup lang="ts">
// 楼主帖子的 Footer
import TopicFooter from '../components/TopicFooter.vue'
// 楼主帖子的状态
import TopicStatus from '../components/TopicStatus.vue'
// 楼主帖子是否重新编辑
import Rewrite from '../components/Rewrite.vue'
// 楼主帖子的内容
import TopicContent from '../components/TopicContent.vue'
// 楼主的信息
import KUNGalgamerInfo from '../components/KUNGalgamerInfo.vue'
// 楼主的发帖时间
import Time from '../components/Time.vue'
// 楼主帖子的标签
import Tags from '../components/Tags.vue'
// 楼主帖子的头部，标题
import TopicHeader from '../components/TopicHeader.vue'
// 楼主标志
import Floor from '../components/Floor.vue'
</script>

<template>
  <!-- 楼主帖子容器 -->
  <div class="container">
    <Floor :width="'70px'" :font="'37px'" />
    <!-- 楼主帖子内容区的容器 -->
    <div class="content-container">
      <TopicHeader />
      <!-- 楼主帖子内容区 -->
      <div class="content">
        <!-- 内容区的顶部 -->
        <div class="content-top">
          <Tags />
          <Time />
        </div>
        <!-- 内容区的中部 -->
        <div class="content-center">
          <KUNGalgamerInfo />
          <TopicContent />
        </div>
        <!-- 内容区的底部 -->
        <div class="content-bottom">
          <TopicStatus />
          <Rewrite />
        </div>
      </div>
      <TopicFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 楼主帖子容器 */
.container {
  width: 100%;
  /* 楼主帖子最小高度 */
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 楼主帖子距离其它人帖子的距离 */
  margin-bottom: 5px;
  /* TODO: */
  /* 楼主帖子背景图 */
  /*   background-image: url(../../img/bg-dark.png; */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
/* 楼主帖子内容区的容器 */
.content-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border: 1px solid var(--kungalgame-blue-1);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: var(--shadow);
  background-color: var(--kungalgame-trans-white-5);
  box-sizing: border-box;
}

/* 楼主帖子内容区 */
.content {
  width: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
}
/* 内容区的顶部 */
.content-top {
  width: 100%;
  height: 40px;
  display: flex;
  text-align: center;
  /* 时间和标签分居两侧 */
  justify-content: space-between;
  /* 下面的分割线 */
  border-bottom: 1px solid var(--kungalgame-blue-1);
  box-sizing: border-box;
}

/* 楼主的帖子和楼主的信息容器 */
.content-center {
  width: 100%;
  display: flex;
  flex-shrink: 0;
  border-bottom: 1px solid var(--kungalgame-blue-1);
  box-sizing: border-box;
}
/* 内容区的底部 */
.content-bottom {
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--kungalgame-blue-1);
}

@media (max-width: 1000px) {
  .content-top {
    flex-direction: column;
  }
}
</style>
