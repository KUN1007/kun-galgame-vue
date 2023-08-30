/**
 * @description 监听 composition 事件
 * @author wangfupeng
 */
import { IDomEditor } from '../../editor/interface';
import TextArea from '../TextArea';
/**
 * composition start 事件
 * @param e event
 * @param textarea textarea
 * @param editor editor
 */
export declare function handleCompositionStart(e: Event, textarea: TextArea, editor: IDomEditor): void;
/**
 * composition update 事件
 * @param e event
 * @param textarea textarea
 * @param editor editor
 */
export declare function handleCompositionUpdate(event: Event, textarea: TextArea, editor: IDomEditor): void;
/**
 * composition end 事件
 * @param e event
 * @param textarea textarea
 * @param editor editor
 */
export declare function handleCompositionEnd(e: Event, textarea: TextArea, editor: IDomEditor): void;
