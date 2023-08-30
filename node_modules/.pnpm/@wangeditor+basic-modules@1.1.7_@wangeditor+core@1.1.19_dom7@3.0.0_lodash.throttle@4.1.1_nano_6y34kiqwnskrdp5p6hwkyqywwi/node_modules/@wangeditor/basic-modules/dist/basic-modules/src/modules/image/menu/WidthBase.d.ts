/**
 * @description image width base class
 * @author wangfupeng
 */
import { IButtonMenu, IDomEditor } from '@wangeditor/core';
declare abstract class ImageWidthBaseClass implements IButtonMenu {
    abstract readonly title: string;
    readonly tag = "button";
    abstract readonly value: string;
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    private getSelectedNode;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default ImageWidthBaseClass;
