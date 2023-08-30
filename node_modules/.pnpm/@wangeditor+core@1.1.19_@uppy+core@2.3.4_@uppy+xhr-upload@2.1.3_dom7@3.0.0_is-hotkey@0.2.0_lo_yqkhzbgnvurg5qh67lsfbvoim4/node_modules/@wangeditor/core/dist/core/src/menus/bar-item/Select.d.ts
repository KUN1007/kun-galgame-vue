/**
 * @description select
 * @author wangfupeng
 */
import { Dom7Array } from '../../utils/dom';
import { IBarItem } from './index';
import { ISelectMenu } from '../interface';
declare class BarItemSelect implements IBarItem {
    readonly $elem: Dom7Array;
    private readonly $button;
    menu: ISelectMenu;
    private disabled;
    private selectList;
    constructor(key: string, menu: ISelectMenu, inGroup?: boolean);
    private init;
    private trigger;
    private onChange;
    private setSelectedValue;
    private setDisabled;
    changeMenuState(): void;
}
export default BarItemSelect;
