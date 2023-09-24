<script setup lang="ts">
// 引入图标字体
import { Icon } from '@iconify/vue'
// 导入设置面板 store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'

// 使用设置面板的 store
const settingsStore = useKUNGalgameSettingsStore()
</script>

<template>
  <div class="mode">
    <!-- 白天 / 黑夜模式切换 -->
    <span>{{ $tm('header.settings.mode') }}</span>
    <div class="mode-container">
      <span>
        <Icon
          class="sun"
          icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
          @click="settingsStore.setKUNGalgameTheme('')"
        />
      </span>
      <span>
        <Icon
          class="moon"
          icon="line-md:sunny-outline-to-moon-loop-transition"
          @click="settingsStore.setKUNGalgameTheme('dark')"
        />
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mode {
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mode-container {
  font-size: 25px;
  width: 60%;
  display: flex;
  justify-content: space-around;
  span {
    cursor: pointer;
  }
  span:nth-child(1) {
    color: var(--kungalgame-red-4);
  }
  span:nth-child(2) {
    color: var(--kungalgame-blue-4);
  }
}
</style>
