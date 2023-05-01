<script setup lang="ts"></script>

<template>
  <div class="content-wrapper">
    <div class="visual-wrapper">
      <!-- 头部 -->
      <div class="header">
        <!-- 顶部左侧交互栏 -->
        <div class="nav-top">
          <div class="kungal-info">
            <a href="#"><img src="../img/favicon.png" alt="KUNgal" /></a>
            <a href="#"><span>KUNgal</span></a>
          </div>
          <div class="top-bar">
            <ul>
              <li>回到主页</li>
              <li>帖子发布</li>
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
          <a href="#"><img src="../img/KUN.jpg" alt="KUN" /></a>
          <span>KUN</span>
        </div>
      </div>
      <!-- 帖子池容器 -->
      <div class="pool-container">
        <!-- 帖子池顶部交互栏 -->
        <div class="pool-nav-bar">
          <!-- 热门帖子标签，根据所有帖子的总标签数推断 -->
          <div class="nav-tags">啊这可海星</div>
          <div class="nav-tags">啊这可海星</div>
          <div class="nav-tags">啊这可aaa海星</div>
          <div class="nav-tags">啊这可海星aaa</div>
          <div class="nav-tags">啊这可海星</div>
          <div class="nav-tags">啊这aaa可海星</div>
          <div class="nav-tags">啊这可海星</div>
          <div class="nav-tags">啊这可海星</div>
          <div class="nav-tags">啊这aaa可海星</div>
          <div class="nav-tags">啊这可海星</div>
          <div class="nav-tags">啊这可海星</div>
          <div class="nav-tags">啊这可海星</div>
          <div class="nav-tags">啊aaaa这可海星</div>
          <div class="nav-tags">啊这可海星</div>
          <div class="nav-tags">啊这可海星</div>
          <div class="nav-tags">啊这可a海星</div>
          <div class="nav-tags">啊这可海星</div>
        </div>
        <!-- 帖子池内容区容器 -->
        <div class="content-container">
          <!-- 帖子池单个帖子列容器 -->
          <div class="single-topic-column-container">
            <!-- 单个帖子容器 -->
            <div class="single-topic-container">
              <!-- 帖子的标题 -->
              <div class="topic-title">
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </div>
              <!-- 帖子的内容区 -->
              <div class="topic-content">
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </div>
              <!-- 帖子的状态 -->
              <div class="topic-status">
                <!-- 浏览数 -->
                <span><i class="fa-regular fa-eye"></i>10007</span>
                <!-- 点赞数 -->
                <span><i class="fa-regular fa-thumbs-up"></i>10007</span>
              </div>
              <!-- 发帖时间 -->
              <div class="topic-post-time">
                <i class="fa-solid fa-hourglass-half"></i>
                <div>10月7日-10:07:00 发布</div>
              </div>
            </div>
            <div class="single-topic-container">
              <!-- 帖子的标题 -->
              <div class="topic-title">
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </div>
              <!-- 帖子的内容区 -->
              <div class="topic-content">
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </div>
              <!-- 帖子的状态 -->
              <div class="topic-status">
                <!-- 浏览数 -->
                <span><i class="fa-regular fa-eye"></i>10007</span>
                <!-- 点赞数 -->
                <span><i class="fa-regular fa-thumbs-up"></i>10007</span>
              </div>
              <!-- 发帖时间 -->
              <div class="topic-post-time">
                <i class="fa-solid fa-hourglass-half"></i>
                <div>10月7日-10:07:00 发布</div>
              </div>
            </div>
          </div>
          <div class="single-topic-column-container">
            <div class="single-topic-container">
              <!-- 帖子的标题 -->
              <div class="topic-title">
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </div>
              <!-- 帖子的内容区 -->
              <div class="topic-content">
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </div>
              <!-- 帖子的状态 -->
              <div class="topic-status">
                <!-- 浏览数 -->
                <span><i class="fa-regular fa-eye"></i>10007</span>
                <!-- 点赞数 -->
                <span><i class="fa-regular fa-thumbs-up"></i>10007</span>
              </div>
              <!-- 发帖时间 -->
              <div class="topic-post-time">
                <i class="fa-solid fa-hourglass-half"></i>
                <div>10月7日-10:07:00 发布</div>
              </div>
            </div>
            <div class="single-topic-container">
              <!-- 帖子的标题 -->
              <div class="topic-title">
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </div>
              <!-- 帖子的内容区 -->
              <div class="topic-content">
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </div>
              <!-- 帖子的状态 -->
              <div class="topic-status">
                <!-- 浏览数 -->
                <span><i class="fa-regular fa-eye"></i>10007</span>
                <!-- 点赞数 -->
                <span><i class="fa-regular fa-thumbs-up"></i>10007</span>
              </div>
              <!-- 发帖时间 -->
              <div class="topic-post-time">
                <i class="fa-solid fa-hourglass-half"></i>
                <div>10月7日-10:07:00 发布</div>
              </div>
            </div>
          </div>
          <div class="single-topic-column-container">
            <div class="single-topic-container">
              <!-- 帖子的标题 -->
              <div class="topic-title">
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </div>
              <!-- 帖子的内容区 -->
              <div class="topic-content">
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
              <!-- 帖子的状态 -->
              <div class="topic-status">
                <!-- 浏览数 -->
                <span><i class="fa-regular fa-eye"></i>10007</span>
                <!-- 点赞数 -->
                <span><i class="fa-regular fa-thumbs-up"></i>10007</span>
              </div>
              <!-- 发帖时间 -->
              <div class="topic-post-time">
                <i class="fa-solid fa-hourglass-half"></i>
                <div>10月7日-10:07:00 发布</div>
              </div>
            </div>
            <div class="single-topic-container">
              <!-- 帖子的标题 -->
              <div class="topic-title">
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </div>
              <!-- 帖子的内容区 -->
              <div class="topic-content">
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </div>
              <!-- 帖子的状态 -->
              <div class="topic-status">
                <!-- 浏览数 -->
                <span><i class="fa-regular fa-eye"></i>10007</span>
                <!-- 点赞数 -->
                <span><i class="fa-regular fa-thumbs-up"></i>10007</span>
              </div>
              <!-- 发帖时间 -->
              <div class="topic-post-time">
                <i class="fa-solid fa-hourglass-half"></i>
                <div>10月7日-10:07:00 发布</div>
              </div>
            </div>
          </div>
          <div class="single-topic-column-container">
            <div class="single-topic-container">
              <!-- 帖子的标题 -->
              <div class="topic-title">啊这可海星啊这可海星</div>
              <!-- 帖子的内容区 -->
              <div class="topic-content">
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </div>
              <!-- 帖子的状态 -->
              <div class="topic-status">
                <!-- 浏览数 -->
                <span><i class="fa-regular fa-eye"></i>10007</span>
                <!-- 点赞数 -->
                <span><i class="fa-regular fa-thumbs-up"></i>10007</span>
              </div>
              <!-- 发帖时间 -->
              <div class="topic-post-time">
                <i class="fa-solid fa-hourglass-half"></i>
                <div>10月7日-10:07:00 发布</div>
              </div>
            </div>
            <div class="single-topic-container">
              <!-- 帖子的标题 -->
              <div class="topic-title">啊这可海星啊这可海星</div>
              <!-- 帖子的内容区 -->
              <div class="topic-content">
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </div>
              <!-- 帖子的状态 -->
              <div class="topic-status">
                <!-- 浏览数 -->
                <span><i class="fa-regular fa-eye"></i>10007</span>
                <!-- 点赞数 -->
                <span><i class="fa-regular fa-thumbs-up"></i>10007</span>
              </div>
              <!-- 发帖时间 -->
              <div class="topic-post-time">
                <i class="fa-solid fa-hourglass-half"></i>
                <div>10月7日-10:07:00 发布</div>
              </div>
            </div>
            <div class="single-topic-container">
              <!-- 帖子的标题 -->
              <div class="topic-title">啊这可海星啊这可海星</div>
              <!-- 帖子的内容区 -->
              <div class="topic-content">
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </div>
              <!-- 帖子的状态 -->
              <div class="topic-status">
                <!-- 浏览数 -->
                <span><i class="fa-regular fa-eye"></i>10007</span>
                <!-- 点赞数 -->
                <span><i class="fa-regular fa-thumbs-up"></i>10007</span>
              </div>
              <!-- 发帖时间 -->
              <div class="topic-post-time">
                <i class="fa-solid fa-hourglass-half"></i>
                <div>10月7日-10:07:00 发布</div>
              </div>
            </div>
          </div>
          <div class="single-topic-column-container">
            <div class="single-topic-container">
              <!-- 帖子的标题 -->
              <div class="topic-title">啊这可海星啊这可海星</div>
              <!-- 帖子的内容区 -->
              <div class="topic-content">
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </div>
              <!-- 帖子的状态 -->
              <div class="topic-status">
                <!-- 浏览数 -->
                <span><i class="fa-regular fa-eye"></i>10007</span>
                <!-- 点赞数 -->
                <span><i class="fa-regular fa-thumbs-up"></i>10007</span>
              </div>
              <!-- 发帖时间 -->
              <div class="topic-post-time">
                <i class="fa-solid fa-hourglass-half"></i>
                <div>10月7日-10:07:00 发布</div>
              </div>
            </div>
            <div class="single-topic-container">
              <!-- 帖子的标题 -->
              <div class="topic-title">啊这可海星啊这可海星</div>
              <!-- 帖子的内容区 -->
              <div class="topic-content">
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </div>
              <!-- 帖子的状态 -->
              <div class="topic-status">
                <!-- 浏览数 -->
                <span><i class="fa-regular fa-eye"></i>10007</span>
                <!-- 点赞数 -->
                <span><i class="fa-regular fa-thumbs-up"></i>10007</span>
              </div>
              <!-- 发帖时间 -->
              <div class="topic-post-time">
                <i class="fa-solid fa-hourglass-half"></i>
                <div>10月7日-10:07:00 发布</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧的功能栏 -->
      <div class="kungalgame-right-bar">
        <!-- 右侧部分 -->
        <div class="kungalgame-right-bar-right">
          <!-- 对帖子进行排序 -->
          <div class="sort">
            <div>排序</div>
            <!-- 左侧部分 -->
            <div class="kungalgame-right-bar-left">
              <!-- 按照浏览数排序 -->
              <div><i class="fa-regular fa-eye"></i> 按照浏览数排序</div>
              <!-- 按照点赞数排序 -->
              <div><i class="fa-regular fa-thumbs-up"></i> 按照点赞数排序</div>
              <!-- 按照时间排序 -->
              <div><i class="fa-solid fa-hourglass-half"></i> 按照时间排序</div>
            </div>
            <div><i class="fa-solid fa-arrow-down-wide-short"></i></div>
          </div>
          <!-- 返回顶部 -->
          <div class="top">
            <div>顶部</div>
            <div><i class="fa-solid fa-arrows-up-to-line"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  list-style: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
}
*::-webkit-scrollbar {
  display: none;
}
.visual-wrapper {
  height: 1500px;
  display: flex;
  flex-direction: column;
  background-image: url(../img/bg/bg6.png);
  /* background-image: url(./img/bg-dark.png); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: 700px;
  font-family: "adobe-clean", "Source Sans Pro", -apple-system,
    "BlinkMacSystemFont", "Segoe UI,Roboto", sans-serif;
}
/* 帖子池容器 */
.pool-container {
  /* 最小高度 */
  min-height: 400px;
  /* 最小宽度 */
  min-width: 900px;
  /* 最大宽度 */
  max-width: 1450px;
  /* 占页面的宽度比例 */
  width: 90%;
  /* 居中 */
  margin: 0 auto;
  display: flex;
  /* 不收缩 */
  flex-shrink: 0;
  /* 竖直方向弹性盒 */
  flex-direction: column;
  /* 毛玻璃背景 */
  backdrop-filter: blur(5px);
  background-color: var(--kungalgame-trans-white-5);
  border-radius: 7px;
  margin-top: 7px;
}
/* 帖子池顶部交互栏 */
.pool-nav-bar {
  /* 换行弹性盒 */
  display: flex;
  flex-wrap: wrap;
  /* 居中 */
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}
/* 热门帖子标签 */
.nav-tags {
  /* 单个标签不换行 */
  white-space: nowrap;
  /* 距离其它帖子的距离 */
  font-size: 14px;
  margin: 2px;
  padding: 7px;
  background-color: var(--kungalgame-trans-blue-3);
  border-radius: 17px;
  cursor: pointer;
}
.nav-tags:hover {
  background-color: var(--kungalgame-trans-red-3);
}
/* 帖子池内容区容器 */
.content-container {
  display: flex;
}
/* 帖子池单个帖子列容器 */
.single-topic-column-container {
  /* 根据页面宽度增长 */
  width: 1px;
  flex-grow: 1;
  /* 5 行的行距 */
  margin: 5px;
}
/* 帖子池单个帖子 */
.single-topic-container {
  /* 单个帖子距下方的距离 */
  margin-bottom: 7px;
  /* 竖直方向弹性布局 */
  display: flex;
  flex-direction: column;
  /* 圆角 */
  border-radius: 7px;
  /* Less random color */
  background-color: azure;
  border: 1px solid black;
  cursor: pointer;
}
.single-topic-container:hover {
  background-color: var(--kungalgame-blue-1);
}
/* 帖子的标题 */
.topic-title {
  /* 标题显示两行、超出部分隐藏 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 显示省略号 */
  display: -webkit-box; /* 将文本框转化为弹性伸缩盒子 */
  -webkit-box-orient: vertical; /* 设置为纵向排列 */
  -webkit-line-clamp: 2; /* 显示两行文本 */
  /* 居中 */
  margin: 0 auto;
  margin-top: 7px;
  padding: 0 7px;
  font-weight: bold;
  color: var(--kungalgame-font-color-2);
}
/* 帖子的内容区 */
.topic-content {
  /* 单个帖子的最大高度 */
  max-height: 700px;
  overflow: hidden;
  font-size: 14px;
  padding: 0 10px;
  margin: 7px 0;
}
/* 帖子的状态 */
.topic-status {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  /* 窗口缩小不换行 */
  overflow: hidden;
  flex-wrap: wrap;
}
.topic-status i {
  color: var(--kungalgame-red-4);
}
.topic-post-time {
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
.topic-post-time i {
  margin: 0 5px;
  color: var(--kungalgame-purple-5);
}
/* 右侧的功能栏 */
.kungalgame-right-bar {
  /* 位置 fix */
  position: fixed;
  top: 70%;
  /* 距离右侧的距离 */
  right: 1%;
  z-index: 7;
  /* 居中 */
  display: flex;
}
/* 功能栏的左侧 */
.kungalgame-right-bar-left {
  position: absolute;
  white-space: nowrap;
  right: 50px;
  cursor: pointer;
  display: none;
  background-color: var(--kungalgame-blue-2);
}
.kungalgame-right-bar-left > div {
  padding: 7px;
}
.kungalgame-right-bar-left > div:hover {
  background-color: var(--kungalgame-red-2);
}
/* 排序 hover 出现 */
.kungalgame-right-bar .sort:hover .kungalgame-right-bar-left {
  display: block;
}
/* 图标字体的颜色 */
.kungalgame-right-bar-left i {
  margin-right: 10px;
  color: var(--kungalgame-red-4);
}
/* 最后一个排序的样式 */
.kungalgame-right-bar-left div:last-child i {
  margin-right: 14px;
}
/* 右侧部分 */
.kungalgame-right-bar-right {
  position: relative;
}
/* 排序 */
.sort,
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
  padding: 0 9px;
  background-color: var(--kungalgame-blue-2);
  box-shadow: var(--shadow);
  cursor: pointer;
}
.top {
  background-color: var(--kungalgame-red-1);
}
.top {
  margin-top: 11px;
}
.sort i,
.top i {
  margin-top: 5px;
  color: var(--kungalgame-red-6);
}
</style>
