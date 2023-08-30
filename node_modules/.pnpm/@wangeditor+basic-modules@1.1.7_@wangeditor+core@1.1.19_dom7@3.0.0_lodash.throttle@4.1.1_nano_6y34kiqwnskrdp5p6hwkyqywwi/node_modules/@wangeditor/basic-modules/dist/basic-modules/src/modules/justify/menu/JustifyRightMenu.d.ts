/**
 * @description justify right menu
 * @author wangfupeng
 */
import { IDomEditor } from '@wangeditor/core';
import BaseMenu from './BaseMenu';
declare class JustifyRightMenu extends BaseMenu {
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1024 1024\"><path d=\"M972.8 793.6v102.4H256v-102.4h716.8z m0-230.4v102.4H51.2v-102.4h921.6z m0-230.4v102.4H256v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z\"></path></svg>";
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default JustifyRightMenu;
