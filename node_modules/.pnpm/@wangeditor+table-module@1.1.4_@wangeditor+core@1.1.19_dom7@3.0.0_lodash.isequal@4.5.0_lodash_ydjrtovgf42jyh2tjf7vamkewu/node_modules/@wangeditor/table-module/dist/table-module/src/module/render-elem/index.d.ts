/**
 * @description render elem
 * @author wangfupeng
 */
import renderTable from './render-table';
import renderTableRow from './render-row';
import renderTableCell from './render-cell';
export declare const renderTableConf: {
    type: string;
    renderElem: typeof renderTable;
};
export declare const renderTableRowConf: {
    type: string;
    renderElem: typeof renderTableRow;
};
export declare const renderTableCellConf: {
    type: string;
    renderElem: typeof renderTableCell;
};
