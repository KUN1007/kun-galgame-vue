/**
 * @description DOM 操作
 * @author wangfupeng
 */
import $, { Dom7Array } from 'dom7';
export { Dom7Array } from 'dom7';
export default $;
/**
 * 获取 tagName lower-case
 * @param $elem $elem
 */
export declare function getTagName($elem: Dom7Array): string;
/**
 * 生成带 size 样式的 iframe html
 * @param iframeHtml iframe html string
 * @param width width
 * @param height height
 * @returns iframe html string with size style
 */
export declare function genSizeStyledIframeHtml(iframeHtml: string, width?: string, height?: string): string;
import DOMNode = globalThis.Node;
import DOMComment = globalThis.Comment;
import DOMElement = globalThis.Element;
import DOMText = globalThis.Text;
import DOMRange = globalThis.Range;
import DOMSelection = globalThis.Selection;
import DOMStaticRange = globalThis.StaticRange;
export { DOMNode, DOMComment, DOMElement, DOMText, DOMRange, DOMSelection, DOMStaticRange };
