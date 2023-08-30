/**
 * @description 处理 drop 事件
 * @author wangfupeng
 */
import { IDomEditor } from '../../editor/interface';
import TextArea from '../TextArea';
declare function handleOnDrop(e: Event, textarea: TextArea, editor: IDomEditor): void;
export default handleOnDrop;
