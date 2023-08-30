/**
 * @description pre parse html
 * @author wangfupeng
 */
import { DOMElement } from '../utils/dom';
/**
 * pre-prase video ，兼容 V4
 * @param elem elem
 */
declare function preParse(elem: DOMElement): DOMElement;
export declare const preParseHtmlConf: {
    selector: string;
    preParseHtml: typeof preParse;
};
export {};
