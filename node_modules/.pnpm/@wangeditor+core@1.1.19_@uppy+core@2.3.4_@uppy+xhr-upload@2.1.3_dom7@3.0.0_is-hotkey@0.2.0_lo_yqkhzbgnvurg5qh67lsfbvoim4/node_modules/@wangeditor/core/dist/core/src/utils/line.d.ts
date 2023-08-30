/**
 * @description Utilities for single-line deletion
 */
import { Range } from 'slate';
import { IDomEditor } from '../editor/interface';
/**
 * A helper utility that returns the end portion of a `Range`
 * which is located on a single line.
 *
 * @param {Editor} editor The editor object to compare against
 * @param {Range} parentRange The parent range to compare against
 * @returns {Range} A valid portion of the parentRange which is one a single line
 */
export declare const findCurrentLineRange: (editor: IDomEditor, parentRange: Range) => Range;
