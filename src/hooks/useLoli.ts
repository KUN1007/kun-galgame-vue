import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'

// 这里比较怪异，buffer 上有个 data 属性，不知道哪里来的
interface LoliBuffer {
  data: Uint8Array
}

export interface LoliData {
  loliBodyLeft: string
  loliBodyTop: string
  loliEyeLeft: string
  loliEyeTop: string
  loliBrowLeft: string
  loliBrowTop: string
  loliMouthLeft: string
  loliMouthTop: string
  loliFaceLeft: string
  loliFaceTop: string

  body: LoliBuffer
  eye: LoliBuffer
  brow: LoliBuffer
  mouth: LoliBuffer
  face: LoliBuffer
}

export type LoliDataResponseData = KUNGalgameResponseData<LoliData>

const fetchGetLoliData = async (): Promise<
  KUNGalgameResponseData<LoliData>
> => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL
  const url = `/loli/image`
  const fullUrl = `${baseUrl}${url}`
  const response = await fetch(fullUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${useKUNGalgameUserStore().getToken()}`,
    },
  })

  return await response.json()
}

// 这里不缓存 loli 数据了，不然 indexdb 数据太多了太难看了
const createImageUrl = (imageBuffer: LoliBuffer) => {
  const uint8Array = new Uint8Array(imageBuffer.data)
  const blob = new Blob([uint8Array], { type: 'image/webp' })
  return URL.createObjectURL(blob)
}

export const useLoliDataURL = async () => {
  const loliData = (await fetchGetLoliData()).data

  const imageUrls = [
    createImageUrl(loliData.body),
    createImageUrl(loliData.eye),
    createImageUrl(loliData.brow),
    createImageUrl(loliData.mouth),
    createImageUrl(loliData.face),
  ]

  return {
    loliBodyLeft: loliData.loliBodyLeft,
    loliBodyTop: loliData.loliBodyTop,
    loliEyeLeft: loliData.loliEyeLeft,
    loliEyeTop: loliData.loliEyeTop,
    loliBrowLeft: loliData.loliBrowLeft,
    loliBrowTop: loliData.loliBrowTop,
    loliMouthLeft: loliData.loliMouthLeft,
    loliMouthTop: loliData.loliMouthTop,
    loliFaceLeft: loliData.loliFaceLeft,
    loliFaceTop: loliData.loliFaceTop,
    body: imageUrls[0],
    eye: imageUrls[1],
    brow: imageUrls[2],
    mouth: imageUrls[3],
    face: imageUrls[4],
  }
}
