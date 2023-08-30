/**
 * @description underline menu
 * @author wangfupeng
 */
import BaseMenu from './BaseMenu';
declare class UnderlineMenu extends BaseMenu {
    readonly mark = "underline";
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1024 1024\"><path d=\"M704 64l128 0 0 416c0 159.072-143.264 288-320 288s-320-128.928-320-288l0-416 128 0 0 416c0 40.16 18.24 78.688 51.36 108.512 36.896 33.216 86.848 51.488 140.64 51.488s103.744-18.304 140.64-51.488c33.12-29.792 51.36-68.352 51.36-108.512l0-416zM192 832l640 0 0 128-640 0z\"></path></svg>";
    readonly hotkey = "mod+u";
}
export default UnderlineMenu;
