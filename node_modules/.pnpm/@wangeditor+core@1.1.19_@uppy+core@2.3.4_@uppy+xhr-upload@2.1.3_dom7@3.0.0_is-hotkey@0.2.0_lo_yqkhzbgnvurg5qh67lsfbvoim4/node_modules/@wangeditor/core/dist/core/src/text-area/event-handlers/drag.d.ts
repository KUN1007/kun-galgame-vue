/**
 * @description 处理 dragover 事件
 * @author wangfupeng
 */
import { IDomEditor } from '../../editor/interface';
import TextArea from '../TextArea';
export declare function handleOnDragstart(e: Event, textarea: TextArea, editor: IDomEditor): void;
export declare function handleOnDragover(event: Event, textarea: TextArea, editor: IDomEditor): void;
export declare function handleOnDragend(e: Event, textarea: TextArea, editor: IDomEditor): void;
