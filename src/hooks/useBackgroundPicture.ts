// Import the settings panel store
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import { saveImage, getImage } from './useLocalforage'

// Fetch background image data from the backend
const fetchGetBackground = async (imageName: string): Promise<Blob> => {
  const baseUrl = import.meta.env.VITE_API_UPLOADS_URL
  const url = `/image/bg/${imageName}.webp`
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

export { getBackgroundURL }
