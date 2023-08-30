/**
 * @description header menu
 * @author wangfupeng
 */
import { ISelectMenu, IDomEditor, IOption } from '@wangeditor/core';
declare class HeaderSelectMenu implements ISelectMenu {
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1024 1024\"><path d=\"M960 960c-51.2 0-102.4-3.2-153.6-3.2-51.2 0-99.2 3.2-150.4 3.2-19.2 0-28.8-22.4-28.8-38.4 0-51.2 57.6-28.8 86.4-48 19.2-12.8 19.2-60.8 19.2-80v-224-19.2c-9.6-3.2-19.2-3.2-28.8-3.2H320c-9.6 0-19.2 0-28.8 3.2V780.8c0 22.4 0 80 22.4 92.8 28.8 19.2 96-6.4 96 44.8 0 16-9.6 41.6-28.8 41.6-54.4 0-105.6-3.2-160-3.2-48 0-96 3.2-147.2 3.2-19.2 0-28.8-22.4-28.8-38.4 0-51.2 51.2-28.8 80-48 19.2-12.8 19.2-60.8 19.2-83.2V294.4c0-28.8 3.2-115.2-22.4-131.2-25.6-16-86.4 9.6-86.4-41.6 0-16 6.4-41.6 28.8-41.6 51.2 0 105.6 3.2 156.8 3.2 48 0 96-3.2 144-3.2 19.2 0 28.8 22.4 28.8 41.6 0 48-57.6 25.6-83.2 41.6-19.2 12.8-19.2 73.6-19.2 92.8v201.6c6.4 3.2 16 3.2 22.4 3.2h400c6.4 0 12.8 0 22.4-3.2V256c0-22.4 0-80-19.2-92.8-28.8-16-86.4 6.4-86.4-41.6 0-16 9.6-41.6 28.8-41.6 51.2 0 99.2 3.2 150.4 3.2 48 0 99.2-3.2 147.2-3.2 19.2 0 28.8 22.4 28.8 41.6 0 51.2-57.6 25.6-86.4 41.6-19.2 12.8-19.2 70.4-19.2 92.8v537.6c0 19.2 0 67.2 19.2 80 28.8 19.2 89.6-6.4 89.6 44.8 0 19.2-6.4 41.6-28.8 41.6z\"></path></svg>";
    readonly tag = "select";
    readonly width = 60;
    getOptions(editor: IDomEditor): IOption[];
    isActive(editor: IDomEditor): boolean;
    /**
     * 获取选中节点的 node.type
     * @param editor editor
     */
    getValue(editor: IDomEditor): string | boolean;
    isDisabled(editor: IDomEditor): boolean;
    /**
     * 执行命令
     * @param editor editor
     * @param value node.type
     */
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default HeaderSelectMenu;
