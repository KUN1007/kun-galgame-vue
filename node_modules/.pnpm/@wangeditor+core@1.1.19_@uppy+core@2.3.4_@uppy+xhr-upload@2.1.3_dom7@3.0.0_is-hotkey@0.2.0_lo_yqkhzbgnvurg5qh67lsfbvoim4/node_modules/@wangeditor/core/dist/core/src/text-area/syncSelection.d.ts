/**
 * @description 同步 selection
 * @author wangfupeng
 */
import { IDomEditor } from '../editor/interface';
import TextArea from './TextArea';
/**
 * editor onchange 时，将 editor selection 同步给 DOM
 * @param textarea textarea
 * @param editor editor
 * @param focus 是否强制更新选区
 */
export declare function editorSelectionToDOM(textarea: TextArea, editor: IDomEditor, focus?: boolean): void;
/**
 * DOM selection change 时，把 DOM selection 同步给 slate
 * @param textarea textarea
 * @param editor editor
 */
export declare function DOMSelectionToEditor(textarea: TextArea, editor: IDomEditor): void;
