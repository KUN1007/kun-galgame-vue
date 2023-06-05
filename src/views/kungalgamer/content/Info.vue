<script setup lang="ts"></script>

<template>
  <!-- 右侧内容区 -->
  <div class="article">
    <!-- 用户个人信息 -->
    <div class="kungalgamer-info">
      <!-- 用户基本信息 -->
      <ul class="kungalgamer-basic">
        <li>
          <!-- 用户名 -->
          <span>用户名: KUN</span>
          <!-- 萌萌点 -->
          <span>moemoepoint: 1007</span>
        </li>
        <li>
          <!-- 注册序号 -->
          <span>注册序号: 1007</span>
          <!-- 注册时间 -->
          <span>注册时间: 2019/10/07</span>
        </li>
      </ul>
      <!-- 用户签名 -->
      <ul class="kungalgamer-sign">
        <div>
          <div>签名:</div>
          啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
          啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
          啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
          啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
          啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
          啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
          啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
          啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
        </div>
        <!-- 更改签名 -->
        <div class="change-btn">
          <button>更改签名</button>
          <button>确定更改</button>
        </div>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 内容区 */
.article {
  flex-grow: 1;
  padding: 7px 27px;
}
/* 用户个人信息 */
.kungalgamer-info {
  display: flex;
  flex-direction: column;
}
/* 用户基本信息 */
.kungalgamer-basic {
  display: flex;
}
/* 对单个基本信息设置间距 */
.kungalgamer-basic > li {
  /* 基本信息距离用户签名的距离 */
  margin-bottom: 27px;
  display: flex;
  flex-direction: column;
}
.kungalgamer-basic > li:nth-child(2) {
  margin-left: 77px;
}
.kungalgamer-basic span:nth-child(2) {
  margin-top: 7px;
}
/* 用户签名 */
.kungalgamer-sign {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
/* 更改签名 */
.change-btn {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
/* 用户更改签名的按钮 */
.change-btn button {
  height: 30px;
  width: 49%;
  border: 1px solid var(--kungalgame-blue-4);
  background-color: var(--kungalgame-trans-blue-0);
  cursor: pointer;
}
.change-btn button:hover {
  background-color: var(--kungalgame-trans-blue-4);
}
.change-btn button:active {
  background-color: var(--kungalgame-trans-blue-0);
}
</style>
