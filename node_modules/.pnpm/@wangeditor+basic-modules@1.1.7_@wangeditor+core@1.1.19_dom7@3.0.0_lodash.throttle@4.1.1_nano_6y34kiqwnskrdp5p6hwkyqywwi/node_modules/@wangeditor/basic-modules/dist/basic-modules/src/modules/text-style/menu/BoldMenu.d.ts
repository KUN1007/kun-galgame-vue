/**
 * @description bold menu
 * @author wangfupeng
 */
import BaseMenu from './BaseMenu';
declare class BoldMenu extends BaseMenu {
    readonly mark = "bold";
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1024 1024\"><path d=\"M707.872 484.64A254.88 254.88 0 0 0 768 320c0-141.152-114.848-256-256-256H192v896h384c141.152 0 256-114.848 256-256a256.096 256.096 0 0 0-124.128-219.36zM384 192h101.504c55.968 0 101.504 57.408 101.504 128s-45.536 128-101.504 128H384V192z m159.008 640H384v-256h159.008c58.464 0 106.016 57.408 106.016 128s-47.552 128-106.016 128z\"></path></svg>";
    readonly hotkey = "mod+b";
}
export default BoldMenu;
