<!-- 这个部分为发帖人的个人信息展示部分 -->
<script setup lang="ts"></script>

<template>
  <!-- 内容区左侧楼主的信息 -->
  <div class="master-topic-content-center-left">
    <!-- 楼主的头像 -->
    <div class="master-avatar">
      <!-- 楼主的头像图片 -->
      <img src="@/assets/images/KUN.jpg" alt="KUN" />
    </div>
    <!-- 楼主的名字 -->
    <div class="master-name">啊这可海星啊这</div>
    <!-- 楼主的萌萌点 -->
    <div class="master-moemoepoint">1007</div>
  </div>
</template>

<style lang="scss" scoped>
/* 内容区左侧楼主的信息 */
.master-topic-content-center-left {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
}
/* 楼主的头像 */
.master-avatar {
  /* 图像加载不出来时页面不塌陷 */
  width: 100px;
  margin-top: 17px;
}
/* 楼主的头像图片 */
.master-avatar img {
  width: 100px;
}
/* 楼主的名字 */
.master-name {
  font-size: small;
  display: flex;
  justify-content: center;
  margin-top: 17px;
}
/* 楼主的萌萌点 */
.master-moemoepoint {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
</style>
