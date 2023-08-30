/**
 * @description render header
 * @author wangfupeng
 */
import { Element as SlateElement } from 'slate';
import { VNode } from 'snabbdom';
import { IDomEditor } from '@wangeditor/core';
declare const renderHeader1Conf: {
    type: string;
    renderElem: (elemNode: SlateElement, children: VNode[] | null, editor: IDomEditor) => VNode;
};
declare const renderHeader2Conf: {
    type: string;
    renderElem: (elemNode: SlateElement, children: VNode[] | null, editor: IDomEditor) => VNode;
};
declare const renderHeader3Conf: {
    type: string;
    renderElem: (elemNode: SlateElement, children: VNode[] | null, editor: IDomEditor) => VNode;
};
declare const renderHeader4Conf: {
    type: string;
    renderElem: (elemNode: SlateElement, children: VNode[] | null, editor: IDomEditor) => VNode;
};
declare const renderHeader5Conf: {
    type: string;
    renderElem: (elemNode: SlateElement, children: VNode[] | null, editor: IDomEditor) => VNode;
};
export { renderHeader1Conf, renderHeader2Conf, renderHeader3Conf, renderHeader4Conf, renderHeader5Conf, };
