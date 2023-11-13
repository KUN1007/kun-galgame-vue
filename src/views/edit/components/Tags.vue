<script setup lang="ts">
import { ref, computed, watch, onBeforeMount, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Message from '@/components/alert/Message'

import { useKUNGalgameEditStore } from '@/store/modules/edit'
import { usePersistKUNGalgameReplyStore } from '@/store/modules/topic/reply'
import { storeToRefs } from 'pinia'

// Current page's route
const route = useRoute()
// Current page route name
const routeName = computed(() => route.name as string)

// Store for the topic edit interface
const {
  isShowHotKeywords: isShowEditHotKeywords,
  tags,
  isSaveTopic,
  topicRewrite,
} = storeToRefs(useKUNGalgameEditStore())
// Store for the topic interface, used for replies
const {
  isShowHotKeywords: isShowReplyHotKeywords,
  isSaveReply,
  isReplyRewriting,
  replyDraft,
  replyRewrite,
} = storeToRefs(usePersistKUNGalgameReplyStore())

// Compute whether to show hot tags based on route name
const isShowKeywords = computed(() =>
  routeName.value === 'Edit'
    ? isShowEditHotKeywords.value
    : isShowReplyHotKeywords.value
)

// Backend response for hot tags
const hotTags = ref<string[]>([])
// Selected tags
const selectedTags = ref<string[]>([])
// Focus status of the input box
const isInputFocus = ref(false)
// Input box content
const inputValue = ref('')
// Flag to allow tag deletion; without this, deleting the last letter in the input box would also delete the last tag
const canDeleteTag = ref(false)

// Load data from the store before the component is mounted
onBeforeMount(() => {
  /**
   * The editor is in the editing interface
   */
  // Load topic data before mounting if it's not saved (and the current page must be in edit mode)
  if (isSaveTopic.value && routeName.value === 'Edit') {
    selectedTags.value = tags.value
  }
  /**
   * The editor is in the editing interface for rewriting
   */
  // Load tags for rewriting a topic before mounting (if the current page is in edit mode)
  if (topicRewrite.value.isTopicRewriting && routeName.value === 'Edit') {
    selectedTags.value = topicRewrite.value.tags
  }
  /**
   * The editor is in the reply interface
   */
  // Load reply data before mounting if it's not saved (and the current page must be in topic mode)
  if (isSaveReply.value && routeName.value === 'Topic') {
    selectedTags.value = replyDraft.value.tags
  }
  /**
   * The editor is in the reply rewriting interface
   */
  // Load tags for rewriting a reply before mounting (if the current page is in topic mode)
  if (isReplyRewriting.value && routeName.value === 'Topic') {
    selectedTags.value = replyRewrite.value.tags
  }
})

// Callback when a tag is clicked
const handleTagClick = (tag: string) => {
  // Only push if the selected tag count is less than 7
  if (selectedTags.value.length < 7) {
    selectedTags.value.push(tag)
  }
}

// Callback to remove a selected tag
const handleTagClose = (tag: string) => {
  const index = selectedTags.value.indexOf(tag)
  if (index > -1) {
    selectedTags.value.splice(index, 1)
  }
}

// Tags remaining after being selected
const remainingTags = computed<string[]>(() => {
  return hotTags.value.filter((tag) => !selectedTags.value.includes(tag))
})

// Event for adding a tag by pressing Enter key
const handleAddTag = () => {
  const tagName = inputValue.value.trim()

  // Show a warning if the tag already exists
  if (selectedTags.value.includes(tagName)) {
    Message(
      'Tag already exists, please choose another one',
      '标签已存在，请更换',
      'warn'
    )
    return
  }

  // Create a new tag on pressing Enter
  if (tagName.length > 0 && selectedTags.value.length < 7) {
    const tag = validateTagName(tagName)

    // Add a new tag
    selectedTags.value.push(tag)
    // Clear the input box
    inputValue.value = ''
    // Now it's allowed to delete a tag
    canDeleteTag.value = true
  }
}

// Event for removing a tag by pressing Backspace
const handleRemoveTag = () => {
  // Remove the last tag when Backspace is pressed
  if (inputValue.value === '' && selectedTags.value.length > 0) {
    // Check the canDeleteTag value; when a user deletes the last letter in the input box
    // the value is set to true, allowing them to use Backspace to delete a tag
    if (canDeleteTag.value) {
      // Remove the last tag when Backspace is pressed
      selectedTags.value.pop()
    }
    canDeleteTag.value = true
  }
}

// A tag name must not exceed 10 characters; if it does, truncate it to 10 characters
const validateTagName = (tagName: string) => {
  let validatedName = tagName

  if (validatedName.length > 10) {
    validatedName = validatedName.slice(0, 10)
  }

  return validatedName
}

// Watch for changes in selectedTags and save the user-selected tags
watch(selectedTags.value, () => {
  // If it's in the topic mode, save to the reply store
  if (routeName.value === 'Topic') {
    replyDraft.value.tags = selectedTags.value
  }
  // Otherwise, save to the edit store
  if (routeName.value === 'Edit') {
    tags.value = selectedTags.value
  }
})

// Function to get hot tags; get 10 of them
const getTags = async () => {
  return (await useKUNGalgameEditStore().getHotTags(10)).data
}

// Watch for changes in isShowKeywords and fetch tags when it's true, adapting to page responsiveness
watch(
  () => isShowKeywords.value,
  async () => {
    if (
      (routeName.value === 'Edit' && isShowEditHotKeywords.value) ||
      (routeName.value === 'Topic' && isShowReplyHotKeywords.value)
    ) {
      hotTags.value = await getTags()
    }
  }
)

// Fetch hot tags when the component is mounted
onMounted(async () => {
  // Trigger the interface if hot tags need to be loaded in edit mode
  const isLoadEditHotTags =
    routeName.value === 'Edit' && isShowEditHotKeywords.value

  // Trigger the interface if hot tags need to be loaded in topic mode
  const isLoadTopicHotTags =
    routeName.value === 'Topic' && isShowReplyHotKeywords.value

  // Fetch only when needed
  if (isLoadEditHotTags || isLoadTopicHotTags) {
    hotTags.value = await getTags()
  }
})
</script>

<template>
  <!-- Tag container -->
  <div class="container-a">
    <div class="input-container">
      <div class="tags-container">
        <!-- Selected tags display container -->
        <span v-for="tag in selectedTags" class="selected-tag">
          {{ tag }}
          <span class="close-btn" @click="handleTagClose(tag)">×</span>
        </span>
      </div>
      <!-- Tag input box -->
      <input
        class="input"
        type="text"
        v-model="inputValue"
        :placeholder="`${$tm('edit.tags')}`"
        @input="canDeleteTag = false"
        @keyup.enter="handleAddTag"
        @keyup.backspace="handleRemoveTag"
        @focus="isInputFocus = true"
        @blur="isInputFocus = false"
      />

      <!-- Input box focus effect -->
      <div class="box1"></div>
      <div class="box2" :class="isInputFocus ? 'box-active' : ''"></div>
    </div>

    <div class="hint">{{ $tm('edit.hint') }}</div>

    <!-- Hot tags -->
    <div class="hot-tags" v-if="isShowKeywords">
      <!-- Tag hint -->
      <div class="tags-info">{{ $tm('edit.hot') }}</div>
      <!-- Tag container -->
      <div class="tags">
        <span v-for="tag in remainingTags" @click="() => handleTagClick(tag)">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Tag container */
.container-a {
  width: 100%;
}

.input-container {
  &::before {
    content: '☪';
    font-size: 23px;
    display: flex;
    align-items: center;
    padding: 7px;
    color: var(--kungalgame-blue-3);
  }

  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
}

.selected-tag {
  border: 1px solid var(--kungalgame-pink-4);
  border-radius: 14px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  font-size: 14px;
  padding: 3px 17px;
  background-color: var(--kungalgame-trans-pink-0);

  span {
    cursor: pointer;
  }
}

.close-btn {
  margin: 0 5px;
}

/* Tag input box */
.input {
  background-color: var(--kungalgame-trans-white-9);
  /* Font for input tags */
  font-size: 17px;
  flex-grow: 1;
  border: none;
  padding: 7px;
  display: flex;
  min-width: 300px;
  color: var(--kungalgame-font-color-3);
}

.box1 {
  height: 2px;
  width: 100%;
  display: flex;
  background-color: var(--kungalgame-blue-0);
}

.box2 {
  position: relative;
  transform: translateY(-2px);
  transition: all 0.5s;
  height: 2px;
  width: 1px;
  display: flex;
  background-color: var(--kungalgame-blue-1);
}

.box-active {
  width: 100%;
  background-color: var(--kungalgame-blue-4);
}

/* Hint */
.hint {
  font-size: small;
  color: var(--kungalgame-font-color-1);
}

.tags-info {
  margin-top: 20px;
  margin-bottom: 10px;
}

/* Single tag container */
.tags {
  display: flex;
  flex-wrap: wrap;

  & > span {
    border: 1px solid var(--kungalgame-blue-4);
    border-radius: 14px;
    margin: 5px;
    display: block;
    white-space: nowrap;
    font-size: 14px;
    padding: 3px 17px;
    background-color: var(--kungalgame-trans-blue-0);
    cursor: pointer;

    &:hover {
      color: var(--kungalgame-white);
      background-color: var(--kungalgame-blue-4);
    }
  }
}
</style>
