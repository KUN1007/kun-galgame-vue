/**
 * @description create toolbar
 * @author wangfupeng
 */
import { IDomEditor } from '../editor/interface';
import Toolbar from '../menus/bar/Toolbar';
import { IToolbarConfig } from '../config/interface';
import { DOMElement } from '../utils/dom';
interface ICreateOption {
    selector: string | DOMElement;
    config?: Partial<IToolbarConfig>;
}
export default function (editor: IDomEditor | null, option: ICreateOption): Toolbar;
export {};
