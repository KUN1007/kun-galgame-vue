<!-- 
  这是单个人回复楼主的话题，是一个单独的组件

  里面包含着每个人的回复和下方回复这个人的评论
 -->
<script setup lang="ts">
// 导入楼层组件
import Floor from '../../components/Floor.vue'
// 导入评论组件
import Comments from '../components/Comments.vue'
// 导入 Footer 组件
import TopicFooter from '../../components/TopicFooter.vue'
// 导入发布时间组件
import Time from '../../components/Time.vue'
// 导入标签组件
import Tags from '../../components/Tags.vue'
// 导入话题内容
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
  <Floor :width="'50px'" :font="'18px'" style="margin-bottom: -25px" />
  <!-- 其他人话题内容区的容器 -->
  <div class="container">
    <!-- 其它人回复的内容区 -->
    <div class="content">
      <!-- 其他人回复的上部 -->
      <div class="article">
        <!-- 其它人回复的上部左侧区域 -->
        <KUNGalgamerInfo />
        <!-- 其它人回复的上部右侧区域 -->
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
      <!-- 其他人回复的下部 -->
      <div class="bottom">
        <Tags />
        <Time />
      </div>
    </div>
    <!-- 其它人回复的底部 -->
    <TopicFooter :isOthersTopic="true" />
    <Comments />
  </div>
</template>

<style lang="scss" scoped>
/* 其他人话题内容区容器 */
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
/* 其它人回复的内容区 */
.content {
  width: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
}
/* 其他人回复的上部 */
.article {
  display: flex;
  flex-grow: 1;
}
/* 其它人回复的上部右侧区域 */
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
/* 其他人回复的下部 */
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--kungalgame-blue-1);
  padding-bottom: 7px;
}

@media (max-width: 1000px) {
  .top {
    flex-direction: column;
  }
  .bottom {
    flex-direction: column;
  }
}
</style>
