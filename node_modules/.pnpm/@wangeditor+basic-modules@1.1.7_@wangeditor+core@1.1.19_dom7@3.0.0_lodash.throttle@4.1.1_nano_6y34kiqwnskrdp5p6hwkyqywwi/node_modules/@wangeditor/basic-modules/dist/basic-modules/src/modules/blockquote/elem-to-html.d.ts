/**
 * @description to html
 * @author wangfupeng
 */
import { Element } from 'slate';
declare function quoteToHtml(elem: Element, childrenHtml: string): string;
export declare const quoteToHtmlConf: {
    type: string;
    elemToHtml: typeof quoteToHtml;
};
export {};
