/**
 * @description 绑定 node 的关系
 * @author wangfupeng
 */
import { Node, Ancestor } from 'slate';
import { IDomEditor } from '../editor/interface';
/**
 * createEditor 未传递 selector 时，绑定 node 的关系（ NODE_TO_PARENT, NODE_TO_INDEX 等 ）
 * @param node node
 * @param index index
 * @param parent parent node
 * @param editor editor
 */
declare function bindNodeRelation(node: Node, index: number, parent: Ancestor, editor: IDomEditor): void;
export default bindNodeRelation;
