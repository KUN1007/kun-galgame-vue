/**
 * @description config register
 * @author wangfupeng
 */
import { IMenuConfig, ISingleMenuConfig } from '../config/interface';
export declare const GLOBAL_MENU_CONF: IMenuConfig;
/**
 * 注册全局菜单配置
 * @param key menu key
 * @param config config
 */
export declare function registerGlobalMenuConf(key: string, config?: ISingleMenuConfig): void;
