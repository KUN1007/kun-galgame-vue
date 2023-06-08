<script setup lang="ts">
import List from './List.vue'
import Describe from './Describe.vue'
import Contacts from './Contacts.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'
</script>

<template>
  <!-- 头部下面的信息展示部分,目的是使信息区域居中且占比 61.8 -->
  <div class="kungalgame-info">
    <!-- 信息展示部分的容器,目的是把左侧的信息和右侧的网站介绍分开 -->
    <div class="container">
      <!-- 左侧的信息容器 -->
      <div class="top">
        <!-- 左侧顶部的信息 -->

        <List />
        <!-- 左侧下方的信息 -->
        <div class="bottom">
          <!-- 联系方式 -->
          <Contacts />
          <!-- 版权描述,版本号 -->
          <KUNGalgameFooter style="margin: 0 auto" />
        </div>
      </div>

      <Describe />
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 头部下面的信息展示部分,目的是使信息区域居中且占比 61.8 */
.kungalgame-info {
  /* 信息区域的增长 */
  flex-grow: 1;
  display: flex;
  background-color: var(--kungalgame-trans-blue-2);
}
/* 信息展示部分的容器,目的是把左侧的信息和右侧的网站介绍分开 */
.container {
  margin: 0 auto;
  /* 信息区域最小宽度 */
  min-width: 700px;
  width: 80%;
  /* 为了左右两部分设置弹性盒 */
  display: flex;
}
/* 左侧的信息容器 */
.top {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* 左侧分类信息区相对于右侧网站介绍的比例 */
  flex-grow: 2;
}
/* 左侧下方的信息 */
.bottom {
  display: flex;
  flex-direction: column;
}
</style>
