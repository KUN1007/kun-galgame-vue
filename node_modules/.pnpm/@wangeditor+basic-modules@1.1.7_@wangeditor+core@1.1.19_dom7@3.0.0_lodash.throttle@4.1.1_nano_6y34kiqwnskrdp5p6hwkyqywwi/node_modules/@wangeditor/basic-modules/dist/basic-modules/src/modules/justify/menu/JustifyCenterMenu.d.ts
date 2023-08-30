/**
 * @description justify center menu
 * @author wangfupeng
 */
import { IDomEditor } from '@wangeditor/core';
import BaseMenu from './BaseMenu';
declare class JustifyCenterMenu extends BaseMenu {
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1024 1024\"><path d=\"M870.4 793.6v102.4H153.6v-102.4h716.8z m102.4-230.4v102.4H51.2v-102.4h921.6z m-102.4-230.4v102.4H153.6v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z\"></path></svg>";
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default JustifyCenterMenu;
