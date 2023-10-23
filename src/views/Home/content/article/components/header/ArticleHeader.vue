<script setup lang="ts">
import { Icon } from '@iconify/vue'
import KUNGalgameSearchBox from '@/components/KUNGalgameSearchBox.vue'
import SortTopic from './SortTopic.vue'

const category = ['Galgame']
</script>

<template>
  <!-- Top interactive area of the article section -->
  <div class="nav-article">
    <!-- Sorting area container -->
    <SortTopic />

    <!-- Search box, only Galgame on the homepage -->
    <KUNGalgameSearchBox :category="category" style="border: none" />
    <!-- Enter all topics in the interactive area -->
    <RouterLink to="/pool" class="more">
      <span>{{ $tm('mainPage.header.all') }}</span>
      <Icon class="all-topic" icon="line-md:chevron-triple-right" />
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.nav-article {
  width: 100%;
  height: 40px;
  display: flex;
  flex-shrink: 0;
  border-bottom: 1px solid var(--kungalgame-trans-blue-4);
  color: var(--kungalgame-font-color-3);
  z-index: 1;
}

.more {
  height: 100%;
  width: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background-color: var(--kungalgame-trans-blue-3);
  flex-grow: 1;
  border-radius: 0 5px 0 0;
  cursor: pointer;
  border-left: 1px solid var(--kungalgame-trans-blue-4);
  color: var(--kungalgame-font-color-3);

  &:hover {
    background-color: var(--kungalgame-trans-blue-2);
  }

  &:active {
    background-color: var(--kungalgame-trans-blue-4);
  }
}

.all-topic {
  font-size: 18px;
  margin-left: 7px;
}

@media (max-width: 1000px) {
  .more {
    display: none;
  }
}
</style>
