/**
 * @description parse html
 * @author wangfupeng
 */
import { Descendant } from 'slate';
import { DOMElement } from '../../utils/dom';
import { IDomEditor } from '@wangeditor/core';
import { PreElement, CodeElement } from './custom-types';
declare function parseCodeHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): CodeElement;
export declare const parseCodeHtmlConf: {
    selector: string;
    parseElemHtml: typeof parseCodeHtml;
};
declare function parsePreHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): PreElement;
export declare const parsePreHtmlConf: {
    selector: string;
    parseElemHtml: typeof parsePreHtml;
};
export {};
