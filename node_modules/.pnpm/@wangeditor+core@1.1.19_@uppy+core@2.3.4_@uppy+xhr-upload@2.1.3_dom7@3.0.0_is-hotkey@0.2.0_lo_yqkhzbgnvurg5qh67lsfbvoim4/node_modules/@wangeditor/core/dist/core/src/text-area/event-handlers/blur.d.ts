/**
 * @description 处理 onblur 事件
 * @author wangfupeng
 */
import { IDomEditor } from '../../editor/interface';
import TextArea from '../TextArea';
declare function handleOnBlur(e: Event, textarea: TextArea, editor: IDomEditor): void;
export default handleOnBlur;
