<script setup lang="ts"></script>

<template>
  <!-- 根容器 -->
  <div class="root">
    <!-- 内容区容器 -->
    <div class="container">
      <p>404</p>
      <p>您访问了一个不存在的页面</p>
      <button><router-link to="/">点击返回主页</router-link></button>
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
  min-width: 700px;
  min-height: 600px;
  background: linear-gradient(
    $kungalgame-trans-pink-1,
    $kungalgame-trans-blue-1
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
p:first-child {
  font-size: 50px;
  font-weight: bold;
  color: $kungalgame-red-5;
}
button {
  border: 1px solid $kungalgame-blue-4;
  width: 200px;
  height: 30px;
  font-size: 17px;
  background-color: $kungalgame-trans-blue-1;
  cursor: pointer;
  &:hover {
    background-color: $kungalgame-blue-4;
    transition: 0.2s;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: $kungalgame-blue-4;
    &:hover {
      color: $kungalgame-white;
      transition: 0.2s;
    }
  }
}
</style>
