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

const handleClickSearch = () => {
  if (inputValue.value.trim()) {
    search()
  }
}
</script>

<template>
  <div class="search-form">
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
        @keydown.enter="search"
      />
    </div>

    <div class="search-btn" @click="handleClickSearch">
      <Icon icon="line-md:search" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-form {
  display: flex;
  height: 39px;
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
</style>
