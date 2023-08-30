/**
 * @description menu entry
 * @author wangfupeng
 */
import BoldMenu from './BoldMenu';
import CodeMenu from './CodeMenu';
import ItalicMenu from './ItalicMenu';
import ThroughMenu from './ThroughMenu';
import UnderlineMenu from './UnderlineMenu';
import SubMenu from './SubMenu';
import SupMenu from './SupMenu';
import ClearStyleMenu from './ClearStyleMenu';
export declare const boldMenuConf: {
    key: string;
    factory(): BoldMenu;
};
export declare const codeMenuConf: {
    key: string;
    factory(): CodeMenu;
};
export declare const italicMenuConf: {
    key: string;
    factory(): ItalicMenu;
};
export declare const throughMenuConf: {
    key: string;
    factory(): ThroughMenu;
};
export declare const underlineMenuConf: {
    key: string;
    factory(): UnderlineMenu;
};
export declare const supMenuConf: {
    key: string;
    factory(): SupMenu;
};
export declare const subMenuConf: {
    key: string;
    factory(): SubMenu;
};
export declare const clearStyleMenuConf: {
    key: string;
    factory(): ClearStyleMenu;
};
