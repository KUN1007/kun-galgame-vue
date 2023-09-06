<script setup lang="ts">
// 导入编辑器的样式
// 自定义 quill 的两个主题
import '@/styles/editor/editor.snow.scss'

defineProps<{
  content: string
}>()
</script>

<template>
  <!-- 内容区右侧的话题展示区，这里富文本必须用 v-html，已经确定文本经过三次处理 -->
  <!-- 这里用的 v-html，样式是页面刷新后才会有的，所以必须动态绑定样式 -->
  <div class="kungalgame-topic-content ql-container ql-snow">
    <div class="ql-editor ql-blank" v-html="content"></div>
  </div>
</template>

<style lang="scss" scoped>
/* 内容区右侧的话题展示区 */
.kungalgame-topic-content {
  /** 100 + 20 + 20 + 1 = 141px */
  width: calc(100% - 141px);
  font-size: 15px;
  padding: 17px;
  color: var(--kungalgame-font-color-3);
  border: none !important;
}

.kungalgame-topic-content {
  border-radius: 5px;
  padding: 0 10px;
  margin-top: 20px;
  overflow-x: auto;

  /* 下面的代码调整富文本区域的格式 */
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

  :deep(pre) {
    &::before {
      content: '< code >';
      color: var(--kungalgame-font-color-0);
      background-color: var(--kungalgame-trans-white-5);
      border: 1px solid var(--kungalgame-blue-1);
      padding: 0 5px;
      border-radius: 3px;
      position: absolute;
      font-size: 17px;
      top: 20px;
      right: 28px;
    }
  }
}

/* 适配手机端 */
@media (max-width: 700px) {
  .kungalgame-topic-content {
    width: 100%;
  }
}
</style>
