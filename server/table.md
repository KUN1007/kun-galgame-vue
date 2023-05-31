

topic table

|     Column Name     | Data Type |            Description             |
| :-----------------: | :-------: | :--------------------------------: |
|      topic_id       |    INT    |            帖子ID（P）             |
|     topic_title     |  VARCHAR  |              帖子标题              |
|  topic_floor_count  |    INT    |             帖子楼层数             |
|    topic_content    |   TEXT    |              帖子内容              |
| topic_publish_time  | TIMESTAMP |            帖子发布时间            |
|  topic_popularity   |    INT    |             帖子热度值             |
|     topic_tags      | JSON/TEXT | 帖子标签（以 JSON 或文本形式存储） |
|    topic_upvotes    |    INT    |             帖子被推数             |
|     topic_views     |    INT    |             帖子浏览数             |
|     topic_likes     |    INT    |             帖子点赞数             |
|   topic_dislikes    |    INT    |             帖子被踩数             |
|    topic_status     |  VARCHAR  |   帖子状态（正常、被推、封禁等）   |
|   topic_is_edited   |  BOOLEAN  |         帖子是否被重新编辑         |
|  topic_edited_time  | TIMESTAMP |        帖子重新编辑的时间戳        |
| topic_author_avatar |  VARCHAR  |          发布人的头像 URL          |
|  topic_author_name  |  VARCHAR  |            发布人的名字            |
| topic_author_points |    INT    |           发布人的萌萌点           |
|   topic_partition   |  VARCHAR  |             帖子的分区             |





reply table

|  Column Name   | Data Type |             Description              |
| :------------: | :-------: | :----------------------------------: |
|    reply_id    |    INT    |             回复ID（P）              |
|    post_id     |    INT    |           回复所属的帖子ID           |
| replier_avatar |  VARCHAR  |           回复人的头像 URL           |
|  replier_name  |  VARCHAR  |             回复人的名字             |
| replier_points |    INT    |            回复人的萌萌点            |
|   replied_to   |  VARCHAR  |            被回复的人名字            |
|   is_edited    |  BOOLEAN  |          回复是否被重新编辑          |
|  edited_time   | TIMESTAMP |         回复重新编辑的时间戳         |
|   reply_time   | TIMESTAMP |              回复时间戳              |
| reply_content  |   TEXT    |               回复内容               |
| reply_upvotes  |    INT    |              回复被推数              |
|  reply_likes   |    INT    |              回复点赞数              |
| reply_dislikes |    INT    |              回复被踩数              |
|  comment_data  | JSON/TEXT | 回复的评论（以 JSON 或文本形式存储） |
|  reply_count   |    INT    |            单个回复的数量            |