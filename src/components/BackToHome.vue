<script setup lang="ts">
// Vue 中不允许在 template 中用 '<' 这个符号，换成 msg
const msg = '< 返回主页'
</script>

<template>
  <router-link to="/">
    <!-- 返回主页 -->
    <div class="return">
      <span>{{ msg }}</span>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
/* 返回主页 */
.return {
  position: absolute;
  bottom: 1%;
  left: 2%;
  color: $kungalgame-font-color-0;
  cursor: pointer;
}
.return:hover {
  color: $kungalgame-blue-4;
}
</style>
