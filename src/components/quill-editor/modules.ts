/**
 * 这个文件是 quill 的各种 module，太大的 module 比如 markdown 和 emoji 就不用了
 */

// 引入编辑器
// import { QuillEditor } from '@vueup/vue-quill'
// 引入 quill module: for resizing and realigning images and iframe video
// 这里必须这么引入，不然打包之后会报错
// import BlotFormatter from 'quill-blot-formatter'
// import BlotFormatter from 'quill-blot-formatter/dist/BlotFormatter'
// 引入 module: URL、邮箱 自动识别
import MagicUrl from 'quill-magic-url'
import '@/styles/editor/editor.snow.scss'
// 引入 module: 压缩图片、上传图片（太好用了 www）
import ImageCompress from 'quill-image-compress'
import Message from '../alert/Message'

// 编辑器 modules
export const modules = [
  // BlotFormatter
  // {
  //   name: 'blotFormatter',
  //   module: BlotFormatter,
  //   // see: https://github.com/Fandom-OSS/quill-blot-formatter/blob/master/src/Options.js
  //   options: {
  //     overlay: {
  //       style: {
  //         border: '2px solid var(--kungalgame-blue-3)',
  //       },
  //     },
  //   },
  // },
  // MagicUrl
  {
    name: 'magicUrl',
    module: MagicUrl,
    options: {
      // Regex used to check URLs during typing
      urlRegularExpression:
        /(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}(?:\/[^\s]*)?/,
      // Regex used to check URLs on paste
      globalRegularExpression: /(https?:\/\/|www\.|tel:)[\S]+/g,
      mailRegularExpression: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      globalMailRegularExpression:
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
  },
  // ImageCompress
  {
    name: 'imageCompress',
    module: ImageCompress,
    options: {
      quality: 0.77,
      maxWidth: 1007,
      maxHeight: 1007,
      imageType: 'image/webp',
      insertIntoEditor: () => {
        Message(
          'The image upload API is under development',
          '图片上传接口正在开发中',
          'warn'
        )
      },
      // insertIntoEditor: (
      //   imageBase64URL: string,
      //   imageBlob: Blob,
      //   editor: typeof QuillEditor
      // ) => {
      //   const formData = new FormData()
      //   formData.append('file', imageBlob)

      //   /* TODO: 这里要改成后端接口 */

      //   fetch('127.0.0.1:10008/upload', { method: 'POST', body: formData })
      //     .then((response) => response.text())
      //     .then((result) => {
      //       const range = editor.getSelection()
      //       editor.insertEmbed(range.index, 'image', `${result}`, 'user')
      //     })
      //     .catch((error) => {
      //       console.error(error)
      //     })
      // },
      // 临时开启一下控制台调试
      debug: false,
    },
  },
]
