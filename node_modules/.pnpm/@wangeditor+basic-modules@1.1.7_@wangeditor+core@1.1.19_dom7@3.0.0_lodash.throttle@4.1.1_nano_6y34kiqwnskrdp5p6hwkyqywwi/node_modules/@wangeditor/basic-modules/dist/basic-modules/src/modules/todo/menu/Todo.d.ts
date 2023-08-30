/**
 * @description Todo menu
 * @author wangfupeng
 */
import { IButtonMenu, IDomEditor } from '@wangeditor/core';
declare class TodoMenu implements IButtonMenu {
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1024 1024\"><path d=\"M278.755556 403.911111l-79.644445 79.644445L455.111111 739.555556l568.888889-568.888889-79.644444-79.644445L455.111111 580.266667l-176.355555-176.355556zM910.222222 910.222222H113.777778V113.777778h568.888889V0H113.777778C51.2 0 0 51.2 0 113.777778v796.444444c0 62.577778 51.2 113.777778 113.777778 113.777778h796.444444c62.577778 0 113.777778-51.2 113.777778-113.777778V455.111111h-113.777778v455.111111z\"></path></svg>";
    readonly tag = "button";
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default TodoMenu;
