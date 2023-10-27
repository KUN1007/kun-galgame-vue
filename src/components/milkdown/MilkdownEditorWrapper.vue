<script setup lang="ts">
import { MilkdownProvider } from '@milkdown/vue'
import { ProsemirrorAdapterProvider } from '@prosemirror-adapter/vue'
import MilkdownEditor from './MilkdownEditor.vue'
</script>

<!-- MilkdownEditorWrapper.vue -->
<template>
  <div class="editor">
    <MilkdownProvider>
      <ProsemirrorAdapterProvider>
        <MilkdownEditor />
      </ProsemirrorAdapterProvider>
    </MilkdownProvider>
  </div>
</template>

<style lang="scss" scoped>
.editor {
  margin: 10px;
  border: 1px solid var(--kungalgame-blue-4);
  border-radius: 5px;
}
</style>
