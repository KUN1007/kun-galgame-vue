// 注意，这只是一个临时的数据文件，后来会被替换为后端接口

interface punish {
  index: number
  reason: string
  // 目前暂定处罚方式只有萌萌点的扣除
  result: number
}

export const log: punish[] = [
  {
    index: 1,
    reason: '啊这可海星',
    result: 1007,
  },
  {
    index: 2,
    reason:
      '啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星',
    result: 1007,
  },
  {
    index: 3,
    reason: '啊这可海星',
    result: 17,
  },
  {
    index: 4,
    reason: '啊这可海星',
    result: 1007,
  },
  {
    index: 5,
    reason: '啊这可海星',
    result: 1007,
  },
  {
    index: 6,
    reason: '啊这可海星',
    result: 1007,
  },
  {
    index: 7,
    reason: '啊这可海星',
    result: 1007,
  },
  {
    index: 8,
    reason: '啊这可海星',
    result: 1007,
  },
]
