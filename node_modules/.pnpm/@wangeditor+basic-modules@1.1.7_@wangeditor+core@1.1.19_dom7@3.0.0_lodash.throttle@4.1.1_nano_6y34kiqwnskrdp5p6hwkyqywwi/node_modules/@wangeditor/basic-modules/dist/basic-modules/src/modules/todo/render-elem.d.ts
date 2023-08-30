/**
 * @description render todo
 * @author wangfupeng
 */
import { Element as SlateElement } from 'slate';
import { VNode } from 'snabbdom';
import { IDomEditor } from '@wangeditor/core';
/**
 * render todo elem
 * @param elemNode slate elem
 * @param children children
 * @param editor editor
 * @returns vnode
 */
declare function renderTodo(elemNode: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode;
declare const renderTodoConf: {
    type: string;
    renderElem: typeof renderTodo;
};
export { renderTodoConf };
