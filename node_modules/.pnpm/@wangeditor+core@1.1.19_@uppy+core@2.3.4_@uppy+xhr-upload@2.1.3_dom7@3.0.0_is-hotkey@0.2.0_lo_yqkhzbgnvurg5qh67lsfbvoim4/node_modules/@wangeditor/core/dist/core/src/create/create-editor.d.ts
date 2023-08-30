/**
 * @description create editor
 * @author wangfupeng
 */
import { Descendant } from 'slate';
import { IDomEditor } from '../editor/interface';
import { IEditorConfig } from '../config/interface';
import type { DOMElement } from '../utils/dom';
declare type PluginFnType = <T extends IDomEditor>(editor: T) => T;
interface ICreateOption {
    selector: string | DOMElement;
    config: Partial<IEditorConfig>;
    content?: Descendant[];
    html?: string;
    plugins: PluginFnType[];
}
/**
 * 创建编辑器
 */
export default function (option: Partial<ICreateOption>): import("slate").BaseEditor & IDomEditor & import("slate-history").HistoryEditor;
export {};
