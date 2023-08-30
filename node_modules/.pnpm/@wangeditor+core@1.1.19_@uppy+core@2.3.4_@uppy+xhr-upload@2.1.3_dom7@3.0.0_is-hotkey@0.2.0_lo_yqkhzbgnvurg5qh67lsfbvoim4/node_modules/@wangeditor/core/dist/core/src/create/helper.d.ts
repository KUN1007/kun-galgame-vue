/**
 * @description create helper
 * @author wangfupeng
 */
import { Descendant } from 'slate';
import { IDomEditor } from '../editor/interface';
import { DOMElement } from '../utils/dom';
/**
 * 检查是否重复创建 textarea
 */
export declare function isRepeatedCreateTextarea(editor: IDomEditor, selector: string | DOMElement): boolean;
/**
 * 检查是否重复创建 toolbar
 */
export declare function isRepeatedCreateToolbar(editor: IDomEditor, selector: string | DOMElement): boolean;
/**
 * 生成默认 content
 */
export declare function genDefaultContent(): {
    type: string;
    children: {
        text: string;
    }[];
}[];
/**
 * html 字符串 -> content
 * @param editor editor
 * @param html html 字符串
 */
export declare function htmlToContent(editor: IDomEditor, html?: string): Descendant[];
