const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

// 使用cors中间件来允许跨域请求
app.use(cors())
app.use(bodyParser.json())

const port = 1007 // 端口号

// Login endpoint
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

// Register endpoint
app.post('/api/register', (req, res) => {
  // Retrieve the username, email, password, and verification code from the request body
  const { username, email, password, verificationCode } = req.body

  // Perform the registration logic here
  // Replace this with your actual registration logic
  if (username && email && password && verificationCode) {
    // Registration successful
    res.json({ success: true })
  } else {
    // Registration failed
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
