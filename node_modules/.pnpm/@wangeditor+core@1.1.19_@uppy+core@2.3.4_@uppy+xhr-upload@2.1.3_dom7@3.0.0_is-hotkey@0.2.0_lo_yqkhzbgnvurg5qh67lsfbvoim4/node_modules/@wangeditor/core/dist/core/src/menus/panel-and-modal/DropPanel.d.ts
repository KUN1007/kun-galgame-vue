/**
 * @description dropPanel class
 * @author wangfupeng
 */
import { IDomEditor } from '../../editor/interface';
import { Dom7Array } from '../../utils/dom';
import PanelAndModal from './BaseClass';
declare class DropPanel extends PanelAndModal {
    type: string;
    readonly $elem: Dom7Array;
    constructor(editor: IDomEditor);
    genSelfElem(): Dom7Array | null;
}
export default DropPanel;
