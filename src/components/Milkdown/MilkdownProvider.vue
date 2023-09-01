<script setup lang="ts">
import { MilkdownProvider } from '@milkdown/vue'
import MilkdownEditor from './MilkdownEditor.vue'
import { ProsemirrorAdapterProvider } from '@prosemirror-adapter/vue'
</script>

<template>
  <MilkdownProvider>
    <ProsemirrorAdapterProvider>
      <MilkdownEditor />
    </ProsemirrorAdapterProvider>
  </MilkdownProvider>
</template>
