<!-- 
    编辑器实例共用组件
 -->
<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css'
import '@/styles/editor/editor.scss'
import { IDomEditor } from '@wangeditor/editor'
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { useKUNGalgameEditStore } from '@/store/modules/edit'

import { storeToRefs } from 'pinia'

const topicData = storeToRefs(useKUNGalgameEditStore())

const props = defineProps(['height', 'isShowToolbar', 'isShowAdvance'])

const editorHeight = `height: ${props.height}px`

const editorRef = shallowRef<IDomEditor | undefined>(undefined)

const valueHtml = ref('<p>Hello</p>')

// 编辑器相关配置
const editorConfig = {
  placeholder: '请输入内容...',
  readOnly: false,
  MENU_CONF: {
    uploadImage: {
      server: 'http://127.0.0.1:10007/upload/img',

      timeout: 5 * 1000, // 5s

      fieldName: 'custom-fileName',
      meta: { token: 'xxx', a: 100 },
      metaWithUrl: true, // join params to url
      headers: { Accept: 'text/x-json' },

      maxFileSize: 10 * 1024 * 1024, // 10M

      base64LimitSize: 5 * 1024, // insert base64 format, if file's size less than 5kb
    },
  },
}

const handleCreated = (editor: IDomEditor) => {}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleChange = (editor: IDomEditor) => {
  editorRef.value = editor
  setTimeout(() => {
    console.log(editor.getHtml())
  }, 1000)
}
</script>

<template>
  <!-- 编辑器 -->
  <div class="editor—wrapper">
    <!-- 这里不能用 v-if，否则加载不出来 toolBar -->
    <Toolbar
      class="toolbar-container"
      :editor="editorRef"
      :mode="$props.isShowAdvance ? 'default' : 'simple'"
      v-show="props.isShowToolbar"
    />
    <Editor
      :style="editorHeight"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      @onCreated="handleCreated"
      @onChange="handleChange"
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
