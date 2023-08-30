/**
 * @description insert col menu
 * @author wangfupeng
 */
import { IButtonMenu, IDomEditor } from '@wangeditor/core';
declare class InsertCol implements IButtonMenu {
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1048 1024\"><path d=\"M327.68 193.3312v186.7776H140.9024v91.7504H327.68v186.7776h88.4736V471.8592h190.0544V380.1088H416.1536V193.3312zM0 917.504V0h1048.576v917.504H0zM655.36 65.536H65.536v720.896H655.36V65.536z m327.68 0h-262.144v196.608h262.144V65.536z m0 262.144h-262.144v196.608h262.144V327.68z m0 262.144h-262.144v196.608h262.144v-196.608z\"></path></svg>";
    readonly tag = "button";
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default InsertCol;
