const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

// 使用cors中间件来允许跨域请求
app.use(cors())
app.use(bodyParser.json())

const port = 1007 // 端口号

// 登录
app.post('/api/login', (req, res) => {
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

// 注册
app.post('/api/register', (req, res) => {
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

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ success: false, error: 'Internal Server Error' })
})

// Start the server
app.listen(port, '127.0.0.1', () => {
  console.log(`Server is running on http://127.0.0.1:${port}`)
})
