<script setup lang="ts">
import { Icon } from '@iconify/vue'
// 导入防抖函数
import { debounce } from '@/utils/debounce'
import { ref, onBeforeMount } from 'vue'
// 导入用户 store
import { useKUNGalgameHomeStore } from '@/store/modules/home'
import { storeToRefs } from 'pinia'
const { keywords, searchHistory, category } = storeToRefs(
  useKUNGalgameHomeStore()
)

// 输入框的值
const inputValue = ref('')
// 是否显示搜索历史
const isShowSearchHistory = ref(false)
// 输入框被激活之后的样式
const inputActiveClass = ref({})

// 定义 props，这里的作用是告诉输入框在哪个分类中搜索话题
const props = defineProps(['category'])

// 初始化搜索框内容，不然刷新页面 input 内依然有内容
// 将搜索的话题类别赋值，因为搜索框会在三个页面渲染，对应三个分类
onBeforeMount(() => {
  keywords.value = ''
  category.value = props.category
})

// 定义防抖处理函数
const debouncedSearch = debounce((inputValue: string) => {
  // 搜索之前重置页数，是否加载等页面状态
  useKUNGalgameHomeStore().resetPageStatus()
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

// 搜索函数逻辑
const search = () => {
  debouncedSearch(inputValue.value)
  if (!searchHistory.value.includes(inputValue.value)) {
    // 仅当数组中没有相同元素时才将元素推入数组
    searchHistory.value.push(inputValue.value)
  }
}

// 用户点击 enter 时
const handleClickEnter = (event: KeyboardEvent) => {
  event.preventDefault()
  search()
}

// 点击搜索按钮搜索逻辑
const handleClickSearch = () => {
  if (inputValue.value.trim()) {
    search()
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
          :placeholder="`${$tm('mainPage.header.search')}`"
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
        <span>{{ $tm('mainPage.header.history') }}</span>
        <span @click="clearSearchHistory">
          {{ $tm('mainPage.header.clear') }}
        </span>
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
          <span @click="handleDeleteHistory(index)">
            <Icon class="delete" icon="line-md:close-circle" />
          </span>
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
