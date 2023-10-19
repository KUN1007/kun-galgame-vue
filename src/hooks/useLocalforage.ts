import localforage from 'localforage'

// 保存图片
const saveImage = async (imageData: Blob, imageName: string): Promise<void> => {
  await localforage.setItem(imageName, imageData)
}
// 获取图片
const getImage = async (imageName: string): Promise<Blob | null> => {
  return await localforage.getItem(imageName)
}
// 删除图片
const deleteImage = async (imageName: string): Promise<void> => {
  await localforage.removeItem(imageName)
}

export { saveImage, getImage, deleteImage }
