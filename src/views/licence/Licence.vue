<script setup lang="ts"></script>

<template>
  <div class="root">
    <div class="container">
      <div class="title">用户协议</div>
      <div class="article">
        <p>
          当您注册成为 KUNGalgame 的会员时，您即成为 KUNGalgame
          的用户，这时我们认为您已经确认以下用户协议：
        </p>
        <p>1. 用户所发表的一切言论与 KUNGalgame 没有任何关系</p>
        <p>
          2. KUNGalgame 只是一个开源的、合作的 Web 开发项目，目的是供所有人学习
          Web 知识
        </p>
        <p>3. 用户做出不利于我们开源项目维护的行为时，我们有权对用户进行封禁</p>
        <p>4. 因用户账号被盗等造成的损失，KUNGalgame 概不承担</p>
        <p>协议版本 2019/10/07</p>
      </div>
      <!-- 版权 -->
      <div class="copyright">
        <span>Copyright © 2023 KUNgalgame</span>
        <span>All rights reserved | Version 0.01</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 根容器 */
.root {
  height: 100vh;
  width: 100vw;
  min-width: 600px;
  min-height: 500px;
  background: linear-gradient(
    var(--kungalgame-trans-pink-1),
    var(--kungalgame-trans-blue-1)
  );
  display: flex;
}
/* 内容区容器 */
.container {
  /* 固定宽高 */
  width: 500px;
  height: 400px;
  /* 居中 */
  margin: auto;
  position: relative;
  border-radius: 7px;
  box-shadow: var(--kungalgame-shadow-0);
  /* 竖直方向弹性分布 */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--kungalgame-font-color-3);
  padding: 20px;
  box-sizing: border-box;
}
/* 内容区容器 hover */
.container:hover {
  box-shadow: var(--kungalgame-shadow-1);
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
  margin-bottom: 10px;
  font-size: 30px;
}
.article > p {
  margin: 5px;
}
.article > p:nth-child(2) {
  margin-top: 20px;
}
.article > p:last-child {
  margin-top: 50px;
  margin-left: 160px;
}
.copyright {
  position: absolute;
  bottom: -40px;
}
</style>
