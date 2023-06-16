<!-- 
    编辑器实例共用组件
 -->
<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css'
import '@/styles/editor/editor.scss'
import { IDomEditor } from '@wangeditor/editor'
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

const editorRef = shallowRef<IDomEditor | undefined>(undefined)

const valueHtml = ref('<p>hello</p>')

// 编辑器相关配置
const editorConfig = {
  placeholder: '请输入内容...',
  readOnly: false,
  MENU_CONF: {
    uploadImage: {
      server: 'http://127.0.0.1:10007/upload/img',
      // server: '/api/upload-img-10s', // test timeout
      // server: '/api/upload-img-failed', // test failed
      // server: '/api/xxx', // test 404

      timeout: 5 * 1000, // 5s

      fieldName: 'custom-fileName',
      meta: { token: 'xxx', a: 100 },
      metaWithUrl: true, // join params to url
      headers: { Accept: 'text/x-json' },

      maxFileSize: 10 * 1024 * 1024, // 10M

      base64LimitSize: 5 * 1024, // insert base64 format, if file's size less than 5kb

      // onBeforeUpload(file) {
      //   console.log('onBeforeUpload', file)

      //   return file // will upload this file
      //   // return false // prevent upload
      // },
      // onProgress(progress) {
      //   console.log('onProgress', progress)
      // },
      // onSuccess(file, res) {
      //   console.log('onSuccess', file, res)
      // },
      // onFailed(file, res) {
      //   alert(res.message)
      //   console.log('onFailed', file, res)
      // },
      // onError(file, err, res) {
      //   alert(err.message)
      //   console.error('onError', file, err, res)
      // },
    },
  },
}

const handleCreated = (editor: IDomEditor) => {
  editorRef.value = editor
}

onMounted(() => {
  // 模拟 ajax 异步设置 value
  setTimeout(() => {
    valueHtml.value = '<p>hello world</p>' // 测试 v-model
  }, 2000)
})

// 组件销毁时，也及时销毁编辑器
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
