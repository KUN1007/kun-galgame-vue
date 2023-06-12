/* KUNGalgame 全局看板娘数据的读取文件 */

// 读取 JSON 文件数据
import loliData from '@/assets/images/ren/ren.json'

/* 随机数 */
import { randomNum } from './random'

// 获取本地图片文件，注意这里不能用 @ 作为基础路径，只能用 ..
const getAssetsFile = (url: number) => {
  return new URL(`../assets/images/ren/${url}.png`, import.meta.url).href
}

/* 随机汗水 ？ */
// const randomSweat = randomNum(0, 1)
/* 随机眉毛 */
const randomBrow = randomNum(1, 18)

/* 随机眼睛 */
const randomEye = randomNum(19, 36)

/* 随机嘴巴 */
const randomMouth = randomNum(37, 56)

/* 随机腮红 */
const randomFace = randomNum(57, 62)

/* 随机衣服 */
const randomSkirt = randomNum(63, 72)

// 定义一个 loli 对象
const loli = {
  lass: loliData[randomSkirt],
  eye: loliData[randomEye],
  brow: loliData[randomBrow],
  mouth: loliData[randomMouth],
  face: loliData[randomFace],
}

// 身体定位
const loliBodyLeft = loli.lass.left + 'px'
const loliBodyTop = loli.lass.top + 'px'

// 眼睛定位
const loliEyeLeft = loli.eye.left + 'px'
const loliEyeTop = loli.eye.top + 'px'

// 眉毛定位
const loliBrowLeft = loli.brow.left + 'px'
const loliBrowTop = loli.brow.top + 'px'

// 嘴巴定位
const loliMouthLeft = loli.mouth.left + 'px'
const loliMouthTop = loli.mouth.top + 'px'

// 腮红定位
const loliFaceLeft = loli.face.left + 'px'
const loliFaceTop = loli.face.top + 'px'

// 身体的图片资源链接
let lass = getAssetsFile(loli.lass.layer_id)

// 眼睛的图片资源链接
let eye = getAssetsFile(loli.eye.layer_id)

// 眉毛的图片资源链接
let brow = getAssetsFile(loli.brow.layer_id)

// 嘴巴的图片资源链接
let mouth = getAssetsFile(loli.mouth.layer_id)

// 腮红的图片资源链接
let face = getAssetsFile(loli.face.layer_id)

// 导出模块
export {
  loliBodyLeft,
  loliBodyTop,
  loliEyeLeft,
  loliEyeTop,
  loliBrowLeft,
  loliBrowTop,
  loliMouthLeft,
  loliMouthTop,
  loliFaceLeft,
  loliFaceTop,
  lass,
  eye,
  brow,
  mouth,
  face,
}
