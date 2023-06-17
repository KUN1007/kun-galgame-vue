<script setup lang="ts">
// 导入设置面板 store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
// 导入 i18n
import { useI18n } from 'vue-i18n'

// 使用设置面板的 store
const settingsStore = useKUNGalgameSettingsStore()
const { showKUNGalgameLanguage } = storeToRefs(settingsStore)

/*
 * 网站的语言设置
 */
const { locale } = useI18n({ useScope: 'global' })

watch(showKUNGalgameLanguage, () => {
  locale.value = showKUNGalgameLanguage.value
})
</script>

<template>
  <div class="set-lang">
    <span>{{ $t('header.settings.language') }}</span>
    <select class="select" v-model="showKUNGalgameLanguage">
      <option value="en">English</option>
      <option value="zh">中文</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
// 语言设置
.set-lang {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
// 语言的选择框
.select {
  width: 100px;
  font-size: 16px;
  color: var(--kungalgame-font-color-3);
  border: 1px solid var(--kungalgame-blue-4);
  background-color: var(--kungalgame-trans-white-9);
  option {
    background-color: var(--kungalgame-white);
  }
}
</style>
