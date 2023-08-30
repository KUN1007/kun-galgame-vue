/**
 * @description pre-parse html
 * @author wangfupeng
 */
import { DOMElement } from '../../utils/dom';
/**
 * pre-prase text-indent 兼容 V4 和 V5 早期格式（都使用 padding-left）
 * @param elem elem
 */
declare function preParse(elem: DOMElement): DOMElement;
export declare const preParseHtmlConf: {
    selector: string;
    preParseHtml: typeof preParse;
};
export {};
