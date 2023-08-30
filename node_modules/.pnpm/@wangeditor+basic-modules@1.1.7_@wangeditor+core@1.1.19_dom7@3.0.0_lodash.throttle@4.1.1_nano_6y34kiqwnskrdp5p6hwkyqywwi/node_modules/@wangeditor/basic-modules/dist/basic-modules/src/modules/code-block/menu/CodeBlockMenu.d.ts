/**
 * @description insert code-block menu
 * @author wangfupeng
 */
import { IButtonMenu, IDomEditor } from '@wangeditor/core';
declare class CodeBlockMenu implements IButtonMenu {
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1280 1024\"><path d=\"M832 736l96 96 320-320L928 192l-96 96 224 224zM448 288l-96-96L32 512l320 320 96-96-224-224zM701.312 150.528l69.472 18.944-192 704.032-69.472-18.944 192-704.032z\"></path></svg>";
    readonly tag = "button";
    private getSelectCodeElem;
    /**
     * 获取语言类型
     * @param editor editor
     */
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
    private changeToPlainText;
    private changeToCodeBlock;
}
export default CodeBlockMenu;
