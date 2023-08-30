import { PreHook, CreateHook, UpdateHook, DestroyHook, RemoveHook, PostHook } from "../hooks";
export declare type Module = Partial<{
    pre: PreHook;
    create: CreateHook;
    update: UpdateHook;
    destroy: DestroyHook;
    remove: RemoveHook;
    post: PostHook;
}>;
