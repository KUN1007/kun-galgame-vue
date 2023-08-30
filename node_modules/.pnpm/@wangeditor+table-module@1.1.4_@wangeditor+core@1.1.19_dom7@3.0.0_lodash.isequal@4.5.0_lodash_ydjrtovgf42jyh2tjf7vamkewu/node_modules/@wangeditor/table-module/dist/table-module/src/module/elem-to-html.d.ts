/**
 * @description to html
 * @author wangfupeng
 */
import { Element } from 'slate';
declare function tableToHtml(elemNode: Element, childrenHtml: string): string;
declare function tableRowToHtml(elem: Element, childrenHtml: string): string;
declare function tableCellToHtml(cellNode: Element, childrenHtml: string): string;
export declare const tableToHtmlConf: {
    type: string;
    elemToHtml: typeof tableToHtml;
};
export declare const tableRowToHtmlConf: {
    type: string;
    elemToHtml: typeof tableRowToHtml;
};
export declare const tableCellToHtmlConf: {
    type: string;
    elemToHtml: typeof tableCellToHtml;
};
export {};
