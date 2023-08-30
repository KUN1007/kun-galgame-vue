/**
 * @description parse node html
 * @author wangfupeng
 */
import { Dom7Array } from 'dom7';
import { Descendant } from 'slate';
import { IDomEditor } from '../editor/interface';
/**
 * 处理 DOM Elem html
 * @param $elem $elem
 * @param editor editor
 * @returns slate Descendant
 */
declare function parseElemHtml($elem: Dom7Array, editor: IDomEditor): Descendant | Descendant[];
export default parseElemHtml;
