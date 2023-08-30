/**
 * @description italic menu
 * @author wangfupeng
 */
import BaseMenu from './BaseMenu';
declare class ItalicMenu extends BaseMenu {
    readonly mark = "italic";
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1024 1024\"><path d=\"M896 64v64h-128L448 896h128v64H128v-64h128L576 128h-128V64z\"></path></svg>";
    readonly hotkey = "mod+i";
}
export default ItalicMenu;
