import { PropType } from 'vue';
import { IEditorConfig, SlateDescendant } from '@wangeditor/editor';
declare const _default: import("vue").DefineComponent<{
    /** 编辑器模式 */
    mode: {
        type: StringConstructor;
        default: string;
    };
    /** 编辑器默认内容 */
    defaultContent: {
        type: PropType<SlateDescendant[]>;
        default: never[];
    };
    defaultHtml: {
        type: StringConstructor;
        default: string;
    };
    /** 编辑器默认配置 */
    defaultConfig: {
        type: PropType<Partial<IEditorConfig>>;
        default: {};
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}, {
    box: import("vue").Ref<null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    mode?: unknown;
    defaultContent?: unknown;
    defaultHtml?: unknown;
    defaultConfig?: unknown;
    modelValue?: unknown;
} & {
    mode: string;
    defaultContent: SlateDescendant[];
    defaultHtml: string;
    defaultConfig: Partial<IEditorConfig>;
    modelValue: string;
} & {}>, {
    mode: string;
    defaultContent: SlateDescendant[];
    defaultHtml: string;
    defaultConfig: Partial<IEditorConfig>;
    modelValue: string;
}>;
export default _default;
