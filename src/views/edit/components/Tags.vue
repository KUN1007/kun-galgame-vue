<script setup lang="ts">
import { ref, computed } from 'vue'

interface Tag {
  index: number
  name: string
}

// 临时数据，将会从后端返回 7 个热门 tag
const tags: Tag[] = [
  {
    index: 1,
    name: '啊这可海星',
  },
  {
    index: 2,
    name: '啊这可海星',
  },
  {
    index: 3,
    name: '啊这可海星',
  },
  {
    index: 4,
    name: '啊这可海星啊这可海星',
  },
  {
    index: 5,
    name: '啊这可海星',
  },
  {
    index: 6,
    name: '啊这可海星啊这可海星',
  },
  {
    index: 7,
    name: '啊这可海星',
  },
]

// 选中的 tag
const selectedTags = ref<Tag[]>([])

// 点击 tag 触发回调
const handleTagClick = (tag: Tag) => {
  selectedTags.value.push(tag)
}

// 点击取消选中 tag
const handleTagClose = (tag: Tag) => {
  const index = selectedTags.value.indexOf(tag)
  if (index > -1) {
    selectedTags.value.splice(index, 1)
  }
}

// 被选中后还留下的 tag
const remainingTags = computed<Tag[]>(() => {
  return tags.filter((tag) => !selectedTags.value.includes(tag))
})

// 输入框事件，按下 enter 创建 tag，创建 tag 时长度不超过 17，个数不超过 7
const handleTagInput = (event: KeyboardEvent) => {
  const inputElement = event.target as HTMLInputElement
  const tagName = inputElement.value.trim()

  // 按下 enter 创建
  if (
    event.key === 'Enter' &&
    tagName.length > 0 &&
    selectedTags.value.length < 7
  ) {
    const tag: Tag = {
      index: selectedTags.value.length + 1,
      name: validateTagName(tagName),
    }

    selectedTags.value.push(tag)
    inputElement.value = ''
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
</script>

<template>
  <!-- 标签的总容器 -->
  <div class="container-a">
    <div class="input-container">
      <div class="tags-container">
        <!-- 已选择的标签显示容器 -->
        <span v-for="tag in selectedTags" :key="tag.index" class="selected-tag">
          {{ tag.name }}
          <span class="close-btn" @click="handleTagClose(tag)">×</span>
        </span>
      </div>
      <!-- 标签输入框 -->
      <input
        class="input"
        type="text"
        placeholder="请输入话题的关键词"
        @keydown.enter="handleTagInput"
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
      <span
        v-for="tag in remainingTags"
        :key="tag.index"
        @click="() => handleTagClick(tag)"
      >
        {{ tag.name }}
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
  padding: 3px;
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
  padding: 5px;
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
