/**
 * @description 工具函数
 * @author wangfupeng
 */
/**
 * 获取随机数字符串
 * @param prefix 前缀
 * @returns 随机数字符串
 */
export declare function genRandomStr(prefix?: string): string;
export declare function promiseResolveThen(fn: Function): void;
/**
 * 追加 url query 参数
 * @param url url
 * @param data data
 */
export declare function addQueryToUrl(url: string, data: object): string;
/**
 * 替换 html 特殊字符，如 > 替换为 &gt;
 * @param str html str
 */
export declare function replaceHtmlSpecialSymbols(str: string): string;
/**
 *【反转】替换 html 特殊字符，如 &gt; 替换为 >
 * @param str html str
 */
export declare function deReplaceHtmlSpecialSymbols(str: string): string;
