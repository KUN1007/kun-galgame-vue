/**
 * @description list element
 * @author wangfupeng
 */
import { Text } from 'slate';
export declare type ListItemElement = {
    type: 'list-item';
    ordered: boolean;
    level: number;
    children: Text[];
};
