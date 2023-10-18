<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import KUNGalgamer from './KUNGalgamer.vue'

import { useKUNGalgameRankingStore } from '@/store/modules/ranking'
import { storeToRefs } from 'pinia'

import type { RankingUsers } from '@/api'
import { userSortItem, userIconMap } from './navSortItem'

const { user } = storeToRefs(useKUNGalgameRankingStore())
const users = ref<RankingUsers[]>([])
// 升序降序
const isAscending = ref(false)

// 获取用户
const getUsers = async () => {
  const responseData = await useKUNGalgameRankingStore().getUsers()
  return responseData.data
}

// 监听用户数据获取新用户
watch(
  () => user,
  async () => {
    users.value = await getUsers()
  },
  { deep: true }
)

// 挂载时获取话题
onMounted(async () => {
  users.value = await getUsers()
})

// 切换排序方式
const handleClickSortOrder = () => {
  isAscending.value = !isAscending.value
  if (isAscending.value) {
    user.value.sortOrder = 'asc'
  } else {
    user.value.sortOrder = 'desc'
  }
}
</script>

<template>
  <!-- 话题排行 -->
  <div class="topic">
    <!-- 话题排行标题 -->
    <div class="title">用户</div>
    <!-- 话题排行的交互 -->
    <div class="nav">
      <!-- 升序降序 -->
      <div class="order" @click="handleClickSortOrder">
        <Transition name="order" mode="out-in">
          <div v-if="isAscending">
            <span>升序</span>
            <Icon class="icon" icon="line-md:arrow-small-up" />
          </div>
          <div v-else-if="!isAscending">
            <span>降序</span>
            <Icon class="icon" icon="line-md:arrow-small-down" />
          </div>
        </Transition>
      </div>

      <!-- 排序 -->
      <div class="sort">
        <Icon class="icon" :icon="userIconMap[user.sortField]" />
        <span>筛选</span>
        <!-- 排序子菜单 -->
        <div class="submenu">
          <div
            class="item"
            v-for="kun in userSortItem"
            :key="kun.index"
            @click="user.sortField = kun.sortField"
          >
            <span><Icon class="icon" :icon="kun.icon" /></span>
            <span>{{ kun.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 单个话题的容器 -->
    <div class="container">
      <KUNGalgamer :field="user.sortField" :users="users" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 话题排行 */
.topic {
  width: 50%;
  height: calc(100% - 50px - 20px - 40px);
}
/* 话题排行标题 */
.title {
  font-size: 30px;
  color: var(--kungalgame-pink-4);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
/* 话题排行的交互 */
.nav {
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 10px;
  border: 1px solid var(--kungalgame-pink-4);
  border-radius: 5px;
}

.order {
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;

  .icon {
    font-size: 22px;
  }

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}

.sort {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  border-left: 1px solid var(--kungalgame-pink-4);
}

.sort:hover .submenu {
  display: flex;
}

.icon {
  color: var(--kungalgame-pink-4);
}

.submenu {
  top: 40px;
  position: absolute;
  width: 100%;
  display: none;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid var(--kungalgame-pink-0);
  box-shadow: var(--shadow);
  background-color: var(--kungalgame-trans-white-5);
  backdrop-filter: blur(5px);
  .item {
    transition: all 0.2s;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &:hover {
      background-color: var(--kungalgame-trans-pink-1);
    }
  }
}

/* 单个话题的容器 */
.container {
  height: 100%;
  border-top: none;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: inline;
    width: 4px;
    height: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--kungalgame-pink-4);
    border-radius: 2px;
  }
  /* 兼容火狐 */
  scrollbar-width: thin;
  scrollbar-color: var(--kungalgame-pink-4) var(--kungalgame-pink-0);
}

.order-enter-active,
.order-leave-active {
  transition: all 0.25s ease-out;
}

.order-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.order-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
