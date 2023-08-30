/**
 * @description insert table menu
 * @author wangfupeng
 */
import { IDropPanelMenu, IDomEditor } from '@wangeditor/core';
import { DOMElement } from '../../utils/dom';
declare class InsertTable implements IDropPanelMenu {
    title: string;
    iconSvg: string;
    tag: string;
    showDropPanel: boolean;
    private $content;
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
    isDisabled(editor: IDomEditor): boolean;
    /**
     *  获取 panel 内容
     * @param editor editor
     */
    getPanelContentElem(editor: IDomEditor): DOMElement;
    private insertTable;
}
export default InsertTable;
