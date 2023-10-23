// Import the settings panel store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import { saveImage, getImage } from './useLocalforage'
import { storeToRefs } from 'pinia'

// Use the settings panel store
const { showKUNGalgameBackground, showKUNGalgameCustomBackground } =
  storeToRefs(useKUNGalgameSettingsStore())

// Fetch background image data from the backend
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

// Get the image URL based on the image's name
const getBackgroundURL = async (imageName: string) => {
  // Image blob data saved locally
  const backgroundImageBlobData = await getImage(imageName)

  // If there is data, create a blob URL from the local storage
  if (backgroundImageBlobData) {
    return URL.createObjectURL(backgroundImageBlobData)
  } else {
    // If there is no local data for the image, fetch the image blob data from the backend and store it locally
    const imageBlob = await fetchGetBackground(`${imageName}`)
    await saveImage(imageBlob, imageName)

    return URL.createObjectURL(imageBlob)
  }
}

// The image names here are defined by the backend as bg1.webp (large image) and bg1-m.webp (preview image)
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
  // Get the image's blob URL
  const url = await getBackgroundURL(showKUNGalgameBackground.value)
  return url
}

// Restore the blank background
const restoreBackground = () => {
  showKUNGalgameBackground.value = 'bg0'
}

export { getBackgroundURL, getCurrentBackground, restoreBackground }
