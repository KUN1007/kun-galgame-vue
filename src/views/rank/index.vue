<script setup lang="ts"></script>

<template>
  <!-- 根容器 -->
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
    <!-- 内容区 -->
    <div class="article">
      <!-- 用户排行 -->
      <div class="kungalgamer-rank">
        <!-- 用户排行标题 -->
        <div class="kungalgamer-title">最萌的萝莉</div>
        <!-- 用户排行的交互 -->
        <div class="kungalgamer-nav">
          <!-- 萌萌点 -->
          <div class="moemoepoint">按萌萌点排序</div>
          <!-- 获赞数 -->
          <div class="praise">按获赞数排序</div>
          <!-- 发布主题数 -->
          <div class="topic">按发帖数排序</div>
          <!-- 回贴数 -->
          <div class="reply">按回贴数排序</div>
        </div>
        <!-- 单个用户的容器 -->
        <div class="kungalgamer-container">
          <!-- 单个用户 -->
          <div class="single-kungalgamer">
            <!-- 头像和名字 -->
            <div class="avatar-name">
              <img src="../img/KUN.jpg" alt="KUN" />
              <span>鲲最可爱！</span>
            </div>
            <!-- 其它信息 -->
            <div class="m-p-t-r">
              <!-- 萌萌点 -->
              <span>MP: 1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 贴子数 -->
              <span><i class="fa-regular fa-newspaper"></i>1007</span>
              <!-- 回复数 -->
              <span><i class="fa-solid fa-reply"></i>1007</span>
            </div>
          </div>
          <!-- 单个用户 -->
          <div class="single-kungalgamer">
            <!-- 头像和名字 -->
            <div class="avatar-name">
              <img src="../img/KUN.jpg" alt="KUN" />
              <span>鲲最可爱！</span>
            </div>
            <!-- 其它信息 -->
            <div class="m-p-t-r">
              <!-- 萌萌点 -->
              <span>MP: 1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 贴子数 -->
              <span><i class="fa-regular fa-newspaper"></i>1007</span>
              <!-- 回复数 -->
              <span><i class="fa-solid fa-reply"></i>1007</span>
            </div>
          </div>
          <!-- 单个用户 -->
          <div class="single-kungalgamer">
            <!-- 头像和名字 -->
            <div class="avatar-name">
              <img src="../img/KUN.jpg" alt="KUN" />
              <span>鲲最可爱鲲最可爱</span>
            </div>
            <!-- 其它信息 -->
            <div class="m-p-t-r">
              <!-- 萌萌点 -->
              <span>MP: 1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 贴子数 -->
              <span><i class="fa-regular fa-newspaper"></i>1007</span>
              <!-- 回复数 -->
              <span><i class="fa-solid fa-reply"></i>1007</span>
            </div>
          </div>
          <!-- 单个用户 -->
          <div class="single-kungalgamer">
            <!-- 头像和名字 -->
            <div class="avatar-name">
              <img src="../img/KUN.jpg" alt="KUN" />
              <span>鲲最可爱！</span>
            </div>
            <!-- 其它信息 -->
            <div class="m-p-t-r">
              <!-- 萌萌点 -->
              <span>MP: 1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 贴子数 -->
              <span><i class="fa-regular fa-newspaper"></i>1007</span>
              <!-- 回复数 -->
              <span><i class="fa-solid fa-reply"></i>1007</span>
            </div>
          </div>
          <!-- 单个用户 -->
          <div class="single-kungalgamer">
            <!-- 头像和名字 -->
            <div class="avatar-name">
              <img src="../img/KUN.jpg" alt="KUN" />
              <span>鲲最可爱！</span>
            </div>
            <!-- 其它信息 -->
            <div class="m-p-t-r">
              <!-- 萌萌点 -->
              <span>MP: 1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 贴子数 -->
              <span><i class="fa-regular fa-newspaper"></i>1007</span>
              <!-- 回复数 -->
              <span><i class="fa-solid fa-reply"></i>1007</span>
            </div>
          </div>
          <!-- 单个用户 -->
          <div class="single-kungalgamer">
            <!-- 头像和名字 -->
            <div class="avatar-name">
              <img src="../img/KUN.jpg" alt="KUN" />
              <span>鲲最可爱！</span>
            </div>
            <!-- 其它信息 -->
            <div class="m-p-t-r">
              <!-- 萌萌点 -->
              <span>MP: 1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 贴子数 -->
              <span><i class="fa-regular fa-newspaper"></i>1007</span>
              <!-- 回复数 -->
              <span><i class="fa-solid fa-reply"></i>1007</span>
            </div>
          </div>
          <!-- 单个用户 -->
          <div class="single-kungalgamer">
            <!-- 头像和名字 -->
            <div class="avatar-name">
              <img src="../img/KUN.jpg" alt="KUN" />
              <span>鲲最可爱！</span>
            </div>
            <!-- 其它信息 -->
            <div class="m-p-t-r">
              <!-- 萌萌点 -->
              <span>MP: 1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 贴子数 -->
              <span><i class="fa-regular fa-newspaper"></i>1007</span>
              <!-- 回复数 -->
              <span><i class="fa-solid fa-reply"></i>1007</span>
            </div>
          </div>
          <!-- 单个用户 -->
          <div class="single-kungalgamer">
            <!-- 头像和名字 -->
            <div class="avatar-name">
              <img src="../img/KUN.jpg" alt="KUN" />
              <span>鲲最可爱！</span>
            </div>
            <!-- 其它信息 -->
            <div class="m-p-t-r">
              <!-- 萌萌点 -->
              <span>MP: 1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 贴子数 -->
              <span><i class="fa-regular fa-newspaper"></i>1007</span>
              <!-- 回复数 -->
              <span><i class="fa-solid fa-reply"></i>1007</span>
            </div>
          </div>
          <!-- 单个用户 -->
          <div class="single-kungalgamer">
            <!-- 头像和名字 -->
            <div class="avatar-name">
              <img src="../img/KUN.jpg" alt="KUN" />
              <span>鲲最可爱！</span>
            </div>
            <!-- 其它信息 -->
            <div class="m-p-t-r">
              <!-- 萌萌点 -->
              <span>MP: 1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 贴子数 -->
              <span><i class="fa-regular fa-newspaper"></i>1007</span>
              <!-- 回复数 -->
              <span><i class="fa-solid fa-reply"></i>1007</span>
            </div>
          </div>
          <!-- 单个用户 -->
          <div class="single-kungalgamer">
            <!-- 头像和名字 -->
            <div class="avatar-name">
              <img src="../img/KUN.jpg" alt="KUN" />
              <span>鲲最可爱！</span>
            </div>
            <!-- 其它信息 -->
            <div class="m-p-t-r">
              <!-- 萌萌点 -->
              <span>MP: 1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 贴子数 -->
              <span><i class="fa-regular fa-newspaper"></i>1007</span>
              <!-- 回复数 -->
              <span><i class="fa-solid fa-reply"></i>1007</span>
            </div>
          </div>
          <!-- 单个用户 -->
          <div class="single-kungalgamer">
            <!-- 头像和名字 -->
            <div class="avatar-name">
              <img src="../img/KUN.jpg" alt="KUN" />
              <span>鲲最可爱！</span>
            </div>
            <!-- 其它信息 -->
            <div class="m-p-t-r">
              <!-- 萌萌点 -->
              <span>MP: 1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 贴子数 -->
              <span><i class="fa-regular fa-newspaper"></i>1007</span>
              <!-- 回复数 -->
              <span><i class="fa-solid fa-reply"></i>1007</span>
            </div>
          </div>
          <!-- 单个用户 -->
          <div class="single-kungalgamer">
            <!-- 头像和名字 -->
            <div class="avatar-name">
              <img src="../img/KUN.jpg" alt="KUN" />
              <span>鲲最可爱！</span>
            </div>
            <!-- 其它信息 -->
            <div class="m-p-t-r">
              <!-- 萌萌点 -->
              <span>MP: 1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 贴子数 -->
              <span><i class="fa-regular fa-newspaper"></i>1007</span>
              <!-- 回复数 -->
              <span><i class="fa-solid fa-reply"></i>1007</span>
            </div>
          </div>
          <!-- 单个用户 -->
          <div class="single-kungalgamer">
            <!-- 头像和名字 -->
            <div class="avatar-name">
              <img src="../img/KUN.jpg" alt="KUN" />
              <span>鲲最可爱！</span>
            </div>
            <!-- 其它信息 -->
            <div class="m-p-t-r">
              <!-- 萌萌点 -->
              <span>MP: 1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 贴子数 -->
              <span><i class="fa-regular fa-newspaper"></i>1007</span>
              <!-- 回复数 -->
              <span><i class="fa-solid fa-reply"></i>1007</span>
            </div>
          </div>
          <!-- 单个用户 -->
          <div class="single-kungalgamer">
            <!-- 头像和名字 -->
            <div class="avatar-name">
              <img src="../img/KUN.jpg" alt="KUN" />
              <span>鲲最可爱！</span>
            </div>
            <!-- 其它信息 -->
            <div class="m-p-t-r">
              <!-- 萌萌点 -->
              <span>MP: 1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 贴子数 -->
              <span><i class="fa-regular fa-newspaper"></i>1007</span>
              <!-- 回复数 -->
              <span><i class="fa-solid fa-reply"></i>1007</span>
            </div>
          </div>
          <!-- 单个用户 -->
          <div class="single-kungalgamer">
            <!-- 头像和名字 -->
            <div class="avatar-name">
              <img src="../img/KUN.jpg" alt="KUN" />
              <span>鲲最可爱！</span>
            </div>
            <!-- 其它信息 -->
            <div class="m-p-t-r">
              <!-- 萌萌点 -->
              <span>MP: 1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 贴子数 -->
              <span><i class="fa-regular fa-newspaper"></i>1007</span>
              <!-- 回复数 -->
              <span><i class="fa-solid fa-reply"></i>1007</span>
            </div>
          </div>
          <!-- 单个用户 -->
          <div class="single-kungalgamer">
            <!-- 头像和名字 -->
            <div class="avatar-name">
              <img src="../img/KUN.jpg" alt="KUN" />
              <span>鲲最可爱！</span>
            </div>
            <!-- 其它信息 -->
            <div class="m-p-t-r">
              <!-- 萌萌点 -->
              <span>MP: 1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 贴子数 -->
              <span><i class="fa-regular fa-newspaper"></i>1007</span>
              <!-- 回复数 -->
              <span><i class="fa-solid fa-reply"></i>1007</span>
            </div>
          </div>
          <!-- 单个用户 -->
          <div class="single-kungalgamer">
            <!-- 头像和名字 -->
            <div class="avatar-name">
              <img src="../img/KUN.jpg" alt="KUN" />
              <span>鲲最可爱！</span>
            </div>
            <!-- 其它信息 -->
            <div class="m-p-t-r">
              <!-- 萌萌点 -->
              <span>MP: 1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 贴子数 -->
              <span><i class="fa-regular fa-newspaper"></i>1007</span>
              <!-- 回复数 -->
              <span><i class="fa-solid fa-reply"></i>1007</span>
            </div>
          </div>
          <!-- 单个用户 -->
          <div class="single-kungalgamer">
            <!-- 头像和名字 -->
            <div class="avatar-name">
              <img src="../img/KUN.jpg" alt="KUN" />
              <span>鲲最可爱！</span>
            </div>
            <!-- 其它信息 -->
            <div class="m-p-t-r">
              <!-- 萌萌点 -->
              <span>MP: 1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 贴子数 -->
              <span><i class="fa-regular fa-newspaper"></i>1007</span>
              <!-- 回复数 -->
              <span><i class="fa-solid fa-reply"></i>1007</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 帖子排行 -->
      <div class="topic-rank">
        <!-- 帖子排行标题 -->
        <div class="topic-title">最萌的帖子</div>
        <!-- 帖子排行的交互 -->
        <div class="topic-nav">
          <!-- 浏览数 -->
          <div class="view">按浏览数排序</div>
          <!-- 点赞数 -->
          <div class="like">按点赞数排序</div>
          <!-- 按回复数排序 -->
          <div class="comment">按回复数排序</div>
          <!-- 按推贴数排序 -->
          <div class="top">按推贴数排序</div>
        </div>
        <!-- 单个帖子的容器 -->
        <div class="topic-container">
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">
              啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
            </div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
          </div>
          <!-- 单个帖子 -->
          <div class="single-topic">
            <!-- 帖子的名字 -->
            <div class="topic-name">啊这可海星</div>
            <!-- 帖子的其它信息 -->
            <div class="v-l-c-t">
              <!-- 浏览数 -->
              <span><i class="fa-regular fa-eye"></i>1007</span>
              <!-- 点赞数 -->
              <span><i class="fa-regular fa-thumbs-up"></i>1007</span>
              <!-- 评论数 -->
              <span><i class="fa-regular fa-comment-dots"></i>1007</span>
              <!-- 推贴数 -->
              <span><i class="fa-regular fa-hand-point-up"></i>1007</span>
            </div>
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
.root {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(../img/bg/bg1.png);
  /* background-image: url(./img/bg/bg2.png); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: 1000px;
  min-height: 1000px;
  font-family: "adobe-clean", "Source Sans Pro", -apple-system,
    "BlinkMacSystemFont", "Segoe UI,Roboto", sans-serif;
}
/* 内容区 */
.article {
  /* 固定高度 */
  width: 90%;
  height: 800px;
  /* 渐变背景色 */
  background: linear-gradient(
    var(--kungalgame-trans-pink-1),
    var(--kungalgame-trans-blue-1)
  );
  /* 调和背景色 */
  background-color: var(--kungalgame-trans-white-4);
  /* 模糊 */
  backdrop-filter: blur(5px);
  border: 1px solid var(--kungalgame-pink-4);
  box-shadow: var(--shadow);
  border-radius: 7px;
  margin: auto;
  display: flex;
  padding: 10px;
  color: var(--kungalgame-font-color-3);
}
/* 用户排行 */
.kungalgamer-rank {
  width: 50%;
  border-right: 1px solid var(--kungalgame-blue-4);
  box-sizing: border-box;
}
/* 用户排行标题 */
.kungalgamer-title {
  /* 字体设置 */
  font-size: 30px;
  color: var(--kungalgame-pink-4);
  font-style: italic;
  text-shadow: 2px 2px 4px var(--kungalgame-blue-0);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
/* 用户排行的交互 */
.kungalgamer-nav {
  display: flex;
  justify-content: space-around;
  margin-right: 10px;
  cursor: pointer;
}
.kungalgamer-nav > div:hover {
  background-color: var(--kungalgame-pink-1);
  transition: 0.2s;
}
/* 排行选择项 */
.moemoepoint,
.praise,
.topic,
.reply {
  height: 30px;
  width: 100%;
  border: 1px solid var(--kungalgame-pink-4);
  display: flex;
  justify-content: center;
  align-items: center;
}
.praise,
.topic,
.reply {
  border-left: none;
}
/* 单个用户的容器 */
.kungalgamer-container {
  height: 700px;
  border: 1px solid var(--kungalgame-pink-4);
  border-top: none;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  overflow-y: scroll;
}
/* 滚动条的样式 */
.kungalgamer-container::-webkit-scrollbar {
  display: inline;
  width: 4px;
  height: 0;
  background-color: var(--kungalgame-red-2);
  border-radius: 2px;
}
.kungalgamer-container::-webkit-scrollbar-thumb {
  background: var(--kungalgame-blue-4);
  border-radius: 2px;
}
/* 单个用户 */
.single-kungalgamer {
  height: 37px;
  flex-shrink: 0;
  border-bottom: 1px solid var(--kungalgame-pink-4);
  margin: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 用户的头像和名字 */
.avatar-name {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 用户的头像 */
.avatar-name img {
  width: 30px;
  border-radius: 50%;
}
/* 用户的名字 */
.avatar-name span {
  margin-left: 5px;
}
/* 

帖子排行

*/
/* 帖子排行 */
.topic-rank {
  width: 50%;
}
/* 帖子排行标题 */
.topic-title {
  font-size: 30px;
  color: var(--kungalgame-blue-4);
  font-style: italic;
  text-shadow: 2px 2px 4px var(--kungalgame-pink-0);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
/* 帖子排行的交互 */
.topic-nav {
  display: flex;
  justify-content: space-around;
  margin-left: 10px;
  cursor: pointer;
}
.topic-nav > div:hover {
  background-color: var(--kungalgame-blue-1);
  transition: 0.2s;
}
/* 单个交互项目 */
.view,
.like,
.comment,
.top {
  height: 30px;
  width: 100%;
  border: 1px solid var(--kungalgame-blue-4);
  display: flex;
  justify-content: center;
  align-items: center;
}
.like,
.comment,
.top {
  border-left: none;
}
/* 单个帖子的容器 */
.topic-container {
  height: 700px;
  border: 1px solid var(--kungalgame-blue-4);
  border-top: none;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  overflow-y: scroll;
}
/* 滚动条的样式 */
.topic-container::-webkit-scrollbar {
  display: inline;
  width: 4px;
  height: 0;
  background-color: var(--kungalgame-red-2);
  border-radius: 2px;
}
.topic-container::-webkit-scrollbar-thumb {
  background: var(--kungalgame-blue-4);
  border-radius: 2px;
}
/* 单个帖子 */
.single-topic {
  flex-shrink: 0;
  height: 37px;
  border-bottom: 1px solid var(--kungalgame-blue-4);
  margin: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 帖子的名字 */
.topic-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* 帖子的其它信息 */
.v-l-c-t {
  flex-shrink: 0;
}
/* 版权 */
.copyright {
  margin: 0 auto;
  margin-bottom: 20px;
}
</style>
