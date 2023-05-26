<script setup lang="ts"></script>
<template>
  <!-- 帖子发布者个人信息 -->
  <div class="kungalgamer-topic-info">
    <!-- 发布者头像 -->
    <div class="kungalgamer-topic-avatar">
      <a href="#"><img src="@/assets/images/topic.jpg" alt="鲲" /></a>
    </div>
    <!-- 发布者姓名 -->
    <div class="kungalgamer-name">
      <a href="#"><span>鲲最可爱！</span></a>
    </div>
    <!-- 发布者相关信息 -->
    <!--                   <div class="kungalgamer-ranking"></div> -->
  </div>
</template>
<style lang="scss" scoped>
/* 发帖人信息 */
.kungalgamer-topic-info {
  width: 70px;
  height: 100%;
  /* 单个帖子左右两部分发布人信息和帖子概览均为竖向弹性盒 */
  display: flex;
  flex-direction: column;
  /* 发帖人信息距离帖子概览的距离 */
  margin: 0 5px;
}
.kungalgamer-topic-avatar,
.kungalgamer-name {
  width: 100%;
  height: 1px;
}
/* 头像图片容器设置 */
.kungalgamer-topic-avatar {
  /* 头像部分占发布人信息区域的比例 */
  flex-grow: 3;
  display: flex;
  justify-content: center;
}
.kungalgamer-topic-avatar a {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-grow: 1;
}
/* 头像图片样式设置 */
.kungalgamer-topic-avatar img {
  padding: 2px;
  border-radius: 50%;
  /* 页面缩小时头像缩小 */
  display: inline-block;
}
/* 发帖人昵称位置设置 */
.kungalgamer-name {
  border-top: 1px solid $kungalgame-gray-2;
  flex-grow: 1;
  display: flex;
}
.kungalgamer-name a {
  display: flex;
  width: 1px;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
}
/* 发帖人昵称样式设置 */
.kungalgamer-name span {
  /* 页面缩小时省略不换行 */
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  /* 颜色和字体大小 */
  color: $kungalgame-font-color-3;
  font-size: x-small;
}
</style>
