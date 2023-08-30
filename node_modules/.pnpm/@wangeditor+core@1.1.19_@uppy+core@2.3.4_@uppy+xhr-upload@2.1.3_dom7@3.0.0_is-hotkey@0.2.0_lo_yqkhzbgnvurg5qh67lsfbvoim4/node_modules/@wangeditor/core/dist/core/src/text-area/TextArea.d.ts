/**
 * @description text-area class
 * @author wangfupeng
 */
import { Dom7Array, DOMElement } from '../utils/dom';
declare class TextArea {
    readonly id: number;
    $box: Dom7Array;
    $textAreaContainer: Dom7Array;
    $scroll: Dom7Array;
    $textArea: Dom7Array | null;
    private readonly $progressBar;
    private readonly $maxLengthInfo;
    isComposing: boolean;
    isUpdatingSelection: boolean;
    isDraggingInternally: boolean;
    latestElement: DOMElement | null;
    showPlaceholder: boolean;
    $placeholder: Dom7Array | null;
    private latestEditorSelection;
    constructor(boxSelector: string | DOMElement);
    private get editorInstance();
    private onDOMSelectionChange;
    /**
     * 绑定事件，如 beforeinput onblur onfocus keydown click copy/paste drag/drop 等
     */
    private bindEvent;
    private onFocusAndOnBlur;
    /**
     * 修改 maxLength 提示信息
     */
    private changeMaxLengthInfo;
    /**
     * 修改进度条
     * @param progress 进度
     */
    changeProgress(progress: number): void;
    /**
     * 修改 view 状态
     */
    changeViewState(): void;
    /**
     * 销毁 textarea
     */
    destroy(): void;
}
export default TextArea;
