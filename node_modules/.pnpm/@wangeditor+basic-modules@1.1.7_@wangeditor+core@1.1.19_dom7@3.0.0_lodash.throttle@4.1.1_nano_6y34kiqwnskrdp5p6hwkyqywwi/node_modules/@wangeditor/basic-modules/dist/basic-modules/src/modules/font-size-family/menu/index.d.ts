/**
 * @description font-size font-family menu entry
 * @author wangfupeng
 */
import FontSizeMenu from './FontSizeMenu';
import FontFamilyMenu from './FontFamilyMenu';
export declare const fontSizeMenuConf: {
    key: string;
    factory(): FontSizeMenu;
    config: {
        fontSizeList: (string | {
            name: string;
            value: string;
        })[];
    };
};
export declare const fontFamilyMenuConf: {
    key: string;
    factory(): FontFamilyMenu;
    config: {
        fontFamilyList: (string | {
            name: string;
            value: string;
        })[];
    };
};
