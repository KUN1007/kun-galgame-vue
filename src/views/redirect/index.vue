<script setup lang="ts"></script>

<template>
  <div class="root">
    <div class="container">
      <p>登陆成功</p>
      <p>3 秒后你将会进入主页</p>
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
.container {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
p {
  margin: 7px;
}
</style>
