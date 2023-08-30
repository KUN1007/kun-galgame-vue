/**
 * @description parse html
 * @author wangfupeng
 */
import { Descendant } from 'slate';
import { IDomEditor } from '@wangeditor/core';
import { ImageElement } from './custom-types';
import { DOMElement } from '../../utils/dom';
declare function parseHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): ImageElement;
export declare const parseHtmlConf: {
    selector: string;
    parseElemHtml: typeof parseHtml;
};
export {};
