// api 请求格式
import { EditCreateTopicRequestData } from '@/api'

// 全局消息组件（顶部）
import message from '@/components/alert/Message'

// 发布时检测用户输入是否合法
export const checkTopicPublish = (
  textCount: number,
  topicData: EditCreateTopicRequestData
) => {
  if (!topicData.title.trim()) {
    // 标题为空的话，警告
    message('Title cannot be empty!', '标题不可为空！', 'warn')
    return false
  } else if (!textCount) {
    if (textCount > 100007) {
      message('Content max length is 100007!', '内容最大长度为100007！', 'warn')
    }
    // 内容为空的话，警告
    message('Content cannot be empty!', '内容不可为空！', 'warn')
    return false
  } else if (!topicData.tags.length) {
    message('Please use at least one tag!', '请至少使用一个标签！', 'warn')
  } else if (!topicData.category.length) {
    message(
      'Please select at least one category!',
      '请至少选择一个分类！',
      'warn'
    )
  } else {
    return true
  }
}
