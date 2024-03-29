<script setup lang="ts">
import { toRefs } from 'vue'
import Log from './Log.vue'
import type { BalanceIncome, BalanceExpenditure, PLStatement } from '@/api'

const props = defineProps<{
  isIncome: boolean
  incomeData?: BalanceIncome[]
  expenditureData?: BalanceExpenditure[]
  statement: PLStatement
}>()

const { isIncome, incomeData, expenditureData, statement } = toRefs(props)
</script>

<template>
  <div class="form" :class="$props.isIncome ? '' : 'expenditure-form'">
    <div v-if="isIncome" class="title">{{ $tm(`balance.income`) }}</div>
    <div v-if="!isIncome" class="title">{{ $tm(`balance.expenditure`) }}</div>

    <div class="container">
      <Log :is-income="isIncome" :data="incomeData" />
      <Log :is-income="isIncome" :data="expenditureData" />
    </div>

    <div v-if="isIncome" class="sum">
      {{ $tm(`balance.totalIncome`) }}:
      {{ statement.totalIncome }}
      USDT
    </div>

    <div v-if="!isIncome" class="sum">
      {{ $tm(`balance.totalExpenditure`) }}:
      {{ statement.totalExpenditure }}
      USDT
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  width: 460px;
  margin: 0 10px;
  height: 300px;
  border: 1px solid var(--kungalgame-blue-4);
  display: flex;
  flex-direction: column;

  .title {
    font-size: 20px;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    border-bottom: 1px solid var(--kungalgame-blue-4);
    background-color: var(--kungalgame-trans-blue-0);
  }

  .container {
    flex-grow: 1;
    padding: 10px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: inline;
      width: 4px;
      height: 0;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--kungalgame-blue-4);
      border-radius: 2px;
    }

    scrollbar-width: thin;
    scrollbar-color: var(--kungalgame-blue-4) var(--kungalgame-blue-1); /* Firefox 64+ */
  }

  .sum {
    height: 40px;
    font-size: 18px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid var(--kungalgame-blue-4);
    background-color: var(--kungalgame-trans-blue-0);
  }
}

.expenditure-form {
  border: 1px solid var(--kungalgame-red-4);

  .title {
    border-bottom: 1px solid var(--kungalgame-red-4);
    background-color: var(--kungalgame-trans-pink-0);
  }

  .sum {
    border-top: 1px solid var(--kungalgame-red-4);
    background-color: var(--kungalgame-trans-pink-0);
  }
}

@media (max-width: 1000px) {
  .form {
    width: 100%;
  }
}
</style>
