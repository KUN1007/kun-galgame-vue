/**
 * @description font-family menu
 * @author wangfupeng
 */
import { IDomEditor, IOption } from '@wangeditor/core';
import BaseMenu from './BaseMenu';
declare class FontFamilyMenu extends BaseMenu {
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1024 1024\"><path d=\"M956.788364 152.110545h-24.110546l23.924364 9.029819 0.186182 121.018181h-65.070546l-86.574545-130.048H566.551273v650.14691l130.048 64.977454v65.163636h-390.050909v-65.163636l129.954909-64.977454V152.110545H198.283636L111.429818 282.065455H46.545455V69.259636C46.545455 33.792 82.664727 22.062545 98.955636 22.062545h812.683637c23.738182 0 45.056 15.173818 45.056 41.053091V169.425455v-17.221819z\"></path></svg>";
    readonly mark = "fontFamily";
    readonly selectPanelWidth = 150;
    getOptions(editor: IDomEditor): IOption[];
}
export default FontFamilyMenu;
