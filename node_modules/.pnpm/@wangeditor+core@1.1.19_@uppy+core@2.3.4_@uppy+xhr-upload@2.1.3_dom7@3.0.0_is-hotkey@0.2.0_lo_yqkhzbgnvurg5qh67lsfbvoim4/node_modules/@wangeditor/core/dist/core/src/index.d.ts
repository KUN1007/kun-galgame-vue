/**
 * @description core index
 * @author wangfupeng
 */
import './assets/index.less';
import { RenderStyleFnType, IRenderElemConf } from './render/index';
import { styleToHtmlFnType, IElemToHtmlConf } from './to-html/index';
import { IPreParseHtmlConf, ParseStyleHtmlFnType, IParseElemHtmlConf } from './parse-html/index';
import { IRegisterMenuConf } from './menus/index';
import { IDomEditor } from './editor/interface';
export * from './create/index';
export { IEditorConfig, IToolbarConfig } from './config/interface';
export * from './editor/interface';
export * from './editor/dom-editor';
export * from './render/index';
export * from './to-html/index';
export * from './parse-html/index';
export * from './menus/index';
export * from './upload/index';
export * from './i18n/index';
export interface IModuleConf {
    menus: Array<IRegisterMenuConf>;
    renderStyle: RenderStyleFnType;
    renderElems: Array<IRenderElemConf>;
    styleToHtml: styleToHtmlFnType;
    elemsToHtml: Array<IElemToHtmlConf>;
    preParseHtml: Array<IPreParseHtmlConf>;
    parseStyleHtml: ParseStyleHtmlFnType;
    parseElemsHtml: Array<IParseElemHtmlConf>;
    editorPlugin: <T extends IDomEditor>(editor: T) => T;
}
