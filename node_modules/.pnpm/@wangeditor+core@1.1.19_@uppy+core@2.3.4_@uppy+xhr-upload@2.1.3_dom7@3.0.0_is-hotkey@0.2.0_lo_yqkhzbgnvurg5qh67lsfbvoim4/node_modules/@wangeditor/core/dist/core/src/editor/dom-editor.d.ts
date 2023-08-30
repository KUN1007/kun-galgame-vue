/**
 * @description 扩展 slate Editor（参考 slate-react react-editor.ts ）
 * @author wangfupeng
 */
import { Node, Element, Path, Point, Range, Ancestor } from 'slate';
import type { IDomEditor } from './interface';
import { Key } from '../utils/key';
import TextArea from '../text-area/TextArea';
import Toolbar from '../menus/bar/Toolbar';
import HoverBar from '../menus/bar/HoverBar';
import { DOMNode, DOMPoint, DOMRange, DOMSelection, DOMStaticRange } from '../utils/dom';
/**
 * 自定义全局 command
 */
export declare const DomEditor: {
    /**
     * Return the host window of the current editor.
     */
    getWindow(editor: IDomEditor): Window;
    /**
     * Find a key for a Slate node.
     * key 即一个累加不重复的 id ，每一个 slate node 都对对应一个 key ，意思相当于 node.id
     */
    findKey(editor: IDomEditor | null, node: Node): Key;
    setNewKey(node: Node): void;
    /**
     * Find the path of Slate node.
     * path 是一个数组，代表 slate node 的位置 https://docs.slatejs.org/concepts/03-locations#path
     */
    findPath(editor: IDomEditor | null, node: Node): Path;
    /**
     * Find the DOM node that implements DocumentOrShadowRoot for the editor.
     */
    findDocumentOrShadowRoot(editor: IDomEditor): Document | ShadowRoot;
    /**
     * 获取父节点
     * @param editor editor
     * @param node cur node
     */
    getParentNode(editor: IDomEditor | null, node: Node): Ancestor | null;
    /**
     * 获取当前节点的所有父节点
     * @param editor editor
     * @param node cur node
     */
    getParentsNodes(editor: IDomEditor, node: Node): Ancestor[];
    /**
     * 获取当前节点对应的顶级节点
     * @param editor editor
     * @param curNode cur node
     */
    getTopNode(editor: IDomEditor, curNode: Node): Node;
    /**
     * Find the native DOM element from a Slate node or editor.
     */
    toDOMNode(editor: IDomEditor, node: Node): HTMLElement;
    /**
     * Check if a DOM node is within the editor.
     */
    hasDOMNode(editor: IDomEditor, target: DOMNode, options?: {
        editable?: boolean | undefined;
    }): boolean;
    /**
     * Find a native DOM range from a Slate `range`.
     *
     * Notice: the returned range will always be ordinal regardless of the direction of Slate `range` due to DOM API limit.
     *
     * there is no way to create a reverse DOM Range using Range.setStart/setEnd
     * according to https://dom.spec.whatwg.org/#concept-range-bp-set.
     */
    toDOMRange(editor: IDomEditor, range: Range): DOMRange;
    /**
     * Find a native DOM selection point from a Slate point.
     */
    toDOMPoint(editor: IDomEditor, point: Point): DOMPoint;
    /**
     * Find a Slate node from a native DOM `element`.
     */
    toSlateNode(editor: IDomEditor | null, domNode: DOMNode): Node;
    /**
     * Get the target range from a DOM `event`.
     */
    findEventRange(editor: IDomEditor, event: any): Range;
    /**
     * Find a Slate range from a DOM range or selection.
     */
    toSlateRange<T extends boolean>(editor: IDomEditor, domRange: DOMRange | DOMStaticRange | DOMSelection, options: {
        exactMatch: T;
        suppressThrow: T;
    }): T extends true ? import("slate").BaseRange | null : import("slate").BaseRange;
    /**
     * Find a Slate point from a DOM selection's `domNode` and `domOffset`.
     */
    toSlatePoint<T_1 extends boolean>(editor: IDomEditor, domPoint: DOMPoint, options: {
        exactMatch: T_1;
        suppressThrow: T_1;
    }): T_1 extends true ? import("slate").BasePoint | null : import("slate").BasePoint;
    hasRange(editor: IDomEditor, range: Range): boolean;
    getNodeType(node: Node): string;
    checkNodeType(node: Node, type: string): boolean;
    getNodesStr(nodes: Node[]): string;
    getSelectedElems(editor: IDomEditor): Element[];
    getSelectedNodeByType(editor: IDomEditor, type: string): Node | null;
    getSelectedTextNode(editor: IDomEditor): Node | null;
    isNodeSelected(editor: IDomEditor, node: Node): boolean;
    isSelectionAtLineEnd(editor: IDomEditor, path: Path): boolean;
    getTextarea(editor: IDomEditor): TextArea;
    getToolbar(editor: IDomEditor): Toolbar | null;
    getHoverbar(editor: IDomEditor): HoverBar | null;
    normalizeContent(editor: IDomEditor): void;
    /**
     * 获取：距离触发 maxLength，还可以插入多少字符
     * @param editor editor
     */
    getLeftLengthOfMaxLength(editor: IDomEditor): number;
    cleanExposedTexNodeInSelectionBlock(editor: IDomEditor): void;
    /**
     * 是否是编辑器里最后一个元素
     * @param editor editor
     * @param node node
     */
    isLastNode(editor: IDomEditor, node: Node): boolean;
    /**
     * 生成空白 paragraph
     */
    genEmptyParagraph(): Element;
    /**
     * 是否选中了 void node
     * @param editor editor
     */
    isSelectedVoidNode(editor: IDomEditor): boolean;
    /**
     * 选区是否在一个空行
     * @param editor editor
     */
    isSelectedEmptyParagraph(editor: IDomEditor): boolean | undefined;
    /**
     * 当前 path 指向的 node ，是否是空的（无内容）
     * @param editor editor
     * @param path path
     */
    isEmptyPath(editor: IDomEditor, path: Path): boolean;
};
