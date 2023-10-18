<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import Log from './components/Log.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'

import { useKUNGalgameNonMoeStore } from '@/store/modules/nonMoe'
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

const { showKUNGalgameLanguage } = storeToRefs(useKUNGalgameSettingsStore())
import { NonMoeLog } from '@/api'

const logs = ref<NonMoeLog[]>([])
// 根据当前语言计算页面样式
const langClass = computed(() => {
  return showKUNGalgameLanguage.value === 'en' ? 'title-en' : 'title-cn'
})

// 获取不萌记录数据
const getLogs = async () => {
  const response = await useKUNGalgameNonMoeStore().getLogs()
  return response.data
}

// 页面加载时加载数据
onMounted(async () => {
  logs.value = await getLogs()
})
</script>

<template>
  <div class="root">
    <!-- 内容区容器 -->
    <div class="container">
      <!-- 页面标题 -->
      <div class="title" :class="langClass">{{ $tm('nonMoe.log') }}</div>
      <!-- 文章部分 -->
      <div class="article">
        <!-- 文章标题 -->
        <div class="article-title">
          {{ $tm('nonMoe.title') }}
        </div>
        <!-- 内容区容器 -->
        <div class="content">
          <!-- 所有的记录 -->
          <Log :logs="logs" />
        </div>
      </div>
    </div>
    <!-- 版权 -->
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

/* 根容器 */
.container {
  /* 固定宽高 */
  height: 70vh;
  width: 80vw;
  min-height: 600px;
  max-width: 1000px;
  /* 居中 */
  margin: auto;
  background-color: var(--kungalgame-trans-white-5);
  border: 1px solid var(--kungalgame-blue-1);
  overflow: hidden;
  border-radius: 7px;
  /* 模糊背景 */
  backdrop-filter: blur(5px);
  display: flex;
  color: var(--kungalgame-font-color-3);
  position: relative;
  box-shadow: var(--shadow);
}

/* 页面标题 */
.title {
  /* 字体竖直方向分布 */
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

/* 文章部分 */
.article {
  background-color: var(--kungalgame-trans-white-5);
  border-left: 1px solid var(--kungalgame-blue-1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 文章标题 */
.article-title {
  margin: 20px 0;
  padding: 0 20px;
  font-size: 20px;
}

/* 内容区容器 */
.content {
  width: 100%;
  height: 100%;
  /* y 轴溢出滚动 */
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
  /* 兼容火狐 */
  scrollbar-width: thin;
  scrollbar-color: var(--kungalgame-blue-4) var(--kungalgame-blue-1); /* Firefox 64+ */
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
