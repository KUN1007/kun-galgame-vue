/**
 * @description redo menu
 * @author wangfupeng
 */
import { IButtonMenu, IDomEditor } from '@wangeditor/core';
declare class FullScreen implements IButtonMenu {
    title: string;
    iconSvg: string;
    tag: string;
    alwaysEnable: boolean;
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default FullScreen;
