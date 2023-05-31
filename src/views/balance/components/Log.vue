<script setup lang="ts">
import { FSLog } from './log'
</script>

<template>
  <!-- 单条记录 -->
  <div class="log" v-for="kun in FSLog" :key="kun.index">
    <div v-if="kun.income">
      <!-- 收入来源 -->
      <div class="reason">{{ kun.reason }}</div>
      <!-- 收入时间和金额 -->
      <div class="result">
        <!-- 收入时间 -->
        <span class="date">{{ kun.date }}</span>
        <!-- 收入金额 -->
        <span class="amount">+ {{ kun.amount }} CNY</span>
      </div>
    </div>
    <div v-if="!kun.income">
      <!-- 收入来源 -->
      <div class="reason">{{ kun.reason }}</div>
      <!-- 收入时间和金额 -->
      <div class="result">
        <!-- 收入时间 -->
        <span class="date">{{ kun.date }}</span>
        <!-- 收入金额 -->
        <span class="amount">+ {{ kun.amount }} CNY</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 单条收入 */
.log {
  margin-top: 20px;
  border-bottom: 1px solid $kungalgame-blue-4;
  .reason {
    border-left: 5px solid $kungalgame-blue-4;
    padding-left: 5px;
  }
  .result {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    /* 收入时间 */
    .date {
      letter-spacing: 1px;
    }
    /* 收入金额 */
    .amount {
      padding: 0 5px;
      background-color: $kungalgame-blue-2;
    }
  }
}
.expenditure {
  border-bottom: 1px solid $kungalgame-red-4;
  .reason {
    border-left: 5px solid $kungalgame-red-4;
  }
  .amount {
    background-color: $kungalgame-red-2;
  }
}
</style>
