<!-- 
    编辑器实例共用组件
 -->
<script setup lang="ts">
import {
  defineAsyncComponent,
  onBeforeMount,
  onBeforeUnmount,
  ref,
  shallowRef,
  computed,
} from 'vue'

// 编辑器本体配置
import '@wangeditor/editor/dist/css/style.css'
import '@/styles/editor/editor.scss'
import { IDomEditor, IEditorConfig } from '@wangeditor/editor'
import { Editor } from '@wangeditor/editor-for-vue'

// 编辑器菜单配置
import { IToolbarConfig } from '@wangeditor/editor'
import { Toolbar } from '@wangeditor/editor-for-vue'
import { keysToExclude } from './keysToExclude'

// 导入标题
const Title = defineAsyncComponent(
  () => import('@/components/wang-editor/Title.vue')
)

// 导入 Footer
import EditorFooter from './EditorFooter.vue'

// 导入编辑帖子的 store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
import { storeToRefs } from 'pinia'

// 导入过滤 xss 的工具
import DOMPurify from 'dompurify'
// 导入防抖函数
import { debounce } from '@/utils/debounce'

const { editorHeight, isShowAdvance, isSave, content } = storeToRefs(
  useKUNGalgameEditStore()
)

// 定义父组件传参
const props = defineProps<{
  height: number
  isShowToolbar: boolean
  isShowAdvance: boolean
  isShowTitle: boolean
}>()

// 自定义编辑区域高度

// 创建编辑器，必须用 shallowRef
const editorRef = shallowRef<IDomEditor | undefined>(undefined)

// 编辑器的高度
const editorHeightStyle = computed(() => `height: ${editorHeight.value}px`)
// 编辑器内的内容
const valueHtml = ref('')
// 编辑器文字计数
const textCount = ref(0)

// 编辑器相关配置
const editorConfig: Partial<IEditorConfig> = {
  placeholder: 'Moe Moe Moe!',
  readOnly: false,
  MENU_CONF: {
    uploadImage: {
      server: 'http://127.0.0.1:10008/upload/img',

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

// 工具栏相关配置
const toolbarConfig: Partial<IToolbarConfig> = {
  // 是否显示高级模式，显示则不排除 keys
  excludeKeys: isShowAdvance.value ? ['uploadVideo'] : keysToExclude,
}

const handleCreated = (editor: IDomEditor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

// 挂载之前载入数据，如果不保存，则不载入
onBeforeMount(() => {
  if (isSave.value) {
    valueHtml.value = content.value
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
  // 创建一个防抖处理函数
  const debouncedUpdateContent = debounce(() => {
    // 过滤 xss
    content.value = DOMPurify.sanitize(editor.getHtml())
  }, 1007)

  // 调用防抖处理函数，会在延迟时间内只执行一次更新操作
  debouncedUpdateContent()
  // 计算用户输入了多少个字符
  textCount.value = editor.getText().trim().length
}
</script>

<template>
  <!-- 编辑器 -->
  <div class="editor—wrapper">
    <!-- 话题 title -->
    <Title />

    <!-- 编辑器工具栏 -->
    <!-- 这里不能用 v-if，否则加载不出来 toolBar -->
    <Toolbar
      class="toolbar"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="$props.isShowAdvance ? 'default' : 'simple'"
      v-show="props.isShowToolbar"
    />

    <div class="hint hint1">
      <span class="box1"></span>
      <span class="filling"></span>
      <span class="box2"></span>
    </div>
    <!-- 编辑器本体 -->
    <Editor
      class="wang-editor"
      :style="editorHeightStyle"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      @onCreated="handleCreated"
      @onChange="handleChange"
    />
    <div class="hint">
      <span class="box3"></span>
      <span class="filling"></span>
      <span class="box4"></span>
    </div>

    <!-- 编辑器 footer -->
    <EditorFooter :textCount="textCount" :editorHeight="editorHeight" />
  </div>
</template>

<style lang="scss" scoped>
/* 编辑器的样式 */
.editor—wrapper {
  box-sizing: border-box;
  /* 编辑器的宽度 */
  width: 100%;
  margin: 0 auto;
  z-index: 1008;
}

.toolbar {
  width: 100%;
  z-index: 1007;
  border-top: 1px solid var(--kungalgame-blue-1);
  border-bottom: 1px solid var(--kungalgame-blue-1);
  background-color: var(--kungalgame-trans-blue-0);
  :deep(*) {
    background-color: var(--kungalgame-trans-white-9);
  }
  /* 头部下方阴影 */
  box-shadow: 0 2px 4px 0 var(--kungalgame-trans-blue-1);
}

.hint {
  margin: 0 auto;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  border-bottom: none;
  border-top: none;
  & > span {
    width: 40px;
    height: 100%;
    border: 1.5px solid var(--kungalgame-blue-2);
  }
  .filling {
    border: none;
    max-width: 1080px;
    width: 80%;
  }
  .box1 {
    border-top: none;
    border-left: none;
  }
  .box2 {
    border-top: none;
    border-right: none;
  }
  .box3 {
    border-bottom: none;
    border-left: none;
  }
  .box4 {
    border-bottom: none;
    border-right: none;
  }
}

.hint1 {
  margin-top: 10px;
}

.wang-editor {
  transition: all 0.2s;
  width: 80%;
  max-width: 1080px;
  margin: 0 auto;
  margin-bottom: 30px;

  :deep(.w-e-scroll) {
    &::-webkit-scrollbar {
      display: inline;
      width: 6px;
      height: 0;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--kungalgame-blue-4);
      border-radius: 3px;
    }
  }

  /* 删除线，不然会不显示 */
  :deep(s) {
    text-decoration: line-through;
  }

  /* 下划线，不然会不显示 */
  :deep(u) {
    text-decoration: underline;
  }

  /* 不显示分割线 */
  :deep(.w-e-bar-divider) {
    display: none;
  }
}

@media (max-width: 700px) {
  .toolbar {
    display: none;
  }
  .wang-editor {
    margin: 0 auto;
    width: 100%;
  }
}
</style>
