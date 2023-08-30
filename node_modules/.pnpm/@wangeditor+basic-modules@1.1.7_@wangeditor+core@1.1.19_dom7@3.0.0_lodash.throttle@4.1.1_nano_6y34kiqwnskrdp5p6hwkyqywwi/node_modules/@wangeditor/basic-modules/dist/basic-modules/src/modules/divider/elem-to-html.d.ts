/**
 * @description to html
 * @author wangfupeng
 */
import { Element } from 'slate';
declare function dividerToHtml(elem: Element, childrenHtml: string): string;
export declare const dividerToHtmlConf: {
    type: string;
    elemToHtml: typeof dividerToHtml;
};
export {};
