/**
 * @description elem -> html
 * @author wangfupeng
 */
import { Element } from 'slate';
import { IDomEditor } from '../editor/interface';
declare function elemToHtml(elemNode: Element, editor: IDomEditor): string;
export default elemToHtml;
