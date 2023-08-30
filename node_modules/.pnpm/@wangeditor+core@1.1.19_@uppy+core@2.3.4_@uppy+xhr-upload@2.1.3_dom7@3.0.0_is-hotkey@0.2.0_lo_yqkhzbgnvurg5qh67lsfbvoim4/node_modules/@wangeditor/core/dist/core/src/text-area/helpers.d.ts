/**
 * @description textarea helper fns
 * @author wangfupeng
 */
import { DOMRange, DOMNode } from '../utils/dom';
import { IDomEditor } from '../editor/interface';
/**
 * Check if two DOM range objects are equal.
 */
export declare const isRangeEqual: (a: DOMRange, b: DOMRange) => boolean;
/**
 * Check if the target is editable and in the editor.
 */
export declare function hasEditableTarget(editor: IDomEditor, target: EventTarget | null): target is DOMNode;
/**
 * Check if the target is inside void and in an non-readonly editor.
 */
export declare function isTargetInsideNonReadonlyVoid(editor: IDomEditor, target: EventTarget | null): boolean;
/**
 * Check if the target is in the editor.
 */
export declare function hasTarget(editor: IDomEditor, target: EventTarget | null): target is DOMNode;
/**
 * Check if a DOM event is overrode by a handler.
 */
export declare function isDOMEventHandled(event: Event, handler?: (event: Event) => void | boolean): boolean;
