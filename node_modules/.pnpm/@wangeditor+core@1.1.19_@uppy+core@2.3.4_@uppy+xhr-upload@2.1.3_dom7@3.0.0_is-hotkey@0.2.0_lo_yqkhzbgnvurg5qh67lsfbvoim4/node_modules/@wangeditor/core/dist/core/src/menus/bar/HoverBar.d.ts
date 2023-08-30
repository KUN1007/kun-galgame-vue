/**
 * @description hover bar class
 * @author wangfupeng
 */
import { IButtonMenu, ISelectMenu, IDropPanelMenu, IModalMenu } from '../interface';
declare type MenuType = IButtonMenu | ISelectMenu | IDropPanelMenu | IModalMenu;
declare class HoverBar {
    private readonly $elem;
    private menus;
    private hoverbarItems;
    private prevSelectedNode;
    private isShow;
    constructor();
    getMenus(): {
        [key: string]: MenuType;
    };
    hideAndClean(): void;
    /**
     * 判断 hoverbar 是否在网页下部？
     * 如果是，SelectList 和 DropPanel 要显示在 hoverbar 上面
     */
    private checkPositionBottom;
    private show;
    private changeItemsState;
    private registerItems;
    private registerSingleItem;
    private setPosition;
    /**
     * 获取选中的 node ，以及对应的 menu keys
     */
    private getSelectedNodeAndMenuKeys;
    /**
     * editor onChange 时触发（涉及 DOM 操作，加防抖）
     */
    changeHoverbarState: any;
    private getEditorInstance;
    private getHoverbarKeysConf;
    /**
     * 检查两个 node 是否 path 相等
     */
    private isSamePath;
    /**
     * 销毁 hoverbar
     */
    destroy(): void;
}
export default HoverBar;
