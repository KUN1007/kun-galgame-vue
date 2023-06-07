const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

// 使用cors中间件来允许跨域请求
app.use(cors())
app.use(bodyParser.json())

const port = 10007 // 端口号

// 用户路由
const userRoutes = require('./routes/user')

// 帖子路由
const topicRoutes = require('./routes/topic')

// 登录路由
const loginRoutes = require('./routes/login')

// 注册路由
const registerRoutes = require('./routes/register')

// 上传图片路由
const uploadImagesRoutes = require('./routes/upload-image')

app.use('/kungalgamer', userRoutes)
app.use('/topic', topicRoutes)
app.use('/login', loginRoutes)
app.use('/register', registerRoutes)
app.use('/upload', uploadImagesRoutes)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ success: false, error: 'Internal Server Error' })
})

app.listen(port, '127.0.0.1', () => {
  console.log(`Server is running on http://127.0.0.1:${port}`)
})
