/**
 * @description DOM 操作 part1 - DOM7 文档 https://framework7.io/docs/dom7.html
 * @author wangfupeng
 */
import $, { Dom7Array } from 'dom7';
export { Dom7Array } from 'dom7';
export default $;
import DOMNode = globalThis.Node;
import DOMComment = globalThis.Comment;
import DOMElement = globalThis.Element;
import DOMText = globalThis.Text;
import DOMRange = globalThis.Range;
import DOMSelection = globalThis.Selection;
import DOMStaticRange = globalThis.StaticRange;
export { DOMNode, DOMComment, DOMElement, DOMText, DOMRange, DOMSelection, DOMStaticRange };
export declare type DOMPoint = [Node, number];
/**
 * Returns the host window of a DOM node
 */
export declare const getDefaultView: (value: any) => Window | null;
/**
 * Check if a DOM node is a comment node.
 */
export declare const isDOMComment: (value: any) => value is DOMComment;
/**
 * Check if a DOM node is an element node.
 */
export declare const isDOMElement: (value: any) => value is DOMElement;
/**
 * Check if a value is a DOM node.
 */
export declare const isDOMNode: (value: any) => value is DOMNode;
/**
 * Check if a value is a DOM selection.
 */
export declare const isDOMSelection: (value: any) => value is DOMSelection;
/**
 * Check if a DOM node is an element node.
 */
export declare const isDOMText: (value: any) => value is DOMText;
/**
 * Checks whether a paste event is a plaintext-only event.
 */
export declare const isPlainTextOnlyPaste: (event: ClipboardEvent) => boolean | null;
/**
 * Normalize a DOM point so that it always refers to a text node.
 */
export declare const normalizeDOMPoint: (domPoint: DOMPoint) => DOMPoint;
/**
 * Determines wether the active element is nested within a shadowRoot
 */
export declare const hasShadowRoot: () => boolean;
/**
 * Get the element with the specified id
 */
export declare const getElementById: (id: string) => null | HTMLElement;
/**
 * Get the nearest editable child and index at `index` in a `parent`, preferring `direction`.
 */
export declare const getEditableChildAndIndex: (parent: DOMElement, index: number, direction: 'forward' | 'backward') => [DOMNode, number];
/**
 * Get the nearest editable child at `index` in a `parent`, preferring
 * `direction`.
 */
export declare const getEditableChild: (parent: DOMElement, index: number, direction: 'forward' | 'backward') => DOMNode;
/**
 * Get a plaintext representation of the content of a node, accounting for block
 * elements which get a newline appended.
 *
 * The domNode must be attached to the DOM.
 */
export declare const getPlainText: (domNode: DOMNode) => string;
/**
 * 在下级节点中找到第一个 void elem
 * @param elem elem
 */
export declare function getFirstVoidChild(elem: DOMElement): DOMElement | null;
/**
 * 遍历一个 elem 内所有的 text node ，执行函数
 * @param elem elem
 * @param handler handler
 */
export declare function walkTextNodes(elem: DOMElement, handler: (textNode: DOMNode, parent: DOMElement) => void): void;
export declare enum NodeType {
    ELEMENT_NODE = 1,
    TEXT_NODE = 3,
    CDATA_SECTION_NODE = 4,
    PROCESSING_INSTRUCTION_NODE = 7,
    COMMENT_NODE = 8,
    DOCUMENT_NODE = 9,
    DOCUMENT_TYPE_NODE = 10,
    DOCUMENT_FRAGMENT_NODE = 11
}
/**
 * 获取 tagName lower-case
 * @param $elem $elem
 */
export declare function getTagName($elem: Dom7Array): string;
