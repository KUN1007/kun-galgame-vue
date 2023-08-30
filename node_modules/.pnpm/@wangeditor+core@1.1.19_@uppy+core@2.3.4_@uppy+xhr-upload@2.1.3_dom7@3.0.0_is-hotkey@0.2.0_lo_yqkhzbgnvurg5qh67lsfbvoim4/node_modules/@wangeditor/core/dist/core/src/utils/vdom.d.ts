/**
 * @description vdom 相关方法
 * @author wangfupeng
 */
import { VNode, VNodeStyle, Props, Dataset } from 'snabbdom';
export declare type PatchFn = (oldVnode: VNode | Element, vnode: VNode) => VNode;
/**
 * 创建 snabbdom patch
 * @returns snabbdom patch 函数
 */
export declare function genPatchFn(): PatchFn;
/**
 * 整理 vnode.data ，将暴露出来的零散属性（如 id className data-xxx）放在 data.props 或 data.dataset
 * @param vnode vnode
 */
export declare function normalizeVnodeData(vnode: VNode): void;
/**
 * 给 vnode 添加 prop
 * @param vnode vnode
 * @param newProp { key: val }
 */
export declare function addVnodeProp(vnode: VNode, newProp: Props): void;
/**
 * 给 vnode 添加 dataset
 * @param vnode vnode
 * @param newDataset { key: val }
 */
export declare function addVnodeDataset(vnode: VNode, newDataset: Dataset): void;
/**
 * 给 vnode 添加样式
 * @param vnode vnode
 * @param newStyle { key: val }
 */
export declare function addVnodeStyle(vnode: VNode, newStyle: VNodeStyle): void;
