/**
 * @description prismjs
 * @author wangfupeng
 */
import { Text } from 'slate';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-visual-basic';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-lua';
import 'prismjs/components/prism-groovy';
export declare const prismTokenTypes: string[];
/**
 * 获取 prism token 的字符串长度
 * @param token prism token
 */
export declare function getPrismTokenLength(token: any): any;
/**
 * 获取 prism 解析的 token 列表
 * @param textNode text node
 * @param language 代码语言
 */
export declare function getPrismTokens(textNode: Text, language: string): (string | Prism.Token)[];
