/**
 * @description register menu
 * @author wangfupeng
 */
import { MenuFactoryType, IRegisterMenuConf } from './interface';
export declare const MENU_ITEM_FACTORIES: {
    [key: string]: MenuFactoryType;
};
/**
 * 注册菜单配置
 * @param registerMenuConf { key, factory, config } ，各个 menu key 不能重复
 * @param customConfig 自定义 menu config
 */
export declare function registerMenu(registerMenuConf: IRegisterMenuConf, customConfig?: {
    [key: string]: any;
}): void;
