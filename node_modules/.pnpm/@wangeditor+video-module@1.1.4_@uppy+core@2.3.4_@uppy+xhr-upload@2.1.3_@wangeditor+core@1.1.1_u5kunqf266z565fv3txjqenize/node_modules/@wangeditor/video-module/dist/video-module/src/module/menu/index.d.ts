/**
 * @description video menu
 * @author wangfupeng
 */
import InsertVideoMenu from './InsertVideoMenu';
import UploadVideoMenu from './UploadVideoMenu';
import EditorVideoSizeMenu from './EditVideoSizeMenu';
export declare const insertVideoMenuConf: {
    key: string;
    factory(): InsertVideoMenu;
    config: {
        onInsertedVideo(node: import("../custom-types").VideoElement): void;
        checkVideo(src: string, poster: string): string | boolean | undefined;
        parseVideoSrc(src: string): string;
    };
};
export declare const uploadVideoMenuConf: {
    key: string;
    factory(): UploadVideoMenu;
    config: import("./config").IUploadConfigForVideo;
};
export declare const editorVideSizeMenuConf: {
    key: string;
    factory(): EditorVideoSizeMenu;
};
