<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <!-- 根容器 -->
  <div class="root">
    <!-- 内容区容器 -->
    <div class="container">
      <div class="title">
        <!-- 页面的标题 -->
        <div class="contact-us">加入 / 联系我们</div>
        <div class="kungalgame">KUNGalgame</div>
      </div>
      <!-- 联系方式 -->
      <div class="content">
        <div>
          <span>Telegram 群</span>
          <i class="fa-brands fa-telegram"></i>
        </div>
        <div>
          <span>QQ 群</span>
          <i class="fa-brands fa-qq"></i>
        </div>
        <div>
          <span>Bilibili 主页</span>
          <i class="fa-brands fa-bilibili"></i>
        </div>
      </div>
      <!-- 返回主页 -->
      <div class="return">
        <!-- 这里 Vue 不让用 < 这个符号，换成图标字体 -->
        <span><Icon icon="line-md:arrow-small-left" />返回主页</span>
      </div>
      <!-- 版权 -->
      <div class="copyright">
        <span>Copyright © 2023 KUNgalgame</span>
        <span>All rights reserved | Version 0.01</span>
      </div>
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
/* 根容器 */
.root {
  height: 100vh;
  width: 100vw;
  min-width: 500px;
  min-height: 500px;
  background: linear-gradient(
    @kungalgame-trans-pink-1,
    @kungalgame-trans-blue-1
  );
  display: flex;
}
/* 内容区容器 */
.container {
  /* 固定宽高 */
  width: 400px;
  height: 300px;
  /* 居中 */
  margin: auto;
  position: relative;
  background-color: @kungalgame-trans-blue-0;
  border: 1px solid @kungalgame-trans-blue-4;
  border-radius: 7px;
  box-shadow: @kungalgame-shadow-0;
  /* 竖直方向弹性分布 */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: @kungalgame-font-color-3;
}
/* 内容区容器 hover */
.container:hover {
  box-shadow: @kungalgame-shadow-1;
  transition: 0.3s;
}
/* 页面的标题 */
.title {
  /* 固定高度 */
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 距离下一个项目的距离 */
  margin-bottom: 30px;
}
/* 加入 / 联系我们 */
.contact-us {
  position: relative;
  font-size: 30px;
  z-index: 1;
}
/* 网站的名字 */
.kungalgame {
  position: absolute;
  bottom: 15%;
  color: @kungalgame-trans-white-7;
  text-shadow: 2px 2px 3px @kungalgame-trans-blue-1;
  font-size: 60px;
  font-style: italic;
  cursor: pointer;
}
.kungalgame:hover {
  color: @kungalgame-blue-4;
  transition: 0.1s;
}
/* 联系方式容器 */
.content {
  display: flex;
  font-size: 20px;
}
/* 单个项目 */
.content > div {
  /* 固定宽度 */
  width: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* 文字提示 */
.content span {
  margin-bottom: 20px;
  cursor: pointer;
}
/* 图标字体 */
.content i {
  height: 100%;
  color: @kungalgame-blue-4;
  cursor: pointer;
  text-align: center;
}
.content i:hover {
  color: @kungalgame-red-4;
  transform: scale(1.2);
  transition: 0.1s;
}
/* 返回主页 */
.return {
  position: absolute;
  bottom: 1%;
  left: 2%;
  color: @kungalgame-font-color-0;
  cursor: pointer;
}
.return:hover {
  color: @kungalgame-blue-4;
}
/* 版权 */
.copyright {
  position: absolute;
  bottom: -20%;
  white-space: nowrap;
}
</style>
