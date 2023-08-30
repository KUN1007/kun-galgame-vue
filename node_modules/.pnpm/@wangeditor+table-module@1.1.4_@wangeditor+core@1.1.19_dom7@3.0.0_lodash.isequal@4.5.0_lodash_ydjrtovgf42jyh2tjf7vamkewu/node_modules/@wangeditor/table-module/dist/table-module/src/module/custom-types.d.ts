/**
 * @description 自定义 element
 * @author wangfupeng
 */
import { Text } from 'slate';
export declare type TableCellElement = {
    type: 'table-cell';
    isHeader?: boolean;
    colSpan?: number;
    rowSpan?: number;
    width?: string;
    children: Text[];
};
export declare type TableRowElement = {
    type: 'table-row';
    children: TableCellElement[];
};
export declare type TableElement = {
    type: 'table';
    width: string;
    children: TableRowElement[];
};
