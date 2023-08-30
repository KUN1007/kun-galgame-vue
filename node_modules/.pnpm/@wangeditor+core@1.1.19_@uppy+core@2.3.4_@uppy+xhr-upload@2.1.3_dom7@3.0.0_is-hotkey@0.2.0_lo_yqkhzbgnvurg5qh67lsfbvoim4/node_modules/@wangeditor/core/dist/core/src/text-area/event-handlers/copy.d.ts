/**
 * @description 处理 copy 事件
 * @author wangfupeng
 */
import { IDomEditor } from '../../editor/interface';
import TextArea from '../TextArea';
declare function handleOnCopy(e: Event, textarea: TextArea, editor: IDomEditor): void;
export default handleOnCopy;
