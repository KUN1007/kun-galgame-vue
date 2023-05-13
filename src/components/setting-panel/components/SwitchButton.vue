<!-- KUNGalgame 通用切换按钮 -->

<script setup lang="ts"></script>

<template>
  <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
</template>

<style lang="less" scoped>
input {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 50px;
  height: 27px;
  background: @kungalgame-trans-blue-2;
  display: block;
  border-radius: 100px;
  position: relative;
}

label:after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 23px;
  height: 23px;
  background: @kungalgame-white;
  border-radius: 15px;
  transition: 0.3s;
}

input:checked + label {
  background: @kungalgame-blue-4;
}

input:checked + label:after {
  left: calc(100% - 2px);
  transform: translateX(-100%);
}

// centering
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
