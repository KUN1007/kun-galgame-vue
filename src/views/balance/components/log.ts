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
    amount: 1007,
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
