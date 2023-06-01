<script setup lang="ts">
import { log } from '../log'
</script>

<template>
  <!-- 单个记录 -->
  <div class="log" v-for="kun in log" :key="kun.index">
    <!-- 原因 -->
    <div class="reason">{{ kun.reason }}</div>
    <!-- 后果 -->
    <div class="result">萌萌点 - {{ kun.result }}</div>
  </div>
</template>

<style lang="scss" scoped>
/* 单个记录 */
.log {
  margin: 20px 40px;
  border-bottom: 1px solid $kungalgame-blue-4;
}
/* 原因 */
.reason {
  width: 80%;
  padding-left: 5px;
  border-left: 2px solid $kungalgame-blue-4;
}
/* 后果 */
.result {
  border-right: 4px solid $kungalgame-red-4;
  padding-right: 5px;
  margin-top: 10px;
  display: flex;
  justify-content: end;
}
</style>
