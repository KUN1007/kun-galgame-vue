/**
 * @description dropPanel button class
 * @author wangfupeng
 */
import { IDropPanelMenu } from '../interface';
import BaseButton from './BaseButton';
declare class DropPanelButton extends BaseButton {
    private dropPanel;
    menu: IDropPanelMenu;
    constructor(key: string, menu: IDropPanelMenu, inGroup?: boolean);
    onButtonClick(): void;
    private handleDropPanel;
}
export default DropPanelButton;
