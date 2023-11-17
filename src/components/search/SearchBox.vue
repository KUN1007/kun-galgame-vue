<script setup lang="ts">
import { ref, onBeforeMount, onMounted } from 'vue'

import { debounce } from '@/utils/debounce'

import { usePersistKUNGalgameHomeStore } from '@/store/modules/home'
import { useTempHomeStore } from '@/store/temp/home'
import { storeToRefs } from 'pinia'

const { searchHistory } = storeToRefs(usePersistKUNGalgameHomeStore())
const { keywords } = storeToRefs(useTempHomeStore())

const input = ref<HTMLElement | null>(null)
const inputValue = ref('')

onBeforeMount(() => {
  keywords.value = ''
})

const debouncedSearch = debounce((inputValue: string) => {
  useTempHomeStore().resetPageStatus()
  keywords.value = inputValue
}, 300)

const search = () => {
  debouncedSearch(inputValue.value)
  if (!searchHistory.value.includes(inputValue.value)) {
    searchHistory.value.push(inputValue.value)
  }
}

onMounted(() => {
  if (input) {
    input.value?.focus()
  }
})
</script>

<template>
  <div class="search-form">
    <input
      ref="input"
      v-model="inputValue"
      type="search"
      class="input"
      :placeholder="`${$tm('mainPage.header.search')}`"
      @input="debouncedSearch(inputValue)"
      @keydown.enter="search"
    />
  </div>
</template>

<style lang="scss" scoped>
.search-form {
  width: 40vw;
  max-width: 777px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 17px;
}

.input {
  padding: 0 15px;
  height: 40px;
  width: 100%;
  font-size: 16px;
  border: none;
  background-color: var(--kungalgame-trans-white-9);
  border: 2px solid var(--kungalgame-blue-4);
  border-radius: 17px;
  color: var(--kungalgame-font-color-3);
  transition: all 0.2s;

  &:focus {
    border: 2px solid var(--kungalgame-pink-4);
  }

  &::placeholder {
    color: var(--kungalgame-font-color-1);
  }
}
</style>
