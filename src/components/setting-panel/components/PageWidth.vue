<script setup lang="ts">
import { ref, computed, onMounted, onActivated, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

const route = useRoute()

const settingsStore = useKUNGalgameSettingsStore()
const { showKUNGalgamePageWidth } = storeToRefs(settingsStore)

// 页面宽度
const pageWidth = ref(0)
// 当前页面路由的名字
const routeName = computed(() => route.name as string)
// 调整页面宽度是否被禁用
const isDisabled = ref(false)

// 允许调整宽度的页面
const pageNameArray = [
  'KUN',
  'Topic',
  'Edit',
  'KUNGalgame',
  'Pool',
  'Bylaw',
  'Technique',
  'ThanksList',
]

// 初始化页面宽度
const initPageWidth = () => {
  if (pageNameArray.includes(routeName.value)) {
    // 页面宽度值等于 store 宽度值
    pageWidth.value = showKUNGalgamePageWidth.value[routeName.value]
    // 取消禁用输入
    isDisabled.value = false
  } else {
    isDisabled.value = true
  }
}

watch(pageWidth, () => {
  if (pageNameArray.includes(routeName.value)) {
    // 将用户输入的宽度存入 store
    showKUNGalgamePageWidth.value[routeName.value] = pageWidth.value
  }
})

onMounted(() => {
  initPageWidth()
})

onActivated(() => {
  initPageWidth()
})
</script>

<template>
  <!-- 设置某些页面的宽度 -->
  <div
    class="width"
    :class="isDisabled ? 'disabled' : ''"
    :title="isDisabled ? `${$tm('header.settings.disabled')}` : ''"
  >
    <div class="width-container">
      <span>{{ $tm('header.settings.width') }}</span>
      <span>{{ pageWidth }}%</span>
    </div>
    <div class="page-width">
      <span>50%</span>
      <input
        class="main"
        min="50"
        max="90"
        step="0.1"
        type="range"
        v-model="pageWidth"
        :disabled="isDisabled"
      />
      <span>90%</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-width {
  width: 100%;
  font-size: 15px;
  display: flex;
  span {
    margin-top: 15px;
  }
}
/* 主页页面宽度滑动条 */
.main {
  width: 100%;
  height: 10px;
  margin: 20px 0;
}

.width-container {
  display: flex;
  justify-content: space-between;
}

/* 调整页面宽度被禁用时的样式 */
.disabled {
  cursor: not-allowed;
  color: var(--kungalgame-font-color-0);
  input {
    cursor: not-allowed;
  }
}
</style>
