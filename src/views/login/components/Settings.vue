<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

const { showKUNGalgameLanguage, showKUNGalgameMode } = storeToRefs(
  useKUNGalgameSettingsStore()
)

const handleSwitchLanguage = () => {
  const lang = showKUNGalgameLanguage.value
  if (lang === 'en') {
    showKUNGalgameLanguage.value = 'zh'
  } else {
    showKUNGalgameLanguage.value = 'en'
  }
}
</script>

<template>
  <div class="settings">
    <span @click="handleSwitchLanguage" class="language"
      ><Icon icon="fa:language"
    /></span>
    <span class="light" v-if="showKUNGalgameMode === 'dark'">
      <Icon
        class="sun"
        icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
        @click="useKUNGalgameSettingsStore().setKUNGalgameTheme('')"
      />
    </span>
    <span class="dark" v-if="showKUNGalgameMode === ''">
      <Icon
        class="moon"
        icon="line-md:sunny-outline-to-moon-loop-transition"
        @click="useKUNGalgameSettingsStore().setKUNGalgameTheme('dark')"
      />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.settings {
  width: 100%;
  color: var(--kungalgame-font-color-2);
  position: absolute;
  font-size: 20px;
  padding: 17px;
  span {
    cursor: pointer;
  }
  .language {
    margin-right: 17px;
  }
  .light {
    color: var(--kungalgame-red-4);
  }
  .dark {
    color: var(--kungalgame-blue-4);
  }
}
</style>
