<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, onBeforeMount } from 'vue'

import { debounce } from '@/utils/debounce'

import { usePersistKUNGalgameHomeStore } from '@/store/modules/home'
import { useTempHomeStore } from '@/store/temp/home'
import { storeToRefs } from 'pinia'

const { searchHistory } = storeToRefs(usePersistKUNGalgameHomeStore())
const { keywords } = storeToRefs(useTempHomeStore())

const inputValue = ref('')
const isShowSearchHistory = ref(false)
const inputActiveClass = ref({})

const props = defineProps<{
  category: string[]
}>()

onBeforeMount(() => {
  keywords.value = ''
})

const debouncedSearch = debounce((inputValue: string) => {
  useTempHomeStore().$reset()
  keywords.value = inputValue
}, 300)

const handleInputFocus = () => {
  if (searchHistory.value.length !== 0) {
    isShowSearchHistory.value = true
  }
  inputActiveClass.value = {
    backgroundColor: 'var(--kungalgame-white)',
  }
}

const handleInputBlur = () => {
  setTimeout(() => {
    isShowSearchHistory.value = false
    inputActiveClass.value = {}
  }, 100)
}

const search = () => {
  debouncedSearch(inputValue.value)
  if (!searchHistory.value.includes(inputValue.value)) {
    searchHistory.value.push(inputValue.value)
  }
}

const handleClickEnter = (event: KeyboardEvent) => {
  event.preventDefault()
  search()
}

const handleClickSearch = () => {
  if (inputValue.value.trim()) {
    search()
  }
}

const handleClickHistory = (index: number) => {
  inputValue.value = searchHistory.value[index]
}

const clearSearchHistory = () => {
  searchHistory.value = []
}

const handleDeleteHistory = (historyIndex: number) => {
  searchHistory.value.splice(historyIndex, 1)
}
</script>

<template>
  <div class="container">
    <form class="search-form">
      <div class="content">
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

      <div class="search-btn" @click="handleClickSearch">
        <Icon icon="line-md:search" />
      </div>
    </form>

    <div v-if="isShowSearchHistory" class="history">
      <div class="title">
        <span>{{ $tm('mainPage.header.history') }}</span>
        <span @click="clearSearchHistory">
          {{ $tm('mainPage.header.clear') }}
        </span>
      </div>

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
.container {
  height: 39px;
  width: 1px;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background-color: var(--kungalgame-trans-blue-2);
  border: 1px solid var(--kungalgame-blue-4);
  flex-grow: 2;
  position: relative;
  display: flex;
  color: var(--kungalgame-font-color-3);
}

.search-form {
  display: flex;
  height: 39px;
  width: 1px;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
}

.content {
  width: 100%;
}

.input {
  padding: 0 15px;
  height: 39px;
  width: 100%;
  font-size: 16px;
  border: none;
  background-color: var(--kungalgame-trans-white-9);
  color: var(--kungalgame-font-color-3);
  transition: all 0.2s;

  &::placeholder {
    color: var(--kungalgame-font-color-1);
  }
}

.search-btn {
  height: 39px;
  width: 39px;
  flex-shrink: 0;
  border-left: 1px solid var(--kungalgame-trans-blue-4);
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

.history {
  width: 100%;
  position: absolute;
  top: 39px;
  left: 0;
  flex-direction: column;
  background-color: var(--kungalgame-white);
  color: var(--kungalgame-font-color-3);
  border: 1px solid var(--kungalgame-red-1);
  border-radius: 7px;
  box-shadow: var(--shadow);
}

.title {
  display: flex;
  margin: 10px;
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

.history-container {
  display: flex;
  flex-direction: column;
  font-size: 13px;
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
