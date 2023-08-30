/**
 * @description bulleted list menu
 * @author wangfupeng
 */
import BaseMenu from './BaseMenu';
declare class BulletedListMenu extends BaseMenu {
    readonly ordered = false;
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1024 1024\"><path d=\"M384 64h640v128H384V64z m0 384h640v128H384v-128z m0 384h640v128H384v-128zM0 128a128 128 0 1 1 256 0 128 128 0 0 1-256 0z m0 384a128 128 0 1 1 256 0 128 128 0 0 1-256 0z m0 384a128 128 0 1 1 256 0 128 128 0 0 1-256 0z\"></path></svg>";
}
export default BulletedListMenu;
