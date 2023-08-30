/**
 * @description insert divider menu
 * @author wangfupeng
 */
import { IButtonMenu, IDomEditor } from '@wangeditor/core';
declare class InsertDividerMenu implements IButtonMenu {
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1092 1024\"><path d=\"M0 51.2m51.2 0l989.866667 0q51.2 0 51.2 51.2l0 0q0 51.2-51.2 51.2l-989.866667 0q-51.2 0-51.2-51.2l0 0q0-51.2 51.2-51.2Z\"></path><path d=\"M0 460.8m51.2 0l170.666667 0q51.2 0 51.2 51.2l0 0q0 51.2-51.2 51.2l-170.666667 0q-51.2 0-51.2-51.2l0 0q0-51.2 51.2-51.2Z\"></path><path d=\"M819.2 460.8m51.2 0l170.666667 0q51.2 0 51.2 51.2l0 0q0 51.2-51.2 51.2l-170.666667 0q-51.2 0-51.2-51.2l0 0q0-51.2 51.2-51.2Z\"></path><path d=\"M409.6 460.8m51.2 0l170.666667 0q51.2 0 51.2 51.2l0 0q0 51.2-51.2 51.2l-170.666667 0q-51.2 0-51.2-51.2l0 0q0-51.2 51.2-51.2Z\"></path><path d=\"M0 870.4m51.2 0l989.866667 0q51.2 0 51.2 51.2l0 0q0 51.2-51.2 51.2l-989.866667 0q-51.2 0-51.2-51.2l0 0q0-51.2 51.2-51.2Z\"></path></svg>";
    readonly tag = "button";
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default InsertDividerMenu;
