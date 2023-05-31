<script setup lang="ts">
// Vue 中不允许在 template 中用 '<' 这个符号，换成 msg
import { useRouter } from 'vue-router'

const router = useRouter()

const msg = '< 返回上一页'
</script>

<template>
  <!-- 返回主页 -->
  <div class="return" @click="router.back()">
    <span>{{ msg }}</span>
  </div>
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
