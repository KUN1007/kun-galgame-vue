/**
 * @description slate node to vnode
 * @author wangfupeng
 */
import { Node, Ancestor } from 'slate';
import { VNode } from 'snabbdom';
import { IDomEditor } from '../editor/interface';
/**
 * 根据 slate node 生成 snabbdom vnode
 * @param node node
 * @param index node index in parent.children
 * @param parent parent node
 * @param editor editor
 */
export declare function node2Vnode(node: Node, index: number, parent: Ancestor, editor: IDomEditor): VNode;
