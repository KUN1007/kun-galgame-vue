/**
 * @description vdom utils fn
 * @author wangfupeng
 */
import { VNode, VNodeStyle } from 'snabbdom';
/**
 * 给 vnode 添加 className
 * @param vnode vnode
 * @param className css class
 */
export declare function addVnodeClassName(vnode: VNode, className: string): void;
/**
 * 给 vnode 添加样式
 * @param vnode vnode
 * @param newStyle { key: val }
 */
export declare function addVnodeStyle(vnode: VNode, newStyle: VNodeStyle): void;
