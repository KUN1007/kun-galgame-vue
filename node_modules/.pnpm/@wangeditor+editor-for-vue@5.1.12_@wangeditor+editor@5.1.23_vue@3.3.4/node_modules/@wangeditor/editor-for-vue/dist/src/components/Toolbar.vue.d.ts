import { PropType } from 'vue';
import { IToolbarConfig, IDomEditor } from '@wangeditor/editor';
declare const _default: import("vue").DefineComponent<{
    editor: {
        type: PropType<IDomEditor>;
    };
    /** 编辑器模式 */
    mode: {
        type: StringConstructor;
        default: string;
    };
    /** 编辑器默认配置 */
    defaultConfig: {
        type: PropType<Partial<IToolbarConfig>>;
        default: {};
    };
}, {
    selector: import("vue").Ref<null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    editor?: unknown;
    mode?: unknown;
    defaultConfig?: unknown;
} & {
    mode: string;
    defaultConfig: Partial<IToolbarConfig>;
} & {
    editor?: IDomEditor | undefined;
}>, {
    mode: string;
    defaultConfig: Partial<IToolbarConfig>;
}>;
export default _default;
