/**
 * @description parse-html helper fns
 * @author wangfupeng
 */
/**
 * 把 charCode 160 的空格（`&nbsp` 转换的），替换为 charCode 32 的空格（JS 默认的）
 * @param str str
 * @returns str
 */
export declare function replaceSpace160(str: string): string;
