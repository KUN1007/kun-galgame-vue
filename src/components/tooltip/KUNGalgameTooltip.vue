<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps({
  content: String,
  position: String, // 可以是 'top', 'bottom', 'left', 'right'
})

// const tooltipRef = ref<HTMLElement | null>(null)

// // 确保点击外部区域时关闭Tooltip
// window.addEventListener('click', (event) => {
//   if (tooltipRef.value && !tooltipRef.value.contains(event.target as Node)) {
//     // 触发关闭Tooltip的逻辑
//   }
// })
</script>

<template>
  <div class="tooltip">
    <div class="tooltip-content">
      {{ content }}
    </div>
    <div class="tooltip-arrow"></div>
  </div>
</template>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip-content {
  display: none;
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  z-index: 1;
}

.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-width: 6px;
  border-style: solid;
}

.tooltip.top .tooltip-content {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.tooltip.top .tooltip-arrow {
  top: 100%;
  left: 50%;
  margin-left: -6px;
  border-color: transparent transparent #333 transparent;
}

.tooltip.bottom .tooltip-content {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.tooltip.bottom .tooltip-arrow {
  bottom: 100%;
  left: 50%;
  margin-left: -6px;
  border-color: #333 transparent transparent transparent;
}

.tooltip.left .tooltip-content {
  top: 50%;
  right: 100%;
  transform: translateY(-50%);
}

.tooltip.left .tooltip-arrow {
  top: 50%;
  right: 100%;
  margin-top: -6px;
  border-color: transparent #333 transparent transparent;
}

.tooltip.right .tooltip-content {
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
}

.tooltip.right .tooltip-arrow {
  top: 50%;
  left: 100%;
  margin-top: -6px;
  border-color: transparent transparent transparent #333;
}
</style>
