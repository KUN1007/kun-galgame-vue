/**
 * @description parse html
 * @author wangfupeng
 */
import { Descendant } from 'slate';
import { DOMElement } from '../../utils/dom';
import { IDomEditor } from '@wangeditor/core';
import { Header1Element, Header2Element, Header3Element, Header4Element, Header5Element } from './custom-types';
export declare const parseHeader1HtmlConf: {
    selector: string;
    parseElemHtml: (elem: DOMElement, children: Descendant[], editor: IDomEditor) => Header1Element;
};
export declare const parseHeader2HtmlConf: {
    selector: string;
    parseElemHtml: (elem: DOMElement, children: Descendant[], editor: IDomEditor) => Header2Element;
};
export declare const parseHeader3HtmlConf: {
    selector: string;
    parseElemHtml: (elem: DOMElement, children: Descendant[], editor: IDomEditor) => Header3Element;
};
export declare const parseHeader4HtmlConf: {
    selector: string;
    parseElemHtml: (elem: DOMElement, children: Descendant[], editor: IDomEditor) => Header4Element;
};
export declare const parseHeader5HtmlConf: {
    selector: string;
    parseElemHtml: (elem: DOMElement, children: Descendant[], editor: IDomEditor) => Header5Element;
};
