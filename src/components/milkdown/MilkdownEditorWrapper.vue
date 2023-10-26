<script setup lang="ts">
import { MilkdownProvider } from '@milkdown/vue'
import MilkdownEditor from './MilkdownEditor.vue'
</script>

<!-- MilkdownEditorWrapper.vue -->
<template>
  <MilkdownProvider>
    <MilkdownEditor />
  </MilkdownProvider>
</template>
