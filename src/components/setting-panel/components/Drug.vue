<template>
  <div
    class="box"
    ref="box"
    @mousedown="startDrag"
    @wheel.prevent="changeSize"
    :style="boxStyle"
  >
    拖动我
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, CSSProperties, onMounted, onBeforeUnmount } from 'vue'

const box = ref<HTMLElement | null>(null)

const state = reactive({
  isDragging: false,
  isResizing: false,
  origin: { x: 0, y: 0 },
  translation: { x: 0, y: 0 },
  size: { width: 100, height: 100 },
})

const boxStyle: CSSProperties = {
  position: 'absolute',
  top: `${state.translation.y}px`,
  left: `${state.translation.x}px`,
  width: `${state.size.width}px`,
  height: `${state.size.height}px`,
  backgroundColor: '#ccc',
}

const startDrag = (event: MouseEvent) => {
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
  if (state.isDragging && box.value !== null) {
    const deltaX = event.clientX - state.origin.x
    const deltaY = event.clientY - state.origin.y
    state.translation.x += deltaX
    state.translation.y += deltaY
    box.value.style.top = `${state.translation.y}px`
    box.value.style.left = `${state.translation.x}px`
    state.origin.x = event.clientX
    state.origin.y = event.clientY
  }
}

const changeSize = (event: WheelEvent) => {
  if (event.ctrlKey && box.value !== null) {
    const delta = Math.sign(event.deltaY) * 3
    state.size.width += delta
    state.size.height += delta
    box.value.style.width = `${state.size.width}px`
    box.value.style.height = `${state.size.height}px`
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

<style scoped></style>
