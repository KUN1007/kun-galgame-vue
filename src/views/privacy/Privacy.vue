<script setup lang="ts"></script>

<template>
  <!-- 根容器 -->
  <div class="root">
    <!-- 内容容器 -->
    <div class="container">
      <!-- 标题 -->
      <div class="title">隐私政策</div>
      <!-- 内容区 -->
      <div class="article">
        <br />
        <p>
          我们永远不会利用你的个人信息，不会将你的个人信息用于除了本站以外的任何地方
        </p>
        <br />
        <p>
          是的，只有这一句，因为<strong>我们不是商业论坛，不以盈利为目的</strong>，没必要用个人数据赚钱。
        </p>
        <br />
        <p>准确来讲，我们需要使用以下权限：</p>
        <br />
        <ul class="list">
          <li>个人相关：邮箱、注册时间等，用于找回密码</li>
          <li>
            日志相关：通过 cookies、Local Storage
            等手段，提供搜索历史、图片缓存等优化体验，您可以通过禁用 cookies
            等手段来禁止我们使用
          </li>
          <li>设备相关：设备日期、操作系统信息等，方便我们对设备进行适配</li>
        </ul>
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
.root {
  height: 100vh;
  width: 100vw;
  min-width: 700px;
  min-height: 600px;
  background: linear-gradient(
    @kungalgame-trans-pink-1,
    @kungalgame-trans-blue-1
  );
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* 内容区容器 */
.container {
  /* 固定宽高 */
  width: 600px;
  height: 500px;
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
/* 内容区 */
.article {
  padding: 20px;
  box-sizing: border-box;
}
/* 单个项目之间的距离 */
.list > li {
  margin: 7px 0;
  list-style: inside;
}
/* 页面的标题 */
.title {
  /* 固定高度 */
  font-size: 30px;
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 距离下一个项目的距离 */
  margin: 10px 0;
}
/* 版权 */
.copyright {
  position: absolute;
  bottom: -40px;
  white-space: nowrap;
}
</style>
