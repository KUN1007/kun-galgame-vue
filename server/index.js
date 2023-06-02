const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

// 使用cors中间件来允许跨域请求
app.use(cors())
app.use(bodyParser.json())

const port = 10007 // 端口号

// 模拟一个 topics 数组
const topics = [
  // 帖子的数组
  {
    topicId: 1,
    topicTitle: '啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星',
    topicFloorCount: 1,
    topicContent: '<h1>啊这可海星</h1>',
    topicPublishTime: Date.now(),
    topicPopularity: 100,
    topicTags: ['啊这可海星', '啊这可海星'],
    topicUpvotes: 1007,
    topicViews: 10007,
    topicLikes: 1007,
    topicDislikes: 17,
    topicPartition: ['galgame'],
    topicReplies: {
      reply: [
        // 存放了所有帖子的回复
        {
          replyId: 1,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: '鲲鲲鲲',
            cutenessPoints: 107,
          },
          repliedTo: 'KUN',
          isEdited: true,
          editedTimestamp: Date.now(),
          replyTime: Date.now(),
          /* 此处过滤掉文本样式,评论只保留纯文本 */
          replyContent: '鲲鲲鲲',
          replyUpvotes: 1,
          replyLikes: 100,
          replyDislikes: 10,
          replyComments: [
            {
              commentId: 1,
              commenterAvatar: './assets/images/favicon.png',
              commenterName: '啊这可海星',
              commentedTo: 'azkhx',
              commentUpvotes: 5,
              commentDislikes: 1,
              commentContent: '鲲鲲鲲鲲鲲,啊这可海星',
            },
            {
              commentId: 2,
              commenterAvatar: './assets/images/favicon.png',
              commenterName: '啊这可海星',
              commentedTo: 'azkhx',
              commentUpvotes: 5,
              commentDislikes: 1,
              commentContent: '鲲鲲鲲鲲鲲,啊这可海星',
            },
            {
              commentId: 3,
              commenterAvatar: './assets/images/favicon.png',
              commenterName: '啊这可海星',
              commentedTo: 'azkhx',
              commentUpvotes: 5,
              commentDislikes: 1,
              commentContent: '鲲鲲鲲鲲鲲,啊这可海星',
            },
          ],
          replyCount: 1,
        },
        {
          replyId: 2,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: 'KUN',
            cutenessPoints: 107,
          },
          repliedTo: 'KUN',
          isEdited: true,
          editedTimestamp: Date.now(),
          replyTime: Date.now(),
          replyContent: '鲲鲲鲲',
          replyUpvotes: 1,
          replyLikes: 100,
          replyDislikes: 10,
          replyComments: [
            {
              commentId: 1,
              commenterAvatar: './assets/images/favicon.png',
              commenterName: '啊这可海星',
              commentedTo: '鲲鲲鲲',
              commentUpvotes: 5,
              commentDislikes: 1,
              /* 此处过滤掉文本样式,评论只保留纯文本 */
              commentContent: '鲲鲲鲲鲲鲲,啊这可海星',
            },
          ],
          replyCount: 1,
        },
      ],
      replyCount: 1,
    },
    topicStatus: '正常',
    topicIsEdited: false,
    topicAuthor: {
      avatar: './assets/images/KUN.jpg',
      name: 'KUN',
      cutenessPoints: 1007,
    },
  },
  {
    topicId: 2,
    topicTitle: '啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星',
    topicFloorCount: 1,
    topicContent: '<h1>啊这可海星</h1>',
    topicPublishTime: Date.now(),
    topicPopularity: 100,
    topicTags: ['啊这可海星', '啊这可海星'],
    topicUpvotes: 1007,
    topicViews: 10007,
    topicLikes: 1007,
    topicDislikes: 17,
    topicPartition: ['galgame', '技术交流'],
    topicReplies: {
      reply: [
        // 存放了所有帖子的回复
        {
          replyId: 1,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: '鲲鲲鲲',
            cutenessPoints: 107,
          },
          repliedTo: 'KUN',
          isEdited: true,
          editedTimestamp: Date.now(),
          replyTime: Date.now(),
          /* 此处过滤掉文本样式,评论只保留纯文本 */
          replyContent: '鲲鲲鲲',
          replyUpvotes: 1,
          replyLikes: 100,
          replyDislikes: 10,
          replyComments: [
            {
              commentId: 1,
              commenterAvatar: './assets/images/favicon.png',
              commenterName: '啊这可海星',
              commentedTo: 'azkhx',
              commentUpvotes: 5,
              commentDislikes: 1,
              commentContent: '鲲鲲鲲鲲鲲,啊这可海星',
            },
            {
              commentId: 2,
              commenterAvatar: './assets/images/favicon.png',
              commenterName: '啊这可海星',
              commentedTo: 'azkhx',
              commentUpvotes: 5,
              commentDislikes: 1,
              commentContent: '鲲鲲鲲鲲鲲,啊这可海星',
            },
            {
              commentId: 3,
              commenterAvatar: './assets/images/favicon.png',
              commenterName: '啊这可海星',
              commentedTo: 'azkhx',
              commentUpvotes: 5,
              commentDislikes: 1,
              commentContent: '鲲鲲鲲鲲鲲,啊这可海星',
            },
          ],
          replyCount: 1,
        },
        {
          replyId: 2,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: 'KUN',
            cutenessPoints: 107,
          },
          repliedTo: 'KUN',
          isEdited: true,
          editedTimestamp: Date.now(),
          replyTime: Date.now(),
          replyContent: '鲲鲲鲲',
          replyUpvotes: 1,
          replyLikes: 100,
          replyDislikes: 10,
          replyComments: [
            {
              commentId: 1,
              commenterAvatar: './assets/images/favicon.png',
              commenterName: '啊这可海星',
              commentedTo: '鲲鲲鲲',
              commentUpvotes: 5,
              commentDislikes: 1,
              /* 此处过滤掉文本样式,评论只保留纯文本 */
              commentContent: '鲲鲲鲲鲲鲲,啊这可海星',
            },
          ],
          replyCount: 1,
        },
      ],
      replyCount: 1,
    },
    topicStatus: '正常',
    topicIsEdited: false,
    topicAuthor: {
      avatar: './assets/images/KUN.jpg',
      name: 'KUN',
      cutenessPoints: 1007,
    },
  },
]

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
    cutePoints: 11000,
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
app.get('/kungalgamer/:id', (req, res) => {
  const userId = parseInt(req.params.id)
  const user = users.find((user) => user.registrationSequence === userId)

  if (!user) {
    res.status(404).json({ error: 'User not found' })
  } else {
    res.json(user)
  }
})

// 获取指定帖子的路由
app.get('/topic/:id', (req, res) => {
  const topicId = parseInt(req.params.id)
  const topic = topics.find((topic) => topic.topicId === topicId)

  if (topic) {
    res.json(topic)
  } else {
    res.status(404).json({ error: 'Topic Not Found!' })
  }
})

// 获取帖子回复的路由
app.get('/topic/reply/:id', (req, res) => {
  const replyId = parseInt(req.params.id)
  let targetReply

  for (const topic of topics) {
    const reply = topic.topicReplies.reply.find(
      (reply) => reply.replyId === replyId
    )
    if (reply) {
      targetReply = reply
      break
    }
  }

  if (targetReply) {
    res.json(targetReply)
  } else {
    res.status(404).json({ error: 'Reply not found!' })
  }
})

// 获取评论的路由
app.get('/topic/reply/comment/:id', (req, res) => {
  const replyId = Number(req.params.id)

  // 在帖子数据中查找指定回复
  const reply = topics
    .flatMap((topic) => topic.topicReplies.reply)
    .find((reply) => reply.replyId === replyId)

  if (!reply) {
    res.status(404).json({ error: 'Comment not found' })
  } else {
    res.json(reply.replyComments)
  }
})

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

app.listen(port, '127.0.0.1', () => {
  console.log(`Server is running on http://127.0.0.1:${port}`)
})
