/**
 * @description 处理 paste 事件
 * @author wangfupeng
 */
import { IDomEditor } from '../../editor/interface';
import TextArea from '../TextArea';
declare function handleOnPaste(e: Event, textarea: TextArea, editor: IDomEditor): void;
export default handleOnPaste;
