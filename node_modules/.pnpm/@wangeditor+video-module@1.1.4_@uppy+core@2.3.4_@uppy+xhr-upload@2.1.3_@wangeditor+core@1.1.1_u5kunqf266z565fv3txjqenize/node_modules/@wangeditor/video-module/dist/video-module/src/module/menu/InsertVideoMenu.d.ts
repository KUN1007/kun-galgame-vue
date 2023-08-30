/**
 * @description insert video menu
 * @author wangfupeng
 */
import { Node } from 'slate';
import { IModalMenu, IDomEditor } from '@wangeditor/core';
import { DOMElement } from '../../utils/dom';
declare class InsertVideoMenu implements IModalMenu {
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1024 1024\"><path d=\"M981.184 160.096C837.568 139.456 678.848 128 512 128S186.432 139.456 42.816 160.096C15.296 267.808 0 386.848 0 512s15.264 244.16 42.816 351.904C186.464 884.544 345.152 896 512 896s325.568-11.456 469.184-32.096C1008.704 756.192 1024 637.152 1024 512s-15.264-244.16-42.816-351.904zM384 704V320l320 192-320 192z\"></path></svg>";
    readonly tag = "button";
    readonly showModal = true;
    readonly modalWidth = 320;
    private $content;
    private readonly srcInputId;
    private readonly posterInputId;
    private readonly buttonId;
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
    isDisabled(editor: IDomEditor): boolean;
    getModalPositionNode(editor: IDomEditor): Node | null;
    getModalContentElem(editor: IDomEditor): DOMElement;
}
export default InsertVideoMenu;
