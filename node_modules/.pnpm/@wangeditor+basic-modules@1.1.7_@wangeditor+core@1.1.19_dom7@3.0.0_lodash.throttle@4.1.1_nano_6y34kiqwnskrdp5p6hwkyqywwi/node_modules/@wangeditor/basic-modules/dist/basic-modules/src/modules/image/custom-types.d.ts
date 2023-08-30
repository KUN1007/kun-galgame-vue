/**
 * @description image element
 * @author wangfupeng
 */
declare type EmptyText = {
    text: '';
};
export declare type ImageStyle = {
    width?: string;
    height?: string;
};
export declare type ImageElement = {
    type: 'image';
    src: string;
    alt?: string;
    href?: string;
    style?: ImageStyle;
    children: EmptyText[];
};
export {};
