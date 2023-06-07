// upload-image.js
const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const upload = multer({
  dest: '../assets/upload/images', // 指定上传的目标文件夹
})

router.post('/img', upload.single('image'), (req, res) => {
  if (!req.file) {
    res
      .status(400)
      .json({ errno: 1, data: null, error: 'No image file provided' })
    return
  }

  // 从req.file对象中获取上传的文件信息
  const fileName = req.file.filename
  const filePath = req.file.path

  // 将上传的文件移动到指定的目标文件夹
  const targetPath = path.join(__dirname, 'images', fileName)
  fs.rename(filePath, targetPath, (err) => {
    if (err) {
      res
        .status(500)
        .json({ errno: 1, data: null, error: 'Failed to move uploaded file' })
      return
    }

    const imageUrl = `/images/${fileName}`
    const responseData = {
      errno: 0,
      data: {
        url: imageUrl,
        alt: 'Image description',
        href: 'Image link',
      },
    }

    res.json(responseData)
  })
})

module.exports = router
