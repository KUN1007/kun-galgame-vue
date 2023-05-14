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
import { onMounted, onUnmounted, ref } from 'vue'

interface Position {
  x: number
  y: number
}
const box = ref<HTMLElement | null>(null)
const isDragging = ref(false)
const mousePosition = ref<Position>({ x: 0, y: 0 })
const elementPosition = ref<Position>({ x: 120, y: -250 })

const handleMouseDown = (event: MouseEvent) => {
  isDragging.value = true
  mousePosition.value = { x: event.clientX, y: event.clientY }
}

const handleMouseMove = (event: MouseEvent) => {
  if (isDragging.value) {
    const deltaX = event.clientX - mousePosition.value.x
    const deltaY = event.clientY - mousePosition.value.y
    elementPosition.value = {
      x: elementPosition.value.x + deltaX,
      y: elementPosition.value.y + deltaY,
    }
    mousePosition.value = { x: event.clientX, y: event.clientY }
  }
}

const handleMouseUp = () => {
  isDragging.value = false
}

onMounted(() => {
  box.value?.addEventListener('mousedown', handleMouseDown)
  box.value?.addEventListener('mousemove', handleMouseMove)
  box.value?.addEventListener('mouseup', handleMouseUp)
})

const loliPositionXPixel = elementPosition.value.x + 'px'
const loliPositionYPixel = elementPosition.value.y + 'px'

onUnmounted(() => {
  box.value?.removeEventListener('mousedown', handleMouseDown)
  box.value?.removeEventListener('mousemove', handleMouseMove)
  box.value?.removeEventListener('mouseup', handleMouseUp)
})
</script>

<template>
  <!-- 看板娘 -->
  <!-- 给看板娘整体绑定鼠标移动事件，改变看板娘的位置 -->
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
  position: fixed;
  // 根据父元素控制面板传过来的参数确定看板娘的位置
  top: v-bind(loliPositionYPixel);
  left: v-bind(loliPositionXPixel);
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
