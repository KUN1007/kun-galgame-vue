<script lang="ts">
export default {};
</script>
<template>
  <div class="content-left-part">
    <!-- 帖子详情页的交互 -->
    <div class="topic-page-nav">
      <!-- 交互区容器 -->
      <div class="topic-page-nav-container">
        <ul>
          <li><i class="fa-solid fa-people-group fa-bounce"></i>进入帖子池</li>
          <li><i class="fa-solid fa-arrows-up-to-line"></i>返回到顶端</li>
          <li><i class="fa-solid fa-house"></i>返回到首页</li>
        </ul>
        <ul>
          <li><i class="fa-regular fa-clock"></i>按时间排序</li>
          <li><i class="fa-regular fa-thumbs-up"></i>按点赞排序</li>
          <li><i class="fa-regular fa-comment-dots"></i>按回复排序</li>
        </ul>
      </div>
    </div>
    <!-- 相同标签下的其它帖子 -->
    <div class="same-tag-topic">
      <ul>
        <li><a href="#">相同标签下的其它帖子</a></li>
        <li>
          <a href="#"
            >啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星</a
          >
        </li>
        <li>
          <a href="#">啊这可海星啊这可海星啊这可海星啊这可海星</a>
        </li>
        <li>
          <a href="#"
            >啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星</a
          >
        </li>
        <li>
          <a href="#"
            >啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星</a
          >
        </li>
        <li><a href="#">啊这啊这可海星啊这可海星</a></li>
      </ul>
    </div>
    <!-- 楼主的其它帖子 -->
    <div class="master-other-topic">
      <ul>
        <li><a href="#">楼主的其它帖子</a></li>
        <li><a href="#">啊这可海星</a></li>
        <li><a href="#">啊这可海星</a></li>
        <li><a href="#">啊这可海星</a></li>
        <li><a href="#">啊这可海星</a></li>
        <li><a href="#">啊这可海星</a></li>
      </ul>
    </div>
    <!-- 版权描述,版本号 -->
    <div class="kungalgame-footer-copyright">
      <span>Copyright © 2023 KUNgalgame</span>
      <span>All rights reserved | Version 0.01</span>
    </div>
  </div>
</template>
<style scoped></style>
