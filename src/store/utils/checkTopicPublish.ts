// api 请求格式
import { EditCreateTopicRequestData, EditUpdateTopicRequestData } from '@/api'

// 全局消息组件（顶部）
import Message from '@/components/alert/Message'

// 类型守卫，确定 EditUpdateTopicRequestData 含有 tid
const isEditUpdateTopicData = (data: any): data is EditUpdateTopicRequestData =>
  typeof data.tid !== 'undefined'

// 发布时检测用户输入是否合法
export const checkTopicPublish = (
  textCount: number,
  topicData: EditCreateTopicRequestData | EditUpdateTopicRequestData
): boolean => {
  // 检查 tid
  if (isEditUpdateTopicData(topicData)) {
    // 话题 id 为零，应该。。。。不存在吧（
    if (!topicData.tid) {
      Message('Failed to resolve topic', '未能解析话题 ID', 'error')
      return false
    }
  }

  // 检查标题
  if (!topicData.title.trim()) {
    // 标题为空的话，警告
    Message('Title cannot be empty!', '标题不可为空！', 'warn')
    return false
  }

  // 检查内容字数
  if (!textCount) {
    // 内容为空的话，警告
    Message('Content cannot be empty!', '内容不可为空！', 'warn')
    return false
  }
  if (textCount > 100007) {
    Message('Content max length is 100007!', '内容最大长度为100007！', 'warn')
    return false
  }

  // 检查 tag
  if (!topicData.tags.length) {
    Message('Please use at least one tag!', '请至少使用一个标签！', 'warn')
    return false
  }

  // 检查分类
  if (!topicData.category.length) {
    Message(
      'Please select at least one category!',
      '请至少选择一个分类！',
      'warn'
    )
    return false
  }

  // 都通过则返回真
  return true
}
