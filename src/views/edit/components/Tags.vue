<script setup lang="ts">
import { ref, computed, watch, onBeforeMount, onUpdated } from 'vue'
import { useRoute } from 'vue-router'
// 导入编辑话题的 store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

// 当前页面的路由
const route = useRoute()
// 当前页面路由的名字
const routeName = computed(() => route.name as string)

// 话题编辑界面 store
const { isShowHotKeywords, tags, isSaveTopic } = storeToRefs(
  useKUNGalgameEditStore()
)
// 话题界面的 store，用于回复
const { replyDraft } = storeToRefs(useKUNGalgameTopicStore())

// 临时数据，将会从后端返回 7 个热门 tag
const hotTags = [
  '啊这可海星',
  '啊这可海星',
  '啊这',
  '啊这可海星az',
  '啊这可海星啊这可海星',
  '鲲鲲鲲',
]

// 选中的 tag
const selectedTags = ref<string[]>([])
// input 框是否为 focus 状态
const isInputFocus = ref(false)

// 组件挂载之前载入 store 里的数据
onBeforeMount(() => {
  // 挂载之前载入话题数据，如果不保存，则不载入（并且当前必须在 edit 界面）
  if (isSaveTopic.value && routeName.value === 'Edit') {
    selectedTags.value = tags.value
  }
  // 挂载之前载入回复数据，如果不保存，则不载入（并且当前必须在 topic 界面）
  if (replyDraft.value.isSaveReply && routeName.value === 'Topic') {
    selectedTags.value = replyDraft.value.tags
  }
})

// 点击 tag 触发回调
const handleTagClick = (tag: string) => {
  selectedTags.value.push(tag)
}

// 点击取消选中 tag
const handleTagClose = (tag: string) => {
  const index = selectedTags.value.indexOf(tag)
  if (index > -1) {
    selectedTags.value.splice(index, 1)
  }
}

// 被选中后还留下的 tag
const remainingTags = computed<string[]>(() => {
  return hotTags.filter((tag) => !selectedTags.value.includes(tag))
})

// 输入框事件，按下 enter 创建 tag，创建 tag 时长度不超过 17，个数不超过 7
const handleTagInput = (event: KeyboardEvent) => {
  const inputElement = event.target as HTMLInputElement
  // 单个 tag
  const tagName = inputElement.value.trim()

  // 按下 enter 创建
  if (
    event.key === 'Enter' &&
    tagName.length > 0 &&
    selectedTags.value.length < 7
  ) {
    const tag = validateTagName(tagName)

    // 创建新 tag
    selectedTags.value.push(tag)
    inputElement.value = ''
  } else if (
    event.key === 'Backspace' &&
    inputElement.value === '' &&
    selectedTags.value.length > 0
  ) {
    // 按下 Backspace 键时，删除最后一个 tag
    selectedTags.value.pop()
  }
}

// 合法的输入长度不能超过 17 个字符，超过则截取前 17 个字符
const validateTagName = (tagName: string) => {
  let validatedName = tagName

  if (validatedName.length > 17) {
    validatedName = validatedName.slice(0, 17)
  }

  return validatedName
}

// 监测 selectedTags 的变化，保存用户选中的 tag
watch(selectedTags.value, () => {
  // 如果是在 topic 界面则保存到回复的 store
  if (routeName.value === 'Topic') {
    replyDraft.value.tags = selectedTags.value
  }
  // 否则保存在 edit 界面的 store
  if (routeName.value === 'Edit') {
    tags.value = selectedTags.value
  }
})
</script>

<template>
  <!-- 标签的总容器 -->
  <div class="container-a">
    <div class="input-container">
      <div class="tags-container">
        <!-- 已选择的标签显示容器 -->
        <span v-for="tag in selectedTags" class="selected-tag">
          {{ tag }}
          <span class="close-btn" @click="handleTagClose(tag)">×</span>
        </span>
      </div>
      <!-- 标签输入框 -->
      <input
        class="input"
        type="text"
        :placeholder="`${$tm('edit.tags')}`"
        @keyup="handleTagInput"
        @focus="isInputFocus = true"
        @blur="isInputFocus = false"
      />

      <!-- 输入框 focus 的特效 -->
      <div class="box1"></div>
      <div class="box2" :class="isInputFocus ? 'box-active' : ''"></div>
    </div>

    <div class="hint">{{ $tm('edit.hint') }}</div>

    <!-- 热门 tags -->
    <div class="hot-tags" v-if="isShowHotKeywords">
      <!-- 标签的提示词 -->
      <div class="tags-info">{{ $tm('edit.hot') }}</div>
      <!-- 标签容器 -->
      <div class="tags">
        <span v-for="tag in remainingTags" @click="() => handleTagClick(tag)">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 标签的总容器 */
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
  border: 1px solid var(--kungalgame-blue-1);
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  font-size: 14px;
  padding: 2px;
  background-color: var(--kungalgame-trans-red-1);
  span {
    cursor: pointer;
  }
}

.close-btn {
  margin: 0 5px;
}

/* 标签输入框 */
.input {
  background-color: var(--kungalgame-trans-white-9);
  /* 输入标签的字体 */
  font-size: 17px;
  flex-grow: 1;
  box-sizing: border-box;
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

/* 提示 */
.hint {
  font-size: small;
  color: var(--kungalgame-font-color-1);
}

.tags-info {
  margin-top: 20px;
  margin-bottom: 10px;
}

/* 单个标签容器 */
.tags {
  display: flex;
  flex-wrap: wrap;
}

/* 单个标签的样式 */
.tags > span {
  border: 1px solid var(--kungalgame-blue-1);
  margin: 5px;
  display: block;
  white-space: nowrap;
  font-size: 14px;
  padding: 3px;
  background-color: var(--kungalgame-trans-blue-1);
  cursor: pointer;
}

.tags > span:hover {
  background-color: var(--kungalgame-trans-red-1);
}
</style>
