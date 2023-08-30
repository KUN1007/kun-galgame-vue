/**
 * @description 自定义事件 插件
 * @author wangfupeng
 */
import { IDomEditor } from '../interface';
export declare const withEmitter: <T extends import("slate").BaseEditor>(editor: T) => T & IDomEditor;
