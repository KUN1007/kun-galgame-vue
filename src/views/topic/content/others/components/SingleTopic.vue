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
</script>

<template>
  <div class="other-topic-single-container">
    <!-- 楼层标志 -->
    <div class="other-topic-floor">
      <button class="other-btn">F999</button>
    </div>
    <!-- 其他人帖子内容区的容器 -->
    <div class="other-topic-content-container">
      <!-- 其它人回帖的内容区 -->
      <div class="other-topic-content">
        <!-- 其他人回帖的上部 -->
        <div class="other-topic-content-top">
          <!-- 其它人回帖的上部左侧区域 -->
          <KUNGalgamerInfo />
          <!-- 其它人回帖的上部右侧区域 -->
          <div class="other-topic-content-right">
            <!-- 右侧的上部区域 -->
            <div class="other-topic-content-right-top">
              <!-- 上部区域的左边 -->
              <div class="other-topic-content-right-top-left">
                <span>回复给@<a href="#">啊这可海星啊这</a></span>
              </div>
              <!-- 上部区域的右边 -->
              <Rewrite />
            </div>
            <!-- 右侧部分分文本 -->
            <TopicContent />
          </div>
        </div>
        <!-- 其他人回帖的下部 -->
        <div class="other-topic-content-bottom">
          <Tags />
          <Time />
        </div>
      </div>
      <!-- 其它人回帖的底部 -->
      <TopicFooter />
      <Comments />
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 其它人的楼层 */
.other-topic-floor {
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
.other-btn {
  border: none;
  /* 大小 */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient($kungalgame-blue-1, $kungalgame-pink-1);
  opacity: 0.7;
  font-size: 18px;
  font-weight: bold;
  font-style: oblique;
  color: $kungalgame-pink-1;
  text-shadow: -1px 0 $kungalgame-blue-5, 0 -1px $kungalgame-blue-5,
    1px 0 $kungalgame-blue-5, 0 1px $kungalgame-blue-5,
    1px 1px $kungalgame-black, -1px -1px $kungalgame-black,
    -1px 1px $kungalgame-black, 1px -1px $kungalgame-black,
    4px 2px 2px $kungalgame-red-4;
}
/* 其他人帖子内容区容器 */
.other-topic-content-container {
  width: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  border: 1px solid $kungalgame-blue-1;
  border-radius: 5px;
  background-color: $kungalgame-trans-white-3;
  box-shadow: $shadow;
}
/* 其它人回帖的内容区 */
.other-topic-content {
  width: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
}
/* 其他人回帖的上部 */
.other-topic-content-top {
  display: flex;
  flex-grow: 1;
}
/* 其它人回帖的上部左侧区域 */
.other-topic-content-left {
  padding: 0 20px;
}
/* 其他人的头像 */
.other-avatar {
  /* 图像加载不出来时页面不塌陷 */
  width: 100px;
  margin-top: 17px;
}
/* 其他人的头像图片 */
.other-avatar img {
  width: 100px;
}
/* 其他人的等级 */
.other-ranking {
  font-size: 10px;
  position: absolute;
  margin-left: 90px;
}
/* 其他人的名字 */
.other-name {
  font-size: small;
  display: flex;
  justify-content: center;
  margin-top: 17px;
}
/* 其他人的萌萌点 */
.other-moemoepoint {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
/* 其它人回帖的上部右侧区域 */
.other-topic-content-right {
  display: flex;
  flex-direction: column;
}
/* 右侧的上部区域 */
.other-topic-content-right-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  letter-spacing: 1px;
}
/* 上部区域的左边 */
.other-topic-content-right-top-left {
  font-size: 17px;
}
/* 被回复的人 */
.other-topic-content-right-top-left span a {
  color: $kungalgame-blue-5;
  font-weight: 500;
}
.other-topic-content-right-top-left span a:hover {
  text-decoration: underline;
  text-decoration-thickness: 2px;
}
/* 上部区域的右边 */
.other-topic-content-right-top-right {
  font-size: 12px;
}
.other-topic-content-right-top-right span {
  margin-right: 30px;
}
/* 右侧部分分文本 */
.other-topic-content-right-text {
  padding: 7px;
  border-left: 1px solid $kungalgame-blue-1;
  font-size: 15px;
}
/* 其他人回帖的下部 */
.other-topic-content-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $kungalgame-blue-1;
  padding-bottom: 7px;
}
/* 其他人回帖的下部分左侧 */
.other-topic-content-bottom-left {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 单个标签的盒子 */
.other-topic-content-bottom-left ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 图标字体 */
.other-topic-content-bottom-left i {
  padding: 0 20px;
  color: $kungalgame-blue-4;
}
/* 单个标签的样式 */
.other-topic-content-bottom-left ul li {
  margin-left: 5px;
  font-size: small;
  padding: 2px;
  background-color: $kungalgame-blue-0;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 5px;
  cursor: pointer;
}
.other-topic-content-bottom-left ul li:hover {
  background-color: $kungalgame-red-1;
  transition: 0.2s;
}
/* 其他人回帖的下部分右侧 */
.other-topic-content-bottom-right {
  margin-right: 20px;
}
/* 其他人回帖的时间 */
.other-topic-time {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: small;
  /* 文字间距 */
  letter-spacing: 1px;
  /* 窗口缩小不换行 */
  overflow: hidden;
  white-space: nowrap;
}
/* 沙漏的样式 */
.other-topic-time i {
  padding: 0 10px;
  color: $kungalgame-red-4;
}
/* 发帖时间的样式 */
.other-topic-time div {
  padding-right: 20px;
}
/* 其它人回帖的底部 */
.other-topic-footer {
  display: flex;
  flex-direction: column;
}
/* 顶部的点赞、推贴等 */
.other-topic-footer-top {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}
/* 点赞、推贴、踩 */
.other-topic-footer-top-left {
  display: flex;
  justify-content: center;
  align-items: center;
}
.other-topic-footer-top-left ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
.other-topic-footer-top-left ul li {
  margin-left: 17px;
}
.other-topic-footer-top-left ul li a {
  color: $kungalgame-font-color-2;
  font-size: 20px;
}
.other-topic-footer-top-left ul li:nth-child(1) a {
  color: $kungalgame-red-4;
}
/* 回复、评论、编辑 */
.other-topic-footer-top-right ul {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}
.other-topic-footer-top-right ul li {
  margin-right: 17px;
}
.other-topic-footer-top-right ul li a {
  color: $kungalgame-font-color-2;
  font-size: 20px;
}
/* 其它人回帖的底部 */
.other-topic-footer {
  width: 100%;
  min-height: 50px;
}
</style>
