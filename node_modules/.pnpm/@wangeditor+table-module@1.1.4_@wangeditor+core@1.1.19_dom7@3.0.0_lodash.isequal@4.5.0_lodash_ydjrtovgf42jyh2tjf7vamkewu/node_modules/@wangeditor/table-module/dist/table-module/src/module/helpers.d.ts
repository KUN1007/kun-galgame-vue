/**
 * @description table menu helpers
 * @author wangfupeng
 */
import { IDomEditor } from '@wangeditor/core';
import { TableElement, TableCellElement } from './custom-types';
/**
 * 获取第一行所有 cells
 * @param tableNode table node
 */
export declare function getFirstRowCells(tableNode: TableElement): TableCellElement[];
/**
 * 表格是否带有表头？
 * @param tableNode table node
 */
export declare function isTableWithHeader(tableNode: TableElement): boolean;
/**
 * 单元格是否在第一行
 * @param editor editor
 * @param cellNode cell node
 */
export declare function isCellInFirstRow(editor: IDomEditor, cellNode: TableCellElement): boolean;
