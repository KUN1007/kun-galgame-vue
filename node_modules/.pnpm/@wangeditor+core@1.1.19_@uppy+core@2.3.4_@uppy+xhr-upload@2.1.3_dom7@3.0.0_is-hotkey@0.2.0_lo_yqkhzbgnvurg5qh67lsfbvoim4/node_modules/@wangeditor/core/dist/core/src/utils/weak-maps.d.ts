/**
 * @description 对象关联关系（部分参考 slate-react weak-maps.ts）
 * @author wangfupeng
 */
import { Emitter } from 'event-emitter';
import { VNode } from 'snabbdom';
import { Node, Ancestor, Editor, Path, Range } from 'slate';
import { IDomEditor } from '../editor/interface';
import TextArea from '../text-area/TextArea';
import Toolbar from '../menus/bar/Toolbar';
import HoverBar from '../menus/bar/HoverBar';
import { IBarItem } from '../menus/bar-item/index';
import { Key } from './key';
import { PatchFn } from '../utils/vdom';
import { IEditorConfig } from '../config/interface';
import PanelAndModal from '../menus/panel-and-modal/BaseClass';
export declare const EDITOR_TO_TEXTAREA: WeakMap<IDomEditor, TextArea>;
export declare const TEXTAREA_TO_EDITOR: WeakMap<TextArea, IDomEditor>;
export declare const TOOLBAR_TO_EDITOR: WeakMap<Toolbar, IDomEditor>;
export declare const EDITOR_TO_TOOLBAR: WeakMap<IDomEditor, Toolbar>;
export declare const HOVER_BAR_TO_EDITOR: WeakMap<HoverBar, IDomEditor>;
export declare const EDITOR_TO_HOVER_BAR: WeakMap<IDomEditor, HoverBar>;
export declare const BAR_ITEM_TO_EDITOR: WeakMap<IBarItem, IDomEditor>;
export declare const EDITOR_TO_PANEL_AND_MODAL: WeakMap<IDomEditor, Set<PanelAndModal>>;
export declare const PANEL_OR_MODAL_TO_EDITOR: WeakMap<PanelAndModal, IDomEditor>;
export declare const EDITOR_TO_CONFIG: WeakMap<IDomEditor, IEditorConfig>;
export declare const IS_FIRST_PATCH: WeakMap<TextArea, boolean>;
export declare const TEXTAREA_TO_PATCH_FN: WeakMap<TextArea, PatchFn>;
export declare const TEXTAREA_TO_VNODE: WeakMap<TextArea, VNode>;
/**
 * Two weak maps that allow us rebuild a path given a node. They are populated
 * at render time such that after a render occurs we can always backtrack.
 */
export declare const NODE_TO_INDEX: WeakMap<Node, number>;
export declare const NODE_TO_PARENT: WeakMap<Node, Ancestor>;
/**
 * Weak maps that allow us to go between Slate nodes and DOM nodes. These
 * are used to resolve DOM event-related logic into Slate actions.
 */
export declare const EDITOR_TO_ELEMENT: WeakMap<Editor, HTMLElement>;
export declare const EDITOR_TO_PLACEHOLDER: WeakMap<Editor, string>;
export declare const ELEMENT_TO_NODE: WeakMap<HTMLElement, Node>;
export declare const KEY_TO_ELEMENT: WeakMap<Key, HTMLElement>;
export declare const NODE_TO_ELEMENT: WeakMap<Node, HTMLElement>;
export declare const NODE_TO_KEY: WeakMap<Node, Key>;
export declare const EDITOR_TO_WINDOW: WeakMap<Editor, Window>;
/**
 * Weak maps for storing editor-related state.
 */
export declare const IS_FOCUSED: WeakMap<Editor, boolean>;
export declare const IS_DRAGGING: WeakMap<Editor, boolean>;
export declare const IS_CLICKING: WeakMap<Editor, boolean>;
export declare const CHANGING_NODE_PATH: WeakMap<Editor, Path>;
export declare const EDITOR_TO_SELECTION: WeakMap<Editor, Range>;
export declare const EDITOR_TO_EMITTER: WeakMap<Editor, Emitter>;
export declare const EDITOR_TO_CAN_PASTE: WeakMap<Editor, boolean>;
