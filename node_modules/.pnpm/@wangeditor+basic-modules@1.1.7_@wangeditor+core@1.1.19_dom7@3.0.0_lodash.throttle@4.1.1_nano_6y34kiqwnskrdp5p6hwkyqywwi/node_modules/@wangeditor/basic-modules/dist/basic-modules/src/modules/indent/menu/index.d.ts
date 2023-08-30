/**
 * @description indent menu entry
 * @author wangfupeng
 */
import DecreaseIndentMenu from './DecreaseIndentMenu';
import IncreaseIndentMenu from './IncreaseIndentMenu';
export declare const indentMenuConf: {
    key: string;
    factory(): IncreaseIndentMenu;
};
export declare const delIndentMenuConf: {
    key: string;
    factory(): DecreaseIndentMenu;
};
