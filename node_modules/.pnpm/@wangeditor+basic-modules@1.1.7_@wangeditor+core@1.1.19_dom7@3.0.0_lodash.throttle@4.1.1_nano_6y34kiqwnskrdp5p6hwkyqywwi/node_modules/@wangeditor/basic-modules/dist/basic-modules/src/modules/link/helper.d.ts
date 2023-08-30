/**
 * @description link helper
 * @author wangfupeng
 */
import { IDomEditor } from '@wangeditor/core';
export declare function isMenuDisabled(editor: IDomEditor): boolean;
/**
 * 插入 link
 * @param editor editor
 * @param text text
 * @param url url
 */
export declare function insertLink(editor: IDomEditor, text: string, url: string): Promise<void>;
/**
 * 修改 link url
 * @param editor editor
 * @param text text
 * @param url link url
 */
export declare function updateLink(editor: IDomEditor, text: string, url: string): Promise<void>;
