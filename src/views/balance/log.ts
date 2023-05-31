// 注意，这只是一个临时的数据文件，后来会被替换为后端接口

interface FS {
  index: number
  // 是否为收入
  income: boolean
  reason: string
  date: string
  amount: number
}

export const FSLog: FS[] = [
  {
    index: 1,
    income: false,
    reason:
      '啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星',
    date: '2019/10/07',
    amount: 1007,
  },
  {
    index: 2,
    income: true,
    reason: '啊这可海星',
    date: '2019/10/07',
    amount: 107,
  },
  {
    index: 3,
    income: false,
    reason: '啊这可海星',
    date: '2019/10/07',
    amount: 1007,
  },
  {
    index: 4,
    income: false,
    reason: '啊这可海星',
    date: '2019/10/07',
    amount: 1007,
  },
  {
    index: 5,
    income: false,
    reason: '啊这可海星',
    date: '2019/10/07',
    amount: 1007,
  },
  {
    index: 6,
    income: false,
    reason: '啊这可海星',
    date: '2019/10/07',
    amount: 1007,
  },
  {
    index: 7,
    income: false,
    reason: '啊这可海星',
    date: '2019/10/07',
    amount: 1007,
  },
]

// 计算盈亏
export const calculateTotalAmount = (): number => {
  return FSLog.reduce((total, item) => {
    if (item.income) {
      return total + item.amount
    } else {
      return total - item.amount
    }
  }, 0)
}

// 计算总收入
export const calculateTotalIncome = (): number => {
  const filteredData = FSLog.filter((item) => item.income)
  return filteredData.reduce((total, item) => total + item.amount, 0)
}

// 计算总支出
export const calculateTotalExpenditure = (): number =>
  calculateTotalAmount() - calculateTotalIncome()
