<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, onBeforeMount } from 'vue'

import { usePersistKUNGalgameHomeStore } from '@/store/modules/home'
import { useTempHomeStore } from '@/store/temp/home'
import { storeToRefs } from 'pinia'

const { searchHistory } = storeToRefs(usePersistKUNGalgameHomeStore())
const { keywords } = storeToRefs(useTempHomeStore())

const inputValue = ref('')
const isShowSearchHistory = ref(false)

onBeforeMount(() => {
  keywords.value = ''
})

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
</template>

<style lang="scss" scoped>
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
