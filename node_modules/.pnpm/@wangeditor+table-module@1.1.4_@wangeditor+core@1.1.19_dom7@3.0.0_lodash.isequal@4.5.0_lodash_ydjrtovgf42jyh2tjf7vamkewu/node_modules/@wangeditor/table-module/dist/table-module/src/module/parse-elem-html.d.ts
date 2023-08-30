/**
 * @description parse html
 * @author wangfupeng
 */
import { Descendant } from 'slate';
import { IDomEditor } from '@wangeditor/core';
import { TableCellElement, TableRowElement, TableElement } from './custom-types';
import { DOMElement } from '../utils/dom';
declare function parseCellHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): TableCellElement;
export declare const parseCellHtmlConf: {
    selector: string;
    parseElemHtml: typeof parseCellHtml;
};
declare function parseRowHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): TableRowElement;
export declare const parseRowHtmlConf: {
    selector: string;
    parseElemHtml: typeof parseRowHtml;
};
declare function parseTableHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): TableElement;
export declare const parseTableHtmlConf: {
    selector: string;
    parseElemHtml: typeof parseTableHtml;
};
export {};
