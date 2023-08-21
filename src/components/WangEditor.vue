<!-- 
    编辑器实例共用组件
 -->
<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css'
import '@/styles/editor/editor.scss'
import { IDomEditor } from '@wangeditor/editor'
import { onBeforeMount, onBeforeUnmount, ref, shallowRef } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
// 导入编辑帖子的 store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
import { storeToRefs } from 'pinia'
// 导入过滤 xss 的工具
import DOMPurify from 'dompurify'

const topicData = storeToRefs(useKUNGalgameEditStore())

// 定义父组件传参
const props = defineProps(['height', 'isShowToolbar', 'isShowAdvance'])

// 自定义编辑区域高度
const editorHeight = `height: ${props.height}px`

// 创建编辑器，必须用 shallowRef
const editorRef = shallowRef<IDomEditor | undefined>(undefined)

// 编辑器内的内容
const valueHtml = ref('')
// 编辑器文字计数
const textCount = ref(0)

// 编辑器相关配置
const editorConfig = {
  placeholder: 'Moe Moe Moe!',
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

// 挂载之前载入数据，如果不保存，则不载入
onBeforeMount(() => {
  if (topicData.isSave.value) {
    valueHtml.value = topicData.content.value
  }
})

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

// 编辑器文本改变时自动保存数据
const handleChange = (editor: IDomEditor) => {
  editorRef.value = editor
  // 防抖
  setTimeout(() => {
    // 过滤 xss
    topicData.content.value = DOMPurify.sanitize(editor.getHtml())
  }, 1007)
  // 计算用户输入了多少个字符
  textCount.value = editor.getText().trim().length
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
    <span class="count">{{ textCount + ` ${$tm('edit.word')}` }}</span>
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

.count {
  padding: 3px 7px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  color: var(--kungalgame-font-color-0);
  background-color: var(--kungalgame-white);
}

@media (max-width: 700px) {
  .toolbar-container {
    display: none;
  }
}
</style>
