<!-- 
  这里是楼主的其他帖子组件
 -->
<script setup lang="ts"></script>

<template>
  <!-- 楼主的其它帖子 -->
  <div class="master-other-topic">
    <ul>
      <li><a href="#">楼主的其它帖子</a></li>
      <li><a href="#">啊这可海星</a></li>
      <li><a href="#">啊这可海星</a></li>
      <li><a href="#">啊这可海星</a></li>
      <li><a href="#">啊这可海星</a></li>
      <li><a href="#">啊这可海星</a></li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
/* 楼主的其它帖子 */
.master-other-topic {
  width: 100%;
  height: 1px;
  flex-grow: 4;
  /* 上方区域的配色 */
  border: 1px solid @kungalgame-trans-pink-2;
  /* 隐藏溢出的颜色 */
  overflow: hidden;
  border-radius: 5px;
  background-color: @kungalgame-trans-pink-0;
  box-shadow: @shadow;
}
.master-other-topic ul {
  height: 100%;
  /* 整体为一个无序列表，列表为弹性盒 */
  display: flex;
  flex-direction: column;
}
.master-other-topic ul li {
  height: 1px;
  width: 100%;
  /* 每个项目相对于标题的占比 */
  flex-grow: 3;
  display: flex;
  /* 垂直居中 */
  align-items: center;
  /* 设置左侧的 border 方便制作 hover */
  border-left: 4px solid transparent;
  /* 内边距盒子 */
  box-sizing: border-box;
}
/* 上方的 hover 效果 */
.master-other-topic ul li:hover {
  border-left: 4px solid @kungalgame-blue-3;
  background-color: @kungalgame-trans-pink-1;
  transition: 0.3s;
}
/* 单个标题的样式 */
.master-other-topic ul li a {
  /* 左右两侧的距离 */
  margin: 0 17px;
  color: @kungalgame-font-color-3;
  /* 标题显示两行、超出部分隐藏 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 显示省略号 */
  display: -webkit-box; /* 将文本框转化为弹性伸缩盒子 */
  -webkit-box-orient: vertical; /* 设置为纵向排列 */
  -webkit-line-clamp: 2; /* 显示两行文本 */
  /* 标题的字体属性 */
  font-size: small;
  line-height: 1.5em;
  box-sizing: border-box;
}
/* 大标题（相同标签下的其它帖子）的样式 */
.master-other-topic ul li:nth-child(1) {
  /* 左侧没有 border，没有 hover */
  border-left: 0;
  /* 相对于单个帖子标题的比例 */
  flex-grow: 2;
  line-height: 40px;
  font-size: 1.8ch;
  font-weight: bold;
  background-color: @kungalgame-trans-pink-1;
  /* 与单个帖子标题的分割线 */
  border-bottom: 1px solid @kungalgame-trans-pink-2;
  /* 水平居中 */
  justify-content: center;
}
</style>
