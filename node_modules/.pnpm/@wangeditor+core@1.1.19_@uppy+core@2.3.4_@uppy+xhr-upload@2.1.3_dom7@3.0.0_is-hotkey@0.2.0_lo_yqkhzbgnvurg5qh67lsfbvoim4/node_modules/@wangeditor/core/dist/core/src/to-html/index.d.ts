/**
 * @description to-html entry
 * @author wangfupeng
 */
import { Element as SlateElement, Descendant } from 'slate';
import { IDomEditor } from '../editor/interface';
export declare type styleToHtmlFnType = (node: Descendant, elemHtml: string) => string;
export declare const STYLE_TO_HTML_FN_LIST: styleToHtmlFnType[];
/**
 * 注册 toHtml 处理文本样式的函数
 * @param fn 处理 toHtml 文本样式的函数
 */
export declare function registerStyleToHtmlHandler(fn: styleToHtmlFnType): void;
interface IElemToHtmlRes {
    html: string;
    prefix?: string;
    suffix?: string;
}
export declare type ElemToHtmlFnType = (elemNode: SlateElement, childrenHtml: string, editor?: IDomEditor) => string | IElemToHtmlRes;
export declare const ELEM_TO_HTML_CONF: {
    [key: string]: ElemToHtmlFnType;
};
export interface IElemToHtmlConf {
    type: string;
    elemToHtml: ElemToHtmlFnType;
}
/**
 * 注册 elem to html 函数
 * @param conf { type, elemToHtml } ，type 即 node.type
 */
export declare function registerElemToHtmlConf(conf: IElemToHtmlConf): void;
export {};
