/**
 * @description to html
 * @author wangfupeng
 */
import { Element } from 'slate';
declare function elemToHtml(elem: Element, childrenHtml: string): {
    html: string;
    prefix?: string;
    suffix?: string;
};
declare const listItemToHtmlConf: {
    type: string;
    elemToHtml: typeof elemToHtml;
};
export default listItemToHtmlConf;
