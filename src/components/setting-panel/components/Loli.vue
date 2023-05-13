<script setup lang="ts">
/* 导入 loli 数据 */
import {
  loliBodyLeft,
  loliBodyTop,
  loliEyeLeft,
  loliEyeTop,
  loliBrowLeft,
  loliBrowTop,
  loliMouthLeft,
  loliMouthTop,
  loliFaceLeft,
  loliFaceTop,
  lass,
  eye,
  brow,
  mouth,
  face,
} from '@/utils/loli'
</script>

<template>
  <!-- 看板娘 -->
  <div class="loli">
    <!-- 身体 -->
    <img class="lass" :src="lass" alt="ren" />
    <img class="eye" :src="eye" alt="ren" />
    <img class="brow" :src="brow" alt="ren" />
    <img class="mouth" :src="mouth" alt="ren" />
    <img class="face" :src="face" alt="ren" />
  </div>
</template>

<style lang="less" scoped>
/* 看板娘 */
.loli {
  height: 100%;
  position: absolute;
  top: -250px;
  left: 120px;
}
.lass {
  position: absolute;
  left: v-bind(loliBodyLeft);
  top: v-bind(loliBodyTop);
}
.eye {
  position: absolute;
  left: v-bind(loliEyeLeft);
  top: v-bind(loliEyeTop);
}
.brow {
  position: absolute;
  left: v-bind(loliBrowLeft);
  top: v-bind(loliBrowTop);
}
.mouth {
  position: absolute;
  left: v-bind(loliMouthLeft);
  top: v-bind(loliMouthTop);
}
.face {
  position: absolute;
  left: v-bind(loliFaceLeft);
  top: v-bind(loliFaceTop);
}
</style>
