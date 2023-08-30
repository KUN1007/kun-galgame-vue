/**
 * @description sub menu
 * @author wangfupeng
 */
import BaseMenu from './BaseMenu';
declare class SubMenu extends BaseMenu {
    readonly mark = "sub";
    readonly marksNeedToRemove: string[];
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1024 1024\"><path d=\"M768 910.016v50.016h128v64h-192v-146.016l128-60V768h-128v-64h192v146.016zM676 256h-136L352 444 164 256H28l256 256-256 256h136L352 580 540 768h136l-256-256z\"></path></svg>";
    readonly hotkey = "";
}
export default SubMenu;
