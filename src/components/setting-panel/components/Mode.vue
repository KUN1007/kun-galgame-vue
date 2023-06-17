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
    <span>{{ $t('header.settings.mode') }}</span>
    <div class="mode-container">
      <li>
        <Icon
          class="sun"
          icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
          @click="settingsStore.setKUNGalgameTheme('')"
        />
      </li>
      <li>
        <Icon
          class="moon"
          icon="line-md:sunny-outline-to-moon-loop-transition"
          @click="settingsStore.setKUNGalgameTheme('dark')"
        />
      </li>
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
  li {
    cursor: pointer;
  }
  li:nth-child(1) {
    color: var(--kungalgame-red-4);
  }
  li:nth-child(2) {
    color: var(--kungalgame-blue-4);
  }
}
</style>
