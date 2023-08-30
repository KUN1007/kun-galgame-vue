/**
 * @description sup menu
 * @author wangfupeng
 */
import BaseMenu from './BaseMenu';
declare class SupMenu extends BaseMenu {
    readonly mark = "sup";
    readonly marksNeedToRemove: string[];
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1024 1024\"><path d=\"M768 206.016v50.016h128v64h-192V174.016l128-60V64h-128V0h192v146.016zM676 256h-136L352 444 164 256H28l256 256-256 256h136L352 580 540 768h136l-256-256z\"></path></svg>";
    readonly hotkey = "";
}
export default SupMenu;
