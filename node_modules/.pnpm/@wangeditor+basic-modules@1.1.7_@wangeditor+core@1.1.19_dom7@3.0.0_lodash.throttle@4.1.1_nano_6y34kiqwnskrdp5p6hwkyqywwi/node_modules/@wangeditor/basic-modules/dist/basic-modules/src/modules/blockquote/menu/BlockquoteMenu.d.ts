/**
 * @description blockquote menu class
 * @author wangfupeng
 */
import { IButtonMenu, IDomEditor } from '@wangeditor/core';
declare class BlockquoteMenu implements IButtonMenu {
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1024 1024\"><path d=\"M894.6 907.1H605.4c-32.6 0-59-26.4-59-59V608.2l-4-14.9c0-315.9 125.5-485.1 376.5-507.5v59.8C752.7 180.4 711.3 315.8 711.3 442.4v41.2l31.5 12.3h151.8c32.6 0 59 26.4 59 59v293.2c0 32.5-26.4 59-59 59z m-472 0H133.4c-32.6 0-59-26.4-59-59V608.2l-4-14.9c0-315.9 125.5-485.1 376.5-507.5v59.8C280.7 180.4 239.3 315.8 239.3 442.4v41.2l31.5 12.3h151.8c32.6 0 59 26.4 59 59v293.2c0 32.5-26.4 59-59 59z\"></path></svg>";
    readonly tag = "button";
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    /**
     * 执行命令
     * @param editor editor
     * @param value node.type
     */
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default BlockquoteMenu;
