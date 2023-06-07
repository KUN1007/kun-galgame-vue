<!-- 
    编辑器实例共用组件
 -->
<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

// 覆盖编辑器原生样式
import '@/styles/editor/editor.scss'

// 编辑器实例，必须用 shallowRef，重要！
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('')

// 模拟 ajax 异步获取内容
onMounted(() => {
  // setTimeout(() => {
  //   valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
  // }, 1500)
})

// 编辑器配置
const editorConfig = {
  placeholder: '请输入内容...',
  MENU_CONF: {
    uploadImage: {
      // server: 'http://127.0.0.1:10007/upload/img',
      // uploadFileName: 'image',
    },
  },
}

const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

// 组件销毁时，及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
</script>

<template>
  <!-- 编辑器 -->
  <div class="editor—wrapper">
    <Toolbar class="toolbar-container" :editor="editorRef" />
    <Editor
      class="editor-container"
      style="height: 400px"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      @onCreated="handleCreated"
    />
  </div>
</template>

<style lang="scss" scoped>
/* 编辑器的样式 */
.editor—wrapper {
  /* 编辑器的 border */
  border: 1px solid var(--kungalgame-blue-4);
  box-sizing: border-box;
  /* 编辑器的宽度 */
  width: 100%;
  margin: 0 auto;
  z-index: 1008; /* 按需定义 */
}
.toolbar-container {
  border-bottom: 1px solid var(--kungalgame-blue-4);
}
</style>
