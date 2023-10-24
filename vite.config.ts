import { PluginOption, defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
// Import Rollup Plugin Visualizer for bundle visualization
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), visualizer() as PluginOption],
  /* Set the 'src' alias to '@' */
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build: {
    // Dist dir name
    assetsDir: 'kun',
  },
  server: { host: '127.0.0.1', port: 1007 },
  // Suppress i18n warnings
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },
})
