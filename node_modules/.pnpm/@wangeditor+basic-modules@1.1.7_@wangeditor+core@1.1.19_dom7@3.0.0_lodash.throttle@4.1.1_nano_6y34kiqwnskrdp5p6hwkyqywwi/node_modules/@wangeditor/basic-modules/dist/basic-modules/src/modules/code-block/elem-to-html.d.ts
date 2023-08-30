/**
 * @description to html
 * @author wangfupeng
 */
import { Element } from 'slate';
declare function codeToHtml(elem: Element, childrenHtml: string): string;
export declare const codeToHtmlConf: {
    type: string;
    elemToHtml: typeof codeToHtml;
};
declare function preToHtml(elem: Element, childrenHtml: string): string;
export declare const preToHtmlConf: {
    type: string;
    elemToHtml: typeof preToHtml;
};
export {};
