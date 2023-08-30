import { VNode } from "../vnode";
import { Module } from "./module";
declare type Listener<T> = (this: VNode, ev: T, vnode: VNode) => void;
export declare type On = {
    [N in keyof HTMLElementEventMap]?: Listener<HTMLElementEventMap[N]> | Array<Listener<HTMLElementEventMap[N]>>;
} & {
    [event: string]: Listener<any> | Array<Listener<any>>;
};
export declare const eventListenersModule: Module;
export {};
