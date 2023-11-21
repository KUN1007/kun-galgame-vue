<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'

import Button from './Button.vue'
import { useTempEditStore } from '@/store/temp/edit'
import { useKUNGalgameEditStore } from '@/store/modules/edit'

import { storeToRefs } from 'pinia'
import { Category, topicCategory } from './category'

const { category: rewriteCategory, isTopicRewriting } = storeToRefs(
  useTempEditStore()
)
const { isSaveTopic, category: editCategory } = storeToRefs(
  useKUNGalgameEditStore()
)

const selectedCategories = ref<string[]>([])

onBeforeMount(() => {
  if (isTopicRewriting.value) {
    selectedCategories.value = rewriteCategory.value
    return
  }

  if (isSaveTopic.value) {
    selectedCategories.value = editCategory.value
  }
})

// Logic when the user clicks on a category
const handleClickCategory = (kun: Category) => {
  // If 1 is selected and 3 is already selected, do not allow selecting 1
  if (kun.index === 1 && selectedCategories.value.includes('Others')) {
    return
  }
  // If 3 is selected and 1 is already selected, do not allow selecting 3
  if (kun.index === 3 && selectedCategories.value.includes('Galgame')) {
    return
  }

  const index = selectedCategories.value.indexOf(kun.name)
  if (index !== -1) {
    // If already selected, deselect it
    selectedCategories.value.splice(index, 1)
  } else {
    // Otherwise, select the category
    selectedCategories.value.push(kun.name)
  }

  if (isTopicRewriting.value) {
    rewriteCategory.value = selectedCategories.value
    return
  }

  editCategory.value = selectedCategories.value
}
</script>

<template>
  <!-- Container for topic categories -->
  <div class="topic-group">
    <div>{{ $tm('edit.categories') }}</div>
    <!-- Button group for categories -->
    <div class="group-btn">
      <span
        class="btn"
        v-for="kun in topicCategory"
        :key="kun.index"
        @click="handleClickCategory(kun)"
        :class="{ active: selectedCategories.includes(kun.name) }"
      >
        {{ $tm(`edit.${kun.name}`) }}
      </span>
    </div>
  </div>

  <!-- Publish button -->
  <Button />
</template>

<style lang="scss" scoped>
.topic-group {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
}

.group-btn {
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.btn {
  height: 30px;
  width: 177px;
  font-size: 17px;
  cursor: pointer;
  border: 1px solid var(--kungalgame-blue-4);
  border-radius: 5px;
  background-color: var(--kungalgame-trans-white-9);
  color: var(--kungalgame-blue-4);
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(2) {
    margin: 0 10px;
  }
}

.active {
  transition: 0.2s;
  background-color: var(--kungalgame-blue-4);
  color: var(--kungalgame-white);
}
</style>
