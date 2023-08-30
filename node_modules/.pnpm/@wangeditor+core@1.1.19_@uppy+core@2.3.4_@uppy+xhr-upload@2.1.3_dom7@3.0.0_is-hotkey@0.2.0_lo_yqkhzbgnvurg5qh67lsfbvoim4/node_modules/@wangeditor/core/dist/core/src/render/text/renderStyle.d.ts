/**
 * @description text 样式
 * @author wangfupeng
 */
import { Text as SlateText } from 'slate';
import { VNode } from 'snabbdom';
/**
 * 给字符串增加样式
 * @param leafNode slate text leaf node
 * @param textVnode textVnode
 */
declare function addTextVnodeStyle(leafNode: SlateText, textVnode: VNode): VNode;
export default addTextVnodeStyle;
