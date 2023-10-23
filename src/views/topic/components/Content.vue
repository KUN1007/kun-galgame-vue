<script setup lang="ts">
// Import editor styles
// Custom quill with two themes
import '@/styles/editor/editor.snow.scss'

defineProps<{
  content: string
}>()
</script>

<template>
  <!-- Topic display area on the right side of the content, rich text must use v-html,
    and styles will only appear after page refresh, so dynamic binding of styles is necessary -->
  <div class="kungalgame-topic-content ql-container ql-snow">
    <div class="ql-editor ql-blank" v-html="content"></div>
  </div>
</template>

<style lang="scss" scoped>
/* Right side content area for the topic */
.kungalgame-topic-content {
  /** 100 + 20 + 20 + 1 = 141px */
  width: calc(100% - 141px);
  font-size: 15px;
  padding: 17px;
  color: var(--kungalgame-font-color-3);
  border: none !important;
  padding: 0 10px;
  margin-top: 20px;
  overflow-x: auto;
}

.kungalgame-topic-content {
  /* The code below adjusts the formatting of the rich text area */
  :deep(*) {
    max-width: 100%;
    overflow-y: scroll;
  }

  :deep(a) {
    color: var(--kungalgame-blue-5);
    border-bottom: 1.5px solid var(--kungalgame-trans-white-9);
    &:hover {
      border-bottom: 1.5px solid var(--kungalgame-blue-5);
    }
  }

  /* Code blocks */
  :deep(pre) {
    font-family: monospace;
    display: flex;
    flex-direction: column;
    &::before {
      display: flex;
      justify-content: end;
      content: '< code >';
      color: var(--kungalgame-font-color-0);
      padding: 0 5px;
      border-radius: 3px;
      font-size: 17px;
      top: 20px;
      right: 28px;
    }
  }

  /* Quotes */
  :deep(blockquote) {
    padding: 7px 10px;
  }
}

/* Mobile responsiveness */
@media (max-width: 700px) {
  .kungalgame-topic-content {
    width: 100%;
    margin-top: 0;
    padding: 17px 7px;
  }
}
</style>
