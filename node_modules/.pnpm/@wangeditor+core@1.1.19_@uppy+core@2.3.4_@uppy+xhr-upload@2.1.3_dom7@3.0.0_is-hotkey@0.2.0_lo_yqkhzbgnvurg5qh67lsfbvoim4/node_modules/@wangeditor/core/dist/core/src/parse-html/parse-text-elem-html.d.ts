/**
 * @description parse text html
 * @author wangfupeng
 */
import { Dom7Array } from 'dom7';
import { Text } from 'slate';
import { IDomEditor } from '../editor/interface';
/**
 * 处理 text elem ，如 <span> <strong> <em> 等（并不是 DOM Text Node）
 * @param $text $text
 * @param editor editor
 * @returns slate text
 */
declare function parseTextElemHtml($text: Dom7Array, editor: IDomEditor): Text;
export default parseTextElemHtml;
