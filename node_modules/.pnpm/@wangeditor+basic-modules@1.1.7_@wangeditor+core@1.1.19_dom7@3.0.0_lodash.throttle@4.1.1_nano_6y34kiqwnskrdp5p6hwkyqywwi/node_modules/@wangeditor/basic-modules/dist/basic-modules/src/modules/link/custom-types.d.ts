/**
 * @description 自定义 element
 * @author wangfupeng
 */
import { Text } from 'slate';
export declare type LinkElement = {
    type: 'link';
    url: string;
    target?: string;
    children: Text[];
};
