// user.js

const express = require('express')
const router = express.Router()

// 模拟用户数据
const users = [
  {
    registrationSequence: 1,
    username: 'KUN',
    email: 'kun@kungal.com',
    token: 'KUNGalgame',
    avatar: './assets/images/KUN.jpg',
    registrationTime: Date.now(),
    moemoepoint: 1007,
    bio: '鲲最可爱！',
    likesCount: 1007,
    commentsCount: 50,
    repliesCount: 20,
    likedTopicsCount: 5,
    repliedTopicsCount: 1007,
    pushedTopicsCount: 3,
    userTopics: {
      likedTopicIds: [1, 2, 3],
      repliedTopicIds: [4, 5],
      pushedTopicIds: [6, 7, 8],
    },
    publishedCommentsCount: 10,
    publishedCommentIds: [1, 2, 3, 4, 5],
  },
  {
    registrationSequence: 2,
    username: 'YUYU',
    email: 'yuyu@kungal.com',
    token: 'azkhx',
    avatar: './assets/images/topic.jpg',
    registrationTime: Date.now(),
    moemoePoints: 11000,
    bio: '啊这可海星',
    likesCount: 1007,
    commentsCount: 20,
    repliesCount: 10,
    likedTopicsCount: 2,
    repliedTopicsCount: 1007,
    pushedTopicsCount: 1,
    userTopics: {
      likedTopicIds: [9, 10],
      repliedTopicIds: [11],
      pushedTopicIds: [12],
    },
    publishedCommentsCount: 5,
    publishedCommentIds: [6, 7, 8, 9, 10],
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
