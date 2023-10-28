<script setup lang="ts">
import { MilkdownProvider } from '@milkdown/vue'
import { ProsemirrorAdapterProvider } from '@prosemirror-adapter/vue'
import MilkdownEditor from './MilkdownEditor.vue'

const valueMarkdown = ``
const editorHight = 100
</script>

<!-- MilkdownEditorWrapper.vue -->
<template>
  <div class="editor">
    <MilkdownProvider>
      <ProsemirrorAdapterProvider>
        <MilkdownEditor
          :value-markdown="valueMarkdown"
          :editor-hight="editorHight"
        />
      </ProsemirrorAdapterProvider>
    </MilkdownProvider>
  </div>
</template>
