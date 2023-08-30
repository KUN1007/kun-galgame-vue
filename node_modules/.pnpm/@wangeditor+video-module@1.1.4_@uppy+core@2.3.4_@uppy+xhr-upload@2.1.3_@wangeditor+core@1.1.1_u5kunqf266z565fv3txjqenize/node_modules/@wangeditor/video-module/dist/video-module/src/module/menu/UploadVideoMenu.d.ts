/**
 * @description upload video menu
 * @author wangfupeng
 */
import { IButtonMenu, IDomEditor } from '@wangeditor/core';
declare class UploadVideoMenu implements IButtonMenu {
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1056 1024\"><path d=\"M805.902261 521.819882a251.441452 251.441452 0 0 0-251.011972 246.600033 251.051015 251.051015 0 1 0 502.023944 8.823877 253.237463 253.237463 0 0 0-251.011972-255.42391z m59.463561 240.001647v129.898403h-116.701631v-129.898403h-44.041298l101.279368-103.504859 101.279368 103.504859z\" p-id=\"6802\"></path><path d=\"M788.254507 0.000781H99.094092A98.663439 98.663439 0 0 0 0.001171 99.093701v590.067495a98.663439 98.663439 0 0 0 99.092921 99.092921h411.7549a266.434235 266.434235 0 0 1-2.186448-41.815807 275.843767 275.843767 0 0 1 275.180024-270.729042 270.650955 270.650955 0 0 1 103.504859 19.834201V99.093701A101.51363 101.51363 0 0 0 788.254507 0.000781zM295.054441 640.747004V147.507894l394.146189 246.600033z\"></path></svg>";
    readonly tag = "button";
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
    isDisabled(editor: IDomEditor): boolean;
    private getMenuConfig;
}
export default UploadVideoMenu;
