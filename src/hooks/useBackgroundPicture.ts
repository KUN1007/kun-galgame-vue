// 导入设置面板 store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import { saveImage, getImage } from './useLocalforage'
import { storeToRefs } from 'pinia'

// 使用设置面板的 store
const settingsStore = useKUNGalgameSettingsStore()
const { showKUNGalgameBackground, showKUNGalgameCustomBackground } =
  storeToRefs(settingsStore)

// 从后端获取背景图片数据
const fetchGetBackground = async (imageName: string): Promise<Blob> => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL
  const url = `/uploads/image/bg/${imageName}.webp`
  const fullUrl = `${baseUrl}${url}`
  const response = await fetch(fullUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${useKUNGalgameUserStore().getToken()}`,
    },
  })
  return await response.blob()
}

// 根据图片的序号获取图片链接
const getBackgroundURL = async (imageName: string) => {
  // 本地保存的图片 blob 数据
  const backgroundImageBlobData = await getImage(imageName)

  // 有数据则从本地创建 blob 链接
  if (backgroundImageBlobData) {
    return URL.createObjectURL(backgroundImageBlobData)
  } else {
    // 本地数据没有图片 blob 数据则从后端获取图片 blob 数据并存储在本地
    const imageBlob = await fetchGetBackground(`${imageName}`)
    console.log('调用 fetch get blob')

    await saveImage(imageBlob, imageName)

    return URL.createObjectURL(imageBlob)
  }
}

// 这里的图片名后端定义的是 bg1.webp（大图）, bg1-m.webp（预览图）
const getCurrentBackground = async () => {
  if (
    showKUNGalgameBackground.value === 'bg0' ||
    showKUNGalgameBackground.value === 'none'
  ) {
    return 'none'
  }
  if (showKUNGalgameBackground.value === 'bg1007') {
    return `${showKUNGalgameCustomBackground.value}`
  }
  // 获取图片的 blob url
  const url = await getBackgroundURL(showKUNGalgameBackground.value)
  return url
}

// 获取所有图片的预览图，好像。。。min 比 thumbnail 萌一点
// const getCurrentBackgroundMin = async () => {
//   let imageArray: string[] = []
//   for (let i = 0; i < 9; i++) {
//     const url = await getBackgroundURL(`bg${i}-m`)
//     imageArray.push(url)
//   }
//   return imageArray
// }

// 恢复空白背景
const restoreBackground = () => {
  showKUNGalgameBackground.value = 'bg0'
}

export { getBackgroundURL, getCurrentBackground, restoreBackground }
