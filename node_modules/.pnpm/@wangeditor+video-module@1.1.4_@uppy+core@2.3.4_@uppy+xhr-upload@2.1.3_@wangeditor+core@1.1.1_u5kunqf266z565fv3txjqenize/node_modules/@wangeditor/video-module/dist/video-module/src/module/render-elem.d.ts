/**
 * @description video render elem
 * @author wangfupeng
 */
import { Element } from 'slate';
import { VNode } from 'snabbdom';
import { IDomEditor } from '@wangeditor/core';
declare function renderVideo(elemNode: Element, children: VNode[] | null, editor: IDomEditor): VNode;
declare const renderVideoConf: {
    type: string;
    renderElem: typeof renderVideo;
};
export { renderVideoConf };
