/**
 * @description slate 插件 - dom 相关
 * @author wangfupeng
 */
import { IDomEditor } from '../..';
/**
 * `withDOM` adds DOM specific behaviors to the editor.
 */
export declare const withDOM: <T extends import("slate").BaseEditor>(editor: T) => T & IDomEditor;
