<script setup lang="ts"></script>

<template>
  <!-- 根容器 -->
  <div class="root">
    <!-- 内容区容器 -->
    <div class="container">
      <p>404</p>
      <p>您访问了一个不存在的页面</p>
      <button>点击返回主页</button>
    </div>
  </div>
</template>

<style scoped>
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
    var(--kungalgame-trans-pink-1),
    var(--kungalgame-trans-blue-1)
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
  color: var(--kungalgame-red-5);
}
button {
  border: 1px solid var(--kungalgame-blue-4);
  width: 200px;
  height: 30px;
  font-size: 17px;
  background-color: var(--kungalgame-trans-blue-1);
  cursor: pointer;
}
button:hover {
  background-color: var(--kungalgame-blue-4);
  color: var(--kungalgame-white);
  transition: 0.2s;
}
</style>
