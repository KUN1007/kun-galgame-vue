/**
 * @description 监听 keypress 事件
 * @author wangfupeng
 */
import { IDomEditor } from '../../editor/interface';
import TextArea from '../TextArea';
declare function handleKeypress(event: Event, textarea: TextArea, editor: IDomEditor): void;
export default handleKeypress;
