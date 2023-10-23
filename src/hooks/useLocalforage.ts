import localforage from 'localforage'

// Save image
const saveImage = async (imageData: Blob, imageName: string): Promise<void> => {
  await localforage.setItem(imageName, imageData)
}

// Get image
const getImage = async (imageName: string): Promise<Blob | null> => {
  return await localforage.getItem(imageName)
}

// Delete image
const deleteImage = async (imageName: string): Promise<void> => {
  await localforage.removeItem(imageName)
}

export { saveImage, getImage, deleteImage }
