<!-- 
  这是单个评论的组件
 -->
<script setup lang="ts"></script>

<template>
  <div class="container">
    <!-- 用户头像 -->
    <img src="@/assets/images/KUN.jpg" alt="KUN" />
    <!-- 单个评论的内容区 -->
    <div class="content">
      <!-- 单个评论内容区顶部 -->
      <div class="single-comment-content-top">
        <!-- 顶部左侧名字 -->
        <div class="single-comment-left">
          鲲回复@<a href="#">啊这可海星啊这</a>
        </div>
        <!-- 顶部右侧点赞、踩 -->
        <div class="single-comment-right">
          <ul>
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
      </div>
      <!-- 单个评论内容区底部 -->
      <div class="single-comment-content-bottom">
        啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
        啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 单个评论容器 */
.container {
  display: flex;
  margin: 10px 0;
}
.container img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
/* 单个评论的内容区 */
.content {
  display: flex;
  flex-direction: column;
}
/* 单个评论内容区顶部 */
.single-comment-content-top {
  display: flex;
  justify-content: space-between;
}
/* 顶部左侧名字 */
.single-comment-left {
  font-size: 15px;
}
.single-comment-left a {
  color: $kungalgame-blue-5;
}
.single-comment-left a:hover {
  text-decoration: underline;
}
.single-comment-right ul {
  display: flex;
  align-items: center;
}
.single-comment-right ul li {
  margin-right: 10px;
}
.single-comment-right ul li a {
  color: $kungalgame-font-color-2;
}
/* 单个评论内容区底部 */
.single-comment-content-bottom {
  font-size: 12px;
  text-indent: 25px;
  /* 标题显示两行、超出部分隐藏 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 显示省略号 */
  display: -webkit-box; /* 将文本框转化为弹性伸缩盒子 */
  -webkit-box-orient: vertical; /* 设置为纵向排列 */
  -webkit-line-clamp: 10; /* 显示两行文本 */
}
</style>
