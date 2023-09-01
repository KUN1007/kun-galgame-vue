<script setup lang="ts">
import KUNGalgameEditorMenu from './KUNGalgameEditorMenu.vue'
</script>

<template>
  <div class="editor-container">
    <KUNGalgameEditorMenu />
    <div class="editor"></div>
  </div>
</template>

<style lang="scss" scoped>
.editor-container {
  min-height: 300px;
  padding: 10px;
}
</style>
