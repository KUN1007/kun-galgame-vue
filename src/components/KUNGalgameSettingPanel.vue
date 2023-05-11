<script setup lang="ts">
import loliData from '@/assets/images/ren/ren.json'
import { onMounted } from 'vue'

/* 随机数 */
function getRandomNum(number1: number, number2: number) {
  return Math.floor(Math.random() * number2) + number1
}
/* 随机汗水 */
const randomSweat = getRandomNum(0, 1)
/* 随机眉毛 */
const randomBrow = getRandomNum(1, 18)
/* 随机眼睛 */
const randomEye = getRandomNum(19, 36)
/* 随机嘴巴 */
const randomMouth = getRandomNum(37, 56)
/* 随机腮红 */
const randomFace = getRandomNum(57, 62)
/* 随机衣服 */
const randomSkirt = getRandomNum(63, 72)
// /* 衣服1 */
// const randomSkirt1 = getRandomNum(63, 64)
// /* 衣服2 */
// const randomSkirt2 = getRandomNum(65, 66)
// /* 衣服3 */
// const randomSkirt3 = getRandomNum(67, 68)
// /* 衣服4 */
// const randomSkirt4 = getRandomNum(69, 70)
// /* 衣服5 */
// const randomSkirt5 = getRandomNum(71, 72)

interface Loli {
  group_layer_id: number
  height: number
  layer_id: number
  left: number
  name: string
  top: number
  visible: number
  width: number
}

let loliObj: Loli = {
  group_layer_id: 0,
  height: 0,
  layer_id: 0,
  left: 0,
  name: '',
  top: 0,
  visible: 0,
  width: 0,
}

const loli = {
  lass: loliData[randomSkirt],
  eye: loliData[randomEye],
  brow: loliData[randomBrow],
  mouth: loliData[randomBrow],
  face: loliData[randomFace],
}

// 看板娘的图片文件路径
// const loliBody = require('`@/assets/images/ren/${loli.lass.layer_id}.png`')
// const loliEye = require(`@/assets/images/ren/${loli.eye.group_layer_id}.png`)
// const loliBrow = require(`@/assets/images/ren/${loli.brow.layer_id}.png`)
// const loliMouth = require(`@/assets/images/ren/${loli.mouth.layer_id}.png`)
// const loliFace = require(`@/assets/images/ren/${loli.face.layer_id}.png`)

onMounted(() => {
  // 看板娘的图片页面定位

  // 身体定位
  const loliBodyLeft = loli.lass.left + 'px'
  const loliBodyTop = loli.lass.top + 'px'

  console.log(loliBodyLeft)

  // 眼睛定位
  const loliEyeLeft = loli.eye.left + 'px'
  const loliEyeTop = loli.eye.top + 'px'

  // 眉毛定位
  const loliBrowLeft = loli.brow.left + 'px'
  const loliBrowTop = loli.brow.top + 'px'

  // 嘴巴定位
  const loliMouthLeft = loli.mouth.left + 'px'
  const loliMouthTop = loli.mouth.top + 'px'

  // 腮红定位
  const loliFaceLeft = loli.face.left + 'px'
  const loliFaceTop = loli.face.top + 'px'
})
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
      <img class="lass" :src="loliBody" alt="ren" />
      <img class="eye" :src="loliEye" alt="ren" />
      <img class="brow" :src="loliBrow" alt="ren" />
      <img class="mouth" :src="loliMouth" alt="ren" />
      <img class="face" :src="loliFace" alt="ren" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.root {
  width: 300px;
  right: 0;
  position: absolute;
  background-color: aqua;
  z-index: 1007;
  overflow: hidden;
}
.container {
  width: 500px;
  height: 700px;
  margin: auto;
  position: relative;
  left: -148px;
  top: -220px;
}
/* .lass {
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
} */
</style>
