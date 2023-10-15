import Message from '@/components/alert/Message'

const dataURItoBlob = (dataURI: string) => {
  const byteString = atob(dataURI.split(',')[1])
  const ab = new ArrayBuffer(byteString.length)
  const ia = new Uint8Array(ab)
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }
  return new Blob([ab], { type: 'image/jpeg' })
}

// 检查图片类型是否合法，允许 png 和 jpg
export const checkImageValid = (file: File) => {
  if (file.type === 'image/jpeg' || file.type === 'image/png') {
    return true
  } else {
    Message(
      'Invalid file type. Please select a JPEG or PNG image.',
      '非法的文件类型，请选择 JPG 或 PNG 图片！',
      'warn'
    )
    return false
  }
}

// 转换压缩图片
export const resizeImage = (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.src = URL.createObjectURL(file)
    image.onload = () => {
      // 这里要求图片最大长宽均为 177px
      const maxWidth = 177
      const maxHeight = 177
      let newWidth = image.width
      let newHeight = image.height

      if (image.width > maxWidth || image.height > maxHeight) {
        const aspectRatio = image.width / image.height
        if (aspectRatio > 1) {
          newWidth = maxWidth
          newHeight = newWidth / aspectRatio
        } else {
          newHeight = maxHeight
          newWidth = newHeight * aspectRatio
        }
      }

      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = newWidth
      canvas.height = newHeight

      ctx?.drawImage(image, 0, 0, newWidth, newHeight)
      const resizedFile = dataURItoBlob(canvas.toDataURL('image/webp', 0.77))

      if (resizedFile.size > 1007 * 1024) {
        Message(
          'Image is too large. Please select an image smaller than 1007KB!',
          '文件过大, 请选择小于 1007KB 的文件! ',
          'warn'
        )
        reject(
          'Image is too large. Please select an image smaller than 1007KB!'
        )
      } else {
        resolve(resizedFile)
      }
    }
  })
}
