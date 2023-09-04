<script setup lang="ts">
import { onMounted, ref } from 'vue'
import prismjs from 'prismjs'
import 'prismjs/themes/prism.css'

const html = ref<HTMLInputElement | null>(null)

defineProps<{
  content: string
}>()

onMounted(() => {
  // 高亮渲染
  prismjs.highlightAll()
})
</script>

<template>
  <!-- 内容区右侧的话题展示区，这里富文本必须用 v-html，已经确定文本经过三次处理 -->
  <!-- 这里用的 v-html，样式是页面刷新后才会有的，所以必须动态绑定样式 -->
  <div class="kungalgame-topic-content">
    <div v-html="content" ref="html"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/html/richText.scss';

/* 内容区右侧的话题展示区 */
.kungalgame-topic-content {
  /** 100 + 20 + 20 + 1 = 141px */
  width: calc(100% - 141px);
  font-size: 15px;
  padding: 17px;
  border-left: 1px solid var(--kungalgame-blue-1);
  color: var(--kungalgame-font-color-3);
}

.kungalgame-topic-content {
  border-radius: 5px;
  padding: 0 10px;
  margin-top: 20px;
  overflow-x: auto;
  :deep(*) {
    max-width: 100%;
    overflow-y: scroll;
  }

  :deep(a) {
    color: var(--kungalgame-blue-5);
    border-bottom: 1.5px solid var(--kungalgame-trans-white-9);
    &:hover {
      border-bottom: 1.5px solid var(--kungalgame-blue-5);
    }
  }

  :deep(span) {
    text-shadow: none;
  }

  /* 下面全部是 wangEditor 原生样式 */

  :deep(p, li) {
    white-space: pre-wrap; /* 保留空格 */
  }

  :deep(blockquote) {
    border-left: 8px solid var(--kungalgame-blue-1);
    padding: 10px 10px;
    margin: 10px 0;
    background-color: var(--kungalgame-trans-blue-0);
  }

  :deep(pre > code) {
    display: block;
    padding: 10px;
  }

  :deep(code) {
    font-family: monospace;
    background-color: var(--kungalgame-trans-blue-0);
    padding: 3px;
    border-radius: 3px;
    text-shadow: none;
    box-shadow: var(--shadow);
  }

  :deep(table) {
    border-collapse: collapse;
  }

  :deep(td, th) {
    border: 1px solid var(--kungalgame-blue-4);
    min-width: 50px;
    height: 20px;
  }

  :deep(th) {
    background-color: var(--kungalgame-trans-blue-0);
  }

  :deep(ul, ol) {
    padding-left: 20px;
  }

  :deep(input[type='checkbox']) {
    margin-right: 5px;
  }

  /**
   * 过滤 prism 相关样式的代码
   */

  /* 这一步把 prism 的背景过滤掉 */
  :deep(pre) {
    padding: 0;
    border: 1px solid var(--kungalgame-blue-4);
    background-color: var(--kungalgame-trans-white-9);
  }

  :deep(.token) {
    background-color: var(--kungalgame-trans-white-9);
  }

  :deep(.toolbar) {
    top: 10px;
    right: 10px;
    display: flex;
    & > .toolbar-item {
      /* 这里直接根据 DOM 结构写的，写的不是很明了，要怪就怪写 prism 插件的人吧 hhh */
      button,
      & > span {
        background-color: var(--kungalgame-trans-white-9);
        border: 1px solid var(--kungalgame-blue-4);
        color: var(--kungalgame-blue-4);
        box-shadow: unset;
        margin-left: 10px;
        border-radius: 0;
        padding: 2px 5px;
        &:hover {
          background-color: var(--kungalgame-blue-4);
          color: var(--kungalgame-white);
        }
      }
      button {
        cursor: pointer;
        &:focus {
          color: var(--kungalgame-red-4);
        }
      }
    }
  }
}

@media (max-width: 700px) {
  .kungalgame-topic-content {
    width: 100%;
  }
}
</style>
