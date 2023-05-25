<!-- 
    编辑器实例共用组件
 -->
<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import axios from 'axios'
// 编辑器实例，必须用 shallowRef，重要！
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p>hello</p>')

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
  }, 1500)
})

// 工具栏配置
const toolbarConfig = {
  /* 
        // 菜单 key
    'headerSelect', // h1, h2, h3, h4 选择
    'bold', // 加粗
    'italic', // 斜体
    'through', // 删除线
    'underline', // 下划线
    'bulletedList', // 无序列表
    'numberedList', // 有序列表
    'color', // 文字颜色
    'insertLink', // 插入链接
    'fontSize', // 字体大小
    'lineHeight', // 行高
    'uploadImage', // 上传图片
    'delIndent', // 缩进
    'indent', // 增进
    'deleteImage', //删除图片
    'divider', // 分割线
    'insertTable', // 插入表格
    'justifyCenter', // 居中对齐
    'justifyJustify', // 两端对齐
    'justifyLeft', // 左对齐
    'justifyRight', // 右对齐
    'undo', // 撤销
    'redo', // 重做
    'clearStyle', // 清除格式
    'fullScreen', // 全屏
    */
  toolbarKeys: [
    'bold',
    'underline',
    'italic',
    'through',
    'code',
    'sub',
    'sup',
    'clearStyle',
    'color',
    'bgColor',
    'fontSize',
    'fontFamily',
    'indent',
    'delIndent',
    'justifyLeft',
    'justifyRight',
    'justifyCenter',
    'justifyJustify',
    'lineHeight',
    'insertImage',
    'deleteImage',
    'editImage',
    'viewImageLink',
    'imageWidth30',
    'imageWidth50',
    'imageWidth100',
    'divider',
    'emotion',
    'insertLink',
    'editLink',
    'unLink',
    'viewLink',
    'codeBlock',
    'blockquote',
    'headerSelect',
    'header1',
    'header2',
    'header3',
    'header4',
    'header5',
    'todo',
    'redo',
    'undo',
    'fullScreen',
    'enter',
    'bulletedList',
    'numberedList',
    'insertTable',
    'deleteTable',
    'insertTableRow',
    'deleteTableRow',
    'insertTableCol',
    'deleteTableCol',
    'tableHeader',
    'tableFullWidth',
    'insertVideo',
    'uploadVideo',
    'editVideoSize',
    'uploadImage',
    'codeSelectLang',
  ],
}

// 编辑器配置
const editorConfig = {
  placeholder: '请输入内容...',
  MENU_CONF: {},
}

const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
  console.log(editor.getConfig())
  console.log(editor.getAllMenuKeys())
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
    <Toolbar
      class="toolbar-container"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
    />
    <Editor
      class="editor-container"
      style="height: 427px; overflow-y: hidden"
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
  border: 1px solid $kungalgame-blue-4;
  box-sizing: border-box;
  /* 编辑器的宽度 */
  width: 97%;
  margin: 0 auto;
  z-index: 1008; /* 按需定义 */
}
.toolbar-container {
  border-bottom: 1px solid $kungalgame-blue-4;
}
/* 编辑器编辑部分 */
.editor-container {
  height: 427px;
}
</style>
