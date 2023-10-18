<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import Form from './components/Form.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'

import { useKUNGalgameBalanceStore } from '@/store/modules/balance'
import type { BalanceIncome, BalanceExpenditure, PLStatement } from '@/api'

const incomeData = ref<BalanceIncome[]>([])
const expenditureData = ref<BalanceExpenditure[]>([])
const statement: PLStatement = reactive({
  totalIncome: 0,
  totalExpenditure: 0,
  profitLoss: 0,
})

const getIncomeData = async () => {
  const response = await useKUNGalgameBalanceStore().getIncome()
  return response.data
}

const getExpenditureData = async () => {
  const response = await useKUNGalgameBalanceStore().getExpenditure()
  return response.data
}

const getPLStatementData = async () => {
  const response = await useKUNGalgameBalanceStore().getPLStatement()
  return response.data
}

onMounted(async () => {
  incomeData.value = await getIncomeData()
  expenditureData.value = await getExpenditureData()

  const PLData = await getPLStatementData()
  statement.totalIncome = PLData.totalIncome
  statement.totalExpenditure = PLData.totalExpenditure
  statement.profitLoss = PLData.profitLoss
})
</script>

<template>
  <div class="root">
    <!-- 文章部分 -->
    <div class="article">
      <!-- 页面标题 -->
      <div class="title">{{ $tm('balance.pl') }}</div>
      <!-- 内容区 -->
      <div class="content">
        <!-- 是收入表的话就渲染为蓝色 -->
        <Form
          :isIncome="true"
          :income-data="incomeData"
          :statement="statement"
        />
        <Form
          :isIncome="false"
          :expenditure-data="expenditureData"
          :statement="statement"
        />
      </div>
      <!-- 经济状态 -->
      <div class="sum">
        <!-- 亏损和盈余的样式不一样 -->
        <div
          class="amount-status-deficit"
          :class="statement.profitLoss >= 0 ? 'amount-status-surplus' : ''"
        >
          <div>
            <!-- i18n -->
            {{ $tm('balance.status') }}:
            <span>{{
              statement.profitLoss >= 0
                ? $tm('balance.surplusStatus')
                : $tm('balance.deficitStatus')
            }}</span>
          </div>
          <div>
            <!-- i18n -->
            {{
              statement.profitLoss >= 0
                ? $tm('balance.surplusAmount')
                : $tm('balance.deficitAmount')
            }}: {{ statement.profitLoss }} USDT
          </div>
        </div>
      </div>
      <!-- 版权 -->
      <KUNGalgameFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 100vh;
  display: flex;
  flex-direction: column;
  min-height: 800px;
  color: var(--kungalgame-font-color-3);
}
/* 文章部分 */
.article {
  min-height: 500px;
  /* 居中 */
  margin: auto;
  background-color: var(--kungalgame-trans-white-5);
  /* 模糊背景 */
  backdrop-filter: blur(5px);
  /* 边距 */
  padding: 10px;
  border-radius: 7px;
  border: 1px solid var(--kungalgame-blue-1);
  /* 阴影 */
  box-shadow: var(--shadow);
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
  height: 60px;
  /* 字体大小 */
  font-size: 30px;
  flex-shrink: 0;
  /* 居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 内容区 */
.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
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
/* 经济状态亏损 */
.amount-status-deficit {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    padding: 5px;
    background-color: var(--kungalgame-red-4);
    color: var(--kungalgame-white);
  }
  & > div:last-child {
    background-color: var(--kungalgame-red-2);
  }
}
/* 经济状态盈余 */
.amount-status-surplus {
  span {
    background-color: var(--kungalgame-green-4);
  }
  & > div:last-child {
    padding: 5px;
    color: var(--kungalgame-white);
    background-color: var(--kungalgame-green-4);
  }
}

@media (max-width: 1000px) {
  .root {
    width: 80%;
    height: 100%;
    margin: auto;
  }

  .content {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    div {
      &:nth-child(1) {
        margin-bottom: 20px;
      }
    }
  }

  .title {
    font-size: 20px;
  }
  .amount-status-deficit {
    flex-direction: column;
    div {
      &:nth-child(2) {
        margin-top: 20px;
      }
    }
  }
}

@media (max-width: 700px) {
  .root {
    width: 95%;
  }
  .content {
    width: 100%;
  }
}
</style>
