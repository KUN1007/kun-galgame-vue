<script setup lang="ts">
import { ref, computed, watch, onBeforeMount } from 'vue'
// 导入编辑帖子的 store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
import { storeToRefs } from 'pinia'

const topicData = storeToRefs(useKUNGalgameEditStore())

// 临时数据，将会从后端返回 7 个热门 tag
const tags = [
  '啊这可海星',
  '啊这可海星',
  '啊这',
  '啊这可海星az',
  '啊这可海星啊这可海星',
  '鲲鲲鲲',
]

// 选中的 tag
const selectedTags = ref<string[]>([])

// 组件挂载之前载入 store 里的数据
onBeforeMount(() => {
  // 如果用户保存了草稿则载入
  if (topicData.isSave.value) {
    selectedTags.value = topicData.tags.value
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
  return tags.filter((tag) => !selectedTags.value.includes(tag))
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
  topicData.tags.value = selectedTags.value
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
        placeholder="请输入话题的关键词"
        @keyup="handleTagInput"
      />
    </div>

    <div class="tips">
      提示：（单个关键词 14 个字符以内，至少选择一个、最多 7 个）,
      您可以输入文字按下 ' Enter ' 创建关键词
    </div>
    <!-- 标签的提示词 -->
    <div class="tags-info">热门关键词（点击选择）:</div>
    <!-- 标签容器 -->
    <div class="tags">
      <span v-for="tag in remainingTags" @click="() => handleTagClick(tag)">
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 标签的总容器 */
.container-a {
  width: 100%;
}

.input-container {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid var(--kungalgame-blue-4);
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
  &:focus {
    box-shadow: 0px 0px 5px var(--kungalgame-blue-4);
  }
}

/* 提示 */
.tips {
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
