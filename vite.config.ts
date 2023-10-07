import { PluginOption, defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
// 引入 Rollup Plugin Visualizer 打包可视化工具
import { visualizer } from 'rollup-plugin-visualizer'
// 导入 vite tsx 支持
import vueJsx from '@vitejs/plugin-vue-jsx'
// 导入 vite https 支持
// import mkcert from 'vite-plugin-mkcert'
// import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), visualizer() as PluginOption, vueJsx()],
  /* src 别名为 @ */
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    /** 是否开启 HTTPS */
    https: false,
    /** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
    host: '127.0.0.1', // host: "0.0.0.0"
    /** 端口号 */
    port: 1007,
    /** 是否自动打开浏览器 */
    open: true,
    /** 跨域设置允许 */
    cors: true,
    /** 端口被占用时，是否直接退出 */
    strictPort: true,
    /** 接口代理 */
    proxy: {},
  },
  build: {
    /** 打包大小超过 500kb 警告 */
    chunkSizeWarningLimit: 500,
    /** Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效 */
    minify: 'terser',
    /** 在打包代码时移除 console.log、debugger 和 注释 */
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true,
        pure_funcs: ['console.log'],
      },
      format: {
        /** 删除注释 */
        comments: false,
      },
    },
    /** 打包后静态资源目录 */
    assetsDir: 'kun',
  },
  // 消除 i18n 警告
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },
})
