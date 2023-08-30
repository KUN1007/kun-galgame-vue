/**
 * @description group button class
 * @author wangfupeng
 */
import { Dom7Array } from '../../utils/dom';
import { IMenuGroup } from '../interface';
import { IBarItem } from './index';
declare class GroupButton {
    readonly $elem: Dom7Array;
    private readonly $container;
    readonly $button: Dom7Array;
    constructor(menu: IMenuGroup);
    appendBarItem(barItem: IBarItem): void;
    private observe;
    private createObserver;
}
export default GroupButton;
