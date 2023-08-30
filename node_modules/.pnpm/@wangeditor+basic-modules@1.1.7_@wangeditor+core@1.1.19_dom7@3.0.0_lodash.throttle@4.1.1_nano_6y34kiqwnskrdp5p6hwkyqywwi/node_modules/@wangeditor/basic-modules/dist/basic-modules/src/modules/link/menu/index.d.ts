/**
 * @description link menu entry
 * @author wangfupeng
 */
import InsertLink from './InsertLink';
import EditLink from './EditLink';
import UnLink from './UnLink';
import ViewLink from './ViewLink';
declare const insertLinkMenuConf: {
    key: string;
    factory(): InsertLink;
    config: {
        checkLink(text: string, url: string): string | boolean | undefined;
        parseLinkUrl(url: string): string;
    };
};
declare const editLinkMenuConf: {
    key: string;
    factory(): EditLink;
    config: {
        checkLink(text: string, url: string): string | boolean | undefined;
        parseLinkUrl(url: string): string;
    };
};
declare const unLinkMenuConf: {
    key: string;
    factory(): UnLink;
};
declare const viewLinkMenuConf: {
    key: string;
    factory(): ViewLink;
};
export { insertLinkMenuConf, editLinkMenuConf, unLinkMenuConf, viewLinkMenuConf };
