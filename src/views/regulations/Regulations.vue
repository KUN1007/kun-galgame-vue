<script setup lang="ts">
import KUNGalgameTopBar from '@/components/KUNGalgameTopBar.vue'
</script>

<template>
  <div class="root">
    <!-- 头部 -->
    <KUNGalgameTopBar />
    <!-- 总容器 -->
    <div class="container">
      <!-- 文章容器 -->
      <div class="content">
        <div class="title-0">· 执行条例（试行）</div>
        <div class="tips">
          <p>
            tips:
            这是执行条例，目的是让论坛的运行机制更加透明，并不是规矩，我们<span
              >没有规矩</span
            >
          </p>
        </div>
        <!-- 萌萌点 -->
        <div class="moemoepoint">
          <div class="title-1">萌萌点</div>
          <!-- 获取方法 -->
          <div class="gain">
            <div class="title-2">- 获取方法</div>
            <ul>
              <li>1. 每个注册用户初始拥有 1007 萌萌点</li>
              <li>2. 每天登录自动获得随机 1 ~ 7 萌萌点</li>
              <li>3. 帖子每被点赞 1 次，获得 1 萌萌点</li>
              <li>4. 帖子每被评论 1 次，获得 1 萌萌点</li>
              <li>5. 帖子每被推 1 次，获得 17 萌萌点</li>
              <li>6. 每日前 7 次回复获得 1 萌萌点</li>
              <li>7. 每日前 3 次点赞获得 1 萌萌点</li>
            </ul>
          </div>
          <!-- 扣除方法 -->
          <div class="deduct">
            <div class="title-2">- 扣除方法</div>
            <ul>
              <li>1. 帖子每被踩 1 次，扣除 3 萌萌点</li>
              <li>2. 单个帖子每被踩 10 次，若审核无误，扣除 100 萌萌点</li>
              <li>3. 用户推贴一次将会被扣除 17 萌萌点，可以重复推贴</li>
            </ul>
          </div>
        </div>
        <!-- 用户 -->
        <div class="kungalgamer">
          <div class="title-1">用户</div>
          <ul>
            <li><strong>1. 萌萌点低于 1000 的用户将会被删除账户</strong></li>
            <li>2. 萌萌点低于 1100 的用户无法使用“推贴”功能</li>
            <li>
              3. 连续 “踩” 10 次将会被删除账户（我们希望少一点批评，多一点赞美）
            </li>
          </ul>
        </div>
        <!-- 帖子 -->
        <div class="topic">
          <div class="title-1">帖子</div>
          <ul>
            <li>
              1.
              每个位于主页的帖子处于“动态推送状态”，一旦该帖子受到包括“点赞”“评论”“推贴”的影响时，该贴将会被置为顶贴
            </li>
            <li>
              2. 帖子热度值计算公式：热度值 = 10 + 评论数 × 3 + 点赞数 × 7 +
              推贴数 × 1007 – 发帖经过小时数 / 3 – 踩 × 7
            </li>
            <li>3. 帖子热度值超过 1007 会获得“流光”样式</li>
            <li>
              4. 一旦单个帖子“踩”的数量达到 10，该帖子会被系统屏蔽，交由管理审核
            </li>
            <li>
              5. 每天晚上 12: 00 帖子池会清空一轮，留下昨天帖子热度值最高的 17
              个帖子，热度值相同则都被推送
            </li>
          </ul>
        </div>
      </div>
      <!-- 版权 -->
      <div class="copyright">
        <span>Copyright © 2023 KUNgalgame</span>
        <span>All rights reserved | Version 0.01</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
* {
  list-style: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
}
*::-webkit-scrollbar {
  display: none;
}
.root {
  height: 1500px;
  display: flex;
  flex-direction: column;
  background-image: url(../img/bg/bg1.png);
  /* background-image: url(./img/bg/bg2.png; */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: 800px;
}
/* 总容器 */
.container {
  /* 居中 */
  margin: 0 auto;
  padding: 10px;
  /* 距离顶部固定交互栏的距离 */
  margin-top: 17px;
  /* 固定宽高 */
  width: 700px;
  height: 1300px;
  background-color: @kungalgame-trans-white-5;
  border-radius: 7px;
  color: @kungalgame-font-color-3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
/* 文章容器 */
.content {
  padding: 10px;
  height: 100%;
  border: 1px solid @kungalgame-trans-blue-4;
  border-radius: 7px;
  box-sizing: border-box;
  background-color: @kungalgame-trans-white-2;
  box-shadow: @shadow;
}
/* 一级标题 */
.title-0 {
  font-size: 30px;
  margin: 17px 0;
}
/* 提示消息 */
.tips {
  border-top: 2px solid @kungalgame-blue-4;
  padding-top: 10px;
  margin-bottom: 47px;
}
/* 规则跳转页面 */
.tips span {
  cursor: pointer;
  color: @kungalgame-blue-4;
  border-bottom: 1px solid @kungalgame-blue-4;
}
/* 二级标题 */
.title-1 {
  font-size: 25px;
  margin: 20px 0;
  border-left: 2px solid @kungalgame-blue-4;
  /* 距离左侧的缩进距离 */
  padding-left: 5px;
}
/* 三级标题 */
.title-2 {
  font-size: 17px;
  /* 文字缩进 */
  text-indent: 1em;
}
/* 萌萌点 */
.moemoepoint ul {
  margin: 10px 0;
  margin-left: 40px;
}
.moemoepoint ul li {
  margin: 5px 0;
}
/* 用户 */
.kungalgamer > ul {
  margin-left: 20px;
}
.kungalgamer > ul li {
  margin: 5px 0;
}
/* 帖子 */
.topic > ul {
  margin-left: 20px;
}
.topic > ul li {
  margin: 5px 0;
}
/* 版权 */
.copyright {
  position: absolute;
  bottom: 2%;
}
</style>
