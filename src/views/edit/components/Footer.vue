<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
// 导入按钮
import Button from './Button.vue'
// 导入编辑帖子的 store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
// 导入帖子的分类
import { Category, category } from './category'
import { storeToRefs } from 'pinia'

const topicData = storeToRefs(useKUNGalgameEditStore())

// 定义被选中的分类的数组
const selectedCategories = ref<string[]>([])

// 组件挂载之前载入 store 里的数据
onBeforeMount(() => {
  // 如果用户保存了草稿则载入
  if (topicData.isSave.value) {
    selectedCategories.value = topicData.category.value
  }
})

// 当用户点击分类时的逻辑
const handleClickCategory = (kun: Category) => {
  // 如果选择了 1，同时已选择了 3，则不允许选中 1
  if (kun.index === 1 && selectedCategories.value.includes('Others')) {
    return
  }
  // 如果选择了 3，同时已选择了 1，则不允许选中 3
  if (kun.index === 3 && selectedCategories.value.includes('Galgame')) {
    return
  }

  const index = selectedCategories.value.indexOf(kun.name)
  if (index !== -1) {
    // 如果已经选中，则取消选中
    selectedCategories.value.splice(index, 1)
  } else {
    // 否则选中分类
    selectedCategories.value.push(kun.name)
  }

  // 将选中的 category 给 pinia 的 store
  topicData.category.value = selectedCategories.value
}
</script>

<template>
  <!-- 话题分类的容器 -->
  <div class="topic-group">
    <div>{{ $tm('edit.categories') }}</div>
    <!-- 分类容器的按钮集合 -->
    <div class="group-btn">
      <span
        class="btn"
        v-for="kun in category"
        :key="kun.index"
        @click="handleClickCategory(kun)"
        :class="{ active: selectedCategories.includes(kun.name) }"
      >
        {{ $tm(`edit.${kun.name}`) }}
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
  margin-top: 20px;
  margin-bottom: 10px;
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
