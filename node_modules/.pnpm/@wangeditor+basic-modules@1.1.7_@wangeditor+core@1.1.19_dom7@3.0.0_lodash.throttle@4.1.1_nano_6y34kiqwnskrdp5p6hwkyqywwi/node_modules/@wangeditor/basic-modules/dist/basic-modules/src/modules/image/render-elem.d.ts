/**
 * @description image render elem
 * @author wangfupeng
 */
import { Element as SlateElement } from 'slate';
import { VNode } from 'snabbdom';
import { IDomEditor } from '@wangeditor/core';
declare function renderImage(elemNode: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode;
declare const renderImageConf: {
    type: string;
    renderElem: typeof renderImage;
};
export { renderImageConf };
