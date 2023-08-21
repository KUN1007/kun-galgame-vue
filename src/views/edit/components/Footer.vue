<script setup lang="ts">
import { ref } from 'vue'
// 导入按钮
import Button from './Button.vue'
// 导入编辑帖子的 store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
// 导入帖子的分类
import { Category, category } from './category'
// 导入编辑界面的 store
import { storeToRefs } from 'pinia'

const topicData = storeToRefs(useKUNGalgameEditStore())

// 定义分类是否被选中
const buttonStatus = ref(false)

// 定义被选中的分类的数组
const selectedCategories = ref<string[]>([])

// 当用户点击分类时的逻辑
const handleClickCategory = (kun: Category) => {
  // 如果选择了 1，同时已选择了 3，则不允许选中 1
  if (kun.index === 1 && selectedCategories.value.includes('其它')) {
    return
  }
  // 如果选择了 3，同时已选择了 1，则不允许选中 3
  if (kun.index === 3 && selectedCategories.value.includes('galgame')) {
    return
  }
  // 样式改变
  kun.isActive.value = !kun.isActive.value
  // 改变选中数组的逻辑
  if (kun.isActive.value) {
    selectedCategories.value.push(kun.name)
  } else {
    const index = selectedCategories.value.indexOf(kun.name)
    if (index !== -1) {
      selectedCategories.value.splice(index, 1)
    }
  }

  // 将选中的 category 给 pinia 的 store
  topicData.category.value = selectedCategories.value
}
</script>

<template>
  <!-- 话题分类的容器 -->
  <div class="topic-group">
    <div>点击选择话题的分区（可多选）:</div>
    <!-- 分类容器的按钮集合 -->
    <div class="group-btn" :class="buttonStatus ? 'selected-btn' : ''">
      <span
        class="btn"
        v-for="kun in category"
        :key="kun.index"
        @click="handleClickCategory(kun)"
        :class="{ active: kun.isActive.value }"
      >
        {{ kun.name }}
      </span>
    </div>
  </div>

  <!-- 发布按钮 -->
  <Button />
</template>

<style lang="scss" scoped>
/* 话题分类的容器 */
.topic-group {
  width: 100%;
  margin: 10px 0;
}
/* 分类容器的按钮集合 */
.group-btn {
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
/* 单个按钮的样式 */
.btn {
  height: 30px;
  width: 20%;
  font-size: 17px;
  cursor: pointer;
  border: 1px solid var(--kungalgame-blue-1);
  background-color: var(--kungalgame-trans-blue-0);
  color: var(--kungalgame-blue-4);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 被选中按钮的样式 */
.active {
  transition: 0.2s;
  background-color: var(--kungalgame-blue-4);
  color: var(--kungalgame-white);
}
</style>
