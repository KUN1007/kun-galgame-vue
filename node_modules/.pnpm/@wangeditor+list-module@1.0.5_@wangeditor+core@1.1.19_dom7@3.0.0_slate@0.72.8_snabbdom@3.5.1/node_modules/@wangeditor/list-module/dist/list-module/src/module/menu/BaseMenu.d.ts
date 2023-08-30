/**
 * @description base menu
 * @author wangfupeng
 */
import { IButtonMenu, IDomEditor } from '@wangeditor/core';
declare abstract class BaseMenu implements IButtonMenu {
    readonly type = "list-item";
    abstract readonly ordered: boolean;
    abstract readonly title: string;
    abstract readonly iconSvg: string;
    readonly tag = "button";
    private getListNode;
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default BaseMenu;
