/**
 * @description editor entry
 * @author wangfupeng
 */
import './assets/index.less';
import '@wangeditor/core/dist/css/style.css';
import './utils/browser-polyfill';
import './utils/node-polyfill';
import './locale/index';
import './register-builtin-modules/index';
import './init-default-config';
import Boot from './Boot';
export { Boot };
export { DomEditor, IDomEditor, IEditorConfig, IToolbarConfig, Toolbar, IModuleConf, IButtonMenu, ISelectMenu, IDropPanelMenu, IModalMenu, i18nChangeLanguage, i18nAddResources, i18nGetResources, t, genModalTextareaElems, genModalInputElems, genModalButtonElems, createUploader, IUploadConfig, } from '@wangeditor/core';
export { Transforms as SlateTransforms, Descendant as SlateDescendant, Editor as SlateEditor, Node as SlateNode, Element as SlateElement, Text as SlateText, Path as SlatePath, Range as SlateRange, Location as SlateLocation, Point as SlatePoint, } from 'slate';
export { createEditor, createToolbar } from './create';
declare const _default: {};
export default _default;
