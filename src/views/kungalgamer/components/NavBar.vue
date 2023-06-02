<script setup lang="ts"></script>

<template>
  <!-- 左侧交互区 -->
  <div class="nav">
    <!-- 交互区的单个项目 -->
    <ul>
      <li><RouterLink to="/kungalgamer/info">个人信息</RouterLink></li>
      <li>
        <RouterLink to="/kungalgamer/password">邮箱密码</RouterLink>
      </li>
      <li>
        <RouterLink to="/kungalgamer/topic">发过的帖</RouterLink>
      </li>
      <li>回过的贴</li>
      <li>赞过的帖</li>
      <li>推过的帖</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
/* 左侧交互区 */
.nav {
  /* 固定宽度 */
  height: 100%;
  width: 120px;
  background-color: $kungalgame-trans-red-0;
  border-right: 1px solid $kungalgame-blue-4;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}
/* 左侧交互区的无需列表容器 */
.nav > ul {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
/* 列表中的单个项目 */
.nav > ul li {
  height: 40px;
  background-color: $kungalgame-trans-blue-0;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 单个项目的 hover */
.nav > ul li:hover {
  background-color: $kungalgame-trans-blue-4;
  transition: 0.1s;
}
</style>
