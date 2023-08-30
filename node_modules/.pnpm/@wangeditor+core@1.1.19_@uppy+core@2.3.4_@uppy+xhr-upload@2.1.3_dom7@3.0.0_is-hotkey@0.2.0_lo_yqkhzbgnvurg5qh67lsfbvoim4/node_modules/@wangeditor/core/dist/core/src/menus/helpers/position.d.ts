/**
 * @description menu position helpers
 * @author wangfupeng
 */
import { Node } from 'slate';
import { Dom7Array } from '../../utils/dom';
import { IDomEditor } from '../../editor/interface';
import { IPositionStyle } from '../interface';
/**
 * 获取 textContainer 尺寸和定位
 * @param editor editor
 */
export declare function getTextContainerRect(editor: IDomEditor): {
    top: number;
    left: number;
    width: number;
    height: number;
} | null;
/**
 * 根据选区，计算定位（用于 modal hoverbar）
 * @param editor editor
 */
export declare function getPositionBySelection(editor: IDomEditor): Partial<IPositionStyle>;
/**
 * 根据 node ，计算定位（用于 modal hoverbar）
 * @param editor editor
 * @param node slate node
 * @param type 'modal'/'bar'
 */
export declare function getPositionByNode(editor: IDomEditor, node: Node, type?: string): Partial<IPositionStyle>;
/**
 * 异步修正 position ，不能超出 textContainer 边界
 * @param editor editor
 * @param $positionElem modal/bar
 */
export declare function correctPosition(editor: IDomEditor, $positionElem: Dom7Array): void;
