/**
 * This file contains various modules for Quill. Large modules like markdown and emoji are not used here.
 */

// Import the editor
// import { QuillEditor } from '@vueup/vue-quill'
// Import Quill module for resizing and realigning images and iframe video
// It must be imported this way, otherwise it will throw errors after bundling
// import BlotFormatter from 'quill-blot-formatter'
// import BlotFormatter from 'quill-blot-formatter/dist/BlotFormatter'
// Import module for automatic recognition of URLs and email addresses
import MagicUrl from 'quill-magic-url'
import '@/styles/editor/editor.snow.scss'
// Import module for image compression and uploading (very useful)
import ImageCompress from 'quill-image-compress'
import Message from '../alert/Message'

// Editor modules
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

      //   /* TODO: Change this to a backend API */

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
      // Temporarily enable console debugging
      debug: false,
    },
  },
]
