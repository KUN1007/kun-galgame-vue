/**
 * @description classic toolbar
 * @author wangfupeng
 */
import { Dom7Array, DOMElement } from '../../utils/dom';
import { IButtonMenu, ISelectMenu, IDropPanelMenu, IModalMenu } from '../interface';
import { IToolbarConfig } from '../../config/interface';
declare type MenuType = IButtonMenu | ISelectMenu | IDropPanelMenu | IModalMenu;
declare class Toolbar {
    $box: Dom7Array;
    private readonly $toolbar;
    private menus;
    private toolbarItems;
    private config;
    constructor(boxSelector: string | DOMElement, config: Partial<IToolbarConfig>);
    getMenus(): {
        [key: string]: MenuType;
    };
    getConfig(): Partial<IToolbarConfig>;
    private registerItems;
    private registerGroup;
    private registerSingleItem;
    private getEditorInstance;
    /**
     * editor onChange 时触发（涉及 DOM 操作，加防抖）
     */
    changeToolbarState: any;
    /**
     * 销毁 toolbar
     */
    destroy(): void;
}
export default Toolbar;
