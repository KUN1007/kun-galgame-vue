// login.js

const express = require('express')
const router = express.Router()

// 登录
router.post('/api/login', (req, res) => {
  const { email, password } = req.body

  // 登录逻辑
  if (email === 'kun@kungal.com' && password === '1007') {
    // 登陆成功
    const token = 'KUNGalgame'
    res.json({ success: true, token })
  } else {
    // 登陆失败
    res.status(401).json({ success: false, error: 'Invalid email or password' })
  }
})

module.exports = router
