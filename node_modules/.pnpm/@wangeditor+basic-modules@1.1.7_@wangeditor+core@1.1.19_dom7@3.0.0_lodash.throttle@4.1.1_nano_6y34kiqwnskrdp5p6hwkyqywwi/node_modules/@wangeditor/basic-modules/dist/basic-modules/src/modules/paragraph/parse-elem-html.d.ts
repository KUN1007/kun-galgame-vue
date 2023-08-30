/**
 * @description parse html
 * @author wangfupeng
 */
import { Descendant } from 'slate';
import { IDomEditor } from '@wangeditor/core';
import { ParagraphElement } from './custom-types';
import { DOMElement } from '../../utils/dom';
declare function parseParagraphHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): ParagraphElement;
export declare const parseParagraphHtmlConf: {
    selector: string;
    parseElemHtml: typeof parseParagraphHtml;
};
export {};
