<script setup lang="ts"></script>

<template>
  <!-- 右侧部分 -->
  <div class="kungalgame-right-bar-right">
    <div class="triangle"></div>
    <!-- 对帖子进行排序 -->
    <div class="sort">
      <div>排序</div>
      <!-- 左侧部分 -->
      <div class="kungalgame-right-bar-left">
        <!-- 按照浏览数排序 -->
        <div><i class="fa-regular fa-eye"></i> 按照浏览数排序</div>
        <!-- 按照点赞数排序 -->
        <div><i class="fa-regular fa-thumbs-up"></i> 按照点赞数排序</div>
        <!-- 按照时间排序 -->
        <div><i class="fa-solid fa-hourglass-half"></i> 按照时间排序</div>
      </div>
      <div><i class="fa-solid fa-arrow-down-wide-short"></i></div>
    </div>
    <!-- 返回顶部 -->
    <div class="top">
      <div>顶部</div>
      <div><i class="fa-solid fa-arrows-up-to-line"></i></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 功能栏的左侧 */
.kungalgame-right-bar-left {
  position: absolute;
  white-space: nowrap;
  right: 50px;
  cursor: pointer;
  display: none;
  background-color: $kungalgame-blue-2;
}
.kungalgame-right-bar-left > div {
  padding: 7px;
}
.kungalgame-right-bar-left > div:hover {
  background-color: $kungalgame-red-2;
}
/* 排序 hover 出现 */
.kungalgame-right-bar .sort:hover .kungalgame-right-bar-left {
  display: block;
}
/* 图标字体的颜色 */
.kungalgame-right-bar-left i {
  margin-right: 10px;
  color: $kungalgame-red-4;
}
/* 最后一个排序的样式 */
.kungalgame-right-bar-left div:last-child i {
  margin-right: 14px;
}
/* 右侧部分 */
.kungalgame-right-bar-right {
  position: relative;
}
.triangle {
  position: absolute;
  border-width: 10px;
  border-style: solid;
  border-color: transparent;
  border-bottom-color: $kungalgame-trans-white-2;
  top: 50px;
  right: 14px;
}
/* 排序 */
.sort,
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
  padding: 0 9px;
  background-color: $kungalgame-blue-2;
  box-shadow: $shadow;
  cursor: pointer;
}
.top {
  background-color: $kungalgame-red-1;
}
.top {
  margin-top: 11px;
}
.sort i,
.top i {
  margin-top: 5px;
  color: $kungalgame-red-6;
}
</style>
