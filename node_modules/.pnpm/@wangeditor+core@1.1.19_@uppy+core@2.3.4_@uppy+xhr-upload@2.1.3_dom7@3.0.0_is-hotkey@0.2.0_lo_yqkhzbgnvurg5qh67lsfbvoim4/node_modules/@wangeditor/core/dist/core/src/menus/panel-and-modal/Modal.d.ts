/**
 * @description modal class
 * @author wangfupeng
 */
import { Dom7Array, DOMElement } from '../../utils/dom';
import { IPositionStyle } from '../interface';
import PanelAndModal from './BaseClass';
import { IDomEditor } from '../../editor/interface';
declare class Modal extends PanelAndModal {
    type: string;
    readonly $elem: Dom7Array;
    private width;
    constructor(editor: IDomEditor, width?: number);
    /**
     * 生成要添加到 modal $elem 的元素
     * 【注意】不要直接 append 到 modal $elem ，因为它每次都会清空 html('')
     */
    genSelfElem(): Dom7Array | null;
    setStyle(positionStyle: Partial<IPositionStyle>): void;
}
export default Modal;
/**
 * 生成 modal input elems
 * @param labelText label text
 * @param inputId input dom id
 * @param placeholder input placeholder
 * @returns [$container, $input]
 */
export declare function genModalInputElems(labelText: string, inputId: string, placeholder?: string): DOMElement[];
/**
 * 生成 modal textarea elems
 * @param labelText label text
 * @param textareaId input dom id
 * @param placeholder input placeholder
 * @returns [$container, $textarea]
 */
export declare function genModalTextareaElems(labelText: string, textareaId: string, placeholder?: string): DOMElement[];
/**
 * 生成 modal button elems
 * @param buttonId button dom id
 * @param buttonText button text
 * @returns [ $container, $button ]
 */
export declare function genModalButtonElems(buttonId: string, buttonText: string): DOMElement[];
