/**
 * @description 添加文本相关的样式
 * @author wangfupeng
 */
import { Element as SlateElement } from 'slate';
import { VNode } from 'snabbdom';
/**
 * 渲染样式
 * @param elem slate elem node
 * @param vnode elem Vnode
 */
declare function renderStyle(elem: SlateElement, vnode: VNode): VNode;
export default renderStyle;
