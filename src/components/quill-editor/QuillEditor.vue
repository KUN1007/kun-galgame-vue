<script setup lang="ts">
import { defineAsyncComponent, computed, ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

// Import the editor
import { QuillEditor } from '@vueup/vue-quill'
// Import editor Modules
import { modules } from './modules'

// Custom Quill themes, the second theme is not currently in use
import '@/styles/editor/editor.snow.scss'
// import '@vueup/vue-quill/dist/vue-quill.bubble.css'

// Import Title component
const Title = defineAsyncComponent(
  () => import('@/components/quill-editor/Title.vue')
)

// Import EditorFooter
import EditorFooter from './EditorFooter.vue'
// Footer slot
import Help from './Help.vue'

// Import the store for editing topics
import { useKUNGalgameEditStore } from '@/store/modules/edit'
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

// Import XSS filtering tool
import DOMPurify from 'dompurify'
// Import debounce function
import { debounce } from '@/utils/debounce'

// Topic editing page store
const {
  editorHeight,
  mode,
  theme,
  textCount,
  isSaveTopic,
  content,
  topicRewrite,
} = storeToRefs(useKUNGalgameEditStore())
// Store for topic page used for replies
const { replyDraft, replyRewrite } = storeToRefs(useKUNGalgameTopicStore())

// Current route
const route = useRoute()
// Current page route name
const routeName = computed(() => route.name as string)

// Define props passed from the parent component
/**
 * @param {boolean} isShowToolbar - Whether to display the toolbar
 * @param {boolean} isShowTitle - Whether to display the title
 */

const props = defineProps<{
  isShowToolbar: boolean
  isShowTitle: boolean
}>()

// Editor instance
const editorRef = ref<typeof QuillEditor>()
// Content inside the editor
const valueHtml = ref('')
// Editor-related configuration
const editorOptions = {
  placeholder: 'Moe Moe Moe!',
}

// Editor height, determined by the route name
const editorHeightStyle = computed(
  () =>
    `height: ${
      routeName.value === 'Edit'
        ? editorHeight.value
        : replyDraft.value.editorHeight
    }px`
)

// Editor mode, determined by the route name
const editorMode = computed(() =>
  routeName.value === 'Edit' ? mode.value : replyDraft.value.mode
)

// Whether to show the editor toolbar
const isShowEditorToolbar = computed(() =>
  props.isShowToolbar ? 'block' : 'none'
)

onBeforeMount(() => {
  /**
   * Editor is in the edit mode
   */
  // Load topic data before mounting if not saved (and must be on the Edit page)
  if (isSaveTopic.value && routeName.value === 'Edit') {
    valueHtml.value = content.value
  }
  /**
   * Editor is in the re-editing edit mode
   */
  // Load data for re-editing a topic before mounting
  if (topicRewrite.value.isTopicRewriting && routeName.value === 'Edit') {
    valueHtml.value = topicRewrite.value.content
  }
  /**
   * Editor is in the reply mode
   */
  // Load reply data before mounting if not saved (and must be on the Topic page)
  if (replyDraft.value.isSaveReply && routeName.value === 'Topic') {
    valueHtml.value = replyDraft.value.content
  }
  /**
   * Editor is in the re-editing reply mode
   */
  if (replyRewrite.value.isReplyRewriting && routeName.value === 'Topic') {
    valueHtml.value = replyRewrite.value.content
  }
})

// Automatically save data when the editor text changes
const handleTextChange = async () => {
  // Filter out XSS
  const purifiedHtml = DOMPurify.sanitize(editorRef.value?.getHTML())
  // Create a debounce function
  const debouncedUpdateContent = debounce(() => {
    /**
     * Editor is in edit mode
     */
    // Save to the edit store if not in topic re-edit mode
    if (!topicRewrite.value.isTopicRewriting && routeName.value === 'Edit') {
      content.value = purifiedHtml
    }
    /**
     * Editor is in re-editing edit mode
     */
    // Load data for re-editing a topic before mounting
    if (topicRewrite.value.isTopicRewriting && routeName.value === 'Edit') {
      topicRewrite.value.content = purifiedHtml
    }
    /**
     * Editor is in reply mode
     */
    // Save to the reply store if not in reply re-edit mode
    if (!replyRewrite.value.isReplyRewriting && routeName.value === 'Topic') {
      replyDraft.value.content = purifiedHtml
    }
    /**
     * Editor is in re-editing reply mode
     */
    if (replyRewrite.value.isReplyRewriting && routeName.value === 'Topic') {
      replyRewrite.value.content = purifiedHtml
    }
  }, 1007)

  // Call the debounce function, which will execute the update operation only once within the delay time
  debouncedUpdateContent()

  // Calculate how many characters the user has entered
  const length = computed(() => editorRef.value?.getText().trim().length)

  // Save the count based on the page's route name
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
    <!-- Topic title -->
    <Title v-if="isShowTitle" />

    <!-- Editor body -->
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

    <!-- Editor footer -->
    <EditorFooter>
      <template #help>
        <Help />
      </template>
    </EditorFooter>
  </div>
</template>

<style lang="scss" scoped>
/* 
 * Resolve style issues
 * These styles are written based on the compiled CSS, it's a bit weird, blame the author www
 */

/* Style of the toolbar */
:deep(.ql-toolbar) {
  border-top: 1px solid var(--kungalgame-blue-1);
  border-bottom: 1px solid var(--kungalgame-blue-1);
  background-color: var(--kungalgame-trans-blue-0);
  /* Shadow below the header */
  box-shadow: 0 2px 4px 0 var(--kungalgame-trans-blue-1);
  display: v-bind(isShowEditorToolbar);
  /* Do not display video insertion, this feature has too many bugs */

  .ql-video {
    display: none;
  }
}

/* Style of the editor body */
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

    /* Compatible with Firefox */
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

  /* Style of BlotFormatter plugin, important here */
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
