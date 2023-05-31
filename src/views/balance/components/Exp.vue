<script setup lang="ts"></script>

<template>
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
</template>

<style lang="scss" scoped>
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
</style>
