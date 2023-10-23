<script setup lang="ts">
import { ref, computed, onMounted, onActivated, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

const route = useRoute()

const settingsStore = useKUNGalgameSettingsStore()
const { showKUNGalgamePageWidth } = storeToRefs(settingsStore)

// Page width
const pageWidth = ref(0)
// Current route name
const routeName = computed(() => route.name as string)
// Whether page width adjustment is disabled
const isDisabled = ref(false)

// Pages where width adjustment is allowed
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

// Initialize page width
const initPageWidth = () => {
  if (pageNameArray.includes(routeName.value)) {
    // Page width value equals store width value
    pageWidth.value = showKUNGalgamePageWidth.value[routeName.value]
    // Enable input
    isDisabled.value = false
  } else {
    isDisabled.value = true
  }
}

watch(pageWidth, () => {
  if (pageNameArray.includes(routeName.value)) {
    // Store user-input width
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
  <!-- Set the width for specific pages -->
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
/* Main page width slider */
.main {
  width: 100%;
  height: 10px;
  margin: 20px 0;
}

.width-container {
  display: flex;
  justify-content: space-between;
}

/* Styles when page width adjustment is disabled */
.disabled {
  cursor: not-allowed;
  color: var(--kungalgame-font-color-0);

  input {
    cursor: not-allowed;
  }
}
</style>
