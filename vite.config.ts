import { PluginOption, defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
// 引入 Rollup Plugin Visualizer 打包可视化工具
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), visualizer() as PluginOption],
  /* src 别名为 @ */
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/index.scss" as *;`,
      },
    },
  },
})
