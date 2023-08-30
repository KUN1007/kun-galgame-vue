/**
 * @description 自定义 element
 * @author wangfupeng
 */
import { Text } from 'slate';
export declare type IndentElement = {
    type: string;
    indent?: string | null;
    children: Text[];
};
