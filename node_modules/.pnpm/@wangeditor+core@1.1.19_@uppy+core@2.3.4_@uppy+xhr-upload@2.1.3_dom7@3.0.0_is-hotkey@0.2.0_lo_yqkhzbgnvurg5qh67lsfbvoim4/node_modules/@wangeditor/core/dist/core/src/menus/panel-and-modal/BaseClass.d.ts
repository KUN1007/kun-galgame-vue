/**
 * @description panel modal baseClass
 * @author wangfupeng
 */
import { IDomEditor } from '../../editor/interface';
import { Dom7Array, DOMElement } from '../../utils/dom';
declare abstract class PanelAndModal {
    abstract readonly type: string;
    abstract readonly $elem: Dom7Array;
    isShow: boolean;
    private showTime;
    constructor(editor: IDomEditor);
    /**
     * 记录下来，以便隐藏，API editor.hidePanelOrModal
     */
    private record;
    /**
     * 除了 content 之外的其他自己要增加的 elem
     */
    abstract genSelfElem(): Dom7Array | null;
    renderContent(contentElem: DOMElement): void;
    appendTo($menuElem: Dom7Array): void;
    show(): void;
    hide(): void;
}
export default PanelAndModal;
