<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import Log from './components/Log.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'

import { useTempNonMoeStore } from '@/store/temp/nonMoe'
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

const { showKUNGalgameLanguage } = storeToRefs(useKUNGalgameSettingsStore())
import { NonMoeLog } from '@/api'

const logs = ref<NonMoeLog[]>([])
// Calculate the CSS class for the title based on the current language
const langClass = computed(() => {
  return showKUNGalgameLanguage.value === 'en' ? 'title-en' : 'title-cn'
})

const getLogs = async () => {
  const response = await useTempNonMoeStore().getLogs()
  return response.data
}

onMounted(async () => {
  logs.value = await getLogs()
})
</script>

<template>
  <div class="root">
    <div class="container">
      <div class="title" :class="langClass">{{ $tm('nonMoe.log') }}</div>
      <div class="article">
        <div class="article-title">
          {{ $tm('nonMoe.title') }}
        </div>

        <div class="content">
          <Log :logs="logs" />
        </div>
      </div>
    </div>

    <KUNGalgameFooter style="margin: 20px auto" />
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: calc(100vh - 65px);
  display: flex;
  flex-direction: column;
  min-height: 750px;
}

.container {
  height: 70vh;
  width: 80vw;
  min-height: 600px;
  max-width: 1000px;
  margin: auto;
  background-color: var(--kungalgame-trans-white-5);
  border: 1px solid var(--kungalgame-blue-1);
  overflow: hidden;
  border-radius: 7px;
  backdrop-filter: blur(5px);
  display: flex;
  color: var(--kungalgame-font-color-3);
  position: relative;
  box-shadow: var(--shadow);
}

.title {
  font-size: 30px;
  padding: 30px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: var(--kungalgame-font-color-2);
  letter-spacing: 1px;
}

.title-cn {
  writing-mode: vertical-rl;
  text-orientation: upright;
}

.title-en {
  writing-mode: vertical-rl;
  text-orientation: sideways;
  transform: rotate(180deg);
}

.article {
  background-color: var(--kungalgame-trans-white-5);
  border-left: 1px solid var(--kungalgame-blue-1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.article-title {
  margin: 20px 0;
  padding: 0 20px;
  font-size: 20px;
}

.content {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 0 10px;

  &::-webkit-scrollbar {
    display: inline;
    width: 4px;
    height: 0;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--kungalgame-blue-4);
    border-radius: 2px;
  }

  scrollbar-width: thin;
  scrollbar-color: var(--kungalgame-blue-4) var(--kungalgame-blue-1);
}

@media (max-width: 700px) {
  .root {
    width: 95%;
    margin: 0 auto;
  }

  .container {
    flex-direction: column;
    height: 100%;
    width: 95%;
  }

  .title {
    width: 100%;
  }

  .title-cn {
    writing-mode: unset;
  }

  .title-en {
    writing-mode: unset;
    transform: rotate(0);
  }

  .article {
    border-left: none;
    border-top: 1px solid var(--kungalgame-blue-1);
  }

  .content {
    height: calc(100% - 150px);
  }
}
</style>
