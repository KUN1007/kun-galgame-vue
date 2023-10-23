<!-- An area formed by combining all tags of all topics -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  tags: string[]
}>()
</script>

<template>
  <!-- Tags for the topic -->
  <div class="tags" v-if="$props.tags.length">
    <!-- Icon font for tags -->
    <Icon class="tag" icon="mingcute:tag-2-fill" />
    <ul>
      <li v-for="(tag, index) in tags" :key="index">{{ tag }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
/* Tags for the topic */
.tags {
  display: flex;
  align-items: center;
  color: var(--kungalgame-font-color-3);

  /* Box for individual tags */
  ul {
    max-height: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;

    li {
      margin: 3px;
      font-size: small;
      padding: 2px;
      background-color: var(--kungalgame-trans-blue-0);
      border: 1px solid var(--kungalgame-blue-1);
      overflow-y: scroll;
      cursor: pointer;

      &:hover {
        background-color: var(--kungalgame-red-0);
        transition: 0.2s;
      }
    }
  }
}

/* Icon font */
.tag {
  font-size: 23px;
  margin: 0 20px;
  color: var(--kungalgame-blue-4);
  flex-shrink: 0;
}
</style>
