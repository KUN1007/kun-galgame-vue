/**
 * @description image menu entry
 * @author wangfupeng
 */
import InsertImage from './InsertImage';
import DeleteImage from './DeleteImage';
import EditImage from './EditImage';
import ViewImageLink from './ViewImageLink';
import ImageWidth30 from './Width30';
import ImageWidth50 from './Width50';
import ImageWidth100 from './Width100';
export declare const insertImageMenuConf: {
    key: string;
    factory(): InsertImage;
    config: {
        onInsertedImage(imageElem: import("../custom-types").ImageElement): void;
        onUpdatedImage(node: import("../custom-types").ImageElement | null): void;
        checkImage(src: string, alt: string, href: string): string | boolean | undefined;
        parseImageSrc(src: string): string;
    };
};
export declare const deleteImageMenuConf: {
    key: string;
    factory(): DeleteImage;
};
export declare const editImageMenuConf: {
    key: string;
    factory(): EditImage;
    config: {
        onInsertedImage(imageElem: import("../custom-types").ImageElement): void;
        onUpdatedImage(node: import("../custom-types").ImageElement | null): void;
        checkImage(src: string, alt: string, href: string): string | boolean | undefined;
        parseImageSrc(src: string): string;
    };
};
export declare const viewImageLinkMenuConf: {
    key: string;
    factory(): ViewImageLink;
};
export declare const imageWidth30MenuConf: {
    key: string;
    factory(): ImageWidth30;
};
export declare const imageWidth50MenuConf: {
    key: string;
    factory(): ImageWidth50;
};
export declare const imageWidth100MenuConf: {
    key: string;
    factory(): ImageWidth100;
};
