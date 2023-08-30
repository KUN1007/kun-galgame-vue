/**
 * @description formats entry
 * @author wangfupeng
 */
import { Element as SlateElement, Descendant } from 'slate';
import { VNode } from 'snabbdom';
import { IDomEditor } from '../editor/interface';
export declare type RenderStyleFnType = (node: Descendant, vnode: VNode) => VNode;
export declare const RENDER_STYLE_HANDLER_LIST: RenderStyleFnType[];
/**
 * 注册处理文本样式的函数
 * @param fn 处理文本样式的函数
 */
export declare function registerStyleHandler(fn: RenderStyleFnType): void;
export declare type RenderElemFnType = (elemNode: SlateElement, children: VNode[] | null, editor: IDomEditor) => VNode;
export declare const RENDER_ELEM_CONF: {
    [key: string]: RenderElemFnType;
};
export interface IRenderElemConf {
    type: string;
    renderElem: RenderElemFnType;
}
/**
 * 注册 render elem 函数
 * @param conf { type, renderElem } ，type 即 node.type
 */
export declare function registerRenderElemConf(conf: IRenderElemConf): void;
