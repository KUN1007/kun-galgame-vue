// topic.js

const express = require('express')
const router = express.Router()

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

// 获取指定帖子的路由
router.get('/:id', (req, res) => {
  const topicId = parseInt(req.params.id)
  const topic = topics.find((topic) => topic.topicId === topicId)

  if (topic) {
    res.json(topic)
  } else {
    res.status(404).json({ error: 'Topic Not Found!' })
  }
})

// 获取帖子回复的路由
router.get('/reply/:id', (req, res) => {
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
router.get('/reply/comment/:id', (req, res) => {
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

module.exports = router
