<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, onBeforeMount } from 'vue'

import { debounce } from '@/utils/debounce'

import { usePersistKUNGalgameHomeStore } from '@/store/modules/home'
import { useTempHomeStore } from '@/store/temp/home'
import { storeToRefs } from 'pinia'

const { searchHistory } = storeToRefs(usePersistKUNGalgameHomeStore())
const { keywords, category } = storeToRefs(useTempHomeStore())

// Value of the input field
const inputValue = ref('')
// Whether to show search history
const isShowSearchHistory = ref(false)
// Style when the input field is active
const inputActiveClass = ref({})

// Define props to tell the input field in which category to search for topics
const props = defineProps(['category'])

// Initialize the content of the search box to prevent content from persisting after page refresh
// Assign the topic category to be searched because the search box will be rendered on three pages
// , corresponding to three categories
onBeforeMount(() => {
  keywords.value = ''
  category.value = props.category
})

// Define the debounce handling function
const debouncedSearch = debounce((inputValue: string) => {
  // Reset page status and loading state before searching
  useTempHomeStore().resetPageStatus()
  keywords.value = inputValue
}, 300) // 300 milliseconds debounce delay

// When the search box is focused
const handleInputFocus = () => {
  if (searchHistory.value.length !== 0) {
    isShowSearchHistory.value = true
  }
  inputActiveClass.value = {
    backgroundColor: 'var(--kungalgame-white)',
  }
}

// When the search box is blurred
const handleInputBlur = () => {
  // Delay hiding the search history so that clicking on the search history can trigger the fill event
  setTimeout(() => {
    isShowSearchHistory.value = false
    inputActiveClass.value = {}
  }, 100)
}

// Search function logic
const search = () => {
  debouncedSearch(inputValue.value)
  if (!searchHistory.value.includes(inputValue.value)) {
    // Push the element into the array only when there are no identical elements in the array
    searchHistory.value.push(inputValue.value)
  }
}

// When the user presses Enter
const handleClickEnter = (event: KeyboardEvent) => {
  event.preventDefault()
  search()
}

// Clicking the search button triggers the search logic
const handleClickSearch = () => {
  if (inputValue.value.trim()) {
    search()
  }
}

// Clicking on search history
const handleClickHistory = (index: number) => {
  inputValue.value = searchHistory.value[index]
}

// Clear search history
const clearSearchHistory = () => {
  searchHistory.value = []
}

// Delete search history
const handleDeleteHistory = (historyIndex: number) => {
  searchHistory.value.splice(historyIndex, 1)
}
</script>

<template>
  <!-- Interactive area search box -->
  <div class="container">
    <!-- Search box form -->
    <form class="search-form">
      <!-- Search box content -->
      <div class="content">
        <!-- Input field -->
        <input
          v-model="inputValue"
          type="search"
          class="input"
          :style="inputActiveClass"
          :placeholder="`${$tm('mainPage.header.search')}`"
          @focus="handleInputFocus"
          @blur="handleInputBlur"
          @input="debouncedSearch(inputValue)"
          @keydown.enter="handleClickEnter"
        />
      </div>
      <!-- Search box icon -->
      <div class="search-btn" @click="handleClickSearch">
        <Icon icon="line-md:search" />
      </div>
    </form>
    <!-- Search history container -->
    <div v-if="isShowSearchHistory" class="history">
      <!-- Search history title -->
      <div class="title">
        <span>{{ $tm('mainPage.header.history') }}</span>
        <span @click="clearSearchHistory">
          {{ $tm('mainPage.header.clear') }}
        </span>
      </div>
      <!-- Search history -->
      <div class="history-container">
        <div
          class="single-history"
          v-for="(history, index) in searchHistory"
          :key="index"
          @click="handleClickHistory(index)"
        >
          <span>{{ history }} </span>
          <span @click="handleDeleteHistory(index)">
            <Icon class="delete" icon="line-md:close-circle" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Search topics */
.container {
  height: 39px;
  width: 1px;
  justify-content: center;
  align-items: center;
  /* Prevent line breaks when the page is resized */
  white-space: nowrap;
  background-color: var(--kungalgame-trans-blue-2);
  border: 1px solid var(--kungalgame-blue-4);
  flex-grow: 2;
  /* Position relative to the secondary menu */
  position: relative;
  display: flex;
  color: var(--kungalgame-font-color-3);
}

/* Search box form */
.search-form {
  display: flex;
  height: 39px;
  /* Grows with the page */
  width: 1px;
  flex-grow: 1;
  /* Centered */
  justify-content: center;
  align-items: center;
}

/* Search content area */
.content {
  width: 100%;
}

/* Input field */
.input {
  padding: 0 15px;
  height: 39px;
  width: 100%;
  /* Font size for input during search */
  font-size: 16px;
  border: none;
  background-color: var(--kungalgame-trans-white-5);
  color: var(--kungalgame-font-color-3);
  transition: all 0.2s;

  &::placeholder {
    color: var(--kungalgame-font-color-1);
  }
}

/* Search button */
.search-btn {
  /* Square shape, does not shrink */
  height: 39px;
  width: 39px;
  flex-shrink: 0;
  border-left: 1px solid var(--kungalgame-trans-blue-4);
  /* Center the search icon */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: var(--kungalgame-red-1);
  }

  &:active {
    background-color: var(--kungalgame-red-2);
  }
}

/* Search history container */
.history {
  width: 100%;
  /* Absolute positioning relative to the search area in the nav */
  position: absolute;
  /* Tight positioning under the topic search area */
  top: 39px;
  left: 0;
  flex-direction: column;
  background-color: var(--kungalgame-white);
  color: var(--kungalgame-font-color-3);
  border: 1px solid var(--kungalgame-red-1);
  border-radius: 7px;
  box-shadow: var(--shadow);
}

/* Text for the search history title */
.title {
  display: flex;
  margin: 10px;
  /* Distribute two hint texts left and right */
  justify-content: space-between;

  span {
    font-size: 14px;
    &:nth-child(2) {
      cursor: pointer;
      border-bottom: 1.5px solid var(--kungalgame-trans-white-5);

      &:hover {
        border-bottom: 1.5px solid var(--kungalgame-blue-4);
      }
    }
  }
}

/* Container for storing search history tags */
.history-container {
  display: flex;
  flex-direction: column;
  /* Font for individual search records */
  font-size: 13px;
  /* Blank space on the left and right sides of the search record */
  margin: 10px;
}

.single-history {
  width: 100%;
  display: flex;
  justify-content: space between;
  padding: 7px 3px;
  margin: 2px 0;

  &:hover {
    color: var(--kungalgame-blue-4);

    .delete {
      display: flex;
    }
  }

  span:nth-child(1) {
    cursor: default;
    position: relative;
    display: flex;
    overflow: hidden;
  }

  span:nth-child(2) {
    width: 17px;
  }
}

/* Delete button */
.delete {
  width: 30px;
  right: 5px;
  font-size: 17px;
  position: absolute;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--kungalgame-font-color-0);
  background-color: var(--kungalgame-white);
  display: none;
}
</style>
