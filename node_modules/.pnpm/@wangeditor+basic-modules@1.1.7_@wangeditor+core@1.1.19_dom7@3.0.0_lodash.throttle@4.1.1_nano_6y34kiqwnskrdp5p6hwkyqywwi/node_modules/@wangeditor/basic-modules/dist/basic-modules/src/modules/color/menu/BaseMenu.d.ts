/**
 * @description color base menu
 * @author wangfupeng
 */
import { IDropPanelMenu, IDomEditor } from '@wangeditor/core';
import { DOMElement } from '../../../utils/dom';
declare abstract class BaseMenu implements IDropPanelMenu {
    abstract readonly title: string;
    abstract readonly iconSvg: string;
    readonly tag = "button";
    readonly showDropPanel = true;
    protected abstract readonly mark: string;
    private $content;
    exec(editor: IDomEditor, value: string | boolean): void;
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    getPanelContentElem(editor: IDomEditor): DOMElement;
}
export default BaseMenu;
