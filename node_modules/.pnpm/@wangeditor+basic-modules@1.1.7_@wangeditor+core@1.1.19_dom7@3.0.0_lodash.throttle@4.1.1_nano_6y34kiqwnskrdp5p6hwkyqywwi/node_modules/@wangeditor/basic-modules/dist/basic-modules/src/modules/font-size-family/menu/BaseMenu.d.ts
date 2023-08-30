/**
 * @description header menu
 * @author wangfupeng
 */
import { ISelectMenu, IDomEditor, IOption } from '@wangeditor/core';
declare abstract class BaseMenu implements ISelectMenu {
    abstract readonly title: string;
    abstract readonly iconSvg: string;
    abstract readonly mark: string;
    readonly tag = "select";
    readonly width = 80;
    abstract getOptions(editor: IDomEditor): IOption[];
    isActive(editor: IDomEditor): boolean;
    getValue(editor: IDomEditor): string | boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default BaseMenu;
