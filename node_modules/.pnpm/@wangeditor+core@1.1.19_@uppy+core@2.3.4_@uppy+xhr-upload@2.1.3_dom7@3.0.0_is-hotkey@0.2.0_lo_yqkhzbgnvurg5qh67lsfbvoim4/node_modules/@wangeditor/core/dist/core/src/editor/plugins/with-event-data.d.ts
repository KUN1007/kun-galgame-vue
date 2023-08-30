/**
 * @description slate 插件 - event data 相关
 * @author wangfupeng
 */
import { IDomEditor } from '../..';
export declare const withEventData: <T extends import("slate").BaseEditor>(editor: T) => T & IDomEditor;
