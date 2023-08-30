/**
 * @description header menu
 * @author wangfupeng
 */
import { ISelectMenu, IDomEditor, IOption } from '@wangeditor/core';
declare class LineHeightMenu implements ISelectMenu {
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1024 1024\"><path d=\"M964 788a8 8 0 0 1 8 8v98a8 8 0 0 1-8 8H438a8 8 0 0 1-8-8v-98a8 8 0 0 1 8-8h526zM198.93 144.306c6.668-5.798 16.774-5.094 22.573 1.574l122.26 140.582a16 16 0 0 1 3.927 10.5c0 8.836-7.164 16-16 16h-61.8a8 8 0 0 0-8 8v390.077h69.819a16 16 0 0 1 10.502 3.928c6.666 5.8 7.37 15.906 1.57 22.573L221.476 878.123a16 16 0 0 1-1.57 1.57c-6.668 5.8-16.774 5.097-22.574-1.57L75.051 737.538a16 16 0 0 1-3.928-10.5c0-8.837 7.163-16 16-16h69.822V312.96H87.127a16 16 0 0 1-10.502-3.928c-6.666-5.8-7.37-15.906-1.57-22.573l122.303-140.582a16 16 0 0 1 1.572-1.572zM964 465a8 8 0 0 1 8 8v98a8 8 0 0 1-8 8H438a8 8 0 0 1-8-8v-98a8 8 0 0 1 8-8h526z m0-323a8 8 0 0 1 8 8v98a8 8 0 0 1-8 8H438a8 8 0 0 1-8-8v-98a8 8 0 0 1 8-8h526z\"></path></svg>";
    readonly tag = "select";
    readonly width = 80;
    getOptions(editor: IDomEditor): IOption[];
    /**
     * 获取匹配的 node 节点
     * @param editor editor
     */
    private getMatchNode;
    isActive(editor: IDomEditor): boolean;
    /**
     * 获取 node.lineHeight 的值（如 '1' '1.5'），没有则返回 ''
     * @param editor editor
     */
    getValue(editor: IDomEditor): string | boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default LineHeightMenu;
