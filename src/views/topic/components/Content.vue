<script setup lang="ts">
import { MilkdownProvider } from '@milkdown/vue'
import { ProsemirrorAdapterProvider } from '@prosemirror-adapter/vue'
import ReadOnlyMilkdown from '@/components/milkdown/ReadOnlyMilkdown.vue'

const props = defineProps<{
  content: string
}>()
</script>

<template>
  <div class="kungalgame-topic-content">
    <MilkdownProvider>
      <ProsemirrorAdapterProvider>
        <ReadOnlyMilkdown :is-readonly="true" :value-markdown="props.content" />
      </ProsemirrorAdapterProvider>
    </MilkdownProvider>
  </div>
</template>

<style lang="scss" scoped>
/* Right side content area for the topic */
.kungalgame-topic-content {
  min-height: 200px;
  font-size: 15px;
  padding: 17px;
  color: var(--kungalgame-font-color-3);
  border: none !important;
  padding: 0 10px;
  margin-top: 17px;
  overflow-x: auto;
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
