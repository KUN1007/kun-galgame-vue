// user.js

const express = require('express')
const router = express.Router()

// 模拟用户数据
const users = [
  {
    uid: 1,
    name: 'KUN',
    email: 'kun@kungal.com',
    token: 'KUNGalgame',
    avatar: 'http://127.0.0.1:10007/assets/images/KUN.jpg',
    roles: 'admin',
    status: '0',
    time: Date.now(),
    moemoepoint: 1007,
    bio: '鲲最可爱！',
    upvotes: 1007,
    like: 50,
    comment: [1, 2, 3, 4],
    reply: [1, 2, 3],
    topic: [1, 2, 3],
    like_topic: [1, 2, 3],
    upvotes_topic: [2, 3],
    reply_topic: [2, 3, 4],
  },
  {
    uid: 2,
    name: 'YUYU',
    email: 'yuyu@kungal.com',
    token: 'KUNGalgame',
    avatar: 'http://127.0.0.1:10007/assets/images/topic.jpg',
    roles: 'kungalgamer',
    status: '0',
    time: Date.now(),
    moemoepoint: 10,
    bio: '鲲最可爱！',
    upvotes: 1007,
    like: 50,
    comment: [1, 2, 3, 4],
    reply: [1, 2, 3],
    topic: [1, 2, 3],
    like_topic: [1, 2, 3],
    upvotes_topic: [2, 3],
    reply_topic: [2, 3, 4],
  },
  {
    uid: 3,
    name: 'azkhx',
    email: 'azkhx@kungal.com',
    token: 'KUNGalgame',
    avatar: '',
    roles: 'kungalgamer',
    status: '1',
    time: Date.now(),
    moemoepoint: 17,
    bio: '鲲最可爱！',
    upvotes: 1007,
    like: 50,
    comment: [1, 2, 3, 4],
    reply: [1, 2, 3],
    topic: [1, 2, 3],
    like_topic: [1, 2, 3],
    upvotes_topic: [2, 3],
    reply_topic: [2, 3, 4],
  },
]

// 定义用户JSON数据的路由
router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id)
  const user = users.find((user) => user.registrationSequence === userId)

  if (!user) {
    res.status(404).json({ error: 'User not found' })
  } else {
    res.json(user)
  }
})

module.exports = router
