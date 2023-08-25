<script setup lang="ts">
import { Icon } from '@iconify/vue'
// 导入防抖函数
import { debounce } from '@/utils/debounce'
import { ref, computed } from 'vue'
// 导入用户 store
import { useKUNGalgameHomeStore } from '@/store/modules/home'
import { storeToRefs } from 'pinia'
// 导入设置面板 store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
// 使用设置面板的 store
const { showKUNGalgameLanguage } = storeToRefs(useKUNGalgameSettingsStore())
const { keywords, searchHistory } = storeToRefs(useKUNGalgameHomeStore())

const inputValue = ref('')
const isShowSearchHistory = ref(false)
const inputActiveClass = ref({})

const placeholder = computed(() => {
  return showKUNGalgameLanguage.value === 'en' ? 'Search Topics' : '搜索话题'
})

// 定义防抖处理函数
const debouncedSearch = debounce((inputValue: string) => {
  keywords.value = inputValue
}, 300) // 300 毫秒的防抖延迟

// 当搜索框 focus 时
const handleInputFocus = () => {
  if (searchHistory.value.length !== 0) {
    isShowSearchHistory.value = true
  }
  inputActiveClass.value = {
    backgroundColor: 'var(--kungalgame-white)',
  }
}

// 当搜索框 blur 时
const handleInputBlur = () => {
  // 延迟一段时间隐藏搜索历史，以便点击搜索历史时可以触发填充事件
  setTimeout(() => {
    isShowSearchHistory.value = false
    inputActiveClass.value = {}
  }, 100)
}

// 用户点击 enter 时
const handleClickEnter = (event: KeyboardEvent) => {
  event.preventDefault()
  handleClickSearch()
  searchHistory.value.push(inputValue.value)
}

// 点击搜索按钮搜索逻辑
const handleClickSearch = () => {
  if (inputValue.value.trim()) {
    debouncedSearch(inputValue.value)
    searchHistory.value.push(inputValue.value)
  }
}

// 点击历史记录
const handleClickHistory = (index: number) => {
  inputValue.value = searchHistory.value[index]
}

// 清空历史记录
const clearSearchHistory = () => {
  searchHistory.value = []
}

// 删除历史记录
const handleDeleteHistory = (historyIndex: number) => {
  searchHistory.value.splice(historyIndex, 1)
}
</script>

<template>
  <!-- 交互区搜索框 -->
  <div class="container">
    <!-- 搜索框表单 -->
    <form class="search-form">
      <!-- 搜索框内容 -->
      <div class="content">
        <!-- 框体 -->
        <input
          v-model="inputValue"
          type="search"
          class="input"
          :style="inputActiveClass"
          :placeholder="placeholder"
          @focus="handleInputFocus"
          @blur="handleInputBlur"
          @input="debouncedSearch(inputValue)"
          @keydown.enter="handleClickEnter"
        />
      </div>
      <!-- 搜索框图标 -->
      <div class="search-btn" @click="handleClickSearch">
        <Icon icon="line-md:search" />
      </div>
    </form>
    <!-- 搜索历史容器 -->
    <div v-if="isShowSearchHistory" class="history">
      <!-- 搜索历史标题 -->
      <div class="title">
        <span>搜索历史</span>
        <span @click="clearSearchHistory">清除所有历史</span>
      </div>
      <!-- 搜索历史 -->
      <div class="history-container">
        <div
          class="single-history"
          v-for="(history, index) in searchHistory"
          :key="index"
          @click="handleClickHistory(index)"
        >
          <span>{{ history }} </span>
          <span @click="handleDeleteHistory(index)"
            ><Icon class="delete" icon="line-md:close-circle"
          /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 搜索话题 */
.container {
  height: 39px;
  width: 1px;
  justify-content: center;
  align-items: center;
  /* 页面缩小不换行 */
  white-space: nowrap;
  background-color: var(--kungalgame-trans-blue-2);
  border: 1px solid var(--kungalgame-blue-4);
  flex-grow: 2;
  /* 相对于二级菜单定位 */
  position: relative;
  display: flex;
  box-sizing: border-box;
  color: var(--kungalgame-font-color-3);
}
/* 搜索框表单 */
.search-form {
  display: flex;
  height: 39px;
  /* 随着页面自增长 */
  width: 1px;
  flex-grow: 1;
  /* 居中 */
  justify-content: center;
  align-items: center;
}
/* 搜索内容区 */
.content {
  width: 100%;
}
/* 框体 */
.input {
  padding: 0 15px;
  height: 39px;
  width: 100%;
  /* 搜索时输入的字体大小 */
  font-size: 16px;
  border: none;
  background-color: var(--kungalgame-trans-white-5);
  color: var(--kungalgame-font-color-3);
  transition: all 0.2s;
  &::placeholder {
    color: var(--kungalgame-font-color-1);
  }
}
/* 搜索按钮 */
.search-btn {
  /* 正方形，不缩小 */
  height: 39px;
  width: 39px;
  flex-shrink: 0;
  border-left: 1px solid var(--kungalgame-trans-blue-4);
  /* 搜索图标居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 内边距盒子 */
  box-sizing: border-box;
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
/* 搜索历史的容器 */
.history {
  width: 100%;
  /* 相对于 nav 的搜索区域绝对定位 */
  position: absolute;
  /* 紧话题搜索区定位 */
  top: 39px;
  left: 0;
  flex-direction: column;
  background-color: var(--kungalgame-white);
  color: var(--kungalgame-font-color-3);
  border: 1px solid var(--kungalgame-red-1);
  border-radius: 7px;
  box-shadow: var(--shadow);
}
/* 搜索历史 title 的文字 */
.title {
  display: flex;
  margin: 10px;
  /* 两个提示文字左右分布 */
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
/* 搜索历史 TAG 的存放容器 */
.history-container {
  display: flex;
  flex-direction: column;
  /* 单个搜索记录的字体 */
  font-size: 13px;
  /* 搜索记录左右两侧的空白距离 */
  margin: 10px;
}

.single-history {
  width: 100%;
  display: flex;
  justify-content: space-between;
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
/* 删除按钮 */
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
