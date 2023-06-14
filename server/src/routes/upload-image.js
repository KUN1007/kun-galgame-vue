const os = require('os')
const fs = require('fs')
const path = require('path')
const formidable = require('formidable')
const { objForEach } = require('../util')

const { PROTOCOL, PORT, IP } = {
  PROTOCOL: 'http',
  PORT: '10007',
  IP: '127.0.0.1',
}

const FILE_FOLDER = 'upload-files'
const isWindows = os.type().toLowerCase().indexOf('windows') >= 0
const TMP_FOLDER = 'upload-files-tmp'

const express = require('express')
const router = express.Router()

/**
 * 获取随机数
 */
function getRandom() {
  return Math.random().toString(36).slice(-3)
}

/**
 * 给文件名加后缀，如 a.png 转换为 a-123123.png
 * @param {string} fileName 文件名
 */
function genRandomFileName(fileName = '') {
  // 如 fileName === 'a.123.png'
  const r = getRandom()
  if (!fileName) return r

  const length = fileName.length // 9
  const pointLastIndexOf = fileName.lastIndexOf('.') // 5
  if (pointLastIndexOf < 0) return `${fileName}-${r}`

  const fileNameWithOutExt = fileName.slice(0, pointLastIndexOf) // "a.123"
  const ext = fileName.slice(pointLastIndexOf + 1, length) // "png"
  return `${fileNameWithOutExt}-${r}.${ext}`
}

/**
 * 保存上传的文件
 * @param {Object} req request
 * @param {number} time time 用于测试超时
 */
function saveFiles(req, time = 0) {
  return new Promise((resolve, reject) => {
    const imgLinks = []
    const form = formidable({ multiples: true })

    // windows 系统，处理 rename 报错
    if (isWindows) {
      const tmpPath = path.resolve(__dirname, '..', '..', TMP_FOLDER) // 在根目录下
      if (!fs.existsSync(tmpPath)) {
        fs.mkdirSync(tmpPath)
      }
      form.uploadDir = TMP_FOLDER
    }

    form.parse(req, function (err, fields, files) {
      if (err) {
        reject('formidable, form.parse err', err.stack)
      }
      // 存储图片的文件夹
      const storePath = path.resolve(__dirname, '..', '..', FILE_FOLDER)
      if (!fs.existsSync(storePath)) {
        fs.mkdirSync(storePath)
      }

      console.log('fields......', fields)

      // 遍历所有上传来的图片
      objForEach(files, (name, file) => {
        console.log(file)

        // 图片临时位置
        const tempFilePath = file.filepath
        // 图片名称和路径
        const fileName = genRandomFileName(file.originalFilename || name) // 为文件名增加一个随机数，防止同名文件覆盖

        const fullFileName = path.join(storePath, fileName)

        // 将临时文件保存为正式文件
        fs.renameSync(tempFilePath, fullFileName)
        // 存储链接
        const url = `${PROTOCOL}://${IP}:${PORT}/${FILE_FOLDER}/${fileName}`
        imgLinks.push({ url, alt: fileName, href: url })
      })
      console.log('imgLinks...', imgLinks)

      // 返回结果
      let data
      if (imgLinks.length === 1) {
        data = imgLinks[0]
      } else {
        data = imgLinks
      }

      setTimeout(() => {
        resolve({
          errno: 0,
          data: imgLinks,
        })
      }, time)
    })
  })
}

// 上传图片
router.post('/img', (req, res) => {
  saveFiles(req)
    .then((result) => {
      res.json(result)
    })
    .catch((error) => {
      console.error('Error:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    })
})

module.exports = router
