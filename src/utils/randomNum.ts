// 生成指定范围内的随机数

export default (lowerValue: number, upperValue: number) => {
  return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue)
}
