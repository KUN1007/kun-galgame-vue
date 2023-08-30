/**
 * @description font-size menu
 * @author wangfupeng
 */
import { IDomEditor, IOption } from '@wangeditor/core';
import BaseMenu from './BaseMenu';
declare class FontSizeMenu extends BaseMenu {
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1024 1024\"><path d=\"M64 512h384v128h-128V1024h-128V640h-128z m896-256H708.2496v768h-136.4992V256H320V128h640z\"></path></svg>";
    readonly mark = "fontSize";
    getOptions(editor: IDomEditor): IOption[];
}
export default FontSizeMenu;
