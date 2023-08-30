/**
 * @description editor config
 * @author wangfupeng
 */
import { IEditorConfig, IToolbarConfig } from './interface';
/**
 * 生成编辑器默认配置
 */
export declare function genEditorConfig(userConfig?: Partial<IEditorConfig>): IEditorConfig;
/**
 * 生成 toolbar 默认配置
 */
export declare function genToolbarConfig(userConfig?: Partial<IToolbarConfig>): IToolbarConfig;
