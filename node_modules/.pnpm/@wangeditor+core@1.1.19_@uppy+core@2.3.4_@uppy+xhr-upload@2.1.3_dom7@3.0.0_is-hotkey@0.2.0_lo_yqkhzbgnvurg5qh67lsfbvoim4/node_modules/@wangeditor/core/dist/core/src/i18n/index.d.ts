/**
 * @description i18n entry
 * @author wangfupeng
 */
import i18next from 'i18next';
/**
 * 添加多语言配置
 * @param lng 语言
 * @param resources 多语言配置
 */
export declare function i18nAddResources(lng: string, resources: object): void;
/**
 * 设置语言
 * @param lng 语言
 */
export declare function i18nChangeLanguage(lng: string): void;
/**
 * 获取多语言配置
 * @param lng lang
 */
export declare function i18nGetResources(lng: string): any;
/**
 * 翻译
 */
export declare const t: import("i18next").TFunction;
export default i18next;
