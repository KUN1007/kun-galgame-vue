<script setup lang="ts">
import { defineAsyncComponent, computed, ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

// 引入编辑器
import { QuillEditor } from '@vueup/vue-quill'
// 导入编辑器 Modules
import { modules } from './modules'

// 自定义 quill 的两个主题，第二个主题暂时懒得动
import '@/styles/editor/editor.snow.scss'
// import '@vueup/vue-quill/dist/vue-quill.bubble.css'

// 导入标题
const Title = defineAsyncComponent(
  () => import('@/components/quill-editor/Title.vue')
)

// 导入 Footer
import EditorFooter from './EditorFooter.vue'
// Footer 的插槽
import Help from './Help.vue'

// 导入编辑话题的 store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

// 导入过滤 xss 的工具
import DOMPurify from 'dompurify'
// 导入防抖函数
import { debounce } from '@/utils/debounce'

// 话题编辑界面 store
const {
  editorHeight,
  mode,
  theme,
  textCount,
  isSaveTopic,
  content,
  topicRewrite,
} = storeToRefs(useKUNGalgameEditStore())
// 话题界面的 store，用于回复
const { replyDraft, replyRewrite } = storeToRefs(useKUNGalgameTopicStore())

// 当前的路由
const route = useRoute()
// 当前页面路由的名字
const routeName = computed(() => route.name as string)

// 定义父组件传参
/**
 * @param {boolean} isShowToolbar - 是否显示工具栏
 * @param {boolean} isShowTitle - 是否显示标题
 */

const props = defineProps<{
  isShowToolbar: boolean
  isShowTitle: boolean
}>()

// 编辑器实例
const editorRef = ref<typeof QuillEditor>()
// 编辑器内的内容
const valueHtml = ref('')
// 编辑器相关配置
const editorOptions = {
  placeholder: 'Moe Moe Moe!',
}

// 编辑器的高度，根据路由的名字确定
const editorHeightStyle = computed(
  () =>
    `height: ${
      routeName.value === 'Edit'
        ? editorHeight.value
        : replyDraft.value.editorHeight
    }px`
)

// 编辑器的模式，根据路由的名字确定
const editorMode = computed(() =>
  routeName.value === 'Edit' ? mode.value : replyDraft.value.mode
)

// 编辑器的工具栏是否显示
const isShowEditorToolbar = computed(() =>
  props.isShowToolbar ? 'block' : 'none'
)

onBeforeMount(() => {
  /**
   * 编辑器处于编辑界面
   */
  // 挂载之前载入话题数据，如果不保存，则不载入（并且当前必须在 Edit 界面）
  if (isSaveTopic.value && routeName.value === 'Edit') {
    valueHtml.value = content.value
  }
  /**
   * 编辑器处于重新编辑的编辑界面
   */
  // 挂载之前载入重新编辑话题的数据
  if (topicRewrite.value.isTopicRewriting && routeName.value === 'Edit') {
    valueHtml.value = topicRewrite.value.content
  }
  /**
   * 编辑器处于回复界面
   */
  // 挂载之前载入回复数据，如果不保存，则不载入（并且当前必须在 topic 界面）
  if (replyDraft.value.isSaveReply && routeName.value === 'Topic') {
    valueHtml.value = replyDraft.value.content
  }
  /**
   * 编辑器处于回复的重新编辑界面
   */
  if (replyRewrite.value.isReplyRewriting && routeName.value === 'Topic') {
    valueHtml.value = replyRewrite.value.content
  }
})

// 编辑器文本改变时自动保存数据
const handleTextChange = async () => {
  // 过滤 xss
  const purifiedHtml = DOMPurify.sanitize(editorRef.value?.getHTML())
  // 创建一个防抖处理函数
  const debouncedUpdateContent = debounce(() => {
    /**
     * 编辑器处于编辑界面
     */
    // 否则保存在 edit 界面的 store
    if (!topicRewrite.value.isTopicRewriting && routeName.value === 'Edit') {
      content.value = purifiedHtml
    }
    /**
     * 编辑器处于重新编辑的编辑界面
     */
    // 挂载之前载入重新编辑话题的数据
    if (topicRewrite.value.isTopicRewriting && routeName.value === 'Edit') {
      topicRewrite.value.content = purifiedHtml
    }
    /**
     * 编辑器处于回复界面
     */
    // 如果是在 topic 界面则保存到回复的 store
    if (!replyRewrite.value.isReplyRewriting && routeName.value === 'Topic') {
      replyDraft.value.content = purifiedHtml
    }
    /**
     * 编辑器处于回复的重新编辑界面
     */
    if (replyRewrite.value.isReplyRewriting && routeName.value === 'Topic') {
      replyRewrite.value.content = purifiedHtml
    }
  }, 1007)

  // 调用防抖处理函数，会在延迟时间内只执行一次更新操作
  debouncedUpdateContent()

  // 计算用户输入了多少个字符
  const length = computed(() => editorRef.value?.getText().trim().length)

  // 根据页面的路由名保存计数
  if (routeName.value === 'Edit') {
    textCount.value = length.value
  }
  if (routeName.value === 'Topic') {
    replyDraft.value.textCount = length.value
  }
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
      :toolbar="editorMode"
      :options="editorOptions"
      @textChange="handleTextChange"
      @click.prevent
    />

    <!-- 编辑器 footer -->
    <EditorFooter>
      <template #help>
        <Help />
      </template>
    </EditorFooter>
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
  /* 不显示视频插入，这个功能 BUG 太多了 */
  .ql-video {
    display: none;
  }
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

  /* BlotFormatter 插件的样式，这里不用 !important 不行 */
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

  /* Mention 的样式 */
  .ql-mention-list-container {
    width: 270px;
    border: 1px solid var(--kungalgame-blue-1);
    border-radius: 4px;
    background-color: var(--kungalgame-trans-white-2);
    box-shadow: var(--shadow);
    z-index: 9999;
    overflow: auto;
  }

  .ql-mention-loading {
    line-height: 44px;
    padding: 0 20px;
    vertical-align: middle;
    font-size: 16px;
  }

  .ql-mention-list {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  .ql-mention-list-item {
    cursor: pointer;
    font-size: 16px;
    padding: 10px 20px;
    /* 居中、超过一行省略 */
    vertical-align: middle;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ql-mention-list-item.disabled {
    cursor: auto;
  }

  .ql-mention-list-item.selected {
    background-color: var(--kungalgame-trans-blue-1);
    text-decoration: none;
  }

  /* mention 插件的样式 */
  .mention {
    height: 24px;
    width: 65px;
    padding: 3px 0;
    margin-right: 2px;
    user-select: all;
  }

  .mention[data-denotation-char='@'] {
    cursor: pointer;
    background-color: var(--kungalgame-pink-4);
    color: var(--kungalgame-white);
    padding: 5px;
    & > span {
      font-style: oblique;
      & > span {
        font-weight: bold;
        margin-right: 5px;
      }
    }
  }

  .mention[data-denotation-char='#'] {
    cursor: pointer;
    background-color: var(--kungalgame-purple-4);
    color: var(--kungalgame-white);
    padding: 5px;
    & > span {
      font-style: oblique;
      & > span {
        font-weight: bold;
        margin-right: 5px;
      }
    }
  }

  .mention > span {
    margin: 0 3px;
  }
}
</style>
