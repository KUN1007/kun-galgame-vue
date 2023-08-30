/**
 * @description simply style base menu
 * @author wangfupeng
 */
import { IButtonMenu, IDomEditor } from '@wangeditor/core';
declare abstract class BaseMenu implements IButtonMenu {
    abstract readonly mark: string;
    protected readonly marksNeedToRemove: string[];
    abstract readonly title: string;
    abstract readonly iconSvg: string;
    abstract readonly hotkey: string;
    readonly tag = "button";
    /**
     * 获取：是否有 mark
     * @param editor editor
     */
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    /**
     * 执行命令
     * @param editor editor
     * @param value 是否有 mark
     */
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default BaseMenu;
