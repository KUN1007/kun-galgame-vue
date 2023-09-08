<script setup lang="ts">
import { defineAsyncComponent, computed, ref, onBeforeMount } from 'vue'

// 引入编辑器
import { QuillEditor } from '@vueup/vue-quill'
// 引入 quill module: for resizing and realigning images and iframe video
import BlotFormatter from 'quill-blot-formatter'
// 引入 module: 上传图片
import ImageUploader from 'quill-image-uploader'

// 自定义 quill 的两个主题，第二个主题暂时懒得动
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
  height?: number
  isShowToolbar: boolean
  isShowAdvance: boolean
  isShowTitle: boolean
  isShowSettings: boolean
}>()

// 编辑器实例
const editorRef = ref<typeof QuillEditor>()

// 编辑器 modules
const modules = [
  // BlotFormatter
  {
    name: 'blotFormatter',
    module: BlotFormatter,
    // see: https://github.com/Fandom-OSS/quill-blot-formatter/blob/master/src/Options.js
    options: {
      overlay: {
        style: {
          border: '2px solid var(--kungalgame-blue-3)',
        },
      },
    },
  },
  // ImageUploader
  {
    name: 'imageUploader',
    module: ImageUploader,
    options: {
      upload: (file: File) => {
        return new Promise((resolve, reject) => {
          const formData = new FormData()
          formData.append('image', file)
          // 在这里发送请求
        })
      },
    },
  },
]

// 编辑器的高度
const editorHeightStyle = computed(
  () => `height: ${props.height ? props.height : editorHeight.value}px`
)
// 编辑器的工具栏是否显示
const isShowEditorToolbar = computed(() =>
  props.isShowToolbar ? 'block' : 'none'
)

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

// 挂载之前载入数据，如果不保存，则不载入
onBeforeMount(() => {
  if (isSave.value) {
    valueHtml.value = content.value
  }

  // 如果不显示高级选项则隐藏工具栏
})

// 编辑器文本改变时自动保存数据
const handleTextChange = async () => {
  // 创建一个防抖处理函数
  const debouncedUpdateContent = debounce(() => {
    // 过滤 xss
    content.value = DOMPurify.sanitize(editorRef.value?.getHTML())
  }, 1007)

  // 调用防抖处理函数，会在延迟时间内只执行一次更新操作
  debouncedUpdateContent()

  // 计算用户输入了多少个字符
  const length = computed(() => editorRef.value?.getText().trim().length)
  textCount.value = length.value
}
</script>

<template>
  <div class="editor">
    <!-- 话题 title -->
    <Title v-if="isShowTitle" />

    <!-- 编辑器主体 -->
    <QuillEditor
      ref="editorRef"
      contentType="html"
      :content="valueHtml"
      :style="editorHeightStyle"
      :theme="theme"
      :modules="modules"
      :toolbar="mode"
      :options="editorOptions"
      @textChange="handleTextChange"
      @ready="onEditorReady"
      @click.prevent
    />

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
  border-top: 1px solid var(--kungalgame-blue-1);
  border-bottom: 1px solid var(--kungalgame-blue-1);
  background-color: var(--kungalgame-trans-blue-0);
  /* 头部下方阴影 */
  box-shadow: 0 2px 4px 0 var(--kungalgame-trans-blue-1);
  display: v-bind(isShowEditorToolbar);
}

/* 编辑器体的样式 */
:deep(.ql-container) {
  transition: all 0.2s;
  width: 80%;
  max-width: 1080px;
  border: none;
  margin: 0 auto;
  font-size: 17px;
  margin-top: 40px;
  margin-bottom: 40px;
  &::before {
    content: '∟';
    position: absolute;
    font-size: 40px;
    transform: translateX(-20px) translateY(-20px) rotate(90deg);
    color: var(--kungalgame-blue-2);
  }
  &::after {
    content: '∟';
    position: absolute;
    right: 0;
    font-size: 40px;
    transform: translateX(20px) translateY(-20px) rotate(-90deg);
    color: var(--kungalgame-blue-2);
  }
  .ql-editor {
    padding: 0;
    &::-webkit-scrollbar {
      display: inline;
      width: 7px;
      height: 0;
    }
    &::-webkit-scrollbar-thumb {
      cursor: default;
      background: var(--kungalgame-blue-4);
      border-radius: 3px;
    }
    /* 兼容火狐 */
    scrollbar-width: thin;
    scrollbar-color: var(--kungalgame-blue-4) var(--kungalgame-blue-1); /* Firefox 64+ */
    &::before {
      left: 0;
    }
    &::after {
      content: '♡ Yuki Yuki';
      font-size: 22px;
      position: absolute;
      bottom: 0;
      transform: translateX(-20px) translateY(27px);
      color: var(--kungalgame-trans-white-5);
      text-shadow: 1px 1px 1px var(--kungalgame-pink-3);
      font-style: oblique;
    }
  }

  /* BlotFormatter 插件的样式 */
  .blot-formatter__toolbar-button {
    margin: 0 5px;
    border: none !important;
    background: var(--kungalgame-trans-white-9) !important;
    svg {
      border: 1px solid var(--kungalgame-blue-4) !important;
      background: var(--kungalgame-trans-white-2) !important;
    }
  }
  .is-selected {
    svg {
      background: var(--kungalgame-trans-blue-1) !important;
    }
  }
}
</style>
