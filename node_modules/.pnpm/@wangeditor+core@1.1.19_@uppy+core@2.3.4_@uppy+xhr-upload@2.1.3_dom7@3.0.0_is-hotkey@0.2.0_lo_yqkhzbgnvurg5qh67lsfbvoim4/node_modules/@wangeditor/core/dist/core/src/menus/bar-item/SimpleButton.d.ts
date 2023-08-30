/**
 * @description button class
 * @author wangfupeng
 */
import { IButtonMenu } from '../interface';
import BaseButton from './BaseButton';
declare class SimpleButton extends BaseButton {
    constructor(key: string, menu: IButtonMenu, inGroup?: boolean);
    onButtonClick(): void;
}
export default SimpleButton;
