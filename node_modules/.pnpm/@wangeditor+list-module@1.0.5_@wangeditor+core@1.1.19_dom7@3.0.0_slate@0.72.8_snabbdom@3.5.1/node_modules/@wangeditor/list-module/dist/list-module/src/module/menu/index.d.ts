/**
 * @description menu entry
 * @author wangfupeng
 */
import BulletedListMenu from './BulletedListMenu';
import NumberedListMenu from './NumberedListMenu';
export declare const bulletedListMenuConf: {
    key: string;
    factory(): BulletedListMenu;
};
export declare const numberedListMenuConf: {
    key: string;
    factory(): NumberedListMenu;
};
