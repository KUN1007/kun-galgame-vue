import { Key, VNode, VNodeData } from "./vnode";
import { ArrayOrElement } from "./h";
declare namespace JSXInternal {
    type Element = VNode;
    interface IntrinsicElements {
        [elemName: string]: VNodeData;
    }
}
export declare type JsxVNodeChild = VNode | string | number | boolean | undefined | null;
export declare type JsxVNodeChildren = ArrayOrElement<JsxVNodeChild>;
export declare type FunctionComponent = (props: {
    [prop: string]: any;
} | null, children?: VNode[]) => VNode;
export declare function Fragment(data: {
    key?: Key;
} | null, ...children: JsxVNodeChildren[]): VNode;
/**
 * jsx/tsx compatible factory function
 * see: https://www.typescriptlang.org/docs/handbook/jsx.html#factory-functions
 */
export declare function jsx(tag: string | FunctionComponent, data: VNodeData | null, ...children: JsxVNodeChildren[]): VNode;
export declare namespace jsx {
    export import JSX = JSXInternal;
}
export {};
