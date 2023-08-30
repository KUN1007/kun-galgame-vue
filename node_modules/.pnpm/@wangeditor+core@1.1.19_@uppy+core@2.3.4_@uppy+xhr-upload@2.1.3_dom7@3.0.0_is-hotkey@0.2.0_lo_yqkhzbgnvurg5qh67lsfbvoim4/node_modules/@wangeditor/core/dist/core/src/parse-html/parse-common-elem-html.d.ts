/**
 * @description parse elem html
 * @author wangfupeng
 */
import { Dom7Array } from 'dom7';
import { Element } from 'slate';
import { IDomEditor } from '../editor/interface';
/**
 * 处理普通 DOM elem html ，非 span font 等文本 elem
 * @param $elem $elem
 * @param editor editor
 * @returns slate element
 */
declare function parseCommonElemHtml($elem: Dom7Array, editor: IDomEditor): Element[];
export default parseCommonElemHtml;
