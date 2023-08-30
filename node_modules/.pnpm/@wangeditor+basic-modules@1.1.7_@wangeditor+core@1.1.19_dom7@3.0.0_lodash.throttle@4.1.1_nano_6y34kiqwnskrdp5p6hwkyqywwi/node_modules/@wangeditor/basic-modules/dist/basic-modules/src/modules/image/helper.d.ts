/**
 * @description image menu helper
 * @author wangfupeng
 */
import { IDomEditor } from '@wangeditor/core';
import { ImageStyle } from './custom-types';
export declare function insertImageNode(editor: IDomEditor, src: string, alt?: string, href?: string): Promise<void>;
export declare function updateImageNode(editor: IDomEditor, src: string, alt?: string, href?: string, style?: ImageStyle): Promise<void>;
/**
 * 判断菜单是否要 disabled
 * @param editor editor
 */
export declare function isInsertImageMenuDisabled(editor: IDomEditor): boolean;
