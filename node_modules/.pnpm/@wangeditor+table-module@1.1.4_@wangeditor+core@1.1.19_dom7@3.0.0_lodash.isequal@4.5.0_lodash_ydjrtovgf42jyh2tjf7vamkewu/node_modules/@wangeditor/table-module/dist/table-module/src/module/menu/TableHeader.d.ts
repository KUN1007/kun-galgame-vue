/**
 * @description table header menu
 * @author wangfupeng
 */
import { IButtonMenu, IDomEditor } from '@wangeditor/core';
declare class TableHeader implements IButtonMenu {
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1024 1024\"><path d=\"M704 128l-64 0L384 128 320 128 0 128l0 256 0 64 0 192 0 64 0 256 320 0 64 0 256 0 64 0 320 0 0-256 0-64L1024 448 1024 384 1024 128 704 128zM640 640 384 640 384 448l256 0L640 640zM64 448l256 0 0 192L64 640 64 448zM320 896 64 896l0-192 256 0L320 896zM640 896 384 896l0-192 256 0L640 896zM960 896l-256 0 0-192 256 0L960 896zM960 640l-256 0L704 448l256 0L960 640z\"></path></svg>";
    readonly tag = "button";
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default TableHeader;
