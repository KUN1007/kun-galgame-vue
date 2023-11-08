<script setup lang="ts">
// Import the settings panel store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

// Use the settings panel store
const { showKUNGalgameLanguage } = storeToRefs(useKUNGalgameSettingsStore())

const props = defineProps<{
  message: {
    en: string
    zh: string
  }
  position: 'top' | 'right' | 'bottom' | 'left'
}>()

const message = computed(() =>
  showKUNGalgameLanguage.value === 'en' ? props.message.en : props.message.zh
)
</script>

<template>
  <span :message="message" :position="props.position"><slot /></span>
</template>

<style lang="scss" scoped></style>
