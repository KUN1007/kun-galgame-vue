<script setup lang="ts">
import { tags } from '@/types/pool/tags'
</script>

<template>
  <div class="pool-nav-bar">
    <span class="nav-tags" v-for="kun in tags" :key="kun.index">{{
      kun.name
    }}</span>
  </div>
</template>

<style lang="scss" scoped>
.pool-nav-bar {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
}

.nav-tags {
  border: 1px solid var(--kungalgame-blue-4);
  border-radius: 14px;
  margin: 3px;
  display: block;
  white-space: nowrap;
  font-size: 14px;
  padding: 3px 17px;
  background-color: var(--kungalgame-trans-blue-0);
  cursor: pointer;

  &:hover {
    color: var(--kungalgame-white);
    background-color: var(--kungalgame-blue-4);
  }
}
</style>
