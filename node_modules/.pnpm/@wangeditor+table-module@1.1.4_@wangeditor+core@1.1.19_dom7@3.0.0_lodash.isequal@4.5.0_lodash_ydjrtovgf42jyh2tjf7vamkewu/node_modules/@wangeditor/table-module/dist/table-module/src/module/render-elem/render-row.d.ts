/**
 * @description render row
 * @author wangfupeng
 */
import { Element as SlateElement } from 'slate';
import { VNode } from 'snabbdom';
import { IDomEditor } from '@wangeditor/core';
declare function renderTableRow(elemNode: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode;
export default renderTableRow;
