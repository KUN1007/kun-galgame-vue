<script setup lang="ts">
// 导入设置面板 store
import { useSettingsPanelStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

// 使用设置面板的 store
const settingsStore = useSettingsPanelStore()
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

// 用户拖动看板娘和缩放看板娘
import { ref, reactive, CSSProperties, onMounted, onBeforeUnmount } from 'vue'

const loli = ref<HTMLElement | null>(null)

const state = reactive({
  isDragging: false,
  isResizing: false,
  origin: { x: 0, y: 0 },
  translation: { x: 0, y: 0 },
})

const loliStyle: CSSProperties = {
  top: `${state.translation.y}px`,
  left: `${state.translation.x}px`,
  width: 0,
}

const startDragLoli = (event: MouseEvent) => {
  if (event.ctrlKey) {
    state.isResizing = true
  } else {
    state.isDragging = true
  }
  state.origin.x = event.clientX
  state.origin.y = event.clientY
}

const stopDrag = () => {
  state.isDragging = false
  state.isResizing = false
}

const drag = (event: MouseEvent) => {
  if (state.isDragging && loli.value !== null) {
    const deltaX = event.clientX - state.origin.x
    const deltaY = event.clientY - state.origin.y
    state.translation.x += deltaX
    state.translation.y += deltaY
    loli.value.style.top = `${state.translation.y}px`
    loli.value.style.left = `${state.translation.x}px`
    state.origin.x = event.clientX
    state.origin.y = event.clientY
  }
}

onMounted(() => {
  window.addEventListener('mouseup', stopDrag)
  window.addEventListener('mousemove', drag)
})
onBeforeUnmount(() => {
  window.removeEventListener('mouseup', stopDrag)
  window.removeEventListener('mousemove', drag)
})
</script>

<template>
  <!-- 看板娘 -->
  <!-- 给看板娘整体绑定鼠标移动事件，改变看板娘的位置 -->
  <div class="loli" ref="loli" @mousedown="startDragLoli" :style="loliStyle">
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
  width: 300px;
  /* 定位看板娘，重要 */
  position: fixed;
  z-index: 9999;
  // 根据父元素控制面板传过来的参数确定看板娘的位置
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
