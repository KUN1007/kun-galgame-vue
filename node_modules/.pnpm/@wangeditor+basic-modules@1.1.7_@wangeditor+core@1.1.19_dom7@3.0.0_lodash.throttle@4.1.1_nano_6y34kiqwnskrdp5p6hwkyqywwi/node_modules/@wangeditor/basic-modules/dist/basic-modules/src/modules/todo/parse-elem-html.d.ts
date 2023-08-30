/**
 * @description parse html
 * @author wangfupeng
 */
import { Descendant } from 'slate';
import { IDomEditor } from '@wangeditor/core';
import { TodoElement } from './custom-types';
import { DOMElement } from '../../utils/dom';
declare function parseHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): TodoElement;
export declare const parseHtmlConf: {
    selector: string;
    parseElemHtml: typeof parseHtml;
};
export {};
