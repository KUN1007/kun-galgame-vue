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
  <div class="root">
    <div class="title">设置面板</div>
    <div class="mode">白天 / 黑夜切换</div>
    <div class="main">主页页面宽度设置</div>
    <div class="background">论坛背景设置</div>
    <div class="reset">恢复默认设置</div>
    <!-- 看板娘 -->
    <div class="container">
      <!-- 身体 -->
      <img class="lass" :src="lass" alt="ren" />
      <img class="eye" :src="eye" alt="ren" />
      <img class="brow" :src="brow" alt="ren" />
      <img class="mouth" :src="mouth" alt="ren" />
      <img class="face" :src="face" alt="ren" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.root {
  width: 300px;
  height: 100%;
  top: 65px;
  right: 0;
  position: absolute;
  background-color: @kungalgame-trans-white-5;
  backdrop-filter: blur(5px);
  border-radius: 10px;
  z-index: 1007;
  overflow: hidden;
}
.container {
  height: 100%;
  margin: auto;
  position: relative;
  left: -148px;
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
