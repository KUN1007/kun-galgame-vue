<script setup lang="ts"></script>

<template>
  <div class="root">
    <!-- 头部 -->
    <div class="header">
      <!-- 顶部左侧交互栏 -->
      <div class="nav-top">
        <div class="kungal-info">
          <img src="../img/favicon.png" alt="KUNgal" />
          <span>KUNGalgame</span>
        </div>
        <div class="top-bar">
          <ul>
            <li>所有帖子</li>
            <li>发布帖子</li>
            <li>技术交流</li>
            <li>数据统计</li>
            <div class="top-bar-box"></div>
          </ul>
        </div>
      </div>
      <!-- 顶部全局搜索框 -->
      <!--           <div class="top-search-bar">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </div> -->
      <!-- 用户个人信息 -->
      <div class="kungalgamer-info">
        <img src="../img/KUN.jpg" alt="KUN" />
        <span>KUN</span>
      </div>
    </div>
    <!-- 内容区容器 -->
    <div class="container">
      <!-- 页面标题 -->
      <div class="title">不萌记录</div>
      <!-- 文章部分 -->
      <div class="article">
        <!-- 文章标题 -->
        <div class="article-title">
          这里记录了迄今为止所有被处罚的记录，希望大家不要这样做
        </div>
        <!-- 内容区容器 -->
        <div class="content">
          <!-- 原因、处理方式 -->
          <div class="log-title">
            <span>原因</span>
            <span>后果</span>
          </div>
          <!-- 单个记录 -->
          <div class="single-log">
            <!-- 原因 -->
            <div class="reason">
              啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
            </div>
            <!-- 后果 -->
            <div class="result">萌萌点 - 1007</div>
          </div>
          <!-- 单个记录 -->
          <div class="single-log">
            <!-- 原因 -->
            <div class="reason">啊这可海星</div>
            <!-- 后果 -->
            <div class="result">萌萌点 - 10</div>
          </div>
          <!-- 单个记录 -->
          <div class="single-log">
            <!-- 原因 -->
            <div class="reason">啊这可海星</div>
            <!-- 后果 -->
            <div class="result">萌萌点 - 10</div>
          </div>
          <!-- 单个记录 -->
          <div class="single-log">
            <!-- 原因 -->
            <div class="reason">啊这可海星</div>
            <!-- 后果 -->
            <div class="result">萌萌点 - 10</div>
          </div>
          <!-- 单个记录 -->
          <div class="single-log">
            <!-- 原因 -->
            <div class="reason">啊这可海星</div>
            <!-- 后果 -->
            <div class="result">萌萌点 - 10</div>
          </div>
          <!-- 单个记录 -->
          <div class="single-log">
            <!-- 原因 -->
            <div class="reason">啊这可海星</div>
            <!-- 后果 -->
            <div class="result">萌萌点 - 10</div>
          </div>
          <!-- 单个记录 -->
          <div class="single-log">
            <!-- 原因 -->
            <div class="reason">啊这可海星</div>
            <!-- 后果 -->
            <div class="result">萌萌点 - 10</div>
          </div>
          <!-- 单个记录 -->
          <div class="single-log">
            <!-- 原因 -->
            <div class="reason">啊这可海星</div>
            <!-- 后果 -->
            <div class="result">萌萌点 - 10</div>
          </div>
          <!-- 单个记录 -->
          <div class="single-log">
            <!-- 原因 -->
            <div class="reason">啊这可海星</div>
            <!-- 后果 -->
            <div class="result">萌萌点 - 10</div>
          </div>
          <!-- 单个记录 -->
          <div class="single-log">
            <!-- 原因 -->
            <div class="reason">啊这可海星</div>
            <!-- 后果 -->
            <div class="result">萌萌点 - 10</div>
          </div>
          <!-- 单个记录 -->
          <div class="single-log">
            <!-- 原因 -->
            <div class="reason">啊这可海星</div>
            <!-- 后果 -->
            <div class="result">萌萌点 - 10</div>
          </div>
          <!-- 单个记录 -->
          <div class="single-log">
            <!-- 原因 -->
            <div class="reason">啊这可海星</div>
            <!-- 后果 -->
            <div class="result">萌萌点 - 10</div>
          </div>
          <!-- 单个记录 -->
          <div class="single-log">
            <!-- 原因 -->
            <div class="reason">啊这可海星</div>
            <!-- 后果 -->
            <div class="result">萌萌点 - 10</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 版权 -->
    <div class="copyright">
      <span>Copyright © 2023 KUNgalgame</span>
      <span>All rights reserved | Version 0.01</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
* {
  list-style: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
}
*::-webkit-scrollbar {
  display: none;
}
.root {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(../img/bg/bg6.png);
  /* background-image: url(./img/bg/bg2.png); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: 800px;
  min-height: 750px;
  font-family: 'adobe-clean', 'Source Sans Pro', -apple-system,
    'BlinkMacSystemFont', 'Segoe UI,Roboto', sans-serif;
}
/* 根容器 */
.container {
  /* 固定宽高 */
  height: 600px;
  width: 700px;
  /* 居中 */
  margin: auto;
  background-color: @kungalgame-trans-white-5;
  border: 1px solid @kungalgame-red-4;
  overflow: hidden;
  border-radius: 7px;
  /* 模糊背景 */
  backdrop-filter: blur(5px);
  display: flex;
  color: @kungalgame-font-color-3;
  position: relative;
  box-shadow: @shadow;
}
/* 页面标题 */
.title {
  /* 字体竖直方向分布 */
  font-size: 30px;
  padding: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: @kungalgame-font-color-2;
}
/* 文章部分 */
.article {
  width: 90%;
  background-color: @kungalgame-trans-white-3;
  border-left: 1px solid @kungalgame-red-4;
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* 文章标题 */
.article-title {
  margin: 20px 0;
  font-size: 20px;
}
/* 内容区容器 */
.content {
  width: 100%;
  height: 100%;
  height: 500px;
  /* y 轴溢出滚动 */
  overflow-y: scroll;
  padding: 0 10px;
  box-sizing: border-box;
}
/* 滚动条的样式 */
.content::-webkit-scrollbar {
  display: inline;
  width: 4px;
  height: 0;
  background-color: @kungalgame-red-2;
  border-radius: 2px;
}
.content::-webkit-scrollbar-thumb {
  background: @kungalgame-blue-4;
  border-radius: 2px;
}
/* 原因、处理方式 */
.log-title {
  top: 0;
  padding-top: 20px;
  height: 40px;
  /* 相对于标题粘滞定位 */
  position: sticky;
  display: flex;
  justify-content: space-between;
}
/* 单个记录 */
.single-log {
  margin: 20px 40px;
  border-bottom: 1px solid @kungalgame-blue-4;
}
/* 原因 */
.reason {
  width: 80%;
  padding-left: 5px;
  border-left: 2px solid @kungalgame-blue-4;
}
/* 后果 */
.result {
  border-right: 4px solid @kungalgame-red-4;
  padding-right: 5px;
  margin-top: 10px;
  display: flex;
  justify-content: end;
}
.copyright {
  margin: 10px auto;
}
</style>
