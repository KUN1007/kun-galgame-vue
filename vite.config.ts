import { PluginOption, defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
// 引入 Rollup Plugin Visualizer 打包可视化工具
import { visualizer } from 'rollup-plugin-visualizer'
// 导入 vite tsx 支持
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), visualizer() as PluginOption, vueJsx()],
  /* src 别名为 @ */
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // 消除 i18n 警告
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },
})
