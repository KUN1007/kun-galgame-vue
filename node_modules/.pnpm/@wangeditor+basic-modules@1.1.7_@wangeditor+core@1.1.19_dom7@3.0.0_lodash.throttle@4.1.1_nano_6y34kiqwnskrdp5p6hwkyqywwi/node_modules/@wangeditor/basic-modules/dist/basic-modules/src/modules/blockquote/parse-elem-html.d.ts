/**
 * @description parse html
 * @author wangfupeng
 */
import { Descendant } from 'slate';
import { DOMElement } from '../../utils/dom';
import { IDomEditor } from '@wangeditor/core';
import { BlockQuoteElement } from './custom-types';
declare function parseHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): BlockQuoteElement;
export declare const parseHtmlConf: {
    selector: string;
    parseElemHtml: typeof parseHtml;
};
export {};
