<script setup lang="ts">
import KUNGalgameTopBar from '@/components/KUNGalgameTopBar.vue'
import currBackground from '@/utils/background'
</script>

<template>
  <div class="root" :style="{ backgroundImage: `url(${currBackground})` }">
    <!-- 头部 -->
    <KUNGalgameTopBar />
    <!-- 文章部分 -->
    <div class="article">
      <!-- 页面标题 -->
      <div class="title">收支公示</div>
      <!-- 内容区 -->
      <div class="content">
        <!-- 收入 -->
        <div class="revenue">
          <!-- 标题 -->
          <div class="revenue-title">收入</div>
          <!-- 收入记录的容器 -->
          <div class="revenue-container">
            <!-- 单条收入 -->
            <div class="single-revenue">
              <!-- 收入来源 -->
              <div class="revenue-reason">啊这可海星</div>
              <!-- 收入时间和金额 -->
              <div class="revenue-result">
                <!-- 收入时间 -->
                <span class="revenue-time">2019/10/07</span>
                <!-- 收入金额 -->
                <span class="revenue-amount">+ 1007 CNY</span>
              </div>
            </div>
            <!-- 单条收入 -->
            <div class="single-revenue">
              <!-- 收入来源 -->
              <div class="revenue-reason">
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </div>
              <!-- 收入时间和金额 -->
              <div class="revenue-result">
                <!-- 收入时间 -->
                <span class="revenue-time">2019/10/07</span>
                <!-- 收入金额 -->
                <span class="revenue-amount">+ 1007 CNY</span>
              </div>
            </div>
            <!-- 单条收入 -->
            <div class="single-revenue">
              <!-- 收入来源 -->
              <div class="revenue-reason">啊这可海星</div>
              <!-- 收入时间和金额 -->
              <div class="revenue-result">
                <!-- 收入时间 -->
                <span class="revenue-time">2019/10/07</span>
                <!-- 收入金额 -->
                <span class="revenue-amount">+ 1007 CNY</span>
              </div>
            </div>
            <!-- 单条收入 -->
            <div class="single-revenue">
              <!-- 收入来源 -->
              <div class="revenue-reason">啊这可海星</div>
              <!-- 收入时间和金额 -->
              <div class="revenue-result">
                <!-- 收入时间 -->
                <span class="revenue-time">2019/10/07</span>
                <!-- 收入金额 -->
                <span class="revenue-amount">+ 1007 CNY</span>
              </div>
            </div>
            <!-- 单条收入 -->
            <div class="single-revenue">
              <!-- 收入来源 -->
              <div class="revenue-reason">啊这可海星</div>
              <!-- 收入时间和金额 -->
              <div class="revenue-result">
                <!-- 收入时间 -->
                <span class="revenue-time">2019/10/07</span>
                <!-- 收入金额 -->
                <span class="revenue-amount">+ 1007 CNY</span>
              </div>
            </div>
            <!-- 单条收入 -->
            <div class="single-revenue">
              <!-- 收入来源 -->
              <div class="revenue-reason">啊这可海星</div>
              <!-- 收入时间和金额 -->
              <div class="revenue-result">
                <!-- 收入时间 -->
                <span class="revenue-time">2019/10/07</span>
                <!-- 收入金额 -->
                <span class="revenue-amount">+ 1007 CNY</span>
              </div>
            </div>
            <!-- 单条收入 -->
            <div class="single-revenue">
              <!-- 收入来源 -->
              <div class="revenue-reason">啊这可海星</div>
              <!-- 收入时间和金额 -->
              <div class="revenue-result">
                <!-- 收入时间 -->
                <span class="revenue-time">2019/10/07</span>
                <!-- 收入金额 -->
                <span class="revenue-amount">+ 1007 CNY</span>
              </div>
            </div>
            <!-- 单条收入 -->
            <div class="single-revenue">
              <!-- 收入来源 -->
              <div class="revenue-reason">啊这可海星</div>
              <!-- 收入时间和金额 -->
              <div class="revenue-result">
                <!-- 收入时间 -->
                <span class="revenue-time">2019/10/07</span>
                <!-- 收入金额 -->
                <span class="revenue-amount">+ 1007 CNY</span>
              </div>
            </div>
            <!-- 单条收入 -->
            <div class="single-revenue">
              <!-- 收入来源 -->
              <div class="revenue-reason">啊这可海星</div>
              <!-- 收入时间和金额 -->
              <div class="revenue-result">
                <!-- 收入时间 -->
                <span class="revenue-time">2019/10/07</span>
                <!-- 收入金额 -->
                <span class="revenue-amount">+ 1007 CNY</span>
              </div>
            </div>
          </div>
          <!-- 总收入 -->
          <div class="revenue-sum">总收入: 1007 CNY</div>
        </div>
        <!-- 支出 -->
        <div class="expenditure">
          <!-- 支出 -->
          <div class="expenditure-title">支出</div>
          <!-- 支出记录的容器 -->
          <div class="expenditure-container">
            <!-- 单条支出 -->
            <div class="single-expenditure">
              <!-- 支出原因 -->
              <div class="expenditure-reason">啊这可海星</div>
              <!-- 支出时间和金额 -->
              <div class="expenditure-result">
                <!-- 支出时间 -->
                <span class="expenditure-time">2019/10/07</span>
                <!-- 支出金额 -->
                <span class="expenditure-amount">- 1007 CNY</span>
              </div>
            </div>
            <!-- 单条支出 -->
            <div class="single-expenditure">
              <!-- 支出原因 -->
              <div class="expenditure-reason">啊这可海星</div>
              <!-- 支出时间和金额 -->
              <div class="expenditure-result">
                <!-- 支出时间 -->
                <span class="expenditure-time">2019/10/07</span>
                <!-- 支出金额 -->
                <span class="expenditure-amount">- 1007 CNY</span>
              </div>
            </div>
            <!-- 单条支出 -->
            <div class="single-expenditure">
              <!-- 支出原因 -->
              <div class="expenditure-reason">啊这可海星</div>
              <!-- 支出时间和金额 -->
              <div class="expenditure-result">
                <!-- 支出时间 -->
                <span class="expenditure-time">2019/10/07</span>
                <!-- 支出金额 -->
                <span class="expenditure-amount">- 1007 CNY</span>
              </div>
            </div>
            <!-- 单条支出 -->
            <div class="single-expenditure">
              <!-- 支出原因 -->
              <div class="expenditure-reason">啊这可海星</div>
              <!-- 支出时间和金额 -->
              <div class="expenditure-result">
                <!-- 支出时间 -->
                <span class="expenditure-time">2019/10/07</span>
                <!-- 支出金额 -->
                <span class="expenditure-amount">- 1007 CNY</span>
              </div>
            </div>
            <!-- 单条支出 -->
            <div class="single-expenditure">
              <!-- 支出原因 -->
              <div class="expenditure-reason">啊这可海星</div>
              <!-- 支出时间和金额 -->
              <div class="expenditure-result">
                <!-- 支出时间 -->
                <span class="expenditure-time">2019/10/07</span>
                <!-- 支出金额 -->
                <span class="expenditure-amount">- 1007 CNY</span>
              </div>
            </div>
            <!-- 单条支出 -->
            <div class="single-expenditure">
              <!-- 支出原因 -->
              <div class="expenditure-reason">啊这可海星</div>
              <!-- 支出时间和金额 -->
              <div class="expenditure-result">
                <!-- 支出时间 -->
                <span class="expenditure-time">2019/10/07</span>
                <!-- 支出金额 -->
                <span class="expenditure-amount">- 1007 CNY</span>
              </div>
            </div>
            <!-- 单条支出 -->
            <div class="single-expenditure">
              <!-- 支出原因 -->
              <div class="expenditure-reason">啊这可海星</div>
              <!-- 支出时间和金额 -->
              <div class="expenditure-result">
                <!-- 支出时间 -->
                <span class="expenditure-time">2019/10/07</span>
                <!-- 支出金额 -->
                <span class="expenditure-amount">- 1007 CNY</span>
              </div>
            </div>
            <!-- 单条支出 -->
            <div class="single-expenditure">
              <!-- 支出原因 -->
              <div class="expenditure-reason">啊这可海星</div>
              <!-- 支出时间和金额 -->
              <div class="expenditure-result">
                <!-- 支出时间 -->
                <span class="expenditure-time">2019/10/07</span>
                <!-- 支出金额 -->
                <span class="expenditure-amount">- 1007 CNY</span>
              </div>
            </div>
            <!-- 单条支出 -->
            <div class="single-expenditure">
              <!-- 支出原因 -->
              <div class="expenditure-reason">啊这可海星</div>
              <!-- 支出时间和金额 -->
              <div class="expenditure-result">
                <!-- 支出时间 -->
                <span class="expenditure-time">2019/10/07</span>
                <!-- 支出金额 -->
                <span class="expenditure-amount">- 1007 CNY</span>
              </div>
            </div>
            <!-- 单条支出 -->
            <div class="single-expenditure">
              <!-- 支出原因 -->
              <div class="expenditure-reason">啊这可海星</div>
              <!-- 支出时间和金额 -->
              <div class="expenditure-result">
                <!-- 支出时间 -->
                <span class="expenditure-time">2019/10/07</span>
                <!-- 支出金额 -->
                <span class="expenditure-amount">- 1007 CNY</span>
              </div>
            </div>
          </div>
          <!-- 总支出 -->
          <div class="expenditure-sum">总支出: 1007 CNY</div>
        </div>
      </div>
      <!-- 收入支出总结 -->
      <div class="sum">
        <!-- 可支配金额 -->
        <div class="disposable-amount">可支配金额: <span>1007 CNY</span></div>
        <!-- 经济状态 -->
        <div class="amount-status">
          <div>经济状态: <span>亏损</span></div>
          <div>亏损金额: - 1007 CNY</div>
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

<style lang="scss" scoped>
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: 1100px;
  min-height: 700px;
}
/* 文章部分 */
.article {
  /* 固定宽高 */
  width: 1000px;
  height: 500px;
  /* 居中 */
  margin: auto;
  background-color: $kungalgame-trans-white-2;
  /* 模糊背景 */
  backdrop-filter: blur(5px);
  /* 边距 */
  padding: 10px;
  border-radius: 7px;
  border: 1px solid $kungalgame-trans-blue-2;
  /* 阴影 */
  box-shadow: $shadow;
  /* 竖直弹性盒 */
  display: flex;
  align-items: center;
  flex-direction: column;
  /* 相对于版权信息定位 */
  position: relative;
}
/* 页面标题 */
.title {
  /* 固定高度 */
  height: 50px;
  /* 字体大小 */
  font-size: 30px;
  /* 居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 内容区 */
.content {
  display: flex;
  justify-content: space-between;
}
/* 收入 */
.revenue {
  /* 占 49%，目的是使得中间留下间隔 */
  width: 49%;
  /* 固定高度 */
  height: 300px;
  border: 1px solid $kungalgame-blue-4;
  display: flex;
  flex-direction: column;
}
/* "收入"两个字 */
.revenue-title {
  font-size: 20px;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  border-bottom: 1px solid $kungalgame-blue-4;
  background-color: $kungalgame-trans-blue-0;
}
/* 收入记录的容器 */
.revenue-container {
  flex-grow: 1;
  padding: 10px;
  /* y 轴溢出滚动 */
  overflow-y: scroll;
}
/* 滚动条的样式 */
.revenue-container::-webkit-scrollbar {
  display: inline;
  width: 4px;
  height: 0;
  background-color: $kungalgame-red-2;
  border-radius: 2px;
}
.revenue-container::-webkit-scrollbar-thumb {
  background: $kungalgame-blue-4;
  border-radius: 2px;
}
/* 单条收入 */
.single-revenue {
  margin-top: 20px;
  border-bottom: 1px solid $kungalgame-blue-4;
}
/* 收入来源 */
.revenue-reason {
  border-left: 5px solid $kungalgame-blue-4;
  padding-left: 5px;
}
/* 收入时间和金额 */
.revenue-result {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
/* 收入时间 */
.revenue-time {
  letter-spacing: 1px;
}
/* 收入金额 */
.revenue-amount {
  padding: 0 5px;
  background-color: $kungalgame-blue-2;
}
/* 总收入 */
.revenue-sum {
  height: 40px;
  font-size: 18px;
  /* 文字居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid $kungalgame-blue-4;
  background-color: $kungalgame-trans-blue-0;
}
/* 支出 */
.expenditure {
  width: 49%;
  height: 300px;
  border: 1px solid $kungalgame-red-4;
  display: flex;
  flex-direction: column;
}
/* "支出"两个字 */
.expenditure-title {
  font-size: 20px;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  border-bottom: 1px solid $kungalgame-red-4;
  background-color: $kungalgame-trans-red-0;
}
/* 支出记录的容器 */
.expenditure-container {
  flex-grow: 1;
  padding: 10px;
  overflow-y: scroll;
}
/* 滚动条的样式 */
.expenditure-container::-webkit-scrollbar {
  display: inline;
  width: 4px;
  height: 0;
  background-color: $kungalgame-red-2;
  border-radius: 2px;
}
.expenditure-container::-webkit-scrollbar-thumb {
  background: $kungalgame-blue-4;
  border-radius: 2px;
}
/* 单条支出 */
.single-expenditure {
  margin-top: 20px;
  border-bottom: 1px solid $kungalgame-red-4;
}
/* 支出原因 */
.expenditure-reason {
  border-left: 5px solid $kungalgame-red-4;
  padding-left: 5px;
}
/* 支出的时间和金额 */
.expenditure-result {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
/* 支出时间 */
.expenditure-time {
  letter-spacing: 1px;
}
/* 支出金额 */
.expenditure-amount {
  padding: 0 5px;
  background-color: $kungalgame-red-2;
}
/* 总支出 */
.expenditure-sum {
  height: 40px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid $kungalgame-red-4;
  background-color: $kungalgame-trans-red-0;
}
/* 收入支出总结 */
.sum {
  margin-top: 30px;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 22px;
}
/* 可支配金额 */
.disposable-amount {
  height: 50px;
}
.disposable-amount > span {
  padding: 5px;
  background-color: $kungalgame-green-2;
}
/* 经济状态 */
.amount-status {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.amount-status span {
  padding: 5px;
  background-color: $kungalgame-red-4;
  color: $kungalgame-white;
}
.amount-status > div:last-child {
  background-color: $kungalgame-red-2;
}
/* 版权 */
.copyright {
  position: absolute;
  bottom: -40px;
}
</style>
