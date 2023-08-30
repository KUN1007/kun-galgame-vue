/**
 * @description menu entry
 * @author wangfupeng
 */
import ColorMenu from './ColorMenu';
import BgColorMenu from './BgColorMenu';
export declare const colorMenuConf: {
    key: string;
    factory(): ColorMenu;
    config: {
        colors: string[];
    };
};
export declare const bgColorMenuConf: {
    key: string;
    factory(): BgColorMenu;
    config: {
        colors: string[];
    };
};
