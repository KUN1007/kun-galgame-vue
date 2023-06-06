<script setup lang="ts"></script>

<template>
  <div class="root">
    <div class="container">
      <p>登陆成功</p>
      <p>3 秒后你将会进入主页</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 100vh;
  width: 100vw;
  min-width: 700px;
  min-height: 600px;
  background: linear-gradient(
    var(--kungalgame-trans-pink-1),
    var(--kungalgame-trans-blue-1)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--kungalgame-white);
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
