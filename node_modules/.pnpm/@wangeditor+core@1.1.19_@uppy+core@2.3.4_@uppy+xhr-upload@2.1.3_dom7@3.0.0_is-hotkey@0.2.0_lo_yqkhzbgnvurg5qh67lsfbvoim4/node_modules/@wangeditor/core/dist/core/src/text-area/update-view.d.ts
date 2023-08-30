/**
 * @description patch textarea view
 * @author wangfupeng
 */
import { IDomEditor } from '../editor/interface';
import TextArea from './TextArea';
/**
 * 获取 editor.children 渲染 DOM
 * @param textarea textarea
 * @param editor editor
 */
declare function updateView(textarea: TextArea, editor: IDomEditor): void;
export default updateView;
