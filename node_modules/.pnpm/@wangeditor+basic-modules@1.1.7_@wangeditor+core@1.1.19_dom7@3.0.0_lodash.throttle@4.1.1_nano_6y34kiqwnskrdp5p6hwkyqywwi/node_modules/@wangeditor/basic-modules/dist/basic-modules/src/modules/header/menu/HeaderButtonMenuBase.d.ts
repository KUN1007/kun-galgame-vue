/**
 * @description button menu base
 * @author wangfupeng
 */
import { IButtonMenu, IDomEditor } from '@wangeditor/core';
declare abstract class HeaderButtonMenuBase implements IButtonMenu {
    abstract readonly title: string;
    abstract readonly type: string;
    readonly tag = "button";
    /**
     * 获取选中节点的 node.type
     * @param editor editor
     */
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default HeaderButtonMenuBase;
