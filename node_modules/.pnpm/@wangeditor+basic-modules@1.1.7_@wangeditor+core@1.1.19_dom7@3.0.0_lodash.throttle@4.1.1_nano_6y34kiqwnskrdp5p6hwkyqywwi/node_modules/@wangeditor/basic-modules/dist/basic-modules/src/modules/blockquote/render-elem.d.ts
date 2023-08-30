/**
 * @description render elem
 * @author wangfupeng
 */
import { Element as SlateElement } from 'slate';
import { VNode } from 'snabbdom';
import { IDomEditor } from '@wangeditor/core';
/**
 * render block quote elem
 * @param elemNode slate elem
 * @param children children
 * @param editor editor
 * @returns vnode
 */
declare function renderBlockQuote(elemNode: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode;
export declare const renderBlockQuoteConf: {
    type: string;
    renderElem: typeof renderBlockQuote;
};
export {};
