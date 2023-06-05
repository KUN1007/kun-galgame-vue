<!-- 
  这是单个人回复楼主的帖子，是一个单独的组件

  里面包含着每个人的回复和下方回复这个人的评论
 -->
<script setup lang="ts">
// 导入评论组件
import Comments from '../components/Comments.vue'
// 导入 Footer 组件
import TopicFooter from '../../components/TopicFooter.vue'
// 导入发布时间组件
import Time from '../../components/Time.vue'
// 导入标签组件
import Tags from '../../components/Tags.vue'
// 导入帖子内容
import TopicContent from '../../components/TopicContent.vue'
// 导入重新编辑
import Rewrite from '../../components/Rewrite.vue'
// 导入发帖人个人信息
import KUNGalgamerInfo from '../../components/KUNGalgamerInfo.vue'
// 导入回复人,被回复人
import Reply from './Reply.vue'
</script>

<template>
  <!-- 楼层标志 -->
  <div class="floor">
    <button class="count">F99</button>
  </div>
  <!-- 其他人帖子内容区的容器 -->
  <div class="container">
    <!-- 其它人回帖的内容区 -->
    <div class="content">
      <!-- 其他人回帖的上部 -->
      <div class="article">
        <!-- 其它人回帖的上部左侧区域 -->
        <KUNGalgamerInfo />
        <!-- 其它人回帖的上部右侧区域 -->
        <div class="right">
          <!-- 右侧的上部区域 -->
          <div class="top">
            <Reply />
            <!-- 上部区域的右边 -->
            <Rewrite />
          </div>
          <!-- 右侧部分分文本 -->
          <TopicContent />
        </div>
      </div>
      <!-- 其他人回帖的下部 -->
      <div class="bottom">
        <Tags />
        <Time />
      </div>
    </div>
    <!-- 其它人回帖的底部 -->
    <TopicFooter :isOthersTopic="true" />
    <Comments />
  </div>
</template>

<style lang="scss" scoped>
/* 其它人的楼层 */
.floor {
  /* 标志在最左边 */
  margin-left: 100%;
  /* 定位 */
  margin-bottom: -25px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 位于内容上方 */
  z-index: 1;
}
/* 其他人的楼层样式 */
.count {
  border: none;
  /* 大小 */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(
    var(--kungalgame-blue-1),
    var(--kungalgame-red-1)
  );
  opacity: 0.7;
  font-size: 18px;
  font-weight: bold;
  font-style: oblique;
  color: var(--kungalgame-red-1);
  text-shadow: -1px 0 var(--kungalgame-blue-5), 0 -1px var(--kungalgame-blue-5),
    1px 0 var(--kungalgame-blue-5), 0 1px var(--kungalgame-blue-5),
    1px 1px var(--kungalgame-black), -1px -1px var(--kungalgame-black),
    -1px 1px var(--kungalgame-black), 1px -1px var(--kungalgame-black),
    4px 2px 2px var(--kungalgame-red-4);
}
/* 其他人帖子内容区容器 */
.container {
  width: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  border: 1px solid var(--kungalgame-blue-1);
  border-radius: 5px;
  background-color: var(--kungalgame-trans-white-5);
  box-shadow: var(--shadow);
}
/* 其它人回帖的内容区 */
.content {
  width: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
}
/* 其他人回帖的上部 */
.article {
  display: flex;
  flex-grow: 1;
}
/* 其它人回帖的上部右侧区域 */
.right {
  display: flex;
  flex-direction: column;
}
/* 右侧的上部区域 */
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  letter-spacing: 1px;
}
/* 其他人回帖的下部 */
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--kungalgame-blue-1);
  padding-bottom: 7px;
}
</style>
