/**
 * @description header helper
 * @author wangfupeng
 */
import { IDomEditor } from '@wangeditor/core';
/**
 * 获取 node type（'header1' 'header2' 等），未匹配则返回 'paragraph'
 */
export declare function getHeaderType(editor: IDomEditor): string;
export declare function isMenuDisabled(editor: IDomEditor): boolean;
/**
 * 设置 node type （'header1' 'header2' 'paragraph' 等）
 */
export declare function setHeaderType(editor: IDomEditor, type: string): void;
