<!-- 
  这是单个人回复楼主的帖子，是一个单独的组件

  里面包含着每个人的回复和下方回复这个人的评论
 -->
<script setup lang="ts">
import Comments from './comments/Comments.vue';
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
          <div class="other-topic-content-left">
            <!-- 其他人的头像 -->
            <div class="other-avatar">
              <!-- 其他人的头像图片 -->
              <img src="../img/KUN.jpg" alt="KUN" />
              <!-- 其他人的等级 -->
              <div class="other-rank">萌葱</div>
            </div>
            <!-- 其他人的名字 -->
            <div class="other-name">啊这可海星啊这</div>
            <!-- 其他人的萌萌点 -->
            <div class="other-moemoepoint">1007</div>
          </div>
          <!-- 其它人回帖的上部右侧区域 -->
          <div class="other-topic-content-right">
            <!-- 右侧的上部区域 -->
            <div class="other-topic-content-right-top">
              <!-- 上部区域的左边 -->
              <div class="other-topic-content-right-top-left">
                <span>回复给@<a href="#">啊这可海星啊这</a>（楼主）</span>
              </div>
              <!-- 上部区域的右边 -->
              <div class="other-topic-content-right-top-right">
                <span>在2019年10月7日10:07:00重新编辑</span>
              </div>
            </div>
            <!-- 右侧部分分文本 -->
            <div class="other-topic-content-right-text">
              啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
            </div>
          </div>
        </div>
        <!-- 其他人回帖的下部 -->
        <div class="other-topic-content-bottom">
          <!-- 其他人回帖的下部分左侧 -->
          <div class="other-topic-content-bottom-left">
            <i class="fa-solid fa-tag"></i>
            <ul>
              <li>啊这可海星</li>
              <li>啊这可海星</li>
              <li>啊这可海星</li>
              <li>啊这可海星</li>
              <li>啊这可海星</li>
            </ul>
          </div>
          <!-- 其他人回帖的下部分右侧 -->
          <div class="other-topic-content-bottom-right">
            <!-- 其他人回帖的时间 -->
            <div class="other-topic-time">
              <i class="fa-solid fa-hourglass-half"></i>
              <div>发布于2019年10月7日-10:07:00</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 其它人回帖的底部 -->
      <div class="other-topic-footer">
        <!-- 顶部的点赞、推贴等 -->
        <div class="other-topic-footer-top">
          <!-- 点赞、推贴、踩 -->
          <div class="other-topic-footer-top-left">
            <ul>
              <!-- 推贴 -->
              <li>
                <a href="#"><i class="fa-regular fa-hand-point-up"></i></a>
              </li>
              <!-- 点赞 -->
              <li>
                <a href="#"><i class="fa-regular fa-thumbs-up"></i></a>
              </li>
              <!-- 踩 -->
              <li>
                <a href="#"><i class="fa-regular fa-thumbs-down"></i></a>
              </li>
            </ul>
          </div>
          <!-- 回复、评论、编辑 -->
          <div class="other-topic-footer-top-right">
            <ul>
              <!-- 回复按钮 -->
              <li>
                <div class="kungalgame-reply-btn">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  回帖
                </div>
              </li>
              <!-- 回复 -->
              <li>
                <a href="#"><i class="fa-solid fa-reply"></i></a>
              </li>
              <!-- 评论 -->
              <li>
                <a href="#"><i class="fa-regular fa-comment-dots"></i></a>
              </li>
              <!-- 只看 -->
              <li>
                <a href="#"><i class="fa-solid fa-arrows-to-eye"></i></a>
              </li>
              <!-- 编辑 -->
              <li>
                <a href="#"><i class="fa-regular fa-pen-to-square"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 底部的评论 -->
        <Comments/>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  background: linear-gradient(
    var(--kungalgame-blue-1),
    var(--kungalgame-pink-1)
  );
  opacity: 0.7;
  font-size: 18px;
  font-weight: bold;
  font-style: oblique;
  color: var(--kungalgame-pink-1);
  text-shadow: -1px 0 var(--kungalgame-blue-5), 0 -1px var(--kungalgame-blue-5),
    1px 0 var(--kungalgame-blue-5), 0 1px var(--kungalgame-blue-5),
    1px 1px var(--kungalgame-black), -1px -1px var(--kungalgame-black),
    -1px 1px var(--kungalgame-black), 1px -1px var(--kungalgame-black),
    4px 2px 2px var(--kungalgame-red-4);
}
/* 其他人帖子内容区容器 */
.other-topic-content-container {
  width: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  border: 1px solid var(--kungalgame-blue-1);
  border-radius: 5px;
  background-color: var(--kungalgame-trans-white-3);
  box-shadow: var(--shadow);
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
.other-rank {
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
  color: var(--kungalgame-blue-5);
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
  border-left: 1px solid var(--kungalgame-blue-1);
  font-size: 15px;
}
/* 其他人回帖的下部 */
.other-topic-content-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--kungalgame-blue-1);
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
  color: var(--kungalgame-blue-4);
}
/* 单个标签的样式 */
.other-topic-content-bottom-left ul li {
  margin-left: 5px;
  font-size: small;
  padding: 2px;
  background-color: var(--kungalgame-blue-0);
  overflow: hidden;
  white-space: nowrap;
  border-radius: 5px;
  cursor: pointer;
}
.other-topic-content-bottom-left ul li:hover {
  background-color: var(--kungalgame-red-1);
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
  color: var(--kungalgame-red-4);
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
  color: var(--kungalgame-font-color-2);
  font-size: 20px;
}
.other-topic-footer-top-left ul li:nth-child(1) a {
  color: var(--kungalgame-red-4);
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
  color: var(--kungalgame-font-color-2);
  font-size: 20px;
}
/* 其它人回帖的底部 */
.other-topic-footer {
  width: 100%;
  min-height: 50px;
}
</style>
