<script setup lang="ts">
defineProps<{
  content: string
}>()
</script>

<template>
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
