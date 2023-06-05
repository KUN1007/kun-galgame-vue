<script setup lang="ts">
import { Icon } from '@iconify/vue'
// 接受父组件传值,若是主页则显示搜索历史
defineProps(['isMainPage'])
</script>

<template>
  <!-- 交互区搜索框 -->
  <div class="container">
    <!-- 搜索框表单 -->
    <form class="search-form">
      <!-- 搜索框内容 -->
      <div class="content">
        <!-- 框体 -->
        <input type="search" class="input" placeholder="搜索帖子" />
      </div>
      <!-- 搜索框图标 -->
      <div class="search-btn">
        <Icon icon="line-md:search" />
      </div>
    </form>
    <!-- 搜索历史容器 -->
    <div class="history" v-if="$props.isMainPage">
      <!-- 搜索历史标题 -->
      <div class="title">
        <span>搜索历史</span>
        <span>清除所有历史</span>
      </div>
      <!-- 搜索历史 -->
      <div class="history-container">
        <div>
          <span
            >啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星<Icon
              class="delete"
              icon="line-md:close-circle-twotone"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 搜索帖子 */
.container {
  height: 40px;
  width: 1px;
  justify-content: center;
  align-items: center;
  /* 页面缩小不换行 */
  white-space: nowrap;
  background-color: $kungalgame-trans-blue-2;
  flex-grow: 2;
  /* 相对于二级菜单定位 */
  position: relative;
  display: flex;
  border-bottom: 1px solid $kungalgame-trans-blue-4;
  box-sizing: border-box;
  &:hover {
    background-color: $kungalgame-trans-white-2;
    /* hover 时显示搜索历史 */
    & .history {
      display: flex;
    }
  }
}
/* 搜索框表单 */
.search-form {
  display: flex;
  height: 40px;
  /* 随着页面自增长 */
  width: 1px;
  flex-grow: 1;
  /* 居中 */
  justify-content: center;
  align-items: center;
}
/* 搜索内容区 */
.content {
  width: 100%;
}
/* 框体 */
.input {
  padding: 0 15px;
  height: 40px;
  width: 100%;
  /* 搜索时输入的字体大小 */
  font-size: 16px;
  border: none;
  background-color: $kungalgame-trans-white-8;
  &::placeholder {
    color: $kungalgame-font-color-2;
  }
}
/* 搜索按钮 */
.search-btn {
  /* 正方形，不缩小 */
  height: 40px;
  width: 40px;
  flex-shrink: 0;
  border-left: 1px solid $kungalgame-trans-blue-4;
  /* 搜索图标居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 内边距盒子 */
  box-sizing: border-box;
  font-size: 18px;
  &:hover {
    background-color: $kungalgame-red-2;
  }
  &:active {
    background-color: $kungalgame-red-3;
  }
}
/* 搜索历史的容器 */
.history {
  width: 100%;
  /* 相对于 nav 的搜索区域绝对定位 */
  position: absolute;
  /* 紧贴搜索区定位 */
  top: 40px;
  left: 0;
  /* 无 hover 时不显示搜索历史 */
  display: none;
  flex-direction: column;
  background-color: $kungalgame-trans-white-2;
  color: $kungalgame-font-color-3;
  border: 1px solid $kungalgame-red-1;
  border-radius: 7px;
  box-shadow: 0 1px 6px $kungalgame-gray-2;
}
/* 搜索历史 title 的文字 */
.title {
  display: flex;
  margin: 10px;
  /* 两个提示文字左右分布 */
  justify-content: space-between;
  span {
    font-size: 14px;
    &:nth-child(2) {
      cursor: pointer;
      border-bottom: 1.5px solid $kungalgame-trans-white-2;
      &:hover {
        border-bottom: 1.5px solid $kungalgame-blue-4;
      }
    }
  }
}
/* 搜索历史 TAG 的存放容器 */
.history-container {
  display: flex;
  flex-direction: column;
  /* 单个搜索记录的字体 */
  font-size: 13px;
  /* 搜索记录左右两侧的空白距离 */
  margin: 10px;
  & > div {
    padding: 7px 3px;
    margin: 2px 0;
    background-color: $kungalgame-trans-gray-1;
    cursor: pointer;
    &:hover {
      background-color: $kungalgame-trans-blue-1;
      & .delete {
        display: block;
      }
    }
  }
  span {
    position: relative;
    display: flex;
    overflow: hidden;
  }
}
/* 删除按钮 */
.delete {
  top: 10%;
  right: 1%;
  font-size: medium;
  position: absolute;
  color: $kungalgame-font-color-0;
  display: none;
}
</style>
