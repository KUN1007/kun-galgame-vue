/**
 * @description render list elem
 * @author wangfupeng
 */
import { Element as SlateElement } from 'slate';
import { VNode } from 'snabbdom';
import { IDomEditor } from '@wangeditor/core';
declare function renderListElem(elemNode: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode;
declare const renderListItemConf: {
    type: string;
    renderElem: typeof renderListElem;
};
export default renderListItemConf;
