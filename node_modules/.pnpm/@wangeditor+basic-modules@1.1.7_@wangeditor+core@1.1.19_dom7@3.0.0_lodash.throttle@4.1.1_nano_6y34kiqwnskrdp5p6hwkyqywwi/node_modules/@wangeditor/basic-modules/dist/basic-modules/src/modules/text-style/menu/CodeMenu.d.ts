/**
 * @description code menu
 * @author wangfupeng
 */
import BaseMenu from './BaseMenu';
declare class CodeMenu extends BaseMenu {
    readonly mark = "code";
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1024 1024\"><path d=\"M576 736l96 96 320-320L672 192l-96 96 224 224zM448 288l-96-96L32 512l320 320 96-96-224-224z\"></path></svg>";
    readonly hotkey = "mod+e";
}
export default CodeMenu;
