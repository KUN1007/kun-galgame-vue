<script setup lang="ts">
import {
  defineAsyncComponent,
  computed,
  ref,
  onBeforeMount,
  onBeforeUnmount,
} from 'vue'
import { QuillEditor } from '@vueup/vue-quill'

// 自定义 quill 的两个主题
import '@/styles/editor/editor.snow.scss'
// import '@vueup/vue-quill/dist/vue-quill.bubble.css'

// 导入标题
const Title = defineAsyncComponent(
  () => import('@/components/quill-editor/Title.vue')
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

const { editorHeight, mode, theme, isSave, content } = storeToRefs(
  useKUNGalgameEditStore()
)

// 定义父组件传参
/**
 * @param {number} height - 编辑器的高度
 * @param {boolean} isShowToolbar - 是否显示工具栏
 * @param {boolean} isShowAdvance - 是否显示高级编辑模式
 * @param {boolean} isShowTitle - 是否显示标题
 * @param {boolean} isShowSettings - 是否显示编辑器设置
 */
const props = defineProps<{
  isShowToolbar: boolean
  isShowAdvance: boolean
  isShowTitle: boolean
  isShowSettings: boolean
}>()

// 编辑器实例
const editorRef = ref()

// 编辑器的高度
const editorHeightStyle = computed(() => `height: ${editorHeight.value}px`)
// 编辑器内的内容
const valueHtml = ref('')
// 编辑器文字计数
const textCount = ref(0)

// 编辑器相关配置
const editorOptions = {
  placeholder: 'Moe Moe Moe!',
}

// 编辑器实例创建时
const onEditorReady = () => {}

// 工具栏相关配置

// 挂载之前载入数据，如果不保存，则不载入
onBeforeMount(() => {
  if (isSave.value) {
    valueHtml.value = content.value
  }
})

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {})

// 编辑器文本改变时自动保存数据
const handleTextChange = () => {
  // 创建一个防抖处理函数
  const debouncedUpdateContent = debounce(() => {
    // 过滤 xss
    content.value = DOMPurify.sanitize(editorRef.value.getHTML())
  }, 1007)

  // 调用防抖处理函数，会在延迟时间内只执行一次更新操作
  debouncedUpdateContent()

  // 计算用户输入了多少个字符
  const length = computed(() => editorRef.value.getText().trim().length)
  textCount.value = length.value
}
</script>

<template>
  <div class="editor">
    <!-- 话题 title -->
    <Title v-if="isShowTitle" />

    <div class="hint hint1" v-if="isShowSettings">
      <span class="box1"></span>
      <span class="filling"></span>
      <span class="box2"></span>
    </div>

    <!-- 编辑器主体 -->
    <QuillEditor
      ref="editorRef"
      contentType="html"
      :content="valueHtml"
      :style="editorHeightStyle"
      :theme="theme"
      :toolbar="mode"
      :options="editorOptions"
      @textChange="handleTextChange"
      @ready="onEditorReady"
      @click.prevent
    />

    <div class="hint" v-if="isShowSettings">
      <span class="box3"></span>
      <span class="filling"></span>
      <span class="box4"></span>
    </div>

    <!-- 编辑器 footer -->
    <EditorFooter
      :textCount="textCount"
      :editorHeight="editorHeight"
      :isShowSettings="isShowSettings"
    />
  </div>
</template>

<style lang="scss" scoped>
/* 
 * 解决样式问题
 * 这里是根据编译后的 css 写的，很怪，要怪怪作者 www
 */

/* 工具栏的样式 */
:deep(.ql-toolbar) {
  border: none;
}

/* 编辑器体的样式 */
:deep(.ql-container) {
  width: 80%;
  border: none;
  margin: 0 auto;
  margin-top: 40px;
  font-size: 17px;
  .ql-editor {
    padding: 0;
    &::before {
      left: 0;
    }
  }
}

/* 提示线 */
.hint {
  margin: 0 auto;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  border-bottom: none;
  border-top: none;
  & > span {
    width: 30px;
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
  position: absolute;
  width: 80%;
  top: 200px;
}
</style>
