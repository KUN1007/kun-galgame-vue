<script setup lang="ts"></script>

<template>
  <div class="root">
    <div class="container">
      <div class="title">赞助我们</div>
      <p class="warning">
        赞助我们<span>没有任何的萌萌点奖励</span>，不过可以帮我们缓解一部分服务器的费用，您确定要赞助吗
      </p>
      <div class="btn">
        <div>确定赞助</div>
        <div>返回主页</div>
      </div>
    </div>
    <!-- 版权 -->
    <div class="copyright">
      <span>Copyright © 2023 KUNgalgame</span>
      <span>All rights reserved | Version 0.01</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  min-width: 500px;
  min-height: 500px;
  background: linear-gradient(
    $kungalgame-trans-pink-1,
    $kungalgame-trans-blue-1
  );
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  /* 固定宽高 */
  width: 400px;
  height: 300px;
  /* 居中 */
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: $kungalgame-trans-blue-0;
  box-shadow: $kungalgame-shadow-0;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  border-radius: 7px;
}
.container:hover {
  box-shadow: $kungalgame-shadow-1;
  transition: 0.3s;
}
.title {
  /* 固定高度 */
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 距离下一个项目的距离 */
  margin-bottom: 30px;
  font-size: 30px;
}
.warning span {
  color: $kungalgame-red-5;
}
.btn {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
.btn > div {
  padding: 7px 10px;
}
.btn > div:nth-child(1) {
  background-color: $kungalgame-trans-red-0;
  color: $kungalgame-red-5;
  border: 1px solid $kungalgame-red-4;
  cursor: pointer;
}
.btn > div:nth-child(1):hover {
  background-color: $kungalgame-red-1;
}
.btn > div:nth-child(2) {
  background-color: $kungalgame-trans-blue-1;
  color: $kungalgame-blue-5;
  border: 1px solid $kungalgame-blue-4;
  cursor: pointer;
}
.btn > div:nth-child(2):hover {
  background-color: $kungalgame-trans-blue-2;
}
.copyright {
  margin-bottom: 20px;
  white-space: nowrap;
}
</style>
