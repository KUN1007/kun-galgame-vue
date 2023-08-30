/**
 * @description DOM 操作
 * @author wangfupeng
 */
import $, { Dom7Array } from 'dom7';
export default $;
import DOMNode = globalThis.Node;
import DOMComment = globalThis.Comment;
import DOMElement = globalThis.Element;
import DOMText = globalThis.Text;
import DOMRange = globalThis.Range;
import DOMSelection = globalThis.Selection;
import DOMStaticRange = globalThis.StaticRange;
export { DOMNode, DOMComment, DOMElement, DOMText, DOMRange, DOMSelection, DOMStaticRange };
/**
 * 获取 tagName lower-case
 * @param $elem $elem
 */
export declare function getTagName($elem: Dom7Array): string;
