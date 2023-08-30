/**
 * @description parse elem html
 * @author wangfupeng
 */
import { Descendant } from 'slate';
import { DOMElement } from '../utils/dom';
import { IDomEditor } from '@wangeditor/core';
import { ListItemElement } from './custom-types';
declare function parseItemHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): ListItemElement;
export declare const parseItemHtmlConf: {
    selector: string;
    parseElemHtml: typeof parseItemHtml;
};
declare function parseListHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): ListItemElement[];
export declare const parseListHtmlConf: {
    selector: string;
    parseElemHtml: typeof parseListHtml;
};
export {};
