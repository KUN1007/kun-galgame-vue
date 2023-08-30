/**
 * @description render text node
 * @author wangfupeng
 */
import { Text as SlateText, Ancestor } from 'slate';
import { VNode } from 'snabbdom';
import { IDomEditor } from '../../editor/interface';
declare function renderText(textNode: SlateText, parent: Ancestor, editor: IDomEditor): VNode;
export default renderText;
