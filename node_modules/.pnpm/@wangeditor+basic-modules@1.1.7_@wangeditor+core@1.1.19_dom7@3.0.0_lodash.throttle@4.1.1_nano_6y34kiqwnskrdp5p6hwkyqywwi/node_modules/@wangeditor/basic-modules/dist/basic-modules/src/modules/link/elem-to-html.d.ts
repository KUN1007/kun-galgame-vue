/**
 * @description to html
 * @author wangfupeng
 */
import { Element } from 'slate';
declare function linkToHtml(elem: Element, childrenHtml: string): string;
export declare const linkToHtmlConf: {
    type: string;
    elemToHtml: typeof linkToHtml;
};
export {};
