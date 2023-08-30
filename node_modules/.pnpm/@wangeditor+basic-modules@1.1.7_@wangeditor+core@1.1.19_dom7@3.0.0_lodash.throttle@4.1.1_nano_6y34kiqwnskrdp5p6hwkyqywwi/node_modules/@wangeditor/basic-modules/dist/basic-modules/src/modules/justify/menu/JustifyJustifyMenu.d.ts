/**
 * @description 两端对齐
 * @author wangfupeng
 */
import { IDomEditor } from '@wangeditor/core';
import BaseMenu from './BaseMenu';
declare class JustifyJustifyMenu extends BaseMenu {
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1024 1024\"><path d=\"M0 64h1024v128H0z m0 192h1024v128H0z m0 192h1024v128H0z m0 192h1024v128H0z m0 192h1024v128H0z\"></path></svg>";
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default JustifyJustifyMenu;
