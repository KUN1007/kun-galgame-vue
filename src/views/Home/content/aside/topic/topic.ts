interface topic {
  index: number
  router: string
  data: {
    title: string
    isHotTopic: boolean
    value?: number
    time?: string
  }
}

const singleTopic: topic[] = [
  {
    index: 1,
    router: '/topic',
    data: {
      title:
        '啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星',
      isHotTopic: true,
      value: 1007,
      time: '1小时前',
    },
  },
  {
    index: 2,
    router: '/topic',
    data: {
      title: '啊这可海星',
      isHotTopic: true,
      value: 1007,
      time: '10小时前',
    },
  },
  {
    index: 3,
    router: '/topic',
    data: {
      title: '啊这可海星',
      isHotTopic: true,
      value: 1007,
      time: '1天前',
    },
  },
  {
    index: 4,
    router: '/topic',
    data: {
      title: '啊这可海星',
      isHotTopic: true,
      value: 1007,
      time: '1小时前',
    },
  },
  {
    index: 5,
    router: '/topic',
    data: {
      title: '啊这可海星',
      isHotTopic: true,
      value: 1007,
      time: '1小时前',
    },
  },
  {
    index: 6,
    router: '/topic',
    data: {
      title: '啊这可海星',
      isHotTopic: true,
      value: 1007,
      time: '1小时前',
    },
  },
  {
    index: 7,
    router: '/topic',
    data: {
      title: '啊这可海星',
      isHotTopic: true,
      value: 1007,
      time: '1小时前',
    },
  },
  {
    index: 8,
    router: '/topic',
    data: {
      title: '啊这可海星',
      isHotTopic: true,
      value: 1007,
      time: '1小时前',
    },
  },
  {
    index: 9,
    router: '/topic',
    data: {
      title: '啊这可海星',
      isHotTopic: true,
      value: 1007,
      time: '1小时前',
    },
  },
  {
    index: 10,
    router: '/topic',
    data: {
      title: '啊这可海星',
      isHotTopic: true,
      value: 1007,
      time: '1小时前',
    },
  },
]

export default singleTopic
