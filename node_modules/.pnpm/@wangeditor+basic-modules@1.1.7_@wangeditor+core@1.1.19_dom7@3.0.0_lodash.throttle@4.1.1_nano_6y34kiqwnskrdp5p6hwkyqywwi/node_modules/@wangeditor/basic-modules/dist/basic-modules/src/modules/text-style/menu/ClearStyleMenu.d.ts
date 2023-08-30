/**
 * @description clear style menu
 * @author wangfupeng
 */
import { IButtonMenu, IDomEditor } from '@wangeditor/core';
declare class ClearStyleMenu implements IButtonMenu {
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1024 1024\"><path d=\"M969.382408 288.738615l-319.401123-270.852152a67.074236 67.074236 0 0 0-96.459139 5.74922l-505.931379 574.922021a68.35184 68.35184 0 0 0-17.886463 47.910169 74.101061 74.101061 0 0 0 24.274486 47.910168l156.50655 132.232065h373.060512L975.131628 383.281347a67.074236 67.074236 0 0 0-5.74922-96.459139z m-440.134747 433.746725H264.144729l-90.071117-78.572676c-5.74922-5.74922-12.137243-12.137243-12.137243-17.886463a36.411728 36.411728 0 0 1 5.749221-24.274485l210.804741-240.828447 265.102932 228.691204z m-439.495945 180.781036h843.218964a60.047411 60.047411 0 1 1 0 120.733624H89.751716a60.047411 60.047411 0 1 1 0-120.733624z m0 0\"></path></svg>";
    readonly tag = "button";
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    /**
     * 执行命令
     * @param editor editor
     * @param value 是否有 mark
     */
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default ClearStyleMenu;
