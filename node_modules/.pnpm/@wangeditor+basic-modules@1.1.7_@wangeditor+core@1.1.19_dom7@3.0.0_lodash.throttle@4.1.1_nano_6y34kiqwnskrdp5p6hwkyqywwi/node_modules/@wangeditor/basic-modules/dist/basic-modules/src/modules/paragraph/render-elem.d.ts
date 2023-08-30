/**
 * @description render paragraph elem
 * @author wangfupeng
 */
import { Element as SlateElement } from 'slate';
import { VNode } from 'snabbdom';
import { IDomEditor } from '@wangeditor/core';
/**
 * render paragraph elem
 * @param elemNode slate elem
 * @param children children
 * @param editor editor
 * @returns vnode
 */
declare function renderParagraph(elemNode: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode;
export declare const renderParagraphConf: {
    type: string;
    renderElem: typeof renderParagraph;
};
export {};
