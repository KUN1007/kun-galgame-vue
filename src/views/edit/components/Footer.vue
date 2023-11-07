<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
// Import the Button component
import Button from './Button.vue'
// Import the store for editing topics
import { useKUNGalgameEditStore } from '@/store/modules/edit'
// Import topic categories
import { Category, topicCategory } from './category'
import { storeToRefs } from 'pinia'

const { isSaveTopic, category, topicRewrite } = storeToRefs(
  useKUNGalgameEditStore()
)

// Define an array for selected categories
const selectedCategories = ref<string[]>([])

// Load data from the store before the component is mounted
onBeforeMount(() => {
  /**
   * The editor is in the editing interface.
   */
  // If the user has saved a draft, load it
  if (isSaveTopic.value) {
    selectedCategories.value = category.value
  }
  /**
   * The editor is in the editing interface for rewriting.
   */
  // Load data for rewriting a topic before mounting
  if (topicRewrite.value.isTopicRewriting) {
    selectedCategories.value = topicRewrite.value.category
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

  // Pass the selected category to the Pinia store
  category.value = selectedCategories.value
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
/* Container for topic categories */
.topic-group {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
}

/* Button group for categories */
.group-btn {
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

/* Style for individual buttons */
.btn {
  height: 30px;
  width: 177px;
  font-size: 17px;
  cursor: pointer;
  border: 1px solid var(--kungalgame-blue-1);
  background-color: var(--kungalgame-trans-blue-0);
  color: var(--kungalgame-blue-4);
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(2) {
    margin: 0 10px;
  }
}

/* Style for selected buttons */
.active {
  transition: 0.2s;
  background-color: var(--kungalgame-blue-4);
  color: var(--kungalgame-white);
}
</style>
