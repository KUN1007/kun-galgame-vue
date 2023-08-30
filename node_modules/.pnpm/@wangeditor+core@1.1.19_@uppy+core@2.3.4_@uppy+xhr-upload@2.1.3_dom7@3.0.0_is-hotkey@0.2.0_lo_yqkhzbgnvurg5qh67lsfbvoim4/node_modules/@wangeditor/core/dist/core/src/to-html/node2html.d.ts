/**
 * @description node -> html
 * @author wangfupeng
 */
import { Descendant } from 'slate';
import { IDomEditor } from '../editor/interface';
declare function node2html(node: Descendant, editor: IDomEditor): string;
export default node2html;
