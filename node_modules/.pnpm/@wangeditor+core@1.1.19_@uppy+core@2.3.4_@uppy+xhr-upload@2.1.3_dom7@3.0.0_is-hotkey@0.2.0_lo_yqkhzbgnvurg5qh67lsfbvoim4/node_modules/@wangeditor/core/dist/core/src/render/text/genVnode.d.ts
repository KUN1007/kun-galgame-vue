/**
 * @description 生成 text vnode
 * @author wangfupeng
 */
import { Text as SlateText, Ancestor } from 'slate';
import { VNode } from 'snabbdom';
import { IDomEditor } from '../../editor/interface';
declare function genTextVnode(leafNode: SlateText, isLast: boolean | undefined, textNode: SlateText, parent: Ancestor, editor: IDomEditor): VNode;
export default genTextVnode;
