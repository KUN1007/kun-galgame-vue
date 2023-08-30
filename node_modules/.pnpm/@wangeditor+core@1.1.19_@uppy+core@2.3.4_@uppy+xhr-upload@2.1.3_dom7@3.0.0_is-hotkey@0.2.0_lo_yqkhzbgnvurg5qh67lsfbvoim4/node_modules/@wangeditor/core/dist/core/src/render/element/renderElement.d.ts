/**
 * @description render element node
 * @author wangfupeng
 */
import { Element as SlateElement } from 'slate';
import { VNode } from 'snabbdom';
import { IDomEditor } from '../../editor/interface';
declare function renderElement(elemNode: SlateElement, editor: IDomEditor): VNode;
export default renderElement;
