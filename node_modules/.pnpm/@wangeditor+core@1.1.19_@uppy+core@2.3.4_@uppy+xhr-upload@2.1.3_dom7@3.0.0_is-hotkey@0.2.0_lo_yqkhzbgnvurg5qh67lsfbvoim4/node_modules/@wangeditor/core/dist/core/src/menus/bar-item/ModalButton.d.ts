/**
 * @description modal button class
 * @author wangfupeng
 */
import { IModalMenu } from '../interface';
import BaseButton from './BaseButton';
declare class ModalButton extends BaseButton {
    private $body;
    private modal;
    menu: IModalMenu;
    constructor(key: string, menu: IModalMenu, inGroup?: boolean);
    onButtonClick(): void;
    /**
     * 获取 modal 定位
     */
    private getPosition;
    private handleModal;
    /**
     * 渲染并显示 modal
     * @param modal modal
     * @param firstTime 是否第一次显示 modal
     */
    private renderAndShowModal;
}
export default ModalButton;
