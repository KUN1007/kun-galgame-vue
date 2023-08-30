/**
 * @description menu interface
 * @author wangfupeng
 */
import { Node } from 'slate';
import { IDomEditor } from '../editor/interface';
import { DOMElement } from '../utils/dom';
export interface IMenuGroup {
    key: string;
    title: string;
    iconSvg?: string;
    menuKeys: string[];
}
export interface IPositionStyle {
    top: string;
    left: string;
    right: string;
    bottom: string;
}
export interface IOption {
    value: string;
    text: string;
    selected?: boolean;
    styleForRenderMenuList?: {
        [key: string]: string;
    };
}
interface IBaseMenu {
    readonly title: string;
    readonly iconSvg?: string;
    readonly hotkey?: string;
    readonly alwaysEnable?: boolean;
    readonly tag: string;
    readonly width?: number;
    getValue: (editor: IDomEditor) => string | boolean;
    isActive: (editor: IDomEditor) => boolean;
    isDisabled: (editor: IDomEditor) => boolean;
    exec: (editor: IDomEditor, value: string | boolean) => void;
}
export interface IButtonMenu extends IBaseMenu {
}
export interface ISelectMenu extends IBaseMenu {
    readonly selectPanelWidth?: number;
    getOptions: (editor: IDomEditor) => IOption[];
}
export interface IDropPanelMenu extends IBaseMenu {
    readonly showDropPanel: boolean;
    getPanelContentElem: (editor: IDomEditor) => DOMElement;
}
export interface IModalMenu extends IBaseMenu {
    readonly showModal: boolean;
    readonly modalWidth: number;
    getModalContentElem: (editor: IDomEditor) => DOMElement;
    getModalPositionNode: (editor: IDomEditor) => Node | null;
}
export declare type MenuFactoryType = () => IButtonMenu | ISelectMenu | IDropPanelMenu | IModalMenu;
export interface IRegisterMenuConf {
    key: string;
    factory: MenuFactoryType;
    config?: {
        [key: string]: any;
    };
}
export {};
