<!-- Rewrite Topic Information Display -->
<!-- I'm going to split this component out! Because it's Rewrite! 
  Ahahaha (I won't tell you it should actually be named Reedit) -->

<script setup lang="ts">
import { computed } from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/en' // Import English language package

// Use the settings store to get the overall website language
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

const props = defineProps<{
  time: number | string
}>()

// Use the settings panel store
const settingsStore = useKUNGalgameSettingsStore()
const { showKUNGalgameLanguage } = storeToRefs(settingsStore)

// Set to use English language
dayjs.locale('en')
const formattedCNDate = dayjs(props.time).format('YYYY年MM月DD日-HH:mm:ss')
const formattedENDate = dayjs(props.time).format('M / D, YYYY - h:mm:ss A')

const loliTime = computed(() => {
  if (showKUNGalgameLanguage.value === 'en') {
    return formattedENDate
  }

  if (showKUNGalgameLanguage.value === 'zh') {
    return formattedCNDate
  }

  return ''
})
</script>

<template>
  <!-- Whether it's a rewrite -->
  <!-- Why isn't there i18n here? Don't ask me why, the answer is Rewrite, ahahaha -->
  <span>{{ `Rewrite at ${loliTime}` }}</span>
</template>

<style lang="scss" scoped>
/* Font style below the content area */
span {
  margin: 0 10px;
  font-size: 12px;
  letter-spacing: 1px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--kungalgame-font-color-3);
}

@media (max-width: 1000px) {
  span {
    margin-right: 10px;
  }
}
</style>
