/**
 * @description 显示/隐藏 placeholder
 * @author wangfupeng
 */
import { IDomEditor } from '../editor/interface';
import TextArea from './TextArea';
/**
 * 处理 placeholder
 * @param textarea textarea
 * @param editor editor
 */
export declare function handlePlaceholder(textarea: TextArea, editor: IDomEditor): void;
/**
 * 隐藏 placeholder （如拼音输入 compositionStart 时，要先隐藏，等 compositionEnd 时再判断是否显示）
 * @param textarea textarea
 * @param editor editor
 */
export declare function hidePlaceholder(textarea: TextArea, editor: IDomEditor): void;
