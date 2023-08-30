/**
 * @description 处理 cut 事件
 * @author wangfupeng
 */
import { IDomEditor } from '../../editor/interface';
import TextArea from '../TextArea';
declare function handleOnCut(e: Event, textarea: TextArea, editor: IDomEditor): void;
export default handleOnCut;
