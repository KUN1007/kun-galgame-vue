/**
 * @description 处理 beforeInput 事件
 * @author wangfupeng
 */
import { IDomEditor } from '../../editor/interface';
import TextArea from '../TextArea';
declare function handleBeforeInput(e: Event, textarea: TextArea, editor: IDomEditor): void;
export default handleBeforeInput;
