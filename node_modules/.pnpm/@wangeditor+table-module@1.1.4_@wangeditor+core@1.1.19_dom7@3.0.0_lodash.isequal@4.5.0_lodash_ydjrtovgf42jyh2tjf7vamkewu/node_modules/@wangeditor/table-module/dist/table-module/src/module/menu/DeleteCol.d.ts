/**
 * @description del col menu
 * @author wangfupeng
 */
import { IButtonMenu, IDomEditor } from '@wangeditor/core';
declare class DeleteCol implements IButtonMenu {
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1048 1024\"><path d=\"M327.68 510.976L393.216 445.44v-13.1072L327.68 366.7968V510.976z m327.68-78.4384l65.536-65.536V507.904L655.36 442.368v-9.8304z m393.216 484.9664V0H0v917.504h1048.576z m-65.536-131.072h-262.144v-52.4288l-13.1072 13.1072-52.4288-52.4288v91.7504H393.216v-91.7504l-52.4288 52.4288-13.1072-13.1072v52.4288H65.536V65.536H327.68v121.2416l36.0448-36.0448 29.4912 29.4912V62.2592h262.144V180.224l49.152-49.152 16.384 16.384V62.2592h262.144V786.432z m-294.912-108.1344l-160.5632-160.5632-167.1168 167.1168-78.6432-78.6432 167.1168-167.1168L288.3584 278.528l78.6432-78.6432 160.5632 160.5632 163.84-163.84 78.6432 78.6432-163.84 163.84 160.5632 160.5632-78.6432 78.6432z\"></path></svg>";
    readonly tag = "button";
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default DeleteCol;
