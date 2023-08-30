/**
 * @description numbered list menu
 * @author wangfupeng
 */
import BaseMenu from './BaseMenu';
declare class NumberedListMenu extends BaseMenu {
    readonly ordered = true;
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1024 1024\"><path d=\"M384 832h640v128H384z m0-384h640v128H384z m0-384h640v128H384zM192 0v256H128V64H64V0zM128 526.016v50.016h128v64H64v-146.016l128-60V384H64v-64h192v146.016zM256 704v320H64v-64h128v-64H64v-64h128v-64H64v-64z\"></path></svg>";
}
export default NumberedListMenu;
