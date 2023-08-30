/**
 * @description del row menu
 * @author wangfupeng
 */
import { IButtonMenu, IDomEditor } from '@wangeditor/core';
declare class DeleteRow implements IButtonMenu {
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1048 1024\"><path d=\"M907.6736 586.5472L747.1104 425.984l163.84-163.84-78.6432-78.6432-163.84 163.84L507.904 186.7776 429.2608 262.144l163.84 163.84-167.1168 167.1168 78.6432 78.6432 167.1168-167.1168 160.5632 160.5632 75.3664-78.6432zM0 917.504V0h1048.576v917.504H0z m983.04-327.68h-22.9376l-65.536-65.536H983.04V327.68h-91.7504l65.536-65.536h26.2144V65.536H65.536v196.608h317.8496l65.536 65.536H65.536v196.608h380.1088l-65.536 65.536H65.536v196.608H983.04v-196.608z\"></path></svg>";
    readonly tag = "button";
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default DeleteRow;
