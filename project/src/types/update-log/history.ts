// 注意，这只是一个临时的数据文件，后来会被替换为后端接口
interface describe {
  index: number
  text: string
}

interface history {
  index: number
  describe: describe[]
  time: string
  version: string
}

export const historyVersion: history[] = [
  {
    index: 1,
    describe: [
      {
        index: 1,
        text: '1. 添加新页面 ranking page',
      },
      {
        index: 2,
        text: '2. 修复关于我们页面缩放 BUG',
      },
      {
        index: 3,
        text: '3. 啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星',
      },
    ],
    time: '2019/10/7',
    version: '0.0.1',
  },
  {
    index: 2,
    describe: [
      {
        index: 1,
        text: '1. 添加新页面 ranking page',
      },
      {
        index: 2,
        text: '2. 修复关于我们页面缩放 BUG',
      },
      {
        index: 3,
        text: '3. 页面颜色调整',
      },
    ],
    time: '2019/10/7',
    version: '0.0.1',
  },
  {
    index: 3,
    describe: [
      {
        index: 1,
        text: '1. 添加新页面 ranking page',
      },
      {
        index: 2,
        text: '2. 修复关于我们页面缩放 BUG',
      },
      {
        index: 3,
        text: '3. 页面颜色调整',
      },
    ],
    time: '2019/10/7',
    version: '0.0.1',
  },
  {
    index: 4,
    describe: [
      {
        index: 1,
        text: '1. 添加新页面 ranking page',
      },
      {
        index: 2,
        text: '2. 修复关于我们页面缩放 BUG',
      },
      {
        index: 3,
        text: '3. 页面颜色调整',
      },
    ],
    time: '2019/10/7',
    version: '0.0.1',
  },
  {
    index: 5,
    describe: [
      {
        index: 1,
        text: '1. 添加新页面 ranking page',
      },
      {
        index: 2,
        text: '2. 修复关于我们页面缩放 BUG',
      },
      {
        index: 3,
        text: '3. 页面颜色调整',
      },
    ],
    time: '2019/10/7',
    version: '0.0.1',
  },
]
