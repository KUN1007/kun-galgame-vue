<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

import { formatTimeI18n } from '@/utils/formatTimeI18n'

const props = defineProps<{
  time: number
}>()

const { showKUNGalgameLanguage } = storeToRefs(useKUNGalgameSettingsStore())
const { formattedENDate, formattedCNDate } = formatTimeI18n(props.time)

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
  <div class="time">
    <Icon class="hourglass" icon="eos-icons:hourglass" />
    <div>{{ loliTime }}</div>
  </div>
</template>

<style lang="scss" scoped>
.time {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-size: small;
  letter-spacing: 1px;
  overflow: hidden;
  white-space: nowrap;
  color: var(--kungalgame-font-color-3);
  div {
    padding-right: 20px;
  }
}

.hourglass {
  font-size: 23px;
  margin: 0 10px;
  color: var(--kungalgame-red-4);
}

@media (max-width: 700px) {
  .time {
    justify-content: center;
  }
}
</style>
