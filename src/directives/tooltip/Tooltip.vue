<script setup lang="ts">
const props = defineProps<{
  message: string
  position: 'top' | 'right' | 'bottom' | 'left'
}>()
</script>

<template>
  <span :message="props.message" :position="props.position"><slot /></span>
</template>

<style lang="scss" scoped></style>
