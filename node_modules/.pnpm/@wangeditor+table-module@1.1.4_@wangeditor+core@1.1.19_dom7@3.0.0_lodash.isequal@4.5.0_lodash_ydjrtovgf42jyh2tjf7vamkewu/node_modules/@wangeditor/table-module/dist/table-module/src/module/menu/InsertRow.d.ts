/**
 * @description insert row menu
 * @author wangfupeng
 */
import { IButtonMenu, IDomEditor } from '@wangeditor/core';
declare class InsertRow implements IButtonMenu {
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1048 1024\"><path d=\"M707.7888 521.0112h-147.456v-147.456H488.2432v147.456h-147.456v68.8128h147.456v147.456h72.0896v-147.456h147.456zM0 917.504V0h1048.576v917.504H0zM327.68 65.536H65.536v196.608H327.68V65.536z m327.68 0H393.216v196.608h262.144V65.536z m327.68 0h-262.144v196.608h262.144V65.536z m0 258.8672H65.536v462.0288H983.04V324.4032z\"></path></svg>";
    readonly tag = "button";
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default InsertRow;
