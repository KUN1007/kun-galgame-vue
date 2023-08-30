/**
 * @description 减少缩进
 * @author wangfupeng
 */
import { IDomEditor } from '@wangeditor/core';
import BaseMenu from './BaseMenu';
declare class DecreaseIndentMenu extends BaseMenu {
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1024 1024\"><path d=\"M0 64h1024v128H0z m384 192h640v128H384z m0 192h640v128H384z m0 192h640v128H384zM0 832h1024v128H0z m256-512v384l-256-192z\"></path></svg>";
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default DecreaseIndentMenu;
