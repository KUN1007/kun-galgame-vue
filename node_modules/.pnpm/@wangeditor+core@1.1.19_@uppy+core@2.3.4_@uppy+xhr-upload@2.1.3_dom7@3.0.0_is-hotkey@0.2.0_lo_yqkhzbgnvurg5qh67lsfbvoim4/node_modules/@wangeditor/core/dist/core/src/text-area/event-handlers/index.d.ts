/**
 * @description textarea event handlers entry
 * @author wangfupeng
 */
import handleBeforeInput from './beforeInput';
import handleOnBlur from './blur';
import handleOnFocus from './focus';
import handleOnClick from './click';
import { handleCompositionStart, handleCompositionEnd, handleCompositionUpdate } from './composition';
import handleOnKeydown from './keydown';
import handleKeypress from './keypress';
import handleOnCopy from './copy';
import handleOnCut from './cut';
import handleOnPaste from './paste';
import { handleOnDragover, handleOnDragstart, handleOnDragend } from './drag';
import handleOnDrop from './drop';
declare const eventConf: {
    beforeinput: typeof handleBeforeInput;
    blur: typeof handleOnBlur;
    focus: typeof handleOnFocus;
    click: typeof handleOnClick;
    compositionstart: typeof handleCompositionStart;
    compositionend: typeof handleCompositionEnd;
    compositionupdate: typeof handleCompositionUpdate;
    keydown: typeof handleOnKeydown;
    keypress: typeof handleKeypress;
    copy: typeof handleOnCopy;
    cut: typeof handleOnCut;
    paste: typeof handleOnPaste;
    dragover: typeof handleOnDragover;
    dragstart: typeof handleOnDragstart;
    dragend: typeof handleOnDragend;
    drop: typeof handleOnDrop;
};
export default eventConf;
