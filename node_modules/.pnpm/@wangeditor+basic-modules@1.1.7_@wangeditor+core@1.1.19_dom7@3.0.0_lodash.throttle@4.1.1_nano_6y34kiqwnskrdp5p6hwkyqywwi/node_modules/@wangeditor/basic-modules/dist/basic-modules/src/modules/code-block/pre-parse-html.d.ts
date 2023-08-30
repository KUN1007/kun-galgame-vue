/**
 * @description pre parse html
 * @author wangfupeng
 */
import { DOMElement } from '../../utils/dom';
/**
 * pre-prase <code> ，去掉其中的 <xmp> （兼容 V4）
 * @param codeElem codeElem
 */
declare function preParse(codeElem: DOMElement): DOMElement;
export declare const preParseHtmlConf: {
    selector: string;
    preParseHtml: typeof preParse;
};
export {};
