/**
 * @description render elem
 * @author wangfupeng
 */
import { Element as SlateElement } from 'slate';
import { VNode } from 'snabbdom';
import { IDomEditor } from '@wangeditor/core';
declare function renderPre(elemNode: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode;
declare function renderCode(elemNode: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode;
export declare const renderPreConf: {
    type: string;
    renderElem: typeof renderPre;
};
export declare const renderCodeConf: {
    type: string;
    renderElem: typeof renderCode;
};
export {};
