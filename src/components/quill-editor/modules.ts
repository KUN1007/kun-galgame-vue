// 引入 quill module: for resizing and realigning images and iframe video
import BlotFormatter from 'quill-blot-formatter'
// 引入 module: 上传图片
import ImageUploader from 'quill-image-uploader'
// 引入 module: URL、邮箱 自动识别
import MagicUrl from 'quill-magic-url'
// 引入 module: mention
import Mention from 'quill-mention'
import '@/styles/editor/editor.snow.scss'

// 定义提及源数据的接口
interface MentionItem {
  id: number
  value: string
}

// 编辑器 modules
export const modules = [
  // BlotFormatter
  {
    name: 'blotFormatter',
    module: BlotFormatter,
    // see: https://github.com/Fandom-OSS/quill-blot-formatter/blob/master/src/Options.js
    options: {
      overlay: {
        style: {
          border: '2px solid var(--kungalgame-blue-3)',
        },
      },
    },
  },
  // ImageUploader
  {
    name: 'imageUploader',
    module: ImageUploader,
    options: {
      upload: (file: File) => {
        return new Promise((resolve, reject) => {
          const formData = new FormData()
          formData.append('image', file)
          // 在这里发送请求
        })
      },
    },
  },
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
  // Mention，TODO: 实现点击 mention 就跳转到对应的用户或话题主页
  {
    name: 'mention',
    module: Mention,
    options: {
      // 允许的输入搜索字符
      // allowedChars: /^[A-Za-z\s]*$/,
      // 触发 mention 操作的关键词
      mentionDenotationChars: ['@', '#'],
      /**
       * @param {string} searchTerm - 用户输入的搜索关键词
       * @param {(items: MentionItem[]) => void} renderList - 渲染列表回调函数，需传入从后端获取的搜索结果数组
       * @param {string} mentionChar - 触发 mention 操作的关键词
       */
      source: async function (
        searchTerm: string,
        renderList: (items: MentionItem[]) => void,
        mentionChar: string
      ) {
        // 根据 mentionChar 的不同值执行不同的搜索逻辑
        if (mentionChar === '@') {
          // 执行对用户的搜索
          const matchedUsers: MentionItem[] = await searchUsers(searchTerm)
          renderList(matchedUsers)
        } else if (mentionChar === '#') {
          // 执行对话题的搜索
          const matchedTopics: MentionItem[] = await searchTopics(searchTerm)
          renderList(matchedTopics)
        }
      },
    },
  },
]

// 模拟搜索用户的函数 TODO:
async function searchUsers(searchTerm: string): Promise<MentionItem[]> {
  // 实际搜索逻辑
  // 返回匹配的用户列表
  return [
    { id: 1, value: 'kun' },
    { id: 2, value: 'yuyu' },
    { id: 3, value: 'kun' },
    { id: 4, value: 'yuyu' },
    { id: 5, value: 'kun' },
    { id: 6, value: 'yuyu' },
    { id: 7, value: 'kun' },
    { id: 8, value: 'yuyu' },
    { id: 9, value: 'kun' },
    { id: 10, value: 'yuyu' },
    { id: 11, value: 'kun' },
    { id: 12, value: 'yuyu' },
    { id: 13, value: 'kun' },
    { id: 14, value: 'yuyu' },
    { id: 15, value: 'kun' },
    { id: 16, value: 'yuyu' },
  ]
}

// 模拟搜索话题的函数 TODO:
async function searchTopics(searchTerm: string): Promise<MentionItem[]> {
  // 实际搜索逻辑
  // 返回匹配的话题列表
  return [
    {
      id: 1,
      value: '啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星',
    },
    { id: 2, value: '鲲最可爱' },
  ]
}