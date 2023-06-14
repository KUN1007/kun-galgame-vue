// register.js

const express = require('express')
const router = express.Router()

// 注册
router.post('/', (req, res) => {
  // 获取请求 body 内容
  const { username, email, password, verificationCode } = req.body

  // 注册逻辑
  if (username && email && password && verificationCode) {
    // 注册成功
    res.json({ success: true })
  } else {
    // 注册失败
    res
      .status(400)
      .json({ success: false, error: 'Incomplete registration information' })
  }
})

module.exports = router
