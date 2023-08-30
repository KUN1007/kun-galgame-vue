/**
 * @description table menu
 * @author wangfupeng
 */
import InsertTable from './InsertTable';
import DeleteTable from './DeleteTable';
import InsertRow from './InsertRow';
import DeleteRow from './DeleteRow';
import InsertCol from './InsertCol';
import DeleteCol from './DeleteCol';
import TableHander from './TableHeader';
import FullWidth from './FullWidth';
export declare const insertTableMenuConf: {
    key: string;
    factory(): InsertTable;
};
export declare const deleteTableMenuConf: {
    key: string;
    factory(): DeleteTable;
};
export declare const insertTableRowConf: {
    key: string;
    factory(): InsertRow;
};
export declare const deleteTableRowConf: {
    key: string;
    factory(): DeleteRow;
};
export declare const insertTableColConf: {
    key: string;
    factory(): InsertCol;
};
export declare const deleteTableColConf: {
    key: string;
    factory(): DeleteCol;
};
export declare const tableHeaderMenuConf: {
    key: string;
    factory(): TableHander;
};
export declare const tableFullWidthMenuConf: {
    key: string;
    factory(): FullWidth;
};
