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
    /* 帖子的回复数 */
    topicReplyCount: 1,
    topicCategory: ['galgame'],
    topicReplies: {
      reply: [
        // 存放了所有帖子的回复
        {
          replyId: 1,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: '鲲鲲鲲',
            moemoePoints: 107,
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
        },
        {
          replyId: 2,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: 'KUN',
            moemoePoints: 107,
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
        },
      ],
    },
    /* 两种状态, 0正常, 1 封禁 */
    topicStatus: 0,
    topicIsEdited: false,
    topicAuthor: {
      avatar: './assets/images/KUN.jpg',
      name: 'KUN',
      moemoePoints: 1007,
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
    /* 帖子的回复数 */
    topicReplyCount: 1,
    topicCategory: ['galgame', '技术交流'],
    topicReplies: {
      reply: [
        // 存放了所有帖子的回复
        {
          replyId: 1,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: '鲲鲲鲲',
            moemoePoints: 107,
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
        },
        {
          replyId: 2,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: 'KUN',
            moemoePoints: 107,
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
        },
      ],
    },
    /* 两种状态, 0正常, 1 封禁，2 被推 */
    topicStatus: 2,
    topicIsEdited: false,
    topicAuthor: {
      avatar: './assets/images/KUN.jpg',
      name: 'KUN',
      moemoePoints: 1007,
    },
  },
  {
    topicId: 3,
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
    /* 帖子的回复数 */
    topicReplyCount: 1,
    topicCategory: ['galgame', '技术交流'],
    topicReplies: {
      reply: [
        // 存放了所有帖子的回复
        {
          replyId: 1,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: '鲲鲲鲲',
            moemoePoints: 107,
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
        },
        {
          replyId: 2,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: 'KUN',
            moemoePoints: 107,
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
        },
      ],
    },
    /* 两种状态, 0正常, 1 封禁 */
    topicStatus: 0,
    topicIsEdited: false,
    topicAuthor: {
      avatar: './assets/images/KUN.jpg',
      name: 'KUN',
      moemoePoints: 1007,
    },
  },
  {
    topicId: 4,
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
    /* 帖子的回复数 */
    topicReplyCount: 1,
    topicCategory: ['galgame', '技术交流'],
    topicReplies: {
      reply: [
        // 存放了所有帖子的回复
        {
          replyId: 1,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: '鲲鲲鲲',
            moemoePoints: 107,
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
        },
        {
          replyId: 2,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: 'KUN',
            moemoePoints: 107,
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
        },
      ],
    },
    /* 两种状态, 0正常, 1 封禁 */
    topicStatus: 0,
    topicIsEdited: false,
    topicAuthor: {
      avatar: './assets/images/KUN.jpg',
      name: 'KUN',
      moemoePoints: 1007,
    },
  },
  {
    topicId: 5,
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
    /* 帖子的回复数 */
    topicReplyCount: 1,
    topicCategory: ['galgame', '技术交流'],
    topicReplies: {
      reply: [
        // 存放了所有帖子的回复
        {
          replyId: 1,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: '鲲鲲鲲',
            moemoePoints: 107,
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
        },
        {
          replyId: 2,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: 'KUN',
            moemoePoints: 107,
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
        },
      ],
    },
    /* 两种状态, 0正常, 1 封禁 */
    topicStatus: 0,
    topicIsEdited: false,
    topicAuthor: {
      avatar: './assets/images/KUN.jpg',
      name: 'KUN',
      moemoePoints: 1007,
    },
  },
  {
    topicId: 6,
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
    /* 帖子的回复数 */
    topicReplyCount: 1,
    topicCategory: ['galgame', '技术交流'],
    topicReplies: {
      reply: [
        // 存放了所有帖子的回复
        {
          replyId: 1,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: '鲲鲲鲲',
            moemoePoints: 107,
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
        },
        {
          replyId: 2,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: 'KUN',
            moemoePoints: 107,
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
        },
      ],
    },
    /* 两种状态, 0正常, 1 封禁 */
    topicStatus: 0,
    topicIsEdited: false,
    topicAuthor: {
      avatar: './assets/images/KUN.jpg',
      name: 'KUN',
      moemoePoints: 1007,
    },
  },
  {
    topicId: 7,
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
    /* 帖子的回复数 */
    topicReplyCount: 1,
    topicCategory: ['galgame', '技术交流'],
    topicReplies: {
      reply: [
        // 存放了所有帖子的回复
        {
          replyId: 1,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: '鲲鲲鲲',
            moemoePoints: 107,
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
        },
        {
          replyId: 2,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: 'KUN',
            moemoePoints: 107,
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
        },
      ],
    },
    /* 两种状态, 0正常, 1 封禁 */
    topicStatus: 0,
    topicIsEdited: false,
    topicAuthor: {
      avatar: './assets/images/KUN.jpg',
      name: 'KUN',
      moemoePoints: 1007,
    },
  },
  {
    topicId: 8,
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
    /* 帖子的回复数 */
    topicReplyCount: 1,
    topicCategory: ['galgame', '技术交流'],
    topicReplies: {
      reply: [
        // 存放了所有帖子的回复
        {
          replyId: 1,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: '鲲鲲鲲',
            moemoePoints: 107,
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
        },
        {
          replyId: 2,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: 'KUN',
            moemoePoints: 107,
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
        },
      ],
    },
    /* 两种状态, 0正常, 1 封禁 */
    topicStatus: 0,
    topicIsEdited: false,
    topicAuthor: {
      avatar: './assets/images/KUN.jpg',
      name: 'KUN',
      moemoePoints: 1007,
    },
  },
  {
    topicId: 9,
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
    /* 帖子的回复数 */
    topicReplyCount: 1,
    topicCategory: ['galgame', '技术交流'],
    topicReplies: {
      reply: [
        // 存放了所有帖子的回复
        {
          replyId: 1,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: '鲲鲲鲲',
            moemoePoints: 107,
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
        },
        {
          replyId: 2,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: 'KUN',
            moemoePoints: 107,
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
        },
      ],
    },
    /* 两种状态, 0正常, 1 封禁 */
    topicStatus: 2,
    topicIsEdited: false,
    topicAuthor: {
      avatar: './assets/images/KUN.jpg',
      name: 'KUN',
      moemoePoints: 1007,
    },
  },
  {
    topicId: 10,
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
    /* 帖子的回复数 */
    topicReplyCount: 1,
    topicCategory: ['galgame', '技术交流'],
    topicReplies: {
      reply: [
        // 存放了所有帖子的回复
        {
          replyId: 1,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: '鲲鲲鲲',
            moemoePoints: 107,
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
        },
        {
          replyId: 2,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: 'KUN',
            moemoePoints: 107,
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
        },
      ],
    },
    /* 两种状态, 0正常, 1 封禁 */
    topicStatus: 0,
    topicIsEdited: false,
    topicAuthor: {
      avatar: './assets/images/KUN.jpg',
      name: 'KUN',
      moemoePoints: 1007,
    },
  },
  {
    topicId: 11,
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
    /* 帖子的回复数 */
    topicReplyCount: 1,
    topicCategory: ['galgame', '技术交流'],
    topicReplies: {
      reply: [
        // 存放了所有帖子的回复
        {
          replyId: 1,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: '鲲鲲鲲',
            moemoePoints: 107,
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
        },
        {
          replyId: 2,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: 'KUN',
            moemoePoints: 107,
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
        },
      ],
    },
    /* 两种状态, 0正常, 1 封禁 */
    topicStatus: 0,
    topicIsEdited: false,
    topicAuthor: {
      avatar: './assets/images/KUN.jpg',
      name: 'KUN',
      moemoePoints: 1007,
    },
  },
  {
    topicId: 12,
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
    /* 帖子的回复数 */
    topicReplyCount: 1,
    topicCategory: ['galgame', '技术交流'],
    topicReplies: {
      reply: [
        // 存放了所有帖子的回复
        {
          replyId: 1,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: '鲲鲲鲲',
            moemoePoints: 107,
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
        },
        {
          replyId: 2,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: 'KUN',
            moemoePoints: 107,
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
        },
      ],
    },
    /* 两种状态, 0正常, 1 封禁 */
    topicStatus: 0,
    topicIsEdited: false,
    topicAuthor: {
      avatar: './assets/images/KUN.jpg',
      name: 'KUN',
      moemoePoints: 1007,
    },
  },
  {
    topicId: 13,
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
    /* 帖子的回复数 */
    topicReplyCount: 1,
    topicCategory: ['galgame', '技术交流'],
    topicReplies: {
      reply: [
        // 存放了所有帖子的回复
        {
          replyId: 1,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: '鲲鲲鲲',
            moemoePoints: 107,
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
        },
        {
          replyId: 2,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: 'KUN',
            moemoePoints: 107,
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
        },
      ],
    },
    /* 两种状态, 0正常, 1 封禁 */
    topicStatus: 0,
    topicIsEdited: false,
    topicAuthor: {
      avatar: './assets/images/KUN.jpg',
      name: 'KUN',
      moemoePoints: 1007,
    },
  },
  {
    topicId: 14,
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
    /* 帖子的回复数 */
    topicReplyCount: 1,
    topicCategory: ['galgame', '技术交流'],
    topicReplies: {
      reply: [
        // 存放了所有帖子的回复
        {
          replyId: 1,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: '鲲鲲鲲',
            moemoePoints: 107,
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
        },
        {
          replyId: 2,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: 'KUN',
            moemoePoints: 107,
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
        },
      ],
    },
    /* 两种状态, 0正常, 1 封禁 */
    topicStatus: 0,
    topicIsEdited: false,
    topicAuthor: {
      avatar: './assets/images/KUN.jpg',
      name: 'KUN',
      moemoePoints: 1007,
    },
  },
  {
    topicId: 15,
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
    /* 帖子的回复数 */
    topicReplyCount: 1,
    topicCategory: ['galgame', '技术交流'],
    topicReplies: {
      reply: [
        // 存放了所有帖子的回复
        {
          replyId: 1,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: '鲲鲲鲲',
            moemoePoints: 107,
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
        },
        {
          replyId: 2,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: 'KUN',
            moemoePoints: 107,
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
        },
      ],
    },
    /* 两种状态, 0正常, 1 封禁 */
    topicStatus: 0,
    topicIsEdited: false,
    topicAuthor: {
      avatar: './assets/images/KUN.jpg',
      name: 'KUN',
      moemoePoints: 1007,
    },
  },
  {
    topicId: 16,
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
    /* 帖子的回复数 */
    topicReplyCount: 1,
    topicCategory: ['galgame', '技术交流'],
    topicReplies: {
      reply: [
        // 存放了所有帖子的回复
        {
          replyId: 1,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: '鲲鲲鲲',
            moemoePoints: 107,
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
        },
        {
          replyId: 2,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: 'KUN',
            moemoePoints: 107,
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
        },
      ],
    },
    /* 两种状态, 0正常, 1 封禁 */
    topicStatus: 0,
    topicIsEdited: false,
    topicAuthor: {
      avatar: './assets/images/KUN.jpg',
      name: 'KUN',
      moemoePoints: 1007,
    },
  },
  {
    topicId: 17,
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
    /* 帖子的回复数 */
    topicReplyCount: 1,
    topicCategory: ['galgame', '技术交流'],
    topicReplies: {
      reply: [
        // 存放了所有帖子的回复
        {
          replyId: 1,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: '鲲鲲鲲',
            moemoePoints: 107,
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
        },
        {
          replyId: 2,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: 'KUN',
            moemoePoints: 107,
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
        },
      ],
    },
    /* 两种状态, 0正常, 1 封禁 */
    topicStatus: 0,
    topicIsEdited: false,
    topicAuthor: {
      avatar: './assets/images/KUN.jpg',
      name: 'KUN',
      moemoePoints: 1007,
    },
  },
  {
    topicId: 18,
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
    /* 帖子的回复数 */
    topicReplyCount: 1,
    topicCategory: ['galgame', '技术交流'],
    topicReplies: {
      reply: [
        // 存放了所有帖子的回复
        {
          replyId: 1,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: '鲲鲲鲲',
            moemoePoints: 107,
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
        },
        {
          replyId: 2,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: 'KUN',
            moemoePoints: 107,
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
        },
      ],
    },
    /* 两种状态, 0正常, 1 封禁 */
    topicStatus: 0,
    topicIsEdited: false,
    topicAuthor: {
      avatar: './assets/images/KUN.jpg',
      name: 'KUN',
      moemoePoints: 1007,
    },
  },
  {
    topicId: 19,
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
    /* 帖子的回复数 */
    topicReplyCount: 1,
    topicCategory: ['galgame', '技术交流'],
    topicReplies: {
      reply: [
        // 存放了所有帖子的回复
        {
          replyId: 1,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: '鲲鲲鲲',
            moemoePoints: 107,
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
        },
        {
          replyId: 2,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: 'KUN',
            moemoePoints: 107,
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
        },
      ],
    },
    /* 两种状态, 0正常, 1 封禁 */
    topicStatus: 0,
    topicIsEdited: false,
    topicAuthor: {
      avatar: './assets/images/KUN.jpg',
      name: 'KUN',
      moemoePoints: 1007,
    },
  },
  {
    topicId: 20,
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
    /* 帖子的回复数 */
    topicReplyCount: 1,
    topicCategory: ['galgame', '技术交流'],
    topicReplies: {
      reply: [
        // 存放了所有帖子的回复
        {
          replyId: 1,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: '鲲鲲鲲',
            moemoePoints: 107,
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
        },
        {
          replyId: 2,
          replier: {
            avatar: './assets/images/topic.jpg',
            name: 'KUN',
            moemoePoints: 107,
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
        },
      ],
    },
    /* 两种状态, 0正常, 1 封禁 */
    topicStatus: 0,
    topicIsEdited: false,
    topicAuthor: {
      avatar: './assets/images/KUN.jpg',
      name: 'KUN',
      moemoePoints: 1007,
    },
  },
]

// 发布时间排序前 17 的帖子
function getTopicsInRange(start, count) {
  const sortedTopics = topics.sort(
    (a, b) => b.topicPublishTime - a.topicPublishTime
  )

  const topicsInRange = sortedTopics
    .slice(start, start + count)
    .map(({ topicReplies, ...rest }) => rest)

  return topicsInRange
}

// 获取发布时间前 17 位的帖子路由
router.get('/topics/kun', (req, res) => {
  const start = parseInt(req.query.start) || 0
  const count = parseInt(req.query.count) || 17

  const topic = getTopicsInRange(start, count)

  res.json(topic)
})

// 获取指定帖子的路由
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const topic = topics.find((topic) => topic.topicId === id)

  if (topic) {
    const { topicReplies, ...topicData } = topic
    res.json(topicData)
  } else {
    res.status(404).json({ error: 'Topic not found' })
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
