/**
 * @description pre parse html
 * @author wangfupeng
 */
import { DOMElement } from '../utils/dom';
/**
 * pre-prase table ，去掉 <tbody>
 * @param table table elem
 */
declare function preParse(tableElem: DOMElement): DOMElement;
export declare const preParseTableHtmlConf: {
    selector: string;
    preParseHtml: typeof preParse;
};
export {};
