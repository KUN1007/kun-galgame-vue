// 获取随机数的函数
import { randomNum } from '@/utils/random'
// 获取本地图片文件，注意这里不能用 @ 作为基础路径，只能用 ..
const getAssetsFile = (name: string) => {
  return new URL(`../../assets/images/alert/${name}.png`, import.meta.url).href
}

const number = randomNum(0, 2)

let loli = ''
let name = ''

if (number === 0) {
  // 其实人家全名叫：アーデルハイト・フォン・ベルクシュトラーセ
  name = 'あーちゃん'
  loli = getAssetsFile(name)
} else if (number === 1) {
  name = 'こじかひわ'
  loli = getAssetsFile(name)
} else {
  name = '雪々'
  loli = getAssetsFile(name)
}

export default { loli, name }
